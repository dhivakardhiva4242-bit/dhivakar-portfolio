import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { Award, Calendar, ExternalLink, ShieldAlert, ArrowUpRight } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            05. Continuous Learning &amp; Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
            Certifications &amp; Credentials
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Professional certifications and accredited learning tracks currently in active preparation and roadmap progression.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-200 flex flex-col justify-between shadow-xs group"
            >
              <div>
                {/* Header: Icon & Coming Soon Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 text-indigo-600 dark:text-indigo-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    Certification Coming Soon
                  </span>
                </div>

                {/* Title & Target Issuer */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                  {cert.issuer}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div>
                {/* Topics: unboxed metadata */}
                <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1 mb-4">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Topics:</span>
                  {cert.topics.map((topic, i) => (
                    <React.Fragment key={topic}>
                      <span>{topic}</span>
                      {i < cert.topics.length - 1 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                {/* Target Date & Credential Link Placeholder */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-200/60 dark:border-slate-800/60 text-xs">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Target: {cert.targetDate}
                  </span>

                  <span className="text-slate-400 dark:text-slate-500 italic text-[11px] flex items-center gap-1">
                    <span>Credential Link Ready</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
