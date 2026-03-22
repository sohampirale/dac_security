const certifications = [
  { name: 'CERT-In Empanelled', description: 'Indian Computer Emergency Response Team' },
  { name: 'ISO 27001', description: 'Information Security Management' },
  { name: 'ISO 9001', description: 'Quality Management' },
  { name: 'CMMI Level 3', description: 'Capability Maturity Model' },
  { name: 'GDPR Compliant', description: 'Data Protection Regulation' },
  { name: 'SOC 2 Type II', description: 'Service Organization Control' },
];

const stats = [
  { value: '4000+', label: 'Clients Trust Our Products' },
  { value: '14000+', label: 'Applications Secured' },
  { value: '200+', label: 'Security Experts' },
  { value: '24/7', label: 'Product Support' },
];

const trustedBy = [
  'TCS',
  'NSDL',
  'CSC e-Governance',
  'Sify Technologies',
  'Motherson Group',
  'Expedien eSolutions',
];

export default function ProductTrustIndicators() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            TRUSTED BY INDUSTRY LEADERS
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Industry-recognized certifications and thousands of successful deployments.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-[var(--color-accent)]">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-[var(--color-text-secondary)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-bold text-[var(--color-text-primary)] mb-8">
            CERTIFICATIONS & COMPLIANCE
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="group flex flex-col items-center justify-center p-6 bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300 hover-lift"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Badge Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-bg-tertiary)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-light)] transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>

                {/* Name */}
                <h4 className="mt-4 text-sm font-semibold text-[var(--color-text-primary)] text-center">
                  {cert.name}
                </h4>

                {/* Description */}
                <p className="mt-2 text-xs text-[var(--color-text-muted)] text-center">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted By Section */}
        <div>
          <h3 className="text-center text-lg font-bold text-[var(--color-text-primary)] mb-8">
            TRUSTED BY ORGANIZATIONS WORLDWIDE
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustedBy.map((company, index) => (
              <div
                key={company}
                className="flex items-center justify-center p-6 bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-center">
                  <div className="text-sm font-semibold text-[var(--color-text-secondary)]">
                    {company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
