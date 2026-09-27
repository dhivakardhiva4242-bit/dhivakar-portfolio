import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { CurrentLearning } from './components/CurrentLearning';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Default to dark theme as explicitly requested
    const saved = localStorage.getItem('dhivakar-portfolio-theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true;
  });

  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('dhivakar-portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('dhivakar-portfolio-theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'skills',
      'projects',
      'education',
      'certifications',
      'achievements',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200 overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      <div className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 min-h-screen transition-colors duration-200">
        {/* Sticky 3-zone Navigation */}
        <Navbar
          activeSection={activeSection}
          isDark={isDark}
          onToggleTheme={toggleTheme}
        />

        {/* Main Content Area */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* About Me Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Current Learning Section */}
          <CurrentLearning />

          {/* Projects Section */}
          <Projects />

          {/* Education Section */}
          <Education />

          {/* Certifications Section */}
          <Certifications />

          {/* Achievements / Hackathons Section */}
          <Achievements />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
