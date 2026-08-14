import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, LayoutGroup } from "framer-motion";
import { LightPullThemeSwitcher } from "./LightPullThemeSwitcher";

interface NavbarProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = "home", onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
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
    <header className="fixed top-4 inset-x-0 z-50 w-full transition-all duration-300">
      <div className="relative mx-auto flex w-full max-w-[1400px] items-center justify-between px-8 md:px-16">
        
        {/* LEFT: Logo - Visible at scrollY = 0, smoothly hides on scroll */}
        <Link
          to="/"
          className={`flex items-center group transition-all duration-300 hover:scale-[1.02] relative z-20 ${
            scrolled
              ? "opacity-0 -translate-y-2 pointer-events-none"
              : "opacity-100 translate-y-0 pointer-events-auto"
          }`}
        >
          <img
            src="/logo.png"
            alt="Aqib Abdul Ghaffar Monogram Logo"
            className="h-7 sm:h-8 md:h-9 lg:h-[36px] w-auto object-contain transition-all duration-300 dark:brightness-100 brightness-0 dark:mix-blend-screen mix-blend-multiply"
          />
        </Link>

        {/* CENTER: Multi-Layered Mathematically Centered Apple Liquid Glass Capsule Navigation
            Remains 100% visible & sticky at top across all scroll positions */}
        <nav
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full liquid-glass-navbar overflow-hidden z-40 transition-all duration-300 ${
            scrolled
              ? "border-white/25 shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
              : ""
          }`}
        >
          {/* Layer 1: Top Edge Specular Reflection Stroke */}
          <span className="liquid-glass-highlight" />

          {/* Layer 2: Internal Vertical Light Sheen Overlay */}
          <span className="liquid-glass-sheen" />

          <LayoutGroup id="navbar-tabs">
            {navItems.map((item) => {
              const isActive =
                location.pathname === "/" && activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-colors duration-250 ease-out z-20 ${
                    isActive
                      ? "text-neutral-950 dark:text-white font-semibold dark:font-medium"
                      : "text-neutral-700/90 dark:text-slate-300/80 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 24,
                        mass: 1.0,
                        restDelta: 0.001,
                        restSpeed: 0.001,
                      }}
                      className="absolute inset-0 rounded-full liquid-glass-active-pill overflow-hidden pointer-events-none z-10"
                    >
                      <span className="absolute top-0 left-2 right-2 h-[1px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/90 to-transparent pointer-events-none" />
                    </motion.span>
                  )}

                  <span className="relative z-30">{item.label}</span>
                </button>
              );
            })}
          </LayoutGroup>
        </nav>

        {/* RIGHT: Theme Switcher Bulb & LET'S TALK CTA Button */}
        {/* Increased gap-9 sm:gap-11 creates clear horizontal separation between bulb and button */}
        <div className="flex items-center gap-9 sm:gap-11 relative z-20">
          
          {/* Theme Switcher Bulb - Hides smoothly on scroll */}
          <div
            className={`transition-all duration-300 ${
              scrolled
                ? "opacity-0 -translate-y-2 pointer-events-none"
                : "opacity-100 translate-y-0 pointer-events-auto"
            }`}
          >
            <LightPullThemeSwitcher />
          </div>

          {/* LET'S TALK Button - Remains visible & sticky at top alongside Navbar on scroll */}
          <Link
            to="/contact"
            className="flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs md:text-sm font-medium tracking-[0.14em] text-neutral-900 dark:text-white border border-neutral-800/80 dark:border-indigo-400/50 liquid-glass-control hover:border-black dark:hover:border-indigo-400/90 transition-all duration-300 group relative overflow-hidden pointer-events-auto"
          >
            <span className="absolute top-0 left-3 right-3 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
            <span className="relative z-10">LET'S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-700 dark:text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black dark:group-hover:text-white relative z-10" />
          </Link>
        </div>

      </div>
    </header>
  );
};
