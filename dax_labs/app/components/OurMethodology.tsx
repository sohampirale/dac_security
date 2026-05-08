'use client';

import { useMemo, useState } from 'react';

type StepKey = 'detect' | 'analyze' | 'kinetic';

const steps = [
  {
    key: 'detect' as StepKey,
    label: 'Detect',
    heading: 'Understand where your systems are exposed.',
    items: [
      'Applications',
      'Networks',
      'Infrastructure',
      'Configurations',
      'Weak points',
      'Internet-facing systems',
      'Exposure points',
      'Misconfigurations',
    ],
  },
  {
    key: 'analyze' as StepKey,
    label: 'Analyze',
    heading: 'Test your systems and understand what can go wrong.',
    items: [
      'VAPT',
      'Red Teaming',
      'Network testing',
      'Application testing',
      'Incident investigation',
      'Log analysis',
      'Root cause identification',
      'Digital forensics',
      'Mobile forensics',
      'Data recovery',
      'Evidence handling',
    ],
  },
  {
    key: 'kinetic' as StepKey,
    label: 'Kinetic',
    heading: 'Fix issues. Strengthen systems. Maintain readiness.',
    items: [
      'Hardening',
      'Secure configurations',
      'Security implementation',
      'System alignment',
      'SOC',
      'Monitoring',
      'Threat detection',
      'Incident response',
      'ISO 27001',
      'DPDP',
      'IoT',
      'OT / SCADA',
      'Awareness sessions',
      'Incident drills',
    ],
  },
];

export default function OurMethodology() {
  const [activeKey, setActiveKey] = useState<StepKey>('detect');
  const activeStep = useMemo(() => steps.find((step) => step.key === activeKey)!, [activeKey]);

  return (
    <section className="relative overflow-hidden bg-transparent py-20 sm:py-24">
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: 'linear-gradient(135deg, var(--color-bg-gradient-start) 0%, var(--color-bg-gradient-end) 100%)',
        }}
      />
      <div className="absolute inset-0 -z-10 opacity-[0.08]">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="methodologyGrid" width="5" height="5" patternUnits="userSpaceOnUse">
              <path d="M 5 0 L 0 0 0 5" fill="none" stroke="currentColor" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#methodologyGrid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[var(--color-accent)]">Our Methodology</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Our Methodology
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
            Every system is approached through a structured process of understanding, testing, strengthening, and
            maintaining security over time.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.34em] text-[var(--color-text-muted)]">
            Detect &rarr; Analyze &rarr; Kinetic
          </p>
        </div>

        <div className="mt-10 rounded-[28px] border border-[rgba(46,208,196,0.2)] bg-transparent p-6">
          <div className="relative rounded-2xl border border-[rgba(46,208,196,0.18)] bg-[rgba(8,16,24,0.92)] p-6 sm:p-8">
            <div className="absolute left-6 right-6 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(46,208,196,0.35)] to-transparent sm:block" />
            <div className="absolute bottom-6 left-8 top-6 w-px bg-gradient-to-b from-transparent via-[rgba(46,208,196,0.35)] to-transparent sm:hidden" />
            <div className="grid gap-6 sm:grid-cols-3">
              {steps.map((step, index) => {
                const isActive = step.key === activeKey;
                const isLast = index === steps.length - 1;
                return (
                  <button
                    key={step.key}
                    type="button"
                    onMouseEnter={() => setActiveKey(step.key)}
                    onFocus={() => setActiveKey(step.key)}
                    onClick={() => setActiveKey(step.key)}
                    aria-pressed={isActive}
                    className={`group relative z-10 rounded-2xl border px-6 py-6 text-left transition-all duration-300 sm:px-8 sm:py-7 ${
                      isActive
                        ? 'border-[rgba(46,208,196,0.75)] bg-[linear-gradient(135deg,rgba(46,208,196,0.16),rgba(10,22,32,0.9))] shadow-[0_16px_40px_rgba(8,18,28,0.55)]'
                        : 'border-[rgba(255,255,255,0.08)] bg-[rgba(6,12,18,0.6)] hover:border-[rgba(46,208,196,0.45)]'
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-full border text-xs font-semibold uppercase tracking-[0.3em] ${
                          isActive
                            ? 'border-[rgba(46,208,196,0.75)] text-[var(--color-text-primary)]'
                            : 'border-[rgba(255,255,255,0.12)] text-[var(--color-text-muted)]'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p
                          className={`text-sm font-semibold uppercase tracking-[0.35em] sm:text-base ${
                            isActive ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-muted)]'
                          }`}
                        >
                          {step.label}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`mt-6 h-1.5 w-full rounded-full transition-colors ${
                        isActive
                          ? 'bg-[linear-gradient(90deg,rgba(46,208,196,0.75),rgba(46,208,196,0.15))]'
                          : 'bg-[rgba(255,255,255,0.08)] group-hover:bg-[rgba(46,208,196,0.2)]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[rgba(46,208,196,0.18)] bg-[rgba(6,14,22,0.85)] p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent)]">
                  {activeStep.label}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl">
                  {activeStep.heading}
                </h3>
              </div>
              <span className="rounded-full border border-[rgba(46,208,196,0.35)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
                {activeStep.label} Phase
              </span>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {activeStep.items.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(8,16,24,0.75)] px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
