import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-bold mb-4">Benefits Auto Agent</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Practical ways to save on car insurance — savings tips, rate comparison resources, and optional text reminders to help you review your coverage. Operated by Benefits Agent AI LLC.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/tips" className="hover:text-white transition-colors">Savings Tips</Link></li>
              <li><Link href="/compare" className="hover:text-white transition-colors">Compare Rates</Link></li>
              <li><Link href="/signup" className="hover:text-white transition-colors">Get Text Tips</Link></li>
              <li><Link href="/sms" className="hover:text-white transition-colors">SMS Program</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/sms-terms" className="hover:text-white transition-colors">SMS Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:+13022080220" className="hover:text-white transition-colors">(302) 208-0220</a>
              </li>
              <li className="flex items-start gap-2">
                <span>📧</span>
                <a href="mailto:support@benefitsautoagent.com" className="hover:text-white transition-colors">support@benefitsautoagent.com</a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>#3040 1401 Pennsylvania Ave<br />Wilmington, DE 19806</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2026 Benefits Agent AI LLC. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/sms-terms" className="hover:text-white transition-colors">SMS Terms</Link>
            <Link href="/about" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
