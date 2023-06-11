"use client";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import { useState } from "react";
import ScrollToTop from "./scrollToTop/page";
import Footer from "./footer/page";
import Header from "./header/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import Aboutme from "./aboutme/page";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between ">
            <h1 className="text-xl font-burtons dark:text-white">
              Develped by Rayen
            </h1>
            <ul className="flex items-center">
              {!darkMode ? (
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(true)}
                    className="cursor-pointer text-2xl"
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

              <li>
                <a
                  className=" bg-gradient-to-t from-cyan-500 to-teal-500  text-white px-4 py-2 border-none rounded-md ml-8 "
                  href="/CV.pdf"
                  download="CV"
                >
                  Resume
                </a>{" "}
              </li>
            </ul>
          </nav>
          <Header />
        </section>
        <section className="pb-4">
          <Aboutme />
        </section>
        <section className="pt-5">
          <Projects />
        </section>
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

        <section className="">
          <Contact />
        </section>
        <ScrollToTop />
      </div>
      <Footer />
    </main>
  );
}
