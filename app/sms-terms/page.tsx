import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function SmsTermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(94,234,212,0.4) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      <section className="pt-32 pb-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-teal-700 mb-8"
            style={{ background: 'rgba(94,234,212,0.2)', border: '1px solid rgba(94,234,212,0.4)' }}>
            <span>📱</span>
            SMS Terms
          </div>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-4">SMS Terms</h1>
          <p className="text-lg text-gray-500">Last Updated: November 10, 2026</p>
        </div>
      </section>

      <section className="py-12 px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto space-y-10">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Description</h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>Benefits Auto Agent Savings Texts</strong> is a text messaging program operated by Benefits Agent AI LLC. The program sends auto insurance savings tips, coverage review reminders, rate comparison resources, offers, and account-related messages to users who opt in on our signup page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Types</h2>
            <p className="text-gray-600 leading-relaxed mb-4">This program sends two types of messages, depending on which boxes you check at signup:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Marketing:</strong> auto insurance savings tips, coverage review reminders, rate comparison resources, and offers.</li>
              <li><strong>Account:</strong> signup confirmations and responses to your requests.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Opt In</h2>
            <p className="text-gray-600 leading-relaxed">
              You opt in by checking one or both SMS checkboxes on our <Link href="/signup" className="text-teal-600 underline">signup page</Link>. The marketing checkbox and the account checkbox are each optional and unchecked by default — you choose which, if any, to check. Consent to receive text messages is not a condition of purchase.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequency</h2>
            <p className="text-gray-600 leading-relaxed">
              Message frequency varies, up to 4 messages per week.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Rates</h2>
            <p className="text-gray-600 leading-relaxed">
              Message and data rates may apply depending on your mobile carrier and plan. Benefits Agent AI LLC is not responsible for any charges incurred from your mobile carrier.
            </p>
          </div>


          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Opt Out</h2>
            <p className="text-gray-600 leading-relaxed">
              You may opt out of text messages at any time by replying <strong>STOP</strong>, <strong>STOPALL</strong>, <strong>UNSUBSCRIBE</strong>, <strong>CANCEL</strong>, <strong>END</strong>, or <strong>QUIT</strong> to any message you receive from us. We will send one confirmation message that you have been unsubscribed, and you will receive no further messages unless you opt back in. To resubscribe, text <strong>START</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Help</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For help with text messages, reply <strong>HELP</strong> to any message or contact us at:
            </p>
            <div className="glass-card p-6">
              <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:support@benefitsautoagent.com" className="text-teal-600 hover:underline">support@benefitsautoagent.com</a></p>
              <p className="text-gray-600"><strong>Phone:</strong> <a href="tel:+13022080220" className="text-teal-600 hover:underline">(302) 208-0220</a></p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Carrier Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              Carriers are not liable for delayed or undelivered messages. Delivery of text messages is subject to your mobile carrier&apos;s network availability and coverage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h2>
            <div className="p-4 rounded-xl" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)' }}>
              <p className="text-sm font-bold text-red-800 mb-1">No Mobile Data Sharing</p>
              <p className="text-sm text-red-700">
                <strong>No mobile information will be shared with or sold to third parties or affiliates for marketing or promotional purposes.</strong> Your phone number and SMS opt-in status are used solely to deliver the text messages described in these Terms and our{' '}
                <Link href="/privacy" className="underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>


          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sample Messages</h2>
            <div className="space-y-3">
              <div className="glass-card p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Account</p>
                <p className="text-sm text-gray-700">Benefits Auto Agent: You&apos;re signed up. Reply HELP for help, STOP to opt out.</p>
              </div>
              <div className="glass-card p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Marketing</p>
                <p className="text-sm text-gray-700">Benefits Auto Agent: Ask your insurer about bundling home and auto coverage. Reply HELP for help, STOP to opt out.</p>
              </div>
              <div className="glass-card p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Marketing</p>
                <p className="text-sm text-gray-700">Benefits Auto Agent: Your policy may be up for renewal soon. Compare quotes using our checklist at benefitsautoagent.com/compare. Reply STOP to opt out.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <div className="glass-card p-6">
              <p className="text-gray-600 mb-2"><strong>Benefits Agent AI LLC</strong></p>
              <p className="text-gray-600 mb-2">#3040 1401 Pennsylvania Ave, Wilmington, DE 19806</p>
              <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:support@benefitsautoagent.com" className="text-teal-600 hover:underline">support@benefitsautoagent.com</a></p>
              <p className="text-gray-600"><strong>Phone:</strong> <a href="tel:+13022080220" className="text-teal-600 hover:underline">(302) 208-0220</a></p>
            </div>
          </div>

          <div className="pt-4 flex gap-6">
            <Link href="/privacy" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700">
              ← Privacy Policy
            </Link>
            <Link href="/terms" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700">
              Terms of Service →
            </Link>
            <Link href="/sms" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700">
              SMS Program Summary →
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
