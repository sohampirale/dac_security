const enterpriseFeatures = {
  features: [
    '24/7 threat monitoring and detection',
    'Real-time alerts and notifications',
    'Automated response capabilities',
    'Centralized management console',
    'Comprehensive reporting and analytics',
    'Integration with existing infrastructure',
    'Scalable architecture',
    'Cloud and on-premise deployment options',
  ],
  benefits: [
    'Reduced security risk and breach potential',
    'Improved threat visibility across environment',
    'Faster incident response and resolution',
    'Regulatory compliance made easier',
    'Cost-effective security operations',
    'Business continuity assurance',
  ],
};

const forensicFeatures = {
  features: [
    'Court-admissible evidence collection',
    'Chain of custody maintenance',
    'Write-protection for evidence integrity',
    'Comprehensive analysis capabilities',
    'Automated reporting and documentation',
    'Multi-platform support',
    'Regular software updates and support',
  ],
  benefits: [
    'Reliable and defensible evidence collection',
    'Faster investigation turnaround',
    'Legal and regulatory compliance',
    'Reduced investigation time and costs',
    'Professional, court-ready reporting',
    'Expert technical support',
  ],
};

export default function ProductFeaturesBenefits() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            WHY CHOOSE DAK SECURITY PRODUCTS?
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Enterprise-grade features paired with tangible business benefits.
          </p>
        </div>

        {/* Enterprise Security Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Enterprise Security Products
            </h3>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Comprehensive protection for your digital infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Features Column */}
            <div className="p-8 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)]">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-accent)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="ml-3 text-lg font-bold text-[var(--color-text-primary)]">
                  Key Features
                </h4>
              </div>
              <ul className="space-y-3">
                {enterpriseFeatures.features.map((feature) => (
                  <li
                    key={feature}
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
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits Column */}
            <div className="p-8 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)]">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-accent)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="ml-3 text-lg font-bold text-[var(--color-text-primary)]">
                  Business Benefits
                </h4>
              </div>
              <ul className="space-y-3">
                {enterpriseFeatures.benefits.map((benefit) => (
                  <li
                    key={benefit}
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
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Forensic Products Section */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Digital Forensic Products
            </h3>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Professional-grade tools for investigations and incident response
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Features Column */}
            <div className="p-8 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)]">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-accent)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                <h4 className="ml-3 text-lg font-bold text-[var(--color-text-primary)]">
                  Key Features
                </h4>
              </div>
              <ul className="space-y-3">
                {forensicFeatures.features.map((feature) => (
                  <li
                    key={feature}
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
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits Column */}
            <div className="p-8 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)]">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-accent)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="ml-3 text-lg font-bold text-[var(--color-text-primary)]">
                  Business Benefits
                </h4>
              </div>
              <ul className="space-y-3">
                {forensicFeatures.benefits.map((benefit) => (
                  <li
                    key={benefit}
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
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
