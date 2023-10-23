
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { m } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";


const Tech = () => {
  return (
    <>
      <m.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}> What tools I can utilize</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </m.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology, index) => (
              <div key={"tech" + index} className="bg-tertiary rounded-lg w-28">
                <div className="w-24 h-24 mx-auto" key={technology.name}>
                  <img src={technology.icon} />
                </div>
                <p className=" text-center">{technology.name}</p>
              </div>
            ))}
      </div>
    </>
  );
};

const TechSectionWrapper = SectionWrapper(Tech, "tech");
export default TechSectionWrapper;
