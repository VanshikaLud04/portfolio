import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import { projects } from '../../content/data';
import { GithubIcon } from '../ui/Icons';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Projects: React.FC = () => {
  const [openFile, setOpenFile] = useState<string | null>(null);

  const toggle = (slug: string) => {
    setOpenFile(prev => (prev === slug ? null : slug));
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-eyebrow">PROJECTS //</span>
          <h2>File Archive</h2>
        </motion.div>

        <div className="projects__rail">
          {projects.map((project, i) => {
            const isOpen = openFile === project.slug;
            return (
              <motion.div
                key={project.slug}
                className={`file-panel ${isOpen ? 'file-panel--open' : ''}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02, x: 8 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              >
                {/* Tab header - always visible */}
                <button
                  className="file-panel__tab"
                  onClick={() => toggle(project.slug)}
                  aria-expanded={isOpen}
                >
                  <div className="file-panel__tab-left">
                    <span className="file-panel__id mono-label">{project.id} //</span>
                    <span className="file-panel__title">{project.title}</span>
                    <span className="file-panel__subtitle">{project.subtitle}</span>
                  </div>
                  <div className="file-panel__tab-right">
                    <div className="file-panel__metrics">
                      {project.metrics.map(m => (
                        <span key={m} className="file-panel__metric mono-label">{m}</span>
                      ))}
                    </div>
                    <div className="file-panel__chevron">
                      {isOpen ? <ChevronUp size={16} strokeWidth={1.5} /> : <ChevronDown size={16} strokeWidth={1.5} />}
                    </div>
                  </div>
                </button>

                {/* Expandable content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      className="file-panel__body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="file-panel__body-inner">
                        <div className="file-panel__stack">
                          {project.stack.map(s => (
                            <span key={s} className="file-panel__stack-pill">{s}</span>
                          ))}
                        </div>
                        <ul className="file-panel__bullets">
                          {project.bullets.map((b, bi) => (
                            <li key={bi} className="file-panel__bullet">{b}</li>
                          ))}
                        </ul>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="file-panel__source-link"
                        >
                          <GithubIcon size={14} />
                          View Source Code
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
