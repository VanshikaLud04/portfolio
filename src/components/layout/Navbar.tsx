import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Cover' },
  { id: 'about', label: '01 Who I Am' },
  { id: 'skills', label: '02 AI Systems' },
  { id: 'projects', label: '03 Selected Work' },
  { id: 'experience', label: '04 Experience' },
  { id: 'contact', label: 'End Notes' },
];

const Navbar: React.FC = () => {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentActiveId = 'hero';
      sections.forEach((section) => {
        if (section && section.offsetTop <= scrollPosition) {
          currentActiveId = section.id;
        }
      });
      setActiveId(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 h-full w-48 p-8 hidden md:flex flex-col justify-center z-50 mix-blend-difference">
      <div className="space-y-4">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block text-xs font-mono tracking-widest uppercase transition-all duration-300 text-left w-full
              ${
                activeId === item.id
                  ? 'text-sage translate-x-2'
                  : 'text-ink/40 hover:text-ink hover:translate-x-1'
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
