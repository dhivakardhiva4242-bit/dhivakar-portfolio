import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { SkillCategory, SkillItem } from '../types/portfolio';
import {
  Code2,
  Cpu,
  Coffee,
  Terminal,
  FileCode2,
  Palette,
  Binary,
  BrainCircuit,
  BarChart3,
  GitBranch,
  Layers,
  Compass,
  Filter,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Cpu,
  Coffee,
  Terminal,
  FileCode2,
  Palette,
  Binary,
  BrainCircuit,
  BarChart3,
  GitBranch,
  Layers,
  Compass,
};

const filterTabs: { id: SkillCategory; label: string }[] = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'programming', label: 'Programming' },
  { id: 'web', label: 'Web Development' },
  { id: 'ai-ml', label: 'AI & Data Science' },
  { id: 'core', label: 'Core Concepts & DSA' },
];

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<SkillCategory>('all');

  const filteredSkills = skillsData.filter((skill) => {
    if (activeFilter === 'all') return true;
    return skill.category === activeFilter;
  });

  return (
    <section id="skills" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
              02. Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
              Skills &amp; Technologies
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              The languages, tools, and theoretical principles I am actively practicing and deepening as a first-year AI &amp; Data Science student.
            </p>
          </div>

          {/* Interactive Filter Control - Functional Segmented Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    isSelected
                      ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-semibold shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.iconName] || Code2;
            return (
              <div
                key={skill.name}
                className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-200 hover:-translate-y-0.5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon and Skill Stage */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 text-indigo-600 dark:text-indigo-400 shadow-xs">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Stage indicator rendered with unboxed typography (Anti-Slop Zero Pill Rule) */}
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          skill.stage === 'Core Foundation'
                            ? 'bg-sky-500'
                            : skill.stage === 'Active Practice'
                            ? 'bg-emerald-500'
                            : 'bg-indigo-500'
                        }`}
                      />
                      <span>{skill.stage}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Sub-topics: unboxed text with typographic separators (·) */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                  {skill.topics.map((topic, i) => (
                    <React.Fragment key={topic}>
                      <span>{topic}</span>
                      {i < skill.topics.length - 1 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
