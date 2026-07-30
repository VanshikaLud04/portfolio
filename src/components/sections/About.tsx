import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../content/data';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen py-32 flex flex-col justify-center relative border-t border-ink/10"
    >
      <div className="absolute top-8 left-0">
        <span className="font-mono text-xs text-sage tracking-widest uppercase">01 — Who I Am</span>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
      >
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="lg:col-span-5"
        >
          <h2 className="text-5xl lg:text-7xl font-serif leading-tight text-ink">
            An engineer<br />published<br />her notebook.
          </h2>
        </motion.div>
        
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="lg:col-span-6 lg:col-start-7 lg:pt-4"
        >
          <p className="text-xl lg:text-2xl leading-relaxed text-ink font-serif">
            {profile.bio}
          </p>
          
          <div className="mt-12 flex gap-8">
            <a 
              href={profile.links.github} 
              target="_blank" 
              rel="noreferrer"
              className="font-mono text-sm tracking-widest uppercase border-b border-ink/20 pb-1 hover:border-sage hover:text-sage transition-all"
            >
              GitHub
            </a>
            <a 
              href={profile.links.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="font-mono text-sm tracking-widest uppercase border-b border-ink/20 pb-1 hover:border-sage hover:text-sage transition-all"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
