'use client';

import { useState } from 'react';

const navItems = [
  { name: 'Who We Are', href: '/#who-we-are' },
  { name: 'Spheres', href: '/spheres' },
  { name: 'Methodology', href: '/methodology' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(8,18,28,0.86)] backdrop-blur-xl transition-colors duration-300">
      <nav className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-[0.08em] text-[var(--color-text-primary)] lg:text-2xl">
                DAK <span className="text-[var(--color-accent)]">SECURITY</span>
              </span>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-8 h-full">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative inline-flex items-center py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-text-primary)]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md border border-[var(--color-border)] bg-[rgba(11,24,37,0.62)] p-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-md border border-transparent px-4 py-2 text-base font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border)] hover:text-[var(--color-text-primary)]"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

    </header>
  );
}
