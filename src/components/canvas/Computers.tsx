import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas, extend, Object3DNode } from "@react-three/fiber";
import { Mesh, GridHelper } from "three";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

class TestWard extends GridHelper {}

extend({ TestWard });

declare module "three" {
  export interface Object3D {
    TestWard: Object3DNode<TestWard, typeof TestWard>;
  }
}



const ComputersCanvas = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const meshRef = useRef<Mesh>(null!);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <mesh ref={meshRef}>
          <hemisphereLight intensity={1} groundColor="red" />
          <spotLight
            position={[-20, 50, 10]}
            intensity={10}
          />
          <pointLight intensity={1} />
          <primitive
            object={computer.scene}
            scale={isMobile ? 0.7 : 0.75}
            position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
            rotation={[-0.01, -0.2, -0.1]}
          />
        </mesh>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
