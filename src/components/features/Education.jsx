import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import ScrollBlur from '../ui/ScrollBlur';

const Education = () => {
  const educationList = portfolioData.education;

  return (
    <section id="education" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollBlur>
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
            <div className="mt-1.5 w-10 h-0.5 bg-blue-600 rounded-full" />
          </div>
        </ScrollBlur>

        <div>
          {educationList.map((edu, idx) => (
            <ScrollBlur key={idx} delay={idx * 80}>
              <a
                href={edu.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="w-9 h-9 rounded-lg object-cover flex-shrink-0 border border-gray-100 dark:border-gray-700 bg-white"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                        {edu.school}
                      </span>
                      <svg
                        className="w-3 h-3 text-gray-300 dark:text-gray-600 flex-shrink-0 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{edu.degree}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap ml-4 flex-shrink-0">
                  {edu.period}
                </span>
              </a>
              {idx < educationList.length - 1 && (
                <div className="ml-12 border-b border-gray-100 dark:border-gray-800" />
              )}
            </ScrollBlur>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
