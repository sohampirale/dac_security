const footerLinks = {
  company: [
    { name: 'About Us', href: '/#who-we-are' },
    { name: 'Our Team', href: '/#who-we-are' },
    { name: 'Careers', href: '/#resources' },
    { name: 'News & Updates', href: '/#resources' },
    { name: 'Contact Us', href: '/#contact' },
  ],
  services: [
    { name: 'Application Security Assessment', href: '/services' },
    { name: 'Network Security Assessment', href: '/services' },
    { name: 'Compliance and Data Privacy', href: '/services' },
    { name: 'Red Teaming', href: '/services' },
    { name: 'IoT Security Assessment', href: '/services' },
    { name: 'Security Operation Center', href: '/services' },
    { name: 'Digital Forensic Services', href: '/services' },
  ],
  resources: [
    { name: 'Blog', href: '/#resources' },
    { name: 'Case Studies', href: '/#resources' },
    { name: 'Whitepapers', href: '/#resources' },
    { name: 'Privacy Policy', href: '/#resources' },
    { name: 'Terms of Service', href: '/#resources' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Facebook', href: '#' },
  { name: 'YouTube', href: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="resources" className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Info - Full width on mobile, 4 cols on desktop */}
          <div className="lg:col-span-4">
            <a href="#" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
                DAC SECURITY
              </span>
            </a>
            <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
              Empowering organizations with advanced cybersecurity solutions. 
              Your trusted partner in building a safer digital future.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-accent)] hover:text-[var(--color-text-light)] transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.name === 'LinkedIn' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                  {social.name === 'Twitter' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  )}
                  {social.name === 'Facebook' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {social.name === 'YouTube' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
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

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] tracking-wider uppercase">
              Our Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
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

          {/* Resources & Legal Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] tracking-wider uppercase">
              Resources & Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
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
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center text-[var(--color-text-secondary)]">
              <svg className="w-5 h-5 mr-3 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>123 Security Boulevard, Tech City, TC 12345</span>
            </div>
            <div className="flex items-center text-[var(--color-text-secondary)]">
              <svg className="w-5 h-5 mr-3 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:contact@dacsecurity.com" className="hover:text-[var(--color-accent)] transition-colors">
                contact@dacsecurity.com
              </a>
            </div>
            <div className="flex items-center text-[var(--color-text-secondary)]">
              <svg className="w-5 h-5 mr-3 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+1234567890" className="hover:text-[var(--color-accent)] transition-colors">
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[var(--color-border)] text-center">
          <p className="text-sm text-[var(--color-text-muted)]">
            &copy; {currentYear} DAC Security. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
