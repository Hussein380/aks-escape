import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text3D, Center, Float } from "@react-three/drei";
import * as THREE from "three";

// 3D Logo component
const FloatingLogo = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  const goldMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({
      color: "#D4AF37",
      metalness: 0.9,
      roughness: 0.1,
      emissive: "#D4AF37",
      emissiveIntensity: 0.2,
    }),
    []
  );

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[0, 0.5]}
    >
      <Center>
        <mesh ref={meshRef} material={goldMaterial}>
          <boxGeometry args={[1.2, 1.2, 0.3]} />
        </mesh>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          position={[-0.4, -0.15, 0.2]}
          material={goldMaterial}
        >
          AKs
        </Text3D>
      </Center>
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
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <FloatingLogo />
      </Canvas>
    </div>
  );
};

export default Logo3D;