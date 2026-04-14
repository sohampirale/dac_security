const frameworkItems = [
  {
    title: 'DETECT',
    description: 'We identify risks across your systems, infrastructure, and processes.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'ANALYZE',
    description: 'We understand how these risks behave and how they affect your systems together.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'KINETIC',
    description: 'We take disciplined action to secure and strengthen your systems as one integrated environment.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

/* Arrow connector between framework items */
const ArrowConnector = () => (
  <div className="hidden lg:flex items-center justify-center w-20 flex-shrink-0">
    <svg className="w-14 h-14 text-[var(--color-accent)] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </div>
);

/* Mobile vertical arrow */
const ArrowConnectorMobile = () => (
  <div className="flex lg:hidden items-center justify-center h-10 flex-shrink-0">
    <svg className="w-8 h-8 text-[var(--color-accent)] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
);

export default function ServicesOverview() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[var(--color-bg-secondary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight">
            OUR COMPREHENSIVE SECURITY ECOSYSTEM
          </h2>
          <p className="mt-6 text-xl text-[var(--color-text-secondary)] leading-relaxed">
            A structured approach to identifying, understanding, and securing your whole systems.
          </p>
        </div>

        {/* Framework Roadmap Flow - Horizontal with arrows */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-0 max-w-5xl mx-auto">
          {frameworkItems.map((item, index) => (
            <div key={item.title} className="flex flex-col lg:flex-row items-center w-full lg:w-auto flex-1">
              {/* Framework Card */}
              <div
                className="group relative w-full p-10 lg:p-14 bg-[var(--color-bg-primary)] rounded-2xl border-2 border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-500 hover-lift text-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[var(--color-accent)] rounded-full text-[var(--color-text-light)] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h4 className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] tracking-wide">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="mt-5 text-lg lg:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Arrow connector (not after last item) */}
              {index < frameworkItems.length - 1 && (
                <>
                  <ArrowConnector />
                  <ArrowConnectorMobile />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
