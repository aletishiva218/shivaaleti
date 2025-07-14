import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

/**
 * GlowingCursor renders a soft, radial glowing effect that follows the mouse cursor
 * and fades out when the mouse stops moving. The glow is fixed, pointer-events-none,
 * and always in the background. The color changes based on the current theme.
 */
const GlowingCursor = () => {
  const { isDarkMode } = useTheme();
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setVisible(false), 600);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Glow size and style
  const size = 340;
  
  // Theme-based glow colors
  const glowColor = isDarkMode 
    ? 'rgb(60, 98, 203)' // Blue for dark mode
    : 'rgb(59, 130, 246)'; // Lighter blue for light mode
  
  const backgroundColor = isDarkMode 
    ? 'rgb(17 24 39)' // Dark background for dark mode
    : 'rgb(243 244 246)'; // Light background for light mode

  const style = {
    left: position.x - size / 2,
    top: position.y - size / 2,
    width: size,
    height: size,
    opacity: visible ? 0.15 : 0,
    transition: 'opacity 0.5s, left 0.1s, top 0.1s',
    background: `radial-gradient(circle, ${glowColor} 0%, ${backgroundColor} 60%, transparent 100%)`,
    pointerEvents: 'none',
    position: 'fixed',
    zIndex: 0,
    borderRadius: '50%',
    willChange: 'opacity, left, top',
  };

  return <div style={style} />;
};

export default GlowingCursor; 