import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ContactSection from '@/components/ContactSection';
import StatsBar from '@/components/StatsBar';

export const metadata: Metadata = {
  title: 'Contact Delkash Associates | Saket Court Chamber 112 & Jamia Nagar Office',
  description:
    'Consult Adv. Rahimullah Ansari & Dr. Bhawana Chauhan. Head Office: C-326, Taleem Apt, Near Kotak ATM, Okhla Head Jamia Nagar New Delhi 110025. Chambers: Chamber No. 112, 1st Floor, Saket District Court, New Delhi 110017. Direct Call & WhatsApp: +91 98711 27869.',
  keywords: [
    'Lawyer in Saket Court',
    'Advocate Chamber 112 Saket Court',
    'IPR Lawyer Jamia Nagar',
    'Lawyer Okhla Head New Delhi',
    'Contact Delkash Associates',
    'Rahimullah Ansari Phone Number',
    'Legal Consultation Delhi High Court',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Delkash Associates | Saket Court Chambers & Jamia Nagar Office',
    description:
      'Book a confidential consultation with Adv. Rahimullah Ansari. Phone: +91 98711 27869.',
    url: 'https://delkashindia.co.in/contact',
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

