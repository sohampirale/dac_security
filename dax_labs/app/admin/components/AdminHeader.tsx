'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface AdminHeaderProps {
  title: string;
  subtitle?: string;
  backHref?: string;
}

export default function AdminHeader({
  title,
  subtitle,
  backHref = '/admin/dashboard',
}: AdminHeaderProps) {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [githubPat, setGithubPat] = useState('');
  const [savedPat, setSavedPat] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('dak_github_pat');
      if (stored) setGithubPat(stored);
    }
  }, []);

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/login');
    router.refresh();
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

  return (
    <>
      <header className="border-b border-white/10 bg-[#08101a]/80 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {backHref && (
              <Link
                href={backHref}
                prefetch={true}
                onClick={() => setIsNavigating(true)}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 text-xs font-medium transition-colors flex items-center gap-1.5"
              >
                {isNavigating ? (
                  <>
                    <svg className="animate-spin h-3.5 w-3.5 text-[#20d7b5]" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    <span>Loading Dashboard...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Dashboard</span>
                  </>
                )}
              </Link>
            )}
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#20d7b5]" />
                <h1 className="text-xl font-bold text-white tracking-tight">{title}</h1>
              </div>
              {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
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

            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 text-xs font-medium transition-colors flex items-center gap-1.5"
            >
              <span>Live Site</span>
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
    </>
  );
}
