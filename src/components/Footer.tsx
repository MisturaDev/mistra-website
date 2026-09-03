import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#FAFAFC] pt-16 pb-12 relative overflow-hidden text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Info with Authentic Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-slate-200 bg-white flex items-center justify-center p-1 shadow-xs">
                <Image
                  src="/icon.png"
                  alt="Mistra Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="heading-font text-xl font-bold tracking-tight text-slate-900">
                Mistra <span className="text-xs font-mono font-normal text-[#7C3AED]">OS</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
              The personal operating system designed to bring calm, clarity, and organization to your daily life.
            </p>

            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800 font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Column: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#features" className="hover:text-slate-900 transition-colors">
                  5 Core Pillars
                </a>
              </li>
              <li>
                <a href="#why-mistra" className="hover:text-slate-900 transition-colors">
                  Why Mistra
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-slate-900 transition-colors">
                  Download Mobile App
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-slate-900 transition-colors">
                  Pricing & Pro Tier
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-slate-900 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Platforms */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              Platforms
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-slate-900 font-semibold">Android (Live)</span>
              </li>
              <li>
                <span className="text-slate-600">iOS (TestFlight & Waitlist)</span>
              </li>
              <li>
                <span className="text-slate-500">macOS Desktop (Coming Soon)</span>
              </li>
              <li>
                <span className="text-slate-500">Windows Desktop (Coming Soon)</span>
              </li>
              <li>
                <span className="text-slate-500">Web App (Coming Soon)</span>
              </li>
            </ul>
          </div>

          {/* Column: Trust & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              Trust & Privacy
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#faq" className="hover:text-slate-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-slate-900 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-slate-900 transition-colors">
                  Zero-Knowledge Security
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-slate-900 transition-colors">
                  Data Ownership & Export
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            © 2026 Mistra Systems, Inc. All rights reserved. Crafted for calm, organized living.
          </p>

          <div className="flex items-center gap-3 text-slate-500">
            {/* GitHub SVG */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white border border-slate-200 hover:text-slate-900 hover:border-slate-300 transition-all shadow-2xs"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* X / Twitter SVG */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white border border-slate-200 hover:text-slate-900 hover:border-slate-300 transition-all shadow-2xs"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Discord SVG */}
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white border border-slate-200 hover:text-slate-900 hover:border-slate-300 transition-all shadow-2xs"
              aria-label="Discord"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
