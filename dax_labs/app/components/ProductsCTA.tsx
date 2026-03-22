'use client';

import { useState } from 'react';
import ProductInquiryForm from './ProductInquiryForm';

type FormType = 'demo' | 'quote' | 'sales';

export default function ProductsCTA() {
  const [activeForm, setActiveForm] = useState<FormType | null>(null);

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            READY TO ENHANCE YOUR SECURITY POSTURE?
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Contact our product specialists to discuss your requirements and get a customized security solution recommendation.
          </p>
        </div>

        {/* CTA Buttons */}
        {!activeForm && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setActiveForm('demo')}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-light)] bg-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent-hover)] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Request Product Demo
            </button>
            <button
              onClick={() => setActiveForm('quote')}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] bg-transparent border-2 border-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent)] hover:text-[var(--color-text-light)] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Get a Quote
            </button>
            <button
              onClick={() => setActiveForm('sales')}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] bg-transparent border-2 border-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent)] hover:text-[var(--color-text-light)] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Talk to Sales
            </button>
          </div>
        )}

        {/* Form Section */}
        {activeForm && (
          <div className="max-w-2xl mx-auto mb-12">
            <ProductInquiryForm formType={activeForm} />
            
            {/* Back to buttons */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setActiveForm(null)}
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors font-medium"
              >
                ← Back to options
              </button>
            </div>
          </div>
        )}

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-4">
              Or contact us directly
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[var(--color-text-secondary)]">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+911204545911" className="hover:text-[var(--color-accent)] transition-colors">
                  +91-120-454-5911
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:18001202394" className="hover:text-[var(--color-accent)] transition-colors">
                  Toll-Free: 1800-120-2394
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@daksecurity.com" className="hover:text-[var(--color-accent)] transition-colors">
                  contact@daksecurity.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
