import React from 'react';
import { notFound } from 'next/navigation';
import { digitalForensicProducts } from '../../../data/digital-forensic-products';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ProductDetailHero from '../../../components/ProductDetailHero';
import ProductFeatures from '../../../components/ProductFeatures';
import ProductSpecifications from '../../../components/ProductSpecifications';
import ProductRelated from '../../../components/ProductRelated';
import ProductDetailCTA from '../../../components/ProductDetailCTA';
import {
  WorkstationIcon,
  CrackingIcon,
  ShieldingIcon,
} from '../../../components/icons/product-icons';

const iconMap: Record<string, React.ComponentType> = {
  workstation: WorkstationIcon,
  cracking: CrackingIcon,
  shielding: ShieldingIcon,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return digitalForensicProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = digitalForensicProducts.find((p) => p.slug === slug);
  
  if (!product) {
    return {
      title: 'Product Not Found | DAK Security',
    };
  }

  return {
    title: `${product.name} | DAK Security`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = digitalForensicProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const IconComponent = iconMap[product.iconKey] || WorkstationIcon;

  return (
    <>
      <Header />
      <main>
        <ProductDetailHero
          title={product.name}
          description={product.shortDescription}
          icon={<IconComponent />}
          category={product.category}
        />

        <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight mb-8">
                Overview
              </h2>
              <div className="prose prose-lg max-w-none">
                {product.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProductFeatures features={product.features} />
        <ProductSpecifications specifications={product.specifications} />

        <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
                Applications
              </h2>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.applications.map((application, index) => (
                <div
                  key={index}
                  className="group p-6 bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300 hover-lift"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-[var(--color-accent)] text-[var(--color-text-light)] rounded-lg mb-4">
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {application}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
                Key Benefits
              </h2>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.benefits.map((benefit, index) => (
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

        <ProductRelated products={product.relatedProducts} />
        <ProductDetailCTA productName={product.name} />
      </main>
      <Footer />
    </>
  );
}
