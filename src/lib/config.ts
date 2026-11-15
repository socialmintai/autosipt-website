import { SEOProps } from '@/types';

export const siteConfig = {
  name: 'AutoSipt',
  legalName: 'AutoSipt Technologies Inc.',
  tagline: 'AI Employees for Your Business',
  primaryTagline: 'Automate the Work. Grow the Business.',
  supportingStatement:
    'AutoSipt builds AI agents that answer customers, capture leads, follow up automatically, book appointments, and handle repetitive business operations 24/7.',
  url: 'https://autosipt.com',
  ogImage: '/images/og-image.jpg',
  targetMarkets: ['UK', 'UAE', 'USA', 'Canada', 'Australia'],
  targetCustomers: [
    'Dental clinics',
    'Medical clinics',
    'Real estate companies',
    'Coaching businesses',
    'Gyms',
    'Salons',
    'Home-service businesses',
    'Small and medium-sized businesses',
  ],
  links: {
    twitter: 'https://twitter.com/autosipt',
    linkedin: 'https://linkedin.com/company/autosipt',
    youtube: 'https://youtube.com/@autosipt',
  },
  contact: {
    email: 'contact@autosipt.com',
    phone: '+1 (800) 829-SIPT',
    address: 'International Tech Hub • Operations in UK, UAE, USA, CA & AU',
  },
  company: {
    legalName: 'AutoSipt Technologies Inc.',
    founded: '2024',
    status: 'Venture Backed B2B AI SaaS',
  },
};

export const defaultSEO: SEOProps = {
  title: 'AutoSipt | Automate the Work. Grow the Business.',
  description:
    'AutoSipt builds AI agents that answer customers, capture leads, follow up automatically, book appointments, and handle repetitive business operations 24/7.',
  canonical: siteConfig.url,
  ogImage: siteConfig.ogImage,
};

export function generatePageSEO(props: Partial<SEOProps>): SEOProps {
  return {
    ...defaultSEO,
    ...props,
    title: props.title ? `${props.title} | ${siteConfig.name}` : defaultSEO.title,
    canonical: props.canonical ? `${siteConfig.url}${props.canonical}` : defaultSEO.canonical,
    ogImage: props.ogImage || defaultSEO.ogImage,
  };
}

export const navigation = {
  main: [
    { label: 'Solutions', href: '/#solutions' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Industries', href: '/#industries' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'FAQ', href: '/#faq' },
  ],
  cta: { label: 'Book a Free Demo →', href: '/#book-demo' },
  footer: {
    solutions: [
      { label: 'AI Voice Agent', href: '/#solutions' },
      { label: 'WhatsApp AI Agent', href: '/#solutions' },
      { label: 'AI Lead Follow-Up', href: '/#solutions' },
      { label: 'AI Appointment Agent', href: '/#solutions' },
      { label: 'AI Customer Support', href: '/#solutions' },
    ],
    industries: [
      { label: 'Dental Clinics', href: '/#industries' },
      { label: 'Real Estate', href: '/#industries' },
      { label: 'Medical Clinics', href: '/#industries' },
      { label: 'Coaching Businesses', href: '/#industries' },
      { label: 'Gyms & Salons', href: '/#industries' },
      { label: 'Home Services', href: '/#industries' },
    ],
    company: [
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'Integrations', href: '/#integrations' },
      { label: 'ROI Calculator', href: '/#roi-calculator' },
      { label: 'Why AutoSipt', href: '/#why-autosipt' },
      { label: 'Case Studies', href: '/#case-studies' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'FAQ', href: '/#faq' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
    social: [
      { label: 'LinkedIn', href: 'https://linkedin.com/company/autosipt' },
      { label: 'X (Twitter)', href: 'https://twitter.com/autosipt' },
      { label: 'YouTube', href: 'https://youtube.com/@autosipt' },
    ],
  },
};

export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'STARTER',
    price: '$299',
    period: '/month',
    subtitle: 'For businesses starting with AI automation.',
    highlight: false,
    badge: null,
    features: [
      '1 AI Agent',
      'Lead capture',
      'FAQ automation',
      'Basic follow-up',
      'Calendar integration',
      'Basic reporting',
    ],
    ctaText: 'Book a Demo →',
    ctaHref: '/#book-demo',
  },
  {
    id: 'growth',
    name: 'GROWTH',
    price: '$699',
    period: '/month',
    subtitle: 'For fast-growing companies demanding full automation.',
    highlight: true,
    badge: 'MOST POPULAR',
    features: [
      'AI Voice Agent',
      'WhatsApp AI Agent',
      'Lead qualification',
      'Automated follow-ups',
      'Appointment booking',
      'CRM integration',
      'Advanced workflows',
      'Priority support',
    ],
    ctaText: 'Book a Growth Demo →',
    ctaHref: '/#book-demo',
  },
  {
    id: 'custom',
    name: 'CUSTOM',
    price: 'Custom Pricing',
    period: '',
    subtitle: 'For businesses requiring advanced automation & multi-agent clusters.',
    highlight: false,
    badge: null,
    features: [
      'Multiple AI agents',
      'Custom workflows',
      'Advanced integrations',
      'CRM automation',
      'Custom AI knowledge base',
      'Dedicated support',
    ],
    ctaText: 'Talk to an Expert →',
    ctaHref: '/#book-demo',
  },
];

