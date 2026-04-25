'use client';

import { useRef, useState } from 'react';

const navItems = [
  { name: 'Who We Are', href: '/#who-we-are' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Products', href: '/products', hasDropdown: true },
  { name: 'Contact', href: '/contact' },
];

const tabs = [
  { id: 'discover', label: 'DISCOVER', description: 'Identify risks across your systems, infrastructure, and processes' },
  { id: 'analyze', label: 'ANALYZE', description: 'Understand how risks behave and affect your systems together' },
  { id: 'secure', label: 'SECURE', description: 'Take disciplined action to secure and strengthen your systems' },
];

type TabId = 'discover' | 'analyze' | 'secure';

const discoverServices = [
  {
    category: 'Application Security Assessment',
    href: '/services#application-security',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: ['Web Application', 'Mobile Apps', 'API/Web Services', 'Thick Client', 'Source Code Review', 'GIGW Compliance'],
  },
  {
    category: 'Network Security Assessment',
    href: '/services#network-security',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    items: ['Vulnerability Assessment (VAPT)', 'Penetration Testing', 'Network Architecture Review', 'Wireless Security', 'OT Security', 'Log Analysis'],
  },
  {
    category: 'IoT Security Assessment',
    href: '/services#iot-security',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    items: ['IP-Camera Testing', 'IoT/Hardware Device Testing'],
  },
];

const analyzeServices = [
  {
    category: 'Compliance and Data Privacy',
    href: '/services#compliance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    items: ['ISO 27001, ISO 27701, ISO 22301', 'BFSI (RBI, SEBI, IRDAI)', 'DPDP Act 2023', 'SOC Operations', 'Third Party Assessment'],
  },
  {
    category: 'Red Teaming',
    href: '/services#red-teaming',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: ['Phishing/Vishing Campaign', 'Ransomware Readiness', 'Threat Intelligence', 'DoS/DDoS Assessment', 'Tabletop Exercise', 'Physical Security'],
  },
];

const secureServices = [
  {
    category: 'Security Operation Center',
    href: '/services#soc',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    items: ['SOC Design & Creation', 'SOC Consulting', 'SOC as a Service', 'Attack Surface Management', 'Incident Response', 'Threat Hunting'],
  },
  {
    category: 'Digital Forensic Services',
    href: '/services#digital-forensics',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
    items: ['Digital Forensic Lab Creation', 'Disk Forensics', 'Password Cracking', 'Image & Video Forensics', 'Data Recovery', 'Mobile Forensics'],
  },
];

const discoverProducts = [
  { name: 'Vulnerability Scanners', href: '/products/it-security', items: ['Tenable Nessus', 'Rapid7 InsightVM'] },
  { name: 'Penetration Testing Tools', href: '/products/it-security', items: ['Burp Suite', 'Metasploit'] },
  { name: 'Network Discovery', href: '/products/it-security', items: ['Nmap', 'Manage Engine'] },
];

const analyzeProducts = [
  { name: 'SIEM Solutions', href: '/products/it-security', items: ['Motadata SIEM', 'Manage Engine'] },
  { name: 'Threat Intelligence', href: '/products/it-security', items: ['Maltego', 'ThreatFeeds'] },
];

const secureProducts = [
  { name: 'Security Solutions', href: '/products/it-security', items: ['WAF (Haltdos)', 'DDoS Mitigation', 'SSL VPN', 'DNS Firewall', 'Email Security', 'DLP', 'EDR/XDR'] },
  { name: 'Forensic Tools', href: '/products/forensic-software', items: ['Forensic Workstation', 'Password Cracking Machine', 'RF Shielding Bag', 'Mobile Forensic Tools'] },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'products' | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>('discover');
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openDropdown = (menu: 'services' | 'products') => {
    clearCloseTimeout();
    setActiveDropdown(menu);
  };

  const closeDropdowns = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const getServicesForTab = () => {
    switch (activeTab) {
      case 'discover': return discoverServices;
      case 'analyze': return analyzeServices;
      case 'secure': return secureServices;
    }
  };

  const getProductsForTab = () => {
    switch (activeTab) {
      case 'discover': return discoverProducts;
      case 'analyze': return analyzeProducts;
      case 'secure': return secureProducts;
    }
  };

  const renderTabRail = () => (
    <div className="border-b border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(10,26,40,0.92),rgba(16,42,62,0.3))] px-8 py-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="lg:w-[420px] lg:flex-shrink-0">
          <p className="mb-4 text-xs font-semibold tracking-[0.34em] text-[var(--color-text-muted)]">
            NAVIGATION FLOW
          </p>
          <div className="flex flex-wrap gap-2 lg:flex-nowrap">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as TabId)}
                  onMouseEnter={() => setActiveTab(tab.id as TabId)}
                  onFocus={() => setActiveTab(tab.id as TabId)}
                  className={`group relative min-w-[150px] rounded-xl border px-6 py-4 text-left transition-all duration-200 ${
                    isActive
                      ? 'border-[var(--color-accent)] bg-[rgba(0,215,184,0.09)] text-[var(--color-text-primary)] shadow-[0_0_0_1px_rgba(0,215,184,0.18),0_18px_40px_rgba(0,0,0,0.18)]'
                      : 'border-[var(--color-border)] bg-[rgba(21,34,50,0.9)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/60 hover:text-[var(--color-text-secondary)]'
                  }`}
                >
                  <span className="block text-xs font-semibold tracking-[0.34em]">
                    {tab.label}
                  </span>
                  <span className={`mt-3.5 block h-0.5 rounded-full transition-all duration-200 ${
                    isActive ? 'w-full bg-[var(--color-accent)]' : 'w-10 bg-[var(--color-border)] group-hover:w-14'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="min-w-0 flex-1 lg:max-w-[470px] lg:pt-1">
          <p className="text-base leading-relaxed text-[var(--color-text-secondary)] lg:text-right">
            {tabs.find((t) => t.id === activeTab)?.description}
          </p>
        </div>
      </div>
    </div>
  );

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
              <div
                key={item.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => {
                  if (item.name === 'Services') openDropdown('services');
                  if (item.name === 'Products') openDropdown('products');
                }}
                onMouseLeave={() => {
                  if (item.name === 'Services' || item.name === 'Products') closeDropdowns();
                }}
              >
                {item.hasDropdown ? (
                  <a
                    href={item.href}
                    onFocus={() => openDropdown(item.name === 'Services' ? 'services' : 'products')}
                    className="group relative inline-flex items-center py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-text-primary)]"
                    aria-expanded={activeDropdown === (item.name === 'Services' ? 'services' : 'products')}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <svg
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                        item.name === 'Services' ? (activeDropdown === 'services' ? 'rotate-180' : '') :
                        item.name === 'Products' ? (activeDropdown === 'products' ? 'rotate-180' : '') : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className="group relative inline-flex items-center py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-text-primary)]"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
                  </a>
                )}

                {item.name === 'Services' && activeDropdown === 'services' && (
                  <div
                    className="scrollbar-thin absolute right-0 top-full z-[80] mt-4 max-h-[calc(100vh-6rem)] w-[min(1160px,calc(100vw-2.5rem))] overflow-x-hidden overflow-y-auto rounded-[24px] border border-[var(--color-border)] bg-[rgba(10,20,31,0.97)] shadow-[0_30px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl"
                    onMouseEnter={() => openDropdown('services')}
                    onMouseLeave={closeDropdowns}
                  >
                    {renderTabRail()}

                    <div className="grid grid-cols-1 gap-5 p-8 md:grid-cols-2 xl:grid-cols-3">
                      {getServicesForTab().map((service) => (
                        <a
                          key={service.category}
                          href={service.href}
                           className="group min-h-[270px] rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(18,36,54,0.96),rgba(11,25,38,0.96))] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-xl bg-[var(--color-bg-tertiary)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-light)] transition-all duration-300">
                              {service.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-[1.65rem] leading-tight font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                                {service.category}
                              </h4>
                              <ul className="mt-5 space-y-2.5">
                                {service.items.map((subItem) => (
                                  <li key={subItem} className="flex items-center text-[15px] text-[var(--color-text-secondary)]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mr-3 opacity-70" />
                                    {subItem}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>

                    <div className="border-t border-[var(--color-border)] bg-[rgba(21,34,50,0.88)] px-8 py-5">
                      <a
                        href="/services"
                        className="inline-flex items-center text-base font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                      >
                        View All Services
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )}

                {item.name === 'Products' && activeDropdown === 'products' && (
                  <div
                    className="scrollbar-thin absolute right-0 top-full z-[80] mt-4 max-h-[calc(100vh-6rem)] w-[min(1160px,calc(100vw-2.5rem))] overflow-x-hidden overflow-y-auto rounded-[24px] border border-[var(--color-border)] bg-[rgba(10,20,31,0.97)] shadow-[0_30px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl"
                    onMouseEnter={() => openDropdown('products')}
                    onMouseLeave={closeDropdowns}
                  >
                    {renderTabRail()}

                    <div className="grid grid-cols-1 gap-5 p-8 md:grid-cols-2 xl:grid-cols-3">
                      {getProductsForTab().map((category) => (
                        <a
                          key={category.name}
                          href={category.href}
                          className="group min-h-[230px] rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(18,36,54,0.96),rgba(11,25,38,0.96))] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]"
                        >
                          <h4 className="text-[1.45rem] leading-tight font-bold text-[var(--color-text-primary)] mb-5 group-hover:text-[var(--color-accent)] transition-colors">
                            {category.name}
                          </h4>
                          <ul className="space-y-3">
                            {category.items.map((subItem) => (
                              <li key={subItem} className="flex items-center text-[15px] text-[var(--color-text-secondary)]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mr-3 opacity-70" />
                                {subItem}
                              </li>
                            ))}
                          </ul>
                        </a>
                      ))}
                    </div>

                    {activeTab === 'secure' && (
                      <div className="px-8 pb-8">
                        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-5">IT Security Products</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {['Web Application Firewall', 'DDoS Mitigation', 'SIEM', 'Email Security', 'DLP', 'EDR/XDR', 'SSL VPN', 'DNS Firewall'].map((product) => (
                            <div key={product} className="p-4 bg-[rgba(21,34,50,0.9)] rounded-xl border border-[var(--color-border)] text-center">
                              <span className="text-sm font-medium text-[var(--color-text-secondary)]">{product}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="border-t border-[var(--color-border)] bg-[rgba(21,34,50,0.88)] px-8 py-5">
                      <a
                        href="/products"
                        className="inline-flex items-center text-base font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                      >
                        View All Products
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )}
              </div>
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
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
