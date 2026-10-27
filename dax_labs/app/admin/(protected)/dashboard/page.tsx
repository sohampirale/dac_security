'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SECTIONS = [
  {
    title: 'IT Security Products',
    badge: '16+ Products',
    description: 'Cloud defense, SIEM, WAF, DDoS mitigation, EDR, and enterprise infrastructure solutions.',
    href: '/admin/dashboard/it-security',
    tag: 'Catalog',
    accent: 'border-cyan-500/50 hover:border-cyan-400',
    iconColor: 'text-cyan-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Digital Forensic Hardware',
    badge: '3+ Systems',
    description: 'Forensic workstations, password cracking machines, RF shielding bags, and tactical lab equipment.',
    href: '/admin/dashboard/digital-forensic',
    tag: 'Hardware',
    accent: 'border-emerald-500/50 hover:border-emerald-400',
    iconColor: 'text-emerald-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Forensic Software Tools',
    badge: '15+ Tools',
    description: 'Mobile forensics, OSINT intelligence, memory analysis, CDR analysis, and disk inspection tools.',
    href: '/admin/dashboard/forensic-software',
    tag: 'Software',
    accent: 'border-purple-500/50 hover:border-purple-400',
    iconColor: 'text-purple-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Company & Contact Details',
    badge: 'Live Data',
    description: 'Noida Head Office, Mumbai Branch Office, contact phone numbers (+91 8668354806), email, and copyright.',
    href: '/admin/dashboard/company-info',
    tag: 'Global',
    accent: 'border-amber-500/50 hover:border-amber-400',
    iconColor: 'text-amber-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Homepage & Leadership',
    badge: 'Hero & Team',
    description: 'Hero heading, accent text, subtitle, CTA links, and executive leadership profiles & statements.',
    href: '/admin/dashboard/homepage',
    tag: 'Home',
    accent: 'border-rose-500/50 hover:border-rose-400',
    iconColor: 'text-rose-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Services & Methodology',
    badge: '3 Pillars',
    description: 'Detect, Analyze, Kinetic framework, comprehensive VAPT services, and technical deliverables.',
    href: '/admin/dashboard/services',
    tag: 'Framework',
    accent: 'border-teal-500/50 hover:border-teal-400',
    iconColor: 'text-teal-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Trust Indicators & Statistics',
    badge: 'Audited Proof',
    description: 'Animated counter metrics (8500+ apps, 2500+ clients), empanelments (CERT-In, ISO 27001), and capability lists.',
    href: '/admin/dashboard/site-metadata',
    tag: 'Proof',
    accent: 'border-indigo-500/50 hover:border-indigo-400',
    iconColor: 'text-indigo-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [downloading, setDownloading] = useState(false);
  const [navigatingHref, setNavigatingHref] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [githubPat, setGithubPat] = useState('');
  const [savedPat, setSavedPat] = useState(false);

  // Load stored GitHub PAT
  if (typeof window !== 'undefined' && !githubPat) {
    const stored = localStorage.getItem('dak_github_pat');
    if (stored) setGithubPat(stored);
  }

  function handleSavePat(e: React.FormEvent) {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      if (githubPat.trim()) {
        localStorage.setItem('dak_github_pat', githubPat.trim());
      } else {
        localStorage.removeItem('dak_github_pat');
      }
      setSavedPat(true);
      setTimeout(() => {
        setSavedPat(false);
        setShowSettings(false);
      }, 1200);
    }
  }

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/login');
    router.refresh();
  }

  async function handleExportBackup() {
    setDownloading(true);
    try {
      const res = await fetch('/api/admin/content?action=export_all');
      if (!res.ok) throw new Error('Failed to generate export');
      const data = await res.json();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `dak_security_backup_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      alert('Failed to download backup.');
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#070e17] text-white">
      {/* Top Navbar */}
      <header className="border-b border-white/10 bg-[#08101a]/80 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#20d7b5] animate-pulse" />
            <div>
              <h1 className="text-lg font-bold text-white tracking-tight">
                DAK Security Management Console
              </h1>
              <p className="text-[11px] text-gray-400">
                Active Session • Authenticated as <span className="text-[#20d7b5] font-mono">admin</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setShowSettings(true)}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 text-xs font-medium transition-colors flex items-center gap-1.5"
              title="Configure GitHub sync for Vercel auto-deployment"
            >
              <svg className="w-3.5 h-3.5 text-[#20d7b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{githubPat ? 'GitHub: Linked' : 'Sync Settings'}</span>
            </button>

            <button
              onClick={handleExportBackup}
              disabled={downloading}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 text-xs font-medium transition-colors flex items-center gap-1.5"
              title="Download JSON backup of all website content"
            >
              <svg className="w-3.5 h-3.5 text-[#20d7b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>{downloading ? 'Exporting...' : 'Backup JSON'}</span>
            </button>

            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 text-xs font-medium transition-colors flex items-center gap-1.5"
            >
              <span>View Site</span>
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>

            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 text-xs font-medium transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Banner */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-[rgba(16,30,46,0.9)] to-[rgba(10,20,32,0.9)] border border-[rgba(32,215,181,0.2)] shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[rgba(32,215,181,0.05)] rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#20d7b5] px-2.5 py-1 rounded-full bg-[#20d7b5]/10 border border-[#20d7b5]/20 inline-block mb-3">
              Meeting & Demo Customization Center
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Direct Content & Product Control
            </h2>
            <p className="text-sm text-gray-300 mt-2 leading-relaxed">
              Add new product offerings, adjust corporate contact lines, or tailor client-specific messaging right before critical demonstration meetings. Changes update the site safely without touching layout or styling.
            </p>
          </div>
        </div>

        {/* Section Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTIONS.map((section) => {
            const isLoading = navigatingHref === section.href;

            return (
              <Link
                key={section.href}
                href={section.href}
                prefetch={true}
                onClick={() => setNavigatingHref(section.href)}
                className={`group flex flex-col justify-between p-6 bg-[rgba(12,22,34,0.85)] border ${
                  isLoading
                    ? 'border-[#20d7b5] ring-1 ring-[#20d7b5] shadow-[0_0_20px_rgba(32,215,181,0.2)]'
                    : section.accent
                } rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] backdrop-blur relative overflow-hidden`}
              >
                {isLoading && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#20d7b5] animate-pulse" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${section.iconColor}`}>
                      {isLoading ? (
                        <svg className="w-6 h-6 animate-spin text-[#20d7b5]" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                      ) : (
                        section.icon
                      )}
                    </div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-white/5 text-gray-400 border border-white/10 group-hover:border-white/20 transition-colors">
                      {section.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#20d7b5] transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    {section.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-[#20d7b5] transition-colors">
                  {isLoading ? (
                    <span className="flex items-center gap-2 text-[#20d7b5]">
                      <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Opening {section.title}...
                    </span>
                  ) : (
                    <>
                      <span>Edit Section</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Operational Runbook Card */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
            Quick Operational Guide for Sales & Presentations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-400 leading-relaxed">
            <div className="p-3 bg-black/30 rounded-lg border border-white/5">
              <span className="text-white font-semibold block mb-1">1. Add or Clone Products</span>
              Use the &quot;+ Add Product&quot; or &quot;Duplicate&quot; button to quickly produce custom product offerings for specific industry meetings.
            </div>
            <div className="p-3 bg-black/30 rounded-lg border border-white/5">
              <span className="text-white font-semibold block mb-1">2. Safe Text-Only Scope</span>
              All form fields edit text, bullet points, and key-value specs only. CSS layout, responsive breakpoints, and styling are completely protected.
            </div>
            <div className="p-3 bg-black/30 rounded-lg border border-white/5">
              <span className="text-white font-semibold block mb-1">3. Automated Persistence</span>
              Click &quot;Save All Changes&quot; to write to storage. In cloud deployments with GitHub configured, Vercel automatically deploys within 1-2 minutes.
            </div>
          </div>
        </div>
      </main>

      {/* GitHub Sync Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0b141e] border border-white/20 rounded-2xl p-6 shadow-2xl text-white max-w-md w-full">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#20d7b5]" />
                <h3 className="text-base font-bold text-white">Vercel Auto-Deploy Settings</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSavePat} className="mt-4 space-y-4">
              <p className="text-xs text-gray-300 leading-relaxed">
                By default, content changes save immediately to this demonstration session. To trigger an automatic permanent redeploy on Vercel, enter a GitHub Personal Access Token (PAT).
              </p>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                  GitHub Personal Access Token (Optional)
                </label>
                <input
                  type="password"
                  value={githubPat}
                  onChange={(e) => setGithubPat(e.target.value)}
                  placeholder="github_pat_..."
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-mono placeholder-gray-500 focus:outline-none focus:border-[#20d7b5] text-xs"
                />
                <p className="text-[11px] text-gray-500 mt-1">
                  Stored securely in this browser&apos;s local storage.
                </p>
              </div>

              {savedPat && (
                <div className="p-2.5 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-xs flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Settings updated!
                </div>
              )}

              <div className="flex justify-end gap-2.5 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setShowSettings(false)}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#20d7b5] text-[#070d14] hover:bg-[#17b89b] text-xs font-semibold"
                >
                  Save Settings
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
