'use client';

import { useEffect, useState } from 'react';

const trustBadges = [
  {
    title: 'CERT-In Empanelled',
    description: 'Certified by Indian Computer Emergency Response Team',
  },
  {
    title: 'ISO 27001',
    description: 'Information Security Management Certified',
  },
  {
    title: 'ISO 9001',
    description: 'Quality Management Certified',
  },
  {
    title: 'CMMI Level 3',
    description: 'Capability Maturity Model Integration',
  },
  {
    title: 'GDPR Compliant',
    description: 'Data Protection Regulation Compliant',
  },
  {
    title: 'SOC 2 Type II',
    description: 'Service Organization Control Certified',
  },
];

const expertise = [
  'CISSP, CISM, CISA, ISO 27001 and related security standards',
  'Defence-oriented cyber intelligence practices',
  'Digital forensics and incident investigation',
  'Security operations and risk assessment',
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
    <section id="certifications" className="bg-[var(--color-bg-secondary)] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto mb-16 max-w-6xl rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(16,33,49,0.95),rgba(11,25,37,0.95))] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.18)] transition-all duration-700 sm:px-10 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Trust and Certifications
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
              Industry-recognized certifications that validate our commitment to excellence and security.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {trustBadges.map((badge, index) => (
              <div
                key={badge.title}
                className={`flex min-h-[164px] flex-col items-center rounded-2xl border border-[var(--color-border)] bg-[rgba(10,21,32,0.84)] px-4 py-6 text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${0.1 + index * 0.06}s` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(22,41,61,0.9)] text-[var(--color-text-primary)]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-[var(--color-text-primary)]">
                  {badge.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-[var(--color-text-secondary)]">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p
            className={`text-sm font-semibold text-[var(--color-accent)] tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Experience and Capability
          </p>
          <p
            className={`text-xl text-[var(--color-text-secondary)] leading-relaxed transition-all duration-700 sm:text-2xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Your systems are handled by seasoned professionals with certified expertise and experience in critical environments.
          </p>
        </div>

        <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2 items-stretch">
          <div
            className={`flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(17,35,53,0.96),rgba(12,26,38,0.96))] p-8 transition-all duration-700 lg:p-10 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
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
            <ul className="space-y-3 text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base">
              {expertise.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(17,35,53,0.96),rgba(12,26,38,0.96))] p-8 transition-all duration-700 lg:p-10 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.3s' }}
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
            <ul className="space-y-3 text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base">
              {sectors.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
