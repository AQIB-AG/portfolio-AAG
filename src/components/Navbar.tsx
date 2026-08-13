"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection = "home",
  onNavigate,
}) => {
  const [currentSection, setCurrentSection] = useState(activeSection);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setCurrentSection(activeSection);
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
  ];

  const handleNavClick = (id: string) => {
    setCurrentSection(id);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 flex items-center justify-between ${
        scrolled ? "bg-[#0a0d14]/80 backdrop-blur-md py-3 border-b border-white/5" : ""
      }`}
    >
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="flex flex-col">
          <span className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-white group-hover:text-purple-300 transition-colors">
            AAG
          </span>
          <span className="text-[9px] tracking-[0.25em] text-gray-400 font-medium uppercase -mt-1">
            AQIB ABDUL GHAFFAR
          </span>
        </div>
      </Link>

      {/* Floating Center Glass Nav */}
      <nav className="glass-nav rounded-full px-2 py-1.5 flex items-center gap-1 border border-white/10 shadow-2xl">
        {navItems.map((item) => {
          const isActive = currentSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative px-4 md:px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                isActive
                  ? "text-white glass-nav-item-active"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_#ffffff]" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Right CTA Button */}
      <Link
        href="/contact"
        className="glass-nav hover:bg-white/10 text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-full border border-white/15 shadow-lg flex items-center gap-1.5 group transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span>LET&apos;S TALK</span>
        <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>
    </header>
  );
};
