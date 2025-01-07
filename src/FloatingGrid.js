import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { RepeatWrapping, TextureLoader } from "three";

export function FloatingGrid() {
  const diffuse = useLoader(
    TextureLoader,
    process.env.PUBLIC_URL + "textures/grid-texture.png"
  );

  useEffect(() => {
    diffuse.wrapS = RepeatWrapping;
    diffuse.wrapT = RepeatWrapping;
    diffuse.anisotropy = 4; // Improves texture quality

    // Increase the repeat to make the grid appear as small checks
    diffuse.repeat.set(100, 100); // Adjust for smaller grid boxes
    diffuse.offset.set(0, 0);
  }, [diffuse]);

  useFrame((state, delta) => {
    let t = -state.clock.getElapsedTime() * 0.1; // Subtle grid animation
    diffuse.offset.set(0, t); // Animates the grid scrolling
  });

  return (
    <mesh
      rotation-x={-Math.PI * 0.5} // Rotate to lay flat on the ground
      position={[0, 0.001, 0]} // Slightly above the ground to avoid z-fighting
    >
      <planeGeometry args={[500, 500]} /> {/* Large plane for the grid */}
      <meshBasicMaterial
        map={diffuse}
        opacity={0.2} // Transparent for blending
        alphaMap={diffuse}
        transparent={true}
        depthWrite={false} // Prevents depth issues
      />
    </mesh>
  );
}
