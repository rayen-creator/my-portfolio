"use client";
import { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillBehanceCircle,
  AiFillRedditCircle
} from "react-icons/ai";
import Typewriter from "typewriter-effect";

export default function Header() {
   
  return (
    <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-2">
     
      <div className="col-span-2">
        <div className="text-left p-5">
          <h2 className="text-6xl py-2 text-gray-700 font-Poppins_SemiBold   md:text-7xl dark:text-gray-100">
            Hey , I'm Rayen<span className="text-primary text-9xl">.</span>
          </h2>
          <h3 className="flex justify-start text-2xl py-2 md:text-3xl dark:text-white">
            <span className="font-Poppins_Regular">I'm </span>
            <span className="px-1 text-primary font-medium font-Poppins_Regular">
              <Typewriter
                options={{
                  strings: [" FULL STACK WEB DEVELOPER", " IT ENGINEER"],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                }}
              />
            </span>

          </h3>
          <div className="text-4xl flex justify-start gap-4 py-3 text-gray-600 dark:text-white">
            <a href="https://github.com/rayen-creator" target="">
              <AiFillGithub className="cursor-pointer hover:text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/rayen-oueslati-72a55b1b0/"
              target="_blank"
            >
              <AiFillLinkedin className="cursor-pointer hover:text-blue-600" />
            </a>
            <a href="https://twitter.com/rayenoueslati8" target="_blank">
              <AiFillTwitterCircle className="cursor-pointer hover:text-cyan-500" />
            </a>
            <a href="https://www.behance.net/rayenoueslati" target="_blank">
              <AiFillBehanceCircle className="cursor-pointer hover:text-blue-600" />
            </a>
            <a href="https://www.reddit.com/user/rayen26" target="_blank">
              <AiFillRedditCircle className="cursor-pointer hover:text-orange-500" />
            </a>
          </div>
        </div>
        {/* <div className="text-center pb-4">
          <a href="/CV.pdf" download="CV">
            <button className="  text-xl bg-slate-400 text-white  px-4 py-2 border-none rounded-xl ml-8 hover:bg-slate-300" >
              <span className="flex items-center"> My Resume &nbsp; <RiShareBoxLine />
              </span>
            </button>
          </a>

        </div> */}

      </div>
      <div className="col-span-1">
     
      </div>

    </div>
  );
}
