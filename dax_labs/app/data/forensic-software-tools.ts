export interface ForensicSoftwareData {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specifications: { label: string; value: string }[];
  useCases: { title: string; description: string }[];
  benefits: string[];
}

import rawData from './content/forensic-software-tools.json';

export const forensicSoftwareTools = rawData as ForensicSoftwareData[];
