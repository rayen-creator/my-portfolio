"use client";
import Image from "next/image";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import deved from "../../../public/dev-ed-wave.png";
import Typewriter from "typewriter-effect";

export default function Header() {
  
  return (
    <div className="grid grid-cols-1  md:grid-cols-2   lg:grid-cols-2   ">
      <div className="col-span-1">
        <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            Rayen Oueslati
          </h2>
          <h3 className="flex justify-center text-2xl font-medium py-2 md:text-3xl dark:text-white">
            {/* I'M  */}
            <span className="px-1 text-gray-500">
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
        </div>
        <div className="text-center pb-4">
        <a
                  className="text-xl bg-gradient-to-t from-cyan-500 to-teal-500  text-white px-4 py-2 border-none rounded-xl ml-8 "
                  href="/CV.pdf"
                  download="CV"
                >
                  Download my resume
                </a>
        </div>
        <div className="text-4xl flex justify-center gap-16 py-3 text-gray-600">
      
          <a href="https://github.com/rayen-creator" target="_blank">
            <AiFillGithub className="cursor-pointer hover:text-black" />
          </a>
          <a
            href="https://www.linkedin.com/in/rayen-oueslati-72a55b1b0/"
            target="_blank"
          >
            <AiFillLinkedin className="cursor-pointer hover:text-blue-600" />
          </a>
          <a href="https://twitter.com/rayenoueslati8" target="_blank">
            <AiFillTwitterSquare className="cursor-pointer hover:text-cyan-500" />
          </a>
        </div>
      </div>
      <div className="col-span-1">
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-3 overflow-hidden md:h-50 md:w-50">
          <Image src={deved} layout="fill" objectFit="cover" alt="pic" />
        </div>
      </div>
    </div>
  );
}
