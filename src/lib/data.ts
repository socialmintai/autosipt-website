import { Service, Solution, CaseStudy, Country } from '@/types';

export const SERVICES: Service[] = [
  {
    id: 'voice-agents',
    name: 'AI Voice Agents',
    shortDescription: 'Intelligent voice assistants that handle inbound and outbound calls with natural conversation flow.',
    description: 'Deploy AI voice agents that sound human, understand context, and handle complex conversations. Our agents manage customer inquiries, qualify leads, schedule appointments, and provide 24/7 support without human operators on duty.',
    icon: 'phone',
    features: [
      'Natural language understanding with context awareness',
      'Multi-language support (EN, ES, FR, DE, +20 more)',
      'Real-time transcription and call recording',
      'Seamless handoff to human agents when needed',
      'Integration with Twilio, Vonage, Plivo, and custom SIP',
      'Custom voice cloning and personality design',
      'Compliance recording (GDPR, HIPAA, PCI DSS ready)',
      'Analytics dashboard with conversation insights',
    ],
    benefits: [
      'Reduce call center costs by up to 70%',
      'Provide 24/7 coverage without night shifts',
      'Handle unlimited concurrent calls',
      'Consistent quality across every interaction',
      'Scale instantly during peak periods',
    ],
  },
  {
    id: 'receptionists',
    name: 'AI Receptionists',
    shortDescription: 'Virtual front desk that greets visitors, answers FAQs, and routes calls professionally.',
    description: 'Replace or augment your front desk with an AI receptionist that never takes a break. Handles visitor check-ins, answers common questions, transfers calls, manages calendars, and maintains a professional first impression at a fraction of the cost.',
    icon: 'user-check',
    features: [
      'Visitor management with badge printing integration',
      'Intelligent call routing based on business rules',
      'Calendar integration (Google, Outlook, Calendly)',
      'FAQ knowledge base with automatic updates',
      'Multi-location support with centralized management',
      'Custom greetings and brand voice configuration',
      'Emergency escalation protocols',
      'Visitor analytics and peak time insights',
    ],
    benefits: [
      'Eliminate missed calls and lost opportunities',
      'Reduce front desk staffing costs by 60-80%',
      'Consistent professional experience 24/7',
      'Instant scalability for multiple locations',
      'Detailed visitor and call analytics',
    ],
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Chatbots',
    shortDescription: 'Automate customer conversations on WhatsApp Business with AI-powered chatbots.',
    description: 'Engage customers where they already are. Our WhatsApp chatbots handle sales inquiries, support tickets, order tracking, appointment booking, and marketing campaigns with rich media support including images, documents, location sharing, and interactive buttons.',
    icon: 'message-square',
    features: [
      'WhatsApp Business API integration (Meta verified)',
      'Rich media: images, videos, documents, locations',
      'Interactive buttons, lists, and quick replies',
      'Session management and 24-hour window handling',
      'Template message management for outbound campaigns',
      'End-to-end encryption compliance',
      'Multi-agent handoff with conversation history',
      'Broadcast and drip campaign automation',
    ],
    benefits: [
      'Reach 2B+ WhatsApp users globally',
      'Higher open rates than email (98%+)',
      'Automate 80%+ of routine conversations',
      'Rich media for better engagement',
      'Seamless CRM and e-commerce integration',
    ],
  },
  {
    id: 'lead-qualification',
    name: 'Lead Qualification',
    shortDescription: 'AI-powered lead scoring and qualification that identifies high-intent prospects automatically.',
    description: 'Stop wasting sales time on unqualified leads. Our AI analyzes conversation data, behavioral signals, and firmographic data to score and qualify leads in real-time. Routes hot leads to sales instantly while nurturing cooler prospects automatically.',
    icon: 'target',
    features: [
      'Real-time lead scoring with customizable criteria',
      'BANT/MEDDIC/CHAMP methodology support',
      'Behavioral tracking across web, email, chat, phone',
      'Firmographic enrichment (company size, tech stack, funding)',
      'Automated lead routing to appropriate sales reps',
      'Integration with Salesforce, HubSpot, Pipedrive, Close',
      'Nurture sequences for unqualified leads',
      'Conversion funnel analytics and attribution',
    ],
    benefits: [
      'Increase sales team efficiency by 40-60%',
      'Reduce cost per qualified lead',
      'Faster speed-to-lead (minutes vs hours)',
      'Data-driven qualification criteria',
      'Continuous learning from outcomes',
    ],
  },
  {
    id: 'appointment-booking',
    name: 'Appointment Booking',
    shortDescription: 'Automated scheduling across voice, chat, and web with calendar sync and reminders.',
    description: 'Eliminate back-and-forth scheduling emails. Our AI books appointments directly into your calendar via voice calls, chat conversations, or web widgets. Handles rescheduling, cancellations, reminders, and timezone management automatically.',
    icon: 'calendar',
    features: [
      'Voice-based booking via phone calls',
      'Chat-based booking via web, WhatsApp, SMS',
      'Multi-calendar sync (Google, Outlook, Calendly, Acuity)',
      'Timezone detection and conversion',
      'Automated reminders (SMS, email, WhatsApp, voice)',
      'Buffer times, recurring appointments, group booking',
      'Custom booking forms and qualifying questions',
      'No-show reduction with confirmation workflows',
    ],
    benefits: [
      'Eliminate scheduling admin work',
      'Reduce no-shows by 30-50%',
      'Book appointments 24/7 without staff',
      'Timezone-aware for global teams',
      'Integrate with existing calendar tools',
    ],
  },
  {
    id: 'crm-integrations',
    name: 'CRM Integrations',
    shortDescription: 'Deep, bi-directional CRM sync that keeps your customer data consistent across all touchpoints.',
    description: 'Connect your AI automation directly to your CRM for seamless data flow. Every conversation, lead score, appointment, and interaction syncs bi-directionally in real-time. Supports custom fields, workflows, and maintains data integrity across your stack.',
    icon: 'database',
    features: [
      'Bi-directional real-time sync',
      'Support for Salesforce, HubSpot, Pipedrive, Close, Zoho, Attio',
      'Custom field mapping and transformation',
      'Workflow triggers based on AI conversation events',
      'Duplicate detection and merge prevention',
      'Audit logs and change history',
      'Sandbox/testing environments',
      'Custom API/webhook support for other CRMs',
    ],
    benefits: [
      'Single source of truth for customer data',
      'Eliminate manual data entry',
      'Trigger workflows from AI conversations',
      'Maintain compliance and audit trails',
      'Reduce integration maintenance burden',
    ],
  },
  {
    id: 'workflow-automation',
    name: 'Custom Workflow Automation',
    shortDescription: 'End-to-end business process automation connecting your tools, data, and AI agents.',
    description: 'Go beyond point solutions. We design and deploy custom automation workflows that connect your entire tech stack. From lead capture to contract signing, onboarding to renewal - automate multi-step processes with AI decision-making at every stage.',
    icon: 'workflow',
    features: [
      'Visual workflow builder with AI nodes',
      '100+ pre-built connectors (Zapier, Make, n8n compatible)',
      'Conditional logic and AI decision nodes',
      'Human-in-the-loop approval steps',
      'Error handling, retries, and monitoring',
      'Version control and rollback',
      'Custom code steps (TypeScript/Python)',
      'SSO, RBAC, and enterprise governance',
    ],
    benefits: [
      'Automate entire business processes, not just tasks',
      'Reduce operational overhead by 50%+',
      'Eliminate human error in repetitive workflows',
      'Rapid deployment with visual builder',
      'Full observability and debugging',
    ],
  },
];

