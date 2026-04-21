export default function CTASection() {
  return (
    <section id="contact" className="bg-[var(--color-bg-secondary)] py-20 transition-colors duration-300 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(125deg,rgba(20,39,58,0.98),rgba(11,24,36,0.98))] px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          <div className="absolute inset-0 opacity-[0.08]">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          <div className="absolute -right-10 -top-14 h-56 w-56 rounded-full bg-[rgba(32,215,181,0.14)] blur-3xl" />
          <div className="absolute -bottom-16 left-12 h-56 w-56 rounded-full bg-[rgba(47,144,255,0.14)] blur-3xl" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-3xl lg:text-4xl">
              Ready to Strengthen Your
              <span className="text-[var(--color-accent)]"> Security Posture?</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              Get an expert review of your attack surface, compliance readiness, and response capabilities.
            </p>

            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent)] px-8 py-4 text-base font-semibold text-[var(--color-text-light)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)]"
              >
                Talk to a Security Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
