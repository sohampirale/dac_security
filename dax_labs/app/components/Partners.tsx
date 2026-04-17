'use client';

import { useEffect, useState } from 'react';

const partners = [
  {
    name: 'Haltdos',
    specialization: 'Web Application Security, DDoS Protection',
    products: 'WAF, DDoS Mitigation, API Security',
  },
  {
    name: 'Port Swigger',
    specialization: 'Web Security Testing',
    products: 'Burp Suite Professional/Enterprise',
  },
  {
    name: 'Tenable',
    specialization: 'Vulnerability Management',
    products: 'Nessus, Tenable.io, Tenable.sc',
  },
  {
    name: 'Manage Engine',
    specialization: 'IT Management Solutions',
    products: 'Security Manager, Log Analyzer, AD Manager',
  },
  {
    name: 'Rapid7',
    specialization: 'Security Analytics',
    products: 'InsightVM, InsightIDR, Metasploit',
  },
  {
    name: 'Checkpoint',
    specialization: 'Network Security',
    products: 'Firewalls, Threat Prevention, Cloud Security',
  },
  {
    name: 'Maltego',
    specialization: 'Threat Intelligence',
    products: 'OSINT, Link Analysis, Investigation',
  },
  {
    name: 'Zoho',
    specialization: 'Business Software Suite',
    products: 'Zoho Vault, Zoho Mail, Zoho One',
  },
];

export default function Partners() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('partners');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="partners" className="py-24 lg:py-32 bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p
            className={`text-sm font-semibold text-[var(--color-accent)] tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            COLLABORATIONS
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Our Technology Partners
          </h2>
          <p
            className={`mt-6 text-xl text-[var(--color-text-secondary)] leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            We partner with leading cybersecurity vendors to deliver best-in-class security solutions.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {[
            'Authorized Reseller',
            'Certified Technical Team',
            'Direct Vendor Support',
            'Competitive Pricing',
          ].map((benefit, index) => (
            <div
              key={benefit}
              className={`px-4 py-2 bg-[var(--color-bg-secondary)] rounded-full text-sm font-medium text-[var(--color-text-secondary)] border border-[var(--color-border)] transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <span className="text-[var(--color-accent)] mr-2">✓</span>
              {benefit}
            </div>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`group p-6 bg-[var(--color-bg-secondary)] rounded-xl border-2 border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 hover-lift ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Partner Name */}
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                {partner.name}
              </h3>

              {/* Specialization */}
              <div className="mt-4">
                <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                  Specialization
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {partner.specialization}
                </p>
              </div>

              {/* Key Products */}
              <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                  Key Products
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {partner.products}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-12 text-center">
          <a
            href="/products"
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] bg-transparent border-2 border-[var(--color-border)] rounded-md hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
          >
            View All Partners
            <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
