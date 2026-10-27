'use client';

import { useState } from 'react';
import { forensicSoftwareTools as defaultTools } from '../data/forensic-software-tools';
import type { ForensicSoftwareData } from '../data/forensic-software-tools';
import { useContentData } from '../data/useContentData';

export default function ForensicSoftware() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const tools = useContentData<ForensicSoftwareData[]>('forensic-software-tools.json', defaultTools);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-3">
            Digital Forensics
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)]">
            Forensic Software Tools
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-text-secondary)]">
            Comprehensive suite of specialized forensic software for extraction, analysis, and investigation across multiple platforms.
          </p>
        </div>

        {/* Tools Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {(tools || []).map((tool, index) => {
            const title = tool.name || (tool as any).category;
            const desc = tool.shortDescription || (tool as any).description;
            return (
              <div
                key={tool.slug || index}
                className="bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)] overflow-hidden transition-all duration-300"
              >
                {/* Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-4 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left hover:bg-[var(--color-bg-tertiary)] transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-accent)]">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                      </svg>
                    </div>
                    <span className="text-base font-semibold text-[var(--color-text-primary)] sm:text-lg">
                      {title}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-[var(--color-text-muted)] transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 sm:text-base">
                      {desc}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {(tool.features || []).map((feature: string, fIdx: number) => (
                        <div key={fIdx} className="flex items-start">
                          <svg
                            className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-[var(--color-accent)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-xs text-[var(--color-text-muted)] sm:text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
