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
    description: 'Comprehensive Vulnerability Assessment and Penetration Testing services to assess and strengthen the cybersecurity posture of your application.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    subServices: [
      { title: 'Web Application', description: 'Security testing for web-based applications to identify vulnerabilities like SQL injection, XSS, CSRF, and other OWASP Top 10 threats.' },
      { title: 'Mobile Apps', description: 'Security assessment for iOS and Android mobile applications including static and dynamic analysis.' },
      { title: 'API/Web Services Assessment', description: 'Testing of API endpoints and web services for security flaws, authentication issues, and data exposure.' },
      { title: 'Thick Client / Desktop Application', description: 'Security evaluation of desktop and thick client applications for vulnerabilities.' },
      { title: 'Source Code Review', description: 'Manual and automated review of source code for security vulnerabilities, coding standards, and best practices.' },
      { title: 'GIGW Compliance', description: 'Compliance assessment against Government of India Guidelines (GIGW) for web applications.' },
      { title: 'Functional & Performance Testing', description: 'Testing application functionality and performance under various conditions and load scenarios.' },
    ],
    benefits: [
      'Identify vulnerabilities before attackers do',
      'Ensure compliance with industry standards',
      'Protect sensitive customer data',
      'Maintain business reputation',
      'Reduce risk of data breaches',
    ],
  },
  {
    id: 'network-security',
    title: 'Network Security Assessment',
    description: 'Identify vulnerabilities and misconfigurations in your network infrastructure through comprehensive VAPT and Secure Configuration Audits.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    subServices: [
      { title: 'Network Architecture Review', description: 'Comprehensive review of network design and architecture for security gaps and optimization opportunities.' },
      { title: 'Vulnerability Assessment and Penetration Testing (VAPT)', description: 'Identifying and exploiting vulnerabilities to assess risk and provide remediation guidance.' },
      { title: 'External Penetration Testing', description: 'Testing external-facing systems and perimeter defenses from an attacker\'s perspective.' },
      { title: 'Secure Configuration Audit', description: 'Auditing system and device configurations against security benchmarks (CIS, NIST).' },
      { title: 'Wireless Security Assessment', description: 'Testing WiFi and wireless network security for unauthorized access points and encryption weaknesses.' },
      { title: 'Log Analysis', description: 'Review and analysis of security logs for anomalies, incidents, and compliance requirements.' },
      { title: 'Operation Technology (OT) Security', description: 'Security assessment for industrial control systems (ICS/SCADA) and OT environments.' },
      { title: 'Telecom Security', description: 'Security evaluation of telecommunications infrastructure and network elements.' },
    ],
    benefits: [
      'Protect critical network infrastructure',
      'Prevent unauthorized access',
      'Ensure network availability',
      'Detect and respond to threats',
      'Maintain regulatory compliance',
    ],
  },
  {
    id: 'compliance-privacy',
    title: 'Compliance and Data Privacy',
    description: 'IT GRC (Governance, Risk, and Compliance) solutions help transform inefficient processes across extended enterprise into an integrated risk program.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    subServices: [
      { title: 'ISO 27001, ISO 27701, ISO 22301', description: 'Implementation and audit support for ISO management system standards for information security, privacy, and business continuity.' },
      { title: 'BFSI (RBI, SEBI, IRDAI)', description: 'Compliance services for Banking, Financial Services, and Insurance sector as per regulatory requirements.' },
      { title: 'AADHAR UIDAI (AUA/ASA)', description: 'Compliance for UIDAI Authentication User Agency and Sub-AUA requirements for Aadhaar integration.' },
      { title: 'CCA (PKI, E-Sign)', description: 'Compliance for Controller of Certifying Authorities, PKI and E-Signature services.' },
      { title: 'DPDP Act: 2023', description: 'Compliance with India\'s Digital Personal Data Protection Act 2023 for data privacy.' },
      { title: 'Central Electricity Authority (CEA)', description: 'Compliance for power sector security requirements and critical infrastructure protection.' },
      { title: 'Security Operations Center', description: 'SOC implementation and operational services for continuous monitoring.' },
      { title: 'SOC Type I and Type II', description: 'SOC audit and certification services as per regulatory requirements.' },
      { title: 'DoT Compliance', description: 'Department of Telecommunications compliance services for telecom operators.' },
      { title: 'Third Party Assessment', description: 'Vendor and third-party security assessments to ensure supply chain security.' },
    ],
    benefits: [
      'Avoid regulatory penalties',
      'Build customer trust',
      'Standardize security practices',
      'Reduce legal and compliance risks',
      'Demonstrate due diligence',
    ],
  },
  {
    id: 'red-teaming',
    title: 'Red Teaming',
    description: 'Simulate real-world, custom-tailored cyberattacks to test defenses, uncover hidden vulnerabilities across entire threat surface and strengthen incident response readiness.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    subServices: [
      { title: 'Phishing/Vishing Campaign', description: 'Simulated phishing and voice phishing attacks to test employee awareness and security culture.' },
      { title: 'Ransomware Readiness', description: 'Assessment of organizational preparedness against ransomware attacks including backup and recovery testing.' },
      { title: 'External Penetration Testing', description: 'Simulated external attacker scenarios to test perimeter defenses.' },
      { title: 'Threat Intelligence', description: 'Gathering and analyzing threat data for proactive defense and strategic decision-making.' },
      { title: 'Cyber Security Mock Drills', description: 'Full-scale simulated cyber attack exercises to test incident response capabilities.' },
      { title: 'DoS / DDoS Assessment', description: 'Testing resilience against Denial of Service and Distributed Denial of Service attacks.' },
      { title: 'Tabletop Exercise', description: 'Discussion-based incident response scenario exercises for leadership and technical teams.' },
      { title: 'Physical Security', description: 'Testing physical security controls, access mechanisms, and social engineering vulnerabilities.' },
    ],
    benefits: [
      'Test real-world attack scenarios',
      'Identify hidden vulnerabilities',
      'Improve incident response',
      'Train security teams',
      'Validate security investments',
    ],
  },
  {
    id: 'iot-security',
    title: 'IoT Security Assessment',
    description: 'Comprehensive security testing for Internet of Things (IoT) devices and embedded hardware to ensure secure connectivity and data protection.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    subServices: [
      { title: 'IP-Camera Testing', description: 'Security assessment of IP-based surveillance cameras for vulnerabilities and unauthorized access.' },
      { title: 'IoT/Hardware Device Testing', description: 'Security evaluation of IoT devices, embedded systems, and hardware for firmware vulnerabilities, communication security, and physical tampering.' },
    ],
    benefits: [
      'Secure IoT deployments',
      'Prevent device hijacking',
      'Protect data in transit',
      'Ensure device integrity',
      'Comply with IoT security standards',
    ],
  },
  {
    id: 'soc-services',
    title: 'Security Operation Center (SOC)',
    description: 'Comprehensive SOC services for 24/7 security monitoring, threat detection, and incident response to protect your digital assets.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    subServices: [
      { title: 'SOC Designing & Creation', description: 'Design and build custom SOC infrastructure tailored to organizational needs.' },
      { title: 'SOC Consulting', description: 'Advisory services for SOC implementation, optimization, and maturity assessment.' },
      { title: 'SOC Operational Services', description: 'Day-to-day SOC operations including monitoring, analysis, and reporting.' },
      { title: 'SOC as a Service', description: 'Fully managed SOC services with 24/7 monitoring and response.' },
      { title: 'Attack Surface Management', description: 'Continuous monitoring and management of organizational attack surface including external assets.' },
      { title: 'Monitoring and Detection', description: '24/7 security monitoring and threat detection using SIEM and advanced analytics.' },
      { title: 'Incident Response', description: 'Rapid response to security incidents and breaches with forensic investigation.' },
      { title: 'Cyber Security Threat Assessment', description: 'Evaluation of current threat landscape and organizational risk profile.' },
      { title: 'Threat Hunting', description: 'Proactive search for hidden threats within the environment using intelligence-driven approach.' },
      { title: 'Governance, Risk & Compliance Consulting', description: 'GRC advisory and implementation services for regulatory compliance.' },
      { title: 'Network Security', description: 'Network security monitoring, management, and optimization.' },
      { title: 'Awareness and Training', description: 'Security awareness programs and training for employees at all levels.' },
    ],
    benefits: [
      '24/7 security monitoring',
      'Faster threat detection',
      'Reduced incident response time',
      'Centralized security operations',
      'Compliance reporting',
    ],
  },
  {
    id: 'digital-forensic',
    title: 'Digital Forensic Services',
    description: 'Uncover, analyze, and preserve digital evidence from devices and information systems, supporting investigations and ensuring data integrity for legal proceedings.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
    subServices: [
      { title: 'Creation of Digital Forensic Lab', description: 'Setup and establishment of forensic laboratories with proper tools, infrastructure, and chain of custody procedures.' },
      { title: 'Disk Forensics', description: 'Analysis of hard drives and storage media for evidence recovery and investigation.' },
      { title: 'Password Cracking', description: 'Recovery and cracking of passwords for investigations using advanced techniques.' },
      { title: 'Image & Video Forensics', description: 'Authentication, enhancement, and analysis of visual media for evidence.' },
      { title: 'Data Recovery', description: 'Recovery of deleted, damaged, or encrypted data from various storage media.' },
      { title: 'Mobile Forensics', description: 'Extraction and analysis of data from mobile devices including smartphones and tablets.' },
      { title: 'Incident Response', description: 'Forensic support during security incident response to determine root cause and scope.' },
    ],
    benefits: [
      'Preserve digital evidence',
      'Support legal proceedings',
      'Investigate security incidents',
      'Recover critical data',
      'Maintain chain of custody',
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
