import React from 'react';
import { notFound } from 'next/navigation';
import { forensicSoftwareTools } from '../../../data/forensic-software-tools';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ProductDetailHero from '../../../components/ProductDetailHero';
import ProductFeatures from '../../../components/ProductFeatures';
import ProductSpecifications from '../../../components/ProductSpecifications';
import ProductUseCases from '../../../components/ProductUseCases';
import ProductDetailCTA from '../../../components/ProductDetailCTA';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return forensicSoftwareTools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const tool = forensicSoftwareTools.find((t) => t.slug === slug);
  
  if (!tool) {
    return {
      title: 'Tool Not Found | DAK Security',
    };
  }

  return {
    title: `${tool.name} | DAK Security`,
    description: tool.shortDescription,
  };
}

export default async function ForensicSoftwareDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = forensicSoftwareTools.find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <ProductDetailHero
          title={tool.name}
          description={tool.shortDescription}
          category="forensic-software"
        />

        <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight mb-8">
                Overview
              </h2>
              <div className="prose prose-lg max-w-none">
                {tool.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProductFeatures features={tool.features} />
        <ProductSpecifications specifications={tool.specifications} />
        <ProductUseCases useCases={tool.useCases} />

        <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
                Key Benefits
              </h2>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tool.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300"
                >
                  <svg className="w-6 h-6 mr-4 mt-0.5 flex-shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProductDetailCTA productName={tool.name} />
      </main>
      <Footer />
    </>
  );
}
