import { m } from "framer-motion";
import { styles } from "../styles";
import { HeroCanvas } from "./canvas";
import { useContext } from "react";
import { SettingsContext, SettingsContextState } from "./context/settings";

const Hero = () => {
  const { language } = useContext(SettingsContext) as SettingsContextState;


  return (
    <section className={`relative w-full h-screen mx-auto z-50`}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FFBA0A]" />
          <div className="w-1 sm:h-80 h-40 yellow-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white-100`}>
            {["Hi, I'm", 'Hola, soy'][language]} <span className="text-[#FFBA0A]">CiscoDisco</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {['I understand how to build software', 'Entiendo cómo crear capacidades de'][language]}{" "}
            <br className="sm:block hidden" /> {['capabilities that are equal parts', 'de software que sean escalables, '][language]}{" "}
            <br className="sm:block hidden" /> {['scalable, lovable, and compliant.', 'adorables y compatibles.'][language]}
          </p>
        </div>
      </div>

      { 
        <>
          <HeroCanvas />
          <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
            <a href="#about" aria-label="link to about page for touchscreen devices">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start">
                <m.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mt-2"
                ></m.div>
              </div>
            </a>
          </div>
        </>
      }
    </section>
  );
};

export default Hero;
