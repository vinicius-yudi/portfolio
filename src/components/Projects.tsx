import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = container.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-on-scroll opacity-0 translate-y-8">
            Meus <span className="text-indigo-600 dark:text-indigo-400">Projetos</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6 animate-on-scroll opacity-0 translate-y-8 animation-delay-200"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
        </div>
      </div>
    </section>
  );
};

export default Projects;