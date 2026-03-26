'use client';

import { useState } from 'react';

const navItems = [
  { name: 'Who We Are', href: '/#who-we-are' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Products', href: '/products', hasDropdown: true },
  { name: 'Our Clients', href: '/#clients' },
  { name: 'Resources', href: '/#resources' },
  { name: 'Contact', href: '/#contact' },
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)]/95 backdrop-blur-sm border-b border-[var(--color-border)]">
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
                    className={`absolute left-1/2 -translate-x-1/2 top-full w-[900px] transition-all duration-200 ${
                      isServicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                    }`}
                  >
                    <div className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg shadow-2xl overflow-hidden">
                      <div className="grid grid-cols-2 gap-4 p-5 max-h-[560px] overflow-y-auto scrollbar-thin">
                        {servicesDropdown.map((service) => (
                          <a
                            key={service.category}
                            href={service.href}
                            className="group flex flex-col p-4 rounded-md hover:bg-[var(--color-bg-secondary)] transition-all duration-200"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="text-[var(--color-accent)] group-hover:text-[var(--color-accent-hover)] transition-colors">
                                {service.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors leading-tight">
                                  {service.category}
                                </h4>
                                <ul className="mt-2.5 space-y-1.5">
                                  {service.services.slice(0, 4).map((subService) => (
                                    <li
                                      key={subService}
                                      className="text-xs text-[var(--color-text-muted)] truncate leading-relaxed"
                                    >
                                      • {subService}
                                    </li>
                                  ))}
                                  {service.services.length > 4 && (
                                    <li className="text-xs text-[var(--color-text-secondary)] font-medium pt-0.5">
                                      +{service.services.length - 4} more
                                    </li>
                                  )}
                                </ul>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                      {/* View All Link */}
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
                    className={`absolute left-1/2 -translate-x-1/2 top-full w-[900px] transition-all duration-200 ${
                      isProductsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                    }`}
                  >
                    <div className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg shadow-2xl overflow-hidden">
                      <div className="grid grid-cols-2 gap-4 p-5 max-h-[560px] overflow-y-auto scrollbar-thin">
                        {productsDropdown.map((product) => (
                          <a
                            key={product.category}
                            href={product.href}
                            className="group flex flex-col p-4 rounded-md hover:bg-[var(--color-bg-secondary)] transition-all duration-200"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="text-[var(--color-accent)] group-hover:text-[var(--color-accent-hover)] transition-colors">
                                {product.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors leading-tight">
                                  {product.category}
                                </h4>
                                <ul className="mt-2.5 space-y-1.5">
                                  {product.products.slice(0, 4).map((subProduct) => (
                                    <li
                                      key={subProduct}
                                      className="text-xs text-[var(--color-text-muted)] truncate leading-relaxed"
                                    >
                                      • {subProduct}
                                    </li>
                                  ))}
                                  {product.products.length > 4 && (
                                    <li className="text-xs text-[var(--color-text-secondary)] font-medium pt-0.5">
                                      {product.products[4]}
                                    </li>
                                  )}
                                </ul>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                      {/* View All Link */}
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
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
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
