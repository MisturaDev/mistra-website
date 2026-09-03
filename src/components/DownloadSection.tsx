"use client";

import Image from "next/image";
import {
  Smartphone,
  Apple,
  QrCode,
  ShieldCheck,
  Zap,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

export default function DownloadSection() {
  const androidDownloadUrl = "https://play.google.com/store/apps/details?id=com.mistra.app";
  const iosDownloadUrl = "https://testflight.apple.com/join/mistra-beta";

  return (
    <section id="download" className="py-24 relative overflow-hidden bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/70 text-xs font-semibold text-[#7C3AED] mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Direct Mobile Access</span>
          </div>
          <h2 className="heading-font text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Download Mistra for Mobile
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Experience your personal operating system on Android and iOS. Start free with instant offline SQLite storage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3.5 pb-6 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border border-slate-200 bg-white flex items-center justify-center p-1 shadow-xs">
                <Image
                  src="/icon.png"
                  alt="Mistra App Icon"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="heading-font text-xl font-bold text-slate-900">
                  Mistra Personal OS
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Version 1.0.0 · Android 8.0+ & iOS 16.0+
                </p>
              </div>
            </div>

            <div className="space-y-3.5">
              <a
                href={androidDownloadUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full p-4 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white flex items-center justify-between shadow-sm hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-purple-200 uppercase tracking-wider font-semibold font-mono">
                      Get it for Android
                    </p>
                    <p className="text-sm font-bold">Google Play / Direct APK</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-lg bg-white/15 text-xs font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Install</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>

              <a
                href={iosDownloadUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full p-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-between shadow-sm hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Apple className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold font-mono">
                      Join Beta for iOS
                    </p>
                    <p className="text-sm font-bold">Apple TestFlight / App Store</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-lg bg-white/10 text-xs font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Open Beta</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <Zap className="w-4 h-4 text-[#7C3AED]" />
                <span>Offline SQLite Database</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Telemetry / Private</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-5">
            <div className="p-2 rounded-2xl bg-purple-50 border border-purple-100 text-[#7C3AED]">
              <QrCode className="w-6 h-6" />
            </div>

            <div>
              <h4 className="heading-font text-lg font-bold text-slate-900">
                Scan to Install on Mobile
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Point your phone camera to open the direct download link immediately.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border-2 border-slate-800 shadow-inner flex flex-col items-center justify-center">
              <div className="w-44 h-44 bg-white rounded-xl p-3 flex items-center justify-center shadow-xs">
                <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900 fill-current">
                  <rect x="5" y="5" width="28" height="28" rx="4" />
                  <rect x="9" y="9" width="20" height="20" fill="white" rx="2" />
                  <rect x="13" y="13" width="12" height="12" rx="2" />

                  <rect x="67" y="5" width="28" height="28" rx="4" />
                  <rect x="71" y="9" width="20" height="20" fill="white" rx="2" />
                  <rect x="75" y="13" width="12" height="12" rx="2" />

                  <rect x="5" y="67" width="28" height="28" rx="4" />
                  <rect x="9" y="71" width="20" height="20" fill="white" rx="2" />
                  <rect x="13" y="75" width="12" height="12" rx="2" />

                  <rect x="38" y="8" width="8" height="8" rx="1" />
                  <rect x="50" y="8" width="8" height="8" rx="1" />
                  <rect x="38" y="20" width="8" height="8" rx="1" />
                  <rect x="50" y="20" width="8" height="8" rx="1" />
                  <rect x="38" y="32" width="24" height="6" rx="1" />

                  <rect x="8" y="38" width="8" height="8" rx="1" />
                  <rect x="20" y="38" width="8" height="8" rx="1" />
                  <rect x="8" y="50" width="8" height="8" rx="1" />
                  <rect x="20" y="50" width="8" height="8" rx="1" />

                  <rect x="38" y="44" width="8" height="8" rx="1" />
                  <rect x="50" y="44" width="8" height="8" rx="1" />
                  <rect x="62" y="44" width="8" height="8" rx="1" />
                  <rect x="74" y="44" width="8" height="8" rx="1" />
                  <rect x="86" y="44" width="8" height="8" rx="1" />

                  <rect x="38" y="56" width="8" height="8" rx="1" />
                  <rect x="50" y="56" width="16" height="8" rx="1" />
                  <rect x="74" y="56" width="8" height="8" rx="1" />
                  <rect x="86" y="56" width="8" height="8" rx="1" />

                  <rect x="38" y="68" width="8" height="8" rx="1" />
                  <rect x="50" y="68" width="8" height="8" rx="1" />
                  <rect x="68" y="68" width="16" height="8" rx="1" />
                  <rect x="38" y="80" width="16" height="8" rx="1" />
                  <rect x="60" y="80" width="8" height="8" rx="1" />
                  <rect x="74" y="80" width="20" height="8" rx="1" />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Compatible with iOS & Android</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
