const directors = [
  {
    name: 'Aditya Mahindrakar',
    designation: 'Director — Business Operations',
    statement:
      'We understand what it means to trust someone with your systems. At DAK Security Labs, protecting them is a responsibility we take personally.',
    image: '/director-1.jpeg',
    animation: 'animate-slide-in-left',
  },
  {
    name: 'Vijaykumar Dhar',
    designation: 'Director — Finance & Operations',
    statement:
      'Strong systems are built through discipline, clarity, and long-term accountability. We approach that responsibility with the same seriousness expected for systems that support institutions, operations, and national continuity.',
    image: '/director-2.jpeg',
    animation: 'animate-slide-in-right',
    reverse: true,
  },
];

export default function AboutDirectors() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[var(--color-bg-primary)] sm:min-h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(140deg, rgba(8,16,25,0.95) 0%, rgba(11,25,38,0.9) 45%, rgba(10,20,31,0.98) 100%)`,
        }}
      />
      <div className="absolute left-[8%] top-16 h-64 w-64 rounded-full bg-[rgba(32,215,181,0.1)] blur-3xl" />
      <div className="absolute bottom-10 right-[6%] h-72 w-72 rounded-full bg-[rgba(47,144,255,0.12)] blur-3xl" />
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="directorsGrid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.25" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#directorsGrid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center gap-10 px-4 pb-14 pt-20 sm:min-h-screen sm:gap-14 sm:pb-16 sm:pt-24 sm:px-6 lg:px-8">
        {directors.map((director) => (
          <div
            key={director.designation}
            className={`grid grid-cols-1 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(12,24,36,0.96),rgba(9,19,30,0.96))] lg:grid-cols-[280px_minmax(0,1fr)] ${
              director.reverse ? 'lg:grid-cols-[minmax(0,1fr)_280px]' : ''
            }`}
          >
            <div
              className={`relative min-h-[240px] sm:min-h-[300px] ${director.reverse ? 'lg:order-2' : ''}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-top"
                style={{ backgroundImage: `url(${director.image})` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,12,18,0.05),rgba(7,12,18,0.4))]" />
            </div>

            <div
              className={`relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 ${director.reverse ? 'lg:order-1' : ''}`}
            >
              <p className={`${director.animation} text-lg font-medium leading-relaxed text-[var(--color-text-primary)]`}>
                “{director.statement}”
              </p>
              <div className="mt-8">
                <p className="text-xl font-semibold text-[var(--color-text-primary)]">{director.name}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  {director.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <svg className="h-6 w-6 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
