import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle2, Terminal, Cpu, Database, Sparkles } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'python' | 'cpp' | 'metrics'>('python');
  const [isRunning, setIsRunning] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        setStep((prev) => {
          if (prev >= 4) {
            setIsRunning(false);
            return 4;
          }
          return prev + 1;
        });
      }, 700);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleRun = () => {
    setStep(0);
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setStep(0);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Decorative gradient aura */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-emerald-500/20 blur-xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />

      {/* Main card */}
      <div className="relative rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-2xl overflow-hidden transition-colors">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-950/70">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              dhivakar@bit-ai-node:~/workspace
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              B.Tech AI&DS
            </span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-between px-3 pt-2 pb-1 border-b border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-slate-950/40 text-xs">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab('python')}
              className={`px-3 py-1.5 rounded-md font-mono transition-all flex items-center gap-1.5 ${
                activeTab === 'python'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>pipeline.py</span>
            </button>
            <button
              onClick={() => setActiveTab('cpp')}
              className={`px-3 py-1.5 rounded-md font-mono transition-all flex items-center gap-1.5 ${
                activeTab === 'cpp'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>dsa_model.cpp</span>
            </button>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-3 py-1.5 rounded-md font-mono transition-all flex items-center gap-1.5 ${
                activeTab === 'metrics'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>eval_metrics</span>
            </button>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 rounded shadow-xs transition"
              title="Run simulation"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>{isRunning ? 'Running...' : 'Run'}</span>
            </button>
            <button
              onClick={handleReset}
              className="p-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded transition"
              title="Reset terminal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 font-mono text-xs overflow-x-auto min-h-[220px]">
          {activeTab === 'python' && (
            <div className="space-y-1 text-slate-700 dark:text-slate-300">
              <div className="text-slate-400 dark:text-slate-500"># Dhivakar - AI/ML Pipeline Pipeline Architecture</div>
              <div>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">import</span>{' '}
                <span className="text-sky-600 dark:text-sky-400">numpy</span>{' '}
                <span className="text-purple-600 dark:text-purple-400">as</span> np
              </div>
              <div>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">from</span> sklearn.model_selection{' '}
                <span className="text-purple-600 dark:text-purple-400 font-semibold">import</span> train_test_split
              </div>
              <div className="pt-2">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">class</span>{' '}
                <span className="text-amber-600 dark:text-amber-400 font-bold">AIDataPipeline</span>:
              </div>
              <div className="pl-4">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">def</span>{' '}
                <span className="text-blue-600 dark:text-blue-400">__init__</span>(self, college=
                <span className="text-emerald-600 dark:text-emerald-400">"BIT"</span>):
              </div>
              <div className="pl-8 text-slate-500">
                self.author = <span className="text-emerald-600 dark:text-emerald-400">"Dhivakar"</span>
                <br />
                self.stream = <span className="text-emerald-600 dark:text-emerald-400">"AI & Data Science"</span>
              </div>
              <div className="pl-4 pt-1">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">def</span>{' '}
                <span className="text-blue-600 dark:text-blue-400">optimize_learning</span>(self, passion):
              </div>
              <div className="pl-8">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">return</span>{' '}
                <span className="text-sky-600 dark:text-sky-400">f"Building robust models with {'{passion}'}"</span>
              </div>
            </div>
          )}

          {activeTab === 'cpp' && (
            <div className="space-y-1 text-slate-700 dark:text-slate-300">
              <div className="text-slate-400 dark:text-slate-500">// Efficient C++ Data Structures & Computational Logic</div>
              <div>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">#include</span> &lt;iostream&gt;
              </div>
              <div>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">#include</span> &lt;vector&gt;
              </div>
              <div className="pt-1">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">template</span> &lt;
                <span className="text-purple-600 dark:text-purple-400">typename</span> T&gt;
              </div>
              <div>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">class</span>{' '}
                <span className="text-amber-600 dark:text-amber-400 font-bold">AlgorithmNode</span> &#123;
              </div>
              <div className="pl-4">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">public</span>:
                <div className="pl-4">
                  T value;
                  <br />
                  <span className="text-blue-600 dark:text-blue-400">AlgorithmNode</span>* left;
                  <br />
                  <span className="text-blue-600 dark:text-blue-400">AlgorithmNode</span>* right;
                </div>
              </div>
              <div>&#125;;</div>
              <div className="text-slate-400 dark:text-slate-500 pt-1">// Practicing optimal time & memory complexity</div>
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="space-y-2 text-slate-700 dark:text-slate-300">
              <div className="flex items-center justify-between text-slate-500 text-[11px] pb-1 border-b border-slate-200 dark:border-slate-800">
                <span>EPOCH</span>
                <span>TRAIN_LOSS</span>
                <span>VAL_ACC</span>
                <span>STATUS</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">01/04</span>
                <span className="tabular-nums">0.5821</span>
                <span className="tabular-nums text-emerald-600 dark:text-emerald-400">82.4%</span>
                <span className="text-emerald-500">Converged</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">02/04</span>
                <span className="tabular-nums">0.3419</span>
                <span className="tabular-nums text-emerald-600 dark:text-emerald-400">89.6%</span>
                <span className="text-emerald-500">Converged</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">03/04</span>
                <span className="tabular-nums">0.1982</span>
                <span className="tabular-nums text-emerald-600 dark:text-emerald-400">94.8%</span>
                <span className="text-emerald-500">Optimal</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">04/04</span>
                <span className="tabular-nums">0.0914</span>
                <span className="tabular-nums text-emerald-600 dark:text-emerald-400">97.2%</span>
                <span className="text-emerald-500">Checkpointed</span>
              </div>
            </div>
          )}
        </div>

        {/* Live Simulation Output Box */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-900 dark:bg-slate-950 text-slate-200 font-mono text-[11px]">
          <div className="flex items-center justify-between pb-1.5 text-slate-400 text-[10px]">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              Execution Simulation
            </span>
            <span className="tabular-nums">Step {step}/4</span>
          </div>

          <div className="space-y-1">
            {step === 0 && (
              <p className="text-slate-400 flex items-center gap-2">
                <span className="text-indigo-400">›</span> Click "Run" above to simulate AI pipeline execution...
              </p>
            )}
            {step >= 1 && (
              <p className="text-slate-300 flex items-center gap-2">
                <span className="text-sky-400">✓</span> [1/4] Initializing runtime: BIT AI&DS Node · Python 3.12 / C++20
              </p>
            )}
            {step >= 2 && (
              <p className="text-slate-300 flex items-center gap-2">
                <span className="text-sky-400">✓</span> [2/4] Ingesting dataset & validating data structure invariants
              </p>
            )}
            {step >= 3 && (
              <p className="text-slate-300 flex items-center gap-2">
                <span className="text-sky-400">✓</span> [3/4] Running forward pass & algorithmic optimization routines
              </p>
            )}
            {step >= 4 && (
              <p className="text-emerald-400 flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> [4/4] Pipeline executed successfully. Ready to build!
              </p>
            )}
          </div>
        </div>

        {/* Interactive Stats Ribbon */}
        <div className="grid grid-cols-3 divide-x divide-slate-200 dark:divide-slate-800 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-center py-2.5 text-xs">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-slate-600 dark:text-slate-400">Focus</div>
            <div className="font-semibold text-slate-800 dark:text-slate-200">AI / ML & DSA</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-slate-600 dark:text-slate-400">Year</div>
            <div className="font-semibold text-slate-800 dark:text-slate-200">1st Year B.Tech</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-slate-600 dark:text-slate-400">Campus</div>
            <div className="font-semibold text-slate-800 dark:text-slate-200">BIT Coimbatore</div>
          </div>
        </div>
      </div>
    </div>
  );
};
