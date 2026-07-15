import { useEffect, useRef } from 'react';
import './CursorGlow.css';

const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -300, y: -300 });
  const current = useRef({ x: -300, y: -300 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    const animate = () => {
      // Smooth follow with lerp
      current.current.x += (pos.current.x - current.current.x) * 0.1;
      current.current.y += (pos.current.y - current.current.y) * 0.1;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${current.current.x - 300}px, ${current.current.y - 300}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
};

export default CursorGlow;
