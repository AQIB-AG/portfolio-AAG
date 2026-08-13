"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { CtaFooter } from "@/components/CtaFooter";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0d14] text-white selection:bg-purple-500/30 selection:text-white">
      {/* Fixed Floating Navigation Bar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Single-Page Sections matching PDF Reference */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Achievements />
      </main>

      {/* Call to Action Card & Footer */}
      <CtaFooter />
    </div>
  );
}
