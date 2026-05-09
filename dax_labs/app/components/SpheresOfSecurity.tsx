'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

type SphereKey = 'core' | 'land' | 'water' | 'air' | 'fire' | 'space';

type Sphere = {
  key: SphereKey;
  label: string;
  title: string;
  philosophy?: string;
  services?: string[];
  products?: string[];
  training?: string[];
  logo: string;
  accent: string;
  orbitClass?: string;
};

const spheres: Sphere[] = [
  {
    key: 'core',
    label: 'DAK Security Labs',
    title: 'Command Core',
    logo: '/logos/IMG_2212.PNG',
    accent: 'from-[rgba(32,215,181,0.7)] to-[rgba(78,172,255,0.4)]',
  },
  {
    key: 'land',
    label: 'Land',
    title: 'Infrastructure & Operational Systems',
    philosophy: 'Secure the systems your operations depend on every day.',
    services: [
      'Infrastructure security assessments',
      'Network architecture review',
      'Perimeter audits',
      'System integration',
      'Infrastructure hardening',
    ],
    products: [
      'Switches',
      'Routers',
      'Firewalls',
      'Servers',
      'Workstations',
      'CCTV systems',
      'Access control systems',
      'UPS systems',
      'Structured cabling',
    ],
    training: [
      'Operational continuity drills',
      'Physical access protocols',
      'Infrastructure hardening workshops',
      'Response runbooks and reviews',
    ],
    logo: '/logos/IMG_2208.PNG',
    accent: 'from-[rgba(120,202,124,0.8)] to-[rgba(32,215,181,0.35)]',
    orbitClass: 'left-[4%] top-[16%] sm:left-[8%] sm:top-[18%]',
  },
  {
    key: 'water',
    label: 'Water',
    title: 'Information & Data Protection',
    philosophy: 'Protect how sensitive information moves, lives, and is accessed.',
    services: ['DPDP compliance', 'ISO 27001 implementation', 'DLP', 'Database security', 'Identity security'],
    products: ['DLP systems', 'MFA systems', 'IAM platforms', 'Backup systems', 'Encryption systems'],
    training: [
      'Data handling workshops',
      'Privacy governance briefings',
      'Access control tabletop drills',
      'DLP response simulations',
    ],
    logo: '/logos/IMG_2209.PNG',
    accent: 'from-[rgba(74,165,255,0.85)] to-[rgba(32,215,181,0.35)]',
    orbitClass: 'right-[6%] top-[8%] sm:right-[12%] sm:top-[12%]',
  },
  {
    key: 'air',
    label: 'Air',
    title: 'Cloud & Connected Environments',
    philosophy: 'Secure systems operating beyond traditional physical boundaries.',
    services: [
      'Cloud security assessments',
      'Wireless security testing',
      'SaaS security review',
      'WAF deployment',
      'SD-WAN security',
    ],
    products: ['WAF systems', 'VPN systems', 'Zero Trust platforms', 'Wireless security systems'],
    training: [
      'Cloud posture workshops',
      'Zero trust playbooks',
      'Wireless hardening labs',
      'SaaS risk readiness drills',
    ],
    logo: '/logos/IMG_2210.PNG',
    accent: 'from-[rgba(145,201,255,0.85)] to-[rgba(46,208,196,0.3)]',
    orbitClass: 'right-[2%] top-[44%] sm:right-[6%] sm:top-[46%]',
  },
  {
    key: 'fire',
    label: 'Fire',
    title: 'Active Defence & Response',
    philosophy: 'Test readiness, respond quickly, and act before threats escalate.',
    services: ['VAPT', 'Red Teaming', 'Ethical hacking', 'Incident response', 'Threat hunting', 'SOC operations'],
    products: ['SIEM platforms', 'EDR/XDR systems', 'Threat monitoring systems'],
    training: [
      'Incident war games',
      'Red/blue team exercises',
      'SOC shift handovers',
      'Response playbook drills',
    ],
    logo: '/logos/IMG_2208.PNG',
    accent: 'from-[rgba(255,132,95,0.9)] to-[rgba(255,208,120,0.35)]',
    orbitClass: 'right-[16%] bottom-[8%] sm:right-[22%] sm:bottom-[10%]',
  },
  {
    key: 'space',
    label: 'Space',
    title: 'Intelligence & Strategic Oversight',
    philosophy: 'Maintain visibility, intelligence, and long-term security direction.',
    services: [
      'Digital forensics',
      'Cyber crime investigation',
      'Threat intelligence',
      'vCISO consulting',
      'Cyber lab design',
    ],
    products: ['Forensic workstations', 'Investigation systems', 'Analytics systems', 'Threat intelligence platforms'],
    training: [
      'Threat intelligence briefings',
      'Forensics lab drills',
      'Executive tabletop exercises',
      'Strategic roadmap reviews',
    ],
    logo: '/logos/IMG_2209.PNG',
    accent: 'from-[rgba(162,143,255,0.85)] to-[rgba(46,208,196,0.35)]',
    orbitClass: 'left-[10%] bottom-[10%] sm:left-[14%] sm:bottom-[12%]',
  },
];

