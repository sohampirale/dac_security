export default function Hero() {
  return (
    <section className="relative pt-16 lg:pt-20 min-h-screen flex items-center overflow-hidden">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, var(--color-bg-gradient-start) 0%, var(--color-bg-gradient-end) 100%)`,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--color-bg-tertiary)] rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--color-bg-tertiary)] rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Label */}
          <p
            className="text-sm sm:text-base font-semibold text-[var(--color-accent)] tracking-widest uppercase mb-4 animate-fade-in-up"
            style={{ animationDelay: '0.05s' }}
          >
            DAK SECURITY LABS
          </p>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] leading-tight tracking-tight animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Your Systems | Your Data | Your Responsibility
          </h1>

          {/* Subtext */}
          <p
            className="mt-6 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Secured with discipline, integrity, and military-grade cybersecurity practices that you can trust.
          </p>
        </div>
      </div>
    </section>
  );
}
