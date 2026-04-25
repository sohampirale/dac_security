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
            How We Secure Your Systems
          </h2>

          <p
            className={`mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            A structured approach to identifying, understanding, and securing your whole systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {[
            {
              title: 'DETECT',
              desc: 'Identify risks across systems, infrastructure, and processes.',
              services: [
                'Application Security Assessment',
                'Network Security Assessment',
                'Compliance & Data Privacy',
                'Red Teaming',
              ],
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7l6 6L21 3" />
                </svg>
              ),
            },
            {
              title: 'ANALYZE',
              desc: 'Understand how risks behave and impact your environment.',
              services: [
                'Security Operation Center',
                'Digital Forensic Services',
                'Vulnerability Management',
                'Threat Modeling & Analysis',
              ],
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v9l3-2 3 2V3" />
                </svg>
              ),
            },
            {
              title: 'KINETIC',
              desc: 'Take disciplined action to secure and strengthen your environment.',
              services: [
                'Incident Response',
                'Secure Architecture & Engineering',
                'Remediation & Hardening',
                'Continuous Monitoring & Improvements',
              ],
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v6m0 8v6M4 12h6m8 0h6" />
                </svg>
              ),
            },
          ].map((card, idx) => (
            <div
              key={card.title}
              className={`group relative rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(18,36,54,0.96),rgba(11,25,38,0.96))] p-6 lg:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[rgba(0,0,0,0.4)] hover:border-[var(--color-accent)] focus-within:scale-[1.01] overflow-hidden flex flex-col min-h-[260px] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.3 + idx * 0.1}s` }}
              tabIndex={0}
            >
              <div className="absolute top-0 right-0 w-10 h-10 border-r-2 border-t-2 border-transparent group-hover:border-[var(--color-accent)] transition-all duration-300 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-l-2 border-b-2 border-transparent group-hover:border-[var(--color-accent)] transition-all duration-300 rounded-bl-2xl" />

              <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-[var(--color-bg-tertiary)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-light)] transition-all duration-300 mb-4">
                {card.icon}
              </div>

              <h3 className="text-sm font-semibold text-[var(--color-accent)] tracking-wide uppercase">{card.title}</h3>
              <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">{card.desc}</p>

              {card.services && (
                <div className="mt-4 flex flex-wrap gap-2 mt-auto">
                  {card.services.slice(0, 3).map((s) => (
                    <span key={s} className="inline-block max-w-[40%] lg:max-w-[30%] truncate text-xs px-3 py-1 rounded-full bg-[rgba(10,30,40,0.35)] text-[var(--color-text-secondary)] border border-[rgba(255,255,255,0.02)] whitespace-nowrap overflow-hidden text-ellipsis">
                      {s}
                    </span>
                  ))}

                  {card.services.length > 3 && (
                    <button className="ml-1 text-xs text-[var(--color-accent)] underline-offset-2 hover:underline focus:outline-none">
                      +{card.services.length - 3} more
                    </button>
                  )}
                </div>
              )}

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--color-accent)] group-hover:w-full transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
