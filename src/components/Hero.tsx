"use client";

import { motion } from "framer-motion";
import {
  Apple,
  ShieldCheck,
  Zap,
  Cloud,
  Smartphone,
} from "lucide-react";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-purple-50/40 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-7 z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/70 text-xs font-semibold text-[#7C3AED] shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Version 1.0 Live</span>
              <span className="text-purple-300">•</span>
              <span className="text-purple-700/80 font-normal">Offline-First Personal OS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-font text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]"
            >
              Your life, organized in one{" "}
              <span className="text-gradient-purple">calm command center.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed"
            >
              Stop switching between five different apps. Mistra unifies your{" "}
              <span className="text-slate-900 font-semibold">tasks</span>,{" "}
              <span className="text-slate-900 font-semibold">habits</span>,{" "}
              <span className="text-slate-900 font-semibold">notes</span>,{" "}
              <span className="text-slate-900 font-semibold">calendar</span>, and{" "}
              <span className="text-slate-900 font-semibold">goals</span> into a peaceful,
              lightning-fast daily workflow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
            >
              <a
                href="#download"
                className="px-6 py-3.5 rounded-xl font-semibold text-white bg-[#7C3AED] hover:bg-[#6D28D9] flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all group cursor-pointer"
              >
                <Smartphone className="w-5 h-5 text-purple-200" />
                <div className="text-left">
                  <div className="text-sm font-bold">Download for Android</div>
                  <div className="text-[11px] text-purple-200 font-normal">
                    Direct APK & Google Play · Free
                  </div>
                </div>
              </a>

              <a
                href="#download"
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-xs hover:shadow-sm flex items-center justify-center gap-3 group cursor-pointer transition-all"
              >
                <Apple className="w-5 h-5 text-slate-700" />
                <div className="text-left">
                  <div className="text-sm font-bold">Download for iOS</div>
                  <div className="text-[11px] text-slate-500 font-normal">
                    Apple TestFlight Beta · Free
                  </div>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-600"
            >
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#7C3AED]" />
                <span className="font-medium text-slate-700">0ms Offline SQLite</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-slate-700">Zero-Knowledge Privacy</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <Cloud className="w-4 h-4 text-indigo-600" />
                <span className="font-medium text-slate-700">Multi-Device Cloud Sync</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
