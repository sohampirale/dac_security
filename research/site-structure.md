# Site Structure & Information Architecture

## Website Overview

### Project Scope
A 4-page static website built with Next.js for a cybersecurity services company.

### Pages Structure
```
/ (Home)
├── /services
├── /products
└── /contact
```

---

## Page Hierarchy

### 1. Home Page (`/`)
**Purpose:** Main landing page, company introduction, key services overview, trust building

**Sections:**
1. Navigation Bar (Header)
2. Hero Section
3. About/Commitment Section
4. Services Overview (Cards)
5. Statistics Section
6. Trust & Certifications
7. Client Testimonials
8. Call-to-Action
9. Footer

**Key Components:**
- Navbar
- HeroBanner
- ServiceCard (×6)
- StatCounter (×4)
- CertificationBadge (×8)
- TestimonialCard (×6)
- CTASection
- Footer

---

### 2. Services Page (`/services`)
**Purpose:** Detailed service offerings, sub-services, benefits

**Sections:**
1. Navigation Bar (Header)
2. Page Header
3. Service Categories (7 main categories)
   - Application Security Assessment
   - Network Security Assessment
   - Compliance and Data Privacy
   - Red Teaming
   - IoT Security Assessment
   - Security Operation Center
   - Digital Forensic Services
4. Why Choose Us
5. Service Delivery Methodology
6. Industries We Serve
7. Call-to-Action
8. Footer

**Key Components:**
- PageHeader
- ServiceDetailCard (×7)
- SubServiceList
- BenefitList
- ProcessFlow
- IndustryIcon (×10)
- CTASection
- Footer

---

### 3. Products Page (`/products`)
**Purpose:** Product catalog, partner information, forensic tools

**Sections:**
1. Navigation Bar (Header)
2. Page Header
3. IT Security Products
4. Partner Companies
5. Digital Forensic Products
6. Forensic Software Tools (Categories)
7. Product Selection Guide
8. Implementation Services
9. Call-to-Action
10. Footer

**Key Components:**
- PageHeader
- ProductCard (×16 IT Security)
- PartnerLogo (×12)
- ForensicProductCard (×3)
- ToolCategoryCard (×15)
- SelectionGuideTable
- CTASection
- Footer

---

### 4. Contact Page (`/contact`)
**Purpose:** Contact information, inquiry form, location

**Sections:**
1. Navigation Bar (Header)
2. Page Header
3. Contact Information Cards
4. Contact Form
5. Map/Location
6. FAQ Section
7. Additional Resources
8. Footer

**Key Components:**
- PageHeader
- ContactInfoCard (×4)
- ContactForm
- GoogleMapsEmbed
- FAQAccordion
- ResourceLink (×4)
- Footer

---

## Navigation Structure

### Main Navigation (Header)

```
Logo (Left)

Navigation Menu (Center/Right):
├── Home
├── Services (Dropdown)
│   ├── Application Security Assessment
│   ├── Network Security Assessment
│   ├── Compliance and Data Privacy
│   ├── Red Teaming
│   ├── IoT Security Assessment
│   ├── Security Operation Center
│   └── Digital Forensic Services
├── Products (Dropdown)
│   ├── IT Security Products
│   ├── Our Partners
│   ├── Digital Forensic Products
│   └── Forensic Software Tools
├── Contact Us
└── [Get Free Consultation] (CTA Button)
```

### Mobile Navigation
```
☰ Hamburger Menu

On Click:
├── Home
├── Services ▼
│   └── (Accordion list of services)
├── Products ▼
│   └── (Accordion list of products)
├── Contact Us
└── [Get Free Consultation] (Button)
```

---

## Footer Structure

### Footer Layout (4-5 Columns)

```
Column 1: Company Info
├── Logo
├── Tagline
└── Social Media Icons

Column 2: Quick Links
├── About Us
├── Careers
├── Our Team
├── Contact Us
└── Gallery

Column 3: Services
├── Application Security
├── Network Security
├── Compliance & Privacy
├── Red Teaming
├── Digital Forensics
└── Cybersecurity Training

Column 4: Resources
├── Site Map
├── Research Papers
├── Case Studies
├── Blog
└── FAQs

Column 5: Contact
├── Phone: +91-120 454 5911
├── Toll-Free: 1800-120-2394
├── Email: info@company.com
└── Address: [Office Address]

Bottom Bar:
├── © Copyright [Company Name]. All rights reserved.
├── Privacy Policy
├── Terms of Service
└── Cookie Policy
```

---

## Component Library

### Layout Components
- `Layout` - Main page wrapper
- `Header` - Navigation header
- `Footer` - Site footer
- `Container` - Content container with max-width

### Page Components
- `HeroSection` - Hero banner with CTA
- `PageHeader` - Page title and description
- `AboutSection` - Company introduction
- `ServicesGrid` - Services overview cards
- `StatsSection` - Statistics counters
- `CertificationsSection` - Trust badges
- `TestimonialsSection` - Client testimonials
- `CTASection` - Call-to-action banner
- `ContactForm` - Inquiry form
- `FAQSection` - Frequently asked questions

