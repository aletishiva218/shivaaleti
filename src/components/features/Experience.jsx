import { useState, useRef, useEffect } from "react";
import ScrollBlur from "../ui/ScrollBlur";

/**
 * Work Experience section with expandable content, chevron arrow, and smooth transition
 */
const Experience = () => {
  const [isOpen, setIsOpen] = useState([false, false]); // state per item
  const [maxHeight, setMaxHeight] = useState(["0px", "0px"]); // maxHeight per item

  // ✅ FIX: stable refs array (not recreated each render)
  const contentRefs = useRef([]);

  const toggleItem = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  useEffect(() => {
    isOpen.forEach((open, index) => {
      const el = contentRefs.current[index];

      setMaxHeight((prev) => {
        const updated = [...prev];
        updated[index] = open && el ? el.scrollHeight + "px" : "0px";
        return updated;
      });
    });
  }, [isOpen]);

  const experienceData = [
    {
      logo: "/images/mubychem.webp",
      company: "Muby Chem Pvt. Ltd.",
      role: "Web Developer",
      period: "Oct 2025 - Present",
      tasks: [
        "Automated migration of 800+ chemical products using Python Selenium, reducing a 20–25 day manual task to 1–2 days and improving productivity by 90%+, while achieving 95% data accuracy.",
        "Designed and built a centralized Document Management System (DMS) to replace inefficient Outlook-based workflows handling large volumes of emails and documents. Implemented features like product/document management, customer login, quotation/sample approvals, chat system, purchase orders, invoice uploads, and enquiry handling—significantly improving organization, tracking, and reliability.",
        "Integrated secure SFTP-based file management for storing credentials and certifications, eliminating risks of data loss and improving structured access for customers.",
        "Managed production websites using PHP and hosting platforms (cPanel/Hostinger), delivering features 40–50% faster despite working outside primary skills, showcasing strong adaptability and fast learning.",
        "Built a secure authentication system with tokens and sessions, reduced recurring issues by 70%, and improved overall platform performance and stability by 30% through efficient debugging and optimization."
      ],
    },
    {
      logo: "/images/uses.webp",
      company: "USES Inspiration Pvt. Ltd.",
      role: "Web Developer",
      period: "July 2024 - Oct 2025",
      tasks: [
        "Improved development efficiency by 30% by creating a reusable TailwindCSS setup and standardizing project structure, reducing setup time by 60%.",
        "Boosted website performance by 15% on desktop and 20% on mobile through WebP optimization and PageSpeed Insights improvements, achieving faster load times and better SEO.",
        "Delivered projects 30% faster by implementing efficient workflows, prioritization, and strong time-management practices.",
        "Customization of WordPress themes/plugins with consistent responsive behavior across devices and measurable improvements in page load stability, caching, and SEO.",
        "Implementation and deployment of email API services for reliable, high-performance message delivery in frontend applications.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-6 bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-3">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left">
          Work Experience
        </h2>

        {experienceData.map((exp, index) => (
          <ScrollBlur key={index}>
            <div
              className="flex sm:flex-row sm:items-start rounded-lg mt-2 cursor-pointer"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen[index]}
              aria-controls={`exp-content-${index}`}
            >
              {/* Logo */}
              <div className="flex-shrink-0 mr-3">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-10 h-10 rounded-full bg-white"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Company Row */}
                <div className="w-full flex items-center justify-between focus:outline-none cursor-pointer group">
                  <div className="flex items-center gap-1 text-left">
                    <span className="font-semibold text-gray-900 dark:text-white text-sm leading-tight">
                      {exp.company}
                    </span>

                    {/* Chevron Arrow */}
                    <svg
                      className={`w-4 h-4 ml-0.5 transition-transform duration-200 ${
                        isOpen[index] ? "rotate-90" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>

                  <div className="text-xs text-gray-500 dark:text-gray-400 sm:text-right min-w-[110px]">
                    {exp.period}
                  </div>
                </div>

                <div className="text-xs text-gray-600 dark:text-gray-300 leading-tight mt-0.5 mb-1">
                  {exp.role}
                </div>

                {/* Expandable Content */}
                <div
                  id={`exp-content-${index}`}
                  // ✅ FIX: store element into the stable ref array
                  ref={(el) => (contentRefs.current[index] = el)}
                  style={{
                    maxHeight: maxHeight[index],
                    opacity: isOpen[index] ? 1 : 0,
                  }}
                  className="transition-all duration-300 ease-in-out overflow-hidden mt-2 text-xs text-gray-700 dark:text-gray-300 leading-normal"
                >
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    {exp.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollBlur>
        ))}
      </div>
    </section>
  );
};

export default Experience;
