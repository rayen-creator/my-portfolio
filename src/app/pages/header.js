"use client";
import Typewriter from "typewriter-effect";
import Reveal from "../../components/reveal";
import { SocialMediaIconNoBorder } from "@/components/socialMediaIcon";

export default function Header() {
  return (
    <section
      id="header"
      className="flex items-center justify-center min-h-[270px] md:min-h-[470px] lg:min-h-[470px] md:justify-start  "
    >
      <div className="text-center md:text-left">
        <Reveal>
          <h2 className="text-3xl py-2 text-gray-700 font-Poppins_SemiBold  md:text-7xl lg:text-6xl dark:text-gray-100">
            Hey , I'm Rayen
            <span className="text-primary text-3xl  md:text-7xl lg:text-6xl ">
              .
            </span>
          </h2>
        </Reveal>
        <Reveal>
          <h3 className="flex justify-center md:justify-start text-2xl py-2 md:text-3xl dark:text-white">
            <span className="font-Poppins_Regular text-gray-700 	  dark:text-white">
              I'm{" "}
            </span>
            <span className=" px-1 text-primary  font-Poppins_Regular">
              <Typewriter
                options={{
                  strings: [" full stack developer", " IT engineer"],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                }}
              />
            </span>
          </h3>
        </Reveal>
        <Reveal>
          <div className="text-2xl md:text-4xl flex justify-center md:justify-start gap-4 md:py-3 text-gray-600 dark:text-white">
            <SocialMediaIconNoBorder />{" "}
          </div>
        </Reveal>
      </div>
      {/* <div className="text-center pb-4">
          <a href="/CV.pdf" download="CV">
            <button className="  text-xl bg-slate-400 text-white  px-4 py-2 border-none rounded-xl ml-8 hover:bg-slate-300" >
              <span className="flex items-center"> My Resume &nbsp; <RiShareBoxLine />
              </span>
            </button>
          </a>
        </div> */}
    </section>
  );
}
