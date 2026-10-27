import rawData from './content/services-content.json';

export interface FrameworkPillar {
  key: string;
  name: string;
  heading: string;
  description: string;
  items: string[];
}

export interface SubService {
  title: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  subServices: SubService[];
  benefits: string[];
}

export interface ServicesContent {
  title: string;
  openingLine: string;
  framework: FrameworkPillar[];
  categories: ServiceCategory[];
}

export const servicesContent = rawData as ServicesContent;
