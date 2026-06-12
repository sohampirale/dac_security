'use client';

import Link from 'next/link';

const sections = [
  {
    title: 'IT Security Products',
    description: '16 products — WAF, DDoS, VPN, SIEM, DLP, EDR, and more',
    href: '/admin/dashboard/it-security',
    color: 'border-blue-500',
  },
  {
    title: 'Digital Forensic Products',
    description: '3 products — Forensic Workstation, Password Cracking, RF Shielding',
    href: '/admin/dashboard/digital-forensic',
    color: 'border-green-500',
  },
  {
    title: 'Forensic Software Tools',
    description: '15 tools — Mobile Forensics, OSINT, Malware Analysis, and more',
    href: '/admin/dashboard/forensic-software',
    color: 'border-purple-500',
  },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold">Content Admin</h1>
            <p className="text-gray-400 mt-2 text-sm">
              Select a section to edit its content. Changes are committed to GitHub and auto-deploy to Vercel.
            </p>
          </div>
          <LogoutButton />
        </div>

        <div className="grid gap-6">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className={`block p-6 bg-white/5 border-l-4 ${section.color} rounded-r-lg hover:bg-white/10 transition-colors`}
            >
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="text-gray-400 text-sm mt-1">{section.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-4 bg-white/5 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">How it works</h3>
          <ol className="mt-3 space-y-2 text-sm text-gray-400">
            <li>1. Click a section above to view its content</li>
            <li>2. Make your changes in the form</li>
            <li>3. Click &quot;Save Changes&quot; to commit to GitHub</li>
            <li>4. Vercel automatically redeploys with your changes</li>
          </ol>
        </div>

        <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <p className="text-sm text-yellow-400">
            Only the content JSON files are editable. CSS, JS, and page structure are protected.
          </p>
        </div>
      </div>
    </div>
  );
}

function LogoutButton() {
  return (
    <button
      onClick={async () => {
        await fetch('/api/admin/auth', { method: 'DELETE' });
        window.location.href = '/admin/login';
      }}
      className="text-sm text-gray-400 hover:text-white transition-colors"
    >
      Logout
    </button>
  );
}
