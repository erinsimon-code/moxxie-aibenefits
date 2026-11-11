'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignupForm() {
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    zip: '',
    phone: '',
    marketingOptIn: false,
    accountOptIn: false,
    termsAccepted: false,
  });

  const smsRequiresPhone = formData.marketingOptIn || formData.accountOptIn;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));
    if (name === 'phone' && value.trim()) {
      setPhoneError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (smsRequiresPhone && !formData.phone.trim()) {
      setPhoneError('Enter a mobile number to receive text messages.');
      return;
    }
    setPhoneError('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: 'linear-gradient(135deg, #0f766e, #0d9488)' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">You&apos;re signed up</h2>
        <p className="text-lg text-gray-500 mb-6 max-w-md mx-auto">
          Thanks, <strong>{formData.firstName}</strong>! Your signup has been received.
        </p>
        <div className="p-6 rounded-2xl text-left mb-8" style={{ background: 'rgba(94,234,212,0.1)', border: '1px solid rgba(94,234,212,0.3)' }}>
          <p className="text-sm text-teal-800 leading-relaxed">
            We&apos;ll send updates to <strong>{formData.email}</strong>.
            {(formData.marketingOptIn || formData.accountOptIn) && formData.phone && (
              <> You&apos;ve also opted in to receive text messages at <strong>{formData.phone}</strong>. Reply STOP anytime to opt out.</>
            )}
          </p>
          <p className="text-sm text-teal-800 leading-relaxed mt-3">
            Questions? <a href="mailto:support@benefitsautoagent.com" className="underline">support@benefitsautoagent.com</a> or <a href="tel:+13022080220" className="underline">(302) 208-0220</a>
          </p>
        </div>
        <Link href="/"
          className="inline-block px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all"
          style={{ background: 'linear-gradient(135deg, #0f766e, #0d9488)' }}>
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name *</label>
        <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
          placeholder="Jane" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
        <input type="email" name="email" required value={formData.email} onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
          placeholder="jane@email.com" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">ZIP Code (Optional)</label>
        <input type="text" name="zip" value={formData.zip} onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
          placeholder="12345" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Mobile Phone {smsRequiresPhone ? <span className="text-red-500">*</span> : '(Optional)'}
        </label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm ${
            phoneError ? 'border-red-300 bg-red-50' : 'border-gray-200'
          }`}
          placeholder="(555) 123-4567" />
        {phoneError && (
          <p className="text-red-500 text-xs mt-1.5 font-medium">{phoneError}</p>
        )}
      </div>

      <p className="text-xs text-gray-400">
        Text messages are optional. You can use Benefits Auto Agent without signing up for texts.
      </p>

      {/* Marketing SMS opt-in */}
      <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
        <div className="flex items-start gap-3">
          <input type="checkbox" id="marketingOptIn" name="marketingOptIn" checked={formData.marketingOptIn}
            onChange={handleChange}
            className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded flex-shrink-0" />
          <label htmlFor="marketingOptIn" className="text-xs leading-relaxed text-gray-600">
            By checking this box, I agree to receive recurring marketing text messages from Benefits Auto Agent (Benefits Agent AI LLC) at the number provided, including auto insurance savings tips, coverage review reminders, rate comparison resources, and offers. Messages may be sent using an automated system. Message frequency varies (up to 4 msgs/week). Message and data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase. No mobile information will be shared with or sold to third parties or affiliates for marketing or promotional purposes. See our{' '}
            <Link href="/sms-terms" className="text-teal-600 underline">SMS Terms</Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-teal-600 underline">Privacy Policy</Link>.
          </label>
        </div>
      </div>

      {/* Account notifications SMS opt-in */}
      <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
        <div className="flex items-start gap-3">
          <input type="checkbox" id="accountOptIn" name="accountOptIn" checked={formData.accountOptIn}
            onChange={handleChange}
            className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded flex-shrink-0" />
          <label htmlFor="accountOptIn" className="text-xs leading-relaxed text-gray-600">
            By checking this box, I agree to receive account text messages from Benefits Auto Agent (Benefits Agent AI LLC), such as signup confirmations and responses to my requests. Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase. See our{' '}
            <Link href="/sms-terms" className="text-teal-600 underline">SMS Terms</Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-teal-600 underline">Privacy Policy</Link>.
          </label>
        </div>
      </div>

      {/* Terms */}
      <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
        <div className="flex items-start gap-3">
          <input type="checkbox" id="termsAccepted" name="termsAccepted" required checked={formData.termsAccepted}
            onChange={handleChange}
            className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded flex-shrink-0" />
          <label htmlFor="termsAccepted" className="text-xs leading-relaxed text-gray-600">
            I agree to the{' '}
            <Link href="/terms" className="text-teal-600 underline">Terms of Service</Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-teal-600 underline">Privacy Policy</Link>. *
          </label>
        </div>
      </div>

      <button type="submit"
        className="w-full py-4 text-sm font-semibold text-white rounded-2xl shadow-lg transition-all hover:opacity-90"
        style={{ background: 'linear-gradient(135deg, #0f766e, #0d9488)' }}>
        Sign Up
      </button>
    </form>
  );
}
