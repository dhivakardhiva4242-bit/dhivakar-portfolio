import React from 'react';
import { currentLearningList, personalInfo } from '../data/portfolioData';
import { Sparkles, BookOpen, Clock, ArrowRight } from 'lucide-react';

export const CurrentLearning: React.FC = () => {
  return (
    <section className="py-16 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Active Curriculum &amp; Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            What I Am Currently Learning
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A transparent overview of my current study topics, technical coursework, and hands-on self-directed labs at Bannari Amman Institute of Technology.
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentLearningList.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition"
            >
              <div>
                {/* Number & Domain */}
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-mono text-slate-600 dark:text-slate-400 font-semibold">
                    0{index + 1}. {item.category}
                  </span>
                  <span className="font-mono text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.focusArea}
                </p>
              </div>

              {/* Tools / Ecosystem in focus */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Toolkit:</span>
                  {item.tools.map((tool, i) => (
                    <React.Fragment key={tool}>
                      <span>{tool}</span>
                      {i < item.tools.length - 1 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <p className="text-xs sm:text-sm text-indigo-950 dark:text-indigo-200">
              <strong className="font-semibold">Philosophy:</strong> Depth over superficial breadth. Committing consistent hours daily to code debugging, algorithmic analysis, and conceptual comprehension.
            </p>
          </div>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 shrink-0"
          >
            <span>Follow on GitHub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
