"use client";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useState } from "react";
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

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  return (
    <main className={darkMode ? "dark" : ""}>
      <div className=" dark:bg-gray-900">
        <nav className=" px-10 md:px-20 lg:px-40 sticky top-0 z-20 py-10 mb-12 flex justify-between bg-white dark:bg-gray-900 ">

          <h1 className="text-xl font-burtons cursor-pointer dark:text-white">
            <a href="#" onClick={() => setActive("")}
            > Develped by Rayen</a>
          </h1>
          <ul className='list-none hidden sm:flex flex-row gap-10'>

            {/* <ul className="flex items-center">
          

            <li>
                <a
                  className=" bg-gradient-to-t from-cyan-500 to-teal-500  text-white px-4 py-2 border-none rounded-md ml-8 "
                  href="/CV.pdf"
                  download="CV"
                >
                  Resume
                </a>{" "}
              </li>
          </ul> */}

            {navLinks.map((nav) => (

              <li
                key={nav.id}
                className={`${active === nav.title ? " underline" : "text-secondary"
                  } hover:text-gray-400 text-[18px] font-medium cursor-pointer dark:text-white dark:hover:text-gray-600`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            {!darkMode ? (
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(true)}
                  className="cursor-pointer text-2xl  "
                />
              </li>
            ) : (
              <li>
                <BsFillSunFill
                  onClick={() => setDarkMode(false)}
                  className="cursor-pointer text-2xl text-white"
                />
              </li>
            )}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <Image src={toggle ? closewindow : menu}
              alt="menu"
              className={`${darkMode ? '' : 'bg-black fill-black text-black'} w-[28px] h-[28px] object-contain cursor-pointer  `}
              onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient bg-transparent absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl dark:bg-gradient-to-t from-gray-800 to-gray-400  `}>
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`  ${active === link.title ? "text-gray-400 underline" : ""
                      }  font-medium cursor-pointer text-[16px] text-gray-200 dark:text-white `}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}>
                    <a href={`#${link.id}`}>  {link.title}</a>
                  </li>
                ))}
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

          <section className=" ">
            <Header />
          </section>
          <section id="about" className=" py-4 ">
            <Aboutme />
          </section>
          <section id="" className=" pt-5">
            <Projects />
          </section>
          <section id="" className="">
            <div>
              <h3 className="text-3xl font-bold py-1 dark:text-white">Technologies</h3>
            </div>
            <div className="py-10 pl-20">
              <Carousel />
            </div>
          </section>
          <section id="" className="">
            <Contact />
          </section>
          <ScrollToTop />
        </div>
        <Footer />
      </div>

      {/* <section>
          <div>
            <h3 className='text-3xl font-bold py-1'>Portofolio</h3>
            <p className='text-md py-2 leading-8 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ratione mollitia sint, reiciendis, fuga eum, ipsa quos adipisci laboriosam incidunt iste hic sapiente culpa assumenda doloremque dolorum corporis numquam dignissimos.</p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3} className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4} className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5} className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web6} className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
            </div>
          </div>
        </section> */}


    </main>
  );
}
