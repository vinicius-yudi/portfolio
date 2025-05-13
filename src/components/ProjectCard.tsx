import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`
        group relative overflow-hidden rounded-xl shadow-xl 
        transition-all duration-500 ease-out transform
        hover:shadow-2xl hover:-translate-y-2
        animate-on-scroll opacity-0 translate-y-12
      `}
      style={{ animationDelay: `${index * 150 + 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image with Overlay */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div
          className={`
            absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80
            transition-opacity duration-300 
            ${isHovered ? 'opacity-90' : 'opacity-70'}
          `}
        ></div>
      </div>

      {/* Project Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
          {project.title}
        </h3>

        <p
          className={`
          text-gray-200 mb-4 line-clamp-2
          transform transition-all duration-300 
          ${isHovered ? 'opacity-100 -translate-y-1' : 'opacity-80'}
        `}
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4 transform transition-all duration-300 group-hover:-translate-y-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-indigo-600/80 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div
          className={`
            flex flex-wrap gap-3 transform transition-all duration-300
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          {/* Multiple Repository Links */}
          {project.repoUrl.map((url, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors"
            >
              <Github size={16} />
              <span>Repositório {index + 1}</span>
            </a>
          ))}

          {/* Demo Link */}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Projeto</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;