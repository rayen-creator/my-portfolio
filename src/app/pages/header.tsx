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
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />
            open to backend &amp; full stack roles
          </span>
        </Reveal>
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
                  strings: ["Software Engineer", "Full-Stack Engineer"],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                }}
              />
            </span>
          </h3>
        </Reveal>
        <Reveal>
          <p className="font-mono text-xs md:text-sm text-gray-500 dark:text-gray-400">
            role: full-stack engineer · base: tunis, tn · exp: 3+ yrs
          </p>
        </Reveal>
        <Reveal>
          <div className="text-2xl md:text-4xl flex justify-center md:justify-start gap-4 py-4 text-gray-600 dark:text-white">
            <SocialMediaIconNoBorder />{" "}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
