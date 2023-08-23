import Reveal from "../../components/reveal";
import Title from "../../components/title";
import { SiFuturelearn } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { currentStack, currentlyLearning } from "@/constants";
import { Link } from "react-scroll";

export default function About() {
  return (
    <section id="About" className="my-20  md:mt:44 ">
      <Reveal>
        <Title title={"About"} />
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="col-span-2">
          <div className="space-y-4">
            <Reveal>
              <p className="text-black font-Poppins_Regular text-md leading-loose text-justify dark:text-gray-300 break-words">
                <span className="text-white text-2xl font-Poppins_SemiBold bg-slate-950 p-1 m-1 rounded-sm dark:bg-gray-700 ">
                  H
                </span>
                ey ! My name is Rayen Oueslati full stack web develper and IT
                engineer with a strong enthusiasm for creating robust and
                dynamic web applications. With a solid foundation in both
                front-end and back-end technologies, I strive to craft seamless
                user experiences while ensuring efficient and scalable
                solutions.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-black font-Poppins_Regular text-md leading-loose text-justify hidden md:block dark:text-gray-300 break-words">
                Over the years, I have honed my skills and gained extensive
                experience in various programming languages, frameworks, and
                libraries. My technical repertoire includes HTML5, CSS,
                JavaScript, Sass, and a deep understanding of modern web
                development frameworks such as Angular and Node.js.
              </p>
            </Reveal>
       
            <Reveal>
              <Link
                to={"Contact"}
                spy={true}
                smooth={true}
                offset={-85}
                duration={100}
              >
                <button className="cursor-pointer text-black font-Poppins_Regular p-2 text-lg relative inline-flex items-center justify-start overflow-hidden transition-all bg-primary rounded-lg hover:bg-primary group">
                  <span className="w-0 h-0 rounded bg-green-400  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                  <span className="w-full text-gray-600 transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                    Hire me{" "}
                  </span>
                </button>
              </Link>
            </Reveal>
          </div>
        </div>
        <div className="col-span-1 float-right">
          <div>
            <div className="my-10">
              <Reveal>
                <div className="flex justify-start font-Poppins_SemiBold text-xl text-black dark:text-white">
                  <BiCodeAlt className="text-3xl text-black bg-primary rounded-md  p-1 mr-2" />{" "}
                  Current stack
                </div>
              </Reveal>
              <Reveal>
                <div className="my-5 ">
                  {currentStack.map((stack) => (
                    <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-black rounded-full border border-primary">
                      {stack.text}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="my-10">
              <Reveal>
                <div className="flex justify-start font-Poppins_SemiBold text-xl text-black dark:text-white">
                  <SiFuturelearn className="text-3xl text-black bg-primary rounded-md  p-1 mr-2" />{" "}
                  Currently learning
                </div>
              </Reveal>
              <Reveal>
                <div className="my-5 ">
                  {currentlyLearning.map((stack) => (
                    <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-black rounded-full border border-primary">
                      {stack.text}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
