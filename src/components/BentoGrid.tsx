"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Moon,
  Flame,
  RefreshCw,
  Sparkles,
  Lock,
  Database,
} from "lucide-react";

export default function BentoGrid() {
  return (
    <section id="craftsmanship" className="py-24 bg-[#FAF9FD] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-100/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/70 text-xs font-semibold text-[#7C3AED] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineered for Flow</span>
          </div>
          <h2 className="heading-font text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Crafted for Uninterrupted Focus.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            No lag, no invasive trackers, no subscription traps. Just a lightning-fast personal operating system built from the ground up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between group hover:border-purple-300 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#7C3AED]">
                  <Database className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  0ms Read / Write
                </span>
              </div>
              <h3 className="heading-font text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                100% Offline-First SQLite Architecture
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Mistra writes directly to your local device database first. The app launches instantly in sub-second time, opens in airplane mode, and never leaves you staring at loading spinners.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 text-[10px] pb-2 mb-2 border-b border-slate-800">
                <span>LOCAL_STORAGE_ENGINE.sqlite</span>
                <span className="text-emerald-400">STATUS: HOT_STANDBY (0ms)</span>
              </div>
              <div className="text-purple-300">
                <span className="text-pink-400">const</span> habit = <span className="text-pink-400">await</span> db.exec(
                <span className="text-emerald-300">&quot;UPDATE habits SET streak = streak + 1 WHERE id = 42&quot;</span>
                );
              </div>
              <div className="text-slate-400 mt-1 text-[11px]">
                ↳ [Local Write Acknowledged in <span className="text-emerald-400">0.42ms</span>]
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between group hover:border-emerald-300 transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="heading-font text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Zero-Knowledge Privacy
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Your thoughts, habits, and private journal entries belong strictly to you. No tracking pixels, no advertising beacons, and zero telemetry data mining.
              </p>
            </div>

            <div className="mt-6 p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-center gap-3 text-xs text-emerald-900">
              <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>AES-256 On-Device Vault & biometric key protected.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between group hover:border-purple-300 transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <Moon className="w-6 h-6" />
              </div>
              <h3 className="heading-font text-xl font-bold text-slate-900 mb-2">
                OLED & Lavender Themes
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Meticulously tuned color palettes with high-contrast typography, reducing eye fatigue during late-night reviews.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <div className="flex-1 p-2.5 rounded-xl bg-slate-950 text-white text-[11px] font-semibold text-center border border-slate-800">
                OLED Pure Black
              </div>
              <div className="flex-1 p-2.5 rounded-xl bg-purple-50 text-[#7C3AED] text-[11px] font-semibold text-center border border-purple-200">
                Lavender Mist
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4 p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between group hover:border-emerald-300 transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="heading-font text-xl font-bold text-slate-900 mb-2">
                Streak Shield Protection
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Missing a single day due to travel or sickness shouldn’t destroy 60 days of psychological momentum. Built-in grace shields protect your habit velocity.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between p-3 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-xs">
              <span className="font-semibold text-emerald-900">🛡️ Habit Shield Buffer</span>
              <span className="font-mono font-bold text-emerald-700">2 Grace Passes / Mo</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-4 p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between group hover:border-purple-300 transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#7C3AED] mb-4">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="heading-font text-xl font-bold text-slate-900 mb-2">
                Conflict-Free Cloud Sync
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Edit notes on your phone and complete tasks on your tablet. When connection returns, Mistra reconciles changes seamlessly using CRDT algorithms.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-slate-600 p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
              <span className="font-medium text-slate-800">Phone ⇄ Tablet ⇄ Web</span>
              <span className="text-[#7C3AED] font-bold">Auto Reconcile</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
