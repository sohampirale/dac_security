'use client';

import { useEffect, useState } from 'react';

const methodologySteps = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'We identify risks across your systems, infrastructure, and processes through comprehensive assessment.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'ANALYZE',
    description: 'We understand how these risks behave and how they affect your systems together as one integrated environment.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'SECURE',
    description: 'We take disciplined action to secure and strengthen your systems with military-grade practices.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'MONITOR',
    description: 'Continuous surveillance and real-time threat detection to maintain your security posture.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
];

export default function ServicesMethodology() {
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

    const element = document.getElementById('methodology');
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
    <section id="methodology" className="py-24 lg:py-32 bg-[var(--color-bg-secondary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p
            className={`text-sm font-semibold text-[var(--color-accent)] tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            HOW WE WORK
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Our Proven Methodology
          </h2>
          <p
            className={`mt-6 text-xl text-[var(--color-text-secondary)] leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            A systematic approach to protecting your digital assets.
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologySteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${0.3 + index * 0.15}s`, transition: 'all 0.7s ease-out' }}
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-16 h-16 mx-auto bg-[var(--color-bg-primary)] border-2 border-[var(--color-accent)] rounded-full flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:scale-110 transition-all duration-300">
                  <span className="text-lg font-bold text-[var(--color-accent)] group-hover:text-[var(--color-text-light)] transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="mt-6 flex justify-center">
                  <div className="w-14 h-14 bg-[var(--color-bg-tertiary)] rounded-lg flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-light)] transition-all duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-[var(--color-text-primary)] text-center group-hover:text-[var(--color-accent)] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-[var(--color-text-secondary)] text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
