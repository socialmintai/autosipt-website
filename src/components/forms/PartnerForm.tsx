'use client';

import { useState } from 'react';
import { Input, Textarea, Select, Checkbox, MultiSelect } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { COUNTRIES, PARTNER_TYPES, TARGET_MARKETS, PartnerFormData } from '@/types';
import { validatePartnerForm } from '@/lib/validation';

export function PartnerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    website: '',
    partnerType: '' as PartnerFormData['partnerType'],
    monthlyLeadVolume: '',
    targetMarkets: [] as string[],
    experience: '',
    motivation: '',
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (field: string, value: string | string[] | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const validationErrors = validatePartnerForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          country: '',
          website: '',
          partnerType: '' as PartnerFormData['partnerType'],
          monthlyLeadVolume: '',
          targetMarkets: [],
          experience: '',
          motivation: '',
          consent: false,
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="card p-8 text-center" role="status" aria-live="polite">
        <svg className="mx-auto h-16 w-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="heading-3 text-slate-900 dark:text-white mb-2">Application Submitted!</h3>
        <p className="body text-slate-600 dark:text-slate-300 mb-6">
          Thank you for your interest in partnering with autosipt! We've received your application 
          and our partnerships team will review it within 3-5 business days.
        </p>
        <p className="body-sm text-slate-500 dark:text-slate-400 mb-6">
          A confirmation email has been sent to your email address.
        </p>
        <Button onClick={() => setSubmitStatus('idle')} variant="outline">
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-6" noValidate>
      {submitStatus === 'error' && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 dark:bg-red-950/30 dark:border-red-800" role="alert">
          <p className="text-red-700 dark:text-red-300">{errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          placeholder="John Smith"
          value={formData.name}
          onChange={e => handleChange('name', e.target.value)}
          error={errors.name}
          required
          autoComplete="name"
        />
        <Input
          label="Work Email"
          type="email"
          placeholder="john@partnercompany.com"
          value={formData.email}
          onChange={e => handleChange('email', e.target.value)}
          error={errors.email}
          required
          autoComplete="email"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Company Name"
          placeholder="Partner Agency Inc."
          value={formData.company}
          onChange={e => handleChange('company', e.target.value)}
          error={errors.company}
          required
          autoComplete="organization"
        />
        <Input
          label="Phone Number (Optional)"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={formData.phone}
          onChange={e => handleChange('phone', e.target.value)}
          error={errors.phone}
          autoComplete="tel"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Country"
          placeholder="Select your country"
          options={COUNTRIES.map(c => ({ value: c.code, label: `${c.flag} ${c.name}` }))}
          value={formData.country}
          onChange={e => handleChange('country', e.target.value)}
          error={errors.country}
          required
        />
        <Input
          label="Website URL"
          placeholder="https://partnercompany.com"
          value={formData.website}
          onChange={e => handleChange('website', e.target.value)}
          error={errors.website}
          required
          autoComplete="url"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Partner Type"
          placeholder="Select partner type"
          options={PARTNER_TYPES.map(p => ({ value: p.value, label: p.label }))}
          value={formData.partnerType}
          onChange={e => handleChange('partnerType', e.target.value)}
          error={errors.partnerType}
          required
        />
        <Select
          label="Estimated Monthly Lead Volume"
          placeholder="Select volume"
          options={[
            { value: '1-10', label: '1-10 leads/month' },
            { value: '11-50', label: '11-50 leads/month' },
            { value: '51-100', label: '51-100 leads/month' },
            { value: '101-250', label: '101-250 leads/month' },
            { value: '250+', label: '250+ leads/month' },
          ]}
          value={formData.monthlyLeadVolume}
          onChange={e => handleChange('monthlyLeadVolume', e.target.value)}
          error={errors.monthlyLeadVolume}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          Target Markets <span className="text-red-500">*</span>
        </label>
        <MultiSelect
          placeholder="Select target markets..."
          options={TARGET_MARKETS.map(m => ({ value: m, label: m }))}
          selected={formData.targetMarkets}
          onChange={selected => handleChange('targetMarkets', selected)}
          error={errors.targetMarkets}
        />
      </div>

      <Textarea
        label="Relevant Experience"
        placeholder="Describe your experience in marketing, sales, or technology partnerships. Include industries served, client types, and any relevant certifications..."
        value={formData.experience}
        onChange={e => handleChange('experience', e.target.value)}
        rows={4}
        error={errors.experience}
        required
        helperText="Minimum 50 characters"
      />

      <Textarea
        label="Why Partner with autosipt?"
        placeholder="What interests you about our AI automation solutions? How do you see this partnership benefiting your clients and your business?..."
        value={formData.motivation}
        onChange={e => handleChange('motivation', e.target.value)}
        rows={4}
        error={errors.motivation}
        required
        helperText="Minimum 50 characters"
      />

      <Checkbox
        label="I agree to the Privacy Policy and Terms of Service"
        description="We'll use your information to evaluate your partnership application. You can unsubscribe at any time."
        checked={formData.consent}
        onChange={e => handleChange('consent', e.target.checked)}
        error={errors.consent}
        required
      />

      <Button type="submit" fullWidth loading={isSubmitting} size="lg">
        Submit Application
      </Button>

      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
        By submitting this form, you agree to our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a>.
      </p>
    </form>
  );
}