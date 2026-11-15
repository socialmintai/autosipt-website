import { Metadata } from 'next';
import { generateMetadata, JSONLD, faqSchema } from '@/components/seo/SEO';
import { siteConfig } from '@/lib/config';
import { Hero } from '@/components/sections/Hero';
import { DemoForm } from '@/components/forms/DemoForm';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = generateMetadata({
  title: 'Book a Demo',
  description: 'Book a personalized demo to see autosipt AI voice agents, receptionists, and chatbots in action. Choose your preferred date and time.',
  canonical: '/book-demo',
});

const demoFAQs = [
  {
    question: 'How long does a demo last?',
    answer: 'Typical demos run 30-45 minutes. We tailor the session to your specific use cases and questions.',
  },
  {
    question: 'What should I prepare for the demo?',
    answer: 'Come with your use cases, current pain points, volume estimates, and any integration requirements. The more context you share beforehand, the more valuable the demo.',
  },
  {
    question: 'Can multiple team members join?',
    answer: 'Absolutely. Just let us know in the message field and we will send calendar invites for everyone.',
  },
  {
    question: 'What happens after the demo?',
    answer: 'We follow up with a summary, proposed solution architecture, timeline, and pricing. No pressure — just clear next steps if you want to proceed.',
  },
];

export default function BookDemoPage() {
  return (
    <>
      <JSONLD data={faqSchema(demoFAQs)} />

      <Hero
        badge="30-45 Minute Session"
        title="Book Your Personalized Demo"
        subtitle="See our AI agents handle real conversations, explore the dashboard, and discuss your specific use case. No sales pressure — just a technical walkthrough tailored to your needs."
        primaryCTA={{ label: 'Contact Sales Instead', href: '/contact' }}
      />

      <section className="section" aria-labelledby="demo-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <DemoForm />
            </div>

            <div>
              <div className="card p-6 h-full">
                <h2 id="demo-heading" className="heading-3 text-slate-900 dark:text-white mb-6">What to Expect</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 dark:bg-blue-900/30 dark:text-blue-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Live Demonstration</h3>
                      <p className="body text-slate-600 dark:text-slate-300">Watch our AI voice agents and chatbots handle real scenarios relevant to your industry.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 dark:bg-blue-900/30 dark:text-blue-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Technical Deep Dive</h3>
                      <p className="body text-slate-600 dark:text-slate-300">Explore integrations, conversation flows, analytics, and deployment architecture.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 dark:bg-blue-900/30 dark:text-blue-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Q&A Session</h3>
                      <p className="body text-slate-600 dark:text-slate-300">Get answers to your specific questions about pricing, implementation, compliance, and support.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 dark:bg-blue-900/30 dark:text-blue-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Next Steps</h3>
                      <p className="body text-slate-600 dark:text-slate-300">Receive a customized proposal with timeline, pricing, and implementation plan within 48 hours.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-6 gradient-bg-subtle mt-6">
                <h3 className="heading-4 text-slate-900 dark:text-white mb-4">Demo Requirements</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Stable internet connection
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Microphone and speakers (for voice demos)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    30-45 minutes of uninterrupted time
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Key decision makers invited (optional)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-950 dark:bg-slate-900" aria-labelledby="cta-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="cta-heading" className="heading-2 text-white mb-4">Questions Before Booking?</h2>
            <p className="body-lg text-slate-300 mb-8">Reach out directly and we'll help you find the right time.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact">Email Us</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
                <a href="mailto:hello@autosipt.com">hello@autosipt.com</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}