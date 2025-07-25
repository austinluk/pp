'use client';

import { useEffect, useState, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: "thenstep",
    subtitle: "Progressive Fitness Platform",
    description: "Revolutionary step-tracking application that gamifies fitness with blockchain integration. Built with React Native and advanced analytics.",
    year: "2024",
    tags: ["React Native", "Blockchain", "Analytics", "Fitness"],
    link: "https://thenstep.app/"
  },
  {
    id: 2,
    title: "Neural Canvas",
    subtitle: "AI Art Generator",
    description: "Machine learning model that creates abstract digital art based on user emotions and biometric data.",
    year: "2024",
    tags: ["Python", "TensorFlow", "Computer Vision", "Art"]
  },
  {
    id: 3,
    title: "Quantum Sort",
    subtitle: "Algorithm Visualizer",
    description: "Interactive visualization tool for quantum-inspired sorting algorithms with real-time performance metrics.",
    year: "2023",
    tags: ["TypeScript", "Three.js", "Algorithms", "Visualization"]
  },
  {
    id: 4,
    title: "Code Fractal",
    subtitle: "Development Tool",
    description: "Visual code analysis tool that maps software architecture as interactive fractal patterns.",
    year: "2023",
    tags: ["Node.js", "D3.js", "AST", "DevTools"]
  }
];

const experiences = [
  {
    role: "Computer Science Student",
    company: "University of British Columbia",
    period: "2022 - Present",
    description: "Studying algorithms, data structures, machine learning, and software engineering. Focus on creative computing and human-computer interaction.",
    tech: ["Python", "Java", "C++", "Mathematics", "AI/ML"]
  },
  {
    role: "Frontend Developer",
    company: "Tech Startup",
    period: "2023 - Present",
    description: "Building responsive web applications with modern frameworks. Specializing in performance optimization and user experience.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind"]
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects",
    period: "2022 - Present",
    description: "Contributing to open source projects in web development, data visualization, and creative coding communities.",
    tech: ["Git", "JavaScript", "Python", "Documentation"]
  }
];

