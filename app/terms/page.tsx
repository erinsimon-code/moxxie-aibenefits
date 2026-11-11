import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Benefits Auto Agent',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.4) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      <section className="pt-32 pb-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-blue-700 mb-8"
            style={{ background: 'rgba(147,197,253,0.2)', border: '1px solid rgba(147,197,253,0.4)' }}>
            <span>📋</span>
            Terms of Service
          </div>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-500">Last Updated: October 29, 2026</p>
        </div>
      </section>

      <section className="py-12 px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto space-y-10">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using the Benefits Auto Agent website (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              These Terms apply to all users of the Service, including individuals reading our savings tips, using our rate comparison resources, or signing up for our optional text program.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 leading-relaxed">
              Benefits Auto Agent is an auto insurance savings resource. We provide plain-language savings tips, rate comparison checklists, and an optional text program with savings tips, coverage review reminders, and offers. Our content is informational in nature. We are not an insurance company, agent, or broker, and we do not sell insurance, provide quotes, or guarantee savings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Informational Nature of Content</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our content is provided for informational and educational purposes. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Our content does not constitute legal, financial, or insurance advice</li>
              <li>Final decisions regarding insurance coverage and purchases are yours alone</li>
              <li>We do not guarantee specific outcomes, savings, or results from following our tips</li>
              <li>Insurance rates and discount eligibility vary by driver, insurer, and state</li>
              <li>You should contact your insurer or a licensed agent to confirm whether a tip or discount applies to you</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Account Registration</h2>
            <p className="text-gray-600 leading-relaxed">
              To access certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must be at least 18 years old to use the Service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. SMS Communications</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              By providing your phone number and checking an SMS opt-in box on our signup page, you expressly consent to receive <strong>marketing messages</strong> (savings tips, coverage review reminders, rate comparison resources, and offers) and/or <strong>account messages</strong> (signup confirmations and responses to your requests) from Benefits Auto Agent, depending on which box or boxes you check. These messages may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Signup confirmations</li>
              <li>Auto insurance savings tips</li>
              <li>Coverage review reminders</li>
              <li>Rate comparison resources and offers</li>
              <li>Responses to your requests</li>
            </ul>
            <div className="mt-4 p-4 rounded-xl" style={{ background: 'rgba(30,64,175,0.06)', border: '1px solid rgba(30,64,175,0.15)' }}>
              <p className="text-sm text-blue-800 font-semibold mb-2">Important SMS Disclosures:</p>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• <strong>Message and data rates may apply.</strong></li>
                <li>• Message frequency varies (up to 4 msgs/week).</li>
                <li>• To opt out at any time, reply <strong>STOP</strong> to any message.</li>
                <li>• For help, reply <strong>HELP</strong> or contact <a href="mailto:support@benefitsautoagent.com" className="underline">support@benefitsautoagent.com</a>.</li>
                <li>• Opting in to SMS is optional and not required to use the Service. Consent is not a condition of purchase.</li>
                <li>• <strong>No mobile information will be shared with or sold to third parties or affiliates for marketing or promotional purposes.</strong> Text messaging originator opt-in data and consent will not be shared with any third parties. All the above categories exclude text messaging originator opt-in data and consent.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Acceptable Use</h2>
            <p className="text-gray-600 leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Use the Service for any unlawful purpose or in violation of these Terms</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Submit false or misleading information</li>
              <li>Interfere with or disrupt the integrity or performance of the Service</li>
              <li>Use the Service to harass, abuse, or harm others</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              The Service and its original content, features, and functionality are owned by Benefits Auto Agent and are protected by applicable intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the Service without our express written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-gray-600 leading-relaxed">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. BENEFITS AGENT AI LLC DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              The savings tips and rate comparison resources provided through the Service are for general informational purposes only and should not be relied upon as the sole basis for making insurance decisions. Rates and savings vary by driver, insurer, and state.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, BENEFITS AGENT AI LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE OR RELIANCE ON OUR SAVINGS TIPS OR RATE COMPARISON RESOURCES.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Your use of the Service is also governed by our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding your personal information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to suspend or terminate your access to the Service at any time for violation of these Terms or for any other reason at our discretion. You may also terminate your account at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update these Terms from time to time. We will notify you of any material changes by posting the new Terms on this page and updating the &quot;Last Updated&quot; date. Your continued use of the Service after any changes constitutes your acceptance of the new Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Us</h2>
            <div className="glass-card p-6">
              <p className="text-gray-600 mb-2">If you have questions about these Terms, please contact us:</p>
              <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:support@benefitsautoagent.com" className="text-blue-600 hover:underline">support@benefitsautoagent.com</a></p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> <a href="tel:+13022080220" className="text-blue-600 hover:underline">(302) 208-0220</a></p>
              <p className="text-gray-600"><strong>Address:</strong> #3040 1401 Pennsylvania Ave, Wilmington, DE 19806</p>
            </div>
          </div>

          <div className="pt-4">
            <Link href="/privacy" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
              ← View Privacy Policy
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
