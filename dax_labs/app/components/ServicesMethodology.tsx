'use client';

import { useEffect, useState } from 'react';

const methodologySteps = [
  {
    title: 'DETECT',
    description:
      'We identify risks across your systems, infrastructure, and processes.',
  },
  {
    title: 'ANALYZE',
    description:
      'We understand how these risks behave and how they affect your systems together.',
  },
  {
    title: 'KINETIC',
    description:
      'We take disciplined action to secure and strengthen your systems as one integrated environment.',
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
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {methodologySteps.map((step, index) => (
            <div
              key={step.title}
              className={`min-w-0 text-left transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h2 className="text-3xl sm:text-[2rem] font-semibold tracking-tight text-[var(--color-text-primary)]">
                {step.title}
              </h2>
              <p className="mt-4 max-w-sm text-base sm:text-lg leading-8 text-[var(--color-text-secondary)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
