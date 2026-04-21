export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-2xl space-y-10">
          <div>
            <h3 className="text-3xl font-semibold text-[var(--color-text-primary)]">Email</h3>
            <a
              href="mailto:info@daksecurity.com"
              className="mt-2 inline-block text-2xl text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              info@daksecurity.com
            </a>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-[var(--color-text-primary)]">Phone</h3>
            <a
              href="tel:+919604551338"
              className="mt-2 inline-block text-2xl text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              +91 9604551338
            </a>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-[var(--color-text-primary)]">Address</h3>
            <address className="mt-2 not-italic text-2xl leading-relaxed text-[var(--color-text-primary)]">
              20, H-1/A, Sector 63
              <br />
              Noida - 201301
              <br />
              Uttar Pradesh, India
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-border)] pt-8">
          <p className="text-xl text-[var(--color-text-primary)]">
            Copyright {currentYear} &copy; DAK SECURITY LABS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
