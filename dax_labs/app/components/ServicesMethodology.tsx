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
    <section
      id="methodology"
      className="relative overflow-hidden py-20 lg:py-28 bg-[var(--color-bg-primary)] transition-colors duration-300"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[48rem] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(0,212,170,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_35%,rgba(15,25,35,0.4))]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-accent)]">
              Methodology
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-text-primary)]">
              Detect, analyze, and act with clarity
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-8 text-[var(--color-text-secondary)]">
              A disciplined, three-stage model that aligns risk visibility with coordinated response across your environment.
            </p>
          </div>
          <div className="h-px w-full md:h-14 md:w-px bg-[linear-gradient(180deg,transparent,rgba(0,212,170,0.7),transparent)]" />
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {methodologySteps.map((step, index) => (
            <div
              key={step.title}
              className={`group min-w-0 text-left transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.4em] text-[var(--color-text-muted)]">
                  0{index + 1}
                </span>
                <span className="h-px w-12 bg-[linear-gradient(90deg,rgba(0,212,170,0.8),transparent)]" />
              </div>
              <h3 className="mt-6 text-3xl sm:text-[2rem] font-semibold tracking-tight text-[var(--color-text-primary)]">
                {step.title}
              </h3>
              <p className="mt-4 max-w-sm text-base sm:text-lg leading-8 text-[var(--color-text-secondary)]">
                {step.description}
              </p>
              <div className="mt-8 h-px w-full bg-[linear-gradient(90deg,rgba(168,181,196,0.25),rgba(0,212,170,0.5),rgba(168,181,196,0.15))]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
