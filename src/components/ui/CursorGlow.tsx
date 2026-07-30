import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Dot = {
  id: number;
  x: number;
  y: number;
};

const CursorTrail: React.FC = () => {
  const [dots, setDots] = useState<Dot[]>([]);
  const dotId = React.useRef(0);

  useEffect(() => {
    // Only show trail on devices that likely have a mouse
    if (window.matchMedia("(hover: none)").matches) return;

    let lastTime = 0;
    const interval = 50; // Add a dot every 50ms

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastTime > interval) {
        lastTime = now;
        const newDot: Dot = {
          id: dotId.current++,
          x: e.clientX,
          y: e.clientY,
        };
        
        setDots((prev) => {
          const updated = [...prev, newDot];
          // Keep only the last ~20 dots to prevent memory bloat
          if (updated.length > 20) {
            return updated.slice(updated.length - 20);
          }
          return updated;
        });

        // Remove the dot after its animation duration
        setTimeout(() => {
          setDots((prev) => prev.filter((d) => d.id !== newDot.id));
        }, 600);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[100] overflow-hidden">
      <AnimatePresence>
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute w-1.5 h-1.5 rounded-full bg-ink/40"
            style={{
              left: dot.x - 3, // center the dot
              top: dot.y - 3,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorTrail;
