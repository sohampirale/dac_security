import React from 'react';
import { notFound } from 'next/navigation';
import { itSecurityProducts } from '../../../data/it-security-products';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ProductDetailHero from '../../../components/ProductDetailHero';
import ProductFeatures from '../../../components/ProductFeatures';
import ProductSpecifications from '../../../components/ProductSpecifications';
import ProductUseCases from '../../../components/ProductUseCases';
import ProductRelated from '../../../components/ProductRelated';
import ProductDetailCTA from '../../../components/ProductDetailCTA';
import {
  WafIcon,
  DdosIcon,
  PerformanceIcon,
  VpnIcon,
  DnsIcon,
  SiemIcon,
  EmailIcon,
  DlpIcon,
  EdrIcon,
  ScannerIcon,
  PatchIcon,
  PenTestIcon,
  CodeIcon,
  LogIcon,
} from '../../../components/icons/product-icons';

const iconMap: Record<string, React.ComponentType> = {
  waf: WafIcon,
  ddos: DdosIcon,
  performance: PerformanceIcon,
  vpn: VpnIcon,
  dns: DnsIcon,
  siem: SiemIcon,
  email: EmailIcon,
  dlp: DlpIcon,
  edr: EdrIcon,
  scanner: ScannerIcon,
  patch: PatchIcon,
  pentest: PenTestIcon,
  code: CodeIcon,
  log: LogIcon,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return itSecurityProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = itSecurityProducts.find((p) => p.slug === slug);
  
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
  const product = itSecurityProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const IconComponent = iconMap[product.iconKey] || WafIcon;

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <ProductDetailHero
          title={product.name}
          description={product.shortDescription}
          icon={<IconComponent />}
          category={product.category}
        />

        {/* Full Description */}
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

        {/* Features */}
        <ProductFeatures features={product.features} />

        {/* Specifications */}
        <ProductSpecifications specifications={product.specifications} />

        {/* Use Cases */}
        <ProductUseCases useCases={product.useCases} />

        {/* Benefits */}
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
                  <svg
                    className="w-6 h-6 mr-4 mt-0.5 flex-shrink-0 text-[var(--color-accent)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products */}
        <ProductRelated products={product.relatedProducts} />

        {/* CTA */}
        <ProductDetailCTA productName={product.name} />
      </main>
      <Footer />
    </>
  );
}
