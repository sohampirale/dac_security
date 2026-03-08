# DAC Security Website - Updated Guidelines

**Last Updated:** March 8, 2026  
**Session:** 2 (Services Page Completed)

---

## Project Status

### ✅ Completed Pages
1. **Homepage** (`/`) - All sections complete
2. **Services Page** (`/services`) - Fully implemented with:
   - Hero section with breadcrumb
   - 7 expandable service categories
   - 5-step methodology section
   - 10 industries served
   - CTA section with statistics

### 🔄 In Progress
- None

### ⏳ Pending Pages
1. **About Page** (`/about` or `/who-we-are`)
2. **Contact Page** (`/contact`)
3. **Products Page** (`/products`)
4. **Resources Page** (`/resources`)
5. **Clients Page** (`/clients`)

---

## Updated File Structure

```
dax_labs/
├── app/
│   ├── components/
│   │   ├── Header.tsx                ✅ MODIFIED - Services links to /services
│   │   ├── Hero.tsx                  ✅
│   │   ├── Commitment.tsx            ✅
│   │   ├── ServicesOverview.tsx      ✅ MODIFIED - Cards link to /services
│   │   ├── Statistics.tsx            ✅
│   │   ├── Certifications.tsx        ✅
│   │   ├── Testimonials.tsx          ✅
│   │   ├── CTASection.tsx            ✅
│   │   ├── Footer.tsx                ✅ MODIFIED - Services list updated
│   │   ├── ServicesHero.tsx          ✅ NEW
│   │   ├── ServicesDetail.tsx        ✅ NEW
│   │   ├── ServicesMethodology.tsx   ✅ NEW
│   │   ├── ServiceIndustries.tsx     ✅ NEW
│   │   └── ServicesCTA.tsx           ✅ NEW
│   ├── services/
│   │   └── page.tsx                  ✅ NEW - Services page
│   ├── globals.css                   ✅
│   ├── layout.tsx                    ✅
│   └── page.tsx                      ✅
├── package.json
└── tsconfig.json
```

---

## Navigation Structure (Updated)

### Header Navigation
```
- Who We Are → /#who-we-are
- Services → /services (CHANGED)
- Products → /#products
- Our Clients → /#clients
- Resources → /#resources
- Contact → /#contact
```

### Services Page Internal Navigation
```
- Home (breadcrumb) → /
- Each service category → Expandable accordion
- CTA buttons → /#contact (scrolls to contact on homepage)
```

### Footer Navigation
```
Company:
- About Us → /#who-we-are
- Our Team → /#who-we-are
- Careers → /#resources
- News & Updates → /#resources
- Contact Us → /#contact (ADDED)

Our Services: (UPDATED - All link to /services)
- Application Security Assessment
- Network Security Assessment
- Compliance and Data Privacy
- Red Teaming
- IoT Security Assessment
- Security Operation Center
- Digital Forensic Services

Resources & Legal:
- Blog → /#resources
- Case Studies → /#resources
- Whitepapers → /#resources
- Privacy Policy → /#resources
- Terms of Service → /#resources
```

---

## Services Page Details

### URL
`/services`

### Components (in order)
1. `ServicesHero` - Page header with breadcrumb
2. `ServicesDetail` - 7 expandable service categories
3. `ServicesMethodology` - 5-step process
4. `ServiceIndustries` - 10 industries grid
5. `ServicesCTA` - Final CTA with statistics

### Service Categories (7 Total)

| # | Service | Sub-Services | Key Benefits |
|---|---------|--------------|--------------|
| 1 | Application Security Assessment | 7 | 5 |
| 2 | Network Security Assessment | 8 | 5 |
| 3 | Compliance and Data Privacy | 10 | 5 |
| 4 | Red Teaming | 8 | 5 |
| 5 | IoT Security Assessment | 2 | 5 |
| 6 | Security Operation Center | 12 | 5 |
| 7 | Digital Forensic Services | 7 | 5 |

**Total:** 54 sub-services documented

### Methodology Steps (5)
1. Discovery & Planning
2. Assessment & Testing
3. Analysis & Reporting
4. Remediation Support
5. Continuous Improvement

### Industries Served (10)
1. BFSI
2. Government & Public Sector
3. Healthcare
4. E-commerce & Retail
5. Manufacturing
6. IT & ITES
7. Telecommunications
8. Energy & Utilities
9. Education
10. Transportation & Logistics

---

## Design System (Unchanged)

### Theme
- **Light mode ONLY** - No dark mode implementation
- **Color scheme:** Black text on white background
- **Target audience:** Government, enterprise, BFSI

### Color Variables (from globals.css)
```css
--color-bg-primary: #ffffff
--color-bg-secondary: #f8f9fa
--color-bg-tertiary: #f1f3f4
--color-text-primary: #1a1a1a
--color-text-secondary: #4a4a4a
--color-text-muted: #717171
--color-text-light: #ffffff
--color-accent: #1a1a1a
--color-accent-hover: #000000
--color-border: #e5e5e5
--color-border-hover: #1a1a1a
```

