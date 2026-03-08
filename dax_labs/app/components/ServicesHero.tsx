export default function ServicesHero() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-[var(--color-bg-secondary)] overflow-hidden">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, var(--color-bg-gradient-start) 0%, var(--color-bg-gradient-end) 100%)`,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--color-bg-tertiary)] rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--color-bg-tertiary)] rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-[var(--color-text-muted)]">
            <li>
              <a href="/" className="hover:text-[var(--color-accent)] transition-colors">
                Home
              </a>
            </li>
            <li className="mx-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="text-[var(--color-text-primary)] font-medium">Services</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] tracking-tight animate-fade-in-up">
            OUR SERVICES
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Comprehensive Cybersecurity Solutions for Your Digital Infrastructure
          </p>
          <p className="mt-4 text-base text-[var(--color-text-muted)] leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            From application security to digital forensics, we provide end-to-end protection tailored to your organization&apos;s unique needs.
          </p>
        </div>
      </div>
    </section>
  );
}
