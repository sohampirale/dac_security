interface UseCase {
  title: string;
  description: string;
}

interface ProductUseCasesProps {
  title?: string;
  useCases: UseCase[];
}

export default function ProductUseCases({ title = 'Use Cases', useCases }: ProductUseCasesProps) {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            {title}
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-6 bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300 hover-lift"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 bg-[var(--color-accent)] text-[var(--color-text-light)] rounded-lg mb-4">
                <span className="text-lg font-bold">{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                {useCase.title}
              </h3>
              <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
