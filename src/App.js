import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import "./style.css";
import { Boxes } from "./Boxes";
import { Car } from "./Car";
import { Ground } from "./Ground";
import { FloatingGrid } from "./FloatingGrid";
import { Rings } from "./Rings";
import { Particles } from "./Particles";

function CarShow() {
  return (
    <>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.8}
      />

      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <color args={[0, 0, 0]} attach="background" />

      <CubeCamera resolution={512} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car />
          </>
        )}
      </CubeCamera>

      {/* Ambient and Directional Lights */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Spotlights */}
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Ground />
      <FloatingGrid />
      <Boxes />
      <Rings />

      {/* Post-Processing Effects */}
      <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={1.2}
          width={400}
          height={400}
          kernelSize={5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.05}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0005, 0.0012]}
        />
        <Vignette eskil={false} offset={0.2} darkness={1.1} />
      </EffectComposer>

      {/* Particles */}
      <Particles count={2000} />
    </>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows camera={{ position: [3, 2, 5] }} gl={{ antialias: true }}>
        <fog attach="fog" args={["#000000", 10, 50]} />
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
