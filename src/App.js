import React from 'react';

// Import components
import About from './components/features/About';
import Education from './components/features/Education';
import Certifications from './components/features/Certifications';
import Experience from './components/features/Experience';
import Skills from './components/features/Skills';
import Projects from './components/features/Projects';
import Contact from './components/features/Contact';
import SocialBar from './components/ui/SocialBar';
import GlowingCursor from './components/ui/GlowingCursor';

// Import theme provider
import { ThemeProvider } from './context/ThemeContext';

/**
 * Main App component that renders the complete portfolio
 */
const App = () => {
  return (
    <ThemeProvider>
      <div className="App relative">
        <GlowingCursor />
        <main>
          <About />
          <Education />
          <Certifications />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <SocialBar />
      </div>
    </ThemeProvider>
  );
};

export default App;
