import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Home, ArrowUpRight, Linkedin, Github, CheckCircle2 } from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className="min-h-screen py-10 md:py-16 px-4 md:px-8 bg-[url('/lightmode_background.png')] dark:bg-[#080b11] bg-cover bg-center bg-no-repeat transition-all duration-300 flex items-center justify-center">
      
      {/* Outer Glass Window Container matching PDF Page 6 Frame */}
      <div className="relative w-full max-w-7xl glass-panel rounded-3xl p-6 md:p-12 border border-neutral-300/80 dark:border-white/15 bg-white/80 dark:bg-[#121620]/90 backdrop-blur-2xl shadow-xl dark:shadow-2xl overflow-hidden">
        
        {/* Header Bar matching PDF Page 6 */}
        <div className="flex items-center justify-between border-b border-neutral-300/80 dark:border-white/10 pb-6 mb-10">
          
          {/* Exact Original Uploaded Monogram Logo Artwork Asset - 2000px HiDPI Transparent PNG */}
          <Link to="/" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
            <img
              src="/logo.png"
              alt="Aqib Abdul Ghaffar Monogram Logo"
              className="h-7 sm:h-8 md:h-9 lg:h-[36px] w-auto object-contain transition-all duration-300 dark:brightness-100 brightness-0 dark:mix-blend-screen mix-blend-multiply"
            />
          </Link>

          {/* RETURN TO HOME Button matching PDF Page 6 */}
          <Link
            to="/"
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/40 bg-red-950/30 hover:bg-red-950/60 hover:border-red-400 text-white text-xs font-semibold tracking-wider transition-all duration-300 shadow-lg shadow-red-950/20 group"
          >
            <span>RETURN TO HOME</span>
            <Home className="w-3.5 h-3.5 text-slate-300 group-hover:text-white transition-colors" />
          </Link>
        </div>

        {/* 2-Column Split matching PDF Page 6 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Details & Verbatim Copy */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left">
            <div>
              {/* Section Tag */}
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-rose-400 uppercase mb-4 block">
                CONTACT
              </span>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                Let's build something <br />
                <span className="text-rose-400">amazing</span> together.
              </h1>

              {/* Subtitle - Verbatim PDF Page 6 */}
              <p className="text-slate-300 text-sm md:text-base font-normal leading-relaxed mb-10">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Let's connect and create impact that matters.
              </p>

              {/* Contact Info List matching PDF Page 6 */}
              <div className="space-y-6 mb-10">
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-rose-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-widest text-rose-400 uppercase font-semibold">
                      LOCATION
                    </span>
                    <span className="text-white text-sm md:text-base font-medium">
                      Hyderabad, Telangana, India
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-rose-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-widest text-rose-400 uppercase font-semibold">
                      PHONE
                    </span>
                    <a href="tel:+919391103020" className="text-white text-sm md:text-base font-medium hover:text-rose-300 transition">
                      +91 939 110 30 20
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-rose-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-widest text-rose-400 uppercase font-semibold">
                      EMAIL
                    </span>
                    <a href="mailto:aqibag@example.com" className="text-white text-sm md:text-base font-medium hover:text-rose-300 transition">
                      aqibag@example.com
                    </a>
                  </div>
                </div>

              </div>

              {/* Horizontal Divider */}
              <div className="w-full h-[1px] bg-white/10 mb-8" />

              {/* Social Icon Pills */}
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/in/aqib-abdul-ghaffar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/aqibabdulghaffar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="mailto:aqibag@example.com"
                  className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form Glass Panel matching PDF Page 6 */}
          <div className="lg:col-span-6 w-full glass-panel rounded-3xl p-6 md:p-8 border border-white/10 bg-[#0b0e17]/80 shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-slate-300 text-sm">Thank you for reaching out. I will reply to your email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-xl md:text-2xl font-bold tracking-wider text-white uppercase mb-2">
                  CONTACT FORM
                </h3>

                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white/30 transition-all text-sm"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your email"
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white/30 transition-all text-sm"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subject"
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white/30 transition-all text-sm"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message"
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white/30 transition-all text-sm resize-none"
                  />
                </div>

                <div className="flex justify-end mt-2">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-8 py-3 rounded-full text-xs font-semibold tracking-wider text-white border border-emerald-500/40 bg-emerald-950/20 hover:bg-emerald-950/50 hover:border-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-950/30 group uppercase"
                  >
                    <span>SEND MESSAGE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

