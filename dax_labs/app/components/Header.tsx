'use client';

import { useState } from 'react';
import { useTheme } from './ThemeProvider';

const navItems = [
  { name: 'Who We Are', href: '/#who-we-are' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Products', href: '/products', hasDropdown: true },
  { name: 'Contact', href: '/contact' },
];

const servicesDropdown = [
  {
    category: 'Application Security Assessment',
    href: '/services#application-security',
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    services: [
      'Web Application',
      'Mobile Apps',
      'API/Web Services Assessment',
      'Thick Client / Desktop Application',
      'Source Code Review',
      'GIGW Compliance',
      'Functional & Performance Testing',
    ],
  },
  {
    category: 'Network Security Assessment',
    href: '/services#network-security',
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    services: [
      'Network Architecture Review',
      'Vulnerability Assessment (VAPT)',
      'External Penetration Testing',
      'Secure Configuration Audit',
      'Wireless Security Assessment',
      'Log Analysis',
      'OT Security',
      'Telecom Security',
    ],
  },
  {
    category: 'Compliance and Data Privacy',
    href: '/services#compliance',
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    services: [
      'ISO 27001, ISO 27701, ISO 22301',
      'BFSI (RBI, SEBI, IRDAI)',
      'AADHAR UIDAI (AUA/ASA)',
      'CCA (PKI, E-Sign)',
      'DPDP Act: 2023',
      'Central Electricity Authority (CEA)',
      'SOC Operations Center',
      'SOC Type I and Type II',
      'DoT Compliance',
      'Third Party Assessment',
    ],
  },
  {
    category: 'Red Teaming',
    href: '/services#red-teaming',
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    services: [
      'Phishing/Vishing Campaign',
      'Ransomware Readiness',
      'External Penetration Testing',
      'Threat Intelligence',
      'Cyber Security Mock Drills',
      'DoS / DDoS Assessment',
      'Tabletop Exercise',
      'Physical Security',
    ],
  },
  {
    category: 'IoT Security Assessment',
    href: '/services#iot-security',
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    services: [
      'IP-Camera Testing',
      'IoT/Hardware Device Testing',
    ],
  },
  {
    category: 'Security Operation Center',
    href: '/services#soc',
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    services: [
      'SOC Designing & Creation',
      'SOC Consulting',
      'SOC Operational Services',
      'SOC as a Service',
      'Attack Surface Management',
      'Monitoring and Detection',
      'Incident Response',
      'Threat Assessment',
      'Threat Hunting',
      'Governance, Risk & Compliance',
      'Network Security',
      'Awareness and Training',
    ],
  },
  {
    category: 'Digital Forensic Services',
    href: '/services#digital-forensics',
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
    services: [
      'Digital Forensic Lab Creation',
      'Disk Forensics',
      'Password Cracking',
      'Image & Video Forensics',
      'Data Recovery',
      'Mobile Forensics',
      'Incident Response',
    ],
  },
];

const productsDropdown = [
  {
    category: 'IT Security Products',
    href: '/products/it-security',
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    products: [
      'Web Application Firewall (WAF)',
      'DDoS Mitigation Solution',
      'SIEM',
      'Email Security',
      'Data Loss Prevention (DLP)',
      'Endpoint Detection & Response (EDR/XDR)',
      'SSL VPN',
      'DNS Firewall',
      '+8 more products',
    ],
  },
  {
    category: 'Our Partners',
    href: '/products#partners',
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    products: [
      'Haltdos',
      'Port Swigger',
      'Tenable',
      'Manage Engine',
      'Rapid7',
      'Checkpoint',
      'Maltego',
      'Zoho',
      '+4 more partners',
    ],
  },
  {
    category: 'Digital Forensic Products',
    href: '/products/digital-forensic',
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    products: [
      'Forensic Workstation',
      'Password Cracking Machine',
      'RF Shielding Bag',
    ],
  },
  {
    category: 'Forensic Software Tools',
    href: '/products/forensic-software',
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    products: [
      'Mobile Forensic Tools',
      'Computer Forensic Tools',
      'Data Recovery Tools',
      'Password Cracking Tools',
      'OSINT & Social Media Forensics',
      'Cloud Forensic Tools',
      'Audio/Video Forensics',
      'JTAG & Chip-off Forensics',
      '+7 more categories',
    ],
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)]/95 backdrop-blur-sm border-b border-[var(--color-border)] transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

                {/* Services Dropdown Mega Menu */}
                {item.name === 'Services' && (
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full w-[1250px] transition-all duration-300 ${
                      isServicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl shadow-2xl overflow-hidden">
                      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500" />
                      <div className="grid grid-cols-2 gap-3 p-8 max-h-[750px] overflow-y-auto scrollbar-thin">
                        {servicesDropdown.map((service) => (
                          <a
                            key={service.category}
                            href={service.href}
                            className="group flex flex-col p-6 rounded-lg hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-purple-50/30 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 border border-transparent hover:border-[var(--color-border)] hover:shadow-lg transition-all duration-200"
                          >
                            <div className="flex items-start space-x-4">
                              <div className="text-[var(--color-accent)] group-hover:text-blue-600 transition-all duration-200 group-hover:scale-110 p-2 rounded-lg bg-[var(--color-bg-secondary)] group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30">
                                {service.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-base font-bold text-[var(--color-text-primary)] group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors leading-tight mb-3">
                                  {service.category}
                                </h4>
                                <ul className="space-y-2">
                                  {service.services.map((subService) => (
                                    <li
                                      key={subService}
                                      className="text-sm text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] transition-colors leading-relaxed flex items-start"
                                    >
                                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-border)] group-hover:bg-blue-400 flex-shrink-0 transition-colors" />
                                      {subService}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="px-5 py-3.5 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
                        <a
                          href="/services"
                          className="text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors inline-flex items-center group/link"
                        >
                          View All Services
                          <svg className="ml-1.5 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Products Dropdown Mega Menu */}
                {item.name === 'Products' && (
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full w-[1250px] transition-all duration-300 ${
                      isProductsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl shadow-2xl overflow-hidden">
                      <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
                      <div className="grid grid-cols-2 gap-3 p-8 max-h-[750px] overflow-y-auto scrollbar-thin">
                        {productsDropdown.map((product) => (
                          <a
                            key={product.category}
                            href={product.href}
                            className="group flex flex-col p-6 rounded-lg hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-teal-50/30 dark:hover:from-emerald-900/20 dark:hover:to-teal-900/20 border border-transparent hover:border-[var(--color-border)] hover:shadow-lg transition-all duration-200"
                          >
                            <div className="flex items-start space-x-4">
                              <div className="text-[var(--color-accent)] group-hover:text-emerald-600 transition-all duration-200 group-hover:scale-110 p-2 rounded-lg bg-[var(--color-bg-secondary)] group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30">
                                {product.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-base font-bold text-[var(--color-text-primary)] group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-tight mb-3">
                                  {product.category}
                                </h4>
                                <ul className="space-y-2">
                                  {product.products.map((subProduct) => (
                                    <li
                                      key={subProduct}
                                      className="text-sm text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] transition-colors leading-relaxed flex items-start"
                                    >
                                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-border)] group-hover:bg-emerald-400 flex-shrink-0 transition-colors" />
                                      {subProduct}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="px-5 py-3.5 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
                        <a
                          href="/products"
                          className="text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors inline-flex items-center group/link"
                        >
                          View All Products
                          <svg className="ml-1.5 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    {/* Sun/Moon icons track */}
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
                {/* Cyber glow effect */}
                <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${theme === 'dark' ? 'shadow-[0_0_15px_rgba(0,212,170,0.3)]' : 'shadow-[0_0_15px_rgba(251,191,36,0.3)]'}`} />
              </button>
              {/* Status text */}
              <span className="ml-3 text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider hidden xl:block">
                {theme === 'dark' ? 'Dark' : 'Light'}
              </span>
            </div>
          </div>

          {/* Mobile menu button + theme toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Cyber-style Theme Toggle */}
            <div className="relative flex items-center">
              <button
                onClick={toggleTheme}
                className="group relative w-12 h-6 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
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
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
              aria-label="Toggle menu"
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
