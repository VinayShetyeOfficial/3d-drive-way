import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh, Color } from "three";

export function Car() {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/car/scene.gltf"
  );

  useEffect(() => {
    gltf.scene.scale.set(0.005, 0.005, 0.005);
    gltf.scene.position.set(0, -0.035, 0);

    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;

        // Adjust car material properties
        object.material.envMapIntensity = 1.2;
        object.material.roughness = 0.3;
        object.material.metalness = 0.7;

        // Add emissive material to the headlights
        if (object.name.includes("Headlight")) {
          object.material.emissive = new Color(1, 0.5, 0); // Bright orange
          object.material.emissiveIntensity = 8; // Strong glow for sharpness
        }
      }
    });
  }, [gltf]);

  useFrame((state, delta) => {
    let t = state.clock.getElapsedTime();

    // Animate wheels
    let group = gltf.scene.children[0].children[0].children[0];
    group.children[0].rotation.x = t * 2; // Front-left wheel
    group.children[2].rotation.x = t * 2; // Front-right wheel
    group.children[4].rotation.x = t * 2; // Back-left wheel
    group.children[6].rotation.x = t * 2; // Back-right wheel
  });

  return (
    <>
      <primitive object={gltf.scene} />

      {/* Add orange point lights for headlights */}
      <pointLight
        position={[0.5, 0.2, 0.8]} // Position for left headlight
        intensity={4} // Adjusted intensity
        distance={15} // Distance of light emission
        decay={2}
        color={"orange"} // Strong orange light
        castShadow
      />
      <pointLight
        position={[-0.5, 0.2, 0.8]} // Position for right headlight
        intensity={4} // Adjusted intensity
        distance={15}
        decay={2}
        color={"orange"} // Strong orange light
        castShadow
      />
    </>
  );
}
