import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import React from "react";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full mx-auto"
    >
      <Tilt
        className="w-full green-yellow-gradient p-[1px] rounded-[20px] shadow-card"
        tiltReverse={true}
        gyroscope={true}
        tiltMaxAngleX={45}
        tiltMaxAngleY={20}
        transitionSpeed={2000}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className={`w-16 h-16 object-contain ${isHovered && 'popout'} `} />
          <h3 className=" text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(3)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled Full-Stack software developer with experience in
        TypeScript and JavaScript, and experiences in frameworks like React,
        Next.js, and Node.js. I bring a vast range of experiences to make unique applications.
      </motion.p>
      <div className="mt-20 grid grid-cols-2 gap-10">
        {services.map((service, index: number) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const AboutSection = SectionWrapper(About, "about");
export default AboutSection;
