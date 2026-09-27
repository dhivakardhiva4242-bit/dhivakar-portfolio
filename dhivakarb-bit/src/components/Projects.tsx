import React, { useState } from 'react';
import { projectsData, personalInfo } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { Github, ExternalLink, Code2, Sparkles, HelpCircle, X, Check, ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showHelperModal, setShowHelperModal] = useState(false);

  return (
    <section id="projects" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
              03. Works &amp; Software Prototypes
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Structured software architectures and AI pipelines currently in development and planning phases.
            </p>
          </div>

          {/* Quick Guide Trigger for Dhivakar */}
          <button
            onClick={() => setShowHelperModal(true)}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 rounded-xl transition self-start md:self-auto"
          >
            <HelpCircle className="w-4 h-4 text-indigo-500" />
            <span>How to add your projects</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-200 shadow-xs group"
            >
              <div>
                {/* Header: Category & Status */}
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-slate-500 dark:text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1.5 mb-6 text-xs text-slate-600 dark:text-slate-300">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-0.5 font-bold">›</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack - unboxed metadata with separators (Anti-Slop Zero Pill Rule) */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 text-xs font-mono text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1 mb-6">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Stack:</span>
                  {project.technologies.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {i < project.technologies.length - 1 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl || personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/80 rounded-xl transition"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition shadow-xs"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Preview</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Preview / Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-4">
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
                {selectedProject.category} · {selectedProject.status}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Deployment Status</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  This project is currently under active implementation. The codebase and live demo build will be connected directly to Dhivakar's GitHub repository as soon as the first release tag is published.
                </p>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition"
                >
                  Close
                </button>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Follow Dhivakar on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Developer Customization Helper Modal */}
        {showHelperModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-4">
              <button
                onClick={() => setShowHelperModal(false)}
                aria-label="Close guide modal"
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                <Code2 className="w-5 h-5" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Developer Guide</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                How to update projects with your real code
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                All projects, certifications, and skills are stored in a single, well-documented file:
                <code className="mx-1 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-indigo-600 dark:text-indigo-400 text-xs">
                  src/data/portfolioData.ts
                </code>
              </p>

              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                  <span>Open <strong className="font-semibold">src/data/portfolioData.ts</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                  <span>Update <code className="font-mono text-indigo-500">projectsData</code> with your project title, description, GitHub repo link, and live URL.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                  <span>Change <code className="font-mono text-indigo-500">isPlaceholder: false</code> and your new project appears instantly on your portfolio!</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setShowHelperModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition"
                >
                  Got it, thank you!
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
