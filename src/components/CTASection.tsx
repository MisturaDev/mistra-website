"use client";

import { motion } from "framer-motion";
import { Smartphone, Apple, Sparkles, Zap, ShieldCheck } from "lucide-react";

export default function CTASection() {
  const androidDownloadUrl = "https://play.google.com/store/apps/details?id=com.mistra.app";
  const iosDownloadUrl = "https://testflight.apple.com/join/mistra-beta";

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[36px] bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white p-8 sm:p-12 lg:p-16 overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-xs font-semibold text-purple-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-300" />
              <span>Version 1.0 Ready for Download</span>
            </motion.div>

            <h2 className="heading-font text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready for a calmer, more focused workflow?
            </h2>

            <p className="text-base sm:text-lg text-purple-200/90 max-w-xl mx-auto font-normal">
              Download Mistra today. Experience instant offline speed, unified productivity, and clean design. Free core forever.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={androidDownloadUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white text-slate-950 font-bold hover:bg-purple-50 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl group cursor-pointer"
              >
                <Smartphone className="w-5 h-5 text-[#7C3AED]" />
                <div className="text-left">
                  <div className="text-xs uppercase font-mono text-slate-500 font-semibold leading-none">
                    Download for
                  </div>
                  <div className="text-sm font-bold text-slate-950">Android APK / Play</div>
                </div>
              </a>

              <a
                href={iosDownloadUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-purple-900/60 hover:bg-purple-900/90 text-white font-bold border border-purple-400/40 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl group cursor-pointer"
              >
                <Apple className="w-5 h-5 text-white" />
                <div className="text-left">
                  <div className="text-xs uppercase font-mono text-purple-300 font-semibold leading-none">
                    Install with
                  </div>
                  <div className="text-sm font-bold text-white">iOS TestFlight Beta</div>
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
