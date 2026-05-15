export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[rgba(8,17,26,0.94)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">Email</h3>
            <a href="mailto:info@daksecurity.com" className="mt-2 inline-block text-sm sm:text-lg text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]">info@daksecurity.com</a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">Phone</h3>
            <div className="mt-2 space-y-1 text-sm sm:text-lg text-[var(--color-text-primary)]">
              <a href="tel:+918668354806" className="block transition-colors hover:text-[var(--color-accent)]">+91 8668354806</a>
              <a href="tel:+919604551338" className="block transition-colors hover:text-[var(--color-accent)]">+91 9604551338</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">Address</h3>
            <address className="mt-2 not-italic text-sm sm:text-lg leading-snug text-[var(--color-text-primary)]">
              <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-muted)]">Registered address</span>
              <span className="mt-2 block">20, H-1/A, Sector 63</span>
              <span className="block">Noida - 201301</span>
              <span className="block">Uttar Pradesh, India</span>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-muted)]">Branch office</span>
              <span className="mt-2 block">Noida, Mumbai, Bengaluru</span>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--color-border)] pt-6">
          <p className="text-sm text-[var(--color-text-muted)]">Copyright {currentYear} &copy; DAK SECURITY LABS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
