import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-screen pt-12 sm:pt-16 pb-4 lg:pb-8 flex flex-col overflow-hidden bg-[url('/lightmode_background.png')] dark:bg-[url('/homepage_background.png')] bg-cover bg-bottom bg-no-repeat transition-all duration-300"
    >
      {/* Main Grid Container - flex-1 fills remaining vertical space below top navbar */}
      <div className="relative z-10 flex-1 w-full max-w-[1320px] mx-auto px-6 sm:px-10 md:px-16 grid grid-cols-1 lg:grid-cols-12 items-stretch gap-8 lg:gap-4">
        
        {/* Left Column: Typography & Social Glass CTAs */}
        {/* pt-24 sm:pt-28 md:pt-32 lg:pt-36 moves the entire text composition downward, creating vertical breathing room below the navbar matching reference */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center text-left pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-8 lg:pb-14">
          
          {/* Natural Greeting Badge */}
          <span className="text-xs md:text-sm font-medium tracking-normal uppercase text-neutral-600 dark:text-slate-400 mb-2.5">
            HI, I'M
          </span>

          {/* Display Heading - Line 1: AQIB, Line 2: ABDUL GHAFFAR */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-neutral-900 dark:text-white uppercase leading-[1.08] mb-5 tracking-tight font-bold">
            AQIB <br />
            <span className="text-neutral-900 dark:text-white font-bold">
              ABDUL GHAFFAR
            </span>
          </h1>

          {/* Description Paragraph */}
          <p className="max-w-[550px] text-neutral-700/90 dark:text-slate-300/85 text-sm md:text-[15px] font-normal leading-relaxed mb-8">
            I am a final-year CSE (IoT) student specializing in production-ready full-stack web applications and embedded systems. Leveraging the MERN stack, I build secure, user-centric platforms—ranging from ATS resume analyzers to real-time safety monitoring dashboards. I actively compete in hackathons and explore agentic AI to drive impactful innovation.
          </p>

          {/* Social Glass CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            {/* LinkedIn Glass Pill */}
            <a
              href="https://www.linkedin.com/in/aqib-abdul-ghaffar-497047302?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full text-xs md:text-sm font-medium text-neutral-900 dark:text-white border border-neutral-300/80 dark:border-white/15 bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl hover:bg-white dark:hover:bg-white/[0.08] hover:border-black dark:hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/40 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.06)] dark:shadow-lg group"
              aria-label="Visit Aqib Abdul Ghaffar's LinkedIn Profile"
            >
              <span className="w-4 h-4 rounded-sm bg-[#0a66c2] text-white text-[10px] font-bold flex items-center justify-center leading-none shrink-0">
                in
              </span>
              <span className="tracking-wide">LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 dark:text-slate-400 group-hover:text-black dark:group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* GitHub Glass Pill */}
            <a
              href="https://github.com/AQIB-AG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full text-xs md:text-sm font-medium text-neutral-900 dark:text-white border border-neutral-300/80 dark:border-white/15 bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl hover:bg-white dark:hover:bg-white/[0.08] hover:border-black dark:hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/40 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.06)] dark:shadow-lg group"
              aria-label="Visit Aqib Abdul Ghaffar's GitHub Profile"
            >
              <Github className="w-4 h-4 text-neutral-900 dark:text-white shrink-0" />
              <span className="tracking-wide">GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 dark:text-slate-400 group-hover:text-black dark:group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>

        {/* Right Column: 3D Mini-Me Figurine & Person Visual */}
        {/* Positioned in center-right area with full unconstrained vertical height anchored near the floor */}
        <div className="lg:col-span-5 flex justify-center lg:justify-center items-end pt-4 lg:pt-0 pb-2 lg:pb-6 relative z-10">
          
          {/* Single Character & Ground Shadow Composition Container */}
          <div className="relative inline-flex flex-col items-center justify-end">
            
            {/* ONE AND ONLY ONE FLOOR SHADOW */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 bottom-0 z-0 -translate-x-1/2 w-[82%] h-[18px] rounded-[50%] bg-black/50 blur-[10px]"
            />

            {/* Light Mode — supplied transparent asset */}
            <img
              src="/hero_avatar_3d_light.png"
              alt="Aqib Abdul Ghaffar - 3D Bobblehead & Standing Developer Character"
              className="dark:hidden w-auto h-[317px] sm:h-[360px] lg:h-[418px] xl:h-[454px] 2xl:h-[482px] object-contain object-bottom relative z-10 select-none pointer-events-none transition-transform duration-300"
            />

            {/* Dark Mode — original approved asset; do not modify */}
            <img
              src="/hero_avatar_3d.png"
              alt="Aqib Abdul Ghaffar - 3D Bobblehead & Standing Developer Character"
              className="hidden dark:block w-auto h-[317px] sm:h-[360px] lg:h-[418px] xl:h-[454px] 2xl:h-[482px] object-contain object-bottom relative z-10 select-none pointer-events-none transition-transform duration-300"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
