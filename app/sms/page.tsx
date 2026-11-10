import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

const ROWS: [string, React.ReactNode][] = [
  ['Program Name', 'Benefits Auto Agent Savings Texts'],
  ['Sender', 'Benefits Agent AI LLC, doing business as Benefits Auto Agent'],
  ['Use Case', 'Mixed — marketing messages and account notifications'],
  ['Message Types', 'Marketing: savings tips, coverage review reminders, rate comparison resources, offers. Account: signup confirmations, responses to requests.'],
  ['Who Receives Messages', <>People who opt in on our <Link href="/signup" className="text-teal-600 underline">signup page</Link>.</>],
  ['How to Opt In', 'Checking the marketing and/or account SMS checkbox on the signup page. Each checkbox is optional and unchecked by default.'],
  ['Frequency', 'Varies, up to 4 messages per week.'],
  ['Cost', 'Message and data rates may apply.'],
  ['Opt Out', 'Reply STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, or QUIT. One confirmation message is sent.'],
  ['Resubscribe', 'Reply START.'],
  ['Help', <>Reply HELP, email <a href="mailto:support@benefitsautoagent.com" className="text-teal-600 underline">support@benefitsautoagent.com</a>, or call <a href="tel:+13022080220" className="text-teal-600 underline">(302) 208-0220</a>.</>],
  ['Consent', 'Consent to receive text messages is not a condition of purchase.'],
  ['Data Sharing', 'No mobile information will be shared with or sold to third parties or affiliates for marketing or promotional purposes.'],
];

const SAMPLES = [
  'Benefits Auto Agent: You\u2019re signed up. Reply HELP for help, STOP to opt out.',
  'Benefits Auto Agent: Ask your insurer about bundling home and auto coverage. Reply HELP for help, STOP to opt out.',
  'Benefits Auto Agent: Your policy may be up for renewal soon. Compare quotes using our checklist at benefitsautoagent.com/compare. Reply STOP to opt out.',
];

export default function SmsSummaryPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(94,234,212,0.4) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      <section className="pt-32 pb-12 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-teal-700 mb-6"
            style={{ background: 'rgba(94,234,212,0.2)', border: '1px solid rgba(94,234,212,0.4)' }}>
            <span>📱</span> SMS Program Summary
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Benefits Auto Agent Savings Texts
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A one-screen summary of our SMS program for carrier and platform review.
          </p>
        </div>
      </section>

      <section className="px-6 pb-12 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {ROWS.map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-black/[0.015]' : ''}>
                    <td className="p-4 font-semibold text-gray-700 align-top w-48 border-r border-gray-100">{label}</td>
                    <td className="p-4 text-gray-600 leading-relaxed">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Messages</h2>
          <div className="space-y-3 mb-10">
            {SAMPLES.map(sample => (
              <div key={sample} className="glass-card p-4">
                <p className="text-sm text-gray-700">{sample}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/sms-terms" className="text-sm font-semibold text-teal-600 hover:text-teal-700 underline">
              Full SMS Terms
            </Link>
            <Link href="/privacy" className="text-sm font-semibold text-teal-600 hover:text-teal-700 underline">
              Privacy Policy
            </Link>
            <Link href="/signup" className="text-sm font-semibold text-teal-600 hover:text-teal-700 underline">
              Signup Page
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
