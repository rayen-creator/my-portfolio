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
        <Title title={"About"} index={"01"} />
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="col-span-2">
          <div className="space-y-4">
            <Reveal>
              <p className="text-black font-Poppins_Regular text-md leading-loose text-justify dark:text-gray-300 break-words">
                <span className="text-ink-950 text-2xl font-Poppins_SemiBold bg-primary p-1 m-1 rounded-sm">
                  H
                </span>
                ey ! My name is Rayen Oueslati full stack web developer and IT engineer with a
                strong passion for building robust and dynamic web applications. Having a
                solid foundation in both front-end and back-end technology, I strive to create
                simple user experiences to ensure I have an effective and scalable solution

              </p>
            </Reveal>
            <Reveal>
              <p className="text-black font-Poppins_Regular text-md leading-loose text-justify hidden md:block dark:text-gray-300 break-words">
                Over the years, I’ve honed my skills and gained a lot of experience with different programming languages,
                frameworks, and libraries. My technical repertoire includes a deep understanding of HTML5, CSS,
                JavaScript, Sass, and modern web development frameworks like Angular and Node.js.
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
                <button className="cursor-pointer font-mono text-sm p-3 px-6 relative inline-flex items-center justify-start overflow-hidden transition-all border border-primary/40 rounded-md bg-primary/10 hover:bg-primary hover:shadow-glow group">
                  <span className="text-primary group-hover:text-ink-950 transition-colors duration-300 ease-in-out">
                    $ hire --me
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
                <div className="flex items-center gap-2 font-Poppins_SemiBold text-xl text-black dark:text-white">
                  <BiCodeAlt className="text-3xl text-ink-950 bg-primary rounded-md p-1" />
                  Current stack
                </div>
              </Reveal>
              <Reveal>
                <div className="mt-4 rounded-md border border-gray-200 dark:border-white/10 bg-white dark:bg-ink-900 p-4 font-mono text-xs">
                  <div className="text-gray-400">{"{"}</div>
                  <div className="flex flex-wrap gap-2 py-2 pl-4">
                    {currentStack.map((stack, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 text-primary bg-primary/10 border border-primary/30 rounded"
                      >
                        {stack.text}
                      </span>
                    ))}
                  </div>
                  <div className="text-gray-400">{"}"}</div>
                </div>
              </Reveal>
            </div>
            <div className="my-10">
              <Reveal>
                <div className="flex items-center gap-2 font-Poppins_SemiBold text-xl text-black dark:text-white">
                  <SiFuturelearn className="text-3xl text-ink-950 bg-accent rounded-md p-1" />
                  Currently learning
                </div>
              </Reveal>
              <Reveal>
                <div className="mt-4 rounded-md border border-gray-200 dark:border-white/10 bg-white dark:bg-ink-900 p-4 font-mono text-xs">
                  <div className="text-gray-400">{"{"}</div>
                  <div className="flex flex-wrap gap-2 py-2 pl-4">
                    {currentlyLearning.map((stack, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 text-accent bg-accent/10 border border-accent/30 rounded"
                      >
                        {stack.text}
                      </span>
                    ))}
                  </div>
                  <div className="text-gray-400">{"}"}</div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
