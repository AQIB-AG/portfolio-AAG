"use client";

import React from "react";
import Link from "next/link";
import { Send, Heart, Linkedin, Github, Mail } from "lucide-react";

export const CtaFooter: React.FC = () => {
  return (
    <footer className="relative pt-16 pb-12 px-6 md:px-16 lg:px-24 overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Call To Action Glass Card matching PDF Page 5 */}
        <div className="glass-container rounded-3xl p-10 md:p-16 text-center space-y-6 relative overflow-hidden shadow-2xl border border-white/10">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

          {/* Glowing Top Plane Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.25)]">
              <Send className="w-7 h-7 -translate-y-0.5 translate-x-0.5" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Have a <span className="text-emerald-400">project</span> in mind?
          </h2>

          <p className="text-sm md:text-base text-gray-300 max-w-lg mx-auto font-normal">
            Let&apos;s build something impactful together.
          </p>

          {/* CTA Button */}
          <div className="pt-2 flex justify-center">
            <Link
              href="/contact"
              className="glow-emerald-btn text-gray-950 text-sm font-semibold px-8 py-3.5 rounded-full flex items-center gap-2 shadow-lg transition-transform"
            >
              <Send className="w-4 h-4 text-gray-950" />
              <span>Send Message</span>
            </Link>
          </div>
        </div>

        {/* Footer Navigation & Copyright Info matching PDF Page 5 */}
        <div className="text-center space-y-6 pt-4">
          <p className="text-xs md:text-sm text-gray-400 font-medium">
            © 2026 Aqib Abdul Ghaffar — All rights reserved
          </p>

          <p className="text-xs text-gray-400 flex items-center justify-center gap-1.5 font-normal">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>using React, Tailwind &amp; Framer Motion</span>
          </p>

          <div>
            <a
              href="mailto:hasib4aqib@gmail.com"
              className="text-xs md:text-sm font-mono text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors"
            >
              hasib4aqib@gmail.com
            </a>
          </div>

          {/* Social Icons in Glass Circles */}
          <div className="flex justify-center items-center gap-4 pt-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-nav hover:bg-white/15 text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-nav hover:bg-white/15 text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="mailto:hasib4aqib@gmail.com"
              className="w-10 h-10 rounded-full glass-nav hover:bg-white/15 text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
