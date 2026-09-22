import React from 'react';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Services from '@/components/Services';
import ProcessProtocol from '@/components/ProcessProtocol';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      {/* High-Conversion Hero */}
      <Hero />

      {/* Trust & Authority Metrics Bar */}
      <StatsBar />

      {/* Services Grid with 3D Tilt Cards */}
      <Services />

      {/* 4-Step Watertight Legal Protocol */}
      <ProcessProtocol />

      {/* About The Attorney (Rahimullah Ansari) with 3D Portrait */}
      <About />

      {/* Google Reviews & Social Proof */}
      <Testimonials />

      {/* AEO / GEO Optimized FAQ Section */}
      <FaqSection />

      {/* Core Lead Gen Form & Chambers Location */}
      <ContactSection />
    </>
  );
}
