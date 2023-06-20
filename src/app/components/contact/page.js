import { BsShareFill } from "react-icons/bs";
import { AiOutlineBehance, AiOutlineGithub, AiOutlineLinkedin, AiOutlineReddit, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi"
export default function Contact() {
    return (
        <>
            <h3 className="text-3xl font-bold py-1 mb-5 dark:text-white">
                Let's get in touch{" "}
            </h3>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
                <div className="col-span-1">
                    <div class="grid grid-cols-2 gap-3">
                        <div class="col-span-2 ">
                            <div className=" shadow-lg  shadow-slate-200 text-center py-10 rounded-md my-1 dark:bg-white text-black  dark:shadow-none ">
                                <div className="flex  justify-center ">
                                    <div className="border rounded-full p-4 text-gray-600 ">
                                        <BsShareFill className="text-3xl " />

                                    </div>
                                </div>
                                <h3 className="text-xl p-2 font-bold  text-gray-600">Social Profiles</h3>
                                <div className="text-2xl flex justify-center gap-4 py-3 text-gray-600">


                                    <a href="https://github.com/rayen-creator" target="_blank" className="border rounded-full p-2 hover:bg-black ">
                                        <AiOutlineGithub className="cursor-pointer   hover:text-white" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/rayen-oueslati-72a55b1b0/"
                                        target="_blank"
                                        className="border rounded-full p-2 hover:bg-blue-600"
                                    >
                                        <AiOutlineLinkedin className="cursor-pointer hover:text-white" />
                                    </a>
                                    <a href="https://twitter.com/rayenoueslati8" target="_blank" className="border rounded-full p-2 hover:bg-cyan-500">
                                        <AiOutlineTwitter className="cursor-pointer hover:text-white" />
                                    </a>
                                    <a href="https://www.behance.net/rayenoueslati" target="_blank" className="border rounded-full p-2 hover:bg-blue-600">
                                        <AiOutlineBehance className="cursor-pointer hover:text-white" />
                                    </a>
                                    <a href="https://www.reddit.com/user/rayen26" target="_blank" className="border rounded-full p-2 hover:bg-orange-500">
                                        <AiOutlineReddit className="cursor-pointer hover:text-white" />
                                    </a>
                                </div>
                            </div>


                        </div>
                        <div class="">
                            <div className=" shadow-lg  shadow-slate-200 text-center p-10 rounded-xl my-1 dark:bg-white text-black  dark:shadow-none ">
                                <div className="flex  justify-center ">
                                    <div className="border rounded-full p-4 text-gray-600 ">
                                        <AiOutlineMail className="text-center" />

                                    </div>
                                </div>
                                <h3 className="text-xl p-2 font-bold  text-gray-600">Email Me</h3>
                                <h5>oueslati.rayen@esprit.tn</h5>
                            </div>

                        </div>
                        <div class="">
                            <div className=" shadow-lg  shadow-slate-200 text-center p-10 rounded-xl my-1 dark:bg-white text-black  dark:shadow-none   ">
                                <div className="flex  justify-center ">
                                    <div className="border rounded-full p-4 text-gray-600 ">
                                        <FiPhoneCall className="text-center" />

                                    </div>
                                </div>
                                <h3 className="text-xl p-2 font-bold   text-gray-600">Call Me</h3>
                                <h5>+216 52 547 930</h5>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="col-span-1">
                    <div className="shadow-lg  shadow-slate-200 py-10 rounded-md my-10 dark:bg-white text-black  dark:shadow-none   ">
                        <form className="px-6 py-4">
                            <div className="grid grid-cols-2 mb-4">
                                <div className="mr-1">
                                    <input
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="name"
                                        placeholder="Your name" />
                                </div>
                                <div className="ml-1">  
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Your email" /></div>


                            </div>

                            <div className="mb-4">
                                {/* <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">
                                    Email
                                </label> */}
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Subject" />
                            </div>
                            <div className="mb-4">
                                {/* <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">
                                    Message
                                </label> */}
                                <textarea
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    rows="5"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-14 rounded-full focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}