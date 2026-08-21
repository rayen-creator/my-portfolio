import Reveal from "../../components/reveal";
import Title from "../../components/title";
import { HiBriefcase } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { experiences } from "@/constants";

export default function Experience() {
  return (
    <section id="Experience" className="my-20">
      <Reveal>
        <Title title={"Experience"} />
      </Reveal>
      <div className="relative">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gray-300 dark:bg-gray-700" />
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <Reveal key={index}>
              <div className="relative pl-10">
                <span
                  className={`absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                    exp.current
                      ? "bg-primary border-primary"
                      : "bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-600"
                  }`}
                >
                  <HiBriefcase
                    className={`text-sm ${
                      exp.current ? "text-white" : "text-gray-500 dark:text-gray-300"
                    }`}
                  />
                </span>

                <div className="shadow-lg rounded-md p-6 dark:bg-white text-black dark:shadow-none">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-Poppins_SemiBold">
                        {exp.role}
                        <span className="text-primary"> · {exp.company}</span>
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                        <HiOutlineLocationMarker />
                        {exp.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {exp.current && (
                        <span className="inline-flex items-center px-2 py-1 text-xs font-bold leading-none text-white bg-primary rounded-full">
                          Current
                        </span>
                      )}
                      <span className="text-sm font-Poppins_Regular text-gray-500 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {exp.bullets && (
                    <ul className="mt-4 space-y-2 list-disc list-inside text-sm font-Poppins_Regular text-gray-700 text-justify">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {exp.projects && (
                    <div className="mt-4 space-y-4">
                      {exp.projects.map((project, i) => (
                        <div
                          key={i}
                          className={`pt-4 ${
                            i > 0 ? "border-t border-gray-200" : ""
                          }`}
                        >
                          <h4 className="text-sm md:text-base font-Poppins_SemiBold text-gray-800">
                            {project.name}
                          </h4>
                          <ul className="mt-2 space-y-2 list-disc list-inside text-sm font-Poppins_Regular text-gray-700 text-justify">
                            {project.bullets.map((bullet, j) => (
                              <li key={j}>{bullet}</li>
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
                        className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-black rounded-full border border-primary"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
