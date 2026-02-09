import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/use-mobile";

/* ── Mouse tracker ── */
const MouseTracker = ({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) => {
  const { viewport } = useThree();
  useFrame(({ pointer }) => {
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, pointer.x * viewport.width * 0.15, 0.05);
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, pointer.y * viewport.height * 0.15, 0.05);
  });
  return null;
};

/* ── Floating shape ── */
const FloatingShape = ({
  position,
  geometry,
  color,
  speed = 1,
  distort = 0.3,
  mouse,
}: {
  position: [number, number, number];
  geometry: "torus" | "octahedron" | "icosahedron" | "torusKnot";
  color: string;
  speed?: number;
  distort?: number;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * speed * 0.3;
    ref.current.rotation.y = t * speed * 0.2;
    ref.current.position.x = position[0] + mouse.current.x * 0.15;
    ref.current.position.y = position[1] + mouse.current.y * 0.15 + Math.sin(t * speed) * 0.3;
  });

  const geo = {
    torus: <torusGeometry args={[1, 0.4, 32, 64]} />,
    octahedron: <octahedronGeometry args={[1, 0]} />,
    icosahedron: <icosahedronGeometry args={[1, 1]} />,
    torusKnot: <torusKnotGeometry args={[0.8, 0.3, 128, 32]} />,
  };

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.4} floatIntensity={1}>
      <mesh ref={ref} position={position} scale={0.55}>
        {geo[geometry]}
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.6}
          distort={distort}
          speed={1.5}
          roughness={0.15}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
};

/* ── Wobbling wireframe sphere ── */
const WobblingSphere = () => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    ref.current.rotation.z = s.clock.elapsedTime * 0.08;
    ref.current.rotation.y = s.clock.elapsedTime * 0.05;
    ref.current.scale.setScalar(2.5 + Math.sin(s.clock.elapsedTime * 0.5) * 0.1);
  });
  return (
    <mesh ref={ref} position={[0, 0, -3]}>
      <sphereGeometry args={[1, 48, 48]} />
      <MeshWobbleMaterial color="#7B61FF" transparent opacity={0.1} factor={0.4} speed={0.8} wireframe />
    </mesh>
  );
};

/* ── Petal instanced mesh ── */
const PetalField = ({ count = 500 }: { count?: number }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // petal shape: scaled sphere → flat oval
  const petalGeo = useMemo(() => {
    const g = new THREE.SphereGeometry(0.06, 8, 6);
    g.scale(1, 0.15, 0.6);
    return g;
  }, []);

  const seeds = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 18,
        y: Math.random() * 16 - 4,
        z: (Math.random() - 0.5) * 14,
        rx: Math.random() * Math.PI * 2,
        ry: Math.random() * Math.PI * 2,
        rz: Math.random() * Math.PI * 2,
        speedY: 0.15 + Math.random() * 0.25,
        speedDrift: (Math.random() - 0.5) * 0.3,
        speedRot: 0.3 + Math.random() * 0.7,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const s = seeds[i];
      // fall & loop
      let y = s.y - (t * s.speedY) % 20;
      if (y < -6) y += 20;

      dummy.position.set(
        s.x + Math.sin(t * 0.5 + s.phase) * s.speedDrift * 2,
        y,
        s.z
      );
      dummy.rotation.set(
        s.rx + t * s.speedRot * 0.4,
        s.ry + t * s.speedRot * 0.3,
        s.rz + t * s.speedRot * 0.2
      );
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[petalGeo, undefined!, count]}>
      <meshStandardMaterial
        color="#FF5DA2"
        emissive="#9B30FF"
        emissiveIntensity={0.35}
        transparent
        opacity={0.55}
        side={THREE.DoubleSide}
        roughness={0.6}
        metalness={0.2}
      />
    </instancedMesh>
  );
};

/* ── Camera drift ── */
const CameraDrift = ({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) => {
  const { camera } = useThree();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.current.x * 0.3 + Math.sin(t * 0.15) * 0.3, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.current.y * 0.2 + Math.cos(t * 0.12) * 0.2, 0.03);
    camera.lookAt(0, 0, 0);
  });
  return null;
};

/* ── Moving lights ── */
const AnimatedLights = () => {
  const pinkRef = useRef<THREE.DirectionalLight>(null!);
  const purpleRef = useRef<THREE.DirectionalLight>(null!);

  useFrame((s) => {
    const t = s.clock.elapsedTime;
    pinkRef.current.position.set(5 + Math.sin(t * 0.3) * 2, 3, 4);
    purpleRef.current.position.set(-5 + Math.cos(t * 0.25) * 2, -2, 5);
  });

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight ref={pinkRef} position={[5, 3, 4]} intensity={1.2} color="#FF5DA2" />
      <directionalLight ref={purpleRef} position={[-5, -2, 5]} intensity={0.8} color="#7B61FF" />
      <pointLight position={[0, 2, 3]} intensity={0.6} color="#FF8DC7" distance={12} />
    </>
  );
};

/* ── Main component ── */
const HeroScene = () => {
  const isMobile = useIsMobile();
  const mouse = useRef({ x: 0, y: 0 });

  const petalCount = isMobile ? 200 : 500;
  const bloomIntensity = isMobile ? 0.6 : 1;

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      dpr={[1, isMobile ? 1.5 : 2]}
    >
      <MouseTracker mouse={mouse} />
      <CameraDrift mouse={mouse} />
      <AnimatedLights />

      <FloatingShape position={[-3, 1.5, 0]} geometry="torus" color="#FF5DA2" speed={0.8} distort={0.4} mouse={mouse} />
      <FloatingShape position={[3, -1, 1]} geometry="icosahedron" color="#7B61FF" speed={1.2} distort={0.3} mouse={mouse} />
      <FloatingShape position={[-1.5, -2, -1]} geometry="octahedron" color="#FF5DA2" speed={0.6} distort={0.2} mouse={mouse} />
      <FloatingShape position={[2, 2, -1]} geometry="torusKnot" color="#9B30FF" speed={0.5} distort={0.5} mouse={mouse} />

      <WobblingSphere />
      <PetalField count={petalCount} />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          intensity={bloomIntensity}
          mipmapBlur
        />
        <Vignette eskil={false} offset={0.1} darkness={0.6} />
      </EffectComposer>
    </Canvas>
  );
};

export default HeroScene;
