interface ProductFeaturesProps {
  title?: string;
  features: string[];
}

export default function ProductFeatures({ title = 'Key Features', features }: ProductFeaturesProps) {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            {title}
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300"
            >
              <svg
                className="w-6 h-6 mr-4 mt-0.5 flex-shrink-0 text-[var(--color-accent)]"
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
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
