export interface EmailOptions {
  to: string;
  from: string;
  subject: string;
  html: string;
  text?: string;
}

export interface EmailProvider {
  send(options: EmailOptions): Promise<{ success: boolean; messageId?: string; error?: string }>;
}

class ConsoleEmailProvider implements EmailProvider {
  async send(options: EmailOptions): Promise<{ success: boolean; messageId?: string; error?: string }> {
    console.log('📧 Email would be sent:', {
      to: options.to,
      from: options.from,
      subject: options.subject,
      htmlLength: options.html.length,
    });
    return { success: true, messageId: `dev-${Date.now()}` };
  }
}

class SendGridProvider implements EmailProvider {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async send(options: EmailOptions): Promise<{ success: boolean; messageId?: string; error?: string }> {
    try {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: options.to }],
              subject: options.subject,
            },
          ],
          from: { email: options.from },
          content: [
            {
              type: 'text/html',
              value: options.html,
            },
            {
              type: 'text/plain',
              value: options.text || options.html.replace(/<[^>]*>/g, ''),
            },
          ],
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        return { success: false, error: `SendGrid error: ${error}` };
      }

      return { success: true, messageId: response.headers.get('X-Message-Id') || undefined };
    } catch (error) {
      return { success: false, error: `SendGrid error: ${error}` };
    }
  }
}

class ResendProvider implements EmailProvider {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async send(options: EmailOptions): Promise<{ success: boolean; messageId?: string; error?: string }> {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: options.from,
          to: [options.to],
          subject: options.subject,
          html: options.html,
          text: options.text,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        return { success: false, error: `Resend error: ${JSON.stringify(error)}` };
      }

      const data = await response.json();
      return { success: true, messageId: data.id };
    } catch (error) {
      return { success: false, error: `Resend error: ${error}` };
    }
  }
}

function getEmailProvider(): EmailProvider {
  const provider = process.env.EMAIL_PROVIDER || 'console';
  const apiKey = process.env.EMAIL_API_KEY;

  switch (provider) {
    case 'sendgrid':
      if (!apiKey) throw new Error('SENDGRID_API_KEY not configured');
      return new SendGridProvider(apiKey);
    case 'resend':
      if (!apiKey) throw new Error('RESEND_API_KEY not configured');
      return new ResendProvider(apiKey);
    case 'console':
    default:
      return new ConsoleEmailProvider();
  }
}

export const emailProvider = getEmailProvider();

export async function sendEmail(options: EmailOptions) {
  return emailProvider.send(options);
}

