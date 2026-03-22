export default function ProductsHero() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-[var(--color-bg-secondary)] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--color-bg-tertiary)] rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[var(--color-bg-tertiary)] rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-[var(--color-text-muted)] mb-8" aria-label="Breadcrumb">
          <a href="/" className="hover:text-[var(--color-accent)] transition-colors">
            Home
          </a>
          <svg className="w-4 h-4 mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-[var(--color-text-secondary)] font-medium">Products</span>
        </nav>

        {/* Header Content */}
        <div className="max-w-5xl">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[var(--color-accent)] rounded-xl text-[var(--color-text-light)] mb-6 animate-fade-in-up">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            OUR PRODUCTS
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-[var(--color-text-secondary)] max-w-3xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive Security Products and Solutions for Your Digital Protection. Enterprise-grade IT security products, forensic tools, and partner solutions with certified implementation and 24/7 support.
          </p>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
              <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>CERT-In Empanelled</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
              <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
              <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>4000+ Clients</span>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-8 w-20 h-1 bg-[var(--color-accent)] rounded animate-fade-in-up" style={{ animationDelay: '0.4s' }} />

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)]">16</div>
              <div className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1">IT Security Products</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)]">12</div>
              <div className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1">Partner Solutions</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)]">3</div>
              <div className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1">Forensic Hardware</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)]">15</div>
              <div className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1">Software Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
