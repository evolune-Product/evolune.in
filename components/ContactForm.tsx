'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', building: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`Inquiry from ${form.name}${form.company ? ` (${form.company})` : ''}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nWhat are you building: ${form.building}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-10 text-center">
        <h3 className="font-display text-xl font-semibold text-brand-white mb-3">Opening your mail client…</h3>
        <p className="text-sm text-brand-silver/70 leading-relaxed mb-6">
          If it didn't launch automatically, email us directly at <strong className="text-brand-white">{site.email}</strong>.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-brand-white hover:border-brand-cyan/40"
        >
          Compose Another Note
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-silver/80 mb-2">Your Name</label>
        <input
          id="name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Ada Lovelace"
          className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-brand-white placeholder:text-brand-silver/30 focus:border-brand-cyan/50 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-silver/80 mb-2">Email</label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="ada@company.com"
          className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-brand-white placeholder:text-brand-silver/30 focus:border-brand-cyan/50 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-brand-silver/80 mb-2">Company (optional)</label>
        <input
          id="company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          placeholder="Your company"
          className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-brand-white placeholder:text-brand-silver/30 focus:border-brand-cyan/50 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="building" className="block text-sm font-medium text-brand-silver/80 mb-2">What are you building?</label>
        <input
          id="building"
          value={form.building}
          onChange={(e) => setForm({ ...form, building: e.target.value })}
          placeholder="A quick line on your project"
          className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-brand-white placeholder:text-brand-silver/30 focus:border-brand-cyan/50 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-silver/80 mb-2">Message</label>
        <textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us what you are building and how we can collaborate..."
          className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-brand-white placeholder:text-brand-silver/30 focus:border-brand-cyan/50 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_-8px_rgba(37,99,255,0.7)] transition-transform hover:-translate-y-0.5"
      >
        Send Message
      </button>
    </form>
  );
}