export default function AustinPortfolio() {
  const [theme, setTheme] = useState<'void' | 'invert'>('void');
  const [activeSection, setActiveSection] = useState('hero');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailIdRef = useRef(0);

  // Custom cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Add trail
      const newTrail = { x: e.clientX, y: e.clientY, id: trailIdRef.current++ };
      setTrails(prev => [...prev.slice(-8), newTrail]);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Theme system
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Section observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -60% 0px',
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
    setTheme(prev => prev === 'void' ? 'invert' : 'void');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="text-fragment" style={{ animationDelay: `${index * 0.05}s` }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  // Generate chaos grid
  const generateChaosGrid = () => {
    return Array.from({ length: 256 }, (_, i) => (
      <div key={i} className="cell" />
    ));
  };

  return (
    <main className="relative">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="cursor"
        style={{ 
          left: cursorPos.x - 10, 
          top: cursorPos.y - 10 
        }}
      />
      
      {/* Cursor Trails */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x - 2,
            top: trail.y - 2,
            opacity: (index + 1) / trails.length * 0.6
          }}
        />
      ))}

      {/* Chaos Grid Background */}
      <div className="chaos-grid fixed inset-0 z-0">
        {generateChaosGrid()}
      </div>

      {/* Theme Disruptor */}
      <button 
        className="theme-disruptor"
        onClick={toggleTheme}
      >
        {theme === 'void' ? 'INVERT' : 'REVERT'}
      </button>

      {/* Navigation Fragments */}
      <nav className="nav-void">
        {['hero', 'about', 'projects', 'experience', 'contact'].map((section) => (
          <button
            key={section}
            className={`nav-fragment ${activeSection === section ? 'active' : ''}`}
            onClick={() => scrollToSection(section)}
            aria-label={`Navigate to ${section}`}
          />
        ))}
      </nav>

      {/* Hero Void */}
      <section id="hero" className="section-void">
        <div className="content-void flex items-center justify-center">
          <div className="max-w-6xl w-full">
            <div className="mb-8 scatter-reveal-active">
              <h1 className="text-shatter select-none">
                {splitText('Austin')}
                <br />
                {splitText('Luk')}
              </h1>
            </div>
            <div className="mb-6 scatter-reveal-active" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-scatter opacity-80">
                {splitText('CS @ UBC')}
              </h2>
            </div>
            <div className="mb-12 scatter-reveal-active" style={{ animationDelay: '1s' }}>
              <p className="text-whisper max-w-2xl">
                Exploring the intersection of computation, creativity, and human experience. 
                Building digital experiences that challenge conventional boundaries.
              </p>
            </div>
            <div className="scatter-reveal-active" style={{ animationDelay: '1.5s' }}>
              <div className="code-void max-w-md" data-lang="js">
                const austin = &#123;<br />
                &nbsp;&nbsp;role: 'Student & Developer',<br />
                &nbsp;&nbsp;university: 'UBC',<br />
                &nbsp;&nbsp;interests: ['AI', 'Creative Coding', 'HCI'],<br />
                &nbsp;&nbsp;currentProject: 'thenstep.app'<br />
                &#125;;
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Matter */}
        <div className="floating-matter matter-1 matter-drift-active" />
        <div className="floating-matter matter-2 matter-drift-active" style={{ animationDelay: '2s' }} />
        <div className="floating-matter matter-3 matter-drift-active" style={{ animationDelay: '4s' }} />
        <div className="floating-matter matter-4 matter-drift-active" style={{ animationDelay: '6s' }} />
      </section>

      {/* About Void */}
      <section id="about" className="section-void">
        <div className="content-void">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                <h2 className="text-scatter mb-12 chaos-hover">
                  {splitText('About')}
                </h2>
                <div className="space-y-8">
                  <div className="scatter-reveal-active">
                    <p className="text-whisper">
                      I'm a Computer Science student at the University of British Columbia, 
                      passionate about creating technology that bridges the gap between 
                      human creativity and computational power.
                    </p>
                  </div>
                  <div className="scatter-reveal-active" style={{ animationDelay: '0.3s' }}>
                    <p className="text-whisper">
                      My work spans from mobile applications to machine learning projects, 
                      always with a focus on user experience and innovative problem-solving. 
                      I believe in technology that feels magical yet remains accessible.
                    </p>
                  </div>
                  <div className="scatter-reveal-active" style={{ animationDelay: '0.6s' }}>
                    <p className="text-whisper">
                      Currently exploring the frontiers of creative coding, human-computer 
                      interaction, and the potential of AI to augment human creativity 
                      rather than replace it.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="scatter-reveal-active" style={{ animationDelay: '0.9s' }}>
                  <h3 className="text-whisper font-semibold mb-4">Core Technologies</h3>
                  <div className="space-y-2">
                    {['Python', 'JavaScript/TypeScript', 'React/React Native', 'Node.js', 'Machine Learning', 'Computer Graphics'].map((tech, index) => (
                      <div key={tech} className="text-pulse void-hover px-3 py-1 inline-block mr-2 mb-2" style={{ animationDelay: `${1.2 + index * 0.1}s` }}>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="scatter-reveal-active" style={{ animationDelay: '1.8s' }}>
                  <h3 className="text-whisper font-semibold mb-4">Current Focus</h3>
                  <div className="space-y-2">
                    {['Creative Computing', 'Human-Computer Interaction', 'AI/ML Applications', 'Mobile Development'].map((focus, index) => (
                      <div key={focus} className="text-pulse matter-hover px-3 py-1 inline-block mr-2 mb-2" style={{ animationDelay: `${2.1 + index * 0.1}s` }}>
                        {focus}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Void */}
      <section id="projects" className="section-void">
        <div className="content-void">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-scatter mb-16 chaos-hover">
              {splitText('Selected Works')}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="project-void scatter-reveal-active"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="project-content">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-scatter text-2xl font-light mb-2">
                          {project.link ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="chaos-hover">
                              {project.title}
                            </a>
                          ) : (
                            <span className="chaos-hover">{project.title}</span>
                          )}
                        </h3>
                        <p className="text-pulse">{project.subtitle}</p>
                      </div>
                      <span className="text-pulse">{project.year}</span>
                    </div>
                    
                    <div className="project-emerge">
                      <p className="text-whisper mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="text-pulse px-3 py-1 border border-current void-hover"
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
          </div>
        </div>
      </section>

      {/* Experience Void */}
      <section id="experience" className="section-void">
        <div className="content-void">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              <div className="lg:col-span-2">
                <h2 className="text-scatter mb-8 chaos-hover">
                  {splitText('Experience')}
                </h2>
                <div className="floating-matter matter-3 void-pulse-active" />
              </div>
              
              <div className="lg:col-span-3 space-y-12">
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className="matter-hover p-8 border border-current scatter-reveal-active"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-scatter text-xl font-light">{exp.role}</h3>
                        <p className="text-whisper">{exp.company}</p>
                      </div>
                      <span className="text-pulse">{exp.period}</span>
                    </div>
                    
                    <p className="text-whisper mb-6">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="text-pulse px-3 py-1 bg-current mix-blend-difference"
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
        </div>
      </section>

      {/* Contact Void */}
      <section id="contact" className="section-void">
        <div className="content-void flex items-center justify-center">
          <div className="max-w-4xl w-full text-center">
            <h2 className="text-scatter mb-12 chaos-hover">
              {splitText('Connect')}
            </h2>
            
            <p className="text-whisper mb-16 max-w-2xl mx-auto">
              Interested in collaborating on innovative projects or discussing the future of technology? 
              Let's create something extraordinary together.
            </p>
            
            <div className="space-y-6">
              <div className="scatter-reveal-active">
                <a 
                  href="mailto:austin.luk@student.ubc.ca" 
                  className="contact-void"
                >
                  austin.luk@student.ubc.ca
                </a>
              </div>
              
              <div className="scatter-reveal-active" style={{ animationDelay: '0.3s' }}>
                <a 
                  href="https://linkedin.com/in/austinluk" 
                  className="contact-void"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              
              <div className="scatter-reveal-active" style={{ animationDelay: '0.6s' }}>
                <a 
                  href="https://github.com/austinluk" 
                  className="contact-void"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              
              <div className="scatter-reveal-active" style={{ animationDelay: '0.9s' }}>
                <a 
                  href="https://thenstep.app" 
                  className="contact-void"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  thenstep.app
                </a>
              </div>
            </div>
            
            <div className="mt-20 scatter-reveal-active" style={{ animationDelay: '1.2s' }}>
              <div className="code-void max-w-md mx-auto" data-lang="terminal">
                {'>'}  Building the future, one commit at a time...<br />
                {'>'}  Currently accepting new challenges<br />
                {'>'}  Status: Ready to innovate ⚡
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
