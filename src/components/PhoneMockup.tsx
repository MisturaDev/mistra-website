"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Flame,
  FileText,
  Calendar as CalendarIcon,
  Check,
  Wifi,
  Battery,
  ListTodo,
  Home,
  Plus,
  ShieldCheck,
} from "lucide-react";

export default function PhoneMockup() {
  const isDark = false;
  const [activeTab, setActiveTab] = useState<"today" | "tasks" | "habits" | "notes" | "calendar">("today");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Review Q4 Strategy & Milestones",
      priority: "high" as const,
      completed: true,
      time: "09:30 AM",
      category: "Work",
    },
    {
      id: 2,
      title: "20-Min Deep Mindfulness Session",
      priority: "medium" as const,
      completed: true,
      time: "01:00 PM",
      category: "Health",
    },
    {
      id: 3,
      title: "Finalize Mistra Architecture Review",
      priority: "high" as const,
      completed: false,
      time: "03:30 PM",
      category: "Engineering",
    },
    {
      id: 4,
      title: "Read 15 Pages of Non-Fiction",
      priority: "low" as const,
      completed: false,
      time: "08:30 PM",
      category: "Growth",
    },
  ]);

  const [projectTasks, setProjectTasks] = useState([
    {
      id: 101,
      title: "Deploy Mistra v1.0 Release",
      priority: "high",
      tag: "Launch",
      subtasks: [
        { title: "Run end-to-end SQLite regression test", done: true },
        { title: "Publish Google Play Store release", done: true },
        { title: "Publish Apple App Store release", done: true },
        { title: "Publish launch announcement", done: false },
      ],
    },
    {
      id: 102,
      title: "Design System Tokens Refinement",
      priority: "medium",
      tag: "Design",
      subtasks: [
        { title: "Audit OLED dark contrast ratios", done: true },
        { title: "Export vector tab icon set", done: false },
      ],
    },
  ]);

  const [habits, setHabits] = useState([
    {
      id: 201,
      name: "💧 2.5L Hydration",
      streak: 18,
      target: "Daily",
      days: [true, true, true, true, true, true, true],
    },
    {
      id: 202,
      name: "⚡ 90-Min Deep Work",
      streak: 12,
      target: "Weekdays",
      days: [true, true, true, true, true, false, true],
    },
    {
      id: 203,
      name: "🧘 10-Min Evening Meditation",
      streak: 24,
      target: "Daily",
      days: [true, true, true, true, true, true, true],
    },
    {
      id: 204,
      name: "📚 Read 20 Pages",
      streak: 9,
      target: "Daily",
      days: [true, true, true, true, false, true, true],
    },
  ]);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const toggleSubtask = (taskId: number, subtaskIndex: number) => {
    setProjectTasks((prev) =>
      prev.map((t) => {
        if (t.id === taskId) {
          const updatedSubtasks = [...t.subtasks];
          updatedSubtasks[subtaskIndex].done = !updatedSubtasks[subtaskIndex].done;
          return { ...t, subtasks: updatedSubtasks };
        }
        return t;
      })
    );
  };

  const toggleHabitDay = (habitId: number, dayIndex: number) => {
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id === habitId) {
          const updatedDays = [...h.days];
          updatedDays[dayIndex] = !updatedDays[dayIndex];
          return { ...h, days: updatedDays };
        }
        return h;
      })
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[370px] select-none">
      <div className="relative rounded-[44px] bg-slate-950 p-2.5 shadow-2xl border-4 border-slate-800 shadow-slate-400/20 dark:shadow-purple-950/30 overflow-hidden">
        <div
          className={`relative rounded-[36px] overflow-hidden flex flex-col h-[670px] border transition-colors duration-300 ${
            isDark
              ? "bg-[#090D16] border-slate-800 text-slate-100"
              : "bg-[#FFFFFF] border-slate-100 text-slate-900"
          }`}
        >
          <div
            className={`px-6 pt-3 pb-2 flex items-center justify-between text-xs font-medium ${
              isDark ? "bg-[#090D16] text-slate-400" : "bg-white text-slate-600"
            }`}
          >
            <span
              className={`font-mono text-[11px] font-semibold ${
                isDark ? "text-slate-200" : "text-slate-900"
              }`}
            >
              9:41
            </span>
            <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center gap-1.5 px-2 border border-slate-800/80">
              <span className="w-1.5 h-1.5 bg-[#7C3AED] rounded-full animate-ping" />
              <span className="text-[8px] text-white font-mono uppercase tracking-wider font-semibold">
                MISTRA
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5 text-emerald-500" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-none flex flex-col">
            <AnimatePresence mode="wait">
              {activeTab === "today" && (
                <motion.div
                  key="today"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 flex flex-col"
                >
                  <div
                    className={`px-5 pt-2 pb-3 border-b ${
                      isDark ? "bg-[#090D16] border-slate-800/80" : "bg-white border-slate-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-[#7C3AED] font-semibold uppercase tracking-wider">
                          Wednesday, Sep 2
                        </p>
                        <h3
                          className={`heading-font text-lg font-bold ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          Good morning, Mistura
                        </h3>
                      </div>
                      <div className="relative w-8 h-8 rounded-full ring-2 ring-purple-500/40 overflow-hidden shadow-xs bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400 flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
                          {/* Background Glow */}
                          <rect width="36" height="36" fill="url(#girlAvatarBg)" />
                          {/* Back Hair */}
                          <path
                            d="M9 16C9 10.5 13 6 18 6C23 6 27 10.5 27 16C27 22 26 26 26 28C24 29 21 29 18 29C15 29 12 29 10 28C10 26 9 22 9 16Z"
                            fill="#311006"
                          />
                          {/* Shoulders / Top */}
                          <path
                            d="M8 36C8 30 12.5 26 18 26C23.5 26 28 30 28 36"
                            fill="#8B5CF6"
                          />
                          {/* Neck */}
                          <rect x="16" y="21" width="4" height="6" rx="2" fill="#FBBF24" />
                          {/* Face */}
                          <ellipse cx="18" cy="16.5" rx="5.5" ry="6" fill="#FDE68A" />
                          {/* Front Hair Bangs & Waves */}
                          <path
                            d="M12.5 14C12 11 14 7.5 18 7.5C22 7.5 24 11 23.5 14C22.5 13 21 12 18 12.5C15 13 13.5 13 12.5 14Z"
                            fill="#451A03"
                          />
                          {/* Hair Strands Left & Right */}
                          <path
                            d="M12.5 13C12.5 17 13.5 21 14.5 23C13.8 23 12 20 11.5 16C11.2 13.5 12 12.5 12.5 13Z"
                            fill="#451A03"
                          />
                          <path
                            d="M23.5 13C23.5 17 22.5 21 21.5 23C22.2 23 24 20 24.5 16C24.8 13.5 24 12.5 23.5 13Z"
                            fill="#451A03"
                          />
                          {/* Eyes */}
                          <ellipse cx="15.8" cy="16.5" rx="0.75" ry="0.9" fill="#1E293B" />
                          <ellipse cx="20.2" cy="16.5" rx="0.75" ry="0.9" fill="#1E293B" />
                          {/* Eye sparkle */}
                          <circle cx="15.6" cy="16.2" r="0.25" fill="#FFFFFF" />
                          <circle cx="20.0" cy="16.2" r="0.25" fill="#FFFFFF" />
                          {/* Cheeks */}
                          <circle cx="14.5" cy="18" r="1" fill="#F87171" opacity="0.6" />
                          <circle cx="21.5" cy="18" r="1" fill="#F87171" opacity="0.6" />
                          {/* Smile */}
                          <path
                            d="M16.5 19.2C17 20 19 20 19.5 19.2"
                            stroke="#B45309"
                            strokeWidth="0.7"
                            strokeLinecap="round"
                          />
                          {/* Small gold earrings */}
                          <circle cx="12.2" cy="17.5" r="0.5" fill="#F59E0B" />
                          <circle cx="23.8" cy="17.5" r="0.5" fill="#F59E0B" />
                          {/* Hair Clip / Flower Accent */}
                          <circle cx="22.5" cy="10" r="1.2" fill="#EC4899" />
                          <circle cx="22.5" cy="10" r="0.5" fill="#FDE047" />
                          <defs>
                            <linearGradient
                              id="girlAvatarBg"
                              x1="0"
                              y1="0"
                              x2="36"
                              y2="36"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FCE7F3" />
                              <stop offset="1" stopColor="#E0E7FF" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    <div
                      className={`mt-3 p-3 rounded-2xl border ${
                        isDark
                          ? "bg-slate-900/90 border-purple-900/50"
                          : "bg-[#F5F3FF] border-purple-100"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`text-xs font-semibold ${
                            isDark ? "text-slate-200" : "text-slate-800"
                          }`}
                        >
                          Daily Momentum
                        </span>
                        <span className="text-xs font-mono font-bold text-[#7C3AED]">
                          {progressPercent}% Done
                        </span>
                      </div>
                      <div
                        className={`w-full h-2 rounded-full overflow-hidden p-0.5 ${
                          isDark ? "bg-slate-800" : "bg-purple-200/70"
                        }`}
                      >
                        <motion.div
                          className="h-full bg-[#7C3AED] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${progressPercent}%` }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-slate-500 mt-1.5">
                        <span>
                          {completedCount} of {tasks.length} focus items done
                        </span>
                        <span className="text-emerald-500 font-semibold">Flow Active ✨</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex-1 px-5 py-3 space-y-3.5 ${
                      isDark ? "bg-[#060911]" : "bg-[#F8FAFC]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <ListTodo className="w-3.5 h-3.5 text-[#7C3AED]" />
                          <span
                            className={`text-xs font-bold uppercase tracking-wide ${
                              isDark ? "text-slate-300" : "text-slate-800"
                            }`}
                          >
                            Today&apos;s Focus
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-medium">
                          Tap to complete
                        </span>
                      </div>

                      <div className="space-y-2">
                        {tasks.map((task) => (
                          <button
                            key={task.id}
                            onClick={() => toggleTask(task.id)}
                            className={`w-full p-2.5 rounded-xl border text-left transition-all duration-150 flex items-center justify-between gap-2.5 cursor-pointer ${
                              task.completed
                                ? isDark
                                  ? "bg-slate-900/40 border-slate-800/60 opacity-60"
                                  : "bg-slate-50/80 border-slate-200/60 opacity-70"
                                : isDark
                                ? "bg-slate-900/90 border-slate-800 hover:border-purple-600/50 shadow-xs"
                                : "bg-white border-slate-200/90 shadow-xs hover:border-purple-300"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 flex-1 min-w-0">
                              <div
                                className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                                  task.completed
                                    ? "bg-emerald-500 border-emerald-500 text-white"
                                    : isDark
                                    ? "border-slate-700 bg-slate-800/50 text-transparent"
                                    : "border-slate-300 bg-white text-transparent"
                                }`}
                              >
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                              </div>
                              <div className="truncate">
                                <p
                                  className={`text-xs font-semibold tracking-tight truncate ${
                                    task.completed
                                      ? "line-through text-slate-500"
                                      : isDark
                                      ? "text-slate-200"
                                      : "text-slate-800"
                                  }`}
                                >
                                  {task.title}
                                </p>
                                <span className="text-[9px] text-slate-500 font-mono">
                                  {task.time} · {task.category}
                                </span>
                              </div>
                            </div>

                            <span
                              className={`text-[9px] px-2 py-0.5 rounded-md font-semibold uppercase shrink-0 ${
                                task.priority === "high"
                                  ? isDark
                                    ? "bg-rose-950/60 text-rose-300 border border-rose-800/50"
                                    : "bg-rose-50 text-rose-700 border border-rose-200"
                                  : task.priority === "medium"
                                  ? isDark
                                    ? "bg-amber-950/60 text-amber-300 border border-amber-800/50"
                                    : "bg-amber-50 text-amber-700 border border-amber-200"
                                  : isDark
                                  ? "bg-blue-950/60 text-blue-300 border border-blue-800/50"
                                  : "bg-blue-50 text-blue-700 border border-blue-200"
                              }`}
                            >
                              {task.priority}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div
                      className={`p-3 rounded-2xl border shadow-xs ${
                        isDark
                          ? "bg-slate-900/90 border-slate-800"
                          : "bg-white border-slate-200/80"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <Flame className="w-3.5 h-3.5 text-emerald-500" />
                          <span
                            className={`text-xs font-bold uppercase tracking-wide ${
                              isDark ? "text-slate-200" : "text-slate-800"
                            }`}
                          >
                            Active Habits
                          </span>
                        </div>
                        <span className="text-[10px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          18d Streak 🔥
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span
                            className={`text-[11px] font-medium ${
                              isDark ? "text-slate-300" : "text-slate-700"
                            }`}
                          >
                            💧 2.5L Hydration
                          </span>
                          <div className="flex items-center gap-1">
                            {dayLabels.map((d, i) => (
                              <div
                                key={i}
                                className="w-4 h-4 rounded-md bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[8px] font-bold text-emerald-500"
                              >
                                ✓
                              </div>
                            ))}
                          </div>
                        </div>

                        <div
                          className={`flex items-center justify-between text-xs pt-1 border-t ${
                            isDark ? "border-slate-800" : "border-slate-100"
                          }`}
                        >
                          <span
                            className={`text-[11px] font-medium ${
                              isDark ? "text-slate-300" : "text-slate-700"
                            }`}
                          >
                            ⚡ 90-Min Deep Work
                          </span>
                          <div className="flex items-center gap-1">
                            {dayLabels.map((d, i) => (
                              <div
                                key={i}
                                className={`w-4 h-4 rounded-md flex items-center justify-center text-[8px] font-bold ${
                                  i === 6
                                    ? "bg-purple-500/20 border border-purple-500/40 text-[#7C3AED]"
                                    : "bg-emerald-500/20 border border-emerald-500/40 text-emerald-500"
                                }`}
                              >
                                {i === 6 ? "•" : "✓"}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "tasks" && (
                <motion.div
                  key="tasks"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.2 }}
                  className={`flex-1 p-5 space-y-4 ${
                    isDark ? "bg-[#060911]" : "bg-[#F8FAFC]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-[#7C3AED] uppercase font-bold tracking-wider">
                        Execution Engine
                      </p>
                      <h3
                        className={`heading-font text-lg font-bold ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        Projects & Subtasks
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg bg-purple-500/10 text-[#7C3AED] font-semibold border border-purple-500/20">
                      <Plus className="w-3 h-3" />
                      <span>New</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {projectTasks.map((proj) => {
                      const doneSubtasks = proj.subtasks.filter((s) => s.done).length;
                      const totalSubtasks = proj.subtasks.length;
                      const projPct = Math.round((doneSubtasks / totalSubtasks) * 100);

                      return (
                        <div
                          key={proj.id}
                          className={`p-3.5 rounded-2xl border shadow-xs ${
                            isDark
                              ? "bg-slate-900/90 border-slate-800"
                              : "bg-white border-slate-200/90"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span
                              className={`text-xs font-bold ${
                                isDark ? "text-slate-200" : "text-slate-900"
                              }`}
                            >
                              {proj.title}
                            </span>
                            <span className="text-[9px] px-2 py-0.5 rounded-md font-semibold bg-purple-500/15 text-[#7C3AED]">
                              #{proj.tag}
                            </span>
                          </div>

                          <div className="mb-3">
                            <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                              <span>Subtask Progress</span>
                              <span className="font-mono font-bold text-[#7C3AED]">
                                {doneSubtasks}/{totalSubtasks} ({projPct}%)
                              </span>
                            </div>
                            <div
                              className={`w-full h-1.5 rounded-full overflow-hidden ${
                                isDark ? "bg-slate-800" : "bg-slate-100"
                              }`}
                            >
                              <div
                                className="h-full bg-[#7C3AED] rounded-full transition-all"
                                style={{ width: `${projPct}%` }}
                              />
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            {proj.subtasks.map((sub, sIdx) => (
                              <button
                                key={sIdx}
                                onClick={() => toggleSubtask(proj.id, sIdx)}
                                className={`w-full flex items-center gap-2 p-1.5 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                                  isDark ? "hover:bg-slate-800/60" : "hover:bg-slate-50"
                                }`}
                              >
                                <div
                                  className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                                    sub.done
                                      ? "bg-emerald-500 border-emerald-500 text-white"
                                      : isDark
                                      ? "border-slate-700 bg-slate-800/50"
                                      : "border-slate-300 bg-white"
                                  }`}
                                >
                                  {sub.done && <Check className="w-3 h-3 stroke-[3]" />}
                                </div>
                                <span
                                  className={`text-[11px] ${
                                    sub.done
                                      ? "line-through text-slate-500"
                                      : isDark
                                      ? "text-slate-300"
                                      : "text-slate-700"
                                  }`}
                                >
                                  {sub.title}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {activeTab === "habits" && (
                <motion.div
                  key="habits"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.2 }}
                  className={`flex-1 p-5 space-y-3.5 ${
                    isDark ? "bg-[#060911]" : "bg-[#F8FAFC]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-emerald-500 uppercase font-bold tracking-wider">
                        Ritual Consistency
                      </p>
                      <h3
                        className={`heading-font text-lg font-bold ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        Habit Momentum
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 font-bold border border-emerald-500/20">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Shield Active</span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {habits.map((habit) => (
                      <div
                        key={habit.id}
                        className={`p-3 rounded-2xl border shadow-xs ${
                          isDark
                            ? "bg-slate-900/90 border-slate-800"
                            : "bg-white border-slate-200/90"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`text-xs font-semibold ${
                              isDark ? "text-slate-200" : "text-slate-800"
                            }`}
                          >
                            {habit.name}
                          </span>
                          <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                            {habit.streak}d streak 🔥
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          {dayLabels.map((label, dIdx) => {
                            const isDone = habit.days[dIdx];
                            return (
                              <button
                                key={dIdx}
                                onClick={() => toggleHabitDay(habit.id, dIdx)}
                                className="flex flex-col items-center gap-1 cursor-pointer"
                              >
                                <span className="text-[9px] text-slate-500 font-mono">
                                  {label}
                                </span>
                                <div
                                  className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold transition-all ${
                                    isDone
                                      ? "bg-emerald-500 text-white shadow-xs"
                                      : isDark
                                      ? "bg-slate-800 border border-slate-700 text-slate-500"
                                      : "bg-slate-100 border border-slate-200 text-slate-400"
                                  }`}
                                >
                                  {isDone ? "✓" : "·"}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "notes" && (
                <motion.div
                  key="notes"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.2 }}
                  className={`flex-1 p-5 space-y-3.5 ${
                    isDark ? "bg-[#060911]" : "bg-[#F8FAFC]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-[#7C3AED] uppercase font-bold tracking-wider">
                        Idea Vault
                      </p>
                      <h3
                        className={`heading-font text-lg font-bold ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        Markdown Scratchpad
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg bg-purple-500/10 text-[#7C3AED] font-semibold border border-purple-500/20">
                      <Plus className="w-3 h-3" />
                      <span>Note</span>
                    </div>
                  </div>

                  <div
                    className={`p-4 rounded-2xl border shadow-xs space-y-2.5 ${
                      isDark
                        ? "bg-slate-900/90 border-slate-800"
                        : "bg-white border-slate-200/90"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#7C3AED]">
                        # Architecture & Sync Notes
                      </span>
                      <span className="text-[9px] text-slate-500 font-mono">Pinned 📌</span>
                    </div>

                    <div
                      className={`text-[11px] space-y-2 font-mono leading-relaxed ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      <p>
                        <strong className="text-purple-400 font-semibold">## Core Tenets</strong>
                      </p>
                      <p className="pl-2 border-l-2 border-purple-500/50">
                        • 100% Offline-first SQLite storage
                        <br />
                        • CRDT-based background sync
                        <br />• End-to-end encrypted backup
                      </p>
                      <div
                        className={`p-2 rounded-lg text-[10px] font-mono ${
                          isDark ? "bg-slate-950 text-emerald-400" : "bg-slate-100 text-slate-800"
                        }`}
                      >
                        <code>SELECT * FROM tasks WHERE state = &apos;FOCUS&apos;;</code>
                      </div>
                    </div>

                    <div className="flex gap-1.5 pt-1">
                      <span className="text-[9px] px-2 py-0.5 rounded bg-purple-500/10 text-[#7C3AED] font-semibold">
                        #engineering
                      </span>
                      <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-semibold">
                        #sqlite
                      </span>
                    </div>
                  </div>

                  <div
                    className={`p-3 rounded-2xl border flex items-center justify-between ${
                      isDark ? "bg-slate-900/50 border-slate-800" : "bg-white border-slate-200/80"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-slate-400" />
                      <span
                        className={`text-xs font-medium ${
                          isDark ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        Q4 Product Vision & OKRs
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500">Yesterday</span>
                  </div>
                </motion.div>
              )}

              {activeTab === "calendar" && (
                <motion.div
                  key="calendar"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.2 }}
                  className={`flex-1 p-5 space-y-3.5 ${
                    isDark ? "bg-[#060911]" : "bg-[#F8FAFC]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-[#7C3AED] uppercase font-bold tracking-wider">
                        Time Alignment
                      </p>
                      <h3
                        className={`heading-font text-lg font-bold ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        Unified Agenda
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-[#7C3AED]">
                      Today
                    </span>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        time: "08:30 AM",
                        duration: "45m",
                        title: "Hydration & Morning Flow",
                        type: "habit",
                        color: "emerald",
                      },
                      {
                        time: "09:30 AM",
                        duration: "90m",
                        title: "Q4 Strategy Architecture Deep Work",
                        type: "focus",
                        color: "purple",
                      },
                      {
                        time: "01:30 PM",
                        duration: "30m",
                        title: "Engineering Team Standup",
                        type: "event",
                        color: "blue",
                      },
                      {
                        time: "04:00 PM",
                        duration: "60m",
                        title: "Sprint Review & Release Checklist",
                        type: "focus",
                        color: "purple",
                      },
                    ].map((slot, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-2xl border shadow-xs flex items-center gap-3 ${
                          isDark
                            ? "bg-slate-900/90 border-slate-800"
                            : "bg-white border-slate-200/90"
                        }`}
                      >
                        <div className="w-16 shrink-0 font-mono text-[10px] text-slate-500">
                          <div>{slot.time}</div>
                          <div className="text-[9px] text-[#7C3AED] font-semibold">
                            {slot.duration}
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <p
                            className={`text-xs font-semibold truncate ${
                              isDark ? "text-slate-200" : "text-slate-800"
                            }`}
                          >
                            {slot.title}
                          </p>
                          <span
                            className={`text-[9px] uppercase font-bold tracking-wider ${
                              slot.color === "emerald"
                                ? "text-emerald-500"
                                : slot.color === "purple"
                                ? "text-[#7C3AED]"
                                : "text-blue-500"
                            }`}
                          >
                            {slot.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className={`px-3 py-2 border-t flex items-center justify-around transition-colors ${
              isDark ? "bg-[#090D16] border-slate-800" : "bg-white border-slate-100"
            }`}
          >
            <button
              onClick={() => setActiveTab("today")}
              className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-colors cursor-pointer ${
                activeTab === "today"
                  ? "text-[#7C3AED] font-bold scale-105"
                  : isDark
                  ? "text-slate-500"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Today</span>
            </button>
            <button
              onClick={() => setActiveTab("tasks")}
              className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-colors cursor-pointer ${
                activeTab === "tasks"
                  ? "text-[#7C3AED] font-bold scale-105"
                  : isDark
                  ? "text-slate-500"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Tasks</span>
            </button>
            <button
              onClick={() => setActiveTab("habits")}
              className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-colors cursor-pointer ${
                activeTab === "habits"
                  ? "text-emerald-500 font-bold scale-105"
                  : isDark
                  ? "text-slate-500"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>Habits</span>
            </button>
            <button
              onClick={() => setActiveTab("notes")}
              className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-colors cursor-pointer ${
                activeTab === "notes"
                  ? "text-[#7C3AED] font-bold scale-105"
                  : isDark
                  ? "text-slate-500"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Notes</span>
            </button>
            <button
              onClick={() => setActiveTab("calendar")}
              className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-colors cursor-pointer ${
                activeTab === "calendar"
                  ? "text-[#7C3AED] font-bold scale-105"
                  : isDark
                  ? "text-slate-500"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              <CalendarIcon className="w-4 h-4" />
              <span>Agenda</span>
            </button>
          </div>

          <div
            className={`w-full flex justify-center pb-2 pt-1 transition-colors ${
              isDark ? "bg-[#090D16]" : "bg-white"
            }`}
          >
            <div
              className={`w-28 h-1 rounded-full ${
                isDark ? "bg-slate-700" : "bg-slate-200"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
