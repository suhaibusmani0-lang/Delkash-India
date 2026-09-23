import type { Metadata } from 'next';
import { Merriweather, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import SeoSchema from '@/components/SeoSchema';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SiteShell from '@/components/SiteShell';
import LuxuryBackground from '@/components/ui/LuxuryBackground';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Delkash Associates | Trademark & IPR Attorney Rahimullah Ansari New Delhi',
    template: '%s | Delkash Associates - Intellectual Property Lawyers',
  },
  description:
    'Premier Intellectual Property & Trademark law firm in New Delhi. Fast, rejection-proof Trademark, Copyright, Patent & Design registration and Delhi High Court litigation counsel by Adv. Rahimullah Ansari. Saket Court Chamber 112 & Jamia Nagar Head Office. Rated 4.7 ⭐ on Google.',
  applicationName: 'Delkash Associates Legal Portal',
  keywords: [
    'Trademark Registration Delhi',
    'Trademark Attorney New Delhi',
    'Advocate Rahimullah Ansari',
    'Rahimullah Ansari Delhi High Court',
    'Saket District Court Chamber 112 Lawyer',
    'Dr Bhawana Chauhan Advocate',
    'Delkash Associates',
    'Trademark Objection Reply Section 9 Section 11',
    'Trademark Hearing Lawyer Delhi',
    'Copyright Registration India',
    'Patent Attorney Delhi NCR',
    'IPR Lawyer Jamia Nagar Okhla',
    'Design Registration India',
    'Brand Protection Attorney India',
    'Trade Marks Registry Dwarka Advocate',
    'Intellectual Property Law Firm South Delhi',
  ],
  authors: [
    { name: 'Adv. Rahimullah Ansari (Delhi High Court)', url: 'https://delkashindia.co.in' },
    { name: 'Dr. Bhawana Chauhan (IPR Strategist)', url: 'https://delkashindia.co.in/about' },
  ],
  creator: 'Delkash Associates',
  publisher: 'Delkash Associates',
  category: 'Legal Services / Intellectual Property Law',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  metadataBase: new URL('https://delkashindia.co.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': 'https://delkashindia.co.in',
    },
  },
  openGraph: {
    title: 'Delkash Associates | Trademark & IPR Attorney Rahimullah Ansari New Delhi',
    description:
      'Premier Intellectual Property law firm in New Delhi. Expert Trademark, Copyright, Patent & Design registration across India. Saket Court Chambers & Jamia Nagar Head Office. Rated 4.7 ⭐ across 107+ Google reviews.',
    url: 'https://delkashindia.co.in',
    siteName: 'Delkash Associates',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delkash Associates | Trademark & IPR Attorney Rahimullah Ansari',
    description:
      'Protect your brand identity and creative work with experienced counsel from Adv. Rahimullah Ansari & Dr. Bhawana Chauhan.',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'IN-DL',
    'geo.placename': 'New Delhi, Saket Court, Jamia Nagar, Okhla, South Delhi',
    'geo.position': '28.5222;77.2140',
    'ICBM': '28.5222, 77.2140',
    'rating': 'general',
    'revisit-after': '3 days',
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: ['/favicon.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merriweather.variable} ${plusJakarta.variable}`}>
      <head>
        <SeoSchema />
      </head>
      <body className="font-sans antialiased bg-navy-950 text-slate-100 selection:bg-gold-500 selection:text-navy-950 min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Dynamic Global 3D Luxury Background */}
        <LuxuryBackground />

        {/* Conditional Layout Shell: Renders Navbar, Footer & WhatsApp on site, Hides them on Admin CRM */}
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