const sphereOrder = spheres.filter((sphere) => sphere.key !== 'core').map((sphere) => sphere.key);

export default function SpheresOfSecurity() {
  const [activeKey, setActiveKey] = useState<SphereKey>('land');
  const activeSphere = useMemo(() => spheres.find((sphere) => sphere.key === activeKey)!, [activeKey]);
  const selectableSpheres = useMemo(() => spheres.filter((sphere) => sphere.key !== 'core'), []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      if (!window.matchMedia('(min-width: 640px)').matches) {
        return;
      }
      setActiveKey((current) => {
        const currentIndex = sphereOrder.indexOf(current);
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % sphereOrder.length;
        return sphereOrder[nextIndex];
      });
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="spheres-of-security" className="relative overflow-hidden py-20 sm:py-24">
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            'radial-gradient(circle at 18% 18%, rgba(32,215,181,0.12), transparent 45%), radial-gradient(circle at 86% 24%, rgba(92,160,255,0.12), transparent 40%), linear-gradient(160deg, rgba(8,16,24,0.96) 0%, rgba(10,20,30,0.92) 45%, rgba(6,12,18,0.98) 100%)',
        }}
      />
      <div className="absolute inset-0 -z-10 opacity-[0.06]">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="spheresGrid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#spheresGrid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-md">
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Spheres of Security
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
            In defense of your digital sovereignty, we operate across the Five Spheres of Defence.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="relative hidden sm:block">
            <div className="relative mx-auto aspect-square w-full max-w-[360px] sm:max-w-[520px]">
              <div className="absolute inset-[12%] rounded-full border border-[rgba(255,255,255,0.08)]" />
              <div className="absolute inset-[20%] rounded-full border border-dashed border-[rgba(32,215,181,0.2)]" />
              <div className="absolute inset-[32%] rounded-full border border-[rgba(32,215,181,0.12)]" />
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(32,215,181,0.12),transparent_60%)]" />

              <div className="absolute inset-0 motion-safe:animate-[spin_90s_linear_infinite]">
                {selectableSpheres.map((sphere) => {
                    const isActive = activeKey === sphere.key;
                    return (
                      <button
                        key={sphere.key}
                        type="button"
                        onClick={() => setActiveKey(sphere.key)}
                        onMouseEnter={() => setActiveKey(sphere.key)}
                        onFocus={() => setActiveKey(sphere.key)}
                        aria-pressed={isActive}
                        className={`group absolute ${sphere.orbitClass} flex h-16 w-16 items-center justify-center rounded-full border text-left transition-all duration-300 motion-safe:[animation:spin_90s_linear_infinite_reverse] sm:h-24 sm:w-24 lg:h-28 lg:w-28 ${
                          isActive
                            ? 'border-[rgba(32,215,181,0.85)] bg-[rgba(8,18,28,0.92)] shadow-[0_0_24px_rgba(32,215,181,0.35)]'
                            : 'border-[rgba(255,255,255,0.14)] bg-[rgba(8,16,24,0.8)] hover:border-[rgba(32,215,181,0.5)]'
                        }`}
                      >
                        <div className="flex flex-col items-center gap-2 text-center">
                          <span
                            className="flex h-8 w-8 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(10,18,28,0.9)] shadow-[0_10px_20px_rgba(2,6,10,0.4)] sm:h-11 sm:w-11"
                          >
                            <Image src={sphere.logo} alt={sphere.label} width={26} height={26} className="object-contain" />
                          </span>
                          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--color-text-muted)] sm:block">
                            {sphere.label}
                          </span>
                        </div>
                        <span
                          className={`pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-br ${sphere.accent} opacity-${
                            isActive ? '40' : '0'
                          } blur-lg transition-opacity duration-300`}
                        />
                      </button>
                    );
                })}
              </div>
            </div>
          </div>

          <div className="sm:hidden">
            <div className="rounded-[24px] border border-[rgba(32,215,181,0.2)] bg-[rgba(8,16,24,0.85)] p-5">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
                Select Sphere
              </label>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(8,16,24,0.9)] shadow-[0_16px_35px_rgba(3,8,14,0.4)]">
                  <Image src={activeSphere.logo} alt={activeSphere.label} width={36} height={36} className="object-contain" />
                </div>
                <select
                  value={activeKey}
                  onChange={(event) => setActiveKey(event.target.value as SphereKey)}
                  className="flex-1 rounded-xl border border-[rgba(255,255,255,0.12)] bg-[rgba(6,12,18,0.72)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  aria-label="Select a security sphere"
                >
                  {selectableSpheres.map((sphere) => (
                    <option key={sphere.key} value={sphere.key}>
                      {sphere.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-6 rounded-[24px] border border-[rgba(32,215,181,0.2)] bg-[rgba(8,16,24,0.85)] p-5">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(8,16,24,0.9)] shadow-[0_16px_35px_rgba(3,8,14,0.4)]">
                  <Image src={activeSphere.logo} alt={activeSphere.label} width={36} height={36} className="object-contain" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--color-text-muted)]">
                    {activeSphere.title}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--color-text-primary)]">
                    {activeSphere.label}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {activeSphere.philosophy}
              </p>
              <div className="mt-5 grid gap-4">
                <a
                  href="/services"
                  className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(6,12,18,0.72)] p-4 transition duration-300 hover:border-[rgba(32,215,181,0.35)] hover:bg-[rgba(10,18,28,0.82)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-muted)]">Services</p>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-secondary)]">
                    {activeSphere.services?.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </a>
                <a
                  href="/products"
                  className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(6,12,18,0.72)] p-4 transition duration-300 hover:border-[rgba(32,215,181,0.35)] hover:bg-[rgba(10,18,28,0.82)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-muted)]">Products</p>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-secondary)]">
                    {activeSphere.products?.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </a>
                <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(6,12,18,0.72)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-muted)]">Training</p>
                  <ul className="mt-3 grid gap-2 text-sm text-[var(--color-text-secondary)]">
                    {activeSphere.training?.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="mt-10 rounded-[28px] border border-[rgba(32,215,181,0.2)] bg-[rgba(8,16,24,0.85)] p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(8,16,24,0.9)] shadow-[0_16px_35px_rgba(3,8,14,0.4)]`}
                >
                  <Image src={activeSphere.logo} alt={activeSphere.label} width={44} height={44} className="object-contain" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
                    {activeSphere.title}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl">
                    {activeSphere.label}
                  </h3>
                </div>
              </div>
              <p className="mt-6 text-base leading-relaxed text-[var(--color-text-secondary)]">
                {activeSphere.philosophy}
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <a
                  href="/services"
                  className="group rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(6,12,18,0.72)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgba(32,215,181,0.35)] hover:bg-[rgba(10,18,28,0.82)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-muted)]">Services</p>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-secondary)]">
                    {activeSphere.services?.map((item) => (
                      <li key={item} className="flex items-start gap-2 transition group-hover:text-[var(--color-text-primary)]">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </a>
                <a
                  href="/products"
                  className="group rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(6,12,18,0.72)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgba(32,215,181,0.35)] hover:bg-[rgba(10,18,28,0.82)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-muted)]">Products</p>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-secondary)]">
                    {activeSphere.products?.map((item) => (
                      <li key={item} className="flex items-start gap-2 transition group-hover:text-[var(--color-text-primary)]">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </a>
                <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(6,12,18,0.72)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgba(32,215,181,0.35)] hover:bg-[rgba(10,18,28,0.82)] sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-muted)]">Training</p>
                  <ul className="mt-4 grid gap-2 text-sm text-[var(--color-text-secondary)] sm:grid-cols-2">
                    {activeSphere.training?.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
