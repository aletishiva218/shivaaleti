import React from 'react';
import ScrollBlur from '../ui/ScrollBlur';

const skills = [
  'Node.js',
  'Express',
  'MongoDB',
  'Python',
  'TailwindCSS',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git & GitHub'
];

const Skills = () => {
  return (
    <section id="skills" className="py-6 bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-3">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left">Skills</h2>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, idx) => (
            <ScrollBlur key={skill} delay={idx * 100}>
              <span className="bg-black text-white font-semibold text-xs px-2 py-0.5 rounded mb-1">
                {skill}
              </span>
            </ScrollBlur>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 