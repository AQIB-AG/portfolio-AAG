"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Award, Calendar, Tag, ShieldCheck, UserCheck } from "lucide-react";

interface CertificateItem {
  id: string;
  title: string;
  subtitle: string;
  recipient: string;
  issuer: string;
  date: string;
  category: string;
  credentialId: string;
  credentialUrl: string;
  badgeType: string;
}

export const Achievements: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates: CertificateItem[] = [
    {
      id: "kaggle-ai",
      title: "Kaggle AI Agents",
      subtitle: "Certificate of Completion",
      recipient: "Aqib Abdul Ghaffar",
      issuer: "Google",
      date: "June 2024",
      category: "AI / Machine Learning",
      credentialId: "GGL-KAGGLE-AI-2024",
      credentialUrl: "https://www.kaggle.com/learn/certification",
      badgeType: "Google Cloud",
    },
    {
      id: "mern-fullstack",
      title: "Full-Stack Web Engineering",
      subtitle: "Professional Certification",
      recipient: "Aqib Abdul Ghaffar",
      issuer: "Meta / Coursera",
      date: "December 2024",
      category: "Full-Stack Development",
      credentialId: "META-MERN-88492",
      credentialUrl: "https://coursera.org/verify",
      badgeType: "Meta Certified",
    },
    {
      id: "iot-embedded",
      title: "IoT Systems Architecture & Microcontrollers",
      subtitle: "Specialization Certificate",
      recipient: "Aqib Abdul Ghaffar",
      issuer: "IEEE / Embedded Systems Institute",
      date: "March 2025",
      category: "Embedded IoT",
      credentialId: "IEEE-IOT-2025-99",
      credentialUrl: "https://ieee.org/credentials",
      badgeType: "IEEE Master",
    },
  ];

  const currentCert = certificates[currentIndex % certificates.length];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
  };

  return (
    <section
      id="achievements"
      className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-purple-400 uppercase">
            ACHIEVEMENTS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Certificates that reflect the{" "}
            <span className="font-serif italic bg-gradient-to-r from-purple-300 via-indigo-300 to-pink-300 bg-clip-text text-transparent">
              journey.
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-normal">
            A collection of certifications, workshops and courses that represent
            my continuous learning and growth.
          </p>
        </div>

        {/* Counter Indicator Pill matching PDF Page 4 */}
        <div className="flex justify-center">
          <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
            <span className="text-white font-bold">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>{" "}
            / {String(certificates.length).padStart(2, "0")}
          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="relative flex items-center justify-center">
          {/* Outer Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-20 w-12 h-12 rounded-full glass-nav hover:bg-white/10 text-white flex items-center justify-center border border-white/15 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl"
            aria-label="Previous certificate"
          >
            <ChevronLeft className="w-6 h-6 text-gray-300" />
          </button>

          {/* Outer Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-20 w-12 h-12 rounded-full glass-nav hover:bg-white/10 text-white flex items-center justify-center border border-white/15 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl"
            aria-label="Next certificate"
          >
            <ChevronRight className="w-6 h-6 text-gray-300" />
          </button>

          {/* Certificate Main Card & Details Grid */}
          <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Certificate Graphic Card (Left 8 Cols) matching PDF Page 4 */}
            <div className="lg:col-span-8 bg-white text-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl border-4 border-gray-200 relative overflow-hidden flex flex-col justify-between min-h-[360px]">
              {/* Watermark G */}
              <div className="absolute right-4 bottom-4 text-gray-100 font-extrabold text-9xl select-none pointer-events-none opacity-80">
                G
              </div>

              {/* Header Logo */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold text-blue-600">G</span>
                  <span className="text-xl font-bold text-red-500">o</span>
                  <span className="text-xl font-bold text-yellow-500">o</span>
                  <span className="text-xl font-bold text-blue-600">g</span>
                  <span className="text-xl font-bold text-green-600">l</span>
                  <span className="text-xl font-bold text-red-500">e</span>
                </div>
                <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                  Official Credential
                </span>
              </div>

              {/* Title & Recipient */}
              <div className="space-y-4 my-6 z-10">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">
                  {currentCert.subtitle}
                </p>
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                  {currentCert.title}
                </h3>
                <div className="pt-2">
                  <p className="text-xs text-gray-400 font-medium">Awarded to</p>
                  <p className="text-lg font-bold text-blue-600 font-serif">
                    {currentCert.recipient}
                  </p>
                </div>
              </div>

              {/* Footer Signatures & Stamp */}
              <div className="flex items-end justify-between z-10 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-xs font-mono text-gray-500">{currentCert.date}</p>
                  <div className="mt-2 border-b border-gray-400 w-28 pb-1">
                    <p className="font-serif italic text-xs text-gray-800">Pooja Parmar</p>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-0.5">Director, Google Cloud</p>
                </div>

                {/* Stamp Seal */}
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-blue-500 flex flex-col items-center justify-center text-center p-1 bg-blue-50/50">
                  <span className="text-[8px] font-bold text-blue-700 uppercase">Google Cloud</span>
                  <span className="text-[7px] text-gray-600">Skills Boost</span>
                </div>
              </div>
            </div>

            {/* Right Details Panel (Right 4 Cols) matching PDF Page 4 */}
            <div className="lg:col-span-4 glass-container rounded-2xl p-6 space-y-5 border border-white/10">
              <div className="space-y-4">
                {/* Detail 1 */}
                <div className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
                  <div>
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider">Credential</p>
                    <p className="text-sm font-semibold text-white">Certificate</p>
                  </div>
                </div>

                {/* Detail 2 */}
                <div className="flex items-start gap-3">
                  <UserCheck className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
                  <div>
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider">Issuer</p>
                    <p className="text-sm font-semibold text-white">{currentCert.issuer}</p>
                  </div>
                </div>

                {/* Detail 3 */}
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
                  <div>
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider">Date</p>
                    <p className="text-sm font-semibold text-white">{currentCert.date}</p>
                  </div>
                </div>

                {/* Detail 4 */}
                <div className="flex items-start gap-3">
                  <Tag className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
                  <div>
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider">Category</p>
                    <p className="text-sm font-semibold text-white">{currentCert.category}</p>
                  </div>
                </div>

                {/* Detail 5 */}
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
                  <div>
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider">Credential ID</p>
                    <p className="text-xs font-mono font-medium text-gray-300">{currentCert.credentialId}</p>
                  </div>
                </div>
              </div>

              {/* View Credential CTA */}
              <div className="pt-2">
                <a
                  href={currentCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full glass-nav hover:bg-white/15 text-white text-xs font-medium py-2.5 px-4 rounded-xl border border-white/15 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <span>View Credential</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2">
          {certificates.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-purple-400 shadow-[0_0_10px_#c084fc]"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to certificate ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
