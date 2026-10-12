'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Trademark Registration & Opposition',
    business: '',
    message: '',
    stayInTouch: true,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
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
        service: formData.service,
        message: `${formData.business ? `Business: ${formData.business} | ` : ''}${formData.message ? `Details: ${formData.message} | ` : ''}Stay in touch: ${formData.stayInTouch ? 'Yes (Email & WhatsApp)' : 'No'}`,
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
        throw new Error(data.error || 'Failed to submit form.');
      }

      setStatus({
        type: 'success',
        message: 'Your inquiry has been logged! Adv. Rahimullah Ansari & Dr. Bhawana Chauhan will connect with you shortly.',
      });

      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Trademark Registration & Opposition',
        business: '',
        message: '',
        stayInTouch: true,
      });
    } catch (err: unknown) {
      const error = err as Error;
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please call +91 98711 27869 directly.',
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
          Tell us what you need and our legal team will call you back within 15 minutes.
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
          <label htmlFor="contact-name" className="block text-xs font-bold text-slate-800 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name / Company"
            className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-slate-800 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all"
          />
        </div>

        {/* Number & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-800 mb-1">
              Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 98711 27869"
              className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-slate-800 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-xs font-bold text-slate-800 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-slate-800 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all"
            />
          </div>
        </div>

        {/* Service & Which Business are you starting? */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor="contact-service" className="block text-xs font-bold text-slate-800 mb-1">
              Legal Service Required <span className="text-red-500">*</span>
            </label>
            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-slate-800 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all cursor-pointer"
            >
              <option value="Trademark Registration & Opposition">Trademark Registration & Opposition</option>
              <option value="Copyright Registration & Infringement">Copyright Registration & Infringement</option>
              <option value="Patent Search & Specification">Patent Search & Specification</option>
              <option value="Industrial Design Registration">Industrial Design Registration</option>
              <option value="IP Litigation & Court Injunction">IP Litigation & Court Injunction</option>
              <option value="Other Legal Consultation">Other Legal Consultation</option>
            </select>
          </div>

          <div>
            <label htmlFor="contact-business" className="block text-xs font-bold text-slate-800 mb-1">
              Which business are you starting?
            </label>
            <input
              type="text"
              id="contact-business"
              name="business"
              value={formData.business}
              onChange={handleChange}
              placeholder="e.g. mobile cover, tea stall, car wash"
              className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-slate-800 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all"
            />
          </div>
        </div>

        {/* Brand Name or Specifics */}
        <div>
          <label htmlFor="contact-message" className="block text-xs font-bold text-slate-800 mb-1">
            Brand Name or Case Specifics (Optional)
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={2}
            value={formData.message}
            onChange={handleChange}
            placeholder="Mention trademark wordmark, logo, objection number, or inquiry..."
            className="w-full px-3.5 py-2 bg-slate-50/60 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-slate-800 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all resize-none"
          ></textarea>
        </div>

        {/* Stay in touch */}
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

        {/* Submit button */}
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
