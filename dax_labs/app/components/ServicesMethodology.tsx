'use client';

import { useEffect, useState } from 'react';

const methodologySteps = [
  {
    number: '01',
    title: 'DETECT',
    description:
      'We treat every system with the same level of care and responsibility, regardless of the size or type of organisation.',
  },
  {
    number: '02',
    title: 'UNDERSTAND',
    description:
      'We first understand how your systems work, where the risks are, and what needs to be protected.',
  },
  {
    number: '03',
    title: 'SECURE',
    description:
      'We then apply structured and disciplined security practices to reduce those risks and strengthen your systems.',
  },
  {
    number: '04',
    title: 'ALIGN',
    description:
      'Everything we do is clear, documented, and aligned with how your organisation operates.',
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
      { threshold: 0.15 }
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
    <section id="methodology" className="py-20 lg:py-28 bg-[var(--color-bg-primary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p
            className={`text-sm font-semibold text-[var(--color-text-muted)] tracking-[0.28em] uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            HOW WE WORK
          </p>
          <h2
            className={`mt-4 text-3xl sm:text-4xl lg:text-[3.25rem] font-bold leading-tight tracking-tight text-[var(--color-text-primary)] transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.08s' }}
          >
            How We Secure Your Systems
          </h2>
          <p
            className={`mt-6 text-lg sm:text-xl leading-relaxed text-[var(--color-text-secondary)] transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.16s' }}
          >
            A structured approach to identifying, understanding, and securing your whole systems.
          </p>

          <div className="mt-12 space-y-8 sm:space-y-10">
            {methodologySteps.map((step, index) => (
              <div
                key={step.number}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${0.24 + index * 0.1}s` }}
              >
                <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--color-text-muted)]">
                  {step.number}
                </p>
                <h3 className="mt-2 text-2xl sm:text-[1.75rem] font-semibold tracking-tight text-[var(--color-text-primary)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-base sm:text-lg leading-8 text-[var(--color-text-secondary)]">
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
