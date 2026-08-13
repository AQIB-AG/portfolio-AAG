import React, { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Star, Database, Atom, Server, Flame } from "lucide-react";

interface ProjectItem {
  id: string;
  category: string;
  isFeatured?: boolean;
  title: string;
  desc: string;
  techIcons: React.ReactNode[];
  techNames: string[];
  imageSrc: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: ProjectItem[] = [
    {
      id: "1",
      category: "Full Stack",
      isFeatured: true,
      title: "Smart Resume Analyzer & Job Matcher",
      desc: "AI-powered platform that analyzes resumes, calculates ATS score, identifies skill gaps, and matches users with relevant job opportunities.",
      techIcons: [
        <Database key="mongo" className="w-4 h-4 text-emerald-400" />,
        <span key="express" className="text-xs font-bold text-slate-200">ex</span>,
        <Atom key="react" className="w-4 h-4 text-cyan-400" />,
        <Server key="node" className="w-4 h-4 text-emerald-500" />,
      ],
      techNames: ["MongoDB", "Express", "React", "Node.js"],
      imageSrc: "/project_dashboard_ui.png",
      liveUrl: "https://github.com/aqibabdulghaffar",
      githubUrl: "https://github.com/aqibabdulghaffar",
    },
    {
      id: "2",
      category: "Dashboards",
      isFeatured: true,
      title: "Real-Time Health & IoT Safety Dashboard",
      desc: "Industrial safety telemetry monitoring platform integrating ESP32 sensor pipelines, WebSockets, and real-time alert processing.",
      techIcons: [
        <Flame key="iot" className="w-4 h-4 text-orange-400" />,
        <Atom key="react" className="w-4 h-4 text-cyan-400" />,
        <Server key="node" className="w-4 h-4 text-emerald-500" />,
      ],
      techNames: ["ESP32", "React", "Node.js", "MQTT"],
      imageSrc: "/project_dashboard_ui.png",
      liveUrl: "https://github.com/aqibabdulghaffar",
      githubUrl: "https://github.com/aqibabdulghaffar",
    },
  ];

  const categories = [
    "All Projects",
    "Web Applications",
    "AI / ML",
    "Dashboards",
    "Full Stack",
    "Embedded Systems",
  ];

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  const currentProject = filteredProjects[currentIndex] || projects[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden bg-[url('/lightmode_background.png')] dark:bg-[url('/homepage_background.png')] bg-cover bg-center bg-no-repeat transition-all duration-300">
      {/* Centered Section Header matching PDF Page 3 */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-12">
        <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-indigo-600 dark:text-indigo-400 uppercase mb-4 block">
          MY WORK
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight mb-4">
          Projects that solve real problems.
        </h2>
        <p className="text-neutral-700 dark:text-slate-300 text-sm md:text-base font-normal leading-relaxed">
          A selection of full-stack applications and systems that I've built to create real-world impact.
        </p>
      </div>

      {/* Main Interactive Showcase Carousel matching PDF Page 3 */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4 md:gap-8 mb-12">
        
        {/* Left Arrow Navigation Button */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-neutral-300/80 dark:border-white/15 bg-white/70 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 text-neutral-900 dark:text-white shadow-md dark:shadow-lg backdrop-blur-md shrink-0"
        >
          <ChevronLeft className="w-6 h-6 text-neutral-700 dark:text-slate-300" />
        </button>

        {/* Featured Project Showcase Card Container */}
        <div className="relative w-full glass-panel rounded-3xl p-6 md:p-10 border border-neutral-300/80 dark:border-white/15 bg-white/75 dark:bg-[#121622]/80 backdrop-blur-xl shadow-xl dark:shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              {/* Badge: ☆ Featured Project */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 border border-indigo-300 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium mb-6">
                <Star className="w-3.5 h-3.5 fill-indigo-500 dark:fill-indigo-400 text-indigo-500 dark:text-indigo-400" />
                <span>Featured Project</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white leading-tight mb-4">
                {currentProject.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-700 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                {currentProject.desc}
              </p>

              {/* Tech Stack Icons Row */}
              <div className="flex items-center gap-2 mb-8">
                {currentProject.techIcons.map((icon, idx) => (
                  <div
                    key={idx}
                    className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/80 dark:bg-white/5 border border-neutral-300/80 dark:border-white/10"
                  >
                    {icon}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={currentProject.liveUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/20 transition-all duration-300 shadow-lg group"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={currentProject.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-md group"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Right Dashboard UI Mockup Column */}
            <div className="lg:col-span-6 relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#090c14]">
              <img
                src={currentProject.imageSrc}
                alt={currentProject.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

          </div>
        </div>

        {/* Right Arrow Navigation Button */}
        <button
          onClick={handleNext}
          className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-white shadow-lg backdrop-blur-md shrink-0"
        >
          <ChevronRight className="w-6 h-6 text-slate-300" />
        </button>

      </div>

      {/* Carousel Pagination Dots matching PDF Page 3 */}
      <div className="flex items-center justify-center gap-2 mb-12">
        {[0, 1, 2, 3, 4, 5, 6].map((dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setCurrentIndex(dotIndex % projects.length)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              dotIndex === 1
                ? "w-6 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Category Filters Bar matching PDF Page 3 */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-2.5 p-2 rounded-full border border-white/10 bg-[#121622]/80 backdrop-blur-xl shadow-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide transition-all duration-200 ${
                activeCategory === cat
                  ? "text-white bg-white/15 border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] font-semibold"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
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

