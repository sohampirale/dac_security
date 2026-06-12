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

import rawData from './content/digital-forensic-products.json';

export const digitalForensicProducts = rawData as ForensicProductData[];
