'use client';

import { useEffect, useState } from 'react';

const projects = [
  {
    id: 1,
    title: "ThenStep",
    subtitle: "AI-Powered Platform",
    description: "An AI-powered platform that intuitively understands user needs — from safe paths to smart meals — without asking twice. ThenStep finds what fits with AI's help.",
    year: "2024",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Supabase"]
  },
  {
    id: 2,
    title: "Freddy the Freelancer",
    subtitle: "WhatsApp Automation Bot",
    description: "A WhatsApp bot that seamlessly connects clients with skilled freelancers, streamlining the hiring process through automated conversations and smart matching.",
    year: "2024",
    tags: ["Node.js", "WhatsApp API", "MongoDB", "AWS"]
  },
  {
    id: 3,
    title: "Portfolio Website",
    subtitle: "Personal Showcase",
    description: "Modern portfolio website showcasing projects and skills with responsive design and smooth animations.",
    year: "2024",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  }
];

const experiences = [
  {
    role: "Computer Science Student",
    company: "University of British Columbia",
    period: "2022 - Present",
    description: "Pursuing B.Sc. in Computer Science with focus on Full-Stack Development, AI/ML, and Human-Computer Interaction. Active in coding projects and tech community.",
    technologies: ["JavaScript", "Python", "Java", "React", "Node.js"]
  },
  {
    role: "Full-Stack Developer",
    company: "ThenStep (Personal Project)",
    period: "2024",
    description: "Developed AI-powered platform with natural language processing for intuitive user queries and context-aware recommendations.",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Supabase"]
  },
  {
    role: "Backend Developer",
    company: "Freddy the Freelancer",
    period: "2024",
    description: "Built WhatsApp automation bot for connecting clients with freelancers, featuring automated matching and in-chat project scoping.",
    technologies: ["Node.js", "WhatsApp API", "MongoDB", "AWS"]
  }
];

export default function Portfolio() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <main className="relative">
      {/* Theme Toggle */}
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      />

      {/* Floating Navigation */}
      <nav className="floating-nav">
        {['hero', 'about', 'projects', 'experience', 'contact'].map((section) => (
          <button
            key={section}
            className={`nav-dot ${activeSection === section ? 'active' : ''}`}
            data-section={section.charAt(0).toUpperCase() + section.slice(1)}
            onClick={() => scrollToSection(section)}
            aria-label={`Navigate to ${section}`}
          />
        ))}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="section section-hero">
        <div className="asymmetric-grid">
          <div className="grid-span-8">
            <div className="fade-in-up">
              <h1 className="text-display mb-8">
                Austin
                <br />
                Luk
              </h1>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-large max-w-2xl">
                Computer Science Student & Full-Stack Developer crafting innovative solutions at the intersection of AI and human experience.
              </p>
            </div>
          </div>
          <div className="grid-span-4">
            <div className="slide-in-right" style={{ animationDelay: '0.4s' }}>
              <div className="geometric-shape shape-circle w-64 h-64 morph-border" />
              <div className="geometric-shape shape-square w-32 h-32 absolute top-20 right-20" 
                   style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-about">
        <div className="asymmetric-grid">
          <div className="grid-span-2">
            <div className="scale-in">
              <div className="geometric-shape shape-triangle w-16 h-16 border-l-16 border-r-16 border-b-16 border-l-transparent border-r-transparent border-b-current" />
            </div>
          </div>
          <div className="grid-span-6">
            <div className="fade-in-up">
              <h2 className="text-hero mb-12">About Me</h2>
              <div className="space-y-6">
                <p className="text-body">
                  I&apos;m a passionate Computer Science student at the University of British Columbia with a keen interest in building impactful technology solutions. 
                  My work focuses on creating seamless user experiences through innovative applications.
                </p>
                <p className="text-body">
                  Specialized in full-stack development with experience in AI/ML integration and human-computer interaction. 
                  I&apos;m constantly exploring new technologies and frameworks to enhance development workflow and create scalable, maintainable code.
                </p>
                <p className="text-body">
                  Based in Vancouver, BC, I&apos;m always excited to collaborate on projects that push technological boundaries 
                  and solve real-world problems through code.
                </p>
              </div>
            </div>
          </div>
          <div className="grid-span-4">
            <div className="slide-in-right">
              <div className="text-small space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Core Skills</h3>
                  <p>JavaScript/TypeScript, Python, Java, C++, React, Next.js, Node.js</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technologies</h3>
                  <p>PostgreSQL, MongoDB, Firebase, Docker, AWS, Vercel, Git</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Focus Areas</h3>
                  <p>Full-Stack Development, AI/ML, Human-Computer Interaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section section-projects">
        <div className="asymmetric-grid">
          <div className="grid-span-12">
            <div className="fade-in-up mb-16">
              <h2 className="text-hero">Selected Work</h2>
            </div>
          </div>
          
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`${index % 2 === 0 ? 'grid-span-7' : 'grid-span-5'} ${index % 2 === 1 ? 'col-start-8' : ''} mb-8`}
            >
              <div className="project-card h-full">
                <div className="project-image">
                  {project.title}
                </div>
                <div className="project-content">
                  <div className="flex justify-between items-start">
                    <h3>{project.title}</h3>
                    <span className="text-small text-secondary">{project.year}</span>
                  </div>
                  <p className="text-small text-secondary mb-2">{project.subtitle}</p>
                  <p className="text-body">{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section section-experience">
        <div className="asymmetric-grid">
          <div className="grid-span-4">
            <div className="fade-in-up">
              <h2 className="text-hero mb-8">Experience</h2>
              <div className="geometric-shape shape-circle w-32 h-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10" />
            </div>
          </div>
          <div className="grid-span-8">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="experience-card slide-in-right" 
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <h3>{exp.role}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                  <p>{exp.description}</p>
                  <div className="tags">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-contact">
        <div className="asymmetric-grid items-center">
          <div className="grid-span-7">
            <div className="fade-in-up">
              <h2 className="text-hero mb-6">Let&apos;s Connect</h2>
              <p className="text-large mb-8 max-w-2xl">
                I&apos;m always excited to collaborate on innovative projects and explore new opportunities in tech. 
                Feel free to reach out through any of these channels.
              </p>
              
              <div className="space-y-6 max-w-lg">
                <a 
                  href="mailto:austin.luk@student.ubc.ca" 
                  className="contact-button group flex items-center space-x-4 p-4 border border-current hover:bg-current hover:text-background transition-all duration-300"
                >
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-wider text-secondary">Email me at</div>
                    <div>austin.luk@student.ubc.ca</div>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/austinluk" 
                  className="contact-button group flex items-center space-x-4 p-4 border border-current hover:bg-current hover:text-background transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-wider text-secondary">Connect on</div>
                    <div>LinkedIn</div>
                  </div>
                </a>

                <a 
                  href="https://github.com/austinluk" 
                  className="contact-button group flex items-center space-x-4 p-4 border border-current hover:bg-current hover:text-background transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-wider text-secondary">View my work on</div>
                    <div>GitHub</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="grid-span-5">
            <div className="scale-in flex items-center justify-center h-full">
              <div className="relative w-full max-w-md">
                <div className="geometric-shape shape-square w-full aspect-square morph-border relative">
                  <div className="geometric-shape shape-circle w-1/2 aspect-square absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-logo">Austin Luk</div>
          <div className="footer-links">
            <a href="#about" className="footer-link">About</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#experience" className="footer-link">Experience</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/austinluk" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://linkedin.com/in/austinluk" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="mailto:austin.luk@student.ubc.ca" className="social-link" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} Austin Luk. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
