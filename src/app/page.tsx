'use client';

import { useEffect, useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Neural Interface",
    subtitle: "AI-Driven UX",
    description: "Revolutionary interface design using machine learning to predict user intentions. Features adaptive layouts and predictive navigation patterns.",
    year: "2024",
    tags: ["AI", "UX", "React", "Python"]
  },
  {
    id: 2,
    title: "Quantum Gallery",
    subtitle: "Digital Art Platform",
    description: "Immersive 3D gallery space for digital artists. Built with WebGL and advanced physics simulations for realistic artwork interactions.",
    year: "2024",
    tags: ["WebGL", "Three.js", "GLSL", "Physics"]
  },
  {
    id: 3,
    title: "Minimalist Banking",
    subtitle: "FinTech Mobile App",
    description: "Clean, accessible banking application focusing on financial wellness and mindful spending through behavioral design patterns.",
    year: "2023",
    tags: ["React Native", "FinTech", "UX", "Security"]
  },
  {
    id: 4,
    title: "Sonic Landscapes",
    subtitle: "Audio Visualization",
    description: "Real-time audio visualization tool that converts sound into dynamic, generative art. Used by musicians for live performances.",
    year: "2023",
    tags: ["Web Audio", "Canvas", "Generative", "Performance"]
  }
];

const experiences = [
  {
    role: "Senior Creative Developer",
    company: "Ethereal Studios",
    period: "2023 - Present",
    description: "Leading innovative web experiences for luxury brands. Specializing in performance optimization and creative coding.",
    technologies: ["React", "Three.js", "GSAP", "WebGL"]
  },
  {
    role: "UI/UX Designer",
    company: "Quantum Design Co.",
    period: "2022 - 2023",
    description: "Designed digital products for startups and enterprise clients. Focus on accessibility and user-centered design principles.",
    technologies: ["Figma", "Protopie", "Design Systems", "Research"]
  },
  {
    role: "Frontend Developer",
    company: "Pixel Perfect Inc.",
    period: "2021 - 2022",
    description: "Built responsive web applications with emphasis on performance and modern development practices.",
    technologies: ["Vue.js", "TypeScript", "Tailwind", "Node.js"]
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
                Alex
                <br />
                Morgan
              </h1>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-large max-w-2xl">
                Creative Developer & Digital Artist crafting unique experiences at the intersection of technology and design.
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
                  I&apos;m a multidisciplinary creative developer passionate about pushing the boundaries of web technology. 
                  My work exists at the intersection of art, technology, and human experience.
                </p>
                <p className="text-body">
                  With over 5 years in the industry, I&apos;ve collaborated with startups, agencies, and Fortune 500 companies 
                  to create digital experiences that are not only functional but emotionally resonant.
                </p>
                <p className="text-body">
                  When I&apos;m not coding, you&apos;ll find me experimenting with generative art, exploring new creative coding 
                  techniques, or contributing to open-source projects that democratize creative technology.
                </p>
              </div>
            </div>
          </div>
          <div className="grid-span-4">
            <div className="slide-in-right">
              <div className="text-small space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Core Skills</h3>
                  <p>React, TypeScript, WebGL, Three.js, GSAP, Node.js, Python, Creative Coding</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Design Tools</h3>
                  <p>Figma, Adobe Creative Suite, Blender, TouchDesigner, Processing</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Interests</h3>
                  <p>Generative Art, AI/ML, Creative Technology, Digital Installation, Performance</p>
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
              <h2 className="text-hero mb-8">Let&apos;s Create Together</h2>
              <p className="text-large mb-8">
                I&#39;m always excited to collaborate on innovative projects that push creative boundaries.
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:hello@alexmorgan.dev" 
                  className="hover-invert text-body border border-current px-6 py-3 inline-block transition-all"
                >
                  hello@alexmorgan.dev
                </a>
                <br />
                <a 
                  href="https://linkedin.com/in/alexmorgan" 
                  className="hover-invert text-body border border-current px-6 py-3 inline-block transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <br />
                <a 
                  href="https://github.com/alexmorgan" 
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
