"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Home, ArrowUpRight, Linkedin, Github, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0d14] text-white p-6 md:p-12 lg:p-16 relative flex items-center justify-center overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-900/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-900/15 blur-[140px] pointer-events-none rounded-full" />

      {/* Main Container Card matching PDF Page 6 */}
      <div className="w-full max-w-6xl glass-container rounded-3xl p-8 md:p-12 border border-white/10 relative shadow-2xl space-y-8">
        {/* Top Header Row with Logo & RETURN TO HOME Button */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-wider text-white">AAG</span>
            <span className="text-[8px] tracking-[0.2em] text-gray-400 font-medium uppercase">
              AQIB ABDUL GHAFFAR
            </span>
          </div>

          <Link
            href="/"
            className="px-5 py-2 rounded-full glass-nav hover:bg-white/10 text-white text-xs font-semibold tracking-wider flex items-center gap-2 border border-rose-500/30 hover:border-rose-400 transition-all hover:scale-105"
          >
            <span>RETURN TO HOME</span>
            <Home className="w-3.5 h-3.5 text-rose-400" />
          </Link>
        </div>

        {/* Content 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column matching PDF Page 6 */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-[0.3em] text-rose-400 uppercase">
                CONTACT
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let&apos;s build something <br />
                <span className="text-rose-400 drop-shadow-[0_0_15px_rgba(251,113,133,0.4)]">
                  amazing
                </span>{" "}
                together.
              </h1>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-normal pt-1">
                I&apos;m always open to discussing new projects, creative ideas or
                opportunities to be part of your vision. Let&apos;s connect and create
                impact that matters.
              </p>
            </div>

            {/* Contact Details Cards matching PDF Page 6 */}
            <div className="space-y-4">
              {/* Location Card */}
              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-rose-400 font-semibold">
                    LOCATION
                  </p>
                  <p className="text-sm font-medium text-white">Hyderabad, Telangana, India</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-rose-400 font-semibold">
                    PHONE
                  </p>
                  <p className="text-sm font-medium text-white">+91 939 110 30 20</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-rose-400 font-semibold">
                    EMAIL
                  </p>
                  <p className="text-sm font-medium text-white">hasib4aqib@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
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

          {/* Right Form Column matching PDF Page 6 */}
          <div className="lg:col-span-7 bg-[#0d111c]/90 rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl space-y-6">
            <h2 className="text-sm font-bold tracking-widest text-gray-300 uppercase">
              CONTACT FORM
            </h2>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-xs text-gray-300">
                  Thank you for reaching out. Aqib will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-white/10 text-xs font-semibold hover:bg-white/20"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-[#121724] text-white text-sm px-4 py-3.5 rounded-xl border border-white/10 focus:border-rose-400/50 focus:outline-none transition-colors placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-[#121724] text-white text-sm px-4 py-3.5 rounded-xl border border-white/10 focus:border-rose-400/50 focus:outline-none transition-colors placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#121724] text-white text-sm px-4 py-3.5 rounded-xl border border-white/10 focus:border-rose-400/50 focus:outline-none transition-colors placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    placeholder="Your message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full bg-[#121724] text-white text-sm px-4 py-3.5 rounded-xl border border-white/10 focus:border-rose-400/50 focus:outline-none transition-colors placeholder:text-gray-500 resize-none"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="glass-nav hover:bg-white/15 text-white text-xs font-semibold px-6 py-3 rounded-full border border-emerald-400/40 shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                  >
                    <span>SEND MESSAGE</span>
                    <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
