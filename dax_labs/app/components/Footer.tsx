export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[rgba(8,17,26,0.94)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">Email</h3>
            <a href="mailto:info@daksecurity.com" className="mt-2 inline-block text-lg text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]">info@daksecurity.com</a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">Phone</h3>
            <a href="tel:+919604551338" className="mt-2 inline-block text-lg text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]">+91 9604551338</a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">Address</h3>
            <address className="mt-2 not-italic text-lg leading-snug text-[var(--color-text-primary)]">20, H-1/A, Sector 63<br />Noida - 201301<br />Uttar Pradesh, India</address>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--color-border)] pt-6">
          <p className="text-sm text-[var(--color-text-muted)]">Copyright {currentYear} &copy; DAK SECURITY LABS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
