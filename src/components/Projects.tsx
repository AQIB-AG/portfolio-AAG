"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Star } from "lucide-react";

interface ProjectItem {
  id: string;
  category: string;
  isFeatured?: boolean;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  atsScore?: number;
  matchesCount?: number;
  skillsCount?: number;
}

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    "All Projects",
    "Web Applications",
    "AI / ML",
    "Dashboards",
    "Full Stack",
    "Embedded Systems",
  ];

  const projectsList: ProjectItem[] = [
    {
      id: "smart-resume",
      category: "AI / ML",
      isFeatured: true,
      title: "Smart Resume Analyzer & Job Matcher",
      description:
        "AI-powered platform that analyzes resumes, calculates ATS score, identifies skill gaps, and matches users with relevant job opportunities.",
      techStack: ["Node.js", "Express", "React", "MongoDB"],
      liveUrl: "https://example.com/smart-resume",
      githubUrl: "https://github.com/aqibag/smart-resume-analyzer",
      atsScore: 85,
      matchesCount: 24,
      skillsCount: 18,
    },
    {
      id: "iot-dashboard",
      category: "Dashboards",
      isFeatured: false,
      title: "Real-Time IoT Safety & Health Monitor",
      description:
        "Embedded sensors and telemetry dashboard providing instant alerts, anomaly detection, and historical metrics for industrial environments.",
      techStack: ["React", "Node.js", "MQTT", "C++"],
      liveUrl: "https://example.com/iot-monitor",
      githubUrl: "https://github.com/aqibag/iot-safety-monitor",
      atsScore: 92,
      matchesCount: 12,
      skillsCount: 15,
    },
    {
      id: "agentic-ai",
      category: "Full Stack",
      isFeatured: false,
      title: "Agentic AI Task Orchestration Engine",
      description:
        "Autonomous multi-agent orchestration suite for automated code refactoring, test execution, and deployment pipelines.",
      techStack: ["Next.js", "TypeScript", "Python", "Tailwind"],
      liveUrl: "https://example.com/agentic-ai",
      githubUrl: "https://github.com/aqibag/agentic-orchestrator",
      atsScore: 88,
      matchesCount: 30,
      skillsCount: 22,
    },
  ];

  const filteredProjects =
    activeCategory === "All Projects"
      ? projectsList
      : projectsList.filter(
          (p) => p.category === activeCategory || activeCategory === "Full Stack"
        );

  const activeProject = filteredProjects[currentIndex % filteredProjects.length] || projectsList[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-indigo-400 uppercase">
            MY WORK
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Projects that solve <span className="text-indigo-200">real problems.</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-normal">
            A selection of full-stack applications and systems that I&apos;ve built to
            create real-world impact.
          </p>
        </div>

        {/* Carousel Viewport Container matching PDF Page 3 */}
        <div className="relative flex items-center justify-center py-6">
          {/* Navigation Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 z-20 w-12 h-12 rounded-full glass-nav hover:bg-white/10 text-white flex items-center justify-center border border-white/15 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-gray-300" />
          </button>

          {/* Navigation Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 z-20 w-12 h-12 rounded-full glass-nav hover:bg-white/10 text-white flex items-center justify-center border border-white/15 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-gray-300" />
          </button>

          {/* Main Showcase Laptop / Dashboard Card */}
          <div className="w-full max-w-5xl glass-container rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl relative">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Featured Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-indigo-400 text-indigo-400" />
                <span>Featured Project</span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {activeProject.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {activeProject.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4">
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-nav hover:bg-white/15 text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-full border border-white/20 shadow-md flex items-center gap-1.5 transition-all hover:scale-105"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-300" />
                </a>

                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-nav hover:bg-white/15 text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-full border border-white/20 shadow-md flex items-center gap-1.5 transition-all hover:scale-105"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-300" />
                </a>
              </div>
            </div>

            {/* Right Mockup Screen Column matching PDF Page 3 */}
            <div className="lg:col-span-7 bg-[#0b0e17] rounded-2xl border border-white/10 overflow-hidden shadow-2xl p-4 md:p-6 space-y-4">
              {/* Dashboard Top Header Mock */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-gray-400">Dashboard / Welcome back, Aqib 👋</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px]">Live App</span>
              </div>

              {/* Dashboard Stat Grid */}
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 text-center">
                  <p className="text-[10px] text-gray-400">ATS Score</p>
                  <p className="text-base font-bold text-emerald-400">85/100</p>
                  <span className="text-[9px] text-emerald-400/80">Good Score</span>
                </div>
                <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 text-center">
                  <p className="text-[10px] text-gray-400">Job Matches</p>
                  <p className="text-base font-bold text-indigo-400">24</p>
                  <span className="text-[9px] text-indigo-400/80">High Match</span>
                </div>
                <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 text-center">
                  <p className="text-[10px] text-gray-400">Skills Found</p>
                  <p className="text-base font-bold text-blue-400">18</p>
                  <span className="text-[9px] text-blue-400/80">Strong</span>
                </div>
                <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 text-center">
                  <p className="text-[10px] text-gray-400">Resume Quality</p>
                  <p className="text-xs font-bold text-purple-400 mt-1">Excellent</p>
                  <span className="text-[9px] text-purple-400/80">Top 30%</span>
                </div>
              </div>

              {/* Dashboard Graphic Breakdown Charts */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {/* Radial Score Gauge */}
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex flex-col items-center justify-center">
                  <p className="text-[11px] text-gray-400 font-medium mb-2">Resume Score Overview</p>
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-gray-700"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-400"
                        strokeDasharray="85, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-base font-bold text-white">85</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-medium mt-1">Good Score</span>
                </div>

                {/* Radar Skill Matrix */}
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center">
                  <p className="text-[11px] text-gray-400 font-medium mb-1">Skills Breakdown</p>
                  <div className="w-full h-20 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400/80">
                      <polygon points="50,10 90,35 75,85 25,85 10,35" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                      <polygon points="50,25 75,40 65,75 35,75 25,40" fill="rgba(99,102,241,0.25)" stroke="#818cf8" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2">
          {filteredProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-indigo-400 shadow-[0_0_10px_#818cf8]"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Bottom Category Filter Tabs matching PDF Page 3 */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-5 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-white/15 text-white border border-white/30 shadow-lg"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
