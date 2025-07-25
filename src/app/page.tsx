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
              className={`${index % 2 === 0 ? 'grid-span-7' : 'grid-span-5'} ${index % 2 === 1 ? 'col-start-8' : ''}`}
            >
              <div className="project-card hover-lift">
                <div className="project-image">
                  {project.title}
                </div>
                <div className="project-content">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-large font-semibold">{project.title}</h3>
                      <p className="text-small opacity-75">{project.subtitle}</p>
                    </div>
                    <span className="text-small">{project.year}</span>
                  </div>
                  <p className="text-small mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-small px-2 py-1 border border-current"
                      >
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
                <div key={index} className="slide-in-right hover-lift p-6 border border-current" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-large font-semibold">{exp.role}</h3>
                      <p className="text-body">{exp.company}</p>
                    </div>
                    <span className="text-small">{exp.period}</span>
                  </div>
                  <p className="text-small mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-small px-2 py-1 bg-current text-background"
                      >
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
        <div className="asymmetric-grid">
          <div className="grid-span-6">
            <div className="fade-in-up">
              <h2 className="text-hero mb-8">Let&apos;s Connect</h2>
              <p className="text-large mb-8">
                I&apos;m always excited to collaborate on innovative projects and explore new opportunities in tech.
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:austin.luk@student.ubc.ca" 
                  className="hover-invert text-body border border-current px-6 py-3 inline-block transition-all"
                >
                  austin.luk@student.ubc.ca
                </a>
                <br />
                <a 
                  href="https://linkedin.com/in/austinluk" 
                  className="hover-invert text-body border border-current px-6 py-3 inline-block transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <br />
                <a 
                  href="https://github.com/austinluk" 
                  className="hover-invert text-body border border-current px-6 py-3 inline-block transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="grid-span-6">
            <div className="scale-in flex items-center justify-center h-full">
              <div className="geometric-shape shape-square w-64 h-64 morph-border relative">
                <div className="geometric-shape shape-circle w-32 h-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
