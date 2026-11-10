import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function AboutPage() {
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
            About Us
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            An auto insurance
            <br /><span className="gradient-text-blue">savings resource.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Benefits Auto Agent is an auto insurance savings resource, operated by Benefits Agent AI LLC. We help drivers save on car insurance with plain-language tips, comparison resources, and optional text reminders.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-teal-600">✓</span> What Benefits Auto Agent IS
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 mt-1">•</span>
                  <p className="text-gray-600 leading-relaxed">Plain-language savings tips — discounts to ask about, how deductibles and coverage levels affect price, and when to shop around.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 mt-1">•</span>
                  <p className="text-gray-600 leading-relaxed">Rate comparison resources and checklists for comparing quotes from insurers.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 mt-1">•</span>
                  <p className="text-gray-600 leading-relaxed">Optional text messages with savings tips, coverage review reminders, and relevant offers.</p>
                </li>
              </ul>
            </div>
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-red-500">✕</span> What Benefits Auto Agent IS NOT
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <p className="text-gray-600 leading-relaxed">An insurance company, agent, or broker.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <p className="text-gray-600 leading-relaxed">A quote provider — we do not sell insurance or give quotes ourselves.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <p className="text-gray-600 leading-relaxed">A guarantee of savings — rates and savings vary by driver, insurer, and state.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <p className="text-gray-600 leading-relaxed">A seller of your data — no mobile information is shared with or sold to third parties for marketing purposes.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Contact */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contact</h2>
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Legal Name</p>
                <p className="text-gray-700 font-medium">Benefits Agent AI LLC</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Address</p>
                <p className="text-gray-700 font-medium">#3040 1401 Pennsylvania Ave<br />Wilmington, DE 19806</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Phone</p>
                <a href="tel:+13022080220" className="text-teal-700 font-medium hover:underline">(302) 208-0220</a>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email</p>
                <a href="mailto:support@benefitsautoagent.com" className="text-teal-700 font-medium hover:underline">support@benefitsautoagent.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to start saving?</h2>
          <p className="text-lg text-gray-500 mb-8">
            Sign up for optional savings tips by text, or read the savings guide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup"
              className="px-8 py-4 text-sm font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #0f766e, #0d9488)' }}>
              Get savings tips by text
            </Link>
            <Link href="/tips"
              className="px-8 py-4 text-sm font-semibold text-gray-700 rounded-2xl glass-button">
              Read the savings guide
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
