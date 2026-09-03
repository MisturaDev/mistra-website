"use client";

import { Zap, ShieldCheck } from "lucide-react";

export default function CTASection() {
  const androidDownloadUrl = "https://play.google.com/store/apps/details?id=com.mistra.app";
  const iosDownloadUrl = "https://apps.apple.com/app/mistra/id6470000000";

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[36px] bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white p-8 sm:p-12 lg:p-16 overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <h2 className="heading-font text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready for a calmer, more focused workflow?
            </h2>

            <p className="text-base sm:text-lg text-purple-200/90 max-w-xl mx-auto font-normal">
              Download Mistra today. Experience instant offline speed, unified productivity, and clean design. Free core forever.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={iosDownloadUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-black hover:bg-neutral-900 text-white font-bold border border-neutral-700 transition-all flex items-center justify-center gap-3.5 shadow-lg hover:shadow-xl group cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white shrink-0">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-.99 1.7-.87 2.73.99.08 2.02-.48 2.57-1.23z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-mono text-neutral-400 font-medium leading-none">
                    Download on the
                  </p>
                  <p className="text-base font-bold text-white mt-0.5 leading-tight">App Store</p>
                </div>
              </a>

              <a
                href={androidDownloadUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-black hover:bg-neutral-900 text-white font-bold border border-neutral-700 transition-all flex items-center justify-center gap-3.5 shadow-lg hover:shadow-xl group cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                  <path fill="#4285F4" d="M3.6 1.8c-.4.4-.6 1-.6 1.8v16.8c0 .8.2 1.4.6 1.8l9.4-9.4L3.6 1.8z" />
                  <path fill="#FBBC04" d="M16.6 9.6l-3.6 3.6 3.6 3.6 4.2-2.4c1.2-.7 1.2-1.7 0-2.4l-4.2-2.4z" />
                  <path fill="#34A853" d="M3.6 22.2c.4.2.9.2 1.4-.1l11.6-6.7-3.6-3.6-9.4 10.4z" />
                  <path fill="#EA4335" d="M16.6 8.6L5 1.9C4.5 1.6 4 1.6 3.6 1.8l9.4 10.4 3.6-3.6z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-mono text-neutral-400 font-medium leading-none">
                    GET IT ON
                  </p>
                  <p className="text-base font-bold text-white mt-0.5 leading-tight">Google Play</p>
                </div>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-purple-300/80">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>No Credit Card Required</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Offline SQLite Core</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
