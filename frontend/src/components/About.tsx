import React from "react";
import { Code2, Cpu, Brain, Trophy } from "lucide-react";

export const About: React.FC = () => {
  const specialties = [
    {
      icon: Code2,
      label: "Full-Stack",
      sublabel: "Developer",
    },
    {
      icon: Cpu,
      label: "IoT",
      sublabel: "Enthusiast",
    },
    {
      icon: Brain,
      label: "AI",
      sublabel: "Explorer",
    },
    {
      icon: Trophy,
      label: "Hackathon",
      sublabel: "Participant",
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-[url('/lightmode_background.png')] dark:bg-[url('/about_background.png')] bg-cover bg-center bg-no-repeat transition-all duration-300">

      {/* Main Container - 2 Column Split matching PDF Page 2 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
        
        {/* Left Column: 3D Crossed-Arms Avatar Render */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/5] flex items-center justify-center">
            {/* Ambient Lighting & Shadow Floor */}
            <div className="absolute bottom-0 w-3/4 h-8 bg-black/40 blur-xl rounded-full" />
            <img
              src="/about_avatar_3d.png"
              alt="Aqib Abdul Ghaffar - 3D Character Avatar Standing with Crossed Arms"
              className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right Column: Heading, Verbatim Bio & 4 Specialty Cards */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Section Tag */}
          <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-indigo-600 dark:text-indigo-400 uppercase mb-4">
            ABOUT ME
          </span>

          {/* Heading - Driven by curiosity. Built for impact. */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6">
            Driven by curiosity. <br />
            <span className="relative inline-block text-neutral-800 dark:text-slate-100">
              Built for impact.
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent rounded-full opacity-80" />
            </span>
          </h2>

          {/* Bio Copy - Verbatim PDF Page 2 */}
          <p className="max-w-2xl text-neutral-700 dark:text-slate-300 text-sm md:text-base font-normal leading-relaxed mb-12">
            I am a final-year CSE (IoT) student specializing in production-ready full-stack web applications and embedded systems. Leveraging the MERN stack, I build secure, user-centric platforms—ranging from ATS resume analyzers to real-time safety monitoring dashboards. I actively compete in hackathons and explore agentic AI to drive impactful innovation.
          </p>

          {/* 4 Specialty Glass Icon Cards Row matching PDF Page 2 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 w-full">
            {specialties.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-center p-4 rounded-2xl border border-neutral-300/80 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-md hover:bg-white dark:hover:bg-white/[0.06] hover:border-neutral-400 dark:hover:border-white/20 transition-all duration-300 group shadow-md dark:shadow-lg dark:shadow-black/20"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/80 dark:bg-white/5 border border-neutral-300/80 dark:border-white/10 mb-3 group-hover:scale-105 group-hover:border-indigo-400/40 transition-all duration-300 shadow-inner">
                    <Icon className="w-6 h-6 text-neutral-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-neutral-900 dark:text-slate-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                  <span className="text-xs md:text-sm font-medium text-neutral-600 dark:text-slate-400 group-hover:text-neutral-900 dark:group-hover:text-slate-300 transition-colors">
                    {item.sublabel}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

