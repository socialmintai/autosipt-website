'use client';

import { useState } from 'react';
import {
  Stethoscope,
  Building2,
  Activity,
  Briefcase,
  Dumbbell,
  Wrench,
  Sparkles,
  Scissors,
  ArrowRight,
  CheckCircle2,
} from '@/components/ui/Icons';

export function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState('dental');

  const industries = [
    {
      id: 'dental',
      name: 'Dental Clinics',
      description: 'AI receptionist + appointment booking + follow-up.',
      detailedBenefit:
        'Handles emergency toothache calls 24/7, verifies dental insurance providers, schedules patient cleanings, and triggers automated follow-ups to fill empty chair time.',
      useCases: [
        '24/7 After-hours emergency call answering',
        'Direct practice management calendar booking',
        'Automated checkup & cleaning reminder sequences',
        'Insurance inquiry triage & pre-qualification',
      ],
      icon: Stethoscope,
      tag: 'Healthcare',
    },
    {
      id: 'real-estate',
      name: 'Real Estate',
      description: 'Lead qualification + property inquiries + viewing appointments.',
      detailedBenefit:
        'Engages buyers on Zillow/Realtor ads within 3 seconds, filters for pre-approval & budget, and books guided showing appointments for agents.',
      useCases: [
        'Instant response to property listing inquiries',
        'Buyer financing & pre-approval qualification',
        'Viewing & open house appointment scheduling',
        'Automated seller valuation lead follow-ups',
      ],
      icon: Building2,
      tag: 'High-Value Deals',
    },
    {
      id: 'medical',
      name: 'Medical Clinics',
      description: 'Patient inquiries + FAQs + appointment scheduling.',
      detailedBenefit:
        'Trained on clinic guidelines and medical triage protocols. Books doctor visits, answers clinic FAQs, and reduces staff telephone burden by 65%.',
      useCases: [
        'Patient intake & appointment slot reservations',
        'Pre-appointment questionnaire delivery',
        'Location, parking, and clinic policy FAQs',
        'Post-procedure follow-up check-in messages',
      ],
      icon: Activity,
      tag: 'Clinical Care',
    },
    {
      id: 'coaching',
      name: 'Coaching Businesses',
      description: 'Lead qualification + consultation booking + follow-up.',
      detailedBenefit:
        'Filters high-ticket coaching applicants, collects discovery survey answers, eliminates low-intent applicants, and books strategy calls on your calendar.',
      useCases: [
        'High-ticket applicant screening & qualification',
        'Discovery call booking on Calendly / Google Calendar',
        'Multi-channel WhatsApp/Email reminder sequences',
        'Cold lead re-engagement cadences',
      ],
      icon: Briefcase,
      tag: 'Knowledge Business',
    },
    {
      id: 'gyms',
      name: 'Gyms & Fitness',
      description: 'Membership inquiries + trial booking + follow-up.',
      detailedBenefit:
        'Converts social media fitness leads into scheduled club walkthroughs and free trial passes, checking in automatically if prospects fail to show.',
      useCases: [
        'Free pass and trial booking automation',
        'Membership pricing & class schedule FAQs',
        'Missed trial recovery sequences',
        'Member win-back automated campaigns',
      ],
      icon: Dumbbell,
      tag: 'Fitness & Wellness',
    },
    {
      id: 'home-services',
      name: 'Home Services',
      description: 'Lead capture + quote requests + scheduling.',
      detailedBenefit:
        'Essential for HVAC, plumbing, roofing, and electrical businesses. Never miss emergency weekend repair requests or high-value job estimates.',
      useCases: [
        'Emergency dispatch & job intake',
        'Initial quote estimate gathering & photo uploads',
        'Technician visit scheduling & dispatch alerts',
        'Job completion follow-ups & review requests',
      ],
      icon: Wrench,
      tag: 'Field Services',
    },
    {
      id: 'salons',
      name: 'Salons & Spas',
      description: 'Stylist scheduling + cancellations + re-booking.',
      detailedBenefit:
        'Clients can book appointments over WhatsApp or phone at midnight, fill last-minute cancellation slots, and receive automated re-booking prompts.',
      useCases: [
        'Stylist-specific calendar bookings',
        'Automated cancellation waitlist re-allocation',
        'Service pricing and duration explanations',
        '6-week routine re-booking follow-ups',
      ],
      icon: Scissors,
      tag: 'Beauty & Lifestyle',
    },
  ];

  const current = industries.find((i) => i.id === selectedIndustry) || industries[0];
  const CurrentIcon = current.icon;

  return (
    <section id="industries" className="relative py-24 lg:py-32 bg-[#090d15] scroll-mt-20" aria-labelledby="industries-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vertical-Specific AI Architectures</span>
          </div>
          <h2 id="industries-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            AI Automation Built Around Your Business
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Tailored prompts, specialized workflows, and CRM integrations pre-configured for your industry’s exact customer journey.
          </p>
        </div>

        {/* Industry Pill Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isSelected = selectedIndustry === ind.id;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setSelectedIndustry(ind.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Spotlight Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#0e1320] via-[#0b0f18] to-[#07090e] border border-indigo-500/30 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{current.name}</h3>
                  <span className="text-xs font-semibold uppercase text-indigo-300">
                    {current.description}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
                {current.detailedBenefit}
              </p>

              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Automated Capabilities:
                </p>
                {current.useCases.map((uc, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{uc}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#book-demo"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all"
                >
                  <span>Find My Automation Opportunity</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-5 bg-slate-900/80 rounded-2xl border border-white/10 p-5 space-y-4 text-xs text-slate-400">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-semibold text-slate-200">Implementation Specs</span>
                <span className="text-emerald-400 font-mono">Ready to Deploy</span>
              </div>
              <div>
                <p className="font-semibold text-slate-300">Setup Timeframe:</p>
                <p className="text-slate-400 mt-0.5">5 – 10 business days</p>
              </div>
              <div>
                <p className="font-semibold text-slate-300">Voice Latency Target:</p>
                <p className="text-slate-400 mt-0.5">&lt; 600ms conversational pause</p>
              </div>
              <div>
                <p className="font-semibold text-slate-300">Supported Channels:</p>
                <p className="text-slate-400 mt-0.5">Voice Phone, WhatsApp Business API, Web Chat, SMS</p>
              </div>
              <div>
                <p className="font-semibold text-slate-300">Calendar Compatibility:</p>
                <p className="text-slate-400 mt-0.5">Google Calendar, Calendly, GoHighLevel, Outlook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
