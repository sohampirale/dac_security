const segments = [
  {
    title: 'Small Businesses',
    description: 'Essential security for startups and small teams',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    products: [
      'Web Application Firewall (WAF)',
      'Email Security',
      'Endpoint Protection (EDR)',
      'Basic SIEM',
      'Patch Management',
    ],
  },
  {
    title: 'Medium Enterprises',
    description: 'Advanced protection for growing organizations',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    products: [
      'Advanced WAF with DDoS Protection',
      'Network Security Scanners',
      'Full-featured SIEM',
      'Data Loss Prevention (DLP)',
      'Network Monitoring',
      'Vulnerability Management',
    ],
  },
  {
    title: 'Large Enterprises',
    description: 'Comprehensive security for complex infrastructures',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18" />
      </svg>
    ),
    products: [
      'Enterprise WAF and DDoS Mitigation',
      'Advanced SIEM with Analytics',
      'Comprehensive EDR/XDR',
      'Full DLP Suite',
      'SOC Infrastructure',
      'Forensic Lab Setup',
      'Red Teaming Tools',
    ],
  },
  {
    title: 'Government & Law Enforcement',
    description: 'Specialized tools for official investigations',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    products: [
      'Complete Forensic Lab Setup',
      'Mobile Forensic Tools',
      'Computer Forensic Tools',
      'Audio/Video Forensics',
      'CDR/IPDR Analysis Tools',
      'RF Shielding Equipment',
      'JTAG and Chip-off Tools',
    ],
  },
];

export default function ProductSelectionGuide() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            PRODUCT SELECTION GUIDE
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Find the right security products for your organization size and requirements.
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {segments.map((segment, index) => (
            <div
              key={segment.title}
              className="group p-8 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-light)] transition-colors duration-300">
                {segment.icon}
              </div>

              {/* Title & Description */}
              <h3 className="mt-5 text-xl font-bold text-[var(--color-text-primary)]">
                {segment.title}
              </h3>
              <p className="mt-2 text-[var(--color-text-secondary)] leading-relaxed">
                {segment.description}
              </p>

              {/* Products List */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wide mb-4">
                  Recommended Products
                </h4>
                <ul className="space-y-3">
                  {segment.products.map((product) => (
                    <li
                      key={product}
                      className="flex items-start text-sm text-[var(--color-text-secondary)]"
                    >
                      <svg
                        className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-[var(--color-accent)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            Not sure which products are right for you?{' '}
            <a href="#contact" className="text-[var(--color-accent)] font-semibold hover:underline">
              Talk to our security experts
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
