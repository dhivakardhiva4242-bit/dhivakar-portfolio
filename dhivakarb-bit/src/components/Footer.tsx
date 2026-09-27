import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Rights */}
          <div className="text-center md:text-left space-y-1">
            <div className="text-base font-bold text-slate-900 dark:text-white">
              {personalInfo.name}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              © 2026 Dhivakar. All rights reserved.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/80 rounded-lg transition"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
