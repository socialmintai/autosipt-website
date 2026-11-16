'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Shield, Clock, Lock, Send } from '@/components/ui/Icons';
import { siteConfig } from '@/lib/config';

export function LeadCaptureSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    country: 'USA',
    businessType: 'Dental Clinic',
    automationGoal: 'Appointment Booking',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countries = ['UK', 'UAE', 'USA', 'Canada', 'Australia', 'Other International'];

  const businessTypes = [
    'Dental clinics',
    'Medical clinics',
    'Real estate companies',
    'Coaching businesses',
    'Gyms',
    'Salons',
    'Home-service businesses',
    'Small and medium-sized businesses',
    'Other',
  ];

  const automationOptions = [
    'Lead Generation',
    'Customer Support',
    'Voice Calls',
    'WhatsApp',
    'Appointment Booking',
    'Follow-ups',
    'Other',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.businessName.trim()) errs.businessName = 'Business name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Valid work email is required';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          company: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          website: formData.website,
          serviceInterest: [formData.automationGoal],
          message: `Business Type: ${formData.businessType}. Automation Goal: ${formData.automationGoal}. Website: ${formData.website || 'N/A'}`,
          consent: true,
        }),
      });

      // Save into local storage for the /admin dashboard
      try {
        const localLead = {
          id: `lead_${Date.now()}`,
          name: formData.fullName,
          company: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          website: formData.website,
          serviceInterest: formData.automationGoal,
          message: `Business: ${formData.businessType}`,
          submittedAt: new Date().toISOString(),
        };
        const existing = JSON.parse(localStorage.getItem('autosipt_leads_local') || '[]');
        localStorage.setItem('autosipt_leads_local', JSON.stringify([localLead, ...existing]));
      } catch (e) {}

      setIsSubmitted(true);
    } catch (err) {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="book-demo" className="relative py-24 lg:py-32 bg-[#07090e] border-t border-white/[0.08] scroll-mt-20" aria-labelledby="form-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Conviction & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Priority Demo Reservation</span>
            </div>

            <h2 id="form-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Book a Free AI Automation Demo
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Schedule a 20-minute tailored walkthrough. We’ll show you a live interactive preview of an AI voice & WhatsApp employee customized for your exact business.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Custom Live AI Prototype</h3>
                  <p className="text-xs text-slate-400">Hear the AI answer questions specific to your business offer and clinic/office hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Full Workflow Audit</h3>
                  <p className="text-xs text-slate-400">We analyze where you’re currently leaking leads across calls, WhatsApp, and forms.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Exact Implementation Roadmap</h3>
                  <p className="text-xs text-slate-400">Transparent pricing, integration steps with your CRM, and a 10-day launch schedule.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                Strict confidentiality
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                No pushy sales tactics
              </span>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gradient-to-b from-[#0e1320] via-[#0b0f19] to-[#07090e] border border-white/15 p-6 sm:p-10 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Request Received!</h3>
                  <p className="text-base text-slate-300 max-w-md mx-auto leading-relaxed">
                    “Thanks! Your request has been received. We'll review your business and prepare an automation recommendation.”
                  </p>
                  <p className="text-xs text-slate-400 pt-2">
                    Our automation specialist will reach out within 1 business day via email or WhatsApp.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold text-indigo-300 bg-white/5 hover:bg-white/10 border border-white/10"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Request Automation Plan & Demo
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Free Consultation
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                      {errors.fullName && <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Business Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Dental Care"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                      {errors.businessName && <p className="text-xs text-rose-400 mt-1">{errors.businessName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Work Email */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Work Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@apexdental.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                      {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Phone / WhatsApp <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 234-5678"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                      {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Website */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Company Website
                      </label>
                      <input
                        type="text"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://yourwebsite.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Country
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      >
                        {countries.map((c) => (
                          <option key={c} value={c} className="bg-slate-900 text-white">
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Type */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Business Type
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      >
                        {businessTypes.map((bt) => (
                          <option key={bt} value={bt} className="bg-slate-900 text-white">
                            {bt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* What would you like to automate? (Requested Dropdown) */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        What would you like to automate?
                      </label>
                      <select
                        value={formData.automationGoal}
                        onChange={(e) => setFormData({ ...formData, automationGoal: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      >
                        {automationOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-slate-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit CTA button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-xl shadow-indigo-600/30 transition-all duration-200 active:scale-[0.99] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Preparing Your Plan...</span>
                      ) : (
                        <>
                          <span>Get My Free AI Automation Plan</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-2">
                    Zero spam guaranteed. We respect your inbox and never share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
