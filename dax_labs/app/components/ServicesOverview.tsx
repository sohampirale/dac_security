const services = [
  {
    title: 'Application Security Assessment',
    description: 'Comprehensive Vulnerability Assessment and Penetration Testing services to assess and strengthen the cybersecurity posture of your application.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Network Security Assessment',
    description: 'Identify vulnerabilities and misconfigurations in your network infrastructure through comprehensive VAPT and Secure Configuration Audits.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Compliance and Data Privacy',
    description: 'IT GRC solutions help transform inefficient processes across extended enterprise into an integrated risk program.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Red Teaming',
    description: 'Simulate real-world, custom-tailored cyberattacks to test defenses, uncover hidden vulnerabilities and strengthen incident response readiness.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Digital Forensic Services',
    description: 'Uncover, analyze, and preserve digital evidence from devices and information systems, supporting investigations and ensuring data integrity.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
  },
  {
    title: 'Security Operation Center',
    description: 'Comprehensive SOC services for 24/7 security monitoring, threat detection, and incident response to protect your digital assets.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            OUR COMPREHENSIVE SECURITY ECOSYSTEM
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Explore our range of specialized IT security services designed to safeguard every aspect of your digital presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <a
              key={service.title}
              href="/services"
              className="group p-6 lg:p-8 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300 hover-lift flex flex-col"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-light)] transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold text-[var(--color-text-primary)]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="mt-4 flex items-center text-[var(--color-accent)] font-semibold group-hover:text-[var(--color-accent-hover)] transition-colors">
                <span>Learn More</span>
                <svg
                  className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
