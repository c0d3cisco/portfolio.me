
import { Component, Suspense } from "react";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { Object3DNode, extend } from "@react-three/fiber";

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
        <meshStandardMaterial color="gray" />
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
  name: string;
};

class BallCanvas extends Component<BallCanvasProps> {

  icon!: string;
  name!: string;

  render() {
    // const { icon } = this.props;
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
          <Ball imgUrl={this.icon} />
        </Suspense>

        <Preload all />
      </>
    );
  }
}

extend({ BallCanvas });

declare module '@react-three/fiber' {
  interface ThreeElements {
    ballCanvas: Object3DNode<BallCanvas, typeof BallCanvas>
  }
}


export default BallCanvas;
