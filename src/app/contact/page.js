import { MdEmail, MdGpsFixed, MdPhone } from "react-icons/md";

export default function Contact(){
    return(
        <><h3 className='text-3xl font-bold py-1 dark:text-white'>Let's get in touch </h3><div className="grid grid-cols-1  md:grid-cols-2 gap-4">
            <div className="col-span-1">
                <div className=' shadow-lg text-center p-10 rounded-xl my-10  bg-teal-400'>
                    <div className='flex justify-items-center  py-4'>
                        <MdGpsFixed className='text-sm md:text-2xl' />
                        <p className='p-2 text-sm lg:text-2xl'>
                            Jendouba , Tunisia
                        </p>
                    </div>
                    <div className='flex justify-items-center  py-4 '>
                        <MdEmail className='text-md lg:text-2xl' />
                        <p className='p-2 text-sm lg:text-2xl'>
                            oueslati.rayen@esprit.tn
                        </p>
                    </div>
                    <div className='flex justify-items-center  py-4 '>
                        <MdPhone className='text-sm lg:text-2xl' />
                        <p className='p-2 text-sm lg:text-2xl'>
                            +216 54 547 930
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-span-1  ">
                <div className='pt-10 '>
                    <form className="px-6 py-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">
                                Email
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">
                                Message
                            </label>
                            <textarea
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                rows="5"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div></>
     
    )
}