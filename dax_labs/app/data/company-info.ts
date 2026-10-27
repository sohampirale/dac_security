import rawData from './content/company-info.json';

export interface OfficeAddress {
  type: string;
  addressLines: string[];
}

export interface CompanyInfo {
  companyName: string;
  shortName: string;
  tagline: string;
  email: string;
  phoneNumbers: string[];
  offices: OfficeAddress[];
  copyright: string;
}

export const companyInfo = rawData as CompanyInfo;
