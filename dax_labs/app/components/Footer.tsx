export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[rgba(8,17,26,0.94)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Email</h3>
            <a
              href="mailto:info@daksecurity.com"
              className="mt-4 inline-block text-xl text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]"
            >
              info@daksecurity.com
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Phone</h3>
            <a
              href="tel:+919604551338"
              className="mt-4 inline-block text-xl text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]"
            >
              +91 9604551338
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Address</h3>
            <address className="mt-4 not-italic text-xl leading-relaxed text-[var(--color-text-primary)]">
              20, H-1/A, Sector 63
              <br />
              Noida - 201301
              <br />
              Uttar Pradesh, India
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-border)] pt-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            Copyright {currentYear} &copy; DAK SECURITY LABS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
