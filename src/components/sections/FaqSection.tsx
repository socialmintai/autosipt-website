'use client';

import { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, ArrowRight } from '@/components/ui/Icons';
import { FAQS } from '@/lib/config';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-[#090d15] border-t border-white/[0.08] scroll-mt-20" aria-labelledby="faq-title">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 id="faq-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Everything You Need to Know
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Clear, transparent answers on deploying autonomous AI employees into your business operations.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-[#0c1017] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 text-white hover:text-indigo-300 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold tracking-tight">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-indigo-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
          <p className="text-sm text-slate-300">
            Have a specialized custom workflow or specific security requirement?
          </p>
          <a
            href="#book-demo"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>Ask our technical architects during your demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
