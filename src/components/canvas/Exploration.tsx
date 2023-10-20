import { Suspense, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Mesh } from "three";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";



const HeroCanvas = () => {
  const computer = useGLTF("./exploration/scene.gltf");
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
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 100 }}
      gl={{ preserveDrawingBuffer: true }}
      >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={-0.5}
          maxPolarAngle={Math.PI/1.5}
          minPolarAngle={Math.PI/2}
          />
        <mesh ref={meshRef}>
          <hemisphereLight intensity={1.5} groundColor="black" />
          <pointLight intensity={10} />
          <primitive
            object={computer.scene}
            scale={isMobile ? 0.7 : 0.75}
            position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
            rotation={[-0.3, 0, -0.3]}
          />
        </mesh>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default HeroCanvas;
