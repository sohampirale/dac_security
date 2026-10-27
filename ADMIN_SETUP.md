# DAK Security — Content Admin Panel

The Admin Panel allows business, marketing, and sales leadership to update website content directly through a secure web interface without modifying code or styling.

## Accessing the Admin Panel
- **URL**: `/admin` (or `/admin/login`)
- **Username**: `admin`
- **Password**: `CyberDAK@2026` *(also accepts `CyberDAC@2026`)*

> [!NOTE]
> Authentication is strictly validated on the Next.js server runtime using HTTP-only, secure cookies. Credentials are never verified on or leaked to the client bundle.

---

## What Can Be Managed

1. **IT Security Products** (`/admin/dashboard/it-security`)
   - Add new security products with auto-generated slugs
   - Delete products (with confirmation safeguards)
   - Clone / duplicate products (ideal for tailoring offerings before client meetings)
   - Reorder product catalog
   - Edit names, full/short descriptions, icon keys, categories, features, specs, use cases, and benefits

2. **Digital Forensic Hardware** (`/admin/dashboard/digital-forensic`)
   - Add, delete, duplicate, and reorder hardware systems (Workstations, Password Recovery Rigs, RF Shielding)
   - Edit tactical applications, law enforcement use cases, and hardware specs

3. **Forensic Software Tools** (`/admin/dashboard/forensic-software`)
   - Add, delete, duplicate, and reorder software tools (Mobile forensics, OSINT, memory analysis, CDR)
   - Edit technical specs, investigative benefits, and features

4. **Company & Contact Info** (`/admin/dashboard/company-info`)
   - Manage primary contact email (`info@daksecurity.com`)
   - Add, remove, and edit phone numbers (`+91 8668354806`, `+91 9604551338`)
   - Update Head Office (Noida) and Branch Office (Mumbai) address lines
   - Update official copyright notice

5. **Homepage & Leadership** (`/admin/dashboard/homepage`)
   - Customize hero banner badge, headline, teal accent word, and subtitle
   - Update primary and secondary call-to-action buttons
   - Add, edit, toggle visibility, and reorder executive leadership profiles (Vijay Kumar, etc.)

6. **Services & Methodology** (`/admin/dashboard/services`)
   - Customize the Detect, Analyze, Kinetic 3-pillar framework text
   - Add and update specialized security service categories and sub-services

7. **Trust Indicators & Statistics** (`/admin/dashboard/site-metadata`)
   - Adjust animated impact metrics (years of excellence, applications secured, clients protected)
   - Update capability bullet points and critical industry sectors
   - Manage compliance empanelments and trust badges (CERT-In, ISO 27001, etc.)

---

## Persistence Architecture (No External Database Required)

```
Admin Form  ──>  POST /api/admin/content
                       │
         ┌─────────────┴─────────────┐
         ▼                           ▼
 Local Disk / VPS            GitHub REST API
(Instant Update via fs)   (Triggers Vercel auto-deploy)
```

1. **Local Development & Standard Servers**:
   Changes write directly to the local JSON content files on disk (`app/data/content/*.json`), updating the site immediately.

2. **Vercel / Cloud Deployments**:
   If `GITHUB_TOKEN` and `GITHUB_REPO` environment variables are configured in Vercel:
   - Saving from the admin commits the updated content directly to the `main` branch of GitHub.
   - Vercel automatically detects the commit and redeploys the site within 1-2 minutes.

3. **One-Click Backup**:
   The admin header includes a **Backup JSON** button that exports a full snapshot of all 7 content sections in a single download.

---

## Cloud Deployment Configuration (Optional for GitHub Auto-Sync)

To enable GitHub commits from Vercel:

| Variable | Value | Description |
|---|---|---|
| `ADMIN_PASSWORD` | *(Optional)* | Custom override password (defaults to `CyberDAK@2026`) |
| `GITHUB_TOKEN` | `github_pat_...` | Fine-grained PAT with Contents Read & Write permission |
| `GITHUB_REPO` | `sohampirale/dac_security` | GitHub repository owner/name |
