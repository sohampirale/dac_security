'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { forensicSoftwareTools } from '../../data/forensic-software-tools';

export default function ForensicSoftwareToolsPage() {
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
            <nav className="flex items-center text-sm text-[var(--color-text-muted)] mb-8">
              <a href="/" className="hover:text-[var(--color-accent)] transition-colors">Home</a>
              <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <a href="/products" className="hover:text-[var(--color-accent)] transition-colors">Products</a>
              <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[var(--color-text-primary)] font-medium">Forensic Software</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-bg-primary)] rounded-xl border border-[var(--color-border)] text-[var(--color-accent)] mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight">
                FORENSIC SOFTWARE TOOLS
              </h1>
              <p className="mt-6 text-xl text-[var(--color-text-secondary)] leading-relaxed">
                Comprehensive suite of forensic software tools for digital evidence collection, analysis, and reporting.
              </p>
            </div>
          </div>
        </section>

        {/* Accordion List */}
        <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {forensicSoftwareTools.map((tool, index) => (
                <ForensicToolAccordion key={tool.slug} tool={tool} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[var(--color-bg-primary)] rounded-2xl border border-[var(--color-border)] p-8 sm:p-12 lg:p-16 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
                Need a Complete Forensic Lab Setup?
              </h2>
              <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
                Contact our forensic specialists for comprehensive lab planning and equipment recommendations.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-light)] bg-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent-hover)] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg w-full sm:w-auto">
                  Request Consultation
                </a>
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] bg-transparent border-2 border-[var(--color-accent)] rounded-md hover:bg-[var(--color-bg-tertiary)] transition-all duration-300 transform hover:translate-y-[-2px] w-full sm:w-auto">
                  Download Catalog
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

function ForensicToolAccordion({ tool, index }: { tool: any; index: number }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[var(--color-bg-tertiary)] transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-accent)]">
            <span className="text-lg font-bold">{index + 1}</span>
          </div>
          <span className="text-lg font-semibold text-[var(--color-text-primary)]">
            {tool.name}
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-[var(--color-text-muted)] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6">
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            {tool.shortDescription}
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {tool.features.map((feature: string) => (
              <div key={feature} className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[var(--color-text-muted)]">{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <a
              href={`/products/forensic-software/${tool.slug}`}
              className="inline-flex items-center text-[var(--color-accent)] font-semibold hover:underline"
            >
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
