'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <>
      {/* Theme Toggle */}
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      />

      {/* Floating Navigation */}
      <nav className="floating-nav">
        {['hero', 'about', 'projects', 'experience'].map((section) => (
          <button
            key={section}
            className={`nav-dot ${activeSection === section ? 'active' : ''}`}
            data-section={section.charAt(0).toUpperCase() + section.slice(1)}
            onClick={() => scrollToSection(section)}
            aria-label={`Navigate to ${section}`}
          />
        ))}
      </nav>
    </>
  );
};

export default Navigation;
