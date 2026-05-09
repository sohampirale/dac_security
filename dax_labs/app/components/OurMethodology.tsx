'use client';

import { useMemo, useState } from 'react';

type StepKey = 'detect' | 'analyze' | 'kinetic';

type StepItem = {
  label: string;
  href: string;
};

const steps = [
  {
    key: 'detect' as StepKey,
    label: 'Detect',
    heading: 'Understand where your systems are exposed.',
    items: [
      { label: 'Applications', href: '/services#detect' },
      { label: 'Networks', href: '/services#detect' },
      { label: 'Infrastructure', href: '/services#detect' },
      { label: 'Configurations', href: '/services#detect' },
      { label: 'Weak points', href: '/services#detect' },
      { label: 'Internet-facing systems', href: '/services#detect' },
      { label: 'Exposure points', href: '/services#detect' },
      { label: 'Misconfigurations', href: '/services#detect' },
    ] as StepItem[],
  },
  {
    key: 'analyze' as StepKey,
    label: 'Analyze',
    heading: 'Test your systems and understand what can go wrong.',
    items: [
      { label: 'VAPT', href: '/services#analyze' },
      { label: 'Red Teaming', href: '/services#analyze' },
      { label: 'Network testing', href: '/services#analyze' },
      { label: 'Application testing', href: '/services#analyze' },
      { label: 'Incident investigation', href: '/services#analyze' },
      { label: 'Log analysis', href: '/services#analyze' },
      { label: 'Root cause identification', href: '/services#analyze' },
      { label: 'Digital forensics', href: '/services#analyze' },
      { label: 'Mobile forensics', href: '/services#analyze' },
      { label: 'Data recovery', href: '/services#analyze' },
      { label: 'Evidence handling', href: '/services#analyze' },
    ] as StepItem[],
  },
  {
    key: 'kinetic' as StepKey,
    label: 'Kinetic',
    heading: 'Fix issues. Strengthen systems. Maintain readiness.',
    items: [
      { label: 'Hardening', href: '/services#kinetic' },
      { label: 'Secure configurations', href: '/services#kinetic' },
      { label: 'Security implementation', href: '/services#kinetic' },
      { label: 'System alignment', href: '/services#kinetic' },
      { label: 'SOC', href: '/services#kinetic' },
      { label: 'Monitoring', href: '/services#kinetic' },
      { label: 'Threat detection', href: '/services#kinetic' },
      { label: 'Incident response', href: '/services#kinetic' },
      { label: 'ISO 27001', href: '/services#kinetic' },
      { label: 'DPDP', href: '/services#kinetic' },
      { label: 'IoT', href: '/services#kinetic' },
      { label: 'OT / SCADA', href: '/services#kinetic' },
      { label: 'Awareness sessions', href: '/services#kinetic' },
      { label: 'Incident drills', href: '/services#kinetic' },
    ] as StepItem[],
  },
];

