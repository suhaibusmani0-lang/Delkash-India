import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Lead from '@/models/Lead';

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json({ success: true, leads: [] });
    }

    const leads = await Lead.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, leads });
  } catch (error: unknown) {
    console.error('[Leads GET Error]:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { leadId, status } = body;

    if (!leadId || !status) {
      return NextResponse.json({ error: 'leadId and status are required' }, { status: 400 });
    }

    await connectToDatabase();
    const updated = await Lead.findByIdAndUpdate(
      leadId,
      { status },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, lead: updated });
  } catch (error: unknown) {
    console.error('[Lead Status Update Error]:', error);
    return NextResponse.json({ error: 'Failed to update lead status' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Lead ID is required' }, { status: 400 });
    }

    await connectToDatabase();
    await Lead.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: 'Lead deleted' });
  } catch (error: unknown) {
    console.error('[Lead Delete Error]:', error);
    return NextResponse.json({ error: 'Failed to delete lead' }, { status: 500 });
  }
}

