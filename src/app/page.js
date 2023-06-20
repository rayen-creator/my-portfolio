"use client";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { React, useState } from "react";
import ScrollToTop from "./scrollToTop/page";
import Footer from "./footer/page";
import Header from "./header/page";
import Contact from "./contact/page";
import Projects from "./projects/page.js";
import Aboutme from "./aboutme/page";
import Carousel from "./carousel/page";
import Image from "next/image";
import closewindow from "../../public/close.svg";
import menu from "../../public/menu.svg"
import { Link } from "react-scroll";
import {SunIcon,MoonIcon} from "./../Icon/page";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <main className={`${darkMode ? "dark" : ""} `}>
      <div className=" dark:bg-gray-900">
        <nav className=" px-10 md:px-20 lg:px-40 sticky top-0 z-20 py-10 mb-12 flex justify-between bg-white dark:bg-gray-900 ">

          <h1 className="text-xl font-burtons cursor-pointer dark:text-white">
            <Link to={'header'} spy={true} smooth={true} offset={-200} duration={100} > 
            Rayen Oueslati
            </Link>
          </h1>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            <li className={'hover:text-gray-400 text-[18px] font-medium cursor-pointer dark:text-white dark:hover:text-gray-600'}  >
              <Link to={'About'} spy={true} smooth={true} offset={-85} duration={100} > About</Link>
            </li>
            <li className={'hover:text-gray-400 text-[18px] font-medium cursor-pointer dark:text-white dark:hover:text-gray-600'}  >
              <Link to={'Projects'} spy={true} smooth={true} offset={-100} duration={100} > Projects</Link>
            </li>
            <li className={'hover:text-gray-400 text-[18px] font-medium cursor-pointer dark:text-white dark:hover:text-gray-600'}  >
              <Link to={'Technologies'} spy={true} smooth={true} offset={-100} duration={100} >Technologies</Link>
            </li>
            <li className={'hover:text-gray-400 text-[18px] font-medium cursor-pointer dark:text-white dark:hover:text-gray-600'}  >
              <Link to={'Contact'} spy={true} smooth={true} offset={-100} duration={100} >Contact </Link>
            </li>

            {!darkMode ? (
              <li>
                <SunIcon
                  onClick={() => setDarkMode(true)}
                  className="rounded-full p-1 bg-black text-white cursor-pointer text-3xl hover:text-gray-400 "
                />
              </li>
            ) : (
              <li>
                <MoonIcon
                  onClick={() => setDarkMode(false)}
                  className="rounded-full p-1 bg-white cursor-pointer text-3xl text-black hover:text-yellow-400"
                />             
                   {/* <BsFillSunFill
                  onClick={() => setDarkMode(false)}
                  className="cursor-pointer text-2xl text-white hover:text-yellow-400"
                /> */}
              </li>
            )}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center ">
            <Image src={toggle ? closewindow : menu}
              alt="menu"
              className={` w-[28px] h-[28px] object-contain cursor-pointer  `}
              onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient bg-transparent absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl dark:bg-gradient-to-t from-gray-800 to-gray-400  `}>
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                <li className={'font-medium cursor-pointer text-[16px] text-gray-200 dark:text-white'}  >
                  <Link to={'About'} spy={true} smooth={true} offset={-85} duration={100} > About</Link>
                </li>
                <li className={'font-medium cursor-pointer text-[16px] text-gray-200 dark:text-white'}  >
                  <Link to={'Projects'} spy={true} smooth={true} offset={-95} duration={100} > Projects</Link>
                </li>
                <li className={'font-medium cursor-pointer text-[16px] text-gray-200 dark:text-white'}  >
                  <Link to={'Technologies'} spy={true} smooth={true} offset={-95} duration={100} >Technologies</Link>
                </li>
                <li className={'font-medium cursor-pointer text-[16px] text-gray-200 dark:text-white'}  >
                  <Link to={'Contact'} spy={true} smooth={true} offset={-85} duration={100} >Contact </Link>
                </li>
              </ul>
            </div>
            <div className="px-2">
              {!darkMode ? (
                <div>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(true)}
                    className="cursor-pointer text-2xl  "
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
        <div className="px-10 md:px-20 lg:px-40 ">

          <section id="header" className=" my-20">
            <Header />
          </section>
          <section id="About" className=" my-44 ">
            <Aboutme />
          </section>
          <section id="Projects" className="my-20">
            <Projects />
          </section>
          <section id="Technologies" className="my-20" >
            <div>
              <h3 className="text-3xl font-bold py-1 dark:text-white">Technologies</h3>
            </div>
            <div className="py-10 pl-20">
              <Carousel />
            </div>
          </section>
          <section id="Contact" className="my-20" >
            <Contact />
          </section>
          <ScrollToTop />
        </div>
        <Footer />
      </div>
    </main>
  );
}