### Component Patterns
```tsx
// Section structure
<section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>

// Card with hover
<div className="group p-6 bg-[var(--color-bg-primary)] rounded-lg
                border border-[var(--color-border)]
                hover:border-[var(--color-border-hover)]
                transition-all duration-300 hover-lift">
  {/* Content */}
</div>
```

---

## Technical Requirements (Updated)

### ✅ Confirmed Working
- Next.js 16 with Turbopack
- TypeScript - No errors
- Tailwind CSS v4
- Static site generation
- Responsive design (mobile-first)
- CSS custom properties for theming
- Inline SVG icons (no libraries)

### 🚫 Do Not Change
- Light mode enforcement (`color-scheme: light only`)
- CSS variable usage (no hardcoded colors)
- No external dependencies policy
- Static content only (no database/API)
- Existing component patterns

---

## Build & Development Commands

```bash
# Navigate to project
cd dax_labs

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

**Current Build Status:** ✅ Passing (0 errors, 0 warnings)

---

## Next Session Priorities

### Priority 1 - Core Pages (Must Complete)

#### 1. About Page (`/about` or `/who-we-are`)
**Sections needed:**
- Hero section with page title
- Company history/timeline
- Mission & vision statements
- Leadership team (placeholder cards)
- Certifications showcase (reuse from homepage)
- Statistics section (reuse/expand from homepage)
- CTA section

**Files to create:**
- `app/about/page.tsx`
- `app/components/AboutHero.tsx`
- `app/components/AboutHistory.tsx`
- `app/components/AboutMission.tsx`
- `app/components/AboutTeam.tsx`
- `app/components/AboutCTA.tsx`

#### 2. Contact Page (`/contact`)
**Sections needed:**
- Hero section
- Contact form (Name, Email, Phone, Company, Message)
- Contact information (address, phone, email)
- Google Maps embed (placeholder)
- Business hours
- FAQ section (optional)

**Files to create:**
- `app/contact/page.tsx`
- `app/components/ContactHero.tsx`
- `app/components/ContactForm.tsx`
- `app/components/ContactInfo.tsx`
- `app/components/ContactMap.tsx`

### Priority 2 - Content Pages

#### 3. Products Page (`/products`)
- Product categories
- Partner logos
- Product cards

#### 4. Resources Page (`/resources`)
- Blog listing
- Case studies
- Whitepapers
- Research papers

#### 5. Clients Page (`/clients`)
- Client logos grid
- Testimonials carousel
- Success stories

---

## Content Customization Notes

### Services Page Content
All service content is based on AKS IT Services reference:
- Service names match exactly
- Sub-services are comprehensive
- Benefits are tailored to each service
- Methodology follows industry standard

### Placeholder Content Used
- Company name: DAC Security (not AKS IT Services)
- Contact info: Placeholder (contact@dacsecurity.com)
- Address: Placeholder (123 Security Boulevard, Tech City, TC 12345)
- Phone: Placeholder (+1 (234) 567-890)

### Content to Replace Later
- Real company address
- Actual phone numbers
- Real client testimonials for services page
- Actual case studies/examples
- Team member photos and bios

---

## Testing Checklist Template

For each new page, verify:
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
- [ ] Breadcrumb navigation works
- [ ] CTA buttons function correctly

---

## Reference Materials

### Original Prompt
See: `implementation/prompt.md`

### Session 1 Summary
See: `implementation/session-summary.md`

### Session 2 Summary (This Session)
See: `implementation/session-2-services-page.md`

### Research Materials
See: `research/` directory
- `services-content.md` - Detailed service breakdown
- `homepage-content.md` - AKS IT Services homepage structure
- `design-elements.md` - Design patterns and colors
- `site-structure.md` - Complete site hierarchy

---

## Important Notes for Next Agent

1. **Services page is complete** - Do not modify unless fixing bugs
2. **Header navigation is updated** - Services links to `/services`
3. **Homepage service cards are updated** - Match AKS IT Services names
4. **Footer services list is updated** - All 7 services listed
5. **Light mode is enforced** - Do not add dark mode
6. **No external dependencies** - Use inline SVG for icons
7. **CSS variables only** - No hardcoded colors
8. **Build must pass** - Always run `npm run build` before marking complete

---

## Quick Start for Next Session

```bash
# 1. Navigate to project
cd /home/soham/coding/proj/DAX_LABS/dax_labs

# 2. Start dev server
npm run dev

# 3. Open browser
# Homepage: http://localhost:3000
# Services: http://localhost:3000/services

# 4. Create new page (example: About)
mkdir -p app/about
# Create page.tsx and components

# 5. Test build
npm run build

# 6. Verify in browser
```

---

**Session Completed By:** AI Assistant  
**Date:** March 8, 2026  
**Status:** Services Page ✅ Complete  
**Next Priority:** About Page (`/about`) and Contact Page (`/contact`)
