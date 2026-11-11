import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compare Rates — Benefits Auto Agent',
};

const CHECKLIST = [
  { title: 'Same coverage limits', desc: 'Make sure each quote lists the same liability, collision, and comprehensive limits so you are comparing like for like.' },
  { title: 'Same deductibles', desc: 'A lower quote may come with a higher deductible. Confirm the deductible amount on every quote.' },
  { title: 'Discounts applied', desc: 'Ask each insurer which discounts you qualify for — bundling, safe driver, multi-car, telematics, and others.' },
  { title: 'Insurer ratings', desc: 'Check the insurer\'s financial strength and customer service ratings from independent rating agencies.' },
  { title: 'Renewal dates', desc: 'Note when your current policy renews, since switching mid-term may involve fees or refunds.' },
];

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.3) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] blob opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-cyan-700 mb-6"
            style={{ background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.3)' }}>
            <span>📋</span> Rate Comparison Checklist
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Compare quotes
            <br /><span className="gradient-text-blue">the right way.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            A step-by-step checklist to help you compare auto insurance quotes apples to apples, plus a printable comparison table template.
          </p>
          <div className="mt-8 p-4 rounded-2xl inline-block" style={{ background: 'rgba(8,145,178,0.08)' }}>
            <p className="text-sm text-gray-700 font-medium">
              Benefits Auto Agent does not provide quotes. Contact insurers or licensed agents directly.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">The checklist</h2>
          <div className="space-y-4">
            {CHECKLIST.map((item, i) => (
              <div key={item.title} className="flex items-start gap-6 p-6 glass-card">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #0891b2, #0f766e)' }}>
                  {i + 1}
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Printable comparison table */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Printable comparison table template</h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">Print this table and fill it in as you collect quotes from different insurers.</p>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-3 font-semibold text-gray-700">Item</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Insurer A</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Insurer B</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Insurer C</th>
                </tr>
              </thead>
              <tbody>
                {['Liability limits', 'Collision deductible', 'Comprehensive deductible', 'Discounts applied', 'Insurer rating', 'Monthly premium', 'Renewal date'].map(row => (
                  <tr key={row} className="border-b border-gray-100">
                    <td className="p-3 font-medium text-gray-700">{row}</td>
                    <td className="p-3 text-gray-400">&nbsp;</td>
                    <td className="p-3 text-gray-400">&nbsp;</td>
                    <td className="p-3 text-gray-400">&nbsp;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Neutral resources */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Public resources</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://content.naic.org/" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-semibold text-gray-700 rounded-xl glass-button">
              NAIC consumer information
            </a>
            <a href="https://content.naic.org/state-insurance-departments" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-semibold text-gray-700 rounded-xl glass-button">
              Find your state insurance department
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Want tips and reminders by text?</h2>
          <p className="text-lg text-gray-500 mb-8">
            Sign up for optional text reminders to review your coverage before renewal.
          </p>
          <Link href="/signup"
            className="inline-flex items-center gap-2 px-10 py-5 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all"
            style={{ background: 'linear-gradient(135deg, #0891b2, #0f766e)' }}>
            Get savings tips by text
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
