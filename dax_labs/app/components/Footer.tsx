const locations = [
  {
    city: 'Noida',
    address: '20, H-1/A, Sector 63, Noida - 201301, Uttar Pradesh, India',
  },
  {
    city: 'Mumbai',
    address: 'Mumbai, Maharashtra, India',
  },
  {
    city: 'Bangalore',
    address: 'Bangalore, Karnataka, India',
  },
];

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: 'M19 0h-2c0-2.76-2.24-5-5-5H7C4.24 0 2 2.24 2 5v14c0 2.76 2.24 5 5 5h2m0-18h2c2.76 0 5 2.24 5 5v14c0 2.76-2.24 5-5 5h-2M8 9h4m-4 3h4m4-6h.01M19 9a2 2 0 100-4 2 2 0 000 4z' },
  { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
  { name: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
];

const quickLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Industries', href: '/#industries' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl lg:text-2xl font-bold text-[var(--color-text-primary)] tracking-tight">
              DAK SECURITY
            </h3>
            <p className="mt-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Your trusted partner in cybersecurity. Secured with discipline, integrity, and military-grade security practices.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg-tertiary)] transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] tracking-wider uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@daksecurity.com" className="flex items-center text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                  <svg className="w-4 h-4 mr-3 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@daksecurity.com
                </a>
              </li>
              <li>
                <a href="tel:+919604551338" className="flex items-center text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                  <svg className="w-4 h-4 mr-3 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 9604551338
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] tracking-wider uppercase mb-4">
              Offices
            </h4>
            <ul className="space-y-4">
              {locations.map((location) => (
                <li key={location.city} className="flex items-start text-sm text-[var(--color-text-secondary)]">
                  <svg className="w-4 h-4 mr-3 mt-0.5 text-[var(--color-text-muted)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-text-primary)]">{location.city}</span>
                    <p className="text-xs mt-1">{location.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[var(--color-text-muted)]">
              Copyright {currentYear} &copy; DAK SECURITY LABS. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
