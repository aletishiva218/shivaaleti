import React, { useState, useRef, useEffect } from 'react';
import useslogo from '../../assets/images/uses.webp';
import ScrollBlur from '../ui/ScrollBlur';

/**
 * Work Experience section with expandable content, chevron arrow, and smooth transition
 */
const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight + 'px');
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  return (
    <section id="experience" className="py-6 bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-3">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left">Work Experience</h2>
        <ScrollBlur>
          <div className="flex sm:flex-row sm:items-start rounded-lg mt-2 cursor-pointer" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen}
              aria-controls="exp-content">
          {/* Logo */}
          <div className="flex-shrink-0 mr-3">
            <img src={useslogo} alt="USES Inspiration Pvt. Ltd." className="w-10 h-10 rounded-full bg-white" />
          </div>
          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Company Row (clickable) */}
            <div className="w-full flex items-center justify-between focus:outline-none cursor-pointer group">
              <div className="flex items-center gap-1 text-left">
                <span className="font-semibold text-gray-900 dark:text-white text-sm leading-tight">USES Inspiration Pvt. Ltd.</span>
                {/* Chevron Arrow */}
                <svg
                  className={`w-4 h-4 ml-0.5 transition-transform duration-200 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 sm:text-right min-w-[110px]">
                July 2024 - Present
              </div>
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-300 leading-tight mt-0.5 mb-1">
              Web Developer
            </div>
            {/* Expandable Content with transition */}
            <div
              id="exp-content"
              ref={contentRef}
              style={{ maxHeight, opacity: isOpen ? 1 : 0 }}
              className={`transition-all duration-300 ease-in-out overflow-hidden mt-2 text-xs text-gray-700 dark:text-gray-300 leading-normal`}
            >
              <ul className="list-disc list-inside">
                <li>Boosted dev efficiency by 30% via a reusable TailwindCSS setup.</li>
                <li>Improved performance by 15–20% using WebP image optimization.</li>
                <li>Enhanced SEO with PageSpeed-based tweaks.</li>
                <li>Cut setup time 60% with standard structure.</li>
                <li>Delivered projects 30% faster and built 2 optimized email APIs.</li>
              </ul>
            </div>
          </div>
        </div>
        </ScrollBlur>
      </div>
    </section>
  );
};

export default Experience; 