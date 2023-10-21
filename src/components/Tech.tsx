import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { m } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { Canvas } from "@react-three/fiber";


const Tech = () => {
  return (
    <>
      <m.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}> What tools I can utilize</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </m.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <Canvas
          frameloop="always"
          shadows
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
        >
            {technologies.map((technology, index) => (
              <div key={"tech" + index}>
                <div className="w-28 h-28" key={technology.name}>
                  <BallCanvas icon={technology.icon} />
                </div>
                <p className=" text-center">{technology.name}</p>
              </div>
            ))}
        </Canvas>
      </div>
    </>
  );
};

const TechSectionWrapper = SectionWrapper(Tech, "tech");
export default TechSectionWrapper;
