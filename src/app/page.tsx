import { Metadata } from 'next';
import {
  generateMetadata,
  JSONLD,
  faqSchema,
  organizationSchema,
  softwareApplicationSchema,
} from '@/components/seo/SEO';
import { siteConfig, FAQS } from '@/lib/config';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustValueBar } from '@/components/sections/TrustValueBar';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { OneWorkforceSection } from '@/components/sections/OneWorkforceSection';
import { ConversationDemoSection } from '@/components/sections/ConversationDemoSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { IntegrationsSection } from '@/components/sections/IntegrationsSection';
import { RoiCalculatorSection } from '@/components/sections/RoiCalculatorSection';
import { WhyAutoSiptSection } from '@/components/sections/WhyAutoSiptSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { FinalCtaSection } from '@/components/sections/FinalCtaSection';
import { LeadCaptureSection } from '@/components/sections/LeadCaptureSection';
import { FaqSection } from '@/components/sections/FaqSection';

export const metadata: Metadata = generateMetadata({
  title: 'AutoSipt | Automate the Work. Grow the Business.',
  description:
    'AutoSipt builds AI agents that answer customers, capture leads, follow up automatically, book appointments, and handle repetitive business operations 24/7. Serving UK, UAE, USA, Canada & Australia.',
  canonical: '/',
});

export default function HomePage() {
  return (
    <>
      {/* Search Engine Structured Data Schemas */}
      <JSONLD data={faqSchema(FAQS)} />
      <JSONLD data={softwareApplicationSchema} />
      <JSONLD data={organizationSchema} />

      {/* 1. Hero Section + Interactive Product Visual */}
      <HeroSection />

      {/* 2. Trust / Value Bar */}
      <TrustValueBar />

      {/* 3. Problem Section */}
      <ProblemSection />

      {/* 4. AI Solutions */}
      <SolutionsSection />

      {/* 5. One AI Workforce (Pipeline Workflow) */}
      <OneWorkforceSection />

      {/* 6. Real Conversation Demo (Interactive Simulator) */}
      <ConversationDemoSection />

      {/* 7. How It Works (4-Step Timeline) */}
      <HowItWorksSection />

      {/* 8. Industries */}
      <IndustriesSection />

      {/* 9. Integrations */}
      <IntegrationsSection />

      {/* 10. Interactive ROI Estimator */}
      <RoiCalculatorSection />

      {/* 11. Why AutoSipt (Comparison Matrix) */}
      <WhyAutoSiptSection />

      {/* 12. Pricing */}
      <PricingSection />

      {/* 13. Case Studies */}
      <CaseStudiesSection />

      {/* 14. Final Closing Statement CTA */}
      <FinalCtaSection />

      {/* 15. Lead Capture & Demo Reservation Form */}
      <LeadCaptureSection />

      {/* 16. Comprehensive FAQ */}
      <FaqSection />
    </>
  );
}
