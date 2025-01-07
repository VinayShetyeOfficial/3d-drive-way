import { useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

export function Particles({ count = 5000 }) {
  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      positions.push((Math.random() - 0.5) * 20);
      positions.push((Math.random() - 0.5) * 20);
      positions.push((Math.random() - 0.5) * 20);
    }
    return new THREE.Float32BufferAttribute(positions, 3);
  }, [count]);

  return (
    <Points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" {...particles} />
      </bufferGeometry>
      <PointMaterial size={0.1} color="white" />
    </Points>
  );
}
