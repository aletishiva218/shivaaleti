import { useState, useRef, useEffect } from 'react';
import ScrollBlur from '../ui/ScrollBlur';

const experienceData = [
  {
    logo: '/images/tenderimpulse.webp',
    company: 'Tender Impulse',
    role: 'Python Developer',
    period: 'May 2026 – Present',
    tasks: [
      'Developed, maintained, and optimized Python/Selenium web scrapers for automated data extraction, resolving failures and adapting to website structure changes to ensure reliable, uninterrupted daily data collection.',
      'Engineered proxy rotation and VPN-based IP switching to bypass rate limits and IP blocks, significantly improving scraper uptime and stability.',
      'Built a PHP-based monitoring dashboard that automatically tracks scraper status (running, skipped, missed tenders), cutting manual debugging effort by ~90%.',
      'Collaborated with cross-functional teams using Python, PHP, and MySQL to strengthen scraping infrastructure and automate operational workflows.',
    ],
  },
  {
    logo: '/images/mubychem.webp',
    company: 'Muby Chem Pvt. Ltd.',
    role: 'Web Developer',
    period: 'Oct 2025 – April 2026',
    tasks: [
      'Automated migration of 800+ chemical products using Python Selenium, reducing a 20–25 day manual task to 1–2 days and improving productivity by 90%+, while achieving 95% data accuracy.',
      'Designed and built a centralized Document Management System (DMS) to replace inefficient Outlook-based workflows, with features for product/document management, customer login, quotation approvals, chat, purchase orders, invoice uploads, and enquiry handling.',
      'Integrated secure SFTP-based file management for storing credentials and certifications, eliminating risks of data loss.',
      'Managed production websites using PHP and hosting platforms (cPanel/Hostinger), delivering features 40–50% faster despite working outside primary skills.',
      'Built a secure authentication system with tokens and sessions, reduced recurring issues by 70%, and improved platform performance by 30% through optimization.',
    ],
  },
  {
    logo: '/images/uses.webp',
    company: 'USES Inspiration Pvt. Ltd.',
    role: 'Web Developer',
    period: 'July 2024 – Oct 2025',
    tasks: [
      'Improved development efficiency by 30% by creating a reusable TailwindCSS setup and standardizing project structure, reducing setup time by 60%.',
      'Boosted website performance by 15% on desktop and 20% on mobile through WebP optimization and PageSpeed Insights improvements, achieving faster load times and better SEO.',
      'Delivered projects 30% faster by implementing efficient workflows, prioritization, and strong time-management practices.',
      'Customized WordPress themes/plugins with consistent responsive behavior across devices and measurable improvements in page load stability, caching, and SEO.',
      'Implemented and deployed email API services for reliable, high-performance message delivery in frontend applications.',
    ],
  },
];

const Experience = () => {
  const [isOpen, setIsOpen] = useState(experienceData.map(() => false));
  const [maxHeight, setMaxHeight] = useState(experienceData.map(() => '0px'));
  const contentRefs = useRef([]);

  const toggleItem = (index) => {
    setIsOpen((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  useEffect(() => {
    setMaxHeight(
      isOpen.map((open, i) => {
        const el = contentRefs.current[i];
        return open && el ? el.scrollHeight + 'px' : '0px';
      })
    );
  }, [isOpen]);

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollBlur>
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
            <div className="mt-1.5 w-10 h-0.5 bg-blue-600 rounded-full" />
          </div>
        </ScrollBlur>

        <div>
          {experienceData.map((exp, index) => (
            <ScrollBlur key={index} delay={index * 80}>
              <div
                className="py-4 cursor-pointer"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen[index]}
              >
                <div className="flex items-start gap-3">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-9 h-9 rounded-lg object-cover flex-shrink-0 mt-0.5 bg-white"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-sm text-gray-900 dark:text-white">
                          {exp.company}
                        </span>
                        <svg
                          className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${isOpen[index] ? 'rotate-90' : ''}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap flex-shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{exp.role}</p>

                    <div
                      ref={(el) => (contentRefs.current[index] = el)}
                      style={{ maxHeight: maxHeight[index], opacity: isOpen[index] ? 1 : 0 }}
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                    >
                      <ul className="mt-3 space-y-2 list-disc list-outside ml-4">
                        {exp.tasks.map((task, i) => (
                          <li key={i} className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {index < experienceData.length - 1 && (
                <div className="ml-12 border-b border-gray-200 dark:border-gray-800" />
              )}
            </ScrollBlur>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
