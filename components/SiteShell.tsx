'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  // If on admin CRM / portal, do NOT render public Navbar, Footer, or WhatsApp CTA
  if (isAdmin) {
    return <main className="min-h-screen bg-[#070C18] text-slate-100">{children}</main>;
  }

  // On public website pages, render full law firm layout with Navbar, Footer, and Floating WhatsApp
  return (
    <>
      <Navbar />
      <div className="flex-1">{children}</div>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

