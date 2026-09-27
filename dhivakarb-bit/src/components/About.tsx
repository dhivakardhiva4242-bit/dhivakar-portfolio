import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Brain, Code, Database, Cloud, Terminal, Compass, GraduationCap, MapPin, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const interestCards = [
    {
      title: 'Artificial Intelligence & ML',
      icon: Brain,
      description: 'Understanding mathematical intuition, model architectures, and data preprocessing workflows.',
    },
    {
      title: 'Software Development',
      icon: Code,
      description: 'Writing maintainable code across C, C++, Java, and Python with clean OOP and data structure principles.',
    },
    {
      title: 'Data Science & Analytics',
      icon: Database,
      description: 'Extracting patterns, exploratory data analysis, and statistical foundations for real-world datasets.',
    },
    {
      title: 'Cloud Computing',
      icon: Cloud,
      description: 'Learning modern cloud infrastructure paradigms, scalable compute instances, and deployment strategies.',
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            01. Background &amp; Motivation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I am a first-year undergraduate pursuing a B.Tech in Artificial Intelligence &amp; Data Science at Bannari Amman Institute of Technology (BIT), Coimbatore. I am deeply focused on strengthening my foundational understanding of computer science, algorithms, and practical software engineering.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story & Academic Context */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>My Academic &amp; Engineering Journey</span>
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Beginning my studies in Artificial Intelligence &amp; Data Science at Bannari Amman Institute of Technology, my immediate focus is on constructing rigorous fundamentals. Rather than jumping straight into high-level abstractions, I believe in mastering the core building blocks first—understanding memory management in C, object orientation in C++ and Java, and algorithmic reasoning through Data Structures and Algorithms.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Concurrently, I am applying Python for data handling and exploratory analysis, experimenting with front-end web technologies to build user interfaces, and studying the foundational concepts that power machine learning models and modern cloud infrastructure.
              </p>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Strong emphasis on problem-solving</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Hands-on code practice &amp; debugging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Eager to collaborate on student hackathons</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Commitment to continuous learning</span>
                </div>
              </div>
            </div>

            {/* Quick Profile Specs Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-600 dark:text-slate-400 font-semibold mb-4">
                Profile Overview
              </h4>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-xs text-slate-500 dark:text-slate-400">Current Academic Institution</dt>
                  <dd className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mt-0.5">
                    <GraduationCap className="w-4 h-4 text-indigo-500" />
                    <span>Bannari Amman Institute of Technology</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500 dark:text-slate-400">Degree &amp; Department</dt>
                  <dd className="font-semibold text-slate-900 dark:text-slate-100 mt-0.5">
                    B.Tech Artificial Intelligence &amp; Data Science
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500 dark:text-slate-400">Location Base</dt>
                  <dd className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-4 h-4 text-rose-500" />
                    <span>Coimbatore, Tamil Nadu, India</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500 dark:text-slate-400">Program Stage</dt>
                  <dd className="font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    1st Year Undergraduate (Active Learner)
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right Column: 4 Interest Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold px-1">
              Core Technical Focus Areas
            </div>

            <div className="grid grid-cols-1 gap-4">
              {interestCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-200 shadow-xs group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-slate-900 dark:text-white text-base">
                          {card.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
