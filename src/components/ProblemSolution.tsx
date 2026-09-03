"use client";

import { motion } from "framer-motion";
import {
  XCircle,
  CheckCircle2,
  Sparkles,
  Split,
} from "lucide-react";

export default function ProblemSolution() {
  const problems = [
    {
      title: "Context Switching Overload",
      desc: "Jumping between a todo app, habit tracker, calendar, and notes app creates mental fatigue and breaks deep focus.",
      icon: "🤯",
    },
    {
      title: "Lost Ideas & Fragmented Notes",
      desc: "Meeting thoughts live in one tool, tasks in another, and daily goals in a random document. Nothing is connected.",
      icon: "🗂️",
    },
    {
      title: "Multiple Subscriptions",
      desc: "Paying separate monthly fees for habits, notes, calendar, and to-do lists quickly adds up.",
      icon: "💸",
    },
    {
      title: "Cloud-Only Lag",
      desc: "Most tools freeze on slow mobile connections, adding friction when you just need to quickly write down an idea.",
      icon: "📶",
    },
  ];

  const solutions = [
    {
      title: "One Calm Daily Dashboard",
      desc: "Your tasks, habits, and daily priorities coalesce into a single peaceful morning overview.",
      icon: "🧘‍♂️",
    },
    {
      title: "Connected Life Context",
      desc: "Attach markdown notes to tasks, schedule habit rituals, and connect daily execution to long-term goals.",
      icon: "🔗",
    },
    {
      title: "One Unified Solution",
      desc: "Enjoy every essential personal productivity tool in one cohesive app with a generous Free Tier forever.",
      icon: "💎",
    },
    {
      title: "Instant Offline Speed",
      desc: "Opens instantaneously with local-first encrypted storage, synchronizing seamlessly whenever you're online.",
      icon: "⚡",
    },
  ];

  return (
    <section id="why-mistra" className="py-24 relative overflow-hidden bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/70 text-xs font-semibold text-[#7C3AED] mb-4">
            <Split className="w-3.5 h-3.5" />
            <span>Why Mistra</span>
          </div>
          <h2 className="heading-font text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Stop stitching fragmented apps together.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Compare the friction of juggling isolated productivity tools with the calm clarity of Mistra Personal OS.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Problem Card: The Chaos of 5 Apps */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200/60 flex items-center justify-center text-rose-600">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="heading-font text-xl font-bold text-slate-900">
                      The Chaos of 5 Separate Apps
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      Fragmented · Cluttered · High Friction
                    </p>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 font-semibold">
                  Before Mistra
                </span>
              </div>

              {/* Problem Items */}
              <div className="mt-6 space-y-3.5">
                {problems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-start gap-3.5"
                  >
                    <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Experience: <strong className="text-slate-700">Fragmented</strong></span>
              <span>Cognitive Friction: <strong className="text-rose-600">High</strong></span>
            </div>
          </motion.div>

          {/* Solution Card: The Calm of 1 Mistra OS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-purple-200 shadow-md shadow-purple-100/50 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-purple-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED] flex items-center justify-center text-white shadow-xs">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="heading-font text-xl font-bold text-slate-900">
                      The Calm of 1 Mistra OS
                    </h3>
                    <p className="text-xs text-[#7C3AED] font-mono font-medium">
                      Unified · Focused · Fast
                    </p>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-purple-50 text-[#7C3AED] border border-purple-200 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  With Mistra OS
                </span>
              </div>

              {/* Solution Items */}
              <div className="mt-6 space-y-3.5">
                {solutions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 flex items-start gap-3.5 hover:bg-purple-50/80 transition-colors"
                  >
                    <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                        {item.title}
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-purple-100 flex items-center justify-between text-xs text-slate-600">
              <span>Experience: <strong className="text-[#7C3AED]">Peaceful & Unified</strong></span>
              <span>Speed: <strong className="text-emerald-700">Instant</strong></span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
