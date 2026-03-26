interface RelatedProduct {
  name: string;
  href: string;
  description: string;
}

interface ProductRelatedProps {
  title?: string;
  products: RelatedProduct[];
}

export default function ProductRelated({ title = 'Related Products', products }: ProductRelatedProps) {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            {title}
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <a
              key={product.name}
              href={product.href}
              className="group p-6 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                {product.name}
              </h3>
              <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed flex-grow">
                {product.description}
              </p>
              <div className="mt-4 flex items-center text-[var(--color-accent)] text-sm font-semibold">
                Learn More
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
