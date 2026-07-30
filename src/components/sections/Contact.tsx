import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../content/data';

const Contact: React.FC = () => {
  return (
    <section 
      id="contact" 
      className="min-h-screen py-32 flex flex-col justify-center relative border-t border-ink/10"
    >
      <div className="absolute top-8 left-0">
        <span className="font-mono text-xs text-sage tracking-widest uppercase">End Notes</span>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-ink">
          Let's Connect
        </h2>
        
        <p className="font-serif text-[19px] text-ink/90 mb-12 max-w-md leading-relaxed">
          Currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is open.
        </p>

        <a 
          href={`mailto:${profile.email}`}
          className="inline-block px-8 py-4 bg-ink text-ivory font-mono text-sm tracking-widest uppercase hover:bg-sage transition-colors duration-300 rounded-sm mb-24"
        >
          Say Hello
        </a>

        <div className="flex gap-8 font-mono text-xs tracking-widest uppercase">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-ink/80 hover:text-sage transition-colors border-b border-transparent hover:border-sage pb-1">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-ink/80 hover:text-sage transition-colors border-b border-transparent hover:border-sage pb-1">LinkedIn</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
