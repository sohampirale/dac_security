'use client';

import { useState } from 'react';
import { useTheme } from './ThemeProvider';

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
  { name: 'Vulnerability Scanners', items: ['Tenable Nessus', 'Rapid7 InsightVM'] },
  { name: 'Penetration Testing Tools', items: ['Burp Suite', 'Metasploit'] },
  { name: 'Network Discovery', items: ['Nmap', 'Manage Engine'] },
];

const analyzeProducts = [
  { name: 'SIEM Solutions', items: ['Motadata SIEM', 'Manage Engine'] },
  { name: 'Threat Intelligence', items: ['Maltego', 'ThreatFeeds'] },
];

const secureProducts = [
  { name: 'Security Solutions', items: ['WAF (Haltdos)', 'DDoS Mitigation', 'SSL VPN', 'DNS Firewall', 'Email Security', 'DLP', 'EDR/XDR'] },
  { name: 'Forensic Tools', items: ['Forensic Workstation', 'Password Cracking Machine', 'RF Shielding Bag', 'Mobile Forensic Tools'] },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'discover' | 'analyze' | 'secure'>('discover');
  const { theme, toggleTheme } = useTheme();

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)]/95 backdrop-blur-sm border-b border-[var(--color-border)] transition-colors duration-300">
      <nav className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <span className="text-xl lg:text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
                DAK SECURITY
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  if (item.name === 'Services') setIsServicesDropdownOpen(true);
                  if (item.name === 'Products') setIsProductsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.name === 'Services') setIsServicesDropdownOpen(false);
                  if (item.name === 'Products') setIsProductsDropdownOpen(false);
                }}
              >
                <a
                  href={item.href}
                  className="relative text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200 group inline-flex items-center"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                        item.name === 'Services' ? (isServicesDropdownOpen ? 'rotate-180' : '') :
                        item.name === 'Products' ? (isProductsDropdownOpen ? 'rotate-180' : '') : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-accent)] group-hover:w-full transition-all duration-300" />
                </a>

                {/* Services Mega Menu - Full Screen */}
                {item.name === 'Services' && (
                  <div
                    className={`fixed left-0 right-0 top-16 bottom-0 transition-all duration-300 ${
                      isServicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    style={{ marginTop: '0' }}
                  >
                    <div 
                      className="absolute inset-0 bg-[var(--color-bg-primary)] border-t border-[var(--color-border)] overflow-hidden flex flex-col"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      {/* Tabs Header */}
                      <div className="border-b border-[var(--color-border)] px-6 lg:px-12 xl:px-20">
                        <div className="flex items-center space-x-1">
                          {tabs.map((tab) => (
                            <button
                              key={tab.id}
                              onClick={() => setActiveTab(tab.id as typeof activeTab)}
                              className={`relative px-6 py-5 text-sm font-semibold tracking-wider transition-all duration-200 ${
                                activeTab === tab.id
                                  ? 'text-[var(--color-accent)]'
                                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]'
                              }`}
                            >
                              {tab.label}
                              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-accent)] transition-all duration-300 ${
                                activeTab === tab.id ? 'scale-x-100' : 'scale-x-0'
                              }`} />
                            </button>
                          ))}
                        </div>
                        {/* Tab description */}
                        <p className="text-sm text-[var(--color-text-muted)] pb-4">
                          {tabs.find(t => t.id === activeTab)?.description}
                        </p>
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 overflow-y-auto px-6 lg:px-12 xl:px-20 py-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1600px]">
                          {getServicesForTab().map((service) => (
                            <a
                              key={service.category}
                              href={service.href}
                              className="group p-6 bg-[var(--color-bg-secondary)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-accent)]/5"
                            >
                              <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-lg bg-[var(--color-bg-tertiary)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-light)] transition-all duration-300">
                                  {service.icon}
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                                    {service.category}
                                  </h4>
                                  <ul className="mt-3 space-y-2">
                                    {service.items.map((item) => (
                                      <li key={item} className="flex items-center text-sm text-[var(--color-text-secondary)]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mr-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="px-6 lg:px-12 xl:px-20 py-4 border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                        <a
                          href="/services"
                          className="inline-flex items-center text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                        >
                          View All Services
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Products Mega Menu - Full Screen */}
                {item.name === 'Products' && (
                  <div
                    className={`fixed left-0 right-0 top-16 bottom-0 transition-all duration-300 ${
                      isProductsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                  >
                    <div 
                      className="absolute inset-0 bg-[var(--color-bg-primary)] border-t border-[var(--color-border)] overflow-hidden flex flex-col"
                      onMouseEnter={() => setIsProductsDropdownOpen(true)}
                      onMouseLeave={() => setIsProductsDropdownOpen(false)}
                    >
                      {/* Tabs Header */}
                      <div className="border-b border-[var(--color-border)] px-6 lg:px-12 xl:px-20">
                        <div className="flex items-center space-x-1">
                          {tabs.map((tab) => (
                            <button
                              key={tab.id}
                              onClick={() => setActiveTab(tab.id as typeof activeTab)}
                              className={`relative px-6 py-5 text-sm font-semibold tracking-wider transition-all duration-200 ${
                                activeTab === tab.id
                                  ? 'text-[var(--color-accent)]'
                                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]'
                              }`}
                            >
                              {tab.label}
                              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-accent)] transition-all duration-300 ${
                                activeTab === tab.id ? 'scale-x-100' : 'scale-x-0'
                              }`} />
                            </button>
                          ))}
                        </div>
                        <p className="text-sm text-[var(--color-text-muted)] pb-4">
                          {tabs.find(t => t.id === activeTab)?.description}
                        </p>
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 overflow-y-auto px-6 lg:px-12 xl:px-20 py-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1600px]">
                          {getProductsForTab().map((category) => (
                            <div
                              key={category.name}
                              className="p-6 bg-[var(--color-bg-secondary)] rounded-xl border border-[var(--color-border)]"
                            >
                              <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-4">
                                {category.name}
                              </h4>
                              <ul className="space-y-3">
                                {category.items.map((item) => (
                                  <li key={item} className="flex items-center text-sm text-[var(--color-text-secondary)]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mr-3 opacity-50" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* IT Security Products Special Section */}
                        {activeTab === 'secure' && (
                          <div className="mt-8">
                            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">IT Security Products</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                              {['Web Application Firewall', 'DDoS Mitigation', 'SIEM', 'Email Security', 'DLP', 'EDR/XDR', 'SSL VPN', 'DNS Firewall'].map((product) => (
                                <div key={product} className="p-4 bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)] text-center hover:border-[var(--color-accent)] transition-all duration-300 cursor-pointer">
                                  <span className="text-sm font-medium text-[var(--color-text-secondary)]">{product}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="px-6 lg:px-12 xl:px-20 py-4 border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                        <a
                          href="/products"
                          className="inline-flex items-center text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                        >
                          View All Products
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Cyber-style Theme Toggle */}
            <div className="relative flex items-center">
              <button
                onClick={toggleTheme}
                className="group relative w-12 h-6 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-primary)]"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className={`absolute inset-0 transition-transform duration-300 ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}>
                    <div className="flex w-24 h-6">
                      <div className="w-12 h-6 flex items-center justify-center bg-gradient-to-r from-amber-400/20 to-orange-400/20">
                        <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="w-12 h-6 flex items-center justify-center bg-gradient-to-r from-cyan-400/20 to-blue-500/20">
                        <svg className="w-3.5 h-3.5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${theme === 'dark' ? 'shadow-[0_0_15px_rgba(0,212,170,0.3)]' : 'shadow-[0_0_15px_rgba(251,191,36,0.3)]'}`} />
              </button>
              <span className="ml-3 text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider hidden xl:block">
                {theme === 'dark' ? 'Dark' : 'Light'}
              </span>
            </div>
          </div>

          {/* Mobile menu button + theme toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <div className="relative flex items-center">
              <button
                onClick={toggleTheme}
                className="group relative w-12 h-6 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              >
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className={`absolute inset-0 transition-transform duration-300 ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}>
                    <div className="flex w-24 h-6">
                      <div className="w-12 h-6 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="w-12 h-6 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
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

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-base font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] rounded-md transition-colors"
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
