import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// 3D Logo component
const FloatingLogo = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  const goldMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({
      color: "#D4AF37",
      metalness: 0.9,
      roughness: 0.1,
      emissive: "#D4AF37",
      emissiveIntensity: 0.1,
    }),
    []
  );

  const accentMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({
      color: "#B8860B",
      metalness: 0.8,
      roughness: 0.2,
      emissive: "#B8860B",
      emissiveIntensity: 0.05,
    }),
    []
  );

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.4}
      floatingRange={[0, 0.3]}
    >
      <group>
        {/* Main crystal/diamond shape */}
        <mesh ref={meshRef} material={goldMaterial} position={[0, 0, 0]}>
          <octahedronGeometry args={[1, 0]} />
        </mesh>
        
        {/* Accent ring */}
        <mesh ref={ringRef} material={accentMaterial} position={[0, 0, 0]}>
          <torusGeometry args={[1.5, 0.1, 8, 32]} />
        </mesh>
        
        {/* Small accent spheres */}
        <mesh material={goldMaterial} position={[1.2, 0.8, 0.5]}>
          <sphereGeometry args={[0.15, 16, 16]} />
        </mesh>
        <mesh material={goldMaterial} position={[-1.2, -0.8, 0.5]}>
          <sphereGeometry args={[0.15, 16, 16]} />
        </mesh>
      </group>
    </Float>
  );
};

interface Logo3DProps {
  className?: string;
}

const Logo3D = ({ className = "" }: Logo3DProps) => {
  return (
    <div className={`${className} pointer-events-none`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={0.8}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        <FloatingLogo />
      </Canvas>
    </div>
  );
};

export default Logo3D;