export function generateLeadNotificationEmail(data: {
  name: string;
  email: string;
  company: string;
  phone?: string;
  country: string;
  serviceInterest: string[];
  message?: string;
}): { subject: string; html: string; text: string } {
  const services = data.serviceInterest.join(', ');
  const subject = `New Lead: ${data.name} from ${data.company}`;
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">New Lead Enquiry</h1>
      </div>
      <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #374151; width: 140px;">Name:</td>
            <td style="padding: 12px 0; color: #1f2937;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #374151;">Email:</td>
            <td style="padding: 12px 0; color: #1f2937;"><a href="mailto:${data.email}" style="color: #3b82f6;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #374151;">Company:</td>
            <td style="padding: 12px 0; color: #1f2937;">${data.company}</td>
          </tr>
          ${data.phone ? `
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #374151;">Phone:</td>
            <td style="padding: 12px 0; color: #1f2937;"><a href="tel:${data.phone}" style="color: #3b82f6;">${data.phone}</a></td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #374151;">Country:</td>
            <td style="padding: 12px 0; color: #1f2937;">${data.country}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #374151; vertical-align: top;">Services:</td>
            <td style="padding: 12px 0; color: #1f2937;">${services}</td>
          </tr>
          ${data.message ? `
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #374151; vertical-align: top;">Message:</td>
            <td style="padding: 12px 0; color: #1f2937; white-space: pre-wrap;">${data.message}</td>
          </tr>
          ` : ''}
        </table>
        <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
          <p style="margin: 0; font-size: 14px; color: #6b7280;">This lead was submitted via the autosipt website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
New Lead Enquiry

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
${data.phone ? `Phone: ${data.phone}` : ''}
Country: ${data.country}
Services: ${services}
${data.message ? `Message: ${data.message}` : ''}

This lead was submitted via the autosipt website contact form.
  `;

  return { subject, html, text };
}

export function generateDemoConfirmationEmail(data: {
  name: string;
  email: string;
  company: string;
  preferredDate: string;
  preferredTime: string;
  serviceInterest: string[];
}): { subject: string; html: string; text: string } {
  const services = data.serviceInterest.join(', ');
  const subject = `Demo Booking Confirmed - ${data.name} from ${data.company}`;
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">Demo Booking Confirmed</h1>
      </div>
      <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
        <p style="font-size: 16px; color: #1f2937;">Hi ${data.name},</p>
        <p style="font-size: 16px; color: #1f2937;">Thank you for booking a demo with autosipt. We're excited to show you how our AI automation solutions can transform your business.</p>
        
        <div style="background: white; padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; margin: 24px 0;">
          <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #1e3a8a;">Booking Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #374151; width: 140px;">Date:</td>
              <td style="padding: 8px 0; color: #1f2937;">${data.preferredDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #374151;">Time:</td>
              <td style="padding: 8px 0; color: #1f2937;">${data.preferredTime}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #374151;">Company:</td>
              <td style="padding: 8px 0; color: #1f2937;">${data.company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #374151; vertical-align: top;">Services of Interest:</td>
              <td style="padding: 8px 0; color: #1f2937;">${services}</td>
            </tr>
          </table>
        </div>
        
        <p style="font-size: 16px; color: #1f2937;">Our team will reach out to you within 24 hours to confirm the meeting details and send a calendar invite.</p>
        
        <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
          <p style="margin: 0; font-size: 14px; color: #6b7280;">If you need to reschedule or have any questions, please reply to this email or contact us at hello@autosipt.com</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
Demo Booking Confirmed

Hi ${data.name},

Thank you for booking a demo with autosipt. We're excited to show you how our AI automation solutions can transform your business.

Booking Details:
Date: ${data.preferredDate}
Time: ${data.preferredTime}
Company: ${data.company}
Services of Interest: ${services}

Our team will reach out to you within 24 hours to confirm the meeting details and send a calendar invite.

If you need to reschedule or have any questions, please reply to this email or contact us at hello@autosipt.com
  `;

  return { subject, html, text };
}

export function generatePartnerNotificationEmail(data: {
  name: string;
  email: string;
  company: string;
  phone?: string;
  country: string;
  website: string;
  partnerType: string;
  monthlyLeadVolume: string;
  targetMarkets: string[];
  experience: string;
  motivation: string;
}): { subject: string; html: string; text: string } {
  const subject = `New Partner Application: ${data.name} from ${data.company}`;
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">New Partner Application</h1>
      </div>
      <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #374151; width: 160px;">Name:</td>
            <td style="padding: 12px 0; color: #1f2937;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #374151;">Email:</td>
            <td style="padding: 12px 0; color: #1f2937;"><a href="mailto:${data.email}" style="color: #3b82f6;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #374151;">Company:</td>
            <td style="padding: 12px 0; color: #1f2937;">${data.company}</td>
          </tr>
          ${data.phone ? `
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #374151;">Phone:</td>
            <td style="padding: 12px 0; color: #1f2937;"><a href="tel:${data.phone}" style="color: #3b82f6;">${data.phone}</a></td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #374151;">Country:</td>
            <td style="padding: 12px 0; color: #1f2937;">${data.country}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #374151;">Website:</td>
            <td style="padding: 12px 0; color: #1f2937;"><a href="${data.website}" style="color: #3b82f6;">${data.website}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #374151;">Partner Type:</td>
            <td style="padding: 12px 0; color: #1f2937;">${data.partnerType}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #374151;">Monthly Lead Volume:</td>
            <td style="padding: 12px 0; color: #1f2937;">${data.monthlyLeadVolume}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #374151;">Target Markets:</td>
            <td style="padding: 12px 0; color: #1f2937;">${data.targetMarkets.join(', ')}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #374151; vertical-align: top;">Experience:</td>
            <td style="padding: 12px 0; color: #1f2937; white-space: pre-wrap;">${data.experience}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #374151; vertical-align: top;">Motivation:</td>
            <td style="padding: 12px 0; color: #1f2937; white-space: pre-wrap;">${data.motivation}</td>
          </tr>
        </table>
        <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
          <p style="margin: 0; font-size: 14px; color: #6b7280;">This application was submitted via the autosipt Partner With Us page.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
New Partner Application

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
${data.phone ? `Phone: ${data.phone}` : ''}
Country: ${data.country}
Website: ${data.website}
Partner Type: ${data.partnerType}
Monthly Lead Volume: ${data.monthlyLeadVolume}
Target Markets: ${data.targetMarkets.join(', ')}

Experience:
${data.experience}

Motivation:
${data.motivation}

This application was submitted via the autosipt Partner With Us page.
  `;

  return { subject, html, text };
}

export function generateAutoReplyEmail(type: 'lead' | 'demo' | 'partner', data: { name: string }): { subject: string; html: string; text: string } {
  const templates = {
    lead: {
      subject: 'Thank you for contacting autosipt - We\'ll be in touch soon',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
          </div>
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="font-size: 16px; color: #1f2937;">Hi ${data.name},</p>
            <p style="font-size: 16px; color: #1f2937;">We've received your enquiry and our team will review it shortly. You can expect a response within 24 hours during business days.</p>
            <p style="font-size: 16px; color: #1f2937;">In the meantime, feel free to explore our <a href="https://autosipt.com/services" style="color: #3b82f6;">services</a> or <a href="https://autosipt.com/case-studies" style="color: #3b82f6;">case studies</a> to learn more about how we help businesses like yours.</p>
            <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 14px; color: #6b7280;">Best regards,<br>The autosipt Team<br><a href="https://autosipt.com" style="color: #3b82f6;">autosipt.com</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Thank You for Reaching Out!

Hi ${data.name},

We've received your enquiry and our team will review it shortly. You can expect a response within 24 hours during business days.

In the meantime, feel free to explore our services or case studies to learn more about how we help businesses like yours.

Best regards,
The autosipt Team
autosipt.com
      `,
    },
    demo: {
      subject: 'Demo Booking Received - autosipt',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Demo Request Received</h1>
          </div>
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="font-size: 16px; color: #1f2937;">Hi ${data.name},</p>
            <p style="font-size: 16px; color: #1f2937;">Thank you for booking a demo with autosipt! We've received your request and our team will reach out within 24 hours to confirm your preferred time slot and send a calendar invite.</p>
            <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 14px; color: #6b7280;">Best regards,<br>The autosipt Team<br><a href="https://autosipt.com" style="color: #3b82f6;">autosipt.com</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Demo Request Received

Hi ${data.name},

Thank you for booking a demo with autosipt! We've received your request and our team will reach out within 24 hours to confirm your preferred time slot and send a calendar invite.

Best regards,
The autosipt Team
autosipt.com
      `,
    },
    partner: {
      subject: 'Partner Application Received - autosipt',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Partner Application Received</h1>
          </div>
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="font-size: 16px; color: #1f2937;">Hi ${data.name},</p>
            <p style="font-size: 16px; color: #1f2937;">Thank you for your interest in partnering with autosipt! We've received your application and our partnerships team will review it within 3-5 business days.</p>
            <p style="font-size: 16px; color: #1f2937;">If you have any questions in the meantime, please don't hesitate to reach out to partnerships@autosipt.com</p>
            <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 14px; color: #6b7280;">Best regards,<br>The autosipt Partnerships Team<br><a href="https://autosipt.com" style="color: #3b82f6;">autosipt.com</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Partner Application Received

Hi ${data.name},

Thank you for your interest in partnering with autosipt! We've received your application and our partnerships team will review it within 3-5 business days.

If you have any questions in the meantime, please don't hesitate to reach out to partnerships@autosipt.com

Best regards,
The autosipt Partnerships Team
autosipt.com
      `,
    },
  };

  return templates[type];
}