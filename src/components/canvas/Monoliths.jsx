import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float } from '@react-three/drei';

//individual 3D shape helper
function Slab({ position, scale, speed }) {
  const mesh = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.y = Math.sin(t * 0.1 * speed) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshTransmissionMaterial
            backside={false}
            samples={1}
            resolution={256}
            thickness={0.5}
            roughness={0.05}
            chromaticAberration={0.02}
            anisotropy={0}
            distortion={0}
          />
      </mesh>
    </Float>
  );
}

//main component that Scene.jsx calls
export default function Monoliths({ isMobile }) {
  return (
    <group>
      {/* Central Monolith */}
      <Slab 
        position={[0, 0, 0]} 
        scale={isMobile ? [1.8, 3.2, 0.15] : [2.5, 4, 0.15]} 
        speed={0.5} 
      />
      
      {/* Side Monoliths */}
      {!isMobile && (
        <>
          <Slab position={[-4, 1.5, -3]} scale={[1.5, 3, 0.1]} speed={0.8} />
          <Slab position={[4, -1.5, -3]} scale={[1.5, 3, 0.1]} speed={0.6} />
        </>
      )}
    </group>
  );
}