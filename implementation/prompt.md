# DAK Security Website - Context & Guidelines for Agents

**Read this first before building any new pages or features.**

---

## Project Overview

**Company:** DAK Security
**Industry:** Cybersecurity Services & Solutions
**Target Audience:** Government agencies, enterprise clients, BFSI sector
**Design Style:** Minimalistic, professional, clean
**Theme:** Light mode ONLY (black text on white background)
**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS v4

**Reference Website:** [AKS IT Services](https://www.aksitservices.co.in/)
**Project Location:** `/home/soham/coding/proj/DAX_LABS/dax_labs/`

---

## ✅ Recent Updates (March 26, 2026)

### Products Page Implementation - COMPLETE

**34 Product Detail Pages Created:**
- 16 IT Security Products (WAF, DDoS, SIEM, EDR, etc.)
- 3 Digital Forensic Products (Workstation, Password Cracking, RF Shielding)
- 15 Forensic Software Tools (Mobile, Computer, Cloud Forensics, etc.)

**New Components:**
- ProductDetailHero, ProductFeatures, ProductSpecifications
- ProductUseCases, ProductRelated, ProductDetailCTA

**Documentation:**
- [Products Page Complete Guide](./products-page-complete-guide.md)
- [Products Page Quick Reference](./products-page-quick-reference.md)

**Navigation:**
- All product cards are now CLICKABLE
- Breadcrumb navigation on all product pages
- Header dropdown for Products
- Footer with product category links

---

## Critical Design Rules

### 1. Theme - Light Mode Only (NON-NEGOTIABLE)

```css
/* DO NOT implement dark mode */
/* DO NOT use prefers-color-scheme media queries */
/* DO NOT add theme toggle functionality */

/* The site MUST remain light mode at all times */
/* This is for government/enterprise client presentations */
```

**Color variables are in:** `app/globals.css` at the top in `:root` section

### 2. Color System

All colors use CSS custom properties. **NEVER hardcode hex values** in components.

```css
/* Use these in all components */
var(--color-bg-primary)      /* #ffffff - Main background */
var(--color-bg-secondary)    /* #f8f9fa - Section backgrounds */
var(--color-bg-tertiary)     /* #f1f3f4 - Card backgrounds */
var(--color-text-primary)    /* #1a1a1a - Main text */
var(--color-text-secondary)  /* #4a4a4a - Secondary text */
var(--color-text-muted)      /* #717171 - Muted text */
var(--color-accent)          /* #1a1a1a - Buttons, links */
var(--color-accent-hover)    /* #000000 - Hover states */
var(--color-border)          /* #e5e5e5 - Borders */
var(--color-border-hover)    /* #1a1a1a - Hover borders */
```

**In Tailwind classes:**
```tsx
className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
```

### 3. Design Aesthetic

- **Minimalistic** - Clean layouts, ample white space
- **Professional** - Suitable for government/enterprise
- **Subtle animations** - 300ms transitions, hover lifts (translateY(-4px))
- **No flashy effects** - Keep it corporate and restrained
- **High contrast** - Ensure readability for all users
- **Consistent spacing** - Use Tailwind's spacing scale

### 4. Typography

```tsx
// Font families (already configured in layout.tsx)
font-sans: Geist Sans (via className from layout)
font-mono: Geist Mono (via className from layout)

// Heading hierarchy
h1: text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold
h2: text-2xl sm:text-3xl lg:text-4xl font-bold
h3: text-xl lg:text-2xl font-semibold
h4: text-lg font-semibold
```

### 5. Component Patterns

**All existing components follow these patterns:**

```tsx
// Section structure
<section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section content */}
  </div>
</section>

// Card with hover effect
<div className="group p-6 bg-[var(--color-bg-primary)] rounded-lg 
                border border-[var(--color-border)] 
                hover:border-[var(--color-border-hover)] 
                transition-all duration-300 hover-lift">
  {/* Card content */}
</div>

// Button styles
// Primary: bg-[var(--color-accent)] text-[var(--color-text-light)]
// Secondary: bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-text-primary)]
```

---

## Existing Pages & Structure

### Homepage (`app/page.tsx`)

**Sections in order:**
1. Header (fixed navigation)
2. Hero (full-screen with CTAs)
3. Commitment (3-column value props)
4. Services Overview (6-card grid)
5. Statistics (4 animated counters)
6. Certifications (6 badge grid)
7. Testimonials (3-client cards)
8. CTA Section (white card design)
9. Footer (multi-column)

**File:** `app/page.tsx`  
**Components:** `app/components/*.tsx`

---

## Pages to Build (Future)

### Priority 1 - Core Pages

1. **Services Page** (`/services`)
   - List all 6-7 services with detailed descriptions
   - Each service should have its own expandable section
   - Include service-specific icons
   - CTA for each service

2. **About Page** (`/about` or `/who-we-are`)
   - Company history
   - Mission & vision
   - Leadership team (placeholder cards)
   - Certifications showcase
   - Statistics section

3. **Contact Page** (`/contact`)
   - Contact form (Name, Email, Phone, Company, Message)
   - Contact information (address, phone, email)
   - Google Maps embed (placeholder)
   - Business hours

### Priority 2 - Content Pages

4. **Products Page** (`/products`)
   - Product categories
   - Partner logos
   - Product cards with descriptions

5. **Resources Page** (`/resources`)
   - Blog listing (placeholder)
   - Case studies
   - Whitepapers
   - Research papers

6. **Clients Page** (`/clients` or `/our-clients`)
   - Client logos grid
   - Testimonials carousel
   - Success stories

---

## Technical Requirements

### 1. No External Dependencies

```tsx
// DO NOT install animation libraries
// DO NOT install icon libraries (use inline SVG)
// DO NOT install form libraries (use native forms)
// DO NOT install carousel libraries (build simple CSS carousel)
```

**Icons:** Use inline SVG (copy from existing components)

**Animations:** Use CSS keyframes (already in `globals.css`)

### 2. Static Content Only

```tsx
// NO database connections
// NO API routes needed (unless specifically requested)
// NO authentication
// All content hardcoded in components
```

### 3. Responsive Design

```tsx
// Mobile-first approach
// Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
// Test all layouts on mobile, tablet, desktop
```

### 4. Accessibility

```tsx
// Use semantic HTML (section, article, nav, etc.)
// Add aria-labels where needed
// Ensure proper heading hierarchy
// Maintain color contrast ratios
// Add alt text to all images
```

### 5. SEO

```tsx
// Add metadata for each page
// Use proper heading structure
// Add Open Graph tags
// Include meta descriptions
```

---

## File Structure

```
dax_labs/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── services/            # Services page (future)
│   │   └── page.tsx
│   ├── about/               # About page (future)
│   │   └── page.tsx
│   ├── contact/             # Contact page (future)
│   │   └── page.tsx
│   ├── globals.css          # CSS variables & animations
│   ├── layout.tsx           # Root layout (DO NOT MODIFY unless needed)
│   └── page.tsx             # Homepage
├── package.json
└── tsconfig.json
```

---

## Common Mistakes to AVOID

❌ **DO NOT add dark mode** - Light theme only  
❌ **DO NOT hardcode colors** - Use CSS variables  
❌ **DO NOT install new dependencies** - Use existing tools  
❌ **DO NOT use lorem ipsum** - Use meaningful placeholder content  
❌ **DO NOT create complex animations** - Keep it subtle  
❌ **DO NOT break mobile responsiveness** - Test all screen sizes  
❌ **DO NOT ignore accessibility** - Use semantic HTML  
❌ **DO NOT add database/API** - Static content only  

---

## How to Add a New Page

### Step 1: Create Directory

```bash
mkdir -p app/[page-name]
```

### Step 2: Create page.tsx

```tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Page Title | DAK Security',
  description: 'Page description for SEO',
};

export default function PageName() {
  return (
    <>
      <Header />
      <main>
        {/* Page content */}
      </main>
      <Footer />
    </>
  );
}
```

### Step 3: Create Components (if needed)

```tsx
// app/components/NewComponent.tsx
export default function NewComponent() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Component content */}
      </div>
    </section>
  );
}
```

### Step 4: Test Build

```bash
npm run build
```

---

## Content Guidelines

### Tone & Voice

- **Professional** - Corporate but approachable
- **Confident** - Showcase expertise without arrogance
- **Clear** - Avoid jargon, be direct
- **Trustworthy** - Emphasize security, compliance, expertise

### Content Structure

```tsx
// Section pattern
1. Section heading (h2)
2. Brief description (1-2 sentences)
3. Content (cards, grid, list, etc.)
4. CTA (if applicable)
```

### Placeholder Content

When real content is not available:

- Use realistic placeholder text (not lorem ipsum)
- Use generic Indian names for testimonials
- Use placeholder company names (TechCorp, GlobalFinance, etc.)
- Mark clearly where real content is needed

---

## Testing Checklist

Before marking a page as complete:

- [ ] Build passes: `npm run build`
- [ ] No TypeScript errors
- [ ] Responsive on mobile (375px)
- [ ] Responsive on tablet (768px)
- [ ] Responsive on desktop (1920px)
- [ ] All links work
- [ ] All hover effects work
- [ ] Color contrast is good
- [ ] No console errors
- [ ] Light theme is enforced

---

## Quick Reference

### Import Existing Components

```tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
// Reuse these on all pages
```

### Common Section Pattern

```tsx
<section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
        Section Heading
      </h2>
      <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
        Section description goes here.
      </p>
    </div>
    {/* Content grid/cards */}
  </div>
</section>
```

### Button Component Pattern

```tsx
<a
  href="#link"
  className="inline-flex items-center justify-center px-8 py-4 
             text-base font-semibold text-[var(--color-text-light)] 
             bg-[var(--color-accent)] rounded-md 
             hover:bg-[var(--color-accent-hover)] 
             transition-all duration-300 
             transform hover:translate-y-[-2px] hover:shadow-lg"
>
  Button Text
</a>
```

---

## Contact Information (for Contact Page)

```
Company: DAK Security
Email: contact@daksecurity.com
Phone: +91-XXX-XXX-XXXX (placeholder)
Address: [To be added]
```

---

## Summary

**Build for:** Government & enterprise clients  
**Theme:** Light mode ONLY (black on white)  
**Style:** Minimalistic, professional, clean  
**Tech:** Next.js 16, TypeScript, Tailwind CSS v4  
**No external dependencies** - Use existing tools only  
**Static content** - No database/API needed  
**Accessible** - Semantic HTML, proper contrast  
**Responsive** - Mobile-first, test all breakpoints  

**When in doubt, look at existing components in `app/components/` for patterns.**

---
