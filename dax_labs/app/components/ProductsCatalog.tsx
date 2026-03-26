'use client';

import React from 'react';
import {
  WafIcon,
  DdosIcon,
  PerformanceIcon,
  VpnIcon,
  DnsIcon,
  SiemIcon,
  EmailIcon,
  DlpIcon,
  EdrIcon,
  ScannerIcon,
  PatchIcon,
  PenTestIcon,
  CodeIcon,
  LogIcon,
} from './icons/product-icons';

const iconMap: Record<string, React.ComponentType> = {
  waf: WafIcon,
  ddos: DdosIcon,
  performance: PerformanceIcon,
  vpn: VpnIcon,
  dns: DnsIcon,
  siem: SiemIcon,
  email: EmailIcon,
  dlp: DlpIcon,
  edr: EdrIcon,
  scanner: ScannerIcon,
  patch: PatchIcon,
  pentest: PenTestIcon,
  code: CodeIcon,
  log: LogIcon,
};

const itSecurityProducts = [
  {
    name: 'Web Application Firewall (WAF)',
    description: 'Protects web applications from various attacks including SQL injection, XSS, DDoS, and OWASP Top 10 threats.',
    slug: 'web-application-firewall',
    iconKey: 'waf',
  },
  {
    name: 'DDoS Mitigation Solution',
    description: 'Defends against Distributed Denial of Service attacks with real-time detection and automated response.',
    slug: 'ddos-mitigation',
    iconKey: 'ddos',
  },
  {
    name: 'Reliability & Optimization',
    description: 'Solutions for system reliability and performance optimization including load balancing and caching.',
    slug: 'reliability-optimization',
    iconKey: 'performance',
  },
  {
    name: 'SSL VPN',
    description: 'Secure remote access solution with encryption and authentication for secure connectivity.',
    slug: 'ssl-vpn',
    iconKey: 'vpn',
  },
  {
    name: 'DNS Firewall',
    description: 'DNS-level protection against malware, phishing, and command-and-control communications.',
    slug: 'dns-firewall',
    iconKey: 'dns',
  },
  {
    name: 'SIEM (Security Information & Event Management)',
    description: 'Centralized security monitoring, log management, and incident detection with correlation and analytics.',
    slug: 'siem',
    iconKey: 'siem',
  },
  {
    name: 'Email Security',
    description: 'Protection against email-based threats including phishing, spam, malware, and business email compromise.',
    slug: 'email-security',
    iconKey: 'email',
  },
  {
    name: 'Data Loss Prevention (DLP)',
    description: 'Prevents unauthorized data exfiltration and ensures sensitive data protection across endpoints and networks.',
    slug: 'dlp',
    iconKey: 'dlp',
  },
  {
    name: 'Endpoint Detection and Response (EDR/XDR)',
    description: 'Advanced endpoint threat detection and response with behavioral analysis and automated response.',
    slug: 'edr-xdr',
    iconKey: 'edr',
  },
  {
    name: 'Network Security Scanners',
    description: 'Tools for scanning network vulnerabilities, misconfigurations, and compliance gaps.',
    slug: 'network-security-scanners',
    iconKey: 'scanner',
  },
  {
    name: 'Web Security Scanner',
    description: 'Scans web applications for security issues, vulnerabilities, and compliance violations.',
    slug: 'web-security-scanner',
    iconKey: 'scanner',
  },
  {
    name: 'Patch Management',
    description: 'Automated patch deployment and management for operating systems and applications.',
    slug: 'patch-management',
    iconKey: 'patch',
  },
  {
    name: 'Network Monitoring',
    description: 'Continuous network surveillance and analysis for performance and security issues.',
    slug: 'network-monitoring',
    iconKey: 'dns',
  },
  {
    name: 'Penetration Testing Tools',
    description: 'Professional tools for authorized security testing and vulnerability assessment.',
    slug: 'penetration-testing-tools',
    iconKey: 'pentest',
  },
  {
    name: 'Source Code Review Tools',
    description: 'Static application security testing (SAST) tools for code security analysis.',
    slug: 'source-code-review-tools',
    iconKey: 'code',
  },
  {
    name: 'Log Management',
    description: 'Centralized log collection, storage, and analysis for compliance and security monitoring.',
    slug: 'log-management',
    iconKey: 'log',
  },
];

export default function ProductsCatalog() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            IT SECURITY PRODUCTS
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Enterprise-grade security products and solutions to protect your digital infrastructure from advanced cyber threats.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {itSecurityProducts.map((product, index) => {
            const IconComponent = iconMap[product.iconKey] || WafIcon;
            return (
              <a
                key={product.name}
                href={`/products/it-security/${product.slug}`}
                className="group p-6 bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300 hover-lift flex flex-col"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-light)] transition-colors duration-300">
                  <IconComponent />
                </div>

                {/* Product Name */}
                <h3 className="mt-5 text-lg font-semibold text-[var(--color-text-primary)]">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed flex-grow">
                  {product.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-4 pt-4 border-t border-[var(--color-border)] flex items-center text-[var(--color-accent)] text-sm font-semibold">
                  Learn More
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
