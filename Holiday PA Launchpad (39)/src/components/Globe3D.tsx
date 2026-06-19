import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

const PINS: [number, number][] = [
  [39.6, 2.9], // Mallorca
  [36.5, -4.9], // Marbella
  [36.4, 25.4], // Santorini
  [25.2, 55.3], // Dubai
  [-8.4, 115.2], // Bali
  [40.6, 14.6], // Amalfi
  [51.5, -0.13], // London
  [40.7, -74], // New York
  [-33.9, 151.2], // Sydney
];

function latLongToVector3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function Pin({ position, delay }: { position: THREE.Vector3; delay: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime + delay;
    const s = 1 + Math.sin(t * 2) * 0.35;
    ref.current.scale.setScalar(s);
  });
  return (
    <group position={position}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial color="#5EEAD4" />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial color="#5EEAD4" transparent opacity={0.22} />
      </mesh>
    </group>
  );
}

function GlobeMesh() {
  const group = useRef<THREE.Group>(null);
  const radius = 2;

  const dots = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const count = 900;
    const phiSpan = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phiSpan * i;
      points.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(radius * 1.005));
    }
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, []);

  const pins = useMemo(() => PINS.map(([la, lo]) => latLongToVector3(la, lo, radius * 1.02)), []);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={group} rotation={[0.35, 0, 0.1]}>
      <Sphere args={[radius, 64, 64]}>
        <meshStandardMaterial color="#0C4A4E" roughness={0.55} metalness={0.1} />
      </Sphere>
      <points geometry={dots}>
        <pointsMaterial color="#5EEAD4" size={0.035} sizeAttenuation transparent opacity={0.85} />
      </points>
      <Sphere args={[radius * 1.18, 32, 32]}>
        <meshBasicMaterial color="#14B8A6" transparent opacity={0.06} side={THREE.BackSide} />
      </Sphere>
      {pins.map((p, i) => (
        <Pin key={i} position={p} delay={i * 0.6} />
      ))}
    </group>
  );
}

export default function Globe3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 42 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 3, 5]} intensity={1.4} color="#5EEAD4" />
      <directionalLight position={[-5, -2, -3]} intensity={0.5} color="#14B8A6" />
      <GlobeMesh />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
        rotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.6}
      />
    </Canvas>
  );
}
