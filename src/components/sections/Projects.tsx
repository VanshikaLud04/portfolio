import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../../content/data';

// --- Custom Flowchart Components ---

const FlowchartArrow: React.FC = () => (
  <div className="flex-1 h-px bg-ink/20 relative min-w-[20px] mx-2 my-auto">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-ink/40 rotate-45" />
    <motion.div
      initial={{ x: '-100%', opacity: 0 }}
      whileInView={{ x: '100%', opacity: [0, 1, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 -translate-y-1/2 w-4 h-1 bg-sage rounded-full blur-[1px]"
    />
  </div>
);

const FlowchartNode: React.FC<{ label: string }> = ({ label }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-10%" }}
    className="px-4 py-2 border border-ink/20 rounded-sm bg-ivory font-mono text-xs tracking-wider text-ink/80 text-center shadow-sm"
  >
    {label}
  </motion.div>
);

const FlowchartDiagram: React.FC<{ slug: string }> = ({ slug }) => {
  if (slug === 'llm-cost-guard') {
    return (
      <div className="flex flex-wrap items-center justify-start gap-y-8 w-full max-w-2xl mt-12 mb-8 relative p-8 border border-ink/5 rounded bg-white/30 backdrop-blur-sm">
        {/* Margin Note */}
        <div className="absolute -right-8 -top-8 font-serif text-sm text-sepia rotate-2 opacity-80 max-w-[120px]">
          <span className="block border-b border-sepia/30 pb-1 mb-1">Atomic Reservation</span>
          no double charging!
        </div>

        <FlowchartNode label="Request" />
        <FlowchartArrow />
        <FlowchartNode label="Policy" />
        <FlowchartArrow />
        <FlowchartNode label="Router" />
        <FlowchartArrow />
        <FlowchartNode label="Provider" />
        <FlowchartArrow />
        <FlowchartNode label="Cache" />
      </div>
    );
  }

  if (slug === 'ragbench') {
    return (
      <div className="flex flex-wrap items-center justify-start gap-y-8 w-full max-w-3xl mt-12 mb-8 relative p-8 border border-ink/5 rounded bg-white/30 backdrop-blur-sm">
        {/* Margin Note */}
        <div className="absolute -left-12 bottom-0 font-serif text-sm text-sepia -rotate-3 opacity-80 max-w-[140px]">
          <span className="block border-b border-sepia/30 pb-1 mb-1">Semantic Cache</span>
          bypasses LLM compute
        </div>

        <FlowchartNode label="Query" />
        <FlowchartArrow />
        <div className="flex flex-col gap-2">
          <FlowchartNode label="BM25" />
          <FlowchartNode label="Dense Search" />
        </div>
        <FlowchartArrow />
        <FlowchartNode label="RRF" />
        <FlowchartArrow />
        <FlowchartNode label="Cross-Encoder" />
        <FlowchartArrow />
        <FlowchartNode label="LLM" />
        <FlowchartArrow />
        <FlowchartNode label="Answer" />
      </div>
    );
  }

  if (slug === 'focus-lock') {
    return (
      <div className="flex flex-wrap items-center justify-start gap-y-8 w-full max-w-3xl mt-12 mb-8 relative p-8 border border-ink/5 rounded bg-white/30 backdrop-blur-sm">
        <FlowchartNode label="Camera" />
        <FlowchartArrow />
        <FlowchartNode label="Frames" />
        <FlowchartArrow />
        <FlowchartNode label="YOLO" />
        <FlowchartArrow />
        <FlowchartNode label="Event Bus" />
        <FlowchartArrow />
        <FlowchartNode label="Analytics" />
        <FlowchartArrow />
        <FlowchartNode label="Dashboard" />
      </div>
    );
  }

  return null;
};

// --- Main Component ---

const Projects: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="min-h-screen py-32 flex flex-col justify-start relative border-t border-ink/10"
    >
      <div className="absolute top-8 left-0">
        <span className="font-mono text-xs text-sage tracking-widest uppercase">03 — Selected Work</span>
      </div>

      <div className="flex flex-col gap-48 mt-24">
        {projects.map((project, idx) => {
          // Exclude the NumPy one from the detailed flowcharts if it doesn't have one, just show it minimally.
          const hasDiagram = ['llm-cost-guard', 'ragbench', 'focus-lock'].includes(project.slug);
          
          return (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-5xl mx-auto group perspective-[1000px]"
            >
              {/* Massive Translucent Number */}
              <div className="absolute -top-32 -left-16 text-[20rem] font-serif font-bold text-ink/[0.03] select-none pointer-events-none z-0">
                0{idx + 1}
              </div>

              <motion.div 
                whileHover={{ rotateX: 1, rotateY: -1, y: -4, scale: 1.005 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start p-8 -m-8 rounded-xl hover:bg-white/10 hover:shadow-[0_10px_40px_rgba(28,27,25,0.03)]"
              >
                {/* Title & Metrics */}
                <div className="lg:col-span-5 flex flex-col">
                  <a href={project.link} target="_blank" rel="noreferrer" className="block w-fit">
                    <h3 className="text-4xl md:text-5xl font-serif text-ink mb-4 hover:text-sage transition-colors">
                      {project.title}
                    </h3>
                  </a>
                  
                  {/* Hover-Reveal Metrics */}
                  <div className="h-6 overflow-hidden mb-8">
                    <div className="font-mono text-xs uppercase tracking-widest text-sage flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                      {project.metrics.map((m, i) => (
                        <React.Fragment key={i}>
                          <span>{m}</span>
                          {i < project.metrics.length - 1 && <span className="text-ink/20">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <p className="font-serif text-[19px] leading-relaxed text-ink mb-6">
                    {project.subtitle}
                  </p>

                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block font-mono text-xs tracking-widest uppercase text-ink border-b border-ink/20 pb-1 hover:border-sage hover:text-sage transition-all w-fit"
                  >
                    View Repository ↗
                  </a>
                </div>

                {/* Content & Diagram */}
                <div className="lg:col-span-7">
                  <p className="font-serif text-[19px] leading-relaxed text-ink mb-8" dangerouslySetInnerHTML={{ __html: project.bullets[0] }} />
                  
                  {hasDiagram && (
                    <FlowchartDiagram slug={project.slug} />
                  )}

                  <ul className="flex flex-col gap-4 mt-8">
                    {project.bullets.slice(1).map((bullet, i) => (
                      <li key={i} className="font-serif text-[18px] leading-relaxed text-ink/90 flex gap-4">
                        <span className="text-sage/60 mt-1.5">•</span>
                        <span dangerouslySetInnerHTML={{ __html: bullet }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
