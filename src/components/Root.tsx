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

const Root = () => {
  return (
    <div className="relative z-0 pageBg">
      <Hero />
      <Navbar />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Contact />
      <StarsCanvas />
    </div>
  );
};

export default Root;
