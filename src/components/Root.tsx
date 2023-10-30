import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./index.ts";
import { ReactNode, Suspense } from "react";
import LoaderSimple from "./LoaderSimple.tsx";
import  SettingsProvider from "./context/settings/index.tsx";

export type langProps = {
  lang: 0 | 1;
  setLang: React.Dispatch<React.SetStateAction<0 | 1>>;
};

const Root = () => {
  const wrapSuspense = (Components: ReactNode[]) => {
    return Components.map((Component: ReactNode, index: number) => (
      <Suspense key={"root-suspense-" + index} fallback={<LoaderSimple />}>
        {Component}
      </Suspense>
    ));
  };


  return (
    <div className="relative z-0 pageBg">
      <SettingsProvider>
        <LazyMotion features={domAnimation} strict>
          <MotionConfig reducedMotion="user">
            {wrapSuspense([
              <Hero />,
              <Navbar/>,
              <About />,
              <Experience />,
              <Tech />,
              <Works />,
              <Contact />,
              <StarsCanvas />,
            ])}
          </MotionConfig>
        </LazyMotion>
      </SettingsProvider>
    </div>
  );
};

export default Root;
