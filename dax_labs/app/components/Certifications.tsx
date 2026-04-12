export default function Certifications() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            Experience and Capability
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Your systems are handled by seasoned professionals with certified expertise and experience in critical and sensitive environments.
          </p>
        </div>

        {/* Two Block Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Block 1: Certified Expertise */}
          <div className="bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)] p-8">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6">
              Certified Expertise
            </h3>
            <ul className="space-y-3">
              <li className="text-[var(--color-text-secondary)] leading-relaxed">
                • CIISSP, CISM, CISA, ISO 27001 and related security standards
              </li>
              <li className="text-[var(--color-text-secondary)] leading-relaxed">
                • Defence-oriented cyber intelligence practices
              </li>
              <li className="text-[var(--color-text-secondary)] leading-relaxed">
                • Digital forensics and incident investigation
              </li>
              <li className="text-[var(--color-text-secondary)] leading-relaxed">
                • Security operations and risk assessment
              </li>
            </ul>
          </div>

          {/* Block 2: Applicable Across Critical Sectors */}
          <div className="bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)] p-8">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6">
              Applicable Across Critical Sectors
            </h3>
            <ul className="space-y-3">
              <li className="text-[var(--color-text-secondary)] leading-relaxed">
                • Defence, law enforcement, and intelligence environments
              </li>
              <li className="text-[var(--color-text-secondary)] leading-relaxed">
                • Financial systems, fintech, and banking infrastructure
              </li>
              <li className="text-[var(--color-text-secondary)] leading-relaxed">
                • Government, public sector, and regulatory systems
              </li>
              <li className="text-[var(--color-text-secondary)] leading-relaxed">
                • Healthcare, legal, and sensitive data ecosystems
              </li>
              <li className="text-[var(--color-text-secondary)] leading-relaxed">
                • Enterprise, industrial, and operational technology environments
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
