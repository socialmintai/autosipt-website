import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/SEO';

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy | AutoSipt',
  description: 'Privacy Policy and data protection commitments for AutoSipt AI solutions.',
  canonical: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-300">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Privacy Policy</h1>
      <p className="text-xs text-slate-500 mb-8">Last updated: November 2026</p>

      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Overview</h2>
          <p>
            AutoSipt (“we”, “us”, or “our”) provides enterprise-grade AI automation agents, voice assistants, and messaging workflows for businesses worldwide, including the UK, UAE, USA, Canada, and Australia. We are committed to protecting your personal information and your clients’ privacy in compliance with GDPR, CCPA, and applicable global privacy regulations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. Data We Process</h2>
          <p>
            When deploying AI agents for your business, AutoSipt processes customer contact details (name, email, phone number), conversation transcripts, and appointment booking parameters solely for the purpose of executing the requested services and updating your connected CRM systems.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Data Security & Confidentially</h2>
          <p>
            All data in transit is encrypted using TLS 1.3, and all data at rest is protected with AES-256 encryption. We do not sell customer data, nor do we use proprietary business data to train public foundation models without explicit consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. Contact Us</h2>
          <p>
            For privacy inquiries or data subject requests, please contact our privacy office at{' '}
            <a href="mailto:privacy@autosipt.com" className="text-indigo-400 hover:underline">
              privacy@autosipt.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
