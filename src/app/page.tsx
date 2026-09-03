"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import BentoGrid from "@/components/BentoGrid";
import FeaturePillars from "@/components/FeaturePillars";
import DownloadSection from "@/components/DownloadSection";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 relative">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <BentoGrid />
      <FeaturePillars />
      <DownloadSection />
      <Pricing />
      <CTASection />
      <FAQ />
      <Footer />
    </main>
  );
}
