import rawData from './content/home-content.json';

export interface Director {
  name: string;
  designation: string;
  statement: string;
  image: string;
  imagePosition?: string;
  reverse?: boolean;
  active?: boolean;
}

export interface HomeContent {
  hero: {
    badge: string;
    headingLine1: string;
    headingAccent: string;
    headingLine2: string;
    subtitle: string;
    primaryCta: {
      text: string;
      href: string;
    };
    secondaryCta: {
      text: string;
      href: string;
    };
  };
  directors: Director[];
}

export const homeContent = rawData as HomeContent;
