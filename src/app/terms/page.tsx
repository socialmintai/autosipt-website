import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/SEO';

export const metadata: Metadata = generateMetadata({
  title: 'Terms of Service | AutoSipt',
  description: 'Terms of Service and Master Service Agreement for AutoSipt AI automation.',
  canonical: '/terms',
});

export default function TermsPage() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-300">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Terms of Service</h1>
      <p className="text-xs text-slate-500 mb-8">Last updated: November 2026</p>

      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Agreement to Terms</h2>
          <p>
            By accessing or subscribing to AutoSipt’s AI automation platform and agent services, you agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. Service Description</h2>
          <p>
            AutoSipt delivers autonomous AI agents capable of answering phone calls, handling WhatsApp messages, qualifying inbound prospects, scheduling appointments, and synchronizing customer relationship management systems. Services are provided on a monthly subscription tier with transparent wholesale usage pass-through for telephony and messaging fees.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Acceptable Use</h2>
          <p>
            You agree not to utilize AutoSipt AI agents for unlawful telemarketing, fraudulent communications, harassing outreach, or any purpose that violates local telecommunications or consumer protection laws in your target jurisdictions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. Disclaimer of Guarantees</h2>
          <p>
            While AutoSipt optimizes AI agents for high conversion and uptime, customer conversion rates depend heavily on lead source quality, industry conditions, and third-party telecom carriers. AutoSipt makes no representation of guaranteed specific revenue outcomes.
          </p>
        </section>
      </div>
    </div>
  );
}
