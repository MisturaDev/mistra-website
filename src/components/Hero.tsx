"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Cloud,
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
              {/* App Store Button */}
              <a
                href="#download"
                className="px-5 py-3 rounded-2xl font-semibold text-white bg-black hover:bg-neutral-900 border border-neutral-800 flex items-center justify-center sm:justify-start gap-3 shadow-md hover:shadow-lg transition-all group cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-.99 1.7-.87 2.73.99.08 2.02-.48 2.57-1.23z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-neutral-400 font-mono font-medium uppercase tracking-wider leading-none">
                    Download on the
                  </p>
                  <p className="text-base font-bold text-white mt-0.5 leading-tight">App Store</p>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="#download"
                className="px-5 py-3 rounded-2xl font-semibold text-white bg-black hover:bg-neutral-900 border border-neutral-800 flex items-center justify-center sm:justify-start gap-3 shadow-md hover:shadow-lg transition-all group cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
                  <path fill="#4285F4" d="M3.6 1.8c-.4.4-.6 1-.6 1.8v16.8c0 .8.2 1.4.6 1.8l9.4-9.4L3.6 1.8z" />
                  <path fill="#FBBC04" d="M16.6 9.6l-3.6 3.6 3.6 3.6 4.2-2.4c1.2-.7 1.2-1.7 0-2.4l-4.2-2.4z" />
                  <path fill="#34A853" d="M3.6 22.2c.4.2.9.2 1.4-.1l11.6-6.7-3.6-3.6-9.4 10.4z" />
                  <path fill="#EA4335" d="M16.6 8.6L5 1.9C4.5 1.6 4 1.6 3.6 1.8l9.4 10.4 3.6-3.6z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-neutral-400 font-mono font-medium uppercase tracking-wider leading-none">
                    GET IT ON
                  </p>
                  <p className="text-base font-bold text-white mt-0.5 leading-tight">Google Play</p>
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
