import { Metadata } from 'next';
import { generateMetadata, JSONLD, faqSchema } from '@/components/seo/SEO';
import { siteConfig } from '@/lib/config';
import { Hero } from '@/components/sections/Hero';
import { LeadForm } from '@/components/forms/LeadForm';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Us',
  description: 'Get in touch with autosipt to discuss your AI automation needs. We serve businesses in the USA, UK, Canada, and Australia.',
  canonical: '/contact',
});

const contactFAQs = [
  {
    question: 'How quickly will you respond to my enquiry?',
    answer: 'We typically respond within 24 hours during business days. For urgent inquiries, please mention it in your message.',
  },
  {
    question: 'What information should I include in my message?',
    answer: 'Please share your use case, expected volume, current tech stack, timeline, and any specific requirements. The more detail, the better we can prepare for our first conversation.',
  },
  {
    question: 'Do you offer a free consultation?',
    answer: 'Yes, we offer a complimentary discovery call to understand your needs and discuss potential solutions. Book a demo to schedule yours.',
  },
];

export default function ContactPage() {
  return (
    <>
      <JSONLD data={faqSchema(contactFAQs)} />

      <Hero
        badge="Get in Touch"
        title="Let's Start a Conversation"
        subtitle="Ready to explore AI automation for your business? Fill out the form and our team will reach out within 24 hours to schedule a discovery call."
        primaryCTA={{ label: 'Book a Demo Instead', href: '/book-demo' }}
      />

      <section className="section" aria-labelledby="contact-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 id="contact-heading" className="heading-2 text-slate-900 dark:text-white mb-6">Why Contact autosipt?</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 dark:bg-blue-900/30 dark:text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-4 text-slate-900 dark:text-white mb-1">Expert Consultation</h3>
                    <p className="body text-slate-600 dark:text-slate-300">Speak with AI automation specialists who understand your industry and technical requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 dark:bg-blue-900/30 dark:text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-4 text-slate-900 dark:text-white mb-1">Custom Solutions</h3>
                    <p className="body text-slate-600 dark:text-slate-300">No one-size-fits-all. Every deployment is tailored to your workflows, integrations, and compliance needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 dark:bg-blue-900/30 dark:text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-4 text-slate-900 dark:text-white mb-1">Transparent Process</h3>
                    <p className="body text-slate-600 dark:text-slate-300">Clear timelines, pricing, and deliverables. No hidden fees or surprise scope changes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 dark:bg-blue-900/30 dark:text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-4 text-slate-900 dark:text-white mb-1">Global Coverage</h3>
                    <p className="body text-slate-600 dark:text-slate-300">Serving USA, UK, Canada, and Australia with multi-timezone support and local compliance.</p>
                  </div>
                </div>
              </div>

              <div className="card p-6 gradient-bg-subtle">
                <h3 className="heading-4 text-slate-900 dark:text-white mb-4">Other Ways to Reach Us</h3>
                <div className="space-y-4">
                  <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{siteConfig.contact.email}</span>
                  </a>
                  <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{siteConfig.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-950 dark:bg-slate-900" aria-labelledby="cta-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="cta-heading" className="heading-2 text-white mb-4">Prefer a Live Demo?</h2>
            <p className="body-lg text-slate-300 mb-8">Book a personalized demo to see our AI agents in action.</p>
            <Button size="lg" asChild>
              <a href="/book-demo">Book a Demo</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}