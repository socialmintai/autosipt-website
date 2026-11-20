import { NextRequest, NextResponse } from 'next/server';
import { saveLead } from '@/lib/leads-store';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const bodyData = body || {};
    const name = bodyData.name || bodyData.fullName || 'Demo Requester';
    const email = bodyData.email || bodyData.workEmail;
    const company = bodyData.company || bodyData.businessName || 'Not specified';
    const phone = bodyData.phone || 'Not provided';
    const country = bodyData.country || 'USA';
    const preferredDate = bodyData.preferredDate || 'Flexible';
    const preferredTime = bodyData.preferredTime || 'Flexible';
    const serviceInterest = bodyData.serviceInterest || 'Demo Booking';
    const message = bodyData.message || `Preferred Date: ${preferredDate}, Time: ${preferredTime}`;

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email address is required.' },
        { status: 400 }
      );
    }

    // Save into unified leads store
    await saveLead({
      name,
      company,
      email,
      phone,
      country,
      website: 'Demo Request',
      serviceInterest: `Demo: ${Array.isArray(serviceInterest) ? serviceInterest.join(', ') : serviceInterest}`,
      message: `Date: ${preferredDate} @ ${preferredTime} | ${message}`,
      submittedAt: new Date().toISOString(),
    });

    const demoInfo = {
      name,
      company,
      email,
      phone,
      country,
      preferredDate,
      preferredTime,
      serviceInterest: Array.isArray(serviceInterest) ? serviceInterest.join(', ') : serviceInterest,
      message,
      submittedAt: new Date().toISOString(),
    };

    console.log('📅 [NEW AUTOSIPT DEMO BOOKING REQUEST]:', demoInfo);

    const recipientEmail = process.env.NOTIFICATION_EMAIL || process.env.ADMIN_EMAIL || 'riteshyadav7342@gmail.com';
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'AutoSipt Bookings <onboarding@resend.dev>',
            to: [recipientEmail],
            subject: `📅 New Demo Booking: ${demoInfo.name} (${demoInfo.company})`,
            html: `
              <h2>New Demo Booking Scheduled</h2>
              <table style="width: 100%; border-collapse: collapse; font-family: sans-serif;">
                <tr><td style="padding: 8px; font-weight: bold;">Full Name:</td><td>${demoInfo.name}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Business:</td><td>${demoInfo.company}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td><a href="mailto:${demoInfo.email}">${demoInfo.email}</a></td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td><a href="tel:${demoInfo.phone}">${demoInfo.phone}</a></td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Preferred Date:</td><td>${demoInfo.preferredDate}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Preferred Time:</td><td>${demoInfo.preferredTime}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Interest:</td><td>${demoInfo.serviceInterest}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Notes:</td><td>${demoInfo.message}</td></tr>
              </table>
            `,
          }),
        });
      } catch (err) {
        console.error('Failed to send demo email via Resend:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Demo booking received successfully.',
      data: demoInfo,
    });
  } catch (error) {
    console.error('Error handling demo submission:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
