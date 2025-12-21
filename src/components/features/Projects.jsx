import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import ScrollBlur from '../ui/ScrollBlur';

const Projects = () => {
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="py-6 bg-white dark:bg-gray-900 pb-[100px]">
      <div className="max-w-2xl mx-auto px-2 sm:px-3">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mx-auto">
          {projects.map((project, idx) => (
            <ScrollBlur key={idx} delay={idx * 150}>
                            <a 
                href={project.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full max-w-xs mx-auto bg-white dark:bg-gray-800 rounded-lg overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700"
              >
                {/* Project Image */}
                <div className="h-28 sm:h-24 w-full bg-gradient-to-tr from-pink-200 to-pink-400 dark:from-pink-700 dark:to-pink-900 flex items-center justify-center rounded-t-lg overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title + ' screenshot'}
                    className="object-cover h-full w-full"
                  />
                </div>
                {/* Project Content */}
                <div className="flex-1 flex flex-col p-3 sm:p-2">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-0.5">{project.title}</h3>
                  <div className="text-[11px] text-gray-700 dark:text-gray-300 mb-0.5">{project.date}</div>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mb-1 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-0.5 mb-1">
                    {project.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="bg-gray-100 dark:bg-gray-700 text-[9px] text-gray-800 dark:text-gray-200 px-1 py-0.5 rounded font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                   
                  </div>
                </div>
              </a>
            </ScrollBlur>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 