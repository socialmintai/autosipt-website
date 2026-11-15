import { LeadFormData, DemoFormData, PartnerFormData, ApiResponse } from '@/types';

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

export function validateRequired(value: string, fieldName: string): string | null {
  if (!value || value.trim().length === 0) {
    return `${fieldName} is required`;
  }
  return null;
}

export function validateMinLength(value: string, min: number, fieldName: string): string | null {
  if (value.trim().length < min) {
    return `${fieldName} must be at least ${min} characters`;
  }
  return null;
}

export function validateLeadForm(data: LeadFormData): Record<string, string> {
  const errors: Record<string, string> = {};

  const nameError = validateRequired(data.name, 'Name');
  if (nameError) errors.name = nameError;

  const emailError = validateRequired(data.email, 'Email');
  if (emailError) errors.email = emailError;
  else if (!validateEmail(data.email)) errors.email = 'Please enter a valid email address';

  const companyError = validateRequired(data.company, 'Company');
  if (companyError) errors.company = companyError;

  if (data.phone) {
    const phoneError = validatePhone(data.phone);
    if (!phoneError) errors.phone = 'Please enter a valid phone number';
  }

  const countryError = validateRequired(data.country, 'Country');
  if (countryError) errors.country = countryError;

  if (data.serviceInterest.length === 0) {
    errors.serviceInterest = 'Please select at least one service of interest';
  }

  const consentError = validateRequired(data.consent ? 'true' : '', 'Consent');
  if (consentError) errors.consent = 'You must agree to the privacy policy and terms';

  return errors;
}

export function validateDemoForm(data: DemoFormData): Record<string, string> {
  const errors: Record<string, string> = {};

  const nameError = validateRequired(data.name, 'Name');
  if (nameError) errors.name = nameError;

  const emailError = validateRequired(data.email, 'Email');
  if (emailError) errors.email = emailError;
  else if (!validateEmail(data.email)) errors.email = 'Please enter a valid email address';

  const companyError = validateRequired(data.company, 'Company');
  if (companyError) errors.company = companyError;

  if (data.phone) {
    const phoneError = validatePhone(data.phone);
    if (!phoneError) errors.phone = 'Please enter a valid phone number';
  }

  const countryError = validateRequired(data.country, 'Country');
  if (countryError) errors.country = countryError;

  const dateError = validateRequired(data.preferredDate, 'Preferred date');
  if (dateError) errors.preferredDate = dateError;

  const timeError = validateRequired(data.preferredTime, 'Preferred time');
  if (timeError) errors.preferredTime = timeError;

  if (data.serviceInterest.length === 0) {
    errors.serviceInterest = 'Please select at least one service of interest';
  }

  const consentError = validateRequired(data.consent ? 'true' : '', 'Consent');
  if (consentError) errors.consent = 'You must agree to the privacy policy and terms';

  return errors;
}

export function validatePartnerForm(data: PartnerFormData): Record<string, string> {
  const errors: Record<string, string> = {};

  const nameError = validateRequired(data.name, 'Name');
  if (nameError) errors.name = nameError;

  const emailError = validateRequired(data.email, 'Email');
  if (emailError) errors.email = emailError;
  else if (!validateEmail(data.email)) errors.email = 'Please enter a valid email address';

  const companyError = validateRequired(data.company, 'Company');
  if (companyError) errors.company = companyError;

  if (data.phone) {
    const phoneError = validatePhone(data.phone);
    if (!phoneError) errors.phone = 'Please enter a valid phone number';
  }

  const countryError = validateRequired(data.country, 'Country');
  if (countryError) errors.country = countryError;

  const websiteError = validateRequired(data.website, 'Website');
  if (websiteError) errors.website = websiteError;
  else {
    try {
      new URL(data.website);
    } catch {
      errors.website = 'Please enter a valid website URL';
    }
  }

  const partnerTypeError = validateRequired(data.partnerType, 'Partner type');
  if (partnerTypeError) errors.partnerType = partnerTypeError;

  const leadVolumeError = validateRequired(data.monthlyLeadVolume, 'Monthly lead volume');
  if (leadVolumeError) errors.monthlyLeadVolume = leadVolumeError;

  if (data.targetMarkets.length === 0) {
    errors.targetMarkets = 'Please select at least one target market';
  }

  const experienceError = validateMinLength(data.experience, 50, 'Experience');
  if (experienceError) errors.experience = experienceError;

  const motivationError = validateMinLength(data.motivation, 50, 'Motivation');
  if (motivationError) errors.motivation = motivationError;

  const consentError = validateRequired(data.consent ? 'true' : '', 'Consent');
  if (consentError) errors.consent = 'You must agree to the privacy policy and terms';

  return errors;
}

export function createSuccessResponse<T>(data: T, message = 'Success'): ApiResponse<T> {
  return {
    success: true,
    message,
    data,
  };
}

export function createErrorResponse(message: string, errors?: Record<string, string[]>): ApiResponse {
  return {
    success: false,
    message,
    errors,
  };
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '');
}

export function formatPhoneForDisplay(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  if (cleaned.length === 11 && cleaned[0] === '1') {
    return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  return phone;
}