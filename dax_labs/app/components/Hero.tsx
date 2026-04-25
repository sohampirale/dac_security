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

      <div className="absolute right-[8%] top-32 h-72 w-72 animate-pulse-slow rounded-full bg-[var(--color-accent)] opacity-[0.08] blur-3xl" />
      <div className="absolute bottom-24 left-[3%] h-80 w-80 animate-pulse-slow rounded-full bg-[#2f90ff] opacity-[0.1] blur-3xl" style={{ animationDelay: '1s' }} />

      <div className="absolute left-0 top-0 h-36 w-36 border-l-2 border-t-2 border-[var(--color-accent)] opacity-20" />
      <div className="absolute bottom-0 right-0 h-36 w-36 border-b-2 border-r-2 border-[var(--color-accent)] opacity-20" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-10 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <p
            className="mb-6 inline-flex items-center rounded-full border border-[var(--color-border)] bg-[rgba(10,22,34,0.75)] px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)] animate-fade-in-up"
            style={{ animationDelay: '0.05s' }}
          >
            DAK SECURITY LABS
          </p>

          <h1
            className="animate-fade-in-up text-3xl font-bold leading-[1.06] tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ animationDelay: '0.1s' }}
          >
            Your Systems | Your Data | Your Responsibility
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
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-text-light)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)]"
            >
              Book Security Consultation
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-[var(--color-border)] bg-[rgba(11,24,37,0.72)] px-6 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-accent)]" />
              <span className="text-sm text-[var(--color-text-muted)]">CERT-In Aligned Practices</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-accent)]" style={{ animationDelay: '0.5s' }} />
              <span className="text-sm text-[var(--color-text-muted)]">Enterprise & Government Trusted</span>
            </div>
          </div>
        </div>

        <aside className="animate-fade-in-up rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(14,28,43,0.95),rgba(10,20,31,0.95))] p-6 backdrop-blur-sm" style={{ animationDelay: '0.35s' }}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Rapid Assurance</p>
          <h3 className="mt-4 text-2xl font-semibold text-[var(--color-text-primary)]">3-Phase Security Model</h3>
          <ul className="mt-6 space-y-4 text-sm text-[var(--color-text-secondary)]">
            {[
              'Detect: discover exposure across apps, networks, and assets',
              'Analyze: map exploit paths and business impact',
              'Kinetic: execute remediation and response with speed',
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
