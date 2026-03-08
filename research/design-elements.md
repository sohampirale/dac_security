# Design Elements & Visual Guidelines

## Design Philosophy

### Core Principles
1. **Professional & Trustworthy** - Cybersecurity requires building trust
2. **Clean & Modern** - Contemporary design that reflects technological expertise
3. **Secure & Stable** - Visual elements that convey security and reliability
4. **Accessible** - Usable by all visitors regardless of abilities

---

## Color Scheme

### Primary Palette (Cybersecurity Theme)

#### Dark Theme (Recommended for Hero/Sections)
```css
/* Background Colors */
--bg-primary: #0a192f;        /* Deep Navy - Main background */
--bg-secondary: #112240;      /* Lighter Navy - Cards, sections */
--bg-tertiary: #1d3557;       /* Medium Blue - Accents */

/* Text Colors */
--text-primary: #e6f1ff;      /* Light Blue-White - Main text */
--text-secondary: #8892b0;    /* Muted Blue-Gray - Secondary text */
--text-accent: #64ffda;       /* Cyan - Links, highlights */

/* Accent Colors */
--accent-primary: #64ffda;    /* Cyan/Teal - Primary accent */
--accent-secondary: #00b4d8;  /* Light Blue - Secondary accent */
--accent-warning: #ffb703;    /* Amber - Warnings, alerts */
--accent-danger: #ef476f;     /* Red - Errors, critical */
--accent-success: #06d6a0;    /* Green - Success states */
```

#### Light Theme (Alternative)
```css
/* Background Colors */
--bg-primary: #ffffff;        /* White - Main background */
--bg-secondary: #f8f9fa;      /* Light Gray - Sections */
--bg-tertiary: #e9ecef;       /* Medium Gray - Cards */

/* Text Colors */
--text-primary: #212529;      /* Dark Gray - Main text */
--text-secondary: #6c757d;    /* Medium Gray - Secondary text */
--text-accent: #0d6efd;       /* Blue - Links, highlights */

/* Accent Colors */
--accent-primary: #0d6efd;    /* Blue - Primary accent */
--accent-secondary: #0dcaf0;  /* Cyan - Secondary accent */
```

### Gradient Options
```css
/* Hero Background Gradient */
--gradient-hero: linear-gradient(135deg, #0a192f 0%, #112240 100%);

/* Card Hover Gradient */
--gradient-card-hover: linear-gradient(135deg, #112240 0%, #1d3557 100%);

/* Accent Gradient */
--gradient-accent: linear-gradient(90deg, #64ffda 0%, #00b4d8 100%);
```

---

## Typography

### Font Families

#### Primary Font (Body Text)
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

#### Heading Font
```css
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

#### Monospace Font (Code/Technical)
```css
font-family: 'Fira Code', 'Courier New', monospace;
```

### Font Weights
```css
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Heading Styles
```css
/* H1 - Page Titles */
h1 {
  font-size: 3rem;          /* 48px */
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

/* H2 - Section Titles */
h2 {
  font-size: 2.25rem;       /* 36px */
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

/* H3 - Subsection Titles */
h3 {
  font-size: 1.5rem;        /* 24px */
  font-weight: 600;
  line-height: 1.4;
}

/* H4 - Card Titles */
h4 {
  font-size: 1.25rem;       /* 20px */
  font-weight: 500;
  line-height: 1.5;
}
```

### Body Text Styles
```css
/* Large Body */
.text-lg {
  font-size: 1.125rem;      /* 18px */
  line-height: 1.7;
}

/* Regular Body */
.text-base {
  font-size: 1rem;          /* 16px */
  line-height: 1.6;
}

/* Small Body */
.text-sm {
  font-size: 0.875rem;      /* 14px */
  line-height: 1.5;
}

/* Caption */
.text-xs {
  font-size: 0.75rem;       /* 12px */
  line-height: 1.4;
}
```

---

## Spacing System

### Base Scale (8px Grid)
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Section Padding
```css
/* Mobile */
--section-padding-y: 4rem;    /* 64px */
--section-padding-x: 1.5rem;  /* 24px */

/* Desktop */
--section-padding-y: 6rem;    /* 96px */
--section-padding-x: 2rem;    /* 32px */
```

### Container Max Widths
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;
```

---

## Component Styles

### Buttons

#### Primary Button
```css
.btn-primary {
  background-color: #64ffda;
  color: #0a192f;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  border: 2px solid #64ffda;
}

.btn-primary:hover {
  background-color: transparent;
  color: #64ffda;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(100, 255, 218, 0.3);
}
```

#### Secondary Button
```css
.btn-secondary {
  background-color: transparent;
  color: #64ffda;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  border: 2px solid #64ffda;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: rgba(100, 255, 218, 0.1);
  transform: translateY(-2px);
}
```

#### Button Sizes
```css
.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}
```

### Cards

#### Service Card
```css
.service-card {
  background: #112240;
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease;
  border: 1px solid #233554;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  border-color: #64ffda;
}

.service-card-icon {
  width: 64px;
  height: 64px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #64ffda;
}
```

#### Stat Card
```css
.stat-card {
  text-align: center;
  padding: 2rem;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #64ffda;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #8892b0;
  font-size: 1rem;
  font-weight: 500;
}
```

### Navigation

#### Header/Navbar
```css
.header {
  background-color: rgba(10, 25, 47, 0.95);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid #233554;
}

.nav-link {
  color: #8892b0;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
  font-weight: 500;
}

.nav-link:hover {
  color: #64ffda;
}

