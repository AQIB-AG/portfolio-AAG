import React from "react";
import { Link } from "react-router-dom";
import { Send, Heart, Linkedin, Github, Mail } from "lucide-react";

export const CtaFooter: React.FC = () => {
  return (
    <footer className="relative pt-16 pb-20 overflow-hidden bg-[url('/lightmode_background.png')] dark:bg-[url('/homepage_background.png')] bg-cover bg-center bg-no-repeat transition-all duration-300">
      {/* Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Glass CTA Card matching PDF Page 5 */}
        <div className="relative w-full glass-panel rounded-3xl p-10 md:p-14 border border-neutral-300/80 dark:border-white/15 bg-white/75 dark:bg-[#121622]/80 backdrop-blur-xl shadow-xl dark:shadow-2xl overflow-hidden text-center mb-20">
          
          {/* Side Specular Glow Borders */}
          <div className="absolute top-1/2 -left-1/4 -translate-y-1/2 w-48 h-64 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute top-1/2 -right-1/4 -translate-y-1/2 w-48 h-64 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

          {/* Paper Plane Green Icon */}
          <div className="flex justify-center mb-6">
            <Send className="w-10 h-10 text-emerald-500 dark:text-emerald-400 -rotate-45 drop-shadow-[0_0_12px_rgba(52,211,153,0.5)]" />
          </div>

          {/* Title - Have a project in mind? */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
            Have a <span className="text-emerald-600 dark:text-emerald-400 font-semibold">project</span> in mind?
          </h2>

          {/* Subtitle - Verbatim PDF Page 5 */}
          <p className="text-neutral-700 dark:text-slate-300 text-sm md:text-base font-normal mb-8">
            Let's build something impactful together.
          </p>

          {/* Send Message Glass CTA Button */}
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs md:text-sm font-medium text-white border border-emerald-500/50 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 dark:from-emerald-600/40 dark:via-emerald-500/30 dark:to-teal-600/40 hover:brightness-110 transition-all duration-300 shadow-md dark:shadow-[0_0_20px_rgba(52,211,153,0.25)] group"
            >
              <Send className="w-4 h-4 text-white dark:text-emerald-300 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Send Message</span>
            </Link>
          </div>

        </div>

        {/* Footer Area matching PDF Page 5 */}
        <div className="flex flex-col items-center justify-center text-center gap-3 text-xs md:text-sm text-neutral-600 dark:text-slate-400">
          
          {/* Copyright Line */}
          <p>© 2026 Aqib Abdul Ghaffar — All rights reserved</p>

          {/* Made with Line */}
          <p className="flex items-center gap-1.5 text-slate-400">
            Made with <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" /> using React, Tailwind & Framer Motion
          </p>

          {/* Email Link in Glowing Emerald Font */}
          <a
            href="mailto:hasib4aqib@gmail.com"
            className="text-emerald-400 font-medium hover:underline transition-all mt-1"
          >
            hasib4aqib@gmail.com
          </a>

          {/* Social Icon Pill Buttons Centered Row matching PDF Page 5 */}
          <div className="flex items-center gap-3 mt-6">
            <a
              href="https://linkedin.com/in/aqib-abdul-ghaffar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 shadow-md"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/aqibabdulghaffar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 shadow-md"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="mailto:hasib4aqib@gmail.com"
              className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 shadow-md"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

