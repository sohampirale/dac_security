'use client';

import { useState } from 'react';

interface SubService {
  title: string;
  description: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  subServices: SubService[];
  benefits: string[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'application-security',
    title: 'Application Security Assessment',
    description: 'Our VAPT services identify security weaknesses in your applications before malicious actors can exploit them.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    subServices: [
      { title: 'Web Application', description: 'In-depth security testing for web apps to identify SQL injection, XSS, CSRF, and OWASP Top 10 vulnerabilities.' },
      { title: 'Mobile Apps', description: 'Comprehensive security assessment for iOS and Android applications through static and dynamic analysis.' },
      { title: 'API/Web Services Assessment', description: ' Thorough evaluation of API endpoints for security flaws, authentication weaknesses, and data exposure risks.' },
      { title: 'Thick Client / Desktop Application', description: 'Detailed security evaluation of desktop applications and thick clients for hidden vulnerabilities.' },
      { title: 'Source Code Review', description: 'Manual and automated code review to identify security flaws and coding vulnerabilities.' },
      { title: 'GIGW Compliance', description: 'Government of India web guidelines compliance assessment for government-facing applications.' },
      { title: 'Functional & Performance Testing', description: 'Rigorous testing of application functionality and performance under load scenarios.' },
    ],
    benefits: [
      'Discover hidden application vulnerabilities',
      'Meet regulatory compliance requirements',
      'Safeguard sensitive user data',
      'Preserve brand reputation',
      'Prevent costly data breaches',
    ],
  },
  {
    id: 'network-security',
    title: 'Network Security Assessment',
    description: 'We identify vulnerabilities and misconfigurations in your network infrastructure before attackers can exploit them.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    subServices: [
      { title: 'Network Architecture Review', description: 'In-depth analysis of network design to identify security gaps and hardening opportunities.' },
      { title: 'Vulnerability Assessment and Penetration Testing (VAPT)', description: 'Systematic identification and exploitation of vulnerabilities to assess real-world risk.' },
      { title: 'External Penetration Testing', description: 'Realistic attack simulation against external-facing systems from an adversarial perspective.' },
      { title: 'Secure Configuration Audit', description: 'Configuration review against CIS, NIST, and industry security benchmarks.' },
      { title: 'Wireless Security Assessment', description: 'Evaluation of WiFi networks for rogue access points and encryption vulnerabilities.' },
      { title: 'Log Analysis', description: 'Security log review for anomalies, incidents, and compliance evidence.' },
      { title: 'Operation Technology (OT) Security', description: 'Specialized assessment for industrial control systems and OT environments.' },
      { title: 'Telecom Security', description: 'Security evaluation of telecom infrastructure and network elements.' },
    ],
    benefits: [
      'Harden network infrastructure',
      'Block unauthorized access attempts',
      'Maintain network uptime',
      'Enable rapid threat detection',
      'Demonstrate compliance posture',
    ],
  },
  {
    id: 'compliance-privacy',
    title: 'Compliance and Data Privacy',
    description: 'Our GRC solutions help transform complex regulatory requirements into practical, integrated security programs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    subServices: [
      { title: 'ISO 27001, ISO 27701, ISO 22301', description: 'End-to-end implementation and audit support for ISO management system certifications.' },
      { title: 'BFSI (RBI, SEBI, IRDAI)', description: 'Specialized compliance services for banking, financial services, and insurance sectors.' },
      { title: 'AADHAR UIDAI (AUA/ASA)', description: 'UIDAI authentication compliance for Aadhaar-enabled services.' },
      { title: 'CCA (PKI, E-Sign)', description: 'Controller of Certifying Authorities and digital signature compliance.' },
      { title: 'DPDP Act: 2023', description: 'India Digital Personal Data Protection Act compliance advisory and implementation.' },
      { title: 'Central Electricity Authority (CEA)', description: 'Power sector security compliance and critical infrastructure protection.' },
      { title: 'Security Operations Center', description: 'SOC design, implementation, and operational services.' },
      { title: 'SOC Type I and Type II', description: 'SOC audit and regulatory certification support.' },
      { title: 'DoT Compliance', description: 'Department of Telecommunications compliance for telecom service providers.' },
      { title: 'Third Party Assessment', description: 'Vendor and supplier security risk assessments.' },
    ],
    benefits: [
      'Regulatory penalty avoidance',
      'Enhanced stakeholder trust',
      'Unified security framework',
      'Legal risk reduction',
      'Documented compliance证据',
    ],
  },
  {
    id: 'red-teaming',
    title: 'Red Teaming',
    description: 'We simulate real-world cyberattacks to test your defenses, expose hidden weaknesses, and improve your incident response.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    subServices: [
      { title: 'Phishing/Vishing Campaign', description: 'Realistic phishing and voice phishing simulations to test employee awareness levels.' },
      { title: 'Ransomware Readiness', description: 'Comprehensive assessment of ransomware preparedness including backup and recovery validation.' },
      { title: 'External Penetration Testing', description: 'External attacker simulation to test perimeter security controls.' },
      { title: 'Threat Intelligence', description: 'Strategic threat data collection and analysis for proactive defense planning.' },
      { title: 'Cyber Security Mock Drills', description: 'Full-scale attack exercises to evaluate incident response capabilities.' },
      { title: 'DoS / DDoS Assessment', description: 'Resilience testing against denial-of-service attack scenarios.' },
      { title: 'Tabletop Exercise', description: 'Leadership and technical team incident response scenario discussions.' },
      { title: 'Physical Security', description: 'Physical access control testing and social engineering vulnerability assessment.' },
    ],
    benefits: [
      'Realistic attack scenario testing',
      'Hidden vulnerability identification',
      'Enhanced incident response',
      'Security team skill development',
      'Security investment validation',
    ],
  },
  {
    id: 'iot-security',
    title: 'IoT Security Assessment',
    description: 'Specialized security testing for IoT devices and embedded systems to ensure secure connectivity and data protection.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    subServices: [
      { title: 'IP-Camera Testing', description: 'Security assessment for IP-based surveillance cameras and video systems.' },
      { title: 'IoT/Hardware Device Testing', description: 'Comprehensive evaluation of IoT devices, embedded systems, and hardware for security weaknesses.' },
    ],
    benefits: [
      'Secure connected device deployments',
      'Prevent device compromise',
      'Protect data in transit',
      'Ensure device integrity',
      'IoT security standard compliance',
    ],
  },
  {
    id: 'soc-services',
    title: 'Security Operation Center (SOC)',
    description: 'Our SOC services provide 24/7 security monitoring, threat detection, and rapid incident response for your organization.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    subServices: [
      { title: 'SOC Designing & Creation', description: 'Custom SOC infrastructure design and implementation.' },
      { title: 'SOC Consulting', description: 'Advisory services for SOC strategy and maturity improvement.' },
      { title: 'SOC Operational Services', description: 'Day-to-day SOC operations, monitoring, and reporting.' },
      { title: 'SOC as a Service', description: 'Fully managed 24/7 security monitoring and response.' },
      { title: 'Attack Surface Management', description: 'Continuous external attack surface monitoring and risk assessment.' },
      { title: 'Monitoring and Detection', description: 'Round-the-clock security monitoring with advanced threat detection.' },
      { title: 'Incident Response', description: 'Rapid incident response and forensic investigation.' },
      { title: 'Cyber Security Threat Assessment', description: 'Organizational threat landscape evaluation.' },
      { title: 'Threat Hunting', description: 'Proactive threat hunting using intelligence-driven methodologies.' },
      { title: 'Governance, Risk & Compliance Consulting', description: 'Integrated GRC advisory and implementation services.' },
      { title: 'Network Security', description: 'Continuous network security monitoring and management.' },
      { title: 'Awareness and Training', description: 'Security awareness programs for all organizational levels.' },
    ],
    benefits: [
      'Continuous security monitoring',
      'Accelerated threat detection',
      'Reduced response times',
      'Centralized security visibility',
      'Compliance documentation',
    ],
  },
  {
    id: 'digital-forensic',
    title: 'Digital Forensic Services',
    description: 'We uncover, analyze, and preserve digital evidence to support investigations and legal proceedings with proper chain of custody.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
    subServices: [
      { title: 'Creation of Digital Forensic Lab', description: 'Complete forensic laboratory setup with proper infrastructure.' },
      { title: 'Disk Forensics', description: 'Forensic analysis of hard drives and digital storage media.' },
      { title: 'Password Cracking', description: 'Advanced password recovery for investigative needs.' },
      { title: 'Image & Video Forensics', description: 'Authentication and analysis of visual digital evidence.' },
      { title: 'Data Recovery', description: 'Recovery of deleted, corrupted, or encrypted data.' },
      { title: 'Mobile Forensics', description: 'Forensic extraction from smartphones and tablets.' },
      { title: 'Incident Response', description: 'Forensic support during security incident investigations.' },
    ],
    benefits: [
      'Proper evidence preservation',
      'Legal proceeding support',
      'Incident root cause analysis',
      'Critical data recovery',
      'Chain of custody documentation',
    ],
  },
];

