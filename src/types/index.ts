export interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
}

export interface Solution {
  id: string;
  industry: string;
  description: string;
  useCases: string[];
  services: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  servicesUsed: string[];
  outcomes: string[];
  isPlaceholder: boolean;
}

export interface LeadFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  country: string;
  serviceInterest: string[];
  message: string;
  consent: boolean;
}

export interface DemoFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  country: string;
  preferredDate: string;
  preferredTime: string;
  serviceInterest: string[];
  message: string;
  consent: boolean;
}

export interface PartnerFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  country: string;
  website: string;
  partnerType: 'marketing' | 'sales' | 'agency' | 'consultant' | 'other';
  monthlyLeadVolume: string;
  targetMarkets: string[];
  experience: string;
  motivation: string;
  consent: boolean;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface Country {
  code: string;
  name: string;
  flag: string;
}

export const COUNTRIES: Country[] = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
];

export const SERVICE_INTERESTS = [
  'AI Voice Agents',
  'AI Receptionists',
  'WhatsApp Chatbots',
  'Lead Qualification',
  'Appointment Booking',
  'CRM Integrations',
  'Custom Workflow Automation',
];

export const PARTNER_TYPES = [
  { value: 'marketing', label: 'Marketing Agency' },
  { value: 'sales', label: 'Sales Organization' },
  { value: 'agency', label: 'Digital Agency' },
  { value: 'consultant', label: 'Consultant' },
  { value: 'other', label: 'Other' },
];

export const TARGET_MARKETS = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Global',
];