.nav-link-active {
  color: #64ffda;
}
```

#### Mobile Menu
```css
.mobile-menu {
  background-color: #112240;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem;
  z-index: 999;
}

.mobile-nav-item {
  color: #8892b0;
  padding: 1rem 0;
  border-bottom: 1px solid #233554;
  font-size: 1.25rem;
}
```

### Forms

#### Input Fields
```css
.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #112240;
  border: 1px solid #233554;
  border-radius: 4px;
  color: #e6f1ff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #64ffda;
  box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
}

.form-input::placeholder {
  color: #8892b0;
}

.form-label {
  display: block;
  color: #8892b0;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}
```

### Badges

#### Certification Badge
```css
.certification-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid #64ffda;
  border-radius: 9999px;
  color: #64ffda;
  font-size: 0.875rem;
  font-weight: 500;
}
```

---

## Iconography

### Icon Style
- **Type:** Outline icons with consistent stroke width
- **Size:** 24px × 24px (default), scalable
- **Stroke:** 2px consistent width
- **Color:** Match text color or accent color

### Icon Library Recommendations
- **Heroicons** - Clean, consistent SVG icons
- **Lucide Icons** - Modern, open-source
- **Feather Icons** - Simple, beautiful
- **Font Awesome** - Comprehensive library

### Icon Usage
```css
.icon-sm {
  width: 16px;
  height: 16px;
}

.icon-md {
  width: 24px;
  height: 24px;
}

.icon-lg {
  width: 32px;
  height: 32px;
}

.icon-xl {
  width: 64px;
  height: 64px;
}
```

---

## Imagery

### Hero Images
- **Style:** Dark, cybersecurity-themed backgrounds
- **Elements:** Abstract network graphics, digital patterns, code snippets
- **Overlay:** Dark gradient overlay for text readability
- **Size:** Full viewport width, 600-800px height

### Service Icons
- **Style:** Consistent line art or filled icons
- **Color:** Accent color (cyan/teal) on dark background
- **Size:** 64px × 64px

### Team/Office Photos
- **Style:** Professional, well-lit
- **Treatment:** Slight desaturation or blue tint for consistency
- **Format:** High-resolution JPEG or WebP

### Client Logos
- **Style:** Grayscale or monochrome for consistency
- **Treatment:** Opacity reduction with hover to full color
- **Format:** SVG preferred, PNG with transparent background

---

## Animations & Transitions

### Transition Timing
```css
--transition-fast: 0.15s ease;
--transition-base: 0.3s ease;
--transition-slow: 0.5s ease;
```

### Common Transitions
```css
/* Hover Transition */
.hover-transition {
  transition: all 0.3s ease;
}

/* Transform on Hover */
.hover-lift {
  transition: transform 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
}

/* Fade In */
.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
.slide-up {
  animation: slideUp 0.5s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Counter Animation (Statistics)
```javascript
// Animate numbers from 0 to final value
const animateCounter = (element, target, duration = 2000) => {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, 16);
};
```

---

## Responsive Design

### Breakpoints
```css
/* Mobile (default) */
/* 375px - 767px */

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1280px) { }
```

### Grid Layouts

#### Services Grid
```css
/* Mobile: 1 column */
.services-grid {
  display: grid;
  gap: 2rem;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

#### Stats Grid
```css
/* Mobile: 2×2 grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

/* Desktop: 4 columns in a row */
@media (min-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## Dark Mode Considerations

### Default Theme
The cybersecurity theme naturally leans dark, which is ideal for the brand.

### Light Mode Alternative
If light mode is needed:
- Invert background and text colors
- Maintain accent colors
- Adjust card shadows for depth
- Ensure sufficient contrast ratios

---

## Accessibility Guidelines

### Color Contrast
- **Normal Text:** Minimum 4.5:1 contrast ratio
- **Large Text:** Minimum 3:1 contrast ratio
- **UI Components:** Minimum 3:1 contrast ratio

### Focus States
```css
.focus-visible {
  outline: 2px solid #64ffda;
  outline-offset: 2px;
}
```

### Skip Links
```html
<a href="#main-content" class="skip-link">
  Skip to main content
</a>
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Design Assets Checklist

### Required Assets
- [ ] Company Logo (SVG, PNG)
- [ ] Favicon (ICO, PNG)
- [ ] Hero Background Images (×4 pages)
- [ ] Service Icons (×7 services)
- [ ] Certification Badges/Logos (×8 certifications)
- [ ] Client Logos (×6+ clients)
- [ ] Social Media Icons (×4-5 platforms)
- [ ] Team Photos (optional)
- [ ] Office/Building Photos (optional)

### Image Specifications
- **Hero Images:** 1920×800px minimum, WebP format
- **Service Icons:** 64×64px, SVG format
- **Client Logos:** 200×100px, SVG or PNG
- **Team Photos:** 400×400px, JPEG or WebP
- **Certifications:** 150×150px, SVG or PNG

---

## Notes for Implementation

### Design Tools
- **Figma** - For design mockups and prototyping
- **Adobe XD** - Alternative for UI design
- **Canva** - Quick graphics and social media assets

### Development Tools
- **Tailwind CSS** - Utility-first CSS framework
- **Styled Components** - CSS-in-JS solution
- **CSS Modules** - Scoped CSS for components

### Performance Tips
1. Use SVG for icons and logos
2. Compress all images (TinyPNG, Squoosh)
3. Use next/image for automatic optimization
4. Implement lazy loading for images
5. Use CSS animations over JavaScript where possible
