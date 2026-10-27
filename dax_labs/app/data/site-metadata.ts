import rawData from './content/site-metadata.json';

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface CertItem {
  title: string;
  description: string;
}

export interface SiteMetadata {
  statistics: StatItem[];
  expertise: string[];
  sectors: string[];
  certifications: CertItem[];
}

export const siteMetadata = rawData as SiteMetadata;
