import { useState, useRef, useEffect } from 'react';
import ScrollBlur from '../ui/ScrollBlur';

const experienceData = [
  {
    logo: '/images/tenderimpulse.webp',
    company: 'Tender Impulse',
    role: 'Python Developer',
    period: 'May 2026 – Present',
    tasks: [
      'Maintain and debug 283 production web scrapers (Python, Selenium, Scrapy, REST APIs) forming a daily data pipeline at scale; restructured the monitoring and recovery workflow to sustain a ~90% daily success rate.',
      'Build new scrapers for newly added sources and implemented automatic proxy rotation with retry handling, reducing failed runs caused by connection errors and rate-limited requests.',
      "Built a PHP/MySQL monitoring dashboard that tracks each scraper's status (running, skipped, missed tenders), replacing manual daily checks.",
      'Developed and maintain tenderimpulse.co.in (PHP, MySQL) end to end, shipping features, design updates and SEO improvements using Google Search Console and Google Analytics; deliver feature changes to client websites.',
      'Built internal Python tools for operations teams, including a document translator and an API testing tool, automating repeated manual work.',
    ],
  },
  {
    logo: '/images/mubychem.webp',
    company: 'Muby Chem Pvt. Ltd.',
    role: 'Web Developer',
    period: 'Oct 2025 – Apr 2026',
    tasks: [
      'Designed and built a Document Management System (Next.js, Node.js, MongoDB) replacing an Outlook-based workflow of 150–200 emails and 50+ documents; adopted by ~60% of company staff.',
      'Implemented product creation, document uploads, customer approvals for quotations and samples, purchase orders, enquiries and in-app chat, removing the risk of data lost in email threads.',
      'Integrated SFTP-based storage for credential and certification documents, giving teams a single structured, secure source for files.',
      'Automated migration of 800+ products with Python and Selenium, cutting a 20–25 day manual task to 1–2 days.',
    ],
  },
  {
    logo: '/images/uses.webp',
    company: 'Universal Support for Enterprises and Services Pvt. Ltd.',
    role: 'Web Developer',
    period: 'Jul 2024 – Oct 2025',
    tasks: [
      'Built a Node.js email API service powering contact and enquiry forms for the company website and 3–4 client websites.',
      'Improved Google PageSpeed scores on client sites through WebP image conversion, caching and responsive-layout optimization.',
      'Developed and maintained WordPress websites (custom themes and plugins) and managed hosting, DNS, SSL and databases for clients.',
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
