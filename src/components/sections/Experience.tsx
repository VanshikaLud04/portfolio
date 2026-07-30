import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../content/data';

const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="min-h-screen py-32 flex flex-col justify-center relative border-t border-ink/10"
    >
      <div className="absolute top-8 left-0">
        <span className="font-mono text-xs text-sage tracking-widest uppercase">04 — Experience</span>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
      >
        <div className="lg:col-span-4">
          <h2 className="text-4xl lg:text-6xl font-serif leading-tight sticky top-32 text-ink">
            The<br />Log
          </h2>
        </div>
        
        <div className="lg:col-span-8 flex flex-col gap-24 mt-8 lg:mt-0">
          {experience.map((exp, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="relative group"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
                <h3 className="text-2xl font-serif text-ink font-medium">
                  {exp.role} <span className="text-sage italic font-normal">&mdash; {exp.org}</span>
                </h3>
                <span className="font-mono text-xs text-ink/70 uppercase tracking-wider mt-2 md:mt-0">
                  {exp.date}
                </span>
              </div>
              
              <ul className="flex flex-col gap-4 mb-8">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="font-serif text-[18px] leading-relaxed text-ink/90 flex gap-4">
                    <span className="text-sage/60 mt-1.5">•</span>
                    <span dangerouslySetInnerHTML={{ __html: bullet }} />
                  </li>
                ))}
              </ul>
              
              <a 
                href={exp.link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block font-mono text-xs tracking-widest uppercase text-sepia border-b border-sepia/30 pb-1 hover:border-sepia transition-all font-semibold"
              >
                {exp.link.label} ↗
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
