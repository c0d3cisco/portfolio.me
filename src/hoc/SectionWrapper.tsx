import React from "react";
import { AnimatePresence, m } from "framer-motion";
import { styles } from "../styles";


const SectionWrapper = (Component: React.FC, idName: string) =>
  function HOC() {
    return (
      <AnimatePresence>
        <m.section
          layout
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          // initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>
          <Component />
        </m.section>
      </AnimatePresence>
    );
  };

export default SectionWrapper;
