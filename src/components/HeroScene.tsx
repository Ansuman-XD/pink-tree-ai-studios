import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingShape = ({
  position,
  geometry,
  color,
  speed = 1,
  distort = 0.3,
}: {
  position: [number, number, number];
  geometry: "sphere" | "torus" | "octahedron" | "icosahedron" | "torusKnot";
  color: string;
  speed?: number;
  distort?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case "sphere":
        return <sphereGeometry args={[1, 64, 64]} />;
      case "torus":
        return <torusGeometry args={[1, 0.4, 32, 64]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[1, 1]} />;
      case "torusKnot":
        return <torusKnotGeometry args={[0.8, 0.3, 128, 32]} />;
    }
  };

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={0.6}>
        {renderGeometry()}
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.7}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const points = useRef<THREE.Points>(null!);
  const count = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#FF5DA2" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const WobblingSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]} scale={2.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshWobbleMaterial
        color="#7B61FF"
        transparent
        opacity={0.15}
        factor={0.6}
        speed={1}
        wireframe
      />
    </mesh>
  );
};

const HeroScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#FF5DA2" />
      <directionalLight position={[-5, -5, 5]} intensity={0.5} color="#7B61FF" />
      <pointLight position={[0, 0, 3]} intensity={1} color="#FF5DA2" />

      <FloatingShape position={[-3, 1.5, 0]} geometry="torus" color="#FF5DA2" speed={0.8} distort={0.4} />
      <FloatingShape position={[3, -1, 1]} geometry="icosahedron" color="#7B61FF" speed={1.2} distort={0.3} />
      <FloatingShape position={[-1.5, -2, -1]} geometry="octahedron" color="#FF5DA2" speed={0.6} distort={0.2} />
      <FloatingShape position={[2, 2, -1]} geometry="torusKnot" color="#7B61FF" speed={0.5} distort={0.5} />

      <WobblingSphere />
      <ParticleField />
    </Canvas>
  );
};

export default HeroScene;
