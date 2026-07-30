import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../content/data';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center relative py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl"
      >
        <p className="font-mono text-sm text-sage tracking-widest uppercase mb-8">
          00 — {profile.name}
        </p>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-[0.9] tracking-tight text-ink mb-12">
          AI<br />
          SYSTEMS<br />
          ENGINEER
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start">
          <p className="font-mono text-sm leading-relaxed max-w-sm text-ink/80">
            Building distributed backends and computer-vision systems that hold up under load.
          </p>
          <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest text-ink/50">
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`} className="hover:text-sage transition-colors">
              {profile.email}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
