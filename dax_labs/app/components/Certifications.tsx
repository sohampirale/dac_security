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
            Your systems are handled by seasoned professionals with certified expertise and experience
            in critical and sensitive environments.
          </p>
        </div>

          <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2 items-stretch">
            <div
              key="certified"
              tabIndex={0}
              className={`group relative flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(17,35,53,0.96),rgba(12,26,38,0.96))] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[rgba(0,0,0,0.36)] hover:border-[var(--color-accent)] focus-within:scale-[1.01] overflow-hidden lg:p-10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="absolute top-0 right-0 w-10 h-10 border-r-2 border-t-2 border-transparent group-hover:border-[var(--color-accent)] transition-all duration-300 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-l-2 border-b-2 border-transparent group-hover:border-[var(--color-accent)] transition-all duration-300 rounded-bl-2xl" />
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--color-accent)] group-hover:w-full transition-all duration-500 rounded-full" />
              <div className="absolute inset-y-6 left-6 w-1 rounded-r-full bg-gradient-to-b from-[rgba(0,212,170,0.9)] to-transparent opacity-60" />
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[var(--color-text-primary)]">Certified Expertise</h3>
              </div>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base lg:grid-cols-2">
                {expertise.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`${index === 0 ? 'font-semibold text-[var(--color-text-primary)]' : ''}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              key="sectors"
              tabIndex={0}
              className={`group relative flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(17,35,53,0.96),rgba(12,26,38,0.96))] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[rgba(0,0,0,0.36)] hover:border-[var(--color-accent)] focus-within:scale-[1.01] overflow-hidden lg:p-10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="absolute top-0 right-0 w-10 h-10 border-r-2 border-t-2 border-transparent group-hover:border-[var(--color-accent)] transition-all duration-300 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-l-2 border-b-2 border-transparent group-hover:border-[var(--color-accent)] transition-all duration-300 rounded-bl-2xl" />
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--color-accent)] group-hover:w-full transition-all duration-500 rounded-full" />
              <div className="absolute inset-y-6 left-6 w-1 rounded-r-full bg-gradient-to-b from-[rgba(0,212,170,0.9)] to-transparent opacity-60" />
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[var(--color-text-primary)]">Applicable Across Critical Sectors</h3>
              </div>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base lg:grid-cols-2">
                {sectors.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`${index === 0 ? 'font-semibold text-[var(--color-text-primary)]' : ''}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </div>
    </section>
  );
}
