import React from 'react';
import type { Project } from '../types';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

interface ProjectsProps {
  data: Project[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative flex flex-col bg-slate-900 border border-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/20 hover:border-sky-400">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm flex-grow mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-sky-900/50 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-2 self-start">
          View Project <ExternalLinkIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {data.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;