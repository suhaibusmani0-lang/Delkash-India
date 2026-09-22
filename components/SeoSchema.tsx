import React from 'react';
import { faqs } from '@/lib/faqData';

export default function SeoSchema() {
  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://delkashindia.co.in/#legalservice',
    name: 'Delkash Associates',
    legalName: 'Delkash Associates - Trademark & IPR Attorneys',
    alternateName: ['Delkash India', 'Rahimullah Ansari Advocate Law Firm'],
    description:
      'Premier Intellectual Property law firm in New Delhi. Expert Trademark, Copyright, Patent & Design registration and litigation services across India by Rahimullah Ansari Advocate.',
    url: 'https://delkashindia.co.in',
    telephone: '+919871127869',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Bank Transfer, UPI, Net Banking',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C-326, Taleem Apt, Near Kotak ATM, Okhla Head, Jamia Nagar',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110025',
      addressCountry: 'IN',
    },
    location: [
      {
        '@type': 'Place',
        name: 'Delkash Associates Head Office',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'C-326, Taleem Apt, Near Kotak ATM, Okhla Head, Jamia Nagar',
          addressLocality: 'New Delhi',
          postalCode: '110025',
          addressCountry: 'IN',
        },
      },
      {
        '@type': 'Place',
        name: 'Chambers of Rahimullah Ansari Advocate',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Chamber No. 112, First Floor, Saket District Court, Saket',
          addressLocality: 'New Delhi',
          postalCode: '110017',
          addressCountry: 'IN',
        },
      },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.5616,
      longitude: 77.2882,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '107',
      reviewCount: '107',
    },
    founder: {
      '@type': 'Person',
      name: 'Rahimullah Ansari',
      honorificSuffix: 'LL.M, LL.B, MBA, MA, B.P.Ed, M.P.E.S, M.Com',
      jobTitle: 'Advocate, Delhi High Court & Senior Trademark Attorney',
      alumniOf: 'Bar Council of Delhi',
      memberOf: {
        '@type': 'Organization',
        name: 'Delhi High Court Bar Association',
      },
      knowsAbout: [
        'Trademark Law',
        'Copyright Law',
        'Patent Prosecution',
        'Design Law',
        'Commercial Litigation',
        'Delhi High Court Litigation',
      ],
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IPR Legal Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trademark Registration & Opposition in India',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Copyright Registration & Anti-Infringement',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Patent Search and Specification Filing',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Industrial Design Registration',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
