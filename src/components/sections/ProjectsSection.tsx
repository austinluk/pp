import React from 'react';
import { Project } from '@/types';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
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
  );
};

export default ProjectsSection;
