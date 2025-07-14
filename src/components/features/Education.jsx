import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import ScrollBlur from '../ui/ScrollBlur';

/**
 * Education section with logos, clickable arrow, and compact styling
 */
const Education = () => {
  const educationList = portfolioData.education;

  return (
    <section id="education" className="py-8 bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-3">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Education</h2>
        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <ScrollBlur key={idx} delay={idx * 150}>
              <a 
                href={edu.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-between"
              >
              {/* Left: Logo and Info */}
              <div className="flex items-center min-w-0">
                <img
                  src={edu.logo}
                  alt={edu.school + ' logo'}
                  className="w-12 h-12 rounded-full object-cover border border-gray-200 dark:border-gray-700 mr-4"
                />
                <div className="min-w-0">
                  <div className="flex items-center">
                    <span className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                      {edu.school}
                    </span>
                    
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4 inline-block align-middle"
                        >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                
                    
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 truncate">
                    {edu.degree}
                  </div>
                </div>
              </div>
              {/* Right: Period */}
              <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap ml-4">
                {edu.period}
              </div>
            </a>
            </ScrollBlur>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 