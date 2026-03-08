export default function ServicesCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Card */}
        <div className="relative bg-[var(--color-bg-primary)] rounded-2xl border border-[var(--color-border)] overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-bg-tertiary)] rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-bg-tertiary)] rounded-full blur-3xl opacity-30" />

          <div className="relative z-10 px-6 py-16 lg:px-12 lg:py-20 text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-bg-tertiary)] rounded-full text-[var(--color-accent)] mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
              Ready to Secure Your Digital Infrastructure?
            </h2>

            {/* Description */}
            <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto">
              Get in touch with our cybersecurity experts for a comprehensive security assessment tailored to your organization&apos;s needs.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-light)] bg-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent-hover)] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Request a Quote
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] bg-transparent border-2 border-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent)] hover:text-[var(--color-text-light)] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Schedule a Consultation
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-[var(--color-border-subtle)]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-[var(--color-accent)]">17+</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-[var(--color-accent)]">200+</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Certified Professionals</p>
                </div>
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-[var(--color-accent)]">14,000+</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Applications Audited</p>
                </div>
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-[var(--color-accent)]">4,000+</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
