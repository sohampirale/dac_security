'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative pt-16 lg:pt-20 min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, var(--color-bg-gradient-start) 0%, var(--color-bg-gradient-end) 100%)`,
        }}
      />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="heroGrid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#heroGrid)" />
        </svg>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-[5%] w-72 h-72 rounded-full bg-[var(--color-accent)] opacity-[0.03] blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-32 left-[5%] w-96 h-96 rounded-full bg-[var(--color-accent)] opacity-[0.02] blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-[20%] w-48 h-48 rounded-full bg-[var(--color-accent-light)] opacity-[0.02] blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Cyber-style corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[var(--color-accent)] opacity-20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-[var(--color-accent)] opacity-20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-[var(--color-accent)] opacity-20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[var(--color-accent)] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Label */}
          <p
            className="text-sm sm:text-base font-semibold text-[var(--color-accent)] tracking-[0.3em] uppercase mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.05s' }}
          >
            DAK SECURITY LABS
          </p>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--color-text-primary)] leading-[1.1] tracking-tight animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Your Systems | Your Data | Your{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-[var(--color-accent)]">Responsibility</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--color-accent)] opacity-10 -skew-x-3" />
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="mt-8 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Secured with discipline, integrity, and military-grade cybersecurity practices that you can trust.
          </p>

          {/* CTA Buttons */}
          <div
            className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-light)] bg-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent-hover)] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[var(--color-accent)]/20"
            >
              Get Started
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/services"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] bg-transparent border-2 border-[var(--color-border)] rounded-md hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
            >
              Learn More
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Quick stats / trust indicators */}
          <div
            className="mt-16 flex flex-wrap gap-8 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span className="text-sm text-[var(--color-text-muted)]">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="text-sm text-[var(--color-text-muted)]">Government Trusted</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
