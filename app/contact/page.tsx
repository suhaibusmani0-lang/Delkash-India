import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ContactSection from '@/components/ContactSection';
import StatsBar from '@/components/StatsBar';

export const metadata: Metadata = {
  title: 'Contact Trademark Expert India | Office No 2 Okhla Head & Saket Court Chambers',
  description:
    'Consult Adv. Rahimullah Ansari & Dr. Bhawana Chauhan. Head Office: Upper Ground Floor, Office No 2, C-326, Okhla Head Rd, Near UBI, Okhla Village, New Delhi 110025. Chambers: Chamber No. 112, 1st Floor, Saket District Court, New Delhi 110017. Direct Call: +91 98711 27869 / +91 8076 303 405.',
  keywords: [
    'Trademark Expert India Phone Number',
    '+91 98711 27869',
    '+919871127869',
    '9871127869',
    '+91 8076 303 405',
    'Lawyer in Saket Court',
    'Advocate Chamber 112 Saket Court',
    'IPR Lawyer Jamia Nagar',
    'Lawyer Okhla Head New Delhi',
    'Contact Trademark Expert India',
    'Rahimullah Ansari Phone Number',
    'Legal Consultation Delhi High Court',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Trademark Expert India | Saket Court Chambers & Jamia Nagar Office',
    description:
      'Book a confidential consultation with Trademark Expert India. Call: +91 98711 27869 / +91 8076 303 405.',
    url: 'https://www.trademarkexpertindia.com/contact',
  },
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

