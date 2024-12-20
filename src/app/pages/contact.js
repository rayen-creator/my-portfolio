import { BsShareFill } from "react-icons/bs";
import {
  AiOutlineBehance,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineReddit,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import Reveal from "../../components/reveal";
import Title from "../../components/title";
import { SocialMediaIconBorder } from "@/components/socialMediaIcon";
export default function Contact() {
  return (
    <section id="Contact" className="mt-1 mb-10 ">
      <Reveal>
        <h3 className="text-3xl font-bold py-1 mb-5 dark:text-white">
          <Title title={"Contact"} />
        </h3>
      </Reveal>
      <div className="grid content-start grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="col-span-1">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-3">
            <div className="md:col-span-2 ">
              <Reveal>
                <div className=" shadow-lg  shadow-slate-200 text-center py-10 rounded-md  dark:bg-white text-black  dark:shadow-none ">
                  <div className="flex  justify-center ">
                    <div className="border rounded-full p-4 text-gray-600 hover:bg-primary hover:text-white">
                      <BsShareFill className="text-xl md:text-3xl " />
                    </div>
                  </div>
                  <h3 className="text-md p-2 font-Poppins_SemiBold  text-gray-600 md:text-xl">
                    Social Profiles
                  </h3>
                  <div className="text-2xl flex justify-center gap-4 py-3 px-1 text-gray-600">
                    <SocialMediaIconBorder />
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="">
              <Reveal>
                <div className=" shadow-lg  shadow-slate-200 text-center p-10 rounded-xl my-1 dark:bg-white text-black  dark:shadow-none ">
                  <div className="flex  justify-center ">
                    <div className="border rounded-full p-4 text-gray-600 hover:bg-primary hover:text-white ">
                      <AiOutlineMail className="text-xl md:text-3xl" />
                    </div>
                  </div>
                  <h3 className="text-md p-2 font-Poppins_SemiBold  text-gray-600 md:text-xl">
                    Email Me
                  </h3>
                  <h5 className="text-sm  p-2 text-gray-600   md:text-md">
                    oueslati.rayen@esprit.tn
                  </h5>
                </div>
              </Reveal>
            </div>
            <div className="">
              <Reveal>
                <div className=" shadow-lg  shadow-slate-200 text-center p-10 rounded-xl my-1 dark:bg-white text-black  dark:shadow-none   ">
                  <div className="flex  justify-center ">
                    <div className="border rounded-full p-4 text-gray-600 hover:bg-primary hover:text-white ">
                      <FiPhoneCall className="text-xl md:text-3xl" />
                    </div>
                  </div>
                  <h3 className="text-md p-2 font-Poppins_SemiBold md:text-xl  text-gray-600 ">
                    Call Me
                  </h3>
                  <h5 className="text-sm p-2 text-gray-600  md:text-md">
                    +216 52 547 930
                  </h5>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <Reveal>
            <div className="shadow-lg  shadow-slate-200 py-10 rounded-md  dark:bg-white text-black  dark:shadow-none   ">
              <div className="relative flex py-1 px-6 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4  text-lg font-medium">
                  <h3 className="text-md p-2 font-Poppins_SemiBold md:text-xl  text-gray-600">
                    Let's get in touch
                  </h3>
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
              <form className="px-6 py-5">
                <div className="grid grid-cols-2 mb-4">
                  <div className="mr-1">
                    <input
                      className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="ml-1">
                    <input
                      className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <input
                    className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    rows="5"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-primary  hover:bg-green-400  text-white font-bold py-3 px-14 rounded-full focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Send
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