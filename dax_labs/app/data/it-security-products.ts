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

import rawData from './content/it-security-products.json';

export const itSecurityProducts = rawData as ProductData[];
