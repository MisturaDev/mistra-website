"use client";

import { useState } from "react";
import { Check, Sparkles, Star, ArrowRight } from "lucide-react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  const freeFeatures = [
    "Tasks with Priority Weighting & Subtasks",
    "7-Day Habit Tracker with Streak Momentum",
    "Markdown Notes & Scratchpad",
    "Daily Timeline Calendar & Time Blocking",
    "Quarterly Goals & OKR Tracker",
    "100% Offline-First SQLite Local Storage",
    "Clean Light & OLED Dark Themes",
  ];

  const proFeatures = [
    "Everything in Free Tier",
    "Multi-Device Real-Time Cloud Sync",
    "Unlimited Encrypted Cloud Backups",
    "Advanced Habit Consistency & Heatmap Analytics",
    "Custom Themes & Visual Customization",
    "AI Daily Command & Morning Briefing (Coming Soon)",
    "Early Access to Desktop Beta & iOS TestFlight",
    "Priority Customer Support",
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/70 text-xs font-semibold text-[#7C3AED] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest, Transparent Pricing</span>
          </div>
          <h2 className="heading-font text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Start Free. Upgrade for Superpowers.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            No trial traps. No forced credit cards. Enjoy the full core application for $0 forever.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-white text-slate-900 shadow-xs border border-slate-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === "annual"
                  ? "bg-white text-[#7C3AED] shadow-xs border border-slate-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.2 rounded font-mono font-bold">
                Save 35%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Card: Free Forever Tier */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="heading-font text-2xl font-bold text-slate-900">Mistra Free</h3>
                  <p className="text-xs text-slate-500 mt-0.5">The complete offline personal OS</p>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  Forever $0
                </span>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold font-mono text-slate-900">$0</span>
                <span className="text-xs text-slate-500 font-mono">/ forever free</span>
              </div>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                Everything you need to master your everyday tasks, habits, calendar, and notes with zero subscription anxiety.
              </p>

              {/* Checklist */}
              <div className="mt-8 space-y-3">
                {freeFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100">
              <a
                href="#download"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center gap-2 cursor-pointer text-center transition-all"
              >
                <span>Download Free App</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card: Mistra Pro Tier */}
          <div className="p-8 rounded-3xl bg-white border-2 border-purple-300 shadow-xl shadow-purple-100/50 flex flex-col justify-between relative">
            {/* Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#7C3AED] text-white text-[11px] font-bold tracking-wide uppercase shadow-sm flex items-center gap-1.5">
              <Star className="w-3 h-3 fill-white" />
              <span>Most Popular · Power User</span>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="heading-font text-2xl font-bold text-slate-900 flex items-center gap-2">
                    Mistra Pro
                    <Sparkles className="w-4 h-4 text-[#7C3AED]" />
                  </h3>
                  <p className="text-xs text-[#7C3AED] font-medium mt-0.5">Instant cloud sync & insights</p>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-[#7C3AED] border border-purple-200">
                  {billingCycle === "annual" ? "Save 35%" : "Flexible"}
                </span>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold font-mono text-slate-900">
                  {billingCycle === "annual" ? "$3.25" : "$4.99"}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  / month {billingCycle === "annual" && "(billed $39/year)"}
                </span>
              </div>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                Supercharge your workflow with real-time multi-device cloud synchronization, encrypted backups, and consistency heatmaps.
              </p>

              {/* Checklist */}
              <div className="mt-8 space-y-3">
                {proFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-purple-50 border border-purple-200 flex items-center justify-center text-[#7C3AED] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-800 font-medium">
                      {feat.includes("Coming Soon") ? (
                        <span>
                          {feat.replace(" (Coming Soon)", "")}{" "}
                          <span className="text-[10px] text-purple-700 bg-purple-50 px-1.5 py-0.2 rounded border border-purple-200 font-normal">
                            Coming Soon
                          </span>
                        </span>
                      ) : (
                        feat
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100 space-y-2">
              <a
                href="#download"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[#7C3AED] hover:bg-[#6D28D9] flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <span>Get Mistra Pro</span>
                <Sparkles className="w-4 h-4" />
              </a>
              <p className="text-center text-[11px] text-slate-500">
                Includes 14-day money-back guarantee · Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
