import Reveal from "../../components/reveal";
import Title from "../../components/title";
import {
  HiBriefcase,
  HiOutlineLocationMarker,
  HiAcademicCap,
} from "react-icons/hi";
import { experiences, education } from "@/constants";

function shortHash(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16).padStart(6, "0").slice(0, 6);
}

export default function Experience() {
  return (
    <section id="Experience" className="my-20">
      <Reveal>
        <Title title={"Experience"} index={"02"} />
      </Reveal>
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gray-300 dark:bg-white/10" />
        <div className="space-y-14">
          {experiences.map((exp, index) => (
            <Reveal key={index}>
              <div className="relative pl-12">
                <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center">
                  {exp.current && (
                    <span className="absolute h-8 w-8 rounded-full bg-primary/40 animate-ping" />
                  )}
                  <span
                    className={`relative flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                      exp.current
                        ? "bg-primary/10 border-primary shadow-glow-sm"
                        : "bg-white border-gray-300 dark:bg-ink-900 dark:border-white/20"
                    }`}
                  >
                    <HiBriefcase
                      className={`text-sm ${
                        exp.current
                          ? "text-primary"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    />
                  </span>
                </span>

                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <span className="text-primary">#{shortHash(exp.company + exp.role)}</span>
                  <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />
                      live
                    </span>
                  )}
                </div>

                <h3 className="mt-2 text-lg md:text-xl font-Poppins_SemiBold text-gray-900 dark:text-white">
                  {exp.role}
                  <span className="text-primary"> · {exp.company}</span>
                </h3>
                <div className="mt-1 flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <HiOutlineLocationMarker />
                  {exp.location}
                </div>

                {exp.bullets && (
                  <ul className="mt-4 space-y-2 text-sm font-Poppins_Regular text-gray-700 dark:text-gray-300 text-justify">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary shrink-0">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.projects && (
                  <div className="mt-5 space-y-5 border-l border-dashed border-gray-300 dark:border-white/10 pl-4">
                    {exp.projects.map((project, i) => (
                      <div key={i}>
                        <h4 className="font-mono text-xs md:text-sm text-gray-600 dark:text-gray-300">
                          <span className="text-primary">└─ </span>
                          {project.name}
                        </h4>
                        <div className="mt-1 ml-4 flex flex-wrap items-center gap-x-3 gap-y-0.5 font-mono text-[11px] text-gray-500 dark:text-gray-400">
                          <span>{project.period}</span>
                          {project.client && (
                            <span>
                              client: {project.client.flag}{" "}
                              {project.client.name}
                              <span className="text-gray-400 dark:text-gray-500">
                                {" "}
                                · {project.client.country}
                              </span>
                            </span>
                          )}
                        </div>
                        <ul className="mt-2 space-y-2 text-sm font-Poppins_Regular text-gray-700 dark:text-gray-300 text-justify">
                          {project.bullets.map((bullet, j) => (
                            <li key={j} className="flex gap-2">
                              <span className="text-primary shrink-0">▸</span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2 py-1 font-mono text-xs text-primary bg-primary/10 border border-primary/30 rounded"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="relative pl-12">
              <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-white dark:border-white/15 dark:bg-ink-900">
                <HiAcademicCap className="text-sm text-gray-400 dark:text-gray-500" />
              </span>

              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="text-gray-400 dark:text-gray-500">
                  git init
                </span>
              </div>

              <div className="mt-3 space-y-3">
                {education.map((edu, i) => (
                  <div key={i} className="text-sm">
                    <span className="font-Poppins_SemiBold text-gray-600 dark:text-gray-300">
                      {edu.degree}
                    </span>
                    <div className="mt-0.5 flex flex-wrap items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
                      {edu.school} · {edu.location}
                      <span className="font-mono">({edu.period})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
