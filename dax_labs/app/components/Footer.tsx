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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content - Horizontal layout */}
        <div className="flex flex-col items-center text-center space-y-8">

          {/* Email & Phone - One line each */}
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center justify-center text-[var(--color-text-secondary)]">
              <svg className="w-5 h-5 mr-3 text-[var(--color-text-muted)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@daksecurity.com" className="hover:text-[var(--color-accent)] transition-colors text-base">
                info@daksecurity.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center text-[var(--color-text-secondary)]">
              <svg className="w-5 h-5 mr-3 text-[var(--color-text-muted)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+919604551338" className="hover:text-[var(--color-accent)] transition-colors text-base">
                +91 9604551338
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-[var(--color-border)]" />

          {/* Locations - 3 addresses */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-4xl">
            {locations.map((location) => (
              <div key={location.city} className="flex items-start justify-center text-[var(--color-text-secondary)]">
                <svg className="w-5 h-5 mr-3 text-[var(--color-text-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-left">
                  <p className="font-semibold text-[var(--color-text-primary)] mb-1">{location.city}</p>
                  <p className="text-sm leading-relaxed">{location.address}</p>
                </div>
              </div>
            ))}
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
