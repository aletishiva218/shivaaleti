import React from 'react';

import About from './components/features/About';
import Education from './components/features/Education';
import Certifications from './components/features/Certifications';
import Experience from './components/features/Experience';
import Skills from './components/features/Skills';
import Projects from './components/features/Projects';
import Contact from './components/features/Contact';
import Navbar from './components/ui/Navbar';
import SocialBar from './components/ui/SocialBar';
import GlowingCursor from './components/ui/GlowingCursor';

import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div className="App relative">
        <GlowingCursor />
        <Navbar />
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
