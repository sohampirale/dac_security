const footerLinks = {
  company: [
    { name: 'Our Clients', href: '/#clients' },
    { name: 'Resources', href: '/#resources' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="resources" className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
                DAK SECURITY
              </span>
            </a>
            <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
              Empowering organizations with advanced cybersecurity solutions.
              Your trusted partner in building a safer digital future.
            </p>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] tracking-wider uppercase">
              Contact
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-start text-[var(--color-text-secondary)]">
                <svg className="w-5 h-5 mr-3 text-[var(--color-text-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@daksecurity.com" className="hover:text-[var(--color-accent)] transition-colors">
                  info@daksecurity.com
                </a>
              </div>
              <div className="flex items-start text-[var(--color-text-secondary)]">
                <svg className="w-5 h-5 mr-3 text-[var(--color-text-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919604551338" className="hover:text-[var(--color-accent)] transition-colors">
                  +91 9604551338
                </a>
              </div>
              <div className="flex items-start text-[var(--color-text-secondary)]">
                <svg className="w-5 h-5 mr-3 text-[var(--color-text-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  20, H-1/A, Sector 63<br />
                  Noida - 201301<br />
                  Uttar Pradesh, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)] text-center">
          <p className="text-sm text-[var(--color-text-muted)]">
            Copyright {currentYear} &copy; DAK SECURITY LABS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