export const INTEGRATIONS = [
  { name: 'WhatsApp', icon: 'whatsapp', category: 'Messaging' },
  { name: 'Google Calendar', icon: 'gcal', category: 'Scheduling' },
  { name: 'Gmail', icon: 'gmail', category: 'Email' },
  { name: 'HubSpot', icon: 'hubspot', category: 'CRM' },
  { name: 'Salesforce', icon: 'salesforce', category: 'CRM' },
  { name: 'GoHighLevel', icon: 'ghl', category: 'CRM / Marketing' },
  { name: 'Calendly', icon: 'calendly', category: 'Scheduling' },
  { name: 'Twilio', icon: 'twilio', category: 'Telephony & SMS' },
  { name: 'n8n', icon: 'n8n', category: 'Workflows' },
  { name: 'Slack', icon: 'slack', category: 'Internal Alerts' },
  { name: 'Zapier', icon: 'zapier', category: 'Automation' },
];

export const FAQS = [
  {
    question: 'What is an AI agent?',
    answer:
      'An AI agent is an autonomous digital worker programmed to understand context, reason through customer inquiries, take real-world actions, and execute end-to-end business workflows. Unlike static chatbots that only display rigid pre-written answers, AutoSipt AI agents can qualify leads dynamically, schedule appointments into your calendar, query your CRM, and send contextual follow-ups 24/7.',
  },
  {
    question: 'Can AutoSipt answer phone calls?',
    answer:
      'Yes. Our AI Voice Agents answer inbound phone calls in natural, human-sounding speech with ultra-low latency (<600ms). They can handle customer questions, verify details, check real-time calendar availability, book appointments, and transfer high-priority or urgent calls directly to your human staff when appropriate.',
  },
  {
    question: 'Can AutoSipt work with WhatsApp?',
    answer:
      'Yes. AutoSipt integrates with the official WhatsApp Business API to hold two-way conversations in real time. It answers customer questions instantly, captures lead details, sends rich booking links, shares media/documents, and conducts proactive follow-up sequences without manual intervention.',
  },
  {
    question: 'Can the AI book appointments?',
    answer:
      'Yes. AutoSipt connects directly with Google Calendar, Calendly, GoHighLevel, Acuity, and custom CRM calendars. It checks real-time slot availability, resolves time zone differences, locks in the appointment during the conversation, sends instant calendar invites, and triggers SMS/WhatsApp reminder sequences to prevent no-shows.',
  },
  {
    question: 'Can it integrate with my CRM?',
    answer:
      'Yes. AutoSipt integrates with HubSpot, Salesforce, GoHighLevel, Close, Zoho, Pipedrive, and custom systems via secure APIs and webhooks. Every lead captured, note recorded, call summary created, and appointment booked is synchronized into your CRM automatically in real time.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Most deployments go live in 5 to 14 business days. We handle the entire process: discovery, training the AI on your specific business knowledge and guidelines, integrating your CRM and calendars, rigorous QA testing, and team onboarding.',
  },
  {
    question: 'Do I need technical knowledge?',
    answer:
      'None at all. AutoSipt is a fully managed AI workforce solution. Our engineering team handles all setup, prompt engineering, API integrations, and maintenance. You receive an intuitive dashboard to view calls, transcripts, analytics, and appointments.',
  },
  {
    question: 'Can the AI be trained on my business information?',
    answer:
      'Absolutely. We train your custom AI agents on your service catalogs, pricing sheets, clinic policies, FAQs, booking rules, objection handling scripts, and brand guidelines. The AI answers strictly according to your verified source data and never hallucinates.',
  },
  {
    question: 'Can I customize the AI agent?',
    answer:
      'Yes. You can customize the agent’s name, tone of voice, personality (e.g. warm, clinical, executive, direct), language, accent, business operating hours, qualification criteria, and specific escalation protocols to humans.',
  },
  {
    question: 'How is pricing calculated?',
    answer:
      'We offer predictable flat monthly tiers starting at $299/mo for Starter and $699/mo for Growth, which include agent access, workflow integrations, and support. Usage (telephony minutes, WhatsApp message fees, and high-volume LLM tokens) is billed transparently at wholesale cost without surprise markups. Pricing may vary based on usage, integrations, call volume, and workflow complexity.',
  },
  {
    question: 'Is there a contract?',
    answer:
      'No long-term lock-in. Our standard plans operate on a flexible month-to-month basis with no long-term commitment required. You can upgrade, downgrade, or cancel anytime.',
  },
];
