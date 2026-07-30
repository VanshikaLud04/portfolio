import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const AmbientParticles: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { damping: 15, mass: 0.27, stiffness: 55 });
  
  // Create some subtle parallax layers based on scroll
  const y1 = useTransform(smoothProgress, [0, 1], [0, -200]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -400]);
  const y3 = useTransform(smoothProgress, [0, 1], [0, 100]); // Some float upwards

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse pos from -1 to 1
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Soft subtle dots
  const particles = [
    { left: '10%', top: '20%', size: 4, layer: y1, speed: 10 },
    { left: '80%', top: '15%', size: 6, layer: y2, speed: 15 },
    { left: '40%', top: '60%', size: 3, layer: y1, speed: 5 },
    { left: '70%', top: '80%', size: 5, layer: y3, speed: -10 },
    { left: '20%', top: '85%', size: 7, layer: y2, speed: 20 },
    { left: '85%', top: '40%', size: 4, layer: y1, speed: 12 },
    { left: '30%', top: '35%', size: 5, layer: y3, speed: -8 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-multiply opacity-40">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-sage/30 blur-[1px]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            y: p.layer,
            // Subtle repel/attract based on mouse
            x: mousePos.x * p.speed,
          }}
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + (i % 5),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Soft gradient blur that follows mouse smoothly */}
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full bg-sage/5 blur-[100px] -translate-x-1/2 -translate-y-1/2"
        animate={{
          left: `${(mousePos.x + 1) * 50}%`,
          top: `${(mousePos.y + 1) * 50}%`,
        }}
        transition={{ type: "spring", stiffness: 20, damping: 15, mass: 0.5 }}
      />
    </div>
  );
};

export default AmbientParticles;
