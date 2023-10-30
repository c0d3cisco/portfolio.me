import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { m } from "framer-motion";
import { useContext } from "react";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { SettingsContext, SettingsContextState } from "./context/settings";


type ExperienceCardProps = {
  title: string[];
  company_name: string[];
  icon: string;
  iconBg: string;
  date: string;
  hashTags: string[][];
  points: string[][];
}

const ExperienceCard = ( experience: ExperienceCardProps) => {
  const { language } = useContext(SettingsContext) as SettingsContextState;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#002927",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #002927" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name[language]}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title[language]}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name[language]}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points[language].map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  const { language } = useContext(SettingsContext) as SettingsContextState;

  return (
    <>
      <m.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}> {['What I have done so far', 'Lo que he hecho hasta ahora'][language]}</p>
        <h2 className={styles.sectionHeadText}>{['Experience and Education', 'Experiencia y Educación'][language]}</h2>
      </m.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              {...experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

const ExperienceSection = SectionWrapper(Experience, "experience");
export default ExperienceSection;
