import React from 'react';

const AboutSection = () => {
  return (
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
                I'm a passionate Computer Science student at the University of British Columbia with a keen interest in building impactful technology solutions. 
                My work focuses on creating seamless user experiences through innovative applications.
              </p>
              <p className="text-body">
                Specialized in full-stack development with experience in AI/ML integration and human-computer interaction. 
                I'm constantly exploring new technologies and frameworks to enhance development workflow and create scalable, maintainable code.
              </p>
              <p className="text-body">
                Based in Vancouver, BC, I'm always excited to collaborate on projects that push technological boundaries 
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
  );
};

export default AboutSection;
