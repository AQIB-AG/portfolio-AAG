"use client";

import React from "react";
import { Code2, Cpu, Brain, Trophy } from "lucide-react";

export const About: React.FC = () => {
  const specialties = [
    {
      icon: Code2,
      title: "Full-Stack",
      subtitle: "Developer",
    },
    {
      icon: Cpu,
      title: "IoT",
      subtitle: "Enthusiast",
    },
    {
      icon: Brain,
      title: "AI",
      subtitle: "Explorer",
    },
    {
      icon: Trophy,
      title: "Hackathon",
      subtitle: "Participant",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden about-radial-glow border-t border-white/5"
    >
      {/* Center glowing top dot divider */}
      <div className="flex justify-center mb-12">
        <div className="relative flex items-center justify-center">
          <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
          <div className="absolute w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_12px_#818cf8]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: 3D Character Avatar (Arms Crossed) matching PDF Page 2 */}
        <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-sm aspect-[4/5] flex items-center justify-center">
            {/* Background Radial Glow */}
            <div className="absolute inset-0 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Handcrafted High-Fidelity 3D Avatar (Arms Crossed) */}
            <svg
              viewBox="0 0 500 600"
              className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              <defs>
                <linearGradient id="jacketGradAbout" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#64748b" />
                </linearGradient>
                <radialGradient id="charGlowAbout" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>
              </defs>

              <ellipse cx="250" cy="300" rx="180" ry="220" fill="url(#charGlowAbout)" />

              {/* Legs */}
              <rect x="210" y="420" width="35" height="150" rx="10" fill="#0f172a" />
              <rect x="255" y="420" width="35" height="150" rx="10" fill="#0f172a" />

              {/* Torso & Crossed Arms */}
              <path
                d="M 170,300 C 170,260 330,260 330,300 L 340,440 L 160,440 Z"
                fill="url(#jacketGradAbout)"
              />
              <path d="M 230,300 L 230,440" stroke="#1e293b" strokeWidth="4" />

              {/* Crossed Arms */}
              <path
                d="M 175,320 Q 250,380 325,320 L 315,350 Q 250,400 185,350 Z"
                fill="#475569"
                stroke="#1e293b"
                strokeWidth="2"
              />
              {/* Watch on wrist */}
              <rect x="188" y="340" width="14" height="18" rx="4" fill="#020617" stroke="#38bdf8" strokeWidth="1.5" />

              {/* 3D Stylized Character Head */}
              <ellipse cx="250" cy="200" rx="75" ry="85" fill="#fdba74" />
              {/* Hair */}
              <path
                d="M 170,200 C 170,90 330,90 330,200 C 315,100 185,100 170,200 Z"
                fill="#1e1005"
              />
              <path d="M 180,180 C 210,100 310,110 320,170 Q 290,100 220,110 Z" fill="#2d1909" />
              {/* Eyebrows */}
              <path d="M 205,185 Q 225,178 240,185" stroke="#1e1005" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M 260,185 Q 275,178 295,185" stroke="#1e1005" strokeWidth="4" fill="none" strokeLinecap="round" />
              {/* Eyes */}
              <circle cx="222" cy="202" r="9" fill="#0f172a" />
              <circle cx="278" cy="202" r="9" fill="#0f172a" />
              <circle cx="225" cy="200" r="3" fill="#ffffff" />
              <circle cx="281" cy="200" r="3" fill="#ffffff" />
              {/* Nose & Beard */}
              <path d="M 250,200 L 246,220 L 254,220" stroke="#7c2d12" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 235,235 Q 250,248 265,235" stroke="#7c2d12" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              <path d="M 215,225 Q 250,270 285,225" stroke="#291807" strokeWidth="4" fill="none" opacity="0.75" />
            </svg>
          </div>
        </div>

        {/* Right Column: Text & Specialty Glass Cards */}
        <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
          <div className="space-y-3">
            <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-indigo-400 uppercase">
              ABOUT ME
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Driven by curiosity. <br />
              <span className="bg-gradient-to-r from-purple-300 via-indigo-200 to-pink-300 bg-clip-text text-transparent">
                Built for impact.
              </span>
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-2" />
          </div>

          <p className="text-sm md:text-base text-gray-300 font-normal leading-relaxed">
            I am a final-year CSE (IoT) student specializing in production-ready
            full-stack web applications and embedded systems. Leveraging the
            MERN stack, I build secure, user-centric platforms—ranging from ATS
            resume analyzers to real-time safety monitoring dashboards. I
            actively compete in hackathons and explore agentic AI to drive
            impactful innovation.
          </p>

          {/* 4 Specialty Glass Cards matching PDF Page 2 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {specialties.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-container glass-card-interactive p-5 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-300 group-hover:text-white group-hover:bg-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300 shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs text-gray-400 font-medium">
                      {item.title}
                    </p>
                    <p className="text-sm text-white font-semibold">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
