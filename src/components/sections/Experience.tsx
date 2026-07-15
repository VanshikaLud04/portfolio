import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import { experience } from '../../content/data';
import { ExternalLink } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
};

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          custom={0}
          variants={fadeUp}
        >
          <span className="section-eyebrow">EXPERIENCE //</span>
          <h2>Where I've worked</h2>
        </motion.div>

        <div className="experience__timeline">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className="experience__item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={i + 1}
              variants={fadeUp}
            >
              <div className="experience__marker">
                <div className="experience__dot" />
                {i < experience.length - 1 && <div className="experience__line" />}
              </div>

              <div className="experience__content">
                <div className="experience__header">
                  <div>
                    <p className="experience__role">{exp.role}</p>
                    <p className="experience__org">{exp.org}</p>
                  </div>
                  <div className="experience__meta">
                    <span className="mono-label experience__date">{exp.date}</span>
                    {exp.link && (
                      <a
                        href={exp.link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="experience__link"
                      >
                        <ExternalLink size={11} />
                        {exp.link.label}
                      </a>
                    )}
                  </div>
                </div>
                <ul className="experience__bullets">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="experience__bullet">{b}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
