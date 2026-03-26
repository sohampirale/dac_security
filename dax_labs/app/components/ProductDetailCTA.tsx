interface ProductDetailCTAProps {
  productName: string;
}

export default function ProductDetailCTA({ productName }: ProductDetailCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--color-bg-secondary)] rounded-2xl border border-[var(--color-border)] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-subtle)] rounded-full blur-2xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-accent-subtle)] rounded-full blur-2xl opacity-30"></div>

          <div className="relative">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-accent)] text-[var(--color-text-light)] rounded-xl mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
              Ready to Get Started with {productName}?
            </h2>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
              Contact our product specialists to discuss your requirements and get a customized solution recommendation.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-light)] bg-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent-hover)] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg w-full sm:w-auto"
              >
                Request a Quote
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] bg-transparent border-2 border-[var(--color-accent)] rounded-md hover:bg-[var(--color-bg-tertiary)] transition-all duration-300 transform hover:translate-y-[-2px] w-full sm:w-auto"
              >
                Schedule a Demo
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
              <p className="text-sm text-[var(--color-text-muted)]">
                Or talk to our experts:{' '}
                <a href="tel:+91-120-454-5911" className="text-[var(--color-accent)] font-semibold hover:underline">
                  +91-120-454-5911
                </a>
                {' '}|{' '}
                <a href="mailto:contact@daksecurity.com" className="text-[var(--color-accent)] font-semibold hover:underline">
                  contact@daksecurity.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
