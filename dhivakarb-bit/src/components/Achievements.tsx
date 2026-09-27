import React from 'react';
import { achievementsData, personalInfo } from '../data/portfolioData';
import { Trophy, Target, Flag, Users, ArrowRight } from 'lucide-react';

const categoryIcons = {
  Hackathon: Trophy,
  Competition: Target,
  'College Event': Flag,
  'Tech Club': Users,
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            06. Milestones &amp; Challenges
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
            Achievements &amp; Hackathons
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Targeted competitions, hackathon participation tracks, and campus tech club initiatives as a first-year student.
          </p>
        </div>

        {/* Grid of placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item) => {
            const Icon = categoryIcons[item.category] || Trophy;
            return (
              <div
                key={item.id}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <div className="text-[11px] uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold mb-1">
                    Key Focus
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 font-medium">
                    {item.focus}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hackathon Callout */}
        <div className="mt-8 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-bold text-slate-900 dark:text-white text-base">
              Interested in teaming up for an AI Hackathon?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              I am open to teaming up with fellow developers, designers, and students for university or online hackathons.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition shadow-xs whitespace-nowrap shrink-0"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
