'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Trademark Registration & Opposition',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit form.');
      }

      setStatus({
        type: 'success',
        message: 'Your inquiry has been logged! Adv. Rahimullah Ansari will connect with you shortly.',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Trademark Registration & Opposition',
        message: '',
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {status.type === 'success' && (
        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-start space-x-2">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{status.message}</span>
        </div>
      )}

      {status.type === 'error' && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-start space-x-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{status.message}</span>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
          Full Name / Company Name <span className="text-gold-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Ramesh Kumar / Nexus Corp"
          className="w-full px-4 py-3 bg-navy-950/90 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 text-sm transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Phone / WhatsApp <span className="text-gold-400">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98711..."
            className="w-full px-4 py-3 bg-navy-950/90 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 text-sm transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Email Address <span className="text-gold-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="w-full px-4 py-3 bg-navy-950/90 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 text-sm transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
          Service Required <span className="text-gold-400">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-navy-950/90 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-gold-400 text-sm transition-colors"
        >
          <option value="Trademark Registration & Opposition">Trademark Registration & Opposition</option>
          <option value="Copyright Registration & Infringement">Copyright Registration & Infringement</option>
          <option value="Patent Filing Process">Patent Filing Process</option>
          <option value="Industrial Design Registration">Industrial Design Registration</option>
          <option value="IP Litigation & Legal Notice">IP Litigation & Legal Notice</option>
          <option value="Other IPR Consultation">Other IPR Consultation</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
          Brand Name or Case Specifics (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Mention your trademark wordmark, logo, or inquiry..."
          className="w-full px-4 py-3 bg-navy-950/90 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 text-sm transition-colors"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold uppercase tracking-wider text-xs transition-all shadow-md hover:shadow-gold-500/20 disabled:opacity-50 flex items-center justify-center space-x-2 cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Transmitting Consultation Request...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Request Legal Advice</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-slate-400 text-center mt-2">
        🔒 100% Confidential. Attorney-Client Privilege strictly maintained.
      </p>
    </form>
  );
}

