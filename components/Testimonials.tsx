'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle, ExternalLink, MapPin } from 'lucide-react';
import TiltCard from './ui/TiltCard';

const reviews = [
  {
    quote:
      'Rahimullah Ansari advocate is a highly qualified advocate and expert in trademark and copyright laws. His guidance saved our application from complex objections.',
    author: 'Legally Speaking India',
    role: 'Legal Journal & Reviewer',
    rating: 5,
  },
  {
    quote:
      'Wonderful job delivered by him to get our Logo registered. Very prompt response throughout the examination and publication stages.',
    author: 'Verified Business Client',
    role: 'Brand Owner',
    rating: 5,
  },
  {
    quote:
      'Very efficient team and good service. They handled our trademark opposition with extreme professionalism and secured our trademark certificate.',
    author: 'Mahatab Alam',
    role: 'Entrepreneur',
    rating: 5,
  },
  {
    quote:
      'Rahimullah Ansari Advocate is an expert in the registration of trademark. He has lot of experience and provides very practical and transparent advice.',
    author: 'Nishtha Dawar',
    role: 'Enterprise Founder',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-navy-950 text-white relative border-t border-navy-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 text-gold-400 mb-3 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20 shadow-md">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-400" />
            ))}
            <span className="text-xs text-gold-400 font-semibold ml-1.5">4.7 / 5.0 (107 Reviews)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Client Experiences & Endorsements
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Authentic feedback from real business owners and legal reviewers on Google Reviews.
          </p>
        </div>

        {/* Google Business Profile Live Rating Badge Card */}
        <div className="mb-12 max-w-4xl mx-auto">
          <TiltCard glowColor="rgba(66, 133, 244, 0.25)">
            <div className="rounded-2xl bg-navy-900/90 border border-slate-700/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4 text-left">
                {/* Official Google Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white p-2.5 flex items-center justify-center shadow-lg shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>

                <div>
                  <div className="flex items-center space-x-2 flex-wrap">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                      TRADEMARK EXPERT INDIA
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      ✓ Google Verified Business
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex space-x-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-white font-bold text-sm">5.0 Star</span>
                    <span className="text-slate-400 text-xs">• Law Firm in New Delhi</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-mono">
                    Google Profile ID: <span className="text-gold-400">1097941121254250819</span> &bull; Shop Code: <span className="text-gold-400">04977272213376957575</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap gap-2.5 shrink-0 w-full md:w-auto">
                <a
                  href="https://maps.google.com/?cid=1097941121254250819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Live on Google</span>
                </a>
                <a
                  href="https://maps.google.com/?cid=1097941121254250819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gold-500/20 hover:bg-gold-500 text-gold-300 hover:text-navy-950 border border-gold-500/40 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5"
                >
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>Write a Review</span>
                </a>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Reviews Grid with 3D TiltCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard className="h-full" glowColor="rgba(212, 175, 55, 0.15)">
                <div className="h-full bg-navy-900/80 border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between relative hover:border-gold-500/40 transition-colors shadow-xl">
                  <Quote className="w-8 h-8 text-gold-500/15 absolute top-6 right-6" />
                  
                  <div className="space-y-4">
                    <div className="flex space-x-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed italic">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-semibold text-sm">{rev.author}</h4>
                      <p className="text-xs text-gold-400/90">{rev.role}</p>
                    </div>
                    <div className="flex items-center space-x-1 text-[11px] text-emerald-400 font-medium">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Google Review</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
