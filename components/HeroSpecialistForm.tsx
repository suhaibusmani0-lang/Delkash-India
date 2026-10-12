'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HeroSpecialistForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    stayInTouch: true,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const payload = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        service: 'Business Trademark & Specialist Consultation',
        message: `Starting Business: ${formData.business || 'Not specified'} | Stay in touch: ${formData.stayInTouch ? 'Yes (Email & WhatsApp)' : 'No'}`,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit request.');
      }

      setStatus({
        type: 'success',
        message: 'Request received! Our legal specialist will call you back within 15 minutes.',
      });

      setFormData({
        name: '',
        phone: '',
        email: '',
        business: '',
        stayInTouch: true,
      });
    } catch (err: unknown) {
      const error = err as Error;
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please call directly at +91 98711 27869.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-100 relative transition-all duration-300">
      <div className="mb-5">
        <h3 className="font-sans text-2xl sm:text-[28px] font-extrabold text-slate-900 tracking-tight leading-tight">
          Talk to a specialist
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-normal font-medium">
          Tell us what you need and we will call you back.
        </p>
      </div>

      {status.type === 'success' && (
        <div className="mb-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start space-x-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <span className="font-medium leading-snug">{status.message}</span>
        </div>
      )}

      {status.type === 'error' && (
        <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start space-x-2">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <span className="font-medium leading-snug">{status.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Name */}
        <div>
          <label htmlFor="hero-name" className="block text-xs font-bold text-slate-800 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="hero-name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-slate-800 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all"
          />
        </div>

        {/* Number */}
        <div>
          <label htmlFor="hero-phone" className="block text-xs font-bold text-slate-800 mb-1">
            Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="hero-phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 98711 27869"
            className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-slate-800 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="hero-email" className="block text-xs font-bold text-slate-800 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="hero-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-slate-800 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all"
          />
        </div>

        {/* Which business are you starting? */}
        <div>
          <label htmlFor="hero-business" className="block text-xs font-bold text-slate-800 mb-1">
            Which business are you starting?
          </label>
          <input
            type="text"
            id="hero-business"
            name="business"
            value={formData.business}
            onChange={handleChange}
            placeholder="e.g. mobile cover manufacturing, tea stall, car wash"
            className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-slate-800 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all"
          />
        </div>

        {/* Stay in touch Checkbox */}
        <div className="pt-1">
          <span className="block text-xs font-bold text-slate-800 mb-1">Stay in touch</span>
          <label className="flex items-start space-x-2.5 cursor-pointer text-[11px] sm:text-xs text-slate-600 leading-snug select-none">
            <input
              type="checkbox"
              name="stayInTouch"
              checked={formData.stayInTouch}
              onChange={handleChange}
              className="mt-0.5 w-4 h-4 rounded text-slate-900 border-slate-300 focus:ring-slate-900 cursor-pointer shrink-0"
            />
            <span>
              Yes, send me offers, filing reminders and compliance updates by email and WhatsApp. I can unsubscribe any time.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl bg-slate-950 hover:bg-slate-800 active:scale-[0.99] text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg disabled:opacity-60 flex items-center justify-center space-x-2 cursor-pointer group"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Connecting with specialist...</span>
              </>
            ) : (
              <>
                <span>Talk to a specialist</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>

        <div className="flex items-center justify-center space-x-1.5 pt-1 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Strict Attorney-Client Confidentiality • Instant Callback</span>
        </div>
      </form>
    </div>
  );
}

