import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IPR & Trademark Law Blog | Delkash Associates Legal Articles',
  description:
    'Authoritative insights, legal updates, and strategic guides on Trademark Registration, Section 9/11 Objection Replies, Patent Law, and Copyright Infringement in India by Adv. Rahimullah Ansari & Dr. Bhawana Chauhan.',
  keywords: [
    'Trademark Law Blog India',
    'Section 9 Trademark Objection Guide',
    'Patent Prosecution India Blog',
    'Copyright Infringement Articles Delhi',
    'Advocate Rahimullah Ansari Legal Insights',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'IPR & Trademark Law Blog | Delkash Associates',
    description:
      'Legal commentary and procedural guides for brand owners, startups, and intellectual property practitioners in India.',
    url: 'https://delkashindia.co.in/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
