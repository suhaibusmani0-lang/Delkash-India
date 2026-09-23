import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/delkashassociates/',
    hoverClass: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/delkash_ipr_law_firm/',
    hoverClass: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/delkash-associates-law-firm/?viewAsMember=true',
    hoverClass: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@delkashassociatestrademark6944',
    hoverClass: 'hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400 text-xs border-t border-navy-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full bg-navy-900 border border-gold-500/50 p-1 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-gold-400 transition-all overflow-hidden bg-gradient-to-b from-navy-900 to-navy-950">
                <Image
                  src="/logo-gold.png"
                  alt="Delkash Associates Advocate Emblem Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain drop-shadow"
                />
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-wide group-hover:text-gold-400 transition-colors">
                DELKASH ASSOCIATES
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed">
              Delkash Associates is an Intellectual Property and civil practice law firm headed by 
              Adv. Rahimullah Ansari (Delhi High Court). Specializing in trademark protection, copyright enforcement, patent 
              prosecution, and brand litigation across all registries in India.
            </p>

            {/* Social Media Links Bar */}
            <div className="pt-2">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Follow Official Channels:
              </span>
              <div className="flex items-center space-x-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Delkash Associates on ${social.name}`}
                    className={`w-8 h-8 rounded-lg bg-navy-900 border border-slate-700/80 flex items-center justify-center text-slate-300 transition-all duration-300 shadow-md ${social.hoverClass} hover:scale-105`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Services Multi-Page Links */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-3">
              Legal Practice Areas
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/trademark" className="hover:text-gold-400 transition-colors">
                  Trademark Registration Delhi
                </Link>
              </li>
              <li>
                <Link href="/services/trademark" className="hover:text-gold-400 transition-colors">
                  TM Objection Rebuttals (Sec 9/11)
                </Link>
              </li>
              <li>
                <Link href="/services/copyright" className="hover:text-gold-400 transition-colors">
                  Copyright Filing & Anti-Piracy
                </Link>
              </li>
              <li>
                <Link href="/services/patent" className="hover:text-gold-400 transition-colors">
                  Patent Prior Art Search & Filing
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="hover:text-gold-400 transition-colors">
                  Industrial Design Registry
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold-400 transition-colors">
                  IPR Legal Articles & Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Court Chambers & Local Geo Presence */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-3">
              Court Chambers & Geo Coverage
            </h4>
            <div className="space-y-3 text-[11px] text-slate-300 leading-relaxed">
              <div>
                <p className="font-semibold text-gold-400">Saket District Court Chambers:</p>
                <p className="text-slate-400">Chamber No. 112, 1st Floor, Saket District Court, Saket, New Delhi 110017</p>
              </div>
              <div>
                <p className="font-semibold text-gold-400">South Delhi Head Office:</p>
                <p className="text-slate-400">C-326, Taleem Apt, Near Kotak ATM, Okhla Head Jamia Nagar, New Delhi 110025</p>
              </div>
              <div>
                <p className="font-semibold text-gold-400">Registry & High Court Jurisdiction:</p>
                <p className="text-slate-400">Delhi High Court & Trade Marks Registry (Boudhik Sampada Bhawan, Dwarka, Delhi)</p>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Contact & Portal */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-3">
              Direct Chambers Contact
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <a href="tel:+919871127869" className="text-white hover:text-gold-400 font-medium">
                  +91 98711 27869
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919871127869?text=Hello%20Adv.%20Rahimullah%20Ansari,%20I%20would%20like%20to%20consult%20regarding%20Trademark/IPR%20legal%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  WhatsApp: +91 98711 27869
                </a>
              </li>
              <li>
                <a href="mailto:advocate.rahimullah@gmail.com" className="text-slate-300 hover:text-gold-400 transition-colors">
                  advocate.rahimullah@gmail.com
                </a>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">
                  About Adv. Rahimullah Ansari
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-gold-400 transition-colors">
                  Client Reviews (4.7 ⭐ 107+)
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold-400 transition-colors">
                  IPR Legal FAQ
                </Link>
              </li>
              <li className="pt-2">
                <Link 
                  href="/admin" 
                  className="inline-flex items-center space-x-1.5 text-[11px] text-slate-400 hover:text-gold-400 border border-slate-800 hover:border-gold-500/30 px-2 py-1 rounded bg-navy-900/60 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                  <span>Attorney Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bar Council Compliance Disclaimer */}
        <div className="pt-8 border-t border-navy-800 text-[11px] text-slate-400 space-y-4 leading-relaxed">
          <p>
            <strong className="text-slate-300">Bar Council of India Disclaimer:</strong> As per the rules 
            of the Bar Council of India, law firms and advocates are prohibited from soliciting work or 
            advertising. By visiting this website, you acknowledge that you are seeking information regarding 
            Delkash Associates of your own accord and that there has been no form of solicitation, advertisement, 
            or inducement by Rahimullah Ansari Advocate or any associate of the firm.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-navy-850/60 text-slate-400 text-[11px] gap-2">
            <p>© {new Date().getFullYear()} Delkash Associates. All Rights Reserved.</p>
            <p>Crafted for Supreme Legal Precision & Brand Protection.</p>
          </div>

          {/* Centered Developed by Zarnetic Link */}
          <div className="pt-4 border-t border-navy-900 text-center">
            <a
              href="https://www.zarnetic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-1 text-slate-400 hover:text-gold-300 transition-colors text-xs font-medium group cursor-pointer"
              title="Visit Zarnetic"
            >
              <span>Developed by</span>
              <span className="text-gold-400 font-bold group-hover:underline ml-1">
                Zarnetic
              </span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
