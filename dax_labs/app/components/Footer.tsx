'use client';

import { companyInfo } from '../data/company-info';
import type { CompanyInfo } from '../data/company-info';
import { useContentData } from '../data/useContentData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const info = useContentData<CompanyInfo>('company-info.json', companyInfo);

  return (
    <footer className="border-t border-[var(--color-border)] bg-[rgba(8,17,26,0.94)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">Email</h3>
            <a
              href={`mailto:${info.email}`}
              className="mt-2 inline-block text-sm sm:text-lg text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]"
            >
              {info.email}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">Phone</h3>
            <div className="mt-2 space-y-1 text-sm sm:text-lg text-[var(--color-text-primary)]">
              {info.phoneNumbers.map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="block transition-colors hover:text-[var(--color-accent)]"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="mb-2 block h-0.5 w-8 bg-[var(--color-accent)]" />
            {info.offices.map((office, idx) => (
              <div key={idx} className={idx > 0 ? 'mt-4' : ''}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">
                  {office.type}
                </h3>
                <address className="mt-2 not-italic text-sm sm:text-lg leading-snug text-[var(--color-text-primary)]">
                  {office.addressLines.map((line, lIdx) => (
                    <span key={lIdx} className="block">{line}</span>
                  ))}
                </address>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--color-border)] pt-6">
          <p className="text-sm text-[var(--color-text-muted)]">
            {(info.copyright || companyInfo.copyright).replace('2026', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
}
