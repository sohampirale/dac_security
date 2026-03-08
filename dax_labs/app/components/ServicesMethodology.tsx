const methodologySteps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'Understand business requirements, define scope and objectives, and create customized testing plan.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Assessment & Testing',
    description: 'Execute security assessments using automated and manual techniques, and document findings.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Analysis & Reporting',
    description: 'Analyze vulnerabilities and risks, prioritize findings based on impact, and create detailed reports with remediation guidance.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Remediation Support',
    description: 'Provide technical guidance, assist with fix implementation, and validate remediation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Continuous Improvement',
    description: 'Regular follow-ups, periodic reassessments, and stay updated with emerging threats.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function ServicesMethodology() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            SERVICE DELIVERY METHODOLOGY
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Our structured approach ensures comprehensive security assessments with actionable insights and continuous improvement.
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-bg-tertiary)] via-[var(--color-accent-subtle)] to-[var(--color-bg-tertiary)]" />

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {methodologySteps.map((step, index) => (
              <div
                key={step.number}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-16 h-16 mx-auto bg-[var(--color-bg-primary)] border-2 border-[var(--color-border)] rounded-full flex items-center justify-center group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                  <span className="text-lg font-bold text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-light)] transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="mt-6 flex justify-center">
                  <div className="w-14 h-14 bg-[var(--color-bg-tertiary)] rounded-lg flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-light)] transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-bold text-[var(--color-text-primary)] text-center">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-[var(--color-text-muted)] text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
