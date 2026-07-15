import React from 'react';
import { motion, type Variants } from 'framer-motion';
import './Skills.css';
import { skills } from '../../content/data';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          custom={0}
          variants={fadeUp}
        >
          <span className="section-eyebrow">SKILLS //</span>
          <h2>What I work with</h2>
        </motion.div>

        <div className="skills__grid">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              className="skills__group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={gi}
              variants={fadeUp}
            >
              <p className="skills__category mono-label">{group.category}</p>
              <div className="skills__tags">
                {group.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    className="skills__tag"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                      delay: gi * 0.06 + ii * 0.04,
                    }}
                    whileHover={{ y: -2, borderColor: 'var(--color-accent)' }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
