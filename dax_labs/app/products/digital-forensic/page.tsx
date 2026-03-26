'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { digitalForensicProducts } from '../../data/digital-forensic-products';
import {
  WorkstationIcon,
  CrackingIcon,
  ShieldingIcon,
} from '../../components/icons/product-icons';

const iconMap: Record<string, React.ComponentType> = {
  workstation: WorkstationIcon,
  cracking: CrackingIcon,
  shielding: ShieldingIcon,
};

export default function DigitalForensicProductsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-gradient-start)] to-[var(--color-bg-gradient-end)] opacity-50"></div>
          <div className="absolute top-20 right-0 w-64 h-64 bg-[var(--color-accent-subtle)] rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-accent-subtle)] rounded-full blur-3xl opacity-20"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-[var(--color-text-muted)] mb-8">
              <a href="/" className="hover:text-[var(--color-accent)] transition-colors">Home</a>
              <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <a href="/products" className="hover:text-[var(--color-accent)] transition-colors">Products</a>
              <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[var(--color-text-primary)] font-medium">Digital Forensic</span>
            </nav>

            {/* Hero Content */}
            <div className="max-w-4xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-bg-primary)] rounded-xl border border-[var(--color-border)] text-[var(--color-accent)] mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight">
                DIGITAL FORENSIC PRODUCTS
              </h1>
              <p className="mt-6 text-xl text-[var(--color-text-secondary)] leading-relaxed">
                Specialized forensic hardware and equipment for digital investigations, evidence collection, and forensic analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {digitalForensicProducts.map((product, index) => {
                const IconComponent = iconMap[product.iconKey] || WorkstationIcon;
                return (
                  <a
                    key={product.name}
                    href={`/products/digital-forensic/${product.slug}`}
                    className="group p-6 bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300 hover-lift flex flex-col"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-light)] transition-colors duration-300">
                      <IconComponent />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-[var(--color-text-primary)]">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed flex-grow">
                      {product.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center text-[var(--color-accent)] text-sm font-semibold">
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

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[var(--color-bg-primary)] rounded-2xl border border-[var(--color-border)] p-8 sm:p-12 lg:p-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-accent)] text-[var(--color-text-light)] rounded-xl mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
                Need Help Setting Up a Forensic Lab?
              </h2>
              <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
                Contact our forensic specialists for complete lab setup consultation and equipment recommendations.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-light)] bg-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent-hover)] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg w-full sm:w-auto">
                  Request a Quote
                </a>
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] bg-transparent border-2 border-[var(--color-accent)] rounded-md hover:bg-[var(--color-bg-tertiary)] transition-all duration-300 transform hover:translate-y-[-2px] w-full sm:w-auto">
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
