import React from 'react';
import { faqs } from '@/lib/faqData';

export default function SeoSchema() {
  const baseUrl = 'https://delkashindia.co.in';

  // 1. LegalService & Multi-Location Branch Schema
  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${baseUrl}/#legalservice`,
    name: 'Delkash Associates',
    legalName: 'Delkash Associates - Intellectual Property & Trademark Attorneys',
    alternateName: [
      'Delkash India',
      'Advocate Rahimullah Ansari Law Chambers',
      'Delkash IPR Attorneys',
    ],
    description:
      'Premier Intellectual Property law firm based in New Delhi. Specializing in Trademark Registration, Section 9/11 Objection Replies, Trade Marks Registry Hearings, Copyright, Patent Drafting, Design Protection, and Delhi High Court Commercial Litigation.',
    url: baseUrl,
    logo: `${baseUrl}/icon.svg`,
    image: `${baseUrl}/team/advocate-rahimullah-ansari.jpg`,
    telephone: '+919871127869',
    email: 'advocate.rahimullah@gmail.com',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Credit Card, Net Banking, NEFT/RTGS',
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.5616,
      longitude: 77.2882,
    },
    hasMap: 'https://maps.google.com/?q=Delkash+Associates+Jamia+Nagar+New+Delhi',
    department: [
      {
        '@type': 'LegalService',
        name: 'Chambers of Advocate Rahimullah Ansari (Saket Court)',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Chamber No. 112, First Floor, Saket District Court, Saket',
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          postalCode: '110017',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 28.5222,
          longitude: 77.2140,
        },
        telephone: '+919871127869',
      },
      {
        '@type': 'LegalService',
        name: 'Delkash Associates Head Office (South Delhi)',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'C-326, Taleem Apt, Near Kotak ATM, Okhla Head, Jamia Nagar',
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          postalCode: '110025',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 28.5616,
          longitude: 77.2882,
        },
        telephone: '+919871127869',
      },
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'New Delhi' },
      { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
      { '@type': 'Place', name: 'Saket District Court' },
      { '@type': 'Place', name: 'Delhi High Court' },
      { '@type': 'Place', name: 'Jamia Nagar' },
      { '@type': 'Place', name: 'Okhla' },
      { '@type': 'Place', name: 'South Delhi' },
      { '@type': 'Place', name: 'Nehru Place' },
      { '@type': 'Place', name: 'Connaught Place' },
      { '@type': 'Place', name: 'Trade Marks Registry Dwarka' },
      { '@type': 'Country', name: 'India' },
    ],
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
      honorificPrefix: 'Advocate',
      honorificSuffix: 'LL.M, LL.B, MBA, MA, B.P.Ed, M.P.E.S, M.Com',
      jobTitle: 'Founder & Principal Advocate (Delhi High Court)',
      description: 'Principal Advocate at Delhi High Court and Saket District Court with over a decade of specialization in Trademark, Patent, and Copyright laws.',
      image: `${baseUrl}/team/advocate-rahimullah-ansari.jpg`,
      memberOf: [
        {
          '@type': 'Organization',
          name: 'Delhi High Court Bar Association',
        },
        {
          '@type': 'Organization',
          name: 'Saket Court Bar Association',
        },
        {
          '@type': 'Organization',
          name: 'Bar Council of Delhi',
        },
      ],
      knowsAbout: [
        'Trademark Infringement Litigation',
        'Section 9 & Section 11 Trademark Objections',
        'Trade Marks Registry Hearings at Dwarka',
        'Copyright Protection in India',
        'Patent Prosecution',
        'Commercial Court Civil Lawsuits',
      ],
    },
    employee: [
      {
        '@type': 'Person',
        name: 'Dr. Bhawana Chauhan',
        honorificPrefix: 'Dr.',
        honorificSuffix: 'Ph.D., LL.M, LL.B',
        jobTitle: 'Senior Associate Counsel & IPR Strategist',
        description: 'Specialist in complex intellectual property portfolio management, patent strategy, academic copyright, and civil rights.',
        image: `${baseUrl}/team/dr-bhawana-chauhan.jpg`,
        knowsAbout: [
          'Patent Claim Drafting',
          'IP Portfolio Management',
          'Copyright Licensing',
          'Design Act Formalities',
        ],
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Comprehensive Intellectual Property Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trademark Registration & Opposition in India',
            description: 'Express 24-hr TM application filing, Section 9/11 objection replies, and representation at Trade Marks Registry hearings.',
            url: `${baseUrl}/services/trademark`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Copyright Registration & Anti-Piracy Protection',
            description: 'Protection for literary, software code, musical, cinematographic, and artistic creations.',
            url: `${baseUrl}/services/copyright`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Patent Search, Drafting & Prosecution',
            description: 'Prior-art patent novelty searches, provisional and complete specification drafting, and patent prosecution.',
            url: `${baseUrl}/services/patent`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Industrial Design Registration',
            description: 'Shape, surface ornamentation, configuration, and pattern registration under the Designs Act 2000.',
            url: `${baseUrl}/services/design`,
          },
        },
      ],
    },
  };

  // 2. Attorney Profile Schema (Adv. Rahimullah Ansari)
  const attorneySchema = {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    '@id': `${baseUrl}/#attorney-rahimullah-ansari`,
    name: 'Advocate Rahimullah Ansari',
    legalName: 'Adv. Rahimullah Ansari',
    honorificPrefix: 'Advocate',
    honorificSuffix: 'LL.M, LL.B, MBA, MA, B.P.Ed, M.P.E.S, M.Com',
    jobTitle: 'Advocate, Delhi High Court & Founder of Delkash Associates',
    telephone: '+919871127869',
    email: 'advocate.rahimullah@gmail.com',
    worksFor: {
      '@type': 'LegalService',
      name: 'Delkash Associates',
      url: baseUrl,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chamber No. 112, First Floor, Saket District Court, Saket',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110017',
      addressCountry: 'IN',
    },
    image: `${baseUrl}/team/advocate-rahimullah-ansari.jpg`,
    alumniOf: 'Bar Council of Delhi',
  };

  // 3. BreadcrumbList Schema for Google Search Snippets
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${baseUrl}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Trademark Registration Delhi',
        item: `${baseUrl}/services/trademark`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Advocates & Counsel',
        item: `${baseUrl}/about`,
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Contact & Chambers',
        item: `${baseUrl}/contact`,
      },
    ],
  };

  // 4. FAQ Schema for Rich Results
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attorneySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
