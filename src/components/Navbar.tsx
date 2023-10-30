import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
//TODO: change logo!
import { logo, menu, close } from "../assets/index.ts";
import {
  SettingsContext,
  SettingsContextState,
} from "./context/settings/index.tsx";
import { usa, spain } from "../assets/index.ts";

const navTextSize = "18px";

const Navbar = () => {
  const [active, setActive] = useState(["", ""]);
  const [toggle, setToggle] = useState(false);

  const context = useContext(SettingsContext);

  const { language, setLanguage } = context as SettingsContextState;

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(["", ""]);
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p
            className={`font-bold cursor-pointer text-white text-[${navTextSize}] flex`}
          >
            Cisco{" "}
            <span className="sm:block hidden">
              {" "}
              &nbsp; | &nbsp; {["Portfolio", "Portafolio"][language]}
            </span>{" "}
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 justify-center items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[${navTextSize}] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a
                href={`#${link.id}`}
                aria-label={`link to the ${link.id} section of the page`}
              >
                {link.title[language]}
              </a>
            </li>
          ))}
          <li
          className="flex justify-center items-center cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
              setLanguage(language ? 0 : 1);
              localStorage.setItem("language", language ? "0" : "1");
            }}
          >
            <img
              src={usa}
              className={`w-10 ${!language ? '' : 'brightness-[0.25]'}`}
              alt="usa flag"
            />
            <img
              className={`w-10 ${language ? '' : 'brightness-[0.25]'}`}
              src={spain}
              alt="usa flag"
            />
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={`${toggle ? close : menu}`}
            alt="menu icon"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.id}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
