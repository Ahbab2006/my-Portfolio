import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden bg-[#0B0F19]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Side: Intro & Actions */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-3 py-1 mb-4 text-xs sm:text-sm font-semibold tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/30 rounded-full">
            Full Stack Web Developer
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Hi, I&apos;m <span className="text-amber-400">Md. Ahbab Hussain Arabi</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
            Specializing in modern web applications using React, Next.js, and Node.js ecosystems. Focused on clean architecture, performance, and responsive user experiences.
          </p>

          {/* Action Buttons: Resume & Contact */}
          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="/resume.pdf"
              download="Md_Ahbab_Hussain_Resume.pdf"
              className="px-6 py-3 font-bold text-black bg-amber-400 hover:bg-amber-300 active:scale-95 rounded-lg shadow-lg shadow-amber-400/20 transition-all text-sm flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
              </svg>
              Get Resume / CV
            </a>

            <a
              href="#contact"
              className="px-6 py-3 font-semibold text-white bg-gray-900 border border-gray-700 hover:border-amber-400 hover:text-amber-400 rounded-lg transition-all text-sm"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links (GitHub, LinkedIn, Facebook) */}
          <div className="mt-8 pt-6 border-t border-gray-800 flex items-center justify-center md:justify-start gap-4">
            <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Follow:</span>
            
            {/* 1. GitHub (Replace your URL here) */}
            <a
              href="https://github.com/Ahbab2006" 
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 hover:text-amber-400 hover:border-amber-400 transition shadow-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span className="text-xs font-medium">GitHub</span>
            </a>

            {/* 2. LinkedIn (Replace your URL here) */}
            <a
              href="https://www.linkedin.com/in/md-ahbab-arabi/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 hover:text-amber-400 hover:border-amber-400 transition shadow-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="text-xs font-medium">LinkedIn</span>
            </a>

            {/* 3. Facebook (Replace your URL here) */}
            <a
              href="https://www.facebook.com/profile.php?id=61573607756407"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 hover:text-amber-400 hover:border-amber-400 transition shadow-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-xs font-medium">Facebook</span>
            </a>
          </div>
        </div>

        {/* Right Side: Professional Photo Frame */}
        <div className="flex-shrink-0 relative">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-2xl p-2 bg-gradient-to-tr from-amber-400/50 via-amber-400/10 to-transparent border border-amber-400/40 shadow-2xl">
            <div className="w-full h-full rounded-xl overflow-hidden relative bg-gray-900">
              <Image
                src="/profile.jpg"
                alt="Md. Ahbab Hussain Arabi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}