'use client';

import React from 'react';
import { itSecurityProducts as defaultProducts } from '../data/it-security-products';
import type { ProductData } from '../data/it-security-products';
import { useContentData } from '../data/useContentData';
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
} from './icons/product-icons';

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

export default function ProductsCatalog() {
  const products = useContentData<ProductData[]>('it-security-products.json', defaultProducts);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            IT SECURITY PRODUCTS
          </h2>
          <p className="mt-4 text-sm sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Enterprise-grade security products and solutions to protect your digital infrastructure from advanced cyber threats.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {(products || []).map((product, index) => {
            const IconComponent = iconMap[product.iconKey] || WafIcon;
            return (
              <a
                key={product.slug || product.name}
                href={`/products/it-security/${product.slug}`}
                className="group p-6 bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300 hover-lift flex flex-col"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-light)] transition-colors duration-300">
                  <IconComponent />
                </div>

                {/* Product Name */}
                <h3 className="mt-5 text-lg font-semibold text-[var(--color-text-primary)]">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed flex-grow">
                  {product.shortDescription || (product as any).description}
                </p>

                {/* Learn More Link */}
                <div className="mt-4 pt-4 border-t border-[var(--color-border)] flex items-center text-[var(--color-accent)] text-sm font-semibold">
                  Learn More
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
