const commitments = [
  {
    title: 'PROACTIVE PROTECTION',
    description: 'We treat every system with the same level of care and responsibility - no matter the size or type of organisation.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'EXPERTISE & INNOVATION',
    description: 'We first understand how your systems work, where the risks are, and what needs to be protected. Then we apply structured and disciplined security practices to reduce those risks and strengthen your systems.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'TAILORED SOLUTIONS',
    description: 'Everything we do is clear, documented, and aligned with how your organisation operates.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
];

/* Arrow connector component between cards */
const ArrowConnector = () => (
  <div className="hidden lg:flex items-center justify-center w-16 flex-shrink-0">
    <svg className="w-12 h-12 text-[var(--color-accent)] opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </div>
);

/* Mobile arrow (vertical) */
const ArrowConnectorMobile = () => (
  <div className="flex lg:hidden items-center justify-center h-12 flex-shrink-0">
    <svg className="w-8 h-8 text-[var(--color-accent)] opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
);

export default function Commitment() {
  return (
    <section id="who-we-are" className="py-24 lg:py-32 bg-[var(--color-bg-primary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight">
            Our Work Ethics
          </h2>
        </div>

        {/* Roadmap Flow - Cards with Arrows */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-0 max-w-6xl mx-auto">
          {commitments.map((item, index) => (
            <div key={item.title} className="flex flex-col lg:flex-row items-center w-full lg:w-auto flex-1">
              {/* Card */}
              <div
                className="group relative w-full p-10 lg:p-12 bg-[var(--color-bg-secondary)] rounded-2xl border-2 border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-500 hover-lift"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step number badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[var(--color-accent)] text-[var(--color-text-light)] rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[var(--color-bg-tertiary)] rounded-xl text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-light)] transition-all duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] tracking-wide">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-6 text-lg lg:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Arrow connector (not after last item) */}
              {index < commitments.length - 1 && (
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
