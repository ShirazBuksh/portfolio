import { useFrame } from '@react-three/fiber';
import Lenis from '@studio-freight/lenis';
import { useRef, useEffect } from 'react';

export default function LenisController() {
  const lenis = useRef();

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      lerp: 0.07,
    });

    const raf = (time) => {
      if (lenis.current) lenis.current.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      if (lenis.current) lenis.current.destroy();
    };
  }, []);

  return null;
}
