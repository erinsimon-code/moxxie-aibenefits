'use client';

import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';

const TIPS_PREVIEW = [
  { icon: '🔗', title: 'Bundle your policies', desc: 'Combining auto with home or renters coverage can lower your overall cost. Ask your insurer whether this applies to you.' },
  { icon: '📊', title: 'Raise your deductible', desc: 'A higher deductible usually means a lower premium. Ask your insurer whether this applies to you.' },
  { icon: '🚘', title: 'Ask about safe-driver discounts', desc: 'Clean driving records often qualify for lower rates. Ask your insurer whether this applies to you.' },
  { icon: '📅', title: 'Shop around at renewal', desc: 'Rates change year to year, even with the same insurer. Ask your insurer whether this applies to you.' },
];

const HOW_IT_WORKS = [
  { num: '1', title: 'Sign up and choose text tips (optional)', desc: 'Create a free account. Choose whether you want to receive text messages — it is entirely optional.' },
  { num: '2', title: 'Get tips and reminders to review your policy', desc: 'Receive plain-language savings tips and reminders to check your current coverage.' },
  { num: '3', title: 'Compare quotes from insurers using our checklist', desc: 'Use our checklist to compare quotes on your own terms — same coverage, same deductibles, apples to apples.' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* BACKGROUND GRADIENT BLOBS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] blob opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(94,234,212,0.4) 0%, rgba(13,148,136,0.15) 50%, transparent 70%)' }} />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, rgba(245,158,11,0.1) 50%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] blob opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(196,181,253,0.3) 0%, rgba(167,139,250,0.1) 50%, transparent 70%)' }} />
      </div>

      {/* NAVIGATION */}
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-teal-700 mb-8"
              style={{ background: 'rgba(94,234,212,0.2)', border: '1px solid rgba(94,234,212,0.4)' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              Auto Insurance Savings Resource
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
              Benefits Auto Agent: practical ways to
              <br /><span className="gradient-text-blue">save on car insurance.</span>
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
              Savings tips, rate comparison checklists, and optional text reminders to help you review your coverage and compare insurers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/signup"
                className="px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 hover:-translate-y-0.5 transition-all"
                style={{ background: 'linear-gradient(135deg, #0f766e, #0d9488)' }}>
                Get savings tips by text
              </Link>
              <Link href="/tips"
                className="px-8 py-4 text-base font-semibold text-gray-700 rounded-2xl glass-button">
                Read the savings guide
              </Link>
            </div>
          </div>


          {/* AT A GLANCE */}
          <div className="glass-card p-8 md:p-10 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">At a glance</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <p className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-2">What it is</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Benefits Auto Agent is an auto insurance savings resource, operated by Benefits Agent AI LLC. We help drivers understand how to save on car insurance.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-2">How it works</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Read plain-language tips, use our rate comparison checklist, and optionally sign up for text reminders to review your coverage.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-2">Text messages</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Optional. Savings tips, coverage reminders, and offers. Reply STOP anytime.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Benefits Auto Agent is not an insurance company, agent, or broker. We do not sell insurance, give quotes ourselves, or guarantee savings. Rates and savings vary by driver, insurer, and state.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <Link href="/about" className="text-teal-700 hover:text-teal-900 underline">Learn more about us</Link>
                <Link href="/sms" className="text-teal-700 hover:text-teal-900 underline">View our SMS program</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* TIP PREVIEW CARDS */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">A few ways to start saving</h2>
            <p className="text-lg text-gray-500">Plain-language tips you can act on today.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIPS_PREVIEW.map(tip => (
              <Link key={tip.title} href="/tips" className="glass-card p-6 block">
                <div className="text-3xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{tip.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/tips" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900">
              See all savings tips
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">How it works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="glass-card p-6 h-full">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white mb-4"
                    style={{ background: 'linear-gradient(135deg, #0f766e, #0d9488)' }}>
                    {step.num}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="py-24 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center"
            style={{ background: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 30%, #e0f2fe 60%, #f0f9ff 100%)' }}>
            <div className="absolute top-0 left-0 w-64 h-64 blob opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(94,234,212,0.5) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 right-0 w-64 h-64 blob opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.4) 0%, transparent 70%)' }} />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Ready to start saving
                <br />on car insurance?
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Sign up for optional text tips and reminders, or jump straight into the savings guide and rate comparison checklist.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/signup"
                  className="px-10 py-4 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 hover:-translate-y-0.5 transition-all"
                  style={{ background: 'linear-gradient(135deg, #0f766e, #0d9488)' }}>
                  Get savings tips by text
                </Link>
                <Link href="/compare"
                  className="px-10 py-4 text-base font-semibold text-gray-700 rounded-2xl glass-button">
                  Compare rates checklist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
