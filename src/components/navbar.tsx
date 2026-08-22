"use client";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-scroll";
import { SunIcon, MoonIcon } from "../components/icon";
import { useThemeContext } from "@/app/utils/context/theme";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const navItems = [
  { to: "About", label: "about", offset: -85 },
  { to: "Experience", label: "experience", offset: -100 },
  { to: "Projects", label: "projects", offset: -100 },
  { to: "Technologies", label: "tech", offset: -100 },
  { to: "Contact", label: "contact", offset: -100 },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useThemeContext();

  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="px-6 md:px-16 lg:px-32 sticky top-0 z-20 py-5 mb-12 flex justify-between items-center bg-white/70 dark:bg-ink-950/80 backdrop-blur border-b border-gray-200 dark:border-white/5">
        <h1 className="text-lg font-Poppins_SemiBold cursor-pointer text-gray-900 dark:text-white">
          <Link
            to={"header"}
            spy={true}
            smooth={true}
            offset={-200}
            duration={100}
          >
            <span className="font-mono text-primary mr-1">&gt;</span>
            Rayen Oueslati
          </Link>
        </h1>

        <ul className="list-none hidden sm:flex flex-row items-center gap-8">
          {navItems.map((item) => (
            <li
              key={item.to}
              className="font-mono text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors"
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={100}
                activeClass="text-primary"
              >
                #{item.label}
              </Link>
            </li>
          ))}

          <li>
            {!darkMode ? (
              <SunIcon
                onClick={() => setDarkMode(true)}
                className="rounded-full p-1 border border-gray-300 text-gray-700 cursor-pointer text-2xl hover:border-primary hover:text-primary"
              />
            ) : (
              <MoonIcon
                onClick={() => setDarkMode(false)}
                className="rounded-full p-1 border border-white/10 cursor-pointer text-2xl text-gray-200 hover:border-primary hover:text-primary"
              />
            )}
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <div className="" onClick={() => setToggle(!toggle)}>
            {!toggle ? (
              <div>
                <GiHamburgerMenu className="text-3xl text-gray-800 dark:text-white" />
              </div>
            ) : (
              <div>
                <AiOutlineClose className="text-3xl text-gray-800 dark:text-white" />
              </div>
            )}
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-16 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-ink-900 shadow-lg`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navItems.map((item) => (
                <li
                  key={item.to}
                  className="font-mono text-sm text-gray-700 dark:text-gray-200 cursor-pointer hover:text-primary"
                >
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={item.offset}
                    duration={100}
                  >
                    #{item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-2">
            {!darkMode ? (
              <div>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(true)}
                  className="cursor-pointer text-2xl text-gray-800  "
                />
              </div>
            ) : (
              <div>
                <BsFillSunFill
                  onClick={() => setDarkMode(false)}
                  className="cursor-pointer text-2xl text-white"
                />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
