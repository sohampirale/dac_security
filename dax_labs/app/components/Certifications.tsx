'use client';

import { useEffect, useState } from 'react';

const certifications = [
  'CIISSP', 'CISM', 'CISA', 'ISO 27001', 'ISO 27701', 'ISO 22301'
];

const expertise = [
  'Defence-oriented cyber intelligence practices',
  'Digital forensics and incident investigation',
  'Security operations and risk assessment',
  'Cloud security and compliance',
];

const sectors = [
  'Defence, law enforcement, and intelligence environments',
  'Financial systems, fintech, and banking infrastructure',
  'Government, public sector, and regulatory systems',
  'Healthcare, legal, and sensitive data ecosystems',
  'Enterprise, industrial, and operational technology environments',
];

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('certifications');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="certifications" className="py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p
            className={`text-sm font-semibold text-[var(--color-accent)] tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            TRUST & CREDIBILITY
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Experience and Capability
          </h2>
          <p
            className={`mt-6 text-xl text-[var(--color-text-secondary)] leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Your systems are handled by seasoned professionals with certified expertise and experience in critical environments.
          </p>
        </div>

        {/* Certifications badges */}
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {certifications.map((cert, index) => (
            <div
              key={cert}
              className={`px-6 py-3 bg-[var(--color-bg-primary)] border-2 border-[var(--color-border)] rounded-full text-sm font-semibold text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              {cert}
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Block 1: Certified Expertise */}
          <div
            className={`bg-[var(--color-bg-primary)] rounded-2xl border-2 border-[var(--color-border)] p-8 lg:p-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[var(--color-text-primary)]">
                Certified Expertise
              </h3>
            </div>
            <ul className="space-y-4">
              {expertise.map((item, index) => (
                <li key={index} className="flex items-start text-[var(--color-text-secondary)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Block 2: Applicable Across Critical Sectors */}
          <div
            className={`bg-[var(--color-bg-primary)] rounded-2xl border-2 border-[var(--color-border)] p-8 lg:p-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[var(--color-text-primary)]">
                Applicable Across Critical Sectors
              </h3>
            </div>
            <ul className="space-y-4">
              {sectors.map((item, index) => (
                <li key={index} className="flex items-start text-[var(--color-text-secondary)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
