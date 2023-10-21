import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

type BallProps = {
  imgUrl: string;
};

const Ball = (props: BallProps) => {
  const [decal] = useTexture([props.imgUrl]);
  

  return (
    <Float speed={5} rotationIntensity={0.5} floatIntensity={2}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="gray"
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

type BallCanvasProps = {
  icon: string;
};
const BallCanvas = ({ icon }: BallCanvasProps) => {
  return (
    <>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          // enableRotate={false}
          enablePan={false}
          maxPolarAngle={2}
          minPolarAngle={1}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </>

  );
};

export default BallCanvas;
