"use client";

import { useEffect, useMemo, useRef, useState } from 'react';

type SectionKey = 'detect' | 'analyze' | 'kinetic';

export default function ServicesContent() {
  const [active, setActive] = useState<SectionKey>('detect');
  const sectionRefs = useRef<Record<SectionKey, HTMLElement | null>>({
    detect: null,
    analyze: null,
    kinetic: null,
  });

  const sectionOrder: SectionKey[] = ['detect', 'analyze', 'kinetic'];
  const sections = useMemo(() => ({
    detect: {
      title: 'DETECT',
      subtitle: 'Understand where your system is exposed',
      blocks: [
        {
          title: 'Understand Your System',
          line: 'See how your system is built today and where risks may exist.',
          items: ['Applications (web, mobile, APIs)', 'Network and infrastructure', 'System configurations', 'Known vulnerabilities and weak points'],
        },
        {
          title: 'Find What Is Exposed',
          line: 'Check what parts of your system are visible and accessible in the external attack surface.',
          items: ['Open ports and running services', 'Internet-facing assets', 'Misconfigured exposures'],
        },
      ],
    },
    analyze: {
      title: 'ANALYZE',
      subtitle: 'Test your system and understand what can go wrong',
      blocks: [
        {
          title: 'Test Your Security',
          line: 'Test your system the way an attacker would.',
          items: ['VAPT (Vulnerability Assessment & Penetration Testing)', 'Internal and external testing', 'Application and network testing', 'Red team exercises'],
        },
        {
          title: 'Understand Incidents',
          line: 'Understand what has happened and how it affected your system.',
          items: ['Incident investigation', 'Log and activity analysis', 'Root cause identification'],
        },
        {
          title: 'Investigate Systems & Data (Digital Forensics)',
          line: 'Work with systems and data when investigation or evidence is required.',
          items: ['Disk and system forensics', 'Mobile forensics', 'Data recovery', 'Evidence handling'],
        },
      ],
    },
    kinetic: {
      title: 'KINETIC',
      subtitle: 'Fix issues. Strengthen your system. Keep it secure',
      blocks: [
        {
          title: 'Fix and Strengthen Your System',
          line: 'Fix identified issues and improve how your system is secured.',
          items: ['System hardening', 'Secure configurations', 'Security control implementation', 'Alignment across systems'],
        },
        {
          title: 'Monitor and Respond (SOC)',
          line: 'Stay aware of what is happening in your system and respond when needed.',
          items: ['SOC (Security Operations Center) setup and support', 'Monitoring and threat detection', 'Incident response', 'Threat hunting'],
        },
        {
          title: 'Meet Standards and Requirements (ISO, Regulatory)',
          line: 'Ensure your system meets required security standards.',
          items: ['ISO 27001 and related standards', 'Regulatory requirements (RBI, DPDP, etc.)', 'Risk assessment', 'Documentation and audit readiness'],
        },
        {
          title: 'Handle Special Systems',
          line: 'Secure systems that need deeper attention.',
          items: ['IoT and connected devices', 'OT / SCADA systems', 'Surveillance systems'],
        },
        {
          title: 'Prepare Your Team',
          line: 'Make sure your team knows how to respond.',
          items: ['Security awareness', 'Phishing simulations', 'Incident response drills'],
        },
      ],
    },
  }), []);

  useEffect(() => {
    const updateActive = () => {
      const offset = 160;
      let current: SectionKey = 'detect';

      sectionOrder.forEach((key) => {
        const el = sectionRefs.current[key];
        if (!el) {
          return;
        }

        const top = el.getBoundingClientRect().top;
        if (top <= offset) {
          current = key;
        }
      });

      setActive(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);

    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [sectionOrder]);

  const handleNavClick = (key: SectionKey) => {
    const el = sectionRefs.current[key];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h1 className="text-4xl font-bold leading-tight">Services</h1>
            <p className="mt-4 text-[var(--color-text-secondary)]">We work on your systems to identify risks, test security, fix issues, and keep everything protected over time.</p>

            <nav className="mt-10" aria-label="Services sections">
              <div className="space-y-6">
                {sectionOrder.map((key, index) => {
                  const isActive = active === key;
                  const isComplete = sectionOrder.indexOf(active) >= index;
                  return (
                    <div key={key} className="grid grid-cols-[16px_1fr] items-start gap-4">
                      <div className="flex flex-col items-center pt-1">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${isComplete ? 'bg-[var(--color-accent)]' : 'bg-white/25'}`}
                        />
                        {index < sectionOrder.length - 1 && (
                          <span
                            className={`mt-2 h-8 w-px ${sectionOrder.indexOf(active) > index ? 'bg-[var(--color-accent)]' : 'bg-white/20'}`}
                          />
                        )}
                      </div>
                      <button
                        onClick={() => handleNavClick(key)}
                        className={`w-full text-left font-semibold tracking-[0.04em] ${isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-secondary)]'}`}
                      >
                        {sections[key].title}
                      </button>
                    </div>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>

        <div className="lg:col-span-8">
          {(Object.keys(sections) as SectionKey[]).map((key, sectionIndex) => (
            <section
              key={key}
              ref={(el) => {
                sectionRefs.current[key] = el;
              }}
              data-section={key}
              className={`scroll-mt-32 pb-20 ${sectionIndex === 0 ? '' : 'border-t border-white/10 pt-12'}`}
              aria-labelledby={`${key}-title`}
            >
              <div className="flex items-end justify-between gap-6">
                <div>
                  <h2
                    id={`${key}-title`}
                    className={`text-2xl font-bold tracking-[0.04em] ${active === key ? 'text-[var(--color-accent)]' : ''}`}
                  >
                    {sections[key].title}
                  </h2>
                  <p className="mt-2 text-[var(--color-text-secondary)] max-w-xl">{sections[key].subtitle}</p>
                </div>
                <div className="hidden lg:flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                  <span className="h-[1px] w-10 bg-white/20" />
                  <span>Services</span>
                </div>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                {sections[key].blocks.map((block, idx) => (
                  <div key={idx} className="border-l border-white/10 pl-5">
                    <h3 className="font-semibold">{block.title}</h3>
                    <p className="text-[var(--color-text-secondary)] mt-2">{block.line}</p>
                    <ul className="mt-3 space-y-2 text-[var(--color-text-secondary)]">
                      {block.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
