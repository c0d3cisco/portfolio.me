import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const EarthCanvas = () => {


  const earth = useGLTF("./planet/scene.gltf");
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          rotateSpeed={0.5}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
          <primitive
            object={earth.scene}
            scale={2.5}
            position-y={0}
            rotation-x={0.2}
          />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
