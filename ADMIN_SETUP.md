# Admin Panel Setup Guide

The admin panel lets you edit website content directly through a web interface. Changes are committed to GitHub, and Vercel automatically redeploys.

## Admin URL: `/admin`

---

## What You Need to Do

### 1. Create a GitHub Personal Access Token (PAT)

1. Go to https://github.com/settings/tokens
2. Click **Generate new token** → **Fine-grained token**
3. Set:
   - **Repository access**: `Only select repositories` → select `sohampirale/dac_security`
   - **Permissions** → **Contents**: `Read and write`
4. Click **Generate token** and **copy the token** (it starts with `github_pat_...`)

### 2. Add Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these three variables:

| Variable | Value | Notes |
|---|---|---|
| `ADMIN_PASSWORD` | `choose-a-strong-password` | Used to log in at `/admin/login` |
| `GITHUB_TOKEN` | `github_pat_...` | The token from step 1 |
| `GITHUB_REPO` | `sohampirale/dac_security` | Your GitHub repo (owner/name) |

4. After adding, go to **Deployments** and trigger a **redeploy** (or push a commit)

### 3. Access the Admin Panel

1. Go to `https://yourdomain.com/admin`
2. Log in with the password you set as `ADMIN_PASSWORD`
3. Click a section to edit its content
4. Make changes and click **Save All Changes**
5. Vercel deploys automatically within a few minutes

---

## What Can Be Edited

- **IT Security Products** — all product details (name, description, features, specs, etc.)
- **Digital Forensic Products** — all product details
- **Forensic Software Tools** — all tool details

Only content JSON files are editable. CSS, JavaScript, and page structure cannot be changed from the admin panel.

## How It Works

```
Admin Form → GitHub API → Commit to main branch → Vercel auto-deploy
```

No SSH keys, no manual deployment. Everything flows through the GitHub API.

## Troubleshooting

| Issue | Fix |
|---|---|
| Login page shows "Setup Required" | `ADMIN_PASSWORD` env var is missing in Vercel |
| Save fails with auth error | `GITHUB_TOKEN` is missing or has wrong permissions |
| Save fails with "Not Found" | `GITHUB_REPO` is wrong, or the file path doesn't exist on GitHub |
| Changes not showing on site | Vercel deploy takes 1-3 minutes after commit |
