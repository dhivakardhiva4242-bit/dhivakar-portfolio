import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Linkedin, Github, MapPin, Send, Check, Copy, ExternalLink, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Since there is no live backend email server configured yet,
    // construct an authentic mailto link to launch the user's default email client
    // and provide clear, truthful UI feedback.
    const encodedSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const encodedBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodedSubject}&body=${encodedBody}`;
    window.location.href = mailtoUrl;

    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            07. Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
            Contact Me
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Feel free to reach out for hackathon collaborations, mentorship, college club projects, or professional opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Channels Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs uppercase font-mono tracking-wider text-slate-600 dark:text-slate-400 font-semibold">
              Direct Contact Channels
            </h3>

            {/* Email Card with Copy Affordance */}
            <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition shadow-xs group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Official Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <div className="mt-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Email copied to clipboard!
                </div>
              )}
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition shadow-xs flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">LinkedIn Network</div>
                  <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    linkedin.com/in/{personalInfo.linkedinUsername}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition shadow-xs flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">GitHub Repositories</div>
                  <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {personalInfo.githubUsername}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 text-rose-500 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Location Base</div>
                <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                  {personalInfo.location}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill in the details below to compose an instant email to Dhivakar.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Hackathon Collaboration / Internship Discussion"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Dhivakar, I saw your portfolio and would like to connect regarding..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                    * Launches your default email client with formatted message
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition shadow-md hover:shadow-indigo-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>

                {formSubmitted && (
                  <div className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Opening your mail app. Alternatively, you can copy my email directly above.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
