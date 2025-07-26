import React from 'react';
import { Experience } from '@/types';

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
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
  );
};

export default ExperienceSection;
