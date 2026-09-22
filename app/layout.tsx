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
  title: 'Delkash Associates | Trademark & IPR Attorney Rahimullah Ansari New Delhi',
  description:
    'Premier Intellectual Property law firm in New Delhi. Expert Trademark, Copyright, Patent & Design registration and litigation services across India by Rahimullah Ansari Advocate. Rated 4.7 ⭐ on Google.',
  keywords: [
    'Trademark Registration Delhi',
    'Trademark Attorney New Delhi',
    'Rahimullah Ansari Advocate',
    'Delhi High Court Advocate',
    'Rahimullah Ansari Delhi High Court',
    'Delkash Associates',
    'Copyright Registration India',
    'Patent Attorney Delhi',
    'Trademark Objection Reply Lawyer',
    'IPR Lawyer Jamia Nagar Okhla',
    'Design Registration India',
    'Trademark Hearing Advocate Delhi High Court',
    'Brand Protection Attorney India',
  ],
  authors: [{ name: 'Rahimullah Ansari Advocate (Delhi High Court)', url: 'https://delkashindia.co.in' }],
  creator: 'Delkash Associates',
  publisher: 'Delkash Associates',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  metadataBase: new URL('https://delkashindia.co.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Delkash Associates | Trademark & IPR Attorney Rahimullah Ansari',
    description:
      'Premier Intellectual Property law firm in New Delhi. Fast, rejection-proof Trademark & Copyright registration across India. Rated 4.7 ⭐ across 107+ Google reviews.',
    url: 'https://delkashindia.co.in',
    siteName: 'Delkash Associates',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delkash Associates | Trademark & IPR Attorney Rahimullah Ansari',
    description:
      'Protect your creative work and brand identity with expert legal assistance from Rahimullah Ansari Advocate.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
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
