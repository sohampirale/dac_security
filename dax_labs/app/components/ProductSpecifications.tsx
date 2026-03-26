interface Specification {
  label: string;
  value: string;
}

interface ProductSpecificationsProps {
  title?: string;
  specifications: Specification[];
}

export default function ProductSpecifications({ 
  title = 'Technical Specifications', 
  specifications 
}: ProductSpecificationsProps) {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            {title}
          </h2>
        </div>

        <div className="mt-12 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)] overflow-hidden">
          <div className="divide-y divide-[var(--color-border)]">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="grid sm:grid-cols-3 gap-4 p-6 hover:bg-[var(--color-bg-tertiary)] transition-colors"
              >
                <dt className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">
                  {spec.label}
                </dt>
                <dd className="sm:col-span-2 text-[var(--color-text-secondary)] leading-relaxed">
                  {spec.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
