export default function CTASection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[var(--color-bg-secondary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[var(--color-bg-primary)] border-2 border-[var(--color-border)] px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 shadow-sm">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          {/* Content - Center aligned */}
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight">
              Do You Need Our Help in
              <br />
              <span className="text-[var(--color-accent)]">Securing Your Systems?</span>
            </h2>

            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-light)] bg-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent-hover)] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Yes, We Do
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
