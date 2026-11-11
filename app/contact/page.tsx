import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Benefits Auto Agent',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(94,234,212,0.4) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] blob opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 text-center relative" style={{ zIndex: 1 }}>
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-teal-700 mb-6"
            style={{ background: 'rgba(94,234,212,0.2)', border: '1px solid rgba(94,234,212,0.4)' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            Contact
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Get in touch
          </h1>
          <p className="text-lg text-gray-500">
            Questions about savings tips, rate comparisons, or our text program? We typically respond within 1–2 business days.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">

          {/* Contact details */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Details</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Legal Name</p>
                  <p className="text-gray-700 font-medium">Benefits Agent AI LLC</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Address</p>
                  <p className="text-gray-700 font-medium">#3040 1401 Pennsylvania Ave<br />Wilmington, DE 19806</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:+13022080220" className="text-teal-700 font-medium hover:underline">(302) 208-0220</a>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:support@benefitsautoagent.com" className="text-teal-700 font-medium hover:underline">support@benefitsautoagent.com</a>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Response Time</p>
                  <p className="text-gray-700 font-medium">1–2 business days</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl" style={{ background: 'rgba(94,234,212,0.1)', border: '1px solid rgba(94,234,212,0.3)' }}>
              <h3 className="text-sm font-bold text-teal-800 mb-2">Text Message Help</h3>
              <p className="text-sm text-teal-800 leading-relaxed">
                Reply <strong>STOP</strong> to opt out, <strong>START</strong> to resubscribe, <strong>HELP</strong> for help. Message frequency varies. Message and data rates may apply. Consent is not a condition of purchase. See our{' '}
                <Link href="/sms-terms" className="underline">SMS Terms</Link>.
              </p>
            </div>
          </div>

          {/* Form */}
          <ContactForm />

        </div>
      </section>

      <Footer />
    </div>
  );
}
