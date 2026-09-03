"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DownloadSection from "@/components/DownloadSection";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 relative">
      <Navbar />
      <Hero />
      <DownloadSection />
      <CTASection />
      <FAQ />
      <Footer />
    </main>
  );
}
