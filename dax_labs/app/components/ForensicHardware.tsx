const forensicHardwareProducts = [
  {
    name: 'DAK Forensic Workstation',
    description: 'Dedicated high-performance workstation for digital forensic investigations with specialized hardware and software.',
    specifications: [
      'High-core CPU',
      'Multiple GPU support',
      'Large RAM capacity (128GB+)',
      'Multiple drive bays for evidence',
      'Write-blockers integrated',
      'Forensic software pre-installed',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'DAK Password Cracking Machine',
    description: 'Specialized hardware optimized for password recovery and cracking operations using GPU acceleration.',
    specifications: [
      'Multiple high-end GPUs',
      'Optimized cooling system',
      'Pre-configured cracking software',
      'Support for multiple hash types',
      'High-speed memory',
      'Remote management capability',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    name: 'DAK RF Shielding Bag',
    description: 'Radio-frequency shielding bag for evidence preservation to prevent remote wiping and data tampering.',
    specifications: [
      'Multiple sizes available',
      'Faraday cage technology',
      'Durable construction',
      'Anti-static material',
      'Evidence tracking labels',
      'Reusable design',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

const applications = [
  'Law enforcement agencies',
  'Corporate investigations',
  'Legal proceedings',
  'Incident response',
  'Regulatory compliance',
];

export default function ForensicHardware() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            DIGITAL FORENSIC HARDWARE
          </h2>
          <p className="mt-4 text-sm sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Specialized forensic hardware and equipment for digital investigations, evidence collection, and forensic analysis.
          </p>
        </div>

        {/* Hardware Products Grid */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 mb-12 sm:mb-16">
          {forensicHardwareProducts.map((product, index) => (
            <div
              key={product.name}
              className="group p-6 bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300 hover-lift flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-light)] transition-colors duration-300">
                {product.icon}
              </div>

              {/* Product Name */}
              <h3 className="mt-5 text-xl font-bold text-[var(--color-text-primary)]">
                {product.name}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="mt-5 flex-grow">
                <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wide">
                  Specifications
                </h4>
                <ul className="mt-3 space-y-2">
                  {product.specifications.map((spec) => (
                    <li key={spec} className="flex items-start text-sm text-[var(--color-text-muted)]">
                      <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Applications Section */}
        <div className="bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)] p-8">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] text-center mb-6">
            Applications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {applications.map((app) => (
              <div
                key={app}
                className="px-5 py-3 bg-[var(--color-bg-primary)] rounded-lg text-sm font-medium text-[var(--color-text-secondary)] border border-[var(--color-border)]"
              >
                {app}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
