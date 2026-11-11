import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Savings Tips — Benefits Auto Agent',
};

const TIPS = [
  {
    icon: '🔗',
    title: 'Bundle your policies',
    desc: 'Combining auto insurance with home or renters insurance under the same insurer can lower your overall cost.',
  },
  {
    icon: '🚗',
    title: 'Ask about multi-car discounts',
    desc: 'Insuring more than one vehicle with the same insurer may qualify your household for a discount.',
  },
  {
    icon: '📊',
    title: 'Consider raising your deductible',
    desc: 'A higher deductible usually lowers your premium, but means you pay more out of pocket if you file a claim.',
  },
  {
    icon: '🛣️',
    title: 'Ask about safe-driver and low-mileage discounts',
    desc: 'A clean driving record or driving fewer miles per year may qualify you for lower rates.',
  },
  {
    icon: '📱',
    title: 'Look into telematics programs',
    desc: 'Some insurers offer usage-based or telematics programs that track driving habits in exchange for potential discounts.',
  },
  {
    icon: '💳',
    title: 'Ask about paying in full',
    desc: 'Paying your premium in full instead of in installments may reduce fees or qualify you for a discount.',
  },
  {
    icon: '🚙',
    title: 'Review coverage on older cars',
    desc: 'As a car ages, the cost to repair or replace it may no longer justify certain coverage levels, like collision or comprehensive.',
  },
  {
    icon: '🔄',
    title: 'Shop around at renewal',
    desc: 'Rates can change from year to year, even with the same insurer. Comparing quotes at renewal time can reveal better options.',
  },
  {
    icon: '✅',
    title: 'Keep a clean driving record',
    desc: 'Avoiding accidents and violations over time can help you qualify for better rates.',
  },
  {
    icon: '🎓',
    title: 'Ask about student, military, or professional discounts',
    desc: 'Good student discounts, military service discounts, and affiliations with certain professional or alumni groups may lower your rate.',
  },
];

export default function TipsPage() {
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
      <section className="pt-32 pb-16 px-6 text-center relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-teal-700 mb-6"
            style={{ background: 'rgba(94,234,212,0.2)', border: '1px solid rgba(94,234,212,0.4)' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            Savings Guide
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Ways to save on
            <br /><span className="gradient-text-blue">car insurance.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            General, plain-language tips to help you have a more informed conversation with your insurer. Savings vary by driver, insurer, and state.
          </p>
        </div>
      </section>

      {/* Tips grid */}
      <section className="py-12 px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {TIPS.map(tip => (
              <div key={tip.title} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{tip.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">{tip.desc}</p>
                    <p className="text-xs text-gray-400 italic">Ask your insurer whether this applies to you.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to compare quotes?</h2>
          <p className="text-lg text-gray-500 mb-8">
            Use our rate comparison checklist to compare quotes from insurers, or sign up for optional text reminders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/compare"
              className="px-8 py-4 text-sm font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #0f766e, #0d9488)' }}>
              Compare rates checklist
            </Link>
            <Link href="/signup"
              className="px-8 py-4 text-sm font-semibold text-gray-700 rounded-2xl glass-button">
              Get savings tips by text
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
