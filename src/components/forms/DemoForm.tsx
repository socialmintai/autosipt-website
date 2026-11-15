'use client';

import { useState, useEffect } from 'react';
import { Input, Textarea, Select, Checkbox, MultiSelect } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { COUNTRIES, SERVICE_INTERESTS } from '@/types';
import { validateDemoForm } from '@/lib/validation';

export function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    preferredDate: '',
    preferredTime: '',
    serviceInterest: [] as string[],
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [minDateStr, setMinDateStr] = useState('');

  useEffect(() => {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);
    setMinDateStr(minDate.toISOString().split('T')[0]);
  }, []);

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00',
  ];

  const handleChange = (field: string, value: string | string[] | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const validationErrors = validateDemoForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/demo', {
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
          preferredDate: '',
          preferredTime: '',
          serviceInterest: [],
          message: '',
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
        <h3 className="heading-3 text-slate-900 dark:text-white mb-2">Demo Booked!</h3>
        <p className="body text-slate-600 dark:text-slate-300 mb-6">
          Thank you for booking a demo with autosipt. Our team will reach out within 24 hours 
          to confirm your preferred time slot and send a calendar invite.
        </p>
        <p className="body-sm text-slate-500 dark:text-slate-400 mb-6">
          A confirmation email has been sent to your email address.
        </p>
        <Button onClick={() => setSubmitStatus('idle')} variant="outline">
          Book Another Demo
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
          placeholder="john@company.com"
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
          placeholder="Acme Inc."
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
        <MultiSelect
          label="Services of Interest"
          placeholder="Select services..."
          options={SERVICE_INTERESTS.map(s => ({ value: s, label: s }))}
          selected={formData.serviceInterest}
          onChange={selected => handleChange('serviceInterest', selected)}
          error={errors.serviceInterest}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Preferred Date"
          type="date"
          value={formData.preferredDate}
          onChange={e => handleChange('preferredDate', e.target.value)}
          error={errors.preferredDate}
          required
          min={minDateStr}
          helperText="Select a date starting from tomorrow"
        />
        <Select
          label="Preferred Time (UTC)"
          placeholder="Select time..."
          options={timeSlots.map(t => ({ value: t, label: `${t} UTC` }))}
          value={formData.preferredTime}
          onChange={e => handleChange('preferredTime', e.target.value)}
          error={errors.preferredTime}
          required
        />
      </div>

      <Textarea
        label="Additional Context (Optional)"
        placeholder="Any specific use cases, current tools, team size, or questions you'd like us to prepare for..."
        value={formData.message}
        onChange={e => handleChange('message', e.target.value)}
        rows={3}
      />

      <Checkbox
        label="I agree to the Privacy Policy and Terms of Service"
        description="We'll use your information to schedule and prepare for your demo. You can unsubscribe at any time."
        checked={formData.consent}
        onChange={e => handleChange('consent', e.target.checked)}
        error={errors.consent}
        required
      />

      <Button type="submit" fullWidth loading={isSubmitting} size="lg">
        Book My Demo
      </Button>

      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
        By submitting this form, you agree to our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a>.
      </p>
    </form>
  );
}