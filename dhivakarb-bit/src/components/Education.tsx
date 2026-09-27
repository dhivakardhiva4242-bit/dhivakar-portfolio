import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, BookCheck, ShieldCheck } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            04. Formal Qualifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
            Education
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Academic degree, affiliated institution, and curriculum foundation.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-sm relative overflow-hidden">
            {/* Subtle corner badge */}
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {educationData.degree}
                  </h3>
                  <div className="text-base sm:text-lg font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                    {educationData.institution}
                  </div>
                </div>
              </div>

              {/* Status & Period */}
              <div className="sm:text-right font-mono text-xs text-slate-500 dark:text-slate-400 space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{educationData.status}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 text-slate-500 dark:text-slate-400 pt-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Period: {educationData.period}</span>
                </div>
              </div>
            </div>

            {/* Location & Department */}
            <div className="py-6 border-b border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{educationData.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <ShieldCheck className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Autonomous Engineering Institution</span>
              </div>
            </div>

            {/* Core Coursework Areas */}
            <div className="pt-6">
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-600 dark:text-slate-400 font-semibold mb-3 flex items-center gap-2">
                <BookCheck className="w-4 h-4 text-indigo-500" />
                <span>Key Curricular &amp; Foundational Study Areas</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {educationData.keyAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <span className="text-indigo-500 font-bold">›</span>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
