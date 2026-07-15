import React from 'react';
import { motion, type Variants } from 'framer-motion';
import './About.css';
import { profile, education, achievements } from '../../content/data';
import { MapPin, Trophy, GraduationCap } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          custom={0}
          variants={fadeUp}
        >
          <span className="section-eyebrow">ABOUT_ME //</span>
          <h2>Who I am</h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__bio-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={1}
            variants={fadeUp}
          >
            <p className="about__bio">{profile.bio}</p>
            <div className="about__meta">
              <div className="about__meta-item">
                <MapPin size={14} strokeWidth={1.5} />
                <span>{profile.location}</span>
              </div>
            </div>
          </motion.div>

          <div className="about__right-col">
            {/* Education */}
            <motion.div
              className="about__card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={2}
              variants={fadeUp}
            >
              <div className="about__card-header">
                <GraduationCap size={15} strokeWidth={1.5} />
                <span className="mono-label">EDUCATION //</span>
              </div>
              {education.map((edu, i) => (
                <div key={i} className="about__edu-item">
                  <div className="about__edu-top">
                    <p className="about__edu-institution">{edu.institution}</p>
                    <span className="about__edu-date mono-label">{edu.date}</span>
                  </div>
                  <p className="about__edu-degree">{edu.degree} {edu.detail && <span className="about__edu-detail">{edu.detail}</span>}</p>
                  <p className="about__edu-location">{edu.location}</p>
                </div>
              ))}
            </motion.div>

            {/* Achievements */}
            <motion.div
              className="about__card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={3}
              variants={fadeUp}
            >
              <div className="about__card-header">
                <Trophy size={15} strokeWidth={1.5} />
                <span className="mono-label">ACHIEVEMENTS //</span>
              </div>
              {achievements.map((ach, i) => (
                <div key={i} className="about__achievement">
                  <p className="about__achievement-title">{ach.title}</p>
                  <p className="about__achievement-desc">{ach.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
