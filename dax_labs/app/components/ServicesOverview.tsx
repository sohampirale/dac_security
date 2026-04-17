'use client';

import { useEffect, useState } from 'react';

const services = [
  {
    title: 'Application Security Assessment',
    description: 'Comprehensive testing of web applications, mobile apps, APIs, and desktop applications to identify vulnerabilities and ensure compliance.',
    items: ['Web Application', 'Mobile Apps', 'API/Web Services', 'Thick Client', 'Source Code Review'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Network Security Assessment',
    description: 'Thorough evaluation of your network infrastructure, identifying vulnerabilities and configuration weaknesses before attackers can exploit them.',
    items: ['Vulnerability Assessment', 'Penetration Testing', 'Wireless Security', 'OT Security', 'Log Analysis'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Compliance & Data Privacy',
    description: 'Ensure your organization meets regulatory requirements and maintains robust data protection practices aligned with international standards.',
    items: ['ISO 27001', 'DPDP Act 2023', 'BFSI Compliance', 'SOC Operations', 'Third Party Assessment'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Red Teaming',
    description: 'Simulate real-world attacks to test your organization\'s detection and response capabilities through controlled adversary simulation.',
    items: ['Phishing Campaigns', 'Ransomware Readiness', 'DoS/DDoS Testing', 'Physical Security', 'Tabletop Exercises'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Security Operation Center',
    description: '24/7 monitoring, detection, and response services to protect your assets and respond to threats in real-time.',
    items: ['SOC Design & Creation', 'Attack Surface Mgmt', 'Incident Response', 'Threat Hunting', 'GRC Services'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Digital Forensic Services',
    description: 'Investigate security incidents, recover lost data, and gather digital evidence with our comprehensive forensic capabilities.',
    items: ['Disk Forensics', 'Mobile Forensics', 'Password Cracking', 'Data Recovery', 'Cloud Forensics'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
  },
];

export default function ServicesOverview() {
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

    const element = document.getElementById('services');
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
    <section id="services" className="py-24 lg:py-32 bg-[var(--color-bg-secondary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p
            className={`text-sm font-semibold text-[var(--color-accent)] tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            WHAT WE DO
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Comprehensive Security Services
          </h2>
          <p
            className={`mt-6 text-xl text-[var(--color-text-secondary)] leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            A structured approach to identifying, understanding, and securing your systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-8 bg-[var(--color-bg-primary)] rounded-xl border-2 border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-500 hover-lift ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative inline-flex items-center justify-center w-14 h-14 bg-[var(--color-bg-secondary)] rounded-lg text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-light)] transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="relative mt-6 text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative mt-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {service.description}
              </p>

              {/* Items List */}
              <ul className="relative mt-6 space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center text-sm text-[var(--color-text-muted)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mr-3" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Arrow indicator */}
              <div className="relative mt-6 flex items-center text-[var(--color-accent)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <a
            href="/services"
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] bg-transparent border-2 border-[var(--color-border)] rounded-md hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
          >
            View All Services
            <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
