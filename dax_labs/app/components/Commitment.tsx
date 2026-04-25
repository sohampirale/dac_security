'use client';

import { useEffect, useState } from 'react';

const commitments = [
  {
    title: 'CARE & RESPONSIBILITY',
    description: 'We treat every system with the same level of care and responsibility – no matter the size or type of organisation.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'UNDERSTAND FIRST',
    description: 'We first understand how your systems work, where the risks are, and what needs to be protected.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'STRUCTURED PRACTICE',
    description: 'Then we apply structured and disciplined security practices to reduce those risks and strengthen your systems.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'CLEAR & DOCUMENTED',
    description: 'Everything we do is clear, documented, and aligned with how your organisation operates.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function Commitment() {
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

    const element = document.getElementById('who-we-are');
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
    <section id="who-we-are" className="relative overflow-hidden bg-[var(--color-bg-primary)] py-24 transition-colors duration-300 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-20 h-56 w-56 rounded-full bg-[rgba(32,215,181,0.1)] blur-3xl" />
        <div className="absolute bottom-6 right-[10%] h-64 w-64 rounded-full bg-[rgba(47,144,255,0.09)] blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p
            className={`text-sm font-semibold text-[var(--color-accent)] tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            WHO WE ARE
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Our Work Ethics
          </h2>
          <p
            className={`mt-6 text-lg text-[var(--color-text-secondary)] leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Built on four foundational principles that guide every decision and action we take.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {commitments.map((item, index) => (
            <div
              key={item.title}
              className={`group relative rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(18,36,54,0.96),rgba(11,25,38,0.96))] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-accent)] lg:p-10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-transparent group-hover:border-[var(--color-accent)] transition-all duration-300 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-transparent group-hover:border-[var(--color-accent)] transition-all duration-300 rounded-bl-2xl" />

              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-bg-tertiary)] rounded-xl text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-light)] transition-all duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="mt-8 text-xl lg:text-2xl font-bold text-[var(--color-text-primary)] tracking-wide group-hover:text-[var(--color-accent)] transition-colors">
                {item.title}
              </h3>

              <p className="mt-4 text-sm lg:text-base text-[var(--color-text-secondary)] leading-relaxed">
                {item.description}
              </p>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[var(--color-accent)] group-hover:w-full transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
