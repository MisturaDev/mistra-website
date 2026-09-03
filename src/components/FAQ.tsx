"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I get started with Mistra on my phone?",
      a: "Getting started takes less than a minute. Tap the 'Download for Android' button to download the latest mobile release, or join the iOS waitlist to receive an invitation for TestFlight. Once installed, you can start organizing your tasks, habits, and notes immediately without creating an account.",
    },
    {
      q: "When will Mistra launch on the Apple iOS App Store & Google Play?",
      a: "The Android release is available now, and the iOS TestFlight beta rollout is currently active for early waitlist members. Public general availability on both the Apple App Store and Google Play Store is slated for later this year.",
    },
    {
      q: "Is my personal data private and secure?",
      a: "Yes. Mistra operates on a local-first architecture where all your tasks, notes, habits, and schedules are stored directly on your device in an encrypted local database. If you enable Pro cloud sync, all synchronization transmissions are encrypted.",
    },
    {
      q: "Can I use Mistra completely offline without an internet connection?",
      a: "Yes! Offline-first speed is a foundational pillar of Mistra. You can create tasks, mark habits, take markdown notes, and manage your day anywhere with zero loading spinners. Data synchronizes automatically whenever you reconnect.",
    },
    {
      q: "What is included in the Free Tier vs Mistra Pro?",
      a: "Mistra Free provides full access to all 5 core pillars (Tasks, Habits, Notes, Calendar, and Goals) on your device forever with local storage. Mistra Pro ($3.25/mo on annual billing) unlocks multi-device real-time cloud sync, automated backups, and advanced consistency analytics.",
    },
    {
      q: "Can I import and export my personal data?",
      a: "Yes. You have full ownership of your data in Mistra. You can export your tasks, habits, and markdown notes at any time, or import existing records using standard formats.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/70 text-xs font-semibold text-[#7C3AED] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="heading-font text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Got questions about Mistra features, security, or platform availability? Here are the answers.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-150 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#7C3AED]/50 shadow-md"
                    : "bg-slate-50/70 border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-200 shrink-0 ${
                      isOpen
                        ? "bg-purple-50 text-[#7C3AED] rotate-180 border border-purple-200"
                        : "bg-white border border-slate-200 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
