export interface ProductData {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  iconKey: string;
  category: 'it-security' | 'digital-forensic' | 'forensic-software';
  features: string[];
  specifications: { label: string; value: string }[];
  useCases: { title: string; description: string }[];
  benefits: string[];
  relatedProducts: { name: string; href: string; description: string }[];
}

export const itSecurityProducts: ProductData[] = [
  {
    slug: 'web-application-firewall',
    name: 'Web Application Firewall (WAF)',
    shortDescription: 'Protects web applications from various attacks including SQL injection, XSS, DDoS, and OWASP Top 10 threats.',
    fullDescription: `Our Web Application Firewall (WAF) provides comprehensive protection for your web applications against a wide range of cyber threats. Designed to safeguard your critical business applications, the WAF inspects all incoming and outgoing traffic to detect and block malicious activities before they can cause harm.

The solution offers real-time protection against OWASP Top 10 vulnerabilities including SQL injection, cross-site scripting (XSS), cross-site request forgery (CSRF), and other common attack vectors. With advanced threat intelligence and machine learning capabilities, our WAF continuously adapts to emerging threats.

Built for enterprise environments, the WAF supports both cloud and on-premise deployments, offering flexibility to match your infrastructure requirements. The intuitive management console provides comprehensive visibility into application traffic, security events, and threat patterns, enabling your security team to make informed decisions quickly.`,
    iconKey: 'waf',
    category: 'it-security',
    features: [
      'Real-time protection against OWASP Top 10 vulnerabilities',
      'Advanced SQL injection and XSS detection and prevention',
      'DDoS attack mitigation with rate limiting',
      'API security and protection',
      'Bot management and automated threat detection',
      'Virtual patching for known vulnerabilities',
      'SSL/TLS inspection and decryption',
      'Comprehensive logging and reporting',
      'Customizable security policies and rules',
      'Integration with SIEM and SOC platforms',
    ],
    specifications: [
      { label: 'Deployment Options', value: 'Cloud, On-Premise, Hybrid' },
      { label: 'Throughput Capacity', value: 'Up to 100 Gbps' },
      { label: 'Latency', value: '< 1ms average' },
      { label: 'SSL/TLS Support', value: 'TLS 1.0, 1.1, 1.2, 1.3' },
      { label: 'Management Interface', value: 'Web-based console, API, CLI' },
      { label: 'Integration', value: 'SIEM, SOAR, Ticketing Systems' },
      { label: 'Compliance', value: 'PCI DSS, HIPAA, GDPR, SOC 2' },
      { label: 'High Availability', value: 'Active-Active, Active-Passive clustering' },
    ],
    useCases: [
      {
        title: 'E-commerce Protection',
        description: 'Secure online transactions and customer data from payment fraud and data theft.',
      },
      {
        title: 'Banking Applications',
        description: 'Protect critical banking portals from financial fraud and credential theft.',
      },
      {
        title: 'Healthcare Portals',
        description: 'Safeguard patient data and ensure HIPAA compliance for healthcare applications.',
      },
      {
        title: 'Government Websites',
        description: 'Defend citizen services and sensitive government data from cyber attacks.',
      },
    ],
    benefits: [
      'Prevent data breaches and protect sensitive information',
      'Ensure regulatory compliance (PCI DSS, HIPAA, GDPR)',
      'Maintain business continuity and uptime',
      'Reduce security operational costs',
      'Protect brand reputation and customer trust',
      'Enable secure digital transformation',
    ],
    relatedProducts: [
      {
        name: 'DDoS Mitigation Solution',
        href: '/products/it-security/ddos-mitigation',
        description: 'Defend against Distributed Denial of Service attacks.',
      },
      {
        name: 'API Security',
        href: '/products/it-security/api-security',
        description: 'Comprehensive API protection and monitoring.',
      },
      {
        name: 'Bot Management',
        href: '/products/it-security/bot-management',
        description: 'Detect and mitigate automated bot threats.',
      },
    ],
  },
  {
    slug: 'ddos-mitigation',
    name: 'DDoS Mitigation Solution',
    shortDescription: 'Defends against Distributed Denial of Service attacks with real-time detection and automated response.',
    fullDescription: `Our DDoS Mitigation Solution provides enterprise-grade protection against Distributed Denial of Service attacks, ensuring your critical services remain available even under the most sophisticated attack scenarios. With the increasing frequency and scale of DDoS attacks, organizations need robust defenses to maintain business continuity.

The solution employs advanced detection algorithms and machine learning to identify and mitigate DDoS attacks in real-time, often before they impact your services. From volumetric attacks that overwhelm network bandwidth to application-layer attacks targeting specific services, our comprehensive protection covers all attack vectors.

With a global scrubbing center network, malicious traffic is diverted and cleaned while legitimate traffic flows uninterrupted to your infrastructure. The solution supports automatic scaling to handle attacks of any size, from small application-layer attacks to massive multi-gigabit volumetric assaults.`,
    iconKey: 'ddos',
    category: 'it-security',
    features: [
      'Real-time DDoS attack detection and mitigation',
      'Protection against volumetric, protocol, and application-layer attacks',
      'Automatic traffic scrubbing with global scrubbing centers',
      'Sub-minute mitigation response time',
      'Always-on or on-demand protection modes',
      'Advanced rate limiting and traffic shaping',
      'Comprehensive attack analytics and reporting',
      '24/7 threat monitoring and response',
      'Integration with existing network infrastructure',
      'Customizable mitigation policies',
    ],
    specifications: [
      { label: 'Protection Capacity', value: 'Unlimited (cloud-based)' },
      { label: 'Response Time', value: '< 60 seconds' },
      { label: 'Attack Types Covered', value: 'Volumetric, Protocol, Application' },
      { label: 'Deployment', value: 'DNS-based, BGP, GRE Tunneling' },
      { label: 'Monitoring', value: '24/7 SOC monitoring' },
      { label: 'Reporting', value: 'Real-time dashboards, historical analysis' },
      { label: 'SLA', value: '99.999% availability guarantee' },
      { label: 'Support', value: '24/7 emergency response team' },
    ],
    useCases: [
      {
        title: 'E-commerce Availability',
        description: 'Ensure online stores remain accessible during peak shopping seasons and sales events.',
      },
      {
        title: 'Financial Services',
        description: 'Protect banking and trading platforms from attack-induced downtime.',
      },
      {
        title: 'Gaming Platforms',
        description: 'Maintain game server availability and player experience during attacks.',
      },
      {
        title: 'SaaS Providers',
        description: 'Guarantee service availability for cloud-based applications.',
      },
    ],
    benefits: [
      'Maintain business continuity during attacks',
      'Protect revenue and customer trust',
      'Reduce incident response burden',
      'Scalable protection that grows with your business',
      'Cost-effective compared to attack downtime',
      'Peace of mind with 24/7 protection',
    ],
    relatedProducts: [
      {
        name: 'Web Application Firewall (WAF)',
        href: '/products/it-security/web-application-firewall',
        description: 'Protect web applications from various attacks.',
      },
      {
        name: 'Network Monitoring',
        href: '/products/it-security/network-monitoring',
        description: 'Continuous network surveillance and analysis.',
      },
      {
        name: 'Load Balancer',
        href: '/products/it-security/load-balancer',
        description: 'Distribute traffic for high availability.',
      },
    ],
  },
  {
    slug: 'reliability-optimization',
    name: 'Reliability & Optimization',
    shortDescription: 'Solutions for system reliability and performance optimization including load balancing and caching.',
    fullDescription: `Our Reliability & Optimization solutions ensure your digital infrastructure operates at peak performance while maintaining high availability. In today's fast-paced digital environment, even minor performance issues can significantly impact user experience and business outcomes.

We provide comprehensive load balancing solutions that distribute traffic across multiple servers, preventing any single resource from becoming a bottleneck. Our intelligent traffic management ensures optimal resource utilization, minimizes response times, and maximizes throughput.

Advanced caching mechanisms reduce server load and improve content delivery speeds by storing frequently accessed data closer to end users. Combined with performance monitoring and optimization tools, our solutions help you identify and resolve performance bottlenecks before they impact your users.`,
    iconKey: 'performance',
    category: 'it-security',
    features: [
      'Advanced load balancing with multiple algorithms',
      'Global server load balancing (GSLB)',
      'Content caching and acceleration',
      'SSL offloading and termination',
      'Health monitoring and automatic failover',
      'Session persistence and affinity',
      'Traffic shaping and prioritization',
      'Real-time performance analytics',
      'Auto-scaling integration',
      'Multi-cloud load balancing',
    ],
    specifications: [
      { label: 'Load Balancing Algorithms', value: 'Round Robin, Least Connections, IP Hash, Weighted' },
      { label: 'Throughput Capacity', value: 'Up to 100 Gbps' },
      { label: 'Connections per Second', value: 'Up to 10 million' },
      { label: 'SSL TPS', value: 'Up to 500,000' },
      { label: 'Health Checks', value: 'Layer 4 and Layer 7' },
      { label: 'Deployment', value: 'Hardware, Virtual, Cloud' },
      { label: 'High Availability', value: 'Active-Active, Active-Passive' },
      { label: 'Management', value: 'Web UI, API, CLI' },
    ],
    useCases: [
      {
        title: 'High-Traffic Websites',
        description: 'Ensure consistent performance during traffic spikes and peak usage periods.',
      },
      {
        title: 'E-commerce Platforms',
        description: 'Maintain fast page loads and checkout performance for better conversion rates.',
      },
      {
        title: 'Application Delivery',
        description: 'Optimize application performance for distributed user bases.',
      },
      {
        title: 'Microservices Architecture',
        description: 'Efficiently route traffic between microservices with intelligent load balancing.',
      },
    ],
    benefits: [
      'Improved application performance and user experience',
      'Higher availability and fault tolerance',
      'Better resource utilization and cost efficiency',
      'Scalability to handle growing traffic',
      'Reduced latency for global users',
      'Simplified infrastructure management',
    ],
    relatedProducts: [
      {
        name: 'DDoS Mitigation Solution',
        href: '/products/it-security/ddos-mitigation',
        description: 'Protect against DDoS attacks.',
      },
      {
        name: 'Network Monitoring',
        href: '/products/it-security/network-monitoring',
        description: 'Monitor network performance and health.',
      },
      {
        name: 'SSL VPN',
        href: '/products/it-security/ssl-vpn',
        description: 'Secure remote access solution.',
      },
    ],
  },
  {
    slug: 'ssl-vpn',
    name: 'SSL VPN',
    shortDescription: 'Secure remote access solution with encryption and authentication for secure connectivity.',
    fullDescription: `Our SSL VPN solution provides secure, encrypted remote access to your organization's network resources from any location and device. As remote work becomes increasingly common, ensuring secure connectivity for distributed teams is critical for maintaining productivity while protecting sensitive data.

Using industry-standard SSL/TLS encryption, our VPN creates secure tunnels between remote users and your network, protecting all data in transit from interception and eavesdropping. The solution supports a wide range of authentication methods, ensuring that only authorized users can access your resources.

With clientless access options, users can securely access web applications, file shares, and other resources directly from their web browser without installing additional software. For full network access, our dedicated VPN client provides seamless connectivity with advanced features like split tunneling and automatic reconnection.`,
    iconKey: 'vpn',
    category: 'it-security',
    features: [
      'SSL/TLS encryption for all connections',
      'Multi-factor authentication support',
      'Clientless and client-based access options',
      'Granular access controls and policies',
      'Endpoint security checks and compliance',
      'Split tunneling for optimized traffic',
      'Single sign-on (SSO) integration',
      'Session monitoring and recording',
      'Automatic reconnection and failover',
      'Mobile device support (iOS, Android)',
    ],
    specifications: [
      { label: 'Encryption', value: 'AES-256, AES-128, 3DES' },
      { label: 'Authentication', value: 'LDAP, AD, RADIUS, SAML, MFA' },
      { label: 'Concurrent Users', value: 'Up to 10,000+' },
      { label: 'Throughput', value: 'Up to 10 Gbps' },
      { label: 'Protocols', value: 'SSL/TLS, IPsec' },
      { label: 'Deployment', value: 'Hardware, Virtual, Cloud' },
      { label: 'Compliance', value: 'FIPS 140-2, Common Criteria' },
      { label: 'Management', value: 'Web-based console, API' },
    ],
    useCases: [
      {
        title: 'Remote Workforce',
        description: 'Enable secure remote access for employees working from home or traveling.',
      },
      {
        title: 'Branch Office Connectivity',
        description: 'Connect branch offices securely to headquarters resources.',
      },
      {
        title: 'Third-Party Access',
        description: 'Provide controlled access for contractors and partners.',
      },
      {
        title: 'Mobile Workforce',
        description: 'Secure access for field workers using mobile devices.',
      },
    ],
    benefits: [
      'Secure remote access from anywhere',
      'Protect sensitive data in transit',
      'Enable productive remote work',
      'Reduce security risks of public networks',
      'Simplify access management',
      'Meet compliance requirements',
    ],
    relatedProducts: [
      {
        name: 'DNS Firewall',
        href: '/products/it-security/dns-firewall',
        description: 'DNS-level protection against threats.',
      },
      {
        name: 'Email Security',
        href: '/products/it-security/email-security',
        description: 'Protect against email-based threats.',
      },
      {
        name: 'Endpoint Detection and Response',
        href: '/products/it-security/edr-xdr',
        description: 'Advanced endpoint threat detection.',
      },
    ],
  },
  {
    slug: 'dns-firewall',
    name: 'DNS Firewall',
    shortDescription: 'DNS-level protection against malware, phishing, and command-and-control communications.',
    fullDescription: `Our DNS Firewall provides critical first-line defense against cyber threats by filtering and blocking malicious DNS queries before they can establish connections to harmful destinations. As DNS is fundamental to virtually all network communications, securing this layer is essential for comprehensive security.

The solution uses real-time threat intelligence feeds to identify and block access to known malicious domains, including those associated with malware, phishing, ransomware, and botnet command-and-control servers. By stopping threats at the DNS layer, you prevent infections before they can establish a foothold in your network.

Beyond security, DNS Firewall also provides valuable visibility into network activity, helping you identify compromised devices, policy violations, and emerging threats. Detailed logging and reporting enable security teams to investigate incidents and understand threat patterns across the organization.`,
    iconKey: 'dns',
    category: 'it-security',
    features: [
      'Real-time blocking of malicious domains',
      'Threat intelligence feed integration',
      'Phishing and malware protection',
      'Botnet C&C communication blocking',
      'DNS query logging and analytics',
      'Custom block and allow lists',
      'Category-based filtering',
      'DNS-over-HTTPS (DoH) support',
      'High-performance DNS resolution',
      'Integration with SIEM platforms',
    ],
    specifications: [
      { label: 'Query Capacity', value: 'Up to 1 million queries/second' },
      { label: 'Response Time', value: '< 10ms average' },
      { label: 'Threat Intelligence', value: 'Real-time feeds, 50M+ malicious domains' },
      { label: 'Logging', value: 'Full query logging with retention' },
      { label: 'Deployment', value: 'On-premise, Cloud, Hybrid' },
      { label: 'Protocols', value: 'DNS, DNS-over-TLS, DNS-over-HTTPS' },
      { label: 'High Availability', value: 'Active-Active clustering' },
      { label: 'Management', value: 'Web console, API, CLI' },
    ],
    useCases: [
      {
        title: 'Malware Prevention',
        description: 'Block malware downloads and command-and-control communications.',
      },
      {
        title: 'Phishing Protection',
        description: 'Prevent users from accessing phishing websites and landing pages.',
      },
      {
        title: 'IoT Security',
        description: 'Protect IoT devices that cannot run traditional security software.',
      },
      {
        title: 'Compliance',
        description: 'Meet regulatory requirements for DNS security and logging.',
      },
    ],
    benefits: [
      'Stop threats before they reach your network',
      'Reduce malware infections significantly',
      'Gain visibility into network activity',
      'Lightweight protection with minimal overhead',
      'Protect all devices including IoT',
      'Support incident response and forensics',
    ],
    relatedProducts: [
      {
        name: 'Email Security',
        href: '/products/it-security/email-security',
        description: 'Protection against email-based threats.',
      },
      {
        name: 'Network Security Scanners',
        href: '/products/it-security/network-security-scanners',
        description: 'Vulnerability scanning and assessment.',
      },
      {
        name: 'SIEM',
        href: '/products/it-security/siem',
        description: 'Security information and event management.',
      },
    ],
  },
  {
    slug: 'siem',
    name: 'SIEM (Security Information & Event Management)',
    shortDescription: 'Centralized security monitoring, log management, and incident detection with correlation and analytics.',
    fullDescription: `Our SIEM solution provides comprehensive security monitoring, log management, and incident detection capabilities, enabling organizations to identify and respond to threats quickly. In an era of sophisticated cyber attacks, having centralized visibility into security events across your entire infrastructure is essential.

The solution aggregates and correlates security events from across your network, applications, endpoints, and cloud services, providing a unified view of your security posture. Advanced analytics and machine learning algorithms identify anomalous behavior and potential threats that might go unnoticed in traditional monitoring.

With built-in compliance reporting, automated incident response workflows, and threat intelligence integration, our SIEM empowers security teams to proactively hunt threats, investigate incidents, and demonstrate compliance with regulatory requirements.`,
    iconKey: 'siem',
    category: 'it-security',
    features: [
      'Centralized log collection and management',
      'Real-time event correlation and analysis',
      'Advanced threat detection with machine learning',
      'User and entity behavior analytics (UEBA)',
      'Automated incident response and orchestration',
      'Threat intelligence integration',
      'Compliance reporting and dashboards',
      'Forensic investigation tools',
      'Customizable alerts and notifications',
      'Cloud and on-premise deployment options',
    ],
    specifications: [
      { label: 'Log Collection', value: 'Unlimited sources and formats' },
      { label: 'Storage Capacity', value: 'Scalable to petabytes' },
      { label: 'Search Performance', value: 'Sub-second query response' },
      { label: 'Retention', value: 'Configurable, up to 7+ years' },
      { label: 'Correlation Rules', value: 'Pre-built and custom rules' },
      { label: 'Dashboards', value: 'Real-time, customizable' },
      { label: 'Integration', value: '500+ pre-built connectors' },
      { label: 'Compliance', value: 'PCI DSS, HIPAA, GDPR, SOX' },
    ],
    useCases: [
      {
        title: 'Security Operations Center',
        description: 'Enable 24/7 security monitoring and incident response.',
      },
      {
        title: 'Threat Hunting',
        description: 'Proactively search for hidden threats in your environment.',
      },
      {
        title: 'Compliance Reporting',
        description: 'Generate reports for PCI DSS, HIPAA, GDPR, and other regulations.',
      },
      {
        title: 'Incident Investigation',
        description: 'Rapidly investigate and respond to security incidents.',
      },
    ],
    benefits: [
      'Comprehensive visibility across infrastructure',
      'Faster threat detection and response',
      'Simplified compliance management',
      'Reduced security operational costs',
      'Improved incident investigation',
      'Actionable security intelligence',
    ],
    relatedProducts: [
      {
        name: 'Log Management',
        href: '/products/it-security/log-management',
        description: 'Centralized log collection and analysis.',
      },
      {
        name: 'Network Monitoring',
        href: '/products/it-security/network-monitoring',
        description: 'Continuous network surveillance.',
      },
      {
        name: 'Endpoint Detection and Response',
        href: '/products/it-security/edr-xdr',
        description: 'Advanced endpoint threat detection.',
      },
    ],
  },
  {
    slug: 'email-security',
    name: 'Email Security',
    shortDescription: 'Protection against email-based threats including phishing, spam, malware, and business email compromise.',
    fullDescription: `Our Email Security solution provides comprehensive protection against the full spectrum of email-based threats, from spam and phishing to advanced targeted attacks. Email remains the primary attack vector for cybercriminals, making robust email security essential for every organization.

The solution employs multiple layers of defense, including advanced spam filtering, anti-phishing protection, malware detection, and data loss prevention. Machine learning algorithms analyze email content, sender reputation, and attachment behavior to identify and block threats before they reach user inboxes.

Beyond threat protection, our Email Security solution includes encryption capabilities for protecting sensitive communications, email archiving for compliance and eDiscovery, and detailed reporting to help security teams understand and respond to email-based attack trends.`,
    iconKey: 'email',
    category: 'it-security',
    features: [
      'Advanced spam filtering with 99%+ accuracy',
      'Phishing and spear-phishing protection',
      'Malware and ransomware detection',
      'Business email compromise (BEC) prevention',
      'Email encryption and DLP',
      'Email archiving and eDiscovery',
      'Sandboxing for suspicious attachments',
      'URL rewriting and time-of-click analysis',
      'Impersonation protection',
      'Security awareness training integration',
    ],
    specifications: [
      { label: 'Deployment', value: 'Cloud, On-Premise, Hybrid' },
      { label: 'Email Volume', value: 'Unlimited' },
      { label: 'Spam Detection', value: '>99% accuracy' },
      { label: 'False Positive Rate', value: '<0.001%' },
      { label: 'Encryption', value: 'TLS, S/MIME, PGP' },
      { label: 'Archive Storage', value: 'Unlimited, configurable retention' },
      { label: 'Integration', value: 'Office 365, G Suite, Exchange' },
      { label: 'Compliance', value: 'GDPR, HIPAA, FINRA, SEC' },
    ],
    useCases: [
      {
        title: 'Phishing Defense',
        description: 'Protect employees from phishing attacks and credential theft.',
      },
      {
        title: 'Ransomware Prevention',
        description: 'Block ransomware delivered via email attachments.',
      },
      {
        title: 'Data Protection',
        description: 'Prevent sensitive data leakage through email.',
      },
      {
        title: 'Compliance',
        description: 'Meet regulatory requirements for email security and archiving.',
      },
    ],
    benefits: [
      'Reduce email-based security incidents',
      'Protect against credential theft',
      'Prevent data loss and leakage',
      'Maintain regulatory compliance',
      'Improve email deliverability',
      'Reduce spam and increase productivity',
    ],
    relatedProducts: [
      {
        name: 'Data Loss Prevention (DLP)',
        href: '/products/it-security/dlp',
        description: 'Prevent unauthorized data exfiltration.',
      },
      {
        name: 'Security Awareness Training',
        href: '/services/security-awareness-training',
        description: 'Train employees to recognize threats.',
      },
      {
        name: 'DNS Firewall',
        href: '/products/it-security/dns-firewall',
        description: 'Block malicious domains.',
      },
    ],
  },
  {
    slug: 'dlp',
    name: 'Data Loss Prevention (DLP)',
    shortDescription: 'Prevents unauthorized data exfiltration and ensures sensitive data protection across endpoints and networks.',
    fullDescription: `Our Data Loss Prevention (DLP) solution provides comprehensive protection for sensitive data, preventing unauthorized access, sharing, and exfiltration across your organization. In an era of increasing data privacy regulations and sophisticated data theft techniques, DLP is essential for protecting your most valuable asset—data.

The solution discovers and classifies sensitive data across your environment, from structured databases to unstructured files on endpoints and cloud services. Advanced content inspection uses pattern matching, fingerprinting, and machine learning to identify sensitive information including PII, PHI, intellectual property, and financial data.

With granular policy controls, you can define exactly how different types of data can be used, shared, and stored. Real-time monitoring and blocking prevent policy violations across email, web uploads, cloud applications, removable media, and network transfers, while detailed audit trails support compliance and incident investigation.`,
    iconKey: 'dlp',
    category: 'it-security',
    features: [
      'Automated data discovery and classification',
      'Content inspection with pattern matching',
      'Data fingerprinting for exact matching',
      'Endpoint DLP for devices and removable media',
      'Network DLP for email and web traffic',
      'Cloud DLP for SaaS applications',
      'Encryption and access controls',
      'Real-time policy enforcement',
      'Incident management and workflow',
      'Comprehensive audit logging and reporting',
    ],
    specifications: [
      { label: 'Data Classification', value: 'Automatic and manual classification' },
      { label: 'Content Inspection', value: 'Regex, keywords, fingerprints, ML' },
      { label: 'Endpoints Supported', value: 'Windows, macOS, Linux' },
      { label: 'Cloud Applications', value: 'Office 365, G Suite, Salesforce, etc.' },
      { label: 'Protocols', value: 'SMTP, HTTP/HTTPS, FTP, SMB' },
      { label: 'Deployment', value: 'On-premise, Cloud, Hybrid' },
      { label: 'Compliance', value: 'GDPR, HIPAA, PCI DSS, CCPA' },
      { label: 'Management', value: 'Centralized console, API' },
    ],
    useCases: [
      {
        title: 'PCI DSS Compliance',
        description: 'Protect cardholder data and meet payment card industry requirements.',
      },
      {
        title: 'HIPAA Compliance',
        description: 'Safeguard protected health information (PHI).',
      },
      {
        title: 'GDPR Compliance',
        description: 'Protect personal data of EU residents.',
      },
      {
        title: 'Intellectual Property Protection',
        description: 'Prevent theft of trade secrets and proprietary information.',
      },
    ],
    benefits: [
      'Prevent data breaches and leaks',
      'Meet regulatory compliance requirements',
      'Protect intellectual property',
      'Gain visibility into data usage',
      'Reduce insider threat risk',
      'Enable secure cloud adoption',
    ],
    relatedProducts: [
      {
        name: 'Email Security',
        href: '/products/it-security/email-security',
        description: 'Protect against email-based threats.',
      },
      {
        name: 'Endpoint Detection and Response',
        href: '/products/it-security/edr-xdr',
        description: 'Advanced endpoint security.',
      },
      {
        name: 'Cloud Access Security Broker',
        href: '/products/it-security/casb',
        description: 'Secure cloud application usage.',
      },
    ],
  },
  {
    slug: 'edr-xdr',
    name: 'Endpoint Detection and Response (EDR/XDR)',
    shortDescription: 'Advanced endpoint threat detection and response with behavioral analysis and automated response.',
    fullDescription: `Our Endpoint Detection and Response (EDR) and Extended Detection and Response (XDR) solutions provide advanced threat detection, investigation, and response capabilities for your endpoint devices. As traditional antivirus proves inadequate against modern attacks, EDR/XDR has become essential for comprehensive endpoint security.

The solution continuously monitors endpoint activity, collecting detailed telemetry on processes, file operations, network connections, and user behavior. Advanced behavioral analytics and machine learning algorithms analyze this data to detect suspicious activities, from known malware to fileless attacks and living-off-the-land techniques.

When threats are detected, automated response capabilities enable rapid containment through process termination, file quarantine, network isolation, and other actions. Rich forensic data supports thorough investigation, helping security teams understand attack scope, identify compromised systems, and remediate effectively.`,
    iconKey: 'edr',
    category: 'it-security',
    features: [
      'Continuous endpoint monitoring',
      'Behavioral threat detection',
      'Machine learning-based analytics',
      'Ransomware detection and prevention',
      'Fileless attack detection',
      'Automated investigation and response',
      'Threat hunting tools',
      'Forensic data collection',
      'Integration with SIEM and SOAR',
      'Cloud and on-premise deployment',
    ],
    specifications: [
      { label: 'Endpoints Supported', value: 'Windows, macOS, Linux, iOS, Android' },
      { label: 'Telemetry Collection', value: 'Real-time, continuous' },
      { label: 'Detection Methods', value: 'Signatures, behavioral, ML, IOCs' },
      { label: 'Response Actions', value: 'Process kill, quarantine, isolate, remediate' },
      { label: 'Data Retention', value: 'Configurable, up to 1 year+' },
      { label: 'Deployment', value: 'Cloud, On-Premise, Hybrid' },
      { label: 'Integration', value: 'SIEM, SOAR, Threat Intelligence' },
      { label: 'Management', value: 'Centralized console, API' },
    ],
    useCases: [
      {
        title: 'Ransomware Defense',
        description: 'Detect and stop ransomware before encryption begins.',
      },
      {
        title: 'Advanced Threat Detection',
        description: 'Identify sophisticated attacks that evade traditional defenses.',
      },
      {
        title: 'Incident Response',
        description: 'Rapidly investigate and contain security incidents.',
      },
      {
        title: 'Threat Hunting',
        description: 'Proactively search for hidden threats in your environment.',
      },
    ],
    benefits: [
      'Detect advanced threats missed by traditional AV',
      'Faster incident response and containment',
      'Comprehensive visibility into endpoint activity',
      'Reduced dwell time of attackers',
      'Improved security team productivity',
      'Better compliance and audit readiness',
    ],
    relatedProducts: [
      {
        name: 'SIEM',
        href: '/products/it-security/siem',
        description: 'Centralized security monitoring.',
      },
      {
        name: 'Network Monitoring',
        href: '/products/it-security/network-monitoring',
        description: 'Network traffic analysis.',
      },
      {
        name: 'Managed Detection and Response',
        href: '/services/managed-detection-response',
        description: '24/7 threat monitoring service.',
      },
    ],
  },
  {
    slug: 'network-security-scanners',
    name: 'Network Security Scanners',
    shortDescription: 'Tools for scanning network vulnerabilities, misconfigurations, and compliance gaps.',
    fullDescription: `Our Network Security Scanners provide comprehensive vulnerability assessment and security configuration auditing for your network infrastructure. Identifying and remediating vulnerabilities before attackers can exploit them is fundamental to effective cybersecurity.

The solution performs automated scanning of network devices, servers, workstations, and applications to identify security vulnerabilities, misconfigurations, and compliance gaps. With a database of tens of thousands of vulnerability checks, the scanner covers everything from missing patches to weak encryption protocols.

Beyond vulnerability detection, our scanners provide prioritized remediation guidance, helping security teams focus on the most critical issues first. Integration with ticketing systems and IT operations platforms streamlines the remediation workflow, while compliance scanning supports regulatory requirements.`,
    iconKey: 'scanner',
    category: 'it-security',
    features: [
      'Automated vulnerability scanning',
      'Network device discovery and inventory',
      'Configuration compliance auditing',
      'Web application vulnerability scanning',
      'Database security scanning',
      'Wireless network security assessment',
      'Prioritized remediation guidance',
      'Integration with ticketing systems',
      'Scheduled and on-demand scanning',
      'Comprehensive reporting and dashboards',
    ],
    specifications: [
      { label: 'Vulnerability Database', value: '50,000+ checks, updated daily' },
      { label: 'Scan Capacity', value: 'Unlimited IP addresses' },
      { label: 'Scan Speed', value: 'Configurable, up to 10,000 hosts/hour' },
      { label: 'Compliance Standards', value: 'CIS, NIST, PCI DSS, HIPAA, ISO 27001' },
      { label: 'Deployment', value: 'On-premise, Virtual, Cloud' },
      { label: 'Integration', value: 'SIEM, Ticketing, ITSM platforms' },
      { label: 'Reporting', value: 'Executive, technical, compliance reports' },
      { label: 'Authentication', value: 'Credentialed and non-credentialed scanning' },
    ],
    useCases: [
      {
        title: 'Vulnerability Management',
        description: 'Continuous vulnerability assessment and remediation.',
      },
      {
        title: 'Compliance Auditing',
        description: 'Demonstrate compliance with security standards.',
      },
      {
        title: 'Pre-Deployment Testing',
        description: 'Validate security of new systems before production.',
      },
      {
        title: 'Merger & Acquisition Due Diligence',
        description: 'Assess security posture of acquired organizations.',
      },
    ],
    benefits: [
      'Identify vulnerabilities before attackers do',
      'Prioritize remediation efforts effectively',
      'Demonstrate compliance with regulations',
      'Reduce attack surface',
      'Improve security posture continuously',
      'Streamline vulnerability management',
    ],
    relatedProducts: [
      {
        name: 'Penetration Testing Tools',
        href: '/products/it-security/penetration-testing-tools',
        description: 'Professional security testing tools.',
      },
      {
        name: 'Patch Management',
        href: '/products/it-security/patch-management',
        description: 'Automated patch deployment.',
      },
      {
        name: 'SIEM',
        href: '/products/it-security/siem',
        description: 'Security monitoring and correlation.',
      },
    ],
  },
  {
    slug: 'web-security-scanner',
    name: 'Web Security Scanner',
    shortDescription: 'Scans web applications for security issues, vulnerabilities, and compliance violations.',
    fullDescription: `Our Web Security Scanner provides automated vulnerability assessment specifically designed for web applications and APIs. As web applications become increasingly complex and critical to business operations, ensuring their security is paramount.

The scanner performs comprehensive testing for OWASP Top 10 vulnerabilities and hundreds of other security issues, including SQL injection, cross-site scripting (XSS), insecure direct object references, and security misconfigurations. Both authenticated and unauthenticated scanning capabilities enable deep testing of application functionality.

With support for modern web technologies including single-page applications, REST APIs, and GraphQL, our scanner adapts to your application architecture. Detailed findings include proof-of-concept examples, risk ratings, and specific remediation guidance to help development teams fix issues quickly.`,
    iconKey: 'scanner',
    category: 'it-security',
    features: [
      'OWASP Top 10 vulnerability detection',
      'SQL injection and XSS testing',
      'Authentication and session testing',
      'API security scanning (REST, GraphQL)',
      'Single-page application support',
      'Authenticated scanning',
      'CI/CD pipeline integration',
      'Compliance scanning (PCI DSS, GDPR)',
      'False positive reduction',
      'Developer-friendly remediation guidance',
    ],
    specifications: [
      { label: 'Vulnerability Checks', value: '5,000+ web-specific tests' },
      { label: 'Scan Speed', value: 'Configurable crawl and scan rates' },
      { label: 'Authentication', value: 'Form-based, SSO, MFA support' },
      { label: 'API Support', value: 'REST, SOAP, GraphQL, OpenAPI' },
      { label: 'Integration', value: 'Jenkins, GitLab, Jira, Slack' },
      { label: 'Deployment', value: 'On-premise, Cloud, Docker' },
      { label: 'Compliance', value: 'PCI DSS, OWASP, GDPR, HIPAA' },
      { label: 'Reporting', value: 'Developer, executive, compliance reports' },
    ],
    useCases: [
      {
        title: 'Secure SDLC',
        description: 'Integrate security testing into development lifecycle.',
      },
      {
        title: 'PCI DSS Compliance',
        description: 'Meet requirement 11.3 for annual vulnerability scanning.',
      },
      {
        title: 'DevSecOps',
        description: 'Automated security testing in CI/CD pipelines.',
      },
      {
        title: 'Third-Party Assessment',
        description: 'Evaluate security of vendor and partner applications.',
      },
    ],
    benefits: [
      'Find vulnerabilities before production',
      'Reduce application security risks',
      'Enable developer self-service',
      'Meet compliance requirements',
      'Shift security left in SDLC',
      'Protect customer data and trust',
    ],
    relatedProducts: [
      {
        name: 'Web Application Firewall',
        href: '/products/it-security/web-application-firewall',
        description: 'Protect web applications from attacks.',
      },
      {
        name: 'Source Code Review Tools',
        href: '/products/it-security/source-code-review-tools',
        description: 'Static application security testing.',
      },
      {
        name: 'API Security',
        href: '/products/it-security/api-security',
        description: 'Comprehensive API protection.',
      },
    ],
  },
  {
    slug: 'patch-management',
    name: 'Patch Management',
    shortDescription: 'Automated patch deployment and management for operating systems and applications.',
    fullDescription: `Our Patch Management solution automates the identification, testing, and deployment of security patches across your entire IT infrastructure. With the volume of patches released daily and the speed at which attackers exploit known vulnerabilities, effective patch management is critical for security.

The solution provides comprehensive coverage for Windows, macOS, Linux operating systems, and hundreds of third-party applications. Automated scanning identifies missing patches, while flexible deployment options enable testing and staged rollouts to minimize disruption.

Advanced features include patch assessment, bandwidth optimization, and detailed compliance reporting. Integration with vulnerability scanners and IT operations platforms ensures patches are prioritized based on risk and deployed efficiently.`,
    iconKey: 'patch',
    category: 'it-security',
    features: [
      'Automated patch scanning and detection',
      'Support for 100+ vendors and applications',
      'Flexible deployment scheduling',
      'Pre-deployment testing capabilities',
      'Bandwidth optimization and distribution',
      'Patch approval workflows',
      'Compliance reporting and dashboards',
      'Rollback capabilities',
      'Integration with ITSM platforms',
      'Cloud and on-premise deployment',
    ],
    specifications: [
      { label: 'OS Support', value: 'Windows, macOS, Linux' },
      { label: 'Application Support', value: 'Adobe, Java, Chrome, Firefox, etc.' },
      { label: 'Patch Database', value: 'Updated daily from vendors' },
      { label: 'Deployment', value: 'On-premise, Cloud, Hybrid' },
      { label: 'Scalability', value: 'Unlimited endpoints' },
      { label: 'Integration', value: 'Active Directory, SCCM, ITSM' },
      { label: 'Compliance', value: 'CIS, NIST, PCI DSS, HIPAA' },
      { label: 'Reporting', value: 'Real-time dashboards, scheduled reports' },
    ],
    useCases: [
      {
        title: 'Vulnerability Remediation',
        description: 'Quickly deploy patches for critical vulnerabilities.',
      },
      {
        title: 'Compliance Management',
        description: 'Meet regulatory requirements for patch management.',
      },
      {
        title: 'Zero-Day Response',
        description: 'Rapidly deploy emergency patches for zero-day exploits.',
      },
      {
        title: 'IT Operations',
        description: 'Streamline patch deployment across the enterprise.',
      },
    ],
    benefits: [
      'Reduce vulnerability exposure window',
      'Automate manual patching processes',
      'Improve compliance posture',
      'Minimize patch-related disruptions',
      'Gain visibility into patch status',
      'Reduce security and IT workload',
    ],
    relatedProducts: [
      {
        name: 'Network Security Scanners',
        href: '/products/it-security/network-security-scanners',
        description: 'Vulnerability assessment tools.',
      },
      {
        name: 'Endpoint Management',
        href: '/products/it-security/endpoint-management',
        description: 'Unified endpoint management.',
      },
      {
        name: 'SIEM',
        href: '/products/it-security/siem',
        description: 'Security monitoring and correlation.',
      },
    ],
  },
  {
    slug: 'network-monitoring',
    name: 'Network Monitoring',
    shortDescription: 'Continuous network surveillance and analysis for performance and security issues.',
    fullDescription: `Our Network Monitoring solution provides comprehensive visibility into your network infrastructure, enabling proactive detection of performance issues, security threats, and operational problems. In complex modern networks, continuous monitoring is essential for maintaining availability and security.

The solution monitors network devices, traffic flows, and services in real-time, collecting metrics on availability, performance, utilization, and errors. Advanced analytics identify anomalies and potential issues before they impact users, while customizable alerts ensure the right teams are notified immediately.

Beyond operational monitoring, network traffic analysis provides security insights, detecting unusual patterns that may indicate attacks, data exfiltration, or policy violations. Integration with SIEM and security platforms enables coordinated threat response.`,
    iconKey: 'dns',
    category: 'it-security',
    features: [
      'Real-time network device monitoring',
      'Traffic flow analysis (NetFlow, sFlow)',
      'Performance metrics and baselining',
      'Availability and uptime monitoring',
      'Network topology mapping',
      'Anomaly detection and alerting',
      'Security event correlation',
      'Customizable dashboards',
      'Historical reporting and trending',
      'Integration with ITSM and SIEM',
    ],
    specifications: [
      { label: 'Device Support', value: 'SNMP, WMI, SSH, API-based' },
      { label: 'Flow Protocols', value: 'NetFlow, sFlow, IPFIX, J-Flow' },
      { label: 'Monitoring Scale', value: 'Unlimited devices and interfaces' },
      { label: 'Data Retention', value: 'Configurable, long-term storage' },
      { label: 'Alerting', value: 'Email, SMS, webhook, ticketing' },
      { label: 'Deployment', value: 'On-premise, Cloud, Hybrid' },
      { label: 'Integration', value: 'SIEM, ITSM, Ticketing, ChatOps' },
      { label: 'High Availability', value: 'Clustering and failover support' },
    ],
    useCases: [
      {
        title: 'Network Operations Center',
        description: 'Enable 24/7 network monitoring and incident response.',
      },
      {
        title: 'Performance Management',
        description: 'Identify and resolve network bottlenecks.',
      },
      {
        title: 'Security Monitoring',
        description: 'Detect network-based attacks and anomalies.',
      },
      {
        title: 'Capacity Planning',
        description: 'Analyze trends to plan network upgrades.',
      },
    ],
    benefits: [
      'Proactive issue detection and resolution',
      'Improved network availability',
      'Faster troubleshooting',
      'Better capacity planning',
      'Enhanced security visibility',
      'Reduced operational costs',
    ],
    relatedProducts: [
      {
        name: 'SIEM',
        href: '/products/it-security/siem',
        description: 'Security information and event management.',
      },
      {
        name: 'DDoS Mitigation',
        href: '/products/it-security/ddos-mitigation',
        description: 'DDoS attack protection.',
      },
      {
        name: 'Network Security Scanners',
        href: '/products/it-security/network-security-scanners',
        description: 'Vulnerability assessment.',
      },
    ],
  },
  {
    slug: 'penetration-testing-tools',
    name: 'Penetration Testing Tools',
    shortDescription: 'Professional tools for authorized security testing and vulnerability assessment.',
    fullDescription: `Our Penetration Testing Tools provide security professionals with comprehensive capabilities for authorized security testing, vulnerability assessment, and red team operations. These professional-grade tools enable thorough evaluation of security controls and identification of vulnerabilities.

The toolkit includes network scanning and enumeration, vulnerability assessment, exploitation frameworks, post-exploitation tools, and reporting capabilities. Whether conducting internal assessments, external penetration tests, or red team exercises, these tools support the full engagement lifecycle.

Designed for security consultants, red teamers, and internal security teams, our penetration testing tools combine industry-standard open-source solutions with commercial-grade capabilities. Regular updates ensure access to the latest exploits and testing techniques.`,
    iconKey: 'pentest',
    category: 'it-security',
    features: [
      'Network scanning and enumeration',
      'Vulnerability assessment and validation',
      'Exploitation frameworks',
      'Post-exploitation tools',
      'Password auditing and cracking',
      'Web application testing tools',
      'Wireless security testing',
      'Social engineering toolkit',
      'Reporting and documentation',
      'Regular updates and support',
    ],
    specifications: [
      { label: 'Platform Support', value: 'Kali Linux, Parrot OS, Windows' },
      { label: 'Tools Included', value: '100+ security testing tools' },
      { label: 'Exploit Database', value: 'Regularly updated' },
      { label: 'License', value: 'Commercial license included' },
      { label: 'Support', value: 'Technical support and training' },
      { label: 'Updates', value: 'Quarterly tool updates' },
      { label: 'Deployment', value: 'Virtual machine, bare metal, cloud' },
      { label: 'Compliance', value: 'Supports PTES, OWASP, NIST methodologies' },
    ],
    useCases: [
      {
        title: 'Penetration Testing',
        description: 'Conduct comprehensive security assessments.',
      },
      {
        title: 'Red Team Exercises',
        description: 'Simulate advanced adversary attacks.',
      },
      {
        title: 'Vulnerability Validation',
        description: 'Verify and prioritize vulnerabilities.',
      },
      {
        title: 'Security Research',
        description: 'Research new vulnerabilities and exploits.',
      },
    ],
    benefits: [
      'Identify real-world security weaknesses',
      'Test security controls effectiveness',
      'Meet compliance testing requirements',
      'Improve incident response readiness',
      'Validate security investments',
      'Professional-grade capabilities',
    ],
    relatedProducts: [
      {
        name: 'Network Security Scanners',
        href: '/products/it-security/network-security-scanners',
        description: 'Automated vulnerability scanning.',
      },
      {
        name: 'Web Security Scanner',
        href: '/products/it-security/web-security-scanner',
        description: 'Web application testing.',
      },
      {
        name: 'Security Training',
        href: '/services/security-training',
        description: 'Penetration testing training.',
      },
    ],
  },
  {
    slug: 'source-code-review-tools',
    name: 'Source Code Review Tools',
    shortDescription: 'Static application security testing (SAST) tools for code security analysis.',
    fullDescription: `Our Source Code Review Tools provide static application security testing (SAST) capabilities, enabling development teams to identify security vulnerabilities in source code early in the development lifecycle. Finding and fixing security issues during development is far more cost-effective than remediation after deployment.

The tools analyze source code without execution, using pattern matching, data flow analysis, and semantic analysis to identify security vulnerabilities, coding errors, and compliance violations. Support for major programming languages including Java, C#, Python, JavaScript, and more ensures comprehensive coverage across your application portfolio.

Integration with popular IDEs enables developers to identify and fix issues as they code, while CI/CD pipeline integration automates security testing for every build. Detailed findings include code-level remediation guidance, helping developers understand and fix issues correctly.`,
    iconKey: 'code',
    category: 'it-security',
    features: [
      'Static application security testing (SAST)',
      'Support for 30+ programming languages',
      'OWASP Top 10 vulnerability detection',
      'Data flow and taint analysis',
      'IDE integration (VS Code, IntelliJ, Eclipse)',
      'CI/CD pipeline integration',
      'Custom rule development',
      'False positive reduction',
      'Developer training and guidance',
      'Compliance reporting',
    ],
    specifications: [
      { label: 'Language Support', value: 'Java, C#, Python, JavaScript, TypeScript, PHP, Ruby, Go, etc.' },
      { label: 'Analysis Types', value: 'Pattern matching, data flow, semantic, taint' },
      { label: 'Vulnerability Database', value: 'CWE, SANS Top 25, OWASP Top 10' },
      { label: 'IDE Integration', value: 'VS Code, IntelliJ, Eclipse, Visual Studio' },
      { label: 'CI/CD Integration', value: 'Jenkins, GitLab, GitHub Actions, Azure DevOps' },
      { label: 'Deployment', value: 'On-premise, Cloud, Docker' },
      { label: 'Compliance', value: 'PCI DSS, HIPAA, GDPR, SOC 2' },
      { label: 'Reporting', value: 'Developer, executive, compliance reports' },
    ],
    useCases: [
      {
        title: 'Secure Development',
        description: 'Enable developers to write secure code from the start.',
      },
      {
        title: 'DevSecOps',
        description: 'Automate security testing in CI/CD pipelines.',
      },
      {
        title: 'Code Audit',
        description: 'Assess security of legacy and third-party code.',
      },
      {
        title: 'Compliance',
        description: 'Meet regulatory requirements for secure coding.',
      },
    ],
    benefits: [
      'Find vulnerabilities early in development',
      'Reduce remediation costs significantly',
      'Improve developer security awareness',
      'Enable secure agile development',
      'Meet compliance requirements',
      'Reduce application security risks',
    ],
    relatedProducts: [
      {
        name: 'Web Security Scanner',
        href: '/products/it-security/web-security-scanner',
        description: 'Dynamic application security testing.',
      },
      {
        name: 'Software Composition Analysis',
        href: '/products/it-security/sca',
        description: 'Third-party component security.',
      },
      {
        name: 'Security Training',
        href: '/services/security-training',
        description: 'Secure coding training.',
      },
    ],
  },
  {
    slug: 'log-management',
    name: 'Log Management',
    shortDescription: 'Centralized log collection, storage, and analysis for compliance and security monitoring.',
    fullDescription: `Our Log Management solution provides centralized collection, storage, and analysis of log data from across your entire IT infrastructure. In modern environments generating massive volumes of log data, effective log management is essential for security, compliance, and operations.

The solution aggregates logs from servers, applications, network devices, security systems, and cloud services into a unified platform. Advanced parsing and normalization enable consistent analysis across diverse log formats, while powerful search capabilities help investigators quickly find relevant events.

With configurable retention policies supporting years of storage, the solution meets regulatory requirements for log retention. Real-time alerting on critical events enables rapid response to security incidents and operational issues, while comprehensive audit trails support forensic investigations.`,
    iconKey: 'log',
    category: 'it-security',
    features: [
      'Centralized log collection from all sources',
      'Support for 500+ log formats',
      'Real-time log processing and indexing',
      'Powerful search and query capabilities',
      'Configurable retention policies',
      'Real-time alerting and notifications',
      'Log normalization and enrichment',
      'Compliance reporting templates',
      'Role-based access controls',
      'Immutable log storage options',
    ],
    specifications: [
      { label: 'Log Collection', value: 'Syslog, Windows Event, API, file-based' },
      { label: 'Ingestion Rate', value: 'Scalable to TB/day' },
      { label: 'Storage', value: 'Scalable, configurable retention' },
      { label: 'Search Performance', value: 'Sub-second query response' },
      { label: 'Retention', value: 'Days to years, based on policy' },
      { label: 'Compliance', value: 'PCI DSS, HIPAA, GDPR, SOX, FISMA' },
      { label: 'Deployment', value: 'On-premise, Cloud, Hybrid' },
      { label: 'Integration', value: 'SIEM, SOAR, Ticketing, ChatOps' },
    ],
    useCases: [
      {
        title: 'Security Monitoring',
        description: 'Detect and investigate security incidents.',
      },
      {
        title: 'Compliance',
        description: 'Meet regulatory requirements for log retention.',
      },
      {
        title: 'Troubleshooting',
        description: 'Diagnose operational issues quickly.',
      },
      {
        title: 'Forensic Investigation',
        description: 'Support incident response and forensics.',
      },
    ],
    benefits: [
      'Centralized visibility across infrastructure',
      'Faster incident detection and response',
      'Simplified compliance management',
      'Improved troubleshooting efficiency',
      'Comprehensive audit trails',
      'Reduced storage costs',
    ],
    relatedProducts: [
      {
        name: 'SIEM',
        href: '/products/it-security/siem',
        description: 'Security information and event management.',
      },
      {
        name: 'Network Monitoring',
        href: '/products/it-security/network-monitoring',
        description: 'Network traffic and device monitoring.',
      },
      {
        name: 'Compliance Management',
        href: '/services/compliance-management',
        description: 'Compliance consulting and implementation.',
      },
    ],
  },
];
