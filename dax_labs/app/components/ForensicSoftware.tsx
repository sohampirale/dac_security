'use client';

import { useState } from 'react';

const forensicSoftwareTools = [
  {
    category: 'Mobile Forensic Tools',
    description: 'Extract and analyze data from mobile devices including smartphones, tablets, and wearables.',
    features: [
      'Physical and logical extraction',
      'Cloud data extraction',
      'App data analysis',
      'Deleted data recovery',
      'GPS and location data',
      'Call logs and messaging analysis',
      'Social media data extraction',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    category: 'Computer Forensic Tools',
    description: 'Desktop and laptop forensic analysis for Windows, macOS, and Linux systems.',
    features: [
      'Disk imaging and cloning',
      'File system analysis',
      'Registry analysis',
      'Browser history analysis',
      'Email forensics',
      'Document metadata analysis',
      'Timeline analysis',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    category: 'Image & Video Authentication',
    description: 'Verify and analyze multimedia evidence for authenticity and enhancement.',
    features: [
      'Image authentication',
      'Video enhancement',
      'Metadata extraction',
      'Forgery detection',
      'Frame analysis',
      'Audio extraction from video',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    category: 'DVR & NVR Forensic Tools',
    description: 'Surveillance system data extraction and analysis from digital video recorders.',
    features: [
      'Proprietary format conversion',
      'Video extraction',
      'Timeline reconstruction',
      'Multi-camera analysis',
      'Metadata preservation',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    category: 'Cloud Forensic Tools',
    description: 'Cloud-based evidence collection and analysis from various cloud service providers.',
    features: [
      'Cloud storage forensics',
      'SaaS application forensics',
      'Cloud log analysis',
      'API-based data collection',
      'Multi-cloud support',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    category: 'OSINT & Social Media Forensics',
    description: 'Open-source intelligence gathering and social media investigation tools.',
    features: [
      'Social media profiling',
      'Username search',
      'Email search',
      'Phone number lookup',
      'Image reverse search',
      'Dark web monitoring',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    category: 'CDR/IPDR Forensic Tools',
    description: 'Call Detail Record and IP Detail Record analysis for telecommunications forensics.',
    features: [
      'CDR parsing and analysis',
      'IPDR analysis',
      'Call pattern analysis',
      'Location triangulation',
      'Timeline reconstruction',
      'Relationship mapping',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    category: 'Data Recovery Tools',
    description: 'Recover deleted, formatted, or damaged data from various storage media.',
    features: [
      'Hard drive recovery',
      'SSD recovery',
      'RAID recovery',
      'Memory card recovery',
      'USB drive recovery',
      'Database recovery',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    category: 'Password Cracking Tools',
    description: 'Password recovery utilities supporting multiple algorithms and attack methods.',
    features: [
      'Brute force attacks',
      'Dictionary attacks',
      'Hybrid attacks',
      'Rule-based attacks',
      'GPU acceleration',
      'Distributed cracking',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    category: 'Audio Forensic Tools',
    description: 'Audio evidence analysis and enhancement for investigations.',
    features: [
      'Audio enhancement',
      'Noise reduction',
      'Speaker identification',
      'Audio authentication',
      'Transcription support',
      'Spectral analysis',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    category: 'MAC Forensic Tools',
    description: 'Apple device forensics for macOS, iOS, and iPadOS devices.',
    features: [
      'iOS device extraction',
      'macOS analysis',
      'iCloud data extraction',
      'Apple ecosystem analysis',
      'Encrypted backup handling',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    category: 'Malware Forensic Tools',
    description: 'Malware analysis and investigation tools for threat intelligence.',
    features: [
      'Static analysis',
      'Dynamic analysis',
      'Sandbox execution',
      'Code analysis',
      'IOC extraction',
      'Threat intelligence integration',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    category: 'JTAG & Chip-off Forensics',
    description: 'Hardware-level data extraction from damaged or locked devices.',
    features: [
      'JTAG interface support',
      'Chip removal equipment',
      'Ball reballing tools',
      'Micro-soldering equipment',
      'NAND reader',
      'eMMC support',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    category: 'All-In-One Forensic Suites',
    description: 'Comprehensive forensic suites combining multiple capabilities.',
    features: [
      'End-to-end investigation workflow',
      'Multi-device support',
      'Integrated analysis tools',
      'Automated reporting',
      'Case management',
      'Collaboration features',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    category: 'Forensic Hardware Accessories',
    description: 'Specialized forensic equipment and accessories for investigations.',
    features: [
      'Write-blockers (hardware and software)',
      'Forensic duplicators',
      'Evidence storage cabinets',
      'Portable forensic kits',
      'Cable and adapter kits',
      'Anti-static workstations',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ForensicSoftware() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            FORENSIC SOFTWARE TOOLS
          </h2>
          <p className="mt-4 text-sm sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Comprehensive suite of forensic software tools for digital evidence collection, analysis, and reporting across various platforms and devices.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-5xl mx-auto space-y-4">
          {forensicSoftwareTools.map((tool, index) => (
            <div
              key={tool.category}
              className="bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)] overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-[var(--color-bg-tertiary)] transition-colors sm:px-6 sm:py-5"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-accent)]">
                    {tool.icon}
                  </div>
                  <span className="text-base font-semibold text-[var(--color-text-primary)] sm:text-lg">
                    {tool.category}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 text-[var(--color-text-muted)] transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 sm:text-base">
                    {tool.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {tool.features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <svg
                          className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-[var(--color-accent)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs text-[var(--color-text-muted)] sm:text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
