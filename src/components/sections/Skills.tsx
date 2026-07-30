import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../content/data';

const Skills: React.FC = () => {
  return (
    <section 
      id="skills" 
      className="min-h-screen py-32 flex flex-col justify-center relative border-t border-ink/10"
    >
      <div className="absolute top-8 left-0">
        <span className="font-mono text-xs text-sage tracking-widest uppercase">02 — Building AI Systems</span>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
      >
        <div className="lg:col-span-4">
          <h2 className="text-4xl lg:text-6xl font-serif leading-tight text-ink">
            The<br />Toolkit
          </h2>
        </div>
        
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="relative"
            >
              <h3 className="font-mono text-sm tracking-widest uppercase text-sage mb-6 border-b border-ink/10 pb-2">
                {skillGroup.category}
              </h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="font-serif text-[19px] text-ink/90">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
