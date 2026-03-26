# Products Page - Quick Reference for AI Agents

**Purpose:** Quick start guide for coding agents working on DAK Security products pages.

---

## 🎯 What Exists

### Pages (38 Total)
- `/products` - Main products page
- `/products/it-security` - IT Security category (16 products)
- `/products/it-security/[slug]` - 16 IT Security product detail pages
- `/products/digital-forensic` - Digital Forensic category (3 products)
- `/products/digital-forensic/[slug]` - 3 Digital Forensic detail pages
- `/products/forensic-software` - Forensic Software category (15 tools)
- `/products/forensic-software/[slug]` - 15 Forensic Software detail pages

### Components (6 New)
- `ProductDetailHero` - Hero with breadcrumb
- `ProductFeatures` - Features grid
- `ProductSpecifications` - Specs table
- `ProductUseCases` - Use case cards
- `ProductRelated` - Related products
- `ProductDetailCTA` - Call-to-action

### Data Files (3)
- `app/data/it-security-products.ts` - 16 products
- `app/data/digital-forensic-products.ts` - 3 products
- `app/data/forensic-software-tools.ts` - 15 tools

---

## 🔧 How to Add a New Product

### Step 1: Add to Data File

```typescript
// app/data/it-security-products.ts
{
  slug: 'new-product-slug',
  name: 'New Product Name',
  shortDescription: '1-2 sentence description',
  fullDescription: `3-4 paragraphs of detailed content`,
  iconKey: 'new-icon',
  category: 'it-security',
  features: ['Feature 1', 'Feature 2', ...],
  specifications: [
    { label: 'Deployment', value: 'Cloud, On-Premise' },
    { label: 'Capacity', value: 'Up to 100 Gbps' },
  ],
  useCases: [
    { title: 'Use Case 1', description: 'Description' },
    { title: 'Use Case 2', description: 'Description' },
  ],
  benefits: ['Benefit 1', 'Benefit 2', ...],
  relatedProducts: [
    { name: 'Related Product', href: '/products/it-security/related', description: 'Desc' },
  ],
}
```

### Step 2: Add Icon

```typescript
// app/components/icons/product-icons.tsx
export const NewIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="..." />
  </svg>
);
```

### Step 3: Update Icon Map

```typescript
// In product detail page and ProductsCatalog
const iconMap: Record<string, React.ComponentType> = {
  // ... existing icons
  'new-icon': NewIcon,
};
```

### Step 4: Build & Test

```bash
npm run build
```

The page will be automatically generated at `/products/it-security/new-product-slug`.

---

## 🎨 Component Usage Patterns

### ProductDetailHero

```tsx
<ProductDetailHero
  title="Product Name"
  description="Short description"
  icon={<IconComponent />}
  category="it-security"
/>
```

### ProductFeatures

```tsx
<ProductFeatures features={[
  'Feature 1',
  'Feature 2',
  'Feature 3',
]} />
```

### ProductSpecifications

```tsx
<ProductSpecifications specifications={[
  { label: 'Deployment', value: 'Cloud, On-Premise' },
  { label: 'Capacity', value: 'Up to 100 Gbps' },
]} />
```

### ProductUseCases

```tsx
<ProductUseCases useCases={[
  { title: 'Use Case 1', description: 'Description' },
  { title: 'Use Case 2', description: 'Description' },
]} />
```

### ProductRelated

```tsx
<ProductRelated products={[
  { name: 'Related Product', href: '/products/it-security/slug', description: 'Desc' },
]} />
```

### ProductDetailCTA

```tsx
<ProductDetailCTA productName="Product Name" />
```

---

## 📁 File Locations

```
dax_labs/
├── app/
│   ├── components/
│   │   ├── icons/product-icons.tsx
│   │   ├── ProductDetailHero.tsx
│   │   ├── ProductFeatures.tsx
│   │   ├── ProductSpecifications.tsx
│   │   ├── ProductUseCases.tsx
│   │   ├── ProductRelated.tsx
│   │   └── ProductDetailCTA.tsx
│   ├── data/
│   │   ├── it-security-products.ts
│   │   ├── digital-forensic-products.ts
│   │   └── forensic-software-tools.ts
│   └── products/
│       ├── page.tsx
│       ├── it-security/
│       │   ├── page.tsx
│       │   └── [slug]/page.tsx
│       ├── digital-forensic/
│       │   ├── page.tsx
│       │   └── [slug]/page.tsx
│       └── forensic-software/
│           ├── page.tsx
│           └── [slug]/page.tsx
```

---

## 🚀 Navigation

### Link to Product

```tsx
<a href="/products/it-security/web-application-firewall">
  View Product
</a>
```

### Link to Category

```tsx
<a href="/products/it-security">
  View All IT Security Products
</a>
```

### Breadcrumb

```tsx
<nav className="flex items-center text-sm">
  <a href="/">Home</a>
  <svg>...</svg>
  <a href="/products">Products</a>
  <svg>...</svg>
  <a href="/products/it-security">IT Security</a>
  <svg>...</svg>
  <span>Product Name</span>
</nav>
```

---

## 🎯 Color System

Always use CSS variables:

```tsx
className="bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]"
```

**Common Colors:**
- `--color-bg-primary` - #ffffff (main background)
- `--color-bg-secondary` - #f8f9fa (section background)
- `--color-text-primary` - #1a1a1a (main text)
- `--color-text-secondary` - #4a4a4a (secondary text)
- `--color-accent` - #1a1a1a (buttons, links)

---

## ✅ Quality Checklist

Before submitting changes:

- [ ] Build passes: `npm run build`
- [ ] No TypeScript errors
- [ ] All links use correct slugs (lowercase, hyphens)
- [ ] Icons are added to iconMap
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] Breadcrumb navigation included
- [ ] Related products link to valid pages
- [ ] CTA buttons link to /contact

---

## 🐛 Troubleshooting

### Cards Not Clickable

Ensure cards are wrapped in `<a>` tags:

```tsx
<a href={`/products/it-security/${product.slug}`}>
  {/* Card content */}
</a>
```

### 404 on Page

Check slug format:
- ✅ `web-application-firewall`
- ❌ `WebApplicationFirewall`
- ❌ `web_application_firewall`

### Icon Not Showing

1. Check icon is exported from `product-icons.tsx`
2. Check icon is in `iconMap`
3. Check `iconKey` matches map key

---

## 📊 Product Counts

| Category | Count | Route |
|----------|-------|-------|
| IT Security | 16 | `/products/it-security/[slug]` |
| Digital Forensic | 3 | `/products/digital-forensic/[slug]` |
| Forensic Software | 15 | `/products/forensic-software/[slug]` |
| **Total** | **34** | - |

---

## 🔗 Related Docs

- [Complete Products Page Guide](./products-page-complete-guide.md)
- [Services Page Implementation](./session-2-services-page.md)

---

**Last Updated:** March 26, 2026
