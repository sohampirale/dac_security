'use client';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20 lg:pt-24">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, var(--color-bg-gradient-start) 0%, var(--color-bg-gradient-end) 100%)`,
        }}
      />

      <div className="absolute inset-0 z-0 opacity-[0.06]">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="heroGrid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#heroGrid)" />
        </svg>
      </div>

      <div
        className="absolute right-[8%] top-32 h-72 w-72 animate-pulse-slow rounded-full bg-[var(--color-accent)] opacity-[0.08] blur-3xl"
        style={{ animationDuration: '6s' }}
      />
      <div
        className="absolute bottom-24 left-[3%] h-80 w-80 animate-pulse-slow rounded-full bg-[#2f90ff] opacity-[0.1] blur-3xl"
        style={{ animationDelay: '1s', animationDuration: '6.5s' }}
      />

      <div className="absolute bottom-0 right-0 h-36 w-36 border-b-2 border-r-2 border-[var(--color-accent)] opacity-20" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-10 lg:px-8 lg:py-24">
        <div className="max-w-6xl">
          <p
            className="mb-6 flex w-fit items-center justify-center rounded-full border border-[rgba(46,208,196,0.35)] bg-[linear-gradient(120deg,rgba(10,28,40,0.92),rgba(6,18,28,0.85))] px-5 py-2 text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-accent)] shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm animate-fade-in-up mx-auto"
            style={{ animationDelay: '0.05s' }}
          >
            DAK Security Labs
          </p>

          <h1
            className="max-w-none animate-fade-in-up text-3xl font-bold leading-[1.04] tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="block whitespace-nowrap">Your Systems. Your Data.</span>
            <span className="block">
              <span className="text-[var(--color-accent)]">Our</span> Responsibility.
            </span>
          </h1>

          <p
            className="mt-8 max-w-3xl animate-fade-in-up text-lg leading-relaxed text-[var(--color-text-secondary)] sm:text-xl"
            style={{ animationDelay: '0.2s' }}
          >
            Secured with discipline, integrity, and military-grade cybersecurity practices that you can
            trust.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="#our-methodology"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(46,208,196,0.45)] bg-[linear-gradient(135deg,rgba(46,208,196,0.95),rgba(20,160,150,0.95))] px-7 py-3 text-sm font-semibold text-[var(--color-text-light)] shadow-[0_14px_30px_rgba(10,20,30,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(10,20,30,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-dark)]"
            >
              Explore Our Methodology
            </a>
            <a
              href="#spheres-of-security"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(46,208,196,0.35)] bg-[rgba(8,20,30,0.85)] px-7 py-3 text-sm font-semibold text-[var(--color-text-primary)] shadow-[0_12px_26px_rgba(5,12,20,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[0_16px_32px_rgba(5,12,20,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-dark)]"
            >
              Explore Spheres of Security
            </a>
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <svg className="w-6 h-6 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
