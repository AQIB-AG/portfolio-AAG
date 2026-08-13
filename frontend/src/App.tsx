import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Achievements } from "./components/Achievements";
import { CtaFooter } from "./components/CtaFooter";
import { Contact } from "./components/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const sectionIds = ["home", "about", "projects", "achievements"];

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 800);
  };

  useEffect(() => {
    // Initial evaluation on hydration / page refresh
    if (window.scrollY < 100) {
      setActiveSection("home");
    }

    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrollingRef.current) return;

        // Filter sections with at least 15% visibility
        const visibleEntries = entries.filter((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.15);

        if (visibleEntries.length > 0) {
          // Select section with highest visible percentage (dominant section)
          const dominantEntry = visibleEntries.reduce((max, entry) =>
            entry.intersectionRatio > max.intersectionRatio ? entry : max
          );

          const dominantId = dominantEntry.target.id;
          setActiveSection((prev) => (prev !== dominantId ? dominantId : prev));
        } else if (window.scrollY < 200) {
          setActiveSection("home");
        }
      },
      {
        rootMargin: "-25% 0px -35% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F5F2] dark:bg-[#2A2C31] text-neutral-800 dark:text-slate-100 relative selection:bg-neutral-900/10 selection:text-neutral-900 dark:selection:bg-white/20 dark:selection:text-white transition-colors duration-300">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <About />
              <Projects />
              <Achievements />
              <CtaFooter />
            </main>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
