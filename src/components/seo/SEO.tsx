import { Metadata } from 'next';
import { generatePageSEO, siteConfig } from '@/lib/config';
import { SEOProps } from '@/types';

export function generateMetadata(props: SEOProps): Metadata {
  const seo = generatePageSEO(props);
  
  return {
    title: seo.title,
    description: seo.description,
    robots: {
      index: !seo.noIndex,
      follow: !seo.noFollow,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_US',
      images: seo.ogImage ? [{ url: seo.ogImage, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : [],
      creator: '@autosipt',
    },
    alternates: {
      canonical: seo.canonical,
    },
  };
}

export function JSONLD(data: Record<string, unknown>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  legalName: siteConfig.company.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.linkedin,
    siteConfig.links.youtube,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contact.phone,
    contactType: 'customer service',
    availableLanguage: ['English'],
    areaServed: ['US', 'GB', 'CA', 'AU', 'AE'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
};

export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AutoSipt',
  operatingSystem: 'All',
  applicationCategory: 'BusinessApplication',
  offers: {
    '@type': 'Offer',
    price: '299.00',
    priceCurrency: 'USD',
  },
  description: siteConfig.supportingStatement,
};

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
  provider: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: service.provider,
    },
    areaServed: ['US', 'GB', 'CA', 'AU'],
    serviceType: 'AI Automation',
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}