### UI Components
- `Button` - Primary/secondary buttons
- `Card` - Content card container
- `Section` - Page section wrapper
- `Accordion` - Expandable content
- `Tabs` - Tab navigation
- `Modal` - Dialog/popup
- `Navbar` - Navigation menu
- `Dropdown` - Dropdown menu
- `Badge` - Certification/status badge
- `Icon` - Icon component

### Form Components
- `Input` - Text input field
- `TextArea` - Multi-line input
- `Select` - Dropdown selector
- `Checkbox` - Checkbox input
- `Radio` - Radio button
- `FormLabel` - Field label
- `FormError` - Error message display

---

## File Structure (Next.js)

```
dax_labs/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # Home page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── products/
│   │   └── page.tsx          # Products page
│   └── contact/
│       └── page.tsx          # Contact page
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── CTASection.tsx
│   │   └── ContactForm.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Accordion.tsx
│   │   ├── Badge.tsx
│   │   └── Input.tsx
│   └── index.ts              # Component exports
├── lib/
│   ├── utils.ts
│   └── constants.ts
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-bg.jpg
│   │   └── certifications/
│   └── icons/
├── styles/
│   ├── globals.css
│   └── variables.css
└── types/
    └── index.ts
```

---

## Routing Strategy

### Next.js App Router
```typescript
// app/page.tsx - Home
// app/services/page.tsx - Services
// app/products/page.tsx - Products
// app/contact/page.tsx - Contact
```

### Navigation Links
```typescript
const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Contact Us', href: '/contact' },
];
```

---

## SEO Structure

### Meta Tags (Per Page)

#### Home Page
```html
<title>[Company Name] - Cybersecurity Services & Solutions India</title>
<meta name="description" content="Leading cybersecurity services provider in India. CERT-In empanelled with 17+ years experience. VAPT, Compliance, SOC, Digital Forensics.">
<meta name="keywords" content="cybersecurity, VAPT, application security, network security, compliance, SOC, digital forensics">
```

#### Services Page
```html
<title>Cybersecurity Services - VAPT, Compliance, SOC | [Company Name]</title>
<meta name="description" content="Comprehensive cybersecurity services including VAPT, compliance auditing, SOC, and digital forensics. CERT-In empanelled auditors.">
```

#### Products Page
```html
<title>Security Products - WAF, SIEM, Forensic Tools | [Company Name]</title>
<meta name="description" content="Enterprise security products and forensic tools. Authorized partner for leading cybersecurity vendors.">
```

#### Contact Page
```html
<title>Contact Us - Cybersecurity Experts | [Company Name]</title>
<meta name="description" content="Get in touch with our cybersecurity experts. Free consultation available. Call: +91-120 454 5911">
```

### Schema Markup
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "[Company Name]",
  "description": "Cybersecurity Services and Solutions Provider",
  "telephone": "+91-120-454-5911",
  "email": "info@[company].com",
  "url": "https://www.[company].com",
  "logo": "https://www.[company].com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "IN"
  },
  "areaServed": "IN",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "CERT-In Empanelled"
  }
}
```

---

## Responsive Breakpoints

```css
/* Mobile First Approach */
/* Small devices (phones) */
@media (min-width: 375px) { }

/* Medium devices (tablets) */
@media (min-width: 768px) { }

/* Large devices (desktops) */
@media (min-width: 1024px) { }

/* Extra large devices (large desktops) */
@media (min-width: 1280px) { }
```

---

## Color Palette (Cybersecurity Theme)

### Primary Colors
```css
--color-primary-dark: #0a192f;    /* Navy/Dark Blue */
--color-primary: #112240;          /* Lighter Navy */
--color-primary-light: #233554;    /* Medium Navy */
```

### Accent Colors
```css
--color-accent: #64ffda;           /* Cyan/Teal */
--color-accent-hover: #48dbb5;     /* Lighter Cyan */
```

### Neutral Colors
```css
--color-white: #ffffff;
--color-gray-100: #f8f9fa;
--color-gray-200: #e9ecef;
--color-gray-300: #dee2e6;
--color-gray-600: #6c757d;
--color-gray-800: #343a40;
--color-black: #000000;
```

### Text Colors
```css
--text-primary: #333333;
--text-secondary: #666666;
--text-light: #ffffff;
```

---

## Typography

### Font Family
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-heading: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'Fira Code', monospace;
```

### Font Sizes
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

---

## Notes for Implementation

### Performance Considerations
1. Use Next.js Image component for optimized images
2. Implement lazy loading for below-fold content
3. Minimize JavaScript bundle size
4. Use static site generation (SSG) for all pages
5. Implement proper caching headers

### Accessibility (WCAG 2.1 AA)
1. Proper heading hierarchy (h1-h6)
2. Alt text for all images
3. Keyboard navigation support
4. Focus indicators
5. Color contrast compliance
6. ARIA labels where needed

### Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome for Android
