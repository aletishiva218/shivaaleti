import React, { useState, useEffect, useRef } from "react";

/**
 * ScrollBlur component that adds blur animation on scroll
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {string} props.className - Additional CSS classes
 * @param {number} props.threshold - Intersection threshold (0-1)
 * @param {number} props.delay - Animation delay in milliseconds
 */
const ScrollBlur = ({ children, className = "", threshold = 0.1, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // ✅ Copy ref value to a local variable (so cleanup uses the same node)
    const node = elementRef.current;
    if (!node) return;

    let timeoutId = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // ✅ Clear any previous timeout
          if (timeoutId) clearTimeout(timeoutId);

          // Add delay before triggering animation
          timeoutId = setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(node);

    return () => {
      // ✅ cleanup uses the captured node (not elementRef.current)
      if (timeoutId) clearTimeout(timeoutId);
      observer.unobserve(node);
      observer.disconnect();
    };
  }, [threshold, delay]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-sm scale-95"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollBlur;
