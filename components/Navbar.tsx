'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar - Hidden when scrolled to keep sticky nav ultra-sleek */}
      <div
        className={`hidden lg:block bg-[#050A15]/95 border-b border-gold-500/15 text-xs text-slate-300 transition-all duration-300 overflow-hidden ${
          isScrolled ? 'max-h-0 opacity-0 py-0 border-transparent' : 'max-h-12 opacity-100 py-1.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-3 text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Govt. Registered Trademark & Patent Attorneys
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Delhi High Court & IPAB Practice</span>
          </div>

          <div className="flex items-center space-x-5">
            <a
              href="tel:+919871127869"
              className="flex items-center space-x-1.5 text-slate-300 hover:text-gold-400 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-gold-400" />
              <span className="font-semibold text-white">+91 98711 27869</span>
              <span className="text-[11px] text-gold-400/90 font-medium">(Adv. Rahimullah)</span>
            </a>

            <span className="text-slate-700">|</span>

            <a
              href="tel:+918076303405"
              className="flex items-center space-x-1.5 text-slate-300 hover:text-gold-400 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-gold-400" />
              <span className="font-semibold text-white">+91 8076 303 405</span>
              <span className="text-[11px] text-slate-400">(Chambers Helpline)</span>
            </a>

            <span className="text-slate-700">|</span>

            <a
              href="https://wa.me/919871127869?text=Hello%20Adv.%20Rahimullah%20Ansari,%20I%20would%20like%20to%20consult%20regarding%20Trademark/IPR%20legal%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070C18]/95 backdrop-blur-md py-3 shadow-2xl border-b border-gold-500/20'
            : 'bg-[#070C18]/80 backdrop-blur-sm py-3.5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-navy-900 border border-gold-500/50 p-1 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-gold-400 transition-all overflow-hidden bg-gradient-to-b from-navy-900 to-navy-950">
              <Image
                src="/logo-gold.png"
                alt="Trademark Expert India Advocate Emblem Logo"
                width={44}
                height={44}
                className="w-full h-full object-contain drop-shadow"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg xl:text-xl font-bold tracking-tight text-white group-hover:text-gold-400 transition-colors whitespace-nowrap">
                TRADEMARK EXPERT INDIA
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-wider text-gold-400 font-semibold uppercase whitespace-nowrap">
                IPR Attorneys & Legal Consultants
              </span>
            </div>
          </Link>

          {/* Desktop Multi-Page Nav Links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors relative py-1 whitespace-nowrap text-[13px] xl:text-sm tracking-wide ${
                  isActive(link.href)
                    ? 'text-gold-400 font-semibold'
                    : 'text-slate-300 hover:text-gold-400'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 shrink-0">
            {/* WhatsApp Direct Action */}
            <a
              href="https://wa.me/919871127869?text=Hello%20Adv.%20Rahimullah%20Ansari,%20I%20would%20like%20to%20consult%20regarding%20Trademark/IPR%20legal%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-500/15 text-emerald-400 hover:bg-[#25D366] hover:text-white border border-emerald-500/30 transition-all duration-300 hover:scale-105 shrink-0"
              title="Chat on WhatsApp (+91 98711 27869)"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
              </svg>
            </a>

            {/* Quick Helpline Popover with Both Advocates */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-navy-900/90 border border-slate-700/80 hover:border-gold-500/50 text-slate-200 hover:text-white transition-all text-xs font-semibold whitespace-nowrap shadow-sm group-hover:border-gold-500/60"
                aria-label="Call Advocates Helpline"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Call Us</span>
                <ChevronDown className="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Hover Dropdown */}
              <div className="absolute right-0 top-full pt-2 w-64 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="bg-[#050A15] border border-gold-500/30 rounded-xl shadow-2xl p-3 space-y-2 backdrop-blur-xl">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-gold-400 px-2 pb-1 border-b border-white/5">
                    Direct Attorney Helplines
                  </div>
                  <a
                    href="tel:+919871127869"
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors group/item"
                  >
                    <div>
                      <div className="text-xs font-semibold text-white group-hover/item:text-gold-400">
                        Adv. Rahimullah Ansari (Chambers)
                      </div>
                      <div className="text-[11px] text-slate-400">+91 98711 27869</div>
                    </div>
                    <span className="px-2 py-1 rounded bg-gold-500 text-navy-950 text-[11px] font-bold">Primary</span>
                  </a>
                  <a
                    href="tel:+918076303405"
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors group/item"
                  >
                    <div>
                      <div className="text-xs font-semibold text-white group-hover/item:text-gold-400">
                        Adv. Bhawana (Senior Counsel)
                      </div>
                      <div className="text-[11px] text-slate-400">+91 8076 303 405</div>
                    </div>
                    <span className="px-2 py-1 rounded bg-gold-500/10 text-gold-400 text-[11px] font-semibold">Call</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Consult Now Button */}
            <Link
              href="/contact"
              className="px-4 xl:px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-navy-950 shadow-md shadow-gold-500/20 hover:shadow-gold-500/35 transition-all duration-300 hover:scale-[1.02] whitespace-nowrap active:scale-[0.98]"
            >
              Consult Now
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070C18] border-b border-navy-800 px-6 py-6 space-y-4 text-slate-200 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-1.5 font-medium text-base ${
                isActive(link.href) ? 'text-gold-400 font-bold' : 'hover:text-gold-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-navy-800 flex flex-col space-y-3">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href="tel:+919871127869"
                className="flex items-center justify-center space-x-1.5 py-2.5 bg-navy-900 border border-gold-500/40 text-gold-400 rounded-lg font-medium hover:border-gold-500"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Adv. Rahimullah</span>
              </a>
              <a
                href="tel:+918076303405"
                className="flex items-center justify-center space-x-1.5 py-2.5 bg-navy-900 border border-slate-800 text-slate-200 rounded-lg font-medium hover:border-gold-500/40"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Adv. Bhawana</span>
              </a>
            </div>
            <a
              href="https://wa.me/919871127869?text=Hello%20Adv.%20Rahimullah%20Ansari,%20I%20would%20like%20to%20consult%20regarding%20Trademark/IPR%20legal%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg font-medium text-sm shadow-md transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Direct Chat</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-bold rounded-lg text-sm uppercase tracking-wide shadow-md"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
