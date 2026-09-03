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
    <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden bg-gradient-to-b from-purple-50/40 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 z-10">
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
                className="px-6 py-3.5 rounded-xl font-semibold text-white bg-slate-950 hover:bg-slate-900 border border-slate-800 flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all group cursor-pointer"
              >
                <Apple className="w-5 h-5 text-white" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider leading-none">
                    Download on the
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">App Store</div>
                </div>
              </a>

              <a
                href="#download"
                className="px-6 py-3.5 rounded-xl font-semibold text-white bg-[#7C3AED] hover:bg-[#6D28D9] flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all group cursor-pointer"
              >
                <Smartphone className="w-5 h-5 text-purple-200" />
                <div className="text-left">
                  <div className="text-[10px] text-purple-200 font-medium uppercase tracking-wider leading-none">
                    Get it on
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">Google Play</div>
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
