"use client";

import Image from "next/image";
import {
  QrCode,
  ShieldCheck,
  Zap,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

export default function DownloadSection() {
  const androidDownloadUrl = "https://play.google.com/store/apps/details?id=com.mistra.app";
  const iosDownloadUrl = "https://apps.apple.com/app/mistra/id6470000000";

  return (
    <section id="download" className="py-24 relative overflow-hidden bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-font text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Download Mistra for Mobile
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Get the calm, unified workspace on your phone. Available now on iOS and Android.
          </p>
        </div>

        {/* Download Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: Store Badges */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3.5 pb-6 border-b border-slate-100">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-slate-200 bg-white flex items-center justify-center p-1 shadow-xs">
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
                  Mistra
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Free to download · iOS & Android
                </p>
              </div>
            </div>

            {/* Store Buttons */}
            <div className="space-y-3.5">
              {/* App Store (iOS) */}
              <a
                href={iosDownloadUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full p-4 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white flex items-center justify-between shadow-sm hover:shadow-md transition-all group cursor-pointer border border-slate-800"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    {/* Official Apple Logo */}
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-.99 1.7-.87 2.73.99.08 2.02-.48 2.57-1.23z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold font-mono">
                      Download on the
                    </p>
                    <p className="text-base font-bold leading-tight">Apple App Store</p>
                  </div>
                </div>
                <div className="px-3.5 py-1.5 rounded-lg bg-white/10 text-xs font-semibold flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform">
                  <span>Get App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* Google Play (Android) */}
              <a
                href={androidDownloadUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full p-4 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white flex items-center justify-between shadow-sm hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-white">
                    {/* Google Play Logo */}
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-.924V2.738a1.99 1.99 0 0 1 .61-.924zm11.242 11.244l2.428 2.428-11.75 6.786 9.322-9.214zm0-2.116L5.529 1.728l11.75 6.786-2.428 2.428zm1.488 1.058l3.655 2.109c1.077.622 1.077 1.637 0 2.259l-3.655 2.109-2.029-2.029 2.029-2.448z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] text-purple-200 uppercase tracking-wider font-semibold font-mono">
                      Get it on
                    </p>
                    <p className="text-base font-bold leading-tight">Google Play Store</p>
                  </div>
                </div>
                <div className="px-3.5 py-1.5 rounded-lg bg-white/15 text-xs font-semibold flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform">
                  <span>Get App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>

            {/* Standard Badges */}
            <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <Zap className="w-4 h-4 text-[#7C3AED]" />
                <span>Instant Offline Speed</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Free & Private</span>
              </div>
            </div>
          </div>

          {/* Right Column: QR Code */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-5">
            <div className="p-2.5 rounded-2xl bg-purple-50 border border-purple-100 text-[#7C3AED]">
              <QrCode className="w-6 h-6" />
            </div>

            <div>
              <h4 className="heading-font text-lg font-bold text-slate-900">
                Scan to Download on Mobile
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Point your phone camera to download directly from the store.
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
              <span>Available for iOS & Android</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
