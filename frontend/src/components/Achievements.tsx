import React, { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, FileText, Globe, Calendar, Grid, Key } from "lucide-react";

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  credentialId: string;
  credentialUrl: string;
  imageSrc: string;
}

export const Achievements: React.FC = () => {
  const [activeCertIndex, setActiveCertIndex] = useState(0);

  const certificates: CertificateItem[] = [
    {
      id: "1",
      title: "Kaggle AI Agents",
      issuer: "Google",
      date: "June 2024",
      category: "AI / Machine Learning",
      credentialId: "GGL-KAGGLE-AI-2024",
      credentialUrl: "https://www.cloudskillsboost.google",
      imageSrc: "/google_kaggle_certificate.png",
    },
    {
      id: "2",
      title: "Full-Stack MERN Architecture",
      issuer: "MongoDB / Meta",
      date: "August 2024",
      category: "Full-Stack Development",
      credentialId: "MDB-MERN-FULLSTACK-2024",
      credentialUrl: "https://mongodb.com",
      imageSrc: "/google_kaggle_certificate.png",
    },
  ];

  const currentCert = certificates[activeCertIndex] || certificates[0];

  const handleNext = () => {
    setActiveCertIndex((prev) => (prev + 1) % certificates.length);
  };

  const handlePrev = () => {
    setActiveCertIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section id="achievements" className="relative py-24 md:py-32 overflow-hidden bg-[url('/lightmode_background.png')] dark:bg-[url('/homepage_background.png')] bg-cover bg-center bg-no-repeat transition-all duration-300">
      {/* Centered Section Header matching PDF Page 4 */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-12">
        <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-indigo-600 dark:text-indigo-400 uppercase mb-4 block">
          ACHIEVEMENTS
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight mb-4">
          Certificates that <br />
          <span className="font-serif italic font-normal text-indigo-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:via-indigo-300 dark:to-emerald-400">
            reflect the journey.
          </span>
        </h2>
        <p className="text-neutral-700 dark:text-slate-300 text-sm md:text-base font-normal leading-relaxed">
          A collection of certifications, workshops and courses that represent my continuous learning and growth.
        </p>
      </div>

      {/* Main Certificate Display Grid matching PDF Page 4 */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <div className="relative w-full flex items-center justify-between gap-4 md:gap-8 mb-10">
          
          {/* Left Counter Badge & Arrow Navigation */}
          <div className="hidden sm:flex flex-col items-center gap-6 shrink-0">
            {/* Counter Badge matching PDF Page 4 */}
            <div className="px-4 py-1.5 rounded-full border border-neutral-300/80 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md text-xs font-mono text-neutral-700 dark:text-slate-300">
              <span className="font-bold text-neutral-900 dark:text-white">0{activeCertIndex + 1}</span> / 12
            </div>

            {/* Left Arrow Button */}
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-300/80 dark:border-white/15 bg-white/70 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 text-neutral-900 dark:text-white shadow-md dark:shadow-lg backdrop-blur-md"
            >
              <ChevronLeft className="w-6 h-6 text-neutral-700 dark:text-slate-300" />
            </button>
          </div>

          {/* Central Certificate Render Card */}
          <div className="relative flex-1 glass-panel rounded-3xl p-4 md:p-6 border border-neutral-300/80 dark:border-white/15 bg-white/75 dark:bg-[#121622]/80 backdrop-blur-xl shadow-xl dark:shadow-2xl overflow-hidden flex items-center justify-center max-w-3xl mx-auto">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white">
              <img
                src={currentCert.imageSrc}
                alt={`${currentCert.title} Certificate`}
                className="w-full h-full object-contain p-2"
              />
            </div>
          </div>

          {/* Right Arrow Navigation & Details Panel */}
          <div className="hidden sm:flex flex-col items-center lg:items-start gap-6 shrink-0">
            {/* Right Arrow Button */}
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-white shadow-lg backdrop-blur-md mb-2"
            >
              <ChevronRight className="w-6 h-6 text-slate-300" />
            </button>

            {/* Right Side Details Glass Panel Card matching PDF Page 4 */}
            <div className="w-64 glass-panel rounded-2xl p-5 border border-white/15 bg-[#121622]/80 backdrop-blur-xl shadow-xl flex flex-col gap-4 text-xs">
              
              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-400">Credential</span>
                  <span className="font-medium text-white">Certificate</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-400">Issuer</span>
                  <span className="font-medium text-white">{currentCert.issuer}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-400">Date</span>
                  <span className="font-medium text-white">{currentCert.date}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Grid className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-400">Category</span>
                  <span className="font-medium text-white">{currentCert.category}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Key className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-400">Credential ID</span>
                  <span className="font-mono text-slate-300 text-[11px]">{currentCert.credentialId}</span>
                </div>
              </div>

              {/* View Credential Button */}
              <a
                href={currentCert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-between px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-all duration-300 group"
              >
                <span>View Credential</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

            </div>
          </div>

        </div>

        {/* Carousel Pagination Dots matching PDF Page 4 */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setActiveCertIndex(dotIndex % certificates.length)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                dotIndex === 0
                  ? "w-6 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

