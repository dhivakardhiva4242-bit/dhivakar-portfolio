import React from 'react';
import { ArrowDown, Mail, Github, FolderGit2, MapPin, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { HeroVisual } from './HeroVisual';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-sky-500/10 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Trust & Institution line - Clean metadata with typographic separators (anti-slop) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
              <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold">
                <GraduationCap className="w-4 h-4" />
                {personalInfo.collegeShort}
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Bannari Amman Institute of Technology</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Coimbatore, India
              </span>
            </div>

            {/* Main Greeting & Role */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] text-balance">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-500 dark:from-indigo-400 dark:via-sky-400 dark:to-teal-300">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 tracking-tight">
                AI &amp; Data Science Student
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Pursuing my B.Tech at Bannari Amman Institute of Technology, actively building core foundations in programming, artificial intelligence, machine learning, data science, and modern software development.
            </p>

            {/* Buttons: View My Projects, Contact Me, GitHub */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md hover:shadow-indigo-500/25 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View My Projects</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700/90 border border-slate-200/80 dark:border-slate-700/80 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-xl transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-800"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Career Focus Area Tags - Clean unboxed text list with typographic bullets */}
            <div className="pt-2 border-t border-slate-200/70 dark:border-slate-800/70">
              <div className="text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold mb-2">
                Career Interests &amp; Focus
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-xs text-slate-700 dark:text-slate-300 font-medium">
                {personalInfo.careerInterests.map((interest, idx) => (
                  <React.Fragment key={interest}>
                    <span>{interest}</span>
                    {idx < personalInfo.careerInterests.length - 1 && (
                      <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card (Desktop & Mobile) */}
          <div className="lg:col-span-5 w-full">
            <HeroVisual />
          </div>
        </div>

        {/* Scroll indicator prompt */}
        <div className="hidden md:flex justify-center pt-12">
          <a
            href="#about"
            aria-label="Scroll to About Me section"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
          >
            <span>explore portfolio</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
