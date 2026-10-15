import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import ScrollBlur from '../ui/ScrollBlur';

const Certifications = () => {
  const certificationsList = portfolioData.certifications;

  return (
    <section id="certifications" className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollBlur>
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h2>
            <div className="mt-1.5 w-10 h-0.5 bg-blue-600 rounded-full" />
          </div>
        </ScrollBlur>

        <div>
          {certificationsList.map((cert, idx) => (
            <ScrollBlur key={idx} delay={idx * 80}>
              <a
                href={cert.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={cert.logo}
                    alt={cert.organization}
                    className="w-9 h-9 rounded-lg object-cover flex-shrink-0 border border-gray-200 dark:border-gray-700 bg-white"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                        {cert.title}
                      </span>
                      <svg
                        className="w-3 h-3 text-gray-300 dark:text-gray-600 flex-shrink-0 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{cert.organization}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap ml-4 flex-shrink-0">
                  {cert.period}
                </span>
              </a>
              {idx < certificationsList.length - 1 && (
                <div className="ml-12 border-b border-gray-100 dark:border-gray-800" />
              )}
            </ScrollBlur>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
