"use client";

import { useEffect, useState } from 'react';

export default function ServicesFramework() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const el = document.getElementById('framework');
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section id="framework" className="bg-[var(--color-bg-secondary)] py-20 lg:py-28 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p
            className={`text-sm font-semibold text-[var(--color-accent)] tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            WHAT WE DO
          </p>

          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Experience and Capability
          </h2>

          <p
            className={`mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Your systems are handled by seasoned professionals with certified expertise and experience
            in critical and sensitive environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {[
            {
              title: 'Certified Expertise',
              points: [
                'CISSP, CISM, CISA, ISO 27001 and related security standards',
                'Defence-oriented cyber intelligence practices',
                'Digital forensics and incident investigation',
                'Security operations and risk assessment',
              ],
            },
            {
              title: 'Applicable Across Critical Sectors',
              points: [
                'Defence, law enforcement, and intelligence environments',
                'Financial systems, fintech, and banking infrastructure',
                'Government, public sector, and regulatory systems',
                'Healthcare, legal, and sensitive data ecosystems',
                'Enterprise, industrial, and operational technology environments',
              ],
            },
          ].map((block, idx) => (
            <div
              key={block.title}
              className={`group relative rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(18,36,54,0.96),rgba(11,25,38,0.96))] p-6 lg:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-md hover:border-[var(--color-accent)] focus-within:scale-[1.01] overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.3 + idx * 0.08}s` }}
              tabIndex={0}
            >
              <h3 className="text-sm font-semibold text-[var(--color-accent)] tracking-wide uppercase">{block.title}</h3>
              <p className="mt-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {block.points[0]}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-[var(--color-text-secondary)]">
                {block.points.slice(1).map((p) => (
                  <li key={p} className="flex items-start">
                    <span className="mr-3 mt-1 text-[var(--color-accent)]">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
