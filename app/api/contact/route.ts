import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Lead from '@/models/Lead';
import { sendLeadNotificationEmail } from '@/lib/mail';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Server-side validation
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing mandatory fields (name, email, phone, and service are required).' },
        { status: 400 }
      );
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please submit a valid email address.' },
        { status: 400 }
      );
    }

    let leadRecord = {
      _id: 'local_lead_' + Date.now(),
      name,
      email,
      phone,
      service,
      message,
      createdAt: new Date(),
    };

    // Attempt MongoDB persistence if configured
    try {
      const conn = await connectToDatabase();
      if (conn) {
        const newLead = await Lead.create({
          name,
          email,
          phone,
          service,
          message,
          source: 'Website Lead Form',
        });
        leadRecord = {
          _id: newLead._id.toString(),
          name: newLead.name,
          email: newLead.email,
          phone: newLead.phone,
          service: newLead.service,
          message: newLead.message,
          createdAt: newLead.createdAt,
        };
      } else {
        console.log('[Dev Mode] MONGODB_URI not configured. Simulated lead storage:', leadRecord);
      }
    } catch (dbErr) {
      console.warn('[DB Error or offline]:', dbErr);
    }

    // Fire off async email alert to attorney desk
    try {
      await sendLeadNotificationEmail({
        name: leadRecord.name,
        email: leadRecord.email,
        phone: leadRecord.phone,
        service: leadRecord.service,
        message: leadRecord.message,
        createdAt: leadRecord.createdAt,
      });
    } catch (mailErr) {
      console.error('[SMTP Notification Error]:', mailErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your legal consultation request has been received. Adv. Rahimullah Ansari will connect shortly.',
        leadId: leadRecord._id,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('[Contact API Error]:', error);
    const err = error as { name?: string; message?: string };
    return NextResponse.json(
      { error: err?.message || 'An unexpected error occurred. Please call directly at +91 98711 27869.' },
      { status: 500 }
    );
  }
}

