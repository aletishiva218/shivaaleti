import React from 'react';
import ScrollBlur from '../ui/ScrollBlur';

const skillCategories = [
  {
    label: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'TailwindCSS'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'PHP', 'FastAPI'],
  },
  {
    label: 'Database & Tools',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Git & GitHub', 'Docker', 'Scrapy', 'Selenium'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollBlur>
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
            <div className="mt-1.5 w-10 h-0.5 bg-blue-600 rounded-full" />
          </div>
        </ScrollBlur>

        <div className="grid sm:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <ScrollBlur key={cat.label} delay={catIdx * 100}>
              <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollBlur>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
