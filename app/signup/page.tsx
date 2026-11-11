import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SignupForm from './SignupForm';

export const metadata: Metadata = {
  title: 'Get Text Tips — Benefits Auto Agent',
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] blob opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(94,234,212,0.4) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-10 px-6 text-center relative" style={{ zIndex: 1 }}>
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-teal-700 mb-6"
            style={{ background: 'rgba(94,234,212,0.2)', border: '1px solid rgba(94,234,212,0.4)' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            Benefits Auto Agent
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Get savings tips and resources
          </h1>
          <p className="text-lg text-gray-500">
            Sign up for optional text tips and reminders. Our savings guide and rate comparison checklist are always available on this site.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-lg mx-auto px-6 py-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="glass-card p-8 md:p-10">
          <SignupForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
