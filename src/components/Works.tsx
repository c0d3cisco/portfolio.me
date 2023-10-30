
import Tilt from "react-parallax-tilt";
import { m } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets/index.ts";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useContext } from "react";
import { SettingsContext, SettingsContextState } from "./context/settings/index.tsx";

type ProjectCardProps = {
  index: number;
  name: string[];
  description: string[];
  tags: {
      name: string;
      color: string;
  }[];
  image: string[];
  source_code_link: string;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) => {
  const { language } = useContext(SettingsContext) as SettingsContextState;

  // const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
  return (
    <m.div
      layout
      // className={`cursor-pointer ${isExpanded ? "modelDiv" : ""}`}
      // onClick={() => setIsExpanded(!isExpanded)}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        tiltReverse={true}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        transitionSpeed={2000}
        className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full`}
        >
        <div className="relative w-full h-[230px]">
          <img
            src={image[0]}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => {window.open(source_code_link, "_blank"); console.log('test')}}
              className="propCard black-gradient w-10 h-10 rounded-full flex justify-center items-center"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name[language]}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description[language]}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </m.div>
  );
};

const Works = () => {
  const { language } = useContext(SettingsContext) as SettingsContextState;

  return (
    <>
      <m.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}> {['Where my passion has taken me', 'Donde mi pasión me ha llevado'][language]}</p>
        <h2 className={styles.sectionHeadText}>{['Projects', 'Projectos'][language]}</h2>
      </m.div>
      <div className="w-full flex">
        <m.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {[`Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.`,
          `Los siguientes proyectos muestran mis habilidades y experiencia a través de
          Ejemplos del mundo real de mi trabajo. Cada proyecto se describe brevemente con
          enlaces a repositorios de código y demostraciones en vivo en él. refleja mi
          capacidad para resolver problemas complejos, trabajar con diferentes tecnologías,
          y gestionar proyectos de forma eficaz.`][language]}
        </m.p>
      </div>

      <m.div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </m.div>
    </>
  );
};

const WorkWrapper = SectionWrapper(Works, "work");
export default WorkWrapper;
