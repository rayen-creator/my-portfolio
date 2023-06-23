import Reveal from "../../components/reveal";
import Title from "../../components/title";
import { SiFuturelearn } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";

export default function About() {
  return (
    <div>
      <Reveal>
        <Title title={"About"} />
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
              <p className="text-black font-Poppins_Regular text-md leading-loose text-justify dark:text-gray-300 break-words">
                Over the years, I have honed my skills and gained extensive
                experience in various programming languages, frameworks, and
                libraries. My technical repertoire includes HTML5, CSS,
                JavaScript, Sass, and a deep understanding of modern web
                development frameworks such as Angular and Node.js.
                Collaboration is at the heart of my approach to development.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-black font-Poppins_Regular text-md leading-loose text-justify dark:text-gray-300 break-words">
                I thrive in team environments where diverse perspectives come
                together to build exceptional solutions. I am always eager to
                explore emerging technologies and industry trends to stay at the
                forefront of the ever-evolving web development landscape. I
                embrace challenges and view them as opportunities for innovation
                and personal development.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-black font-Poppins_Regular text-md leading-loose text-justify dark:text-gray-300 break-words">
                In addition to my technical skills, I bring a strong work ethic,
                attention to detail, and a dedication to delivering high-quality
                results on time. I am committed to creating exceptional web
                experiences that not only meet clients' expectations but also
                exceed them.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="col-span-1 float-right">
          <div>
            <div className="my-10">
              <div className="flex justify-start font-Poppins_SemiBold text-xl text-black dark:text-white">
                <BiCodeAlt className="text-3xl text-black bg-primary rounded-md  p-1 mr-2" /> Current
                stack
              </div>
              <div className="my-5 ">
              <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-black rounded-full border border-primary">
                Express
              </span>
              <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-black rounded-full border border-primary">
                Angular
                </span>
                <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-black rounded-full border border-primary">
                Reactjs
                </span>
                <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-black rounded-full border border-primary">
                MongoDB
                </span>
                <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-black rounded-full border border-primary">
                html
                </span>
                <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-black rounded-full border border-primary">
                css
                </span>
                <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-black rounded-full border border-primary">
                mysql
                </span>
                <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-black rounded-full border border-primary">
                Graphql
                </span>
                <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-black rounded-full border border-primary">
                RestAPI
                </span>
              </div>
            </div>
            <div className="my-10">
              <div className="flex justify-start font-Poppins_SemiBold text-xl text-black dark:text-white">
                <SiFuturelearn className="text-3xl text-black bg-primary rounded-md  p-1 mr-2" />{" "}
                Currently learning
              </div>
              <div className="my-5 ">
              <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-black rounded-full border border-primary">
                Nextjs
              </span>
              <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-black rounded-full border border-primary">
                Tailwindcss
                </span>
                <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-black rounded-full border border-primary">
                flask
                </span>
                <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-black rounded-full border border-primary">
                django
                </span>
                <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-black rounded-full border border-primary">
                figma
                </span>
                <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-black rounded-full border border-primary">
                supabase
                </span>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <h4 className="text-3xl text-center font-medium py-2 dark:text-white">
            Who AM I ?{" "}
          </h4>
          <p className="text-md py-14 px-7  text-justify leading-8 text-gray-600 md:text-xl max-w-xl mx-auto dark:text-gray-400">
            IT engineering student, I am passionate about expanding my knowledge
            and skills in the field. I am constantly seeking new opportunities
            to learn and grow, and I am excited to connect with professionals
            who share my enthusiasm for technology. Whether it's through
            internships, projects, or mentorship, I am eager to evolve and make
            a meaningful contribution to the industry.
          </p> */
}

{
  /* <h4 className="text-3xl text-center font-medium py-1 dark:text-white">
Education{" "}
</h4>

<ol className="relative py-14 border-l border-gray-200 dark:border-gray-700">
<li className="mb-10 ml-6">
  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
    <svg
      aria-hidden="true"
      className="w-3 h-3 text-blue-800 dark:text-blue-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
      ></path>
    </svg>
  </span>
  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
    Esprit engineering{" "}
    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
      Latest
    </span>
  </h3>
  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
    Started on Septembuer 15th, 2021 - Present
  </time>
  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
    IT Engineering degree and full stack js develper
  </p>
</li>
<li className="mb-10 ml-6">
  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
    <svg
      aria-hidden="true"
      className="w-3 h-3 text-blue-800 dark:text-blue-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
        clipRule="evenodd"
      ></path>
    </svg>
  </span>
  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
    CrocoCoder
  </h3>
  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
    Graduated on Mars 10th, 2020
  </time>
  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
    Certificate of Completion : MEAN STACK .
  </p>
</li>
<li className="ml-6">
  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
    <svg
      aria-hidden="true"
      className="w-3 h-3 text-blue-800 dark:text-blue-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
        clipRule="evenodd"
      ></path>
    </svg>
  </span>
  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
    Higher Institute of Technological Studies of charguia (ISET
    Charguia)
  </h3>
  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
    Graduated on September 10th, 2020
  </time>
  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
    Bachelor degree in Network and System
    Administration/Administrator{" "}
  </p>
</li>
</ol> */
}
