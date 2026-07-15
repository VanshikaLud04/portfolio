import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './navbar.css';
import { profile } from '../../content/data';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// ── VL Brandmark ──────────────────────────────────────────────────────────────
// V and L share the bottom-left corner point — the tip of the V becomes
// the inner corner of the L, unifying both letters into one monogram.
const VLMark: React.FC = () => (
  <svg
    className="navbar__mark"
    viewBox="0 0 40 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="VL monogram"
  >
    {/* Accent dot — top-right, folder blue */}
    <motion.circle
      cx="36" cy="4" r="2.5"
      fill="#4A7FB5"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.6, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    />

    {/* V stroke — left arm and right arm meeting at the shared base point */}
    <motion.polyline
      points="2,4 13,32 24,4"
      stroke="#241C15"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    />

    {/* L stroke — vertical bar from top, then horizontal shelf */}
    {/* The L's top starts at same baseline as V's top; 
        horizontal bar aligns with accent dot height */}
    <motion.polyline
      points="28,4 28,32 38,32"
      stroke="#241C15"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
    />

    {/* Thin accent underline under both letters */}
    <motion.line
      x1="2" y1="35" x2="38" y2="35"
      stroke="#4A7FB5"
      strokeWidth="1"
      strokeLinecap="round"
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
    />
  </svg>
);

// ── Navbar ────────────────────────────────────────────────────────────────────
const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo">
          <VLMark />
          <div className="navbar__logo-text-wrap">
            <span className="navbar__logo-name">Vanshika</span>
            <span className="navbar__logo-sub mono-label">Ludhani</span>
          </div>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:vanshikaludhani2004@gmail.com"
              className="navbar__available"
            >
              <span className="navbar__available-dot" />
              Let's Connect
            </a>
          </li>
        </ul>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
