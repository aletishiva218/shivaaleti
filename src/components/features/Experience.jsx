import React, { useState, useRef, useEffect } from "react";
import useslogo from "../../assets/images/uses.webp";
import mubyChemlogo from "../../assets/images/mubychem.webp";
import ScrollBlur from "../ui/ScrollBlur";

/**
 * Work Experience section with expandable content, chevron arrow, and smooth transition
 */
const Experience = () => {
  const [isOpen, setIsOpen] = useState([false, false]); // state per item
  const [maxHeight, setMaxHeight] = useState(["0px", "0px"]); // maxHeight per item
  const contentRefs = [useRef(null), useRef(null)]; // refs per item

  const toggleItem = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  useEffect(() => {
    isOpen.forEach((open, index) => {
      if (open && contentRefs[index].current) {
        setMaxHeight((prev) => {
          const updated = [...prev];
          updated[index] = contentRefs[index].current.scrollHeight + "px";
          return updated;
        });
      } else {
        setMaxHeight((prev) => {
          const updated = [...prev];
          updated[index] = "0px";
          return updated;
        });
      }
    });
  }, [isOpen]);

  const experienceData = [
    {
      logo: mubyChemlogo,
      company: "Muby Chem Pvt. Ltd.",
      role: "Web Developer",
      period: "Oct 2025 - Present",
      tasks: [
        "Automated the migration of 800+ chemical products by developing a Python Selenium automation system, reducing a 20–25 day manual task to just 1–2 days, increasing productivity by over 90%.",
        "Improved data accuracy by 95% through automated fetching, filtering, and structuring of product details (names, agencies, descriptions, images), eliminating repetitive manual errors.",
        "Managed multiple production websites using PHP and hosting tools (including cPanel/Hostinger) and delivered features with 40–50% faster development speed, despite these not being primary skills — showcasing strong quick-learning and adaptability.",
        "Delivered a 100% reliable authentication system using access tokens, refresh tokens, and secure sessions, improving platform security and user experience.",
        "Resolved live website issues with 70% fewer recurring problems through rapid debugging and AI-assisted analysis (ChatGPT, LLM tools), ensuring stable and high-performance operations.",
        "Enhanced overall website performance and stability by 30% through efficient maintenance, improved functionality, and quick turnaround on fixes.",
        "Demonstrated strong problem-solving and fast-learning ability by understanding unfamiliar technologies (PHP, hosting panels, server-side tools) within 1–1.5 weeks and delivering high-quality, accurate results consistently.",
      ],
    },
    {
      logo: useslogo,
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
                  ref={contentRefs[index]}
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
