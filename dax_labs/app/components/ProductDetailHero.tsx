interface ProductDetailHeroProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  category: string;
}

export default function ProductDetailHero({ title, description, icon, category }: ProductDetailHeroProps) {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-gradient-start)] to-[var(--color-bg-gradient-end)] opacity-50"></div>
      <div className="absolute top-20 right-0 w-64 h-64 bg-[var(--color-accent-subtle)] rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-accent-subtle)] rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-[var(--color-text-muted)] mb-8">
          <a href="/" className="hover:text-[var(--color-accent)] transition-colors">
            Home
          </a>
          <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <a href="/products" className="hover:text-[var(--color-accent)] transition-colors">
            Products
          </a>
          <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <a href={`/products/${category}`} className="hover:text-[var(--color-accent)] transition-colors capitalize">
            {category.replace('-', ' ')}
          </a>
          <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-[var(--color-text-primary)] font-medium">{title}</span>
        </nav>

        {/* Hero Content */}
        <div className="max-w-4xl">
          {icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-bg-primary)] rounded-xl border border-[var(--color-border)] text-[var(--color-accent)] mb-6">
              {icon}
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-xl text-[var(--color-text-secondary)] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
