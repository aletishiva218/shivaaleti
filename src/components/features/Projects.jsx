import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import ScrollBlur from '../ui/ScrollBlur';
import ProjectModal from '../ui/ProjectModal';

const Projects = () => {
  const projects = portfolioData.projects;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollBlur>
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h2>
            <div className="mt-1.5 w-10 h-0.5 bg-blue-600 rounded-full" />
          </div>
        </ScrollBlur>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {projects.map((project, idx) => (
            <ScrollBlur key={idx} delay={idx * 100} className="h-full">
              <div className="group flex flex-col h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                {/* Image — clicking navigates to live site */}
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block flex-shrink-0 aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </a>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-4">
                  {/* Title + external link icon */}
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-tight line-clamp-2">
                      {project.title}
                    </h3>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 mt-0.5"
                      aria-label={`Open ${project.title}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg
                        className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">{project.date}</p>

                  {/* Description — clamped to 3 lines so all cards stay equal height */}
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 mb-3">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Read more — always pinned at the bottom */}
                  <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:gap-2 transition-all duration-150"
                    >
                      Read more
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </ScrollBlur>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
