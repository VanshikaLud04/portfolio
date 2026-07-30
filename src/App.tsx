import React, { useEffect } from 'react';
import Lenis from 'lenis';
import './index.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import CursorTrail from './components/ui/CursorGlow';
import AmbientParticles from './components/ui/AmbientParticles';

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-sage/30 selection:text-ink">
      <AmbientParticles />
      <CursorTrail />
      {/* Book Index Navigation */}
      <Navbar />

      <main className="pl-[5%] pr-[5%] md:pl-[200px] md:pr-[10%] w-full max-w-7xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default App;
