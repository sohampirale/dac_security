import React from 'react';

export interface ForensicProductData {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  iconKey: string;
  category: 'digital-forensic';
  features: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
  benefits: string[];
  relatedProducts: { name: string; href: string; description: string }[];
}

export const digitalForensicProducts: ForensicProductData[] = [
  {
    slug: 'forensic-workstation',
    name: 'DAK Forensic Workstation',
    shortDescription: 'Dedicated high-performance workstation for digital forensic investigations with specialized hardware and software.',
    fullDescription: `Our DAK Forensic Workstation is a purpose-built high-performance computing system designed specifically for digital forensic investigations. Engineered to handle the most demanding forensic analysis tasks, this workstation provides the processing power, storage capacity, and specialized interfaces needed for comprehensive digital evidence examination.

The workstation features multi-core processors with high clock speeds, substantial RAM capacity (up to 128GB or more), and multiple GPU support for accelerated password cracking and hash computations. Multiple drive bays support simultaneous analysis of multiple evidence drives while maintaining write-protection through integrated hardware write-blockers.

Pre-installed with leading forensic software suites and configured for optimal performance, the DAK Forensic Workstation enables investigators to process large datasets efficiently, recover deleted files, analyze file systems, and generate comprehensive forensic reports. The system is designed for law enforcement agencies, corporate investigation teams, and forensic laboratories requiring reliable, high-performance forensic analysis capabilities.`,
    iconKey: 'workstation',
    category: 'digital-forensic',
    features: [
      'High-core count CPU for parallel processing',
      'Multiple high-end GPU support for accelerated cracking',
      'Large RAM capacity (128GB+ expandable)',
      'Multiple drive bays for evidence analysis',
      'Integrated hardware write-blockers',
      'Forensic software pre-installed and licensed',
      'RAID configuration for data redundancy',
      'High-speed SSD storage for system and temp files',
      'Multiple USB 3.0/3.1 and Thunderbolt ports',
      'Network isolation capabilities',
    ],
    specifications: [
      { label: 'Processor', value: 'Intel Core i9 or AMD Ryzen 9 (16+ cores)' },
      { label: 'RAM', value: '128GB DDR4 (expandable to 256GB)' },
      { label: 'GPU', value: 'NVIDIA RTX 3080/3090 or equivalent (dual support)' },
      { label: 'Storage', value: '2TB NVMe SSD + 8TB HDD (multiple bays)' },
      { label: 'Write-Blockers', value: 'Integrated hardware write-blockers (SATA/USB)' },
      { label: 'Ports', value: 'USB 3.0/3.1, Thunderbolt 3, eSATA, FireWire' },
      { label: 'Network', value: 'Dual Gigabit Ethernet, WiFi 6' },
      { label: 'OS', value: 'Windows 10/11 Pro or forensic Linux distribution' },
    ],
    applications: [
      'Law enforcement digital forensics labs',
      'Corporate incident response teams',
      'Government investigation agencies',
      'Forensic consulting firms',
      'Military intelligence operations',
      'Legal eDiscovery processing',
    ],
    benefits: [
      'Accelerated forensic analysis and processing',
      'Handle multiple evidence drives simultaneously',
      'Reduce investigation turnaround time',
      'Maintain evidence integrity with write-protection',
      'Support wide range of forensic tools',
      'Scalable for growing workload demands',
    ],
    relatedProducts: [
      {
        name: 'Password Cracking Machine',
        href: '/products/digital-forensic/password-cracking-machine',
        description: 'Specialized hardware for password recovery operations.',
      },
      {
        name: 'RF Shielding Bag',
        href: '/products/digital-forensic/rf-shielding-bag',
        description: 'Evidence preservation with RF shielding.',
      },
      {
        name: 'Mobile Forensic Tools',
        href: '/products/forensic-software/mobile-forensic-tools',
        description: 'Mobile device data extraction and analysis.',
      },
    ],
  },
  {
    slug: 'password-cracking-machine',
    name: 'DAK Password Cracking Machine',
    shortDescription: 'Specialized hardware optimized for password recovery and cracking operations using GPU acceleration.',
    fullDescription: `Our DAK Password Cracking Machine is a purpose-built high-performance computing system specifically optimized for password recovery and cryptographic hash cracking operations. Leveraging the parallel processing power of multiple high-end GPUs, this system can process billions of password combinations per second, dramatically reducing the time required for password recovery operations.

Designed for forensic laboratories, law enforcement agencies, and security professionals, the Password Cracking Machine supports all major password cracking tools including Hashcat, John the Ripper, and commercial forensic suites. The system is pre-configured with optimized drivers, dictionaries, and rule sets for maximum efficiency.

The machine supports a wide range of hash types including Windows passwords (NTLM, LM), encrypted archives (ZIP, RAR), PDF documents, email passwords, database credentials, and custom hash formats. Advanced features include distributed cracking across multiple machines, cloud integration for additional processing power, and comprehensive reporting capabilities for forensic documentation.`,
    iconKey: 'cracking',
    category: 'digital-forensic',
    features: [
      'Multiple high-end GPUs (4-8x NVIDIA RTX/A100)',
      'Optimized cooling system for sustained operation',
      'Pre-configured cracking software (Hashcat, John the Ripper)',
      'Support for 300+ hash types',
      'Large password dictionary libraries included',
      'Rule-based and hybrid attack modes',
      'Distributed cracking across multiple systems',
      'Cloud integration for additional processing',
      'Remote management and monitoring',
      'Forensic reporting and audit trails',
    ],
    specifications: [
      { label: 'GPU Configuration', value: '4-8x NVIDIA RTX 3090/4090 or A100' },
      { label: 'Hash Rate', value: 'Up to 2+ trillion hashes/second (NTLM)' },
      { label: 'Processor', value: 'AMD Threadripper or Intel Xeon (32+ cores)' },
      { label: 'RAM', value: '256GB DDR4 ECC' },
      { label: 'Storage', value: '4TB NVMe SSD for dictionaries and results' },
      { label: 'Cooling', value: 'Liquid cooling or high-performance air cooling' },
      { label: 'Power Supply', value: '2000W+ redundant power supplies' },
      { label: 'Management', value: 'Web interface, API, SSH access' },
    ],
    applications: [
      'Law enforcement criminal investigations',
      'Corporate incident response',
      'Forensic laboratory operations',
      'Security auditing and penetration testing',
      'eDiscovery password recovery',
      'Intelligence agency operations',
    ],
    benefits: [
      'Dramatically faster password recovery',
      'Support for latest encryption algorithms',
      'Reduce investigation bottlenecks',
      'Cost-effective vs. cloud-based cracking',
      'Maintain chain of custody on-premise',
      'Scalable with additional GPU units',
    ],
    relatedProducts: [
      {
        name: 'Forensic Workstation',
        href: '/products/digital-forensic/forensic-workstation',
        description: 'High-performance forensic analysis workstation.',
      },
      {
        name: 'Computer Forensic Tools',
        href: '/products/forensic-software/computer-forensic-tools',
        description: 'Desktop and laptop forensic analysis.',
      },
      {
        name: 'Data Recovery Tools',
        href: '/products/forensic-software/data-recovery-tools',
        description: 'Deleted data recovery solutions.',
      },
    ],
  },
  {
    slug: 'rf-shielding-bag',
    name: 'DAK RF Shielding Bag',
    shortDescription: 'Radio-frequency shielding bag for evidence preservation to prevent remote wiping and data tampering.',
    fullDescription: `Our DAK RF Shielding Bag is a critical tool for digital evidence preservation, designed to block all radio frequency signals that could enable remote wiping, data alteration, or unauthorized communication with seized devices. In an era where mobile devices can be remotely locked or erased, proper RF shielding is essential for maintaining evidence integrity.

Constructed with multiple layers of high-performance RF shielding material, these bags create a complete Faraday cage around devices, blocking cellular signals (2G/3G/4G/5G), WiFi, Bluetooth, GPS, and RFID frequencies. The bags are available in multiple sizes to accommodate smartphones, tablets, laptops, and other electronic devices.

Each bag features durable construction with anti-static interior lining to protect devices from electrostatic discharge, secure closure mechanisms to maintain shielding integrity, and clear labeling areas for evidence tracking. Reusable and tested for shielding effectiveness, DAK RF Shielding Bags are essential for law enforcement, corporate security teams, and forensic investigators handling mobile devices and wireless-enabled equipment.`,
    iconKey: 'shielding',
    category: 'digital-forensic',
    features: [
      'Complete RF signal blocking (Faraday cage technology)',
      'Blocks cellular (2G/3G/4G/5G), WiFi, Bluetooth, GPS, RFID',
      'Multiple sizes for phones, tablets, laptops',
      'Durable, puncture-resistant construction',
      'Anti-static interior lining',
      'Secure closure with RF-shielded seal',
      'Evidence tracking label area',
      'Reusable design with long service life',
      'Tested shielding effectiveness (90dB+ attenuation)',
      'Lightweight and portable',
    ],
    specifications: [
      { label: 'Sizes Available', value: 'Small (phone), Medium (tablet), Large (laptop)' },
      { label: 'Shielding Material', value: 'Multi-layer nickel-copper fabric + conductive polymer' },
      { label: 'Attenuation', value: '90dB+ (10 GHz to 20 kHz frequency range)' },
      { label: 'Closure', value: 'RF-shielded Velcro or roll-top closure' },
      { label: 'Interior', value: 'Anti-static, non-abrasive lining' },
      { label: 'Exterior', value: 'Durable nylon or polyester outer shell' },
      { label: 'Temperature Range', value: '-40°C to +85°C operating range' },
      { label: 'Certification', value: 'Tested to IEEE 299 shielding standards' },
    ],
    applications: [
      'Mobile device seizure and transport',
      'Crime scene evidence collection',
      'Corporate device confiscation',
      'Border security operations',
      'Military device capture',
      'Forensic laboratory evidence storage',
    ],
    benefits: [
      'Prevent remote wiping of evidence',
      'Maintain device data integrity',
      'Block unauthorized communications',
      'Protect against location tracking',
      'Reusable and cost-effective',
      'Essential for proper chain of custody',
    ],
    relatedProducts: [
      {
        name: 'Forensic Workstation',
        href: '/products/digital-forensic/forensic-workstation',
        description: 'High-performance forensic analysis workstation.',
      },
      {
        name: 'Mobile Forensic Tools',
        href: '/products/forensic-software/mobile-forensic-tools',
        description: 'Mobile device data extraction and analysis.',
      },
      {
        name: 'JTAG & Chip-off Forensics',
        href: '/products/forensic-software/jtag-chip-off-forensics',
        description: 'Hardware-level data extraction.',
      },
    ],
  },
];