interface ServiceDetailProps {
  service: ServiceCategory;
  isOpen: boolean;
  onToggle: () => void;
}

function ServiceDetail({ service, isOpen, onToggle }: ServiceDetailProps) {
  return (
    <div className="bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-border-hover)] transition-all duration-300">
      {/* Service Header - Clickable */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-8 lg:px-8 lg:py-10 flex items-start justify-between text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-start space-x-6">
          {/* Icon */}
          <div className="flex-shrink-0 w-14 h-14 bg-[var(--color-bg-tertiary)] rounded-lg flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-light)] transition-colors duration-300">
            {service.icon}
          </div>
          
          {/* Title and Description */}
          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
              {service.title}
            </h3>
            <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed hidden sm:block">
              {service.description}
            </p>
          </div>
        </div>

        {/* Expand/Collapse Icon */}
        <div className="flex-shrink-0 ml-4">
          <svg
            className={`w-6 h-6 text-[var(--color-text-muted)] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-8 lg:px-8 lg:pb-10">
          {/* Mobile Description (shown only in expanded state on mobile) */}
          <p className="sm:hidden text-[var(--color-text-secondary)] leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Sub-Services Grid */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Sub-Services</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.subServices.map((subService, index) => (
                <div
                  key={index}
                  className="p-4 bg-[var(--color-bg-secondary)] rounded-md border border-[var(--color-border-subtle)]"
                >
                  <h5 className="font-semibold text-[var(--color-text-primary)]">
                    {subService.title}
                  </h5>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {subService.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div>
            <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Key Benefits</h4>
            <ul className="grid sm:grid-cols-2 gap-3">
              {service.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-[var(--color-text-secondary)]"
                >
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 text-base font-semibold text-[var(--color-text-light)] bg-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent-hover)] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              Request {service.title}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesDetail() {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenServiceId(openServiceId === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            COMPREHENSIVE SECURITY SERVICES
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Click on each service to explore detailed offerings and benefits tailored to your security needs.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-6">
          {serviceCategories.map((service) => (
            <ServiceDetail
              key={service.id}
              service={service}
              isOpen={openServiceId === service.id}
              onToggle={() => handleToggle(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
