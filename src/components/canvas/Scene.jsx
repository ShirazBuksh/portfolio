import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import Monoliths from './Monoliths';
import { Suspense, useState, useEffect } from 'react'; // <--- MUST HAVE THESE

export default function Scene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Basic mobile check
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Check on load
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#050505]">
      <Canvas 
        dpr={[1, 2]} 
        gl={{ antialias: true, alpha: true }}
        eventPrefix="client"
      >
        <Suspense fallback={null}>
          <PerspectiveCamera 
            makeDefault 
            position={[0, 0, isMobile ? 18 : 12]} 
            fov={isMobile ? 45 : 35} 
          />
          <Environment preset="city" />
          
          {/* Pass the isMobile prop down */}
          <Monoliths isMobile={isMobile} />
          
          <ContactShadows 
            position={[0, -4.5, 0]} 
            opacity={0.3} 
            scale={25} 
            blur={3} 
            far={5} 
          />
          <ambientLight intensity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}