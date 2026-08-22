import { BsShareFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import Reveal from "../../components/reveal";
import Title from "../../components/title";
import { SocialMediaIconBorder } from "@/components/socialMediaIcon";
export default function Contact() {
  return (
    <section id="Contact" className="mt-1 mb-10 ">
      <Reveal>
        <Title title={"Contact"} index={"05"} />
      </Reveal>
      <div className="grid content-start grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="col-span-1">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-3">
            <div className="md:col-span-2 ">
              <Reveal>
                <div className="text-center py-10 rounded-md border border-gray-200 dark:border-white/10 bg-white dark:bg-ink-900">
                  <div className="flex  justify-center ">
                    <div className="border border-gray-300 dark:border-white/10 rounded-full p-4 text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary transition-colors">
                      <BsShareFill className="text-xl md:text-3xl " />
                    </div>
                  </div>
                  <h3 className="text-md p-2 font-Poppins_SemiBold text-gray-700 dark:text-gray-200 md:text-xl">
                    Social Profiles
                  </h3>
                  <div className="text-2xl flex justify-center gap-4 py-3 px-1 text-gray-600 dark:text-gray-300">
                    <SocialMediaIconBorder />
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="">
              <Reveal>
                <div className="text-center p-10 rounded-xl my-1 border border-gray-200 dark:border-white/10 bg-white dark:bg-ink-900">
                  <div className="flex  justify-center ">
                    <div className="border border-gray-300 dark:border-white/10 rounded-full p-4 text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary transition-colors">
                      <AiOutlineMail className="text-xl md:text-3xl" />
                    </div>
                  </div>
                  <h3 className="text-md p-2 font-Poppins_SemiBold text-gray-700 dark:text-gray-200 md:text-xl">
                    Email Me
                  </h3>
                  <h5 className="text-xs p-2 font-mono text-gray-500 dark:text-gray-400 md:text-md">
                    rayenoueslati60@gmail.com
                  </h5>
                </div>
              </Reveal>
            </div>
            <div className="">
              <Reveal>
                <div className="text-center p-10 rounded-xl my-1 border border-gray-200 dark:border-white/10 bg-white dark:bg-ink-900">
                  <div className="flex  justify-center ">
                    <div className="border border-gray-300 dark:border-white/10 rounded-full p-4 text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary transition-colors">
                      <FiPhoneCall className="text-xl md:text-3xl" />
                    </div>
                  </div>
                  <h3 className="text-md p-2 font-Poppins_SemiBold text-gray-700 dark:text-gray-200 md:text-xl">
                    Call Me
                  </h3>
                  <h5 className="text-sm p-2 font-mono text-gray-500 dark:text-gray-400 md:text-md">
                    +216 52 547 930
                  </h5>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <Reveal>
            <div className="py-10 rounded-md border border-gray-200 dark:border-white/10 bg-white dark:bg-ink-900">
              <div className="relative flex py-1 px-6 items-center">
                <div className="flex-grow border-t border-dashed border-gray-300 dark:border-white/10"></div>
                <span className="flex-shrink mx-4  text-lg font-medium">
                  <h3 className="text-md p-2 font-Poppins_SemiBold md:text-xl text-gray-700 dark:text-gray-200">
                    Let's get in touch
                  </h3>
                </span>
                <div className="flex-grow border-t border-dashed border-gray-300 dark:border-white/10"></div>
              </div>
              <form className="px-6 py-5">
                <div className="grid grid-cols-2 mb-4">
                  <div className="mr-1">
                    <input
                      className="appearance-none border border-gray-300 dark:border-white/10 bg-transparent dark:bg-ink-800 rounded w-full py-3 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:border-primary"
                      id="name"
                      type="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="ml-1">
                    <input
                      className="appearance-none border border-gray-300 dark:border-white/10 bg-transparent dark:bg-ink-800 rounded w-full py-3 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:border-primary"
                      id="email"
                      type="email"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <input
                    className="appearance-none border border-gray-300 dark:border-white/10 bg-transparent dark:bg-ink-800 rounded w-full py-3 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:border-primary"
                    id="email"
                    type="email"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="appearance-none border border-gray-300 dark:border-white/10 bg-transparent dark:bg-ink-800 rounded w-full py-3 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:border-primary"
                    id="message"
                    rows={5}
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    className="font-mono border border-primary/40 bg-primary/10 text-primary hover:bg-primary hover:text-ink-950 hover:shadow-glow font-bold py-3 px-14 rounded-full transition-all focus:outline-none"
                    type="button"
                  >
                    $ send --message
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
