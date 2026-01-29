import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const mouseX = useSpring(0, { stiffness: 400, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-white/40 pointer-events-none z-[9999] hidden md:block"
      style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
    />
  );
}