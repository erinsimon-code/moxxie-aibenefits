'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'General question',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-card p-8 text-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: 'linear-gradient(135deg, #0f766e, #0d9488)' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Message received</h2>
        <p className="text-gray-500 leading-relaxed">
          Thanks, <strong>{formData.name}</strong>! We&apos;ve received your message and will respond to <strong>{formData.email}</strong> within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Send a Message</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
        <input type="text" name="name" required value={formData.name} onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
          placeholder="Jane Smith" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
        <input type="email" name="email" required value={formData.email} onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
          placeholder="jane@email.com" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Topic *</label>
        <select name="topic" required value={formData.topic} onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white">
          <option>General question</option>
          <option>Text message (SMS) help</option>
          <option>Privacy request</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
        <textarea name="message" required rows={5} value={formData.message} onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
          placeholder="How can we help?" />
      </div>

      <button type="submit"
        className="w-full py-4 text-sm font-semibold text-white rounded-2xl shadow-lg transition-all hover:opacity-90"
        style={{ background: 'linear-gradient(135deg, #0f766e, #0d9488)' }}>
        Send Message
      </button>
    </form>
  );
}
