'use client';

import { useState } from 'react';
import { Calculator, Sparkles, ArrowRight, Info, Clock, Users, DollarSign, TrendingUp } from '@/components/ui/Icons';

export function RoiCalculatorSection() {
  const [monthlyLeads, setMonthlyLeads] = useState<number>(300);
  const [customerValue, setCustomerValue] = useState<number>(1200);
  const [responseTime, setResponseTime] = useState<string>('2hours');
  const [employeesHandlingLeads, setEmployeesHandlingLeads] = useState<number>(3);

  // Honest, mathematically sound estimation logic
  // Typically, 50% to 70% of inbound leads require multiple touchpoints & follow-ups
  const estimatedLeadsRequiringFollowup = Math.round(monthlyLeads * 0.65);

  // Each employee spends approx ~20 hours/month on repetitive qualification, manual dialling & appointment coordination
  const hoursPerEmployeePerMonth = 22;
  const potentialTimeSavedHours = Math.round(employeesHandlingLeads * hoursPerEmployeePerMonth);

  // Follow-up volume: 3 to 5 automated touchpoints per qualified lead
  const potentialFollowupVolume = Math.round(estimatedLeadsRequiringFollowup * 4);

  return (
    <section id="roi-calculator" className="relative py-24 lg:py-32 bg-[#090d15] border-t border-white/[0.08]" aria-labelledby="roi-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Operational Estimator</span>
          </div>
          <h2 id="roi-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            What Could You Automate?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Estimate the workload, follow-up volume, and team hours you can reclaim each month with autonomous AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Inputs Column */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0c1018] border border-white/10 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-400" />
                Your Business Metrics
              </h3>

              {/* Input 1: Monthly Leads */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="leads-input" className="text-sm font-medium text-slate-300">
                    Monthly Inbound Leads
                  </label>
                  <span className="text-base font-bold font-mono text-indigo-400">
                    {monthlyLeads.toLocaleString()} leads
                  </span>
                </div>
                <input
                  id="leads-input"
                  type="range"
                  min="50"
                  max="2000"
                  step="25"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>50</span>
                  <span>1,000</span>
                  <span>2,000+</span>
                </div>
              </div>

              {/* Input 2: Average Customer Value */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="value-input" className="text-sm font-medium text-slate-300">
                    Average Customer Lifetime Value ($)
                  </label>
                  <span className="text-base font-bold font-mono text-emerald-400">
                    ${customerValue.toLocaleString()}
                  </span>
                </div>
                <input
                  id="value-input"
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={customerValue}
                  onChange={(e) => setCustomerValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>$100</span>
                  <span>$5,000</span>
                  <span>$10,000+</span>
                </div>
              </div>

              {/* Input 3: Current Response Time */}
              <div>
                <label className="text-sm font-medium text-slate-300 block mb-2">
                  Current Average Response Time
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'instant', label: '< 5 Mins' },
                    { id: '30mins', label: '~30 Mins' },
                    { id: '2hours', label: '1 - 2 Hours' },
                    { id: 'sameday', label: '12+ Hours' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setResponseTime(item.id)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                        responseTime === item.id
                          ? 'bg-indigo-600 text-white border-indigo-400 shadow'
                          : 'bg-slate-900 text-slate-400 border-white/5 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input 4: Number of Employees Handling Leads */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="employees-input" className="text-sm font-medium text-slate-300">
                    Number of Employees Handling Inquiries / Booking
                  </label>
                  <span className="text-base font-bold font-mono text-sky-400">
                    {employeesHandlingLeads} {employeesHandlingLeads === 1 ? 'employee' : 'employees'}
                  </span>
                </div>
                <input
                  id="employees-input"
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={employeesHandlingLeads}
                  onChange={(e) => setEmployeesHandlingLeads(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
              </div>
            </div>

            <p className="text-[11px] text-slate-500 mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 shrink-0" />
              Adjust sliders dynamically to view estimated workload benchmarks.
            </p>
          </div>

          {/* Outputs Column */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-indigo-950/70 via-[#0e1320] to-[#07090e] border border-indigo-500/30 p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                  Automation Impact
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  ESTIMATE ONLY
                </span>
              </div>

              <div className="space-y-5">
                {/* Output 1: Estimated Leads Requiring Follow-up */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-xs text-slate-400 mb-1">
                    Estimated Leads Requiring Follow-up
                  </p>
                  <div className="text-3xl font-extrabold text-white font-mono">
                    ~{estimatedLeadsRequiringFollowup} <span className="text-sm font-normal text-slate-400">leads/mo</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Typically slip through without automated 24/7 cadences
                  </p>
                </div>

                {/* Output 2: Potential Time Saved */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-xs text-slate-400 mb-1">
                    Potential Time Saved
                  </p>
                  <div className="text-3xl font-extrabold text-indigo-400 font-mono">
                    ~{potentialTimeSavedHours} <span className="text-sm font-normal text-slate-400">hours/month</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Reclaimed from repetitive FAQs, dialling & rescheduling
                  </p>
                </div>

                {/* Output 3: Potential Follow-up Volume */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-xs text-slate-400 mb-1">
                    Potential Follow-up Volume
                  </p>
                  <div className="text-3xl font-extrabold text-emerald-400 font-mono">
                    ~{potentialFollowupVolume.toLocaleString()} <span className="text-sm font-normal text-slate-400">automated touches</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Multi-touch WhatsApp, SMS & email follow-ups executed
                  </p>
                </div>
              </div>

              {/* Crucial Ethical Disclaimer */}
              <div className="mt-6 p-3 rounded-xl bg-slate-900/80 border border-white/5 text-[11px] text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-300">Disclaimer:</span> These metrics are mathematical estimates based on aggregate client operations. Actual conversions depend on lead quality, industry, and offer pricing. AutoSipt does not guarantee fixed revenue results.
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#book-demo"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-xl shadow-indigo-600/30 transition-all"
              >
                <span>Get My Free Automation Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