export const SOLUTIONS: Solution[] = [
  {
    id: 'real-estate',
    industry: 'Real Estate',
    description: 'Automate lead capture, qualification, property viewing scheduling, and follow-up for agencies and property managers.',
    useCases: [
      '24/7 property inquiry response via voice and chat',
      'Automated viewing scheduling with calendar sync',
      'Lead qualification by budget, timeline, location',
      'Post-viewing follow-up and nurture sequences',
      'Tenant screening and maintenance request automation',
    ],
    services: ['voice-agents', 'receptionists', 'appointment-booking', 'lead-qualification', 'crm-integrations'],
  },
  {
    id: 'healthcare',
    industry: 'Healthcare & Clinics',
    description: 'Patient appointment booking, reminder calls, prescription refill requests, and after-hours support.',
    useCases: [
      'Patient scheduling via voice, web, and WhatsApp',
      'Automated appointment reminders (reduce no-shows)',
      'Prescription refill request handling',
      'After-hours triage and escalation',
      'Insurance verification and pre-authorization',
    ],
    services: ['voice-agents', 'receptionists', 'appointment-booking', 'whatsapp', 'crm-integrations'],
  },
  {
    id: 'professional-services',
    industry: 'Professional Services (Legal, Accounting, Consulting)',
    description: 'Client intake, document collection, consultation scheduling, and matter status updates.',
    useCases: [
      'Automated client intake and conflict checks',
      'Consultation booking with prep questionnaires',
      'Document collection and verification workflows',
      'Matter status updates via client portal/chat',
      'Time-sensitive deadline tracking and alerts',
    ],
    services: ['voice-agents', 'receptionists', 'appointment-booking', 'lead-qualification', 'workflow-automation'],
  },
  {
    id: 'ecommerce',
    industry: 'E-commerce & Retail',
    description: 'Order support, returns processing, abandoned cart recovery, and post-purchase engagement.',
    useCases: [
      'Order status and tracking via WhatsApp/chat',
      'Automated returns/exchange initiation',
      'Abandoned cart recovery conversations',
      'Post-purchase review and referral requests',
      'Subscription management and pause/cancel flows',
    ],
    services: ['whatsapp', 'voice-agents', 'lead-qualification', 'crm-integrations', 'workflow-automation'],
  },
  {
    id: 'financial-services',
    industry: 'Financial Services & Insurance',
    description: 'Lead qualification, application assistance, document collection, and compliance-ready communications.',
    useCases: [
      'Pre-qualification for loans and insurance products',
      'Document collection and verification workflows',
      'Application status updates via preferred channel',
      'Compliance recording and audit trails',
      'Renewal reminders and cross-sell campaigns',
    ],
    services: ['voice-agents', 'lead-qualification', 'appointment-booking', 'crm-integrations', 'workflow-automation'],
  },
  {
    id: 'home-services',
    industry: 'Home Services & Trades',
    description: 'Emergency dispatch, quote generation, scheduling, and field team coordination.',
    useCases: [
      '24/7 emergency call handling and dispatch',
      'Automated quote generation from photos/descriptions',
      'Job scheduling with technician route optimization',
      'Customer updates and ETA notifications',
      'Post-job review and referral requests',
    ],
    services: ['voice-agents', 'receptionists', 'appointment-booking', 'whatsapp', 'workflow-automation'],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'placeholder-1',
    title: 'Real Estate Agency - Lead Response Automation',
    industry: 'Real Estate',
    challenge: 'Agency receiving 200+ inquiries/week with slow response times leading to lost listings.',
    solution: 'Deployed AI voice agent and WhatsApp chatbot for instant 24/7 response, automated viewing scheduling, and CRM integration.',
    servicesUsed: ['voice-agents', 'whatsapp', 'appointment-booking', 'crm-integrations'],
    outcomes: ['Response time reduced from 4 hours to <2 minutes', 'Viewing booking rate increased', 'Agent time saved per week'],
    isPlaceholder: true,
  },
  {
    id: 'placeholder-2',
    title: 'Multi-Location Dental Practice - Patient Communication',
    industry: 'Healthcare',
    challenge: 'High no-show rates and phone line congestion across 5 locations.',
    solution: 'Implemented AI receptionists for each location with centralized calendar management and automated reminders.',
    servicesUsed: ['receptionists', 'appointment-booking', 'voice-agents'],
    outcomes: ['No-show rate reduction', 'Phone answer rate improvement', 'Staff hours saved per month'],
    isPlaceholder: true,
  },
  {
    id: 'placeholder-3',
    title: 'SaaS Company - Lead Qualification at Scale',
    industry: 'Technology',
    challenge: 'Sales team overwhelmed with inbound leads; only 15% were qualified.',
    solution: 'Deployed AI lead qualification across chat, email, and voice with custom scoring criteria and Salesforce integration.',
    servicesUsed: ['lead-qualification', 'crm-integrations', 'voice-agents'],
    outcomes: ['Qualified lead rate improvement', 'Sales team efficiency gain', 'Speed-to-lead reduction'],
    isPlaceholder: true,
  },
];

export const COUNTRIES: Country[] = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
];

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find(s => s.id === id);
}

export function getSolutionById(id: string): Solution | undefined {
  return SOLUTIONS.find(s => s.id === id);
}

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return CASE_STUDIES.find(c => c.id === id);
}