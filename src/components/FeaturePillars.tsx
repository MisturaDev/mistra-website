"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Flame,
  FileText,
  Calendar,
  Target,
  Sparkles,
  ArrowRight,
  Check,
  CalendarDays,
  ListTodo,
} from "lucide-react";

export default function FeaturePillars() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: "tasks",
      title: "Intelligent Tasks",
      shortTitle: "Tasks",
      icon: CheckCircle2,
      badge: "Focus & Execution",
      tagline: "Prioritize what moves the needle.",
      description:
        "Organize daily execution with triple-tier priority weighting (High/Medium/Low), nested subtask checklists, and clear category tags.",
      highlights: [
        "Priority Weighting (High, Medium, Low)",
        "Subtasks checklist with auto-progress",
        "Due dates and time categorization",
        "Filter by tags, projects, and urgency",
      ],
    },
    {
      id: "habits",
      title: "Streak-Forgiving Habits",
      shortTitle: "Habits",
      icon: Flame,
      badge: "Consistency",
      tagline: "Build rituals that stick without burnout.",
      description:
        "Visualize consistency with 7-day dot strips (`M T W T F S S`), custom frequency intervals, and built-in streak recovery buffers.",
      highlights: [
        "7-Day quick tap completion dots",
        "Habit streak metrics & flame momentum",
        "Consistency percentage calculations",
        "Flexible daily or weekly recurrence",
      ],
    },
    {
      id: "notes",
      title: "Fluid Markdown Notes",
      shortTitle: "Notes",
      icon: FileText,
      badge: "Idea Vault",
      tagline: "Capture thoughts at the speed of thought.",
      description:
        "Fast, clean Markdown scratchpads with category tags, instant local search, pinning, and quick-note accessibility.",
      highlights: [
        "Rich markdown preview & formatting",
        "Instant local search indexing",
        "Pinned quick notes for rapid recall",
        "Hashtags and organization filters",
      ],
    },
    {
      id: "calendar",
      title: "Unified Time-Block Agenda",
      shortTitle: "Calendar",
      icon: Calendar,
      badge: "Time Alignment",
      tagline: "Protect your time before the world claims it.",
      description:
        "Seamlessly blend your scheduled events, focus tasks, and daily habit slots into one harmonious timeline.",
      highlights: [
        "Daily agenda and timeline views",
        "Clear time-blocking slots",
        "Focus session indicators",
        "Sync with your daily tasks and habits",
      ],
    },
    {
      id: "goals",
      title: "Quarterly Milestone Goals",
      shortTitle: "Goals",
      icon: Target,
      badge: "Vision",
      tagline: "Connect everyday tasks to high-level vision.",
      description:
        "Break ambitious life goals into measurable quarterly milestones with auto-calculating progress bars.",
      highlights: [
        "Milestone breakdown & OKR structure",
        "Automatic percentage rollups",
        "Visual timeline progress bars",
        "Quarterly reflection & review mode",
      ],
    },
  ];

  const currentPillar = pillars[activeTab];
  const IconComponent = currentPillar.icon;

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/70 text-xs font-semibold text-[#7C3AED] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The 5 Core Pillars</span>
          </div>
          <h2 className="heading-font text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Designed for real everyday life.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Every pillar in Mistra is engineered to eliminate friction, encourage consistency, and cultivate calm focus.
          </p>
        </div>

        {/* Pillar Tab Selector */}
        <div className="flex items-center justify-center mb-12 overflow-x-auto pb-3 scrollbar-none">
          <div className="flex items-center p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
            {pillars.map((pillar, idx) => {
              const TabIcon = pillar.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(idx)}
                  className={`relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "text-[#7C3AED]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePillarLightTab"
                      className="absolute inset-0 rounded-xl bg-white shadow-xs border border-slate-200/80"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <TabIcon className="w-4 h-4" />
                    <span>{pillar.shortTitle}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Feature Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Feature Details */}
          <div className="lg:col-span-5 space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPillar.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-50 border border-purple-200 text-xs font-semibold text-[#7C3AED]">
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{currentPillar.badge}</span>
                </div>

                <h3 className="heading-font text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  {currentPillar.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  {currentPillar.tagline}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentPillar.description}
                </p>

                {/* Highlights check list */}
                <div className="space-y-2 pt-2">
                  {currentPillar.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <a
                    href="#download"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7C3AED] hover:text-[#6D28D9] group"
                  >
                    <span>Explore {currentPillar.shortTitle} in Mistra</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Clean SaaS Interactive Simulator */}
          <div className="lg:col-span-7">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 shadow-md min-h-[440px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {activeTab === 0 && (
                  <motion.div
                    key="tasks-demo"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <ListTodo className="w-5 h-5 text-[#7C3AED]" />
                        <h4 className="text-sm font-bold text-slate-900">Sprint Board & Priorities</h4>
                      </div>
                      <span className="text-xs text-[#7C3AED] font-mono bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                        Smart Filters Active
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-4 rounded-2xl bg-white border border-rose-200 shadow-xs">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-md bg-rose-50 border border-rose-300 flex items-center justify-center text-rose-700 mt-0.5">
                              <span className="text-[10px] font-bold">1</span>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-900">
                                Review Product Architecture & Database Sync
                              </p>
                              <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500 font-mono">
                                <span>📅 Today · 10:00 AM</span>
                                <span>•</span>
                                <span className="text-rose-600 font-semibold">High Priority</span>
                              </div>
                            </div>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 font-semibold">
                            Core
                          </span>
                        </div>

                        {/* Subtasks checklist preview */}
                        <div className="mt-3 pl-8 space-y-1.5 border-t border-slate-100 pt-2.5">
                          <div className="flex items-center gap-2 text-xs text-slate-600">
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="line-through text-slate-400">Validate SQLite storage encryption</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-slate-600">
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="line-through text-slate-400">Test two-way offline conflict resolution</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                            <div className="w-3.5 h-3.5 rounded-sm border border-slate-300 bg-white" />
                            <span>Deploy release build</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-md bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-700">
                            <span className="text-[10px] font-bold">2</span>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900">Weekly Team Retrospective</p>
                            <span className="text-[11px] text-amber-700 font-mono font-medium">Medium Priority · 2:00 PM</span>
                          </div>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                          Meetings
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 1 && (
                  <motion.div
                    key="habits-demo"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <Flame className="w-5 h-5 text-emerald-600" />
                        <h4 className="text-sm font-bold text-slate-900">Habit Consistency Grid</h4>
                      </div>
                      <span className="text-xs text-emerald-700 font-mono bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                        🔥 94% Consistency
                      </span>
                    </div>

                    <div className="space-y-3">
                      {[
                        {
                          name: "Morning Sunlight & 20m Walk",
                          streak: "21 days",
                          rate: "100%",
                          dots: [true, true, true, true, true, true, true],
                        },
                        {
                          name: "Daily Deep Work Focus Block",
                          streak: "14 days",
                          rate: "92%",
                          dots: [true, true, true, true, true, true, true],
                        },
                        {
                          name: "Read 20 Pages Non-Fiction",
                          streak: "8 days",
                          rate: "85%",
                          dots: [true, true, true, true, true, true, false],
                        },
                      ].map((habit, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-slate-900">{habit.name}</span>
                              <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                {habit.streak} 🔥
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-500">Rate: {habit.rate}</span>
                          </div>

                          <div className="flex items-center gap-1.5 self-end sm:self-center">
                            {["M", "T", "W", "T", "F", "S", "S"].map((day, dIdx) => (
                              <div key={dIdx} className="flex flex-col items-center gap-1">
                                <span className="text-[9px] font-mono text-slate-400">{day}</span>
                                <div
                                  className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                                    habit.dots[dIdx]
                                      ? "bg-emerald-50 border border-emerald-300 text-emerald-700"
                                      : "bg-slate-100 border border-slate-200 text-slate-400"
                                  }`}
                                >
                                  {habit.dots[dIdx] ? "✓" : "·"}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 2 && (
                  <motion.div
                    key="notes-demo"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-[#7C3AED]" />
                        <h4 className="text-sm font-bold text-slate-900">Markdown Thought Vault</h4>
                      </div>
                      <span className="text-xs text-purple-700 font-mono bg-purple-50 px-2 py-0.5 rounded border border-purple-200 font-semibold">
                        Instant Indexed
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="text-slate-800 font-bold flex items-center gap-1.5 font-sans">
                          <span>💡</span> Architecture_Principles_2026.md
                        </span>
                        <span className="text-[10px] bg-purple-50 text-purple-700 border border-purple-200 px-2 py-0.5 rounded font-mono">
                          #system-design
                        </span>
                      </div>
                      <div className="space-y-2 text-slate-700 leading-relaxed font-sans">
                        <p className="text-slate-900 font-semibold text-sm">
                          ## Core Pillars:
                        </p>
                        <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-4">
                          <li>
                            <strong className="text-slate-900">Local-First Speed:</strong> Data lives on encrypted SQLite storage. Instant execution.
                          </li>
                          <li>
                            <strong className="text-slate-900">Habit-To-Calendar Harmony:</strong> Habits link directly to daily calendar agendas.
                          </li>
                          <li>
                            <strong className="text-slate-900">Clean Focus:</strong> Zero cluttered settings menus or unnecessary bloat.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 3 && (
                  <motion.div
                    key="calendar-demo"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-5 h-5 text-[#7C3AED]" />
                        <h4 className="text-sm font-bold text-slate-900">Daily Time-Blocked Agenda</h4>
                      </div>
                      <span className="text-xs text-[#7C3AED] font-mono bg-purple-50 px-2 py-0.5 rounded border border-purple-200 font-semibold">
                        Today · Sep 2
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {[
                        {
                          time: "08:30 - 09:30",
                          title: "Morning Routine & Habit Rituals",
                          category: "Wellness",
                          color: "border-emerald-200 bg-emerald-50/60 text-emerald-800",
                        },
                        {
                          time: "09:30 - 12:00",
                          title: "Deep Work: Mistra Engine Core Refactor",
                          category: "High Focus",
                          color: "border-purple-200 bg-purple-50/60 text-purple-900",
                        },
                        {
                          time: "01:30 - 02:30",
                          title: "Roadmap & Feedback Sync",
                          category: "Meeting",
                          color: "border-indigo-200 bg-indigo-50/60 text-indigo-800",
                        },
                        {
                          time: "04:00 - 05:00",
                          title: "Daily Closeout & Tomorrow Planning",
                          category: "Review",
                          color: "border-amber-200 bg-amber-50/60 text-amber-800",
                        },
                      ].map((slot, idx) => (
                        <div
                          key={idx}
                          className={`p-3 rounded-xl border ${slot.color} flex items-center justify-between`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-mono font-bold">{slot.time}</span>
                            <span className="text-xs font-semibold">{slot.title}</span>
                          </div>
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white border border-slate-200 font-medium">
                            {slot.category}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 4 && (
                  <motion.div
                    key="goals-demo"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-rose-600" />
                        <h4 className="text-sm font-bold text-slate-900">Quarterly Milestones & Goals</h4>
                      </div>
                      <span className="text-xs text-rose-700 font-mono bg-rose-50 px-2 py-0.5 rounded border border-rose-200 font-semibold">
                        Q4 Roadmap
                      </span>
                    </div>

                    <div className="space-y-3">
                      {[
                        {
                          title: "Launch Mistra Android & iOS Beta",
                          progress: 85,
                          milestones: "3 of 4 Milestones Done",
                          color: "bg-[#7C3AED]",
                        },
                        {
                          title: "Run 10km Race in Under 50 Mins",
                          progress: 70,
                          milestones: "70km Logged this Month",
                          color: "bg-emerald-500",
                        },
                        {
                          title: "Write 12 Technical Essays",
                          progress: 58,
                          milestones: "7 of 12 Essays Completed",
                          color: "bg-indigo-500",
                        },
                      ].map((goal, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-slate-900">{goal.title}</span>
                            <span className="font-mono font-bold text-[#7C3AED]">{goal.progress}%</span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${goal.color} rounded-full`}
                              style={{ width: `${goal.progress}%` }}
                            />
                          </div>
                          <div className="text-[11px] text-slate-500 flex justify-between">
                            <span>{goal.milestones}</span>
                            <span className="text-emerald-600 font-medium">On Track ✨</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
