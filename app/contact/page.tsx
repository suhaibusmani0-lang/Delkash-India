import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ContactSection from '@/components/ContactSection';
import StatsBar from '@/components/StatsBar';

export const metadata: Metadata = {
  title: 'Contact Delkash Associates | Chambers of Rahimullah Ansari Advocate',
  description:
    'Book a legal consultation with Rahimullah Ansari Advocate. Office at C-326, Taleem Apt, Near Kotak ATM, Okhla Head Jamia Nagar New Delhi 110025. Chambers at Chamber No 112, First Floor, Saket District Court, New Delhi 110017. Phone: +91 98711 27869.',
};

export default function ContactPage() {
  return (
    <div className="pb-24">
      <PageHeader
        badge="Chambers Appointment"
        title="Schedule a Legal Consultation"
        description="Connect directly with Rahimullah Ansari Advocate for trademark clearance, copyright enforcement, patent evaluation, or court litigation advice."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <div className="-mt-8 mb-12">
        <StatsBar />
      </div>

      {/* Main Contact Section with Form, Details, and Map */}
      <ContactSection />
    </div>
  );
}

