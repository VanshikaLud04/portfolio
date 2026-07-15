import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import { profile } from '../../content/data';
import { Mail, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';


// ─── Typewriter ───────────────────────────────────────────────────────────────
const Typewriter: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 22);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && <span className="hero__cursor">|</span>}
    </span>
  );
};

// ─── Magnetic Button ──────────────────────────────────────────────────────────
const MagneticButton: React.FC<{ href: string; className: string; children: React.ReactNode }> = ({ href, className, children }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.25;
    const dy = (e.clientY - cy) * 0.25;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }, []);
  const handleMouseLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)';
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), background 0.2s, border-color 0.2s' }}
    >
      {children}
    </a>
  );
};

// ─── Folder SVG ───────────────────────────────────────────────────────────────
const FolderIcon: React.FC = () => (
  <svg className="hero__folder" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M10 40 C10 34 15 30 21 30 L70 30 L82 18 C85 15 89 13 93 13 L179 13 C185 13 190 18 190 24 L190 130 C190 136 185 141 179 141 L21 141 C15 141 10 136 10 130 Z"
      fill="#4A7FB5" fillOpacity="0.12" stroke="#4A7FB5" strokeWidth="1.5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    />
    <motion.path
      d="M10 50 L10 130 C10 136 15 141 21 141 L179 141 C185 141 190 136 190 130 L190 50 Z"
      fill="#4A7FB5" fillOpacity="0.18"
      initial={{ scaleY: 0, originY: 1, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
    />
    <motion.line x1="40" y1="80" x2="160" y2="80" stroke="#4A7FB5" strokeWidth="1" strokeDasharray="4 4"
      initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1.2, duration: 0.4 }} />
    <motion.line x1="40" y1="96" x2="120" y2="96" stroke="#4A7FB5" strokeWidth="1" strokeDasharray="4 4"
      initial={{ opacity: 0 }} animate={{ opacity: 0.35 }} transition={{ delay: 1.4, duration: 0.4 }} />
    <motion.text x="50%" y="78" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#4A7FB5" fillOpacity="0.7" letterSpacing="2"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 0.4 }}>
      PORTFOLIO.ZIP
    </motion.text>
  </svg>
);

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero: React.FC = () => {
  const nameParts = profile.name.split(' ');

  return (
    <section id="hero" className="hero">

      <div className="container hero__container">
        <div className="hero__content">
          <motion.div className="hero__eyebrow mono-label"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}>
            PORTFOLIO // 2026
          </motion.div>

          <h1 className="hero__name">
            {nameParts.map((word, wi) => (
              <span key={wi} className="hero__name-word">
                {word.split('').map((char, ci) => (
                  <motion.span key={ci} className="hero__name-char"
                    initial={{ opacity: 0, y: 40, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.9 + (wi * word.length + ci) * 0.045 }}>
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p className="hero__title"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1.7 }}>
            {profile.title}
          </motion.p>

          <motion.p className="hero__tagline"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.9 }}>
            <Typewriter text={profile.tagline} delay={1900} />
          </motion.p>

          <motion.div className="hero__actions"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 2.4 }}>
            <MagneticButton href="#projects" className="btn-accent">
              View Work <ArrowDown size={14} />
            </MagneticButton>
            <MagneticButton href="mailto:vanshikaludhani2004@gmail.com" className="btn-outline">
              Get in Touch
            </MagneticButton>
          </motion.div>

          <motion.div className="hero__socials"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.7 }}>
            {[
              { href: profile.links.github, icon: <GithubIcon size={18} /> },
              { href: profile.links.linkedin, icon: <LinkedinIcon size={18} /> },
              { href: `mailto:${profile.email}`, icon: <Mail size={18} /> },
            ].map(({ href, icon }, i) => (
              <motion.a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer" className="hero__social-link"
                initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 2.7 + i * 0.08 }}
                whileHover={{ scale: 1.15, y: -3 }}>
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div className="hero__visual"
          initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
            <FolderIcon />
          </motion.div>
          <motion.div className="hero__visual-label mono-label"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}>
            ARCHIVE // PORTFOLIO
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="hero__scroll-hint"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 3.0, duration: 0.6 }}>
        <motion.div className="hero__scroll-line"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
        <span className="mono-label">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
