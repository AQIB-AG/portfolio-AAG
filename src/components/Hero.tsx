"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 px-6 md:px-16 lg:px-24 flex items-center justify-between overflow-hidden hero-radial-glow"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 bg-purple-900/20 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-900/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 space-y-6 z-10">
          <div className="inline-block">
            <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gray-400 uppercase">
              HI, I&apos;M
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
            AQIB <br />
            <span className="text-gray-200">ABDUL GHAFFAR</span>
          </h1>

          <p className="text-sm md:text-base text-gray-300 font-normal leading-relaxed max-w-xl">
            I am a final-year CSE (IoT) student specializing in production-ready
            full-stack web applications and embedded systems. Leveraging the
            MERN stack, I build secure, user-centric platforms—ranging from
            ATS resume analyzers to real-time safety monitoring dashboards.
            I actively compete in hackathons and explore agentic AI to drive
            impactful innovation.
          </p>

          {/* Social Links Pill Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-nav hover:bg-white/10 text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-full border border-white/15 shadow-lg flex items-center gap-2 group transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-nav hover:bg-white/10 text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-full border border-white/15 shadow-lg flex items-center gap-2 group transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current text-gray-200" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Right Column: 3D Bobblehead Avatar Showcase Visual */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-[4/5] flex items-center justify-center">
            {/* Ambient Background Dark Pedestal Platform */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black/60 rounded-3xl" />

            {/* Handcrafted High-Fidelity 3D Avatar Illustration matching PDF Page 1 */}
            <div className="relative w-full h-full flex items-end justify-center pb-4">
              <svg
                viewBox="0 0 500 600"
                className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                <defs>
                  <linearGradient id="pedestalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="woodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#7c2d12" />
                    <stop offset="100%" stopColor="#451a03" />
                  </linearGradient>
                  <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e2e8f0" />
                    <stop offset="100%" stopColor="#94a3b8" />
                  </linearGradient>
                  <radialGradient id="avatarGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Studio Glow Background */}
                <ellipse cx="250" cy="320" rx="200" ry="220" fill="url(#avatarGlow)" />

                {/* Wooden Pedestal for Bobblehead */}
                <path d="M 220,480 L 310,480 L 310,560 L 220,560 Z" fill="url(#woodGrad)" />
                <path d="M 220,480 L 310,480 L 315,472 L 225,472 Z" fill="#9a3412" />

                {/* --- Bobblehead Character (Left Side on Box) --- */}
                {/* Bobblehead Legs */}
                <rect x="248" y="400" width="12" height="80" rx="6" fill="#1e293b" />
                <rect x="268" y="400" width="12" height="80" rx="6" fill="#1e293b" />
                <ellipse cx="254" cy="480" rx="10" ry="5" fill="#f8fafc" />
                <ellipse cx="274" cy="480" rx="10" ry="5" fill="#f8fafc" />

                {/* Bobblehead Jacket / Torso */}
                <path d="M 240,320 C 240,300 290,300 290,320 L 292,400 L 238,400 Z" fill="url(#jacketGrad)" />
                <path d="M 252,320 L 252,400" stroke="#0f172a" strokeWidth="4" />

                {/* Bobblehead Stylized Oversized 3D Head */}
                <ellipse cx="265" cy="240" rx="55" ry="65" fill="#fdba74" />
                {/* Hair */}
                <path d="M 210,240 C 210,160 320,160 320,240 C 310,170 220,170 210,240 Z" fill="#1e1005" />
                <path d="M 215,220 C 240,160 310,170 320,210 Q 300,150 240,160 Z" fill="#291807" />
                {/* Eyes */}
                <circle cx="245" cy="240" r="7" fill="#0f172a" />
                <circle cx="285" cy="240" r="7" fill="#0f172a" />
                <circle cx="247" cy="238" r="2.5" fill="#ffffff" />
                <circle cx="287" cy="238" r="2.5" fill="#ffffff" />
                {/* Smile & Beard */}
                <path d="M 255,265 Q 265,275 275,265" stroke="#7c2d12" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 240,260 Q 265,290 290,260" stroke="#291807" strokeWidth="3" fill="none" opacity="0.6" />

                {/* --- Real Person Silhouette / Figure (Right Side Leaning) --- */}
                {/* Real Legs & Sneakers */}
                <path d="M 340,380 L 350,540 L 370,540 L 360,380 Z" fill="#0f172a" />
                <path d="M 370,380 L 390,535 L 410,535 L 385,380 Z" fill="#0f172a" />
                <ellipse cx="360" cy="542" rx="14" ry="7" fill="#f1f5f9" />
                <ellipse cx="400" cy="537" rx="14" ry="7" fill="#f1f5f9" />

                {/* Real Jacket & Inner Shirt */}
                <path d="M 325,230 Q 370,220 410,240 L 420,380 L 335,380 Z" fill="url(#jacketGrad)" />
                <path d="M 355,230 L 365,380 L 390,380 L 380,230 Z" fill="#020617" />

                {/* Real Head & Beard Styling matching Aqib Abdul Ghaffar */}
                <ellipse cx="370" cy="180" rx="30" ry="36" fill="#fed7aa" />
                <path d="M 338,175 C 338,125 402,125 402,175 Q 395,130 345,135 Z" fill="#1c1917" />
                <circle cx="358" cy="180" r="4" fill="#020617" />
                <circle cx="382" cy="180" r="4" fill="#020617" />
                <path d="M 362,198 Q 370,204 378,198" stroke="#7c2d12" strokeWidth="2" fill="none" />
                <path d="M 350,190 Q 370,218 390,190" stroke="#1c1917" strokeWidth="2.5" fill="none" opacity="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