export default function OurMethodology() {
  const [activeKey, setActiveKey] = useState<StepKey>('detect');
  const [showAllKey, setShowAllKey] = useState<StepKey | null>(null);
  const activeStep = useMemo(() => steps.find((step) => step.key === activeKey)!, [activeKey]);
  const activeIndex = useMemo(() => Math.max(0, steps.findIndex((step) => step.key === activeKey)), [activeKey]);

  return (
    <section id="our-methodology" className="relative overflow-hidden bg-transparent py-20 sm:py-24">
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: 'linear-gradient(135deg, var(--color-bg-gradient-start) 0%, var(--color-bg-gradient-end) 100%)',
        }}
      />
      <div className="absolute inset-0 -z-10 opacity-[0.06]">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="methodologyGrid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.3" />
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

        <div className="mt-10 rounded-[28px] border border-[rgba(46,208,196,0.2)] bg-transparent p-5 sm:p-6">
          <div className="relative rounded-2xl border border-[rgba(46,208,196,0.18)] bg-[rgba(8,16,24,0.92)] p-6 sm:p-8">
            <div className="absolute bottom-6 left-8 top-6 w-px bg-gradient-to-b from-transparent via-[rgba(46,208,196,0.35)] to-transparent sm:hidden" />
            <div className="grid gap-6 sm:gap-6 sm:grid-cols-3 sm:hidden">
              {steps.map((step, index) => {
                const isActive = step.key === activeKey;
                return (
                  <div key={step.key} className="relative rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(6,12,18,0.6)] p-5">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveKey(step.key);
                        setShowAllKey(null);
                      }}
                      aria-pressed={isActive}
                      aria-expanded={isActive}
                      className="flex w-full items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-11 w-11 items-center justify-center rounded-full border text-xs font-semibold uppercase tracking-[0.3em] ${
                            isActive
                              ? 'border-[rgba(46,208,196,0.9)] bg-[rgba(9,22,30,0.95)] text-[var(--color-text-primary)] shadow-[0_0_18px_rgba(46,208,196,0.25)]'
                              : 'border-[rgba(255,255,255,0.16)] bg-[rgba(8,16,24,0.95)] text-[var(--color-text-muted)]'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--color-text-muted)]">
                            {step.label}
                          </p>
                          <p className="mt-2 text-base font-semibold text-[var(--color-text-primary)]">
                            {step.heading}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`ml-3 h-2.5 w-2.5 rounded-full border transition-colors ${
                          isActive
                            ? 'border-[rgba(46,208,196,0.9)] bg-[rgba(46,208,196,0.4)]'
                            : 'border-[rgba(255,255,255,0.18)]'
                        }`}
                      />
                    </button>
                    <div
                      className={`mt-5 overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(8,16,24,0.75)] transition-all duration-300 ${
                        isActive ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent)]">
                          {step.label} Phase
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                          {step.heading}
                        </p>
                        <div className="mt-4 grid gap-2">
                          {(showAllKey === step.key ? step.items : step.items.slice(0, 4)).map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(8,16,24,0.85)] px-3 py-2 text-xs font-medium text-[var(--color-text-secondary)]"
                            >
                              {item.label}
                            </a>
                          ))}
                          {step.items.length > 4 && (
                            <button
                              type="button"
                              onClick={() => setShowAllKey(showAllKey === step.key ? null : step.key)}
                              className="rounded-lg border border-[rgba(46,208,196,0.35)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]"
                            >
                              {showAllKey === step.key ? 'Show less' : `Show ${step.items.length - 4} more`}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="hidden gap-4 sm:gap-6 sm:grid sm:grid-cols-3">
              {steps.map((step, index) => {
                const isActive = step.key === activeKey;
                return (
                  <button
                    key={step.key}
                    type="button"
                    onMouseEnter={() => setActiveKey(step.key)}
                    onFocus={() => setActiveKey(step.key)}
                    onClick={() => setActiveKey(step.key)}
                    aria-pressed={isActive}
                    className={`group relative z-10 rounded-2xl border px-4 py-5 text-left transition-all duration-300 sm:px-8 sm:py-7 ${
                      isActive
                        ? 'border-[rgba(46,208,196,0.75)] bg-[linear-gradient(135deg,rgba(46,208,196,0.16),rgba(10,22,32,0.9))] shadow-[0_16px_40px_rgba(8,18,28,0.55)]'
                        : 'border-[rgba(255,255,255,0.08)] bg-[rgba(6,12,18,0.6)] hover:border-[rgba(46,208,196,0.45)]'
                    }`}
                  >
                    {index < steps.length - 1 && (
                      <>
                        <span
                          className="pointer-events-none absolute left-[46px] top-[46px] hidden h-[2px] bg-[rgba(255,255,255,0.18)] sm:left-[54px] sm:top-[50px] sm:block z-0"
                          style={{ width: 'calc(100% + 28px)' }}
                        />
                        <span
                          className={`pointer-events-none absolute left-[46px] top-[46px] hidden h-[3px] sm:left-[54px] sm:top-[50px] sm:block z-0 ${
                            activeIndex > index
                              ? 'bg-[linear-gradient(90deg,rgba(46,208,196,0.98),rgba(46,208,196,0.18))] shadow-[0_0_14px_rgba(46,208,196,0.45)]'
                              : 'bg-transparent'
                          }`}
                          style={{ width: 'calc(100% + 28px)' }}
                        />
                      </>
                    )}
                    <div className="relative z-10 flex flex-col items-start gap-3">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-full border text-xs font-semibold uppercase tracking-[0.3em] ${
                          isActive
                            ? 'border-[rgba(46,208,196,0.9)] bg-[rgba(9,22,30,0.95)] text-[var(--color-text-primary)] shadow-[0_0_18px_rgba(46,208,196,0.25)]'
                            : 'border-[rgba(255,255,255,0.16)] bg-[rgba(8,16,24,0.95)] text-[var(--color-text-muted)]'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p
                        className={`text-sm font-semibold uppercase tracking-[0.35em] sm:text-base ${
                          isActive ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-muted)]'
                        }`}
                      >
                        {step.label}
                      </p>
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

          <div className="mt-8 hidden rounded-2xl border border-[rgba(46,208,196,0.18)] bg-[rgba(6,14,22,0.85)] p-5 sm:block sm:p-8">
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
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(8,16,24,0.75)] px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
