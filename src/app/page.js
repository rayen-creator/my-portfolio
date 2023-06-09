'use client';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { MdEmail, MdGpsFixed, MdPhone } from 'react-icons/md';
import { FaSymfony, FaJava } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { SiFlutter,SiExpress,SiMongodb ,SiAngular,SiSpring,SiGraphql,SiFlask} from 'react-icons/si';
import Image from 'next/image';
import deved from "../../public/dev-ed-wave.png";
import consulting from "../../public/consulting.png";
import farmsanctuary from "../../public/farm-sanctuary.png";
import farmsanctuarydelivery from "../../public/farm-sanctuary-delivery.png";
import sahti from "../../public/SAHTI_without_bg.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

import { useState } from 'react';

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className=" min-h-screen">
          <nav className='py-10 mb-12 flex justify-between '>
            <h1 className='text-xl font-burtons dark:text-white'>Develped by Rayen</h1>
            <ul className='flex items-center'>
              {!darkMode ? (
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(true)} className='cursor-pointer text-2xl' /></li>
              ) : (
                <li><BsFillSunFill onClick={() => setDarkMode(false)} className='cursor-pointer text-2xl text-white' /></li>
              )}

              <li><a className=' bg-gradient-to-t from-cyan-500 to-teal-500  text-white px-4 py-2 border-none rounded-md ml-8 ' href="/CV.pdf" download="CV">Resume</a> </li>
            </ul>

          </nav>
          <div className='grid grid-cols-1 md:grid-cols-2' >
            <div className='col-span-1'>
              <div className='text-center p-10'>
                <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Rayen Oueslati</h2>
                <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>FULL STACK DEVELOPER</h3>

              </div>
              <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                <a href="https://github.com/rayen-creator"><AiFillGithub className='cursor-pointer hover:text-black' />
                </a>
                <a href="https://www.linkedin.com/in/rayen-oueslati-72a55b1b0/"><AiFillLinkedin className='cursor-pointer hover:text-blue-600' />
                </a>
                <a href="https://twitter.com/rayenoueslati8"><AiFillTwitterSquare className='cursor-pointer hover:text-cyan-500' />
                </a>

              </div>
            </div>
            <div className='col-span-1'>
              <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-50 md:w-50'>
                <Image src={deved} layout='fill' objectFit='cover' />
              </div>
            </div>

          </div>


        </section>
        <section className='pb-4'>
          {/* <h3 className='text-3xl text-center font-bold py-1' >About me</h3> */}

          <div className='grid grid-cols-1 md:grid-cols-2 divide-xs'>
            <div className='col-span-1'>
              <h4 className='text-3xl text-center font-bold py-1 dark:text-white'>Who AM I ? </h4>
              <p className='text-md py-14 px-7  text-justify leading-8 text-gray-600 md:text-xl max-w-xl mx-auto dark:text-gray-400'>
                IT engineering student, I am passionate about expanding my knowledge and skills in the field. I am constantly seeking new opportunities to learn and grow, and I am excited to connect with professionals who share my enthusiasm for technology. Whether it's through internships, projects, or mentorship, I am eager to evolve and make a meaningful contribution to the industry.
              </p>
            </div>
            <div className='col-span-1'>
              <h4 className='text-3xl text-center font-bold py-1 dark:text-white'>Education </h4>

              <ol className="relative py-14 border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" ></path></svg>
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Esprit engineering <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span></h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Started on Septembuer 15th, 2021 - Present</time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">IT Engineering degree and full stack js develper</p>
                  {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a> */}
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    CrocoCoder</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Graduated on Mars 10th, 2020</time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">Certificate of Completion : MEAN STACK .</p>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Higher Institute of Technological Studies of charguia (ISET Charguia)</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Graduated on September 10th, 2020</time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">Bachelor degree in Network and System Administration/Administrator </p>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className='pt-5'>
          <div>
            <h3 className='text-3xl font-bold py-1 dark:text-white'>My projects</h3>
            <p className='text-md py-2 leading-8 text-gray-600 dark:text-gray-400'>
              Over the years, as an IT engineer and full-stack developer,
              I have had the opportunity to work on several projects that have enriched my experience and
              knowledge, especially in utilizing the latest and widely adopted technologies.
              <br /> Allow me to share some of the notable projects I have worked on:
            </p>
          </div>
          <div className=' lg:grid grid-cols-3 gap-10 '>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <div className="flex justify-center">
                <Image src={farmsanctuary} width={150} height={150} />
              </div>            <h3 className='text-lg font-medium pt-8 pb-2'>Farm sanctuary</h3>
              <p className='py-2 text-justify'>
              FarmSanctaury is a sustainable farming web application that aims to provide farmers with a platform to adopt sustainable farming practices and increase the overall sustainability of agriculture.
              The goal of the web application is to promote sustainable agriculture, reduce waste and environmental impact, and provide farmers with the tools and resources they need to succeed in their farming operations.              </p>
              <h4 className='py-4 text-teal-600'>Stack</h4>
              <div className='flex justify-center items-end gap-4 text-4xl '>
                <p className='text-gray-600 py-1'><SiAngular className='hover:text-red-500' /></p>
                <p className='text-gray-600 py-1'><SiGraphql className='hover:text-pink-400' /></p>
                <p className='text-gray-600 py-1'><SiExpress className='hover:text-black' /></p>
                <p className='text-gray-600 py-1'><SiFlask className='hover:text-black' /></p>
                <p className='text-gray-600 py-1'><SiMongodb className='hover:text-green-400'/></p>
              </div>
              <h4 className='py-4 text-teal-600'>Github repository </h4>

              <div className='flex justify-center '>
                <a className='text-gray-600 py-1 cursor-pointer hover:text-black' href="https://github.com/rayen-creator/farm_sanctuary"  target="_blank"><div className='flex items-center border-2 rounded-md shadow-md p-1 '><AiFillGithub className='text-4xl hover:text-black' /></div> </a>
              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <div className="flex justify-center">
                <Image src={farmsanctuarydelivery} width={150} height={150} />
              </div>            <h3 className='text-lg font-medium pt-8 pb-2'>Farm sanctuary delivery</h3>
              <p className='py-2 text-justify'>
              FarmSanctuary Delivery is a purpose-built application designed specifically for delivery agents operating within the farm sanctuary. 
              This innovative solution streamlines and enhances the delivery process, ensuring seamless coordination and efficiency.
               With FarmSanctuary Delivery, delivery agents can effortlessly manage their tasks, track deliveries in real-time, 
               and provide exceptional service to support the farm sanctuary's mission.              </p>
              <h4 className='py-4 text-teal-600'>Stack</h4>
              <div className='flex justify-center items-end gap-4 text-4xl '>
              <p className='text-gray-600 py-1'><SiFlutter className='hover:text-cyan-500' /></p>
              <p className='text-gray-600 py-1'><SiGraphql className='hover:text-pink-400' /></p>
                <p className='text-gray-600 py-1'><SiExpress className='hover:text-black' /></p>
                <p className='text-gray-600 py-1'><SiMongodb className='hover:text-green-400'/></p>
              </div>
              <h4 className='py-4 text-teal-600'>Github repository </h4>

              <div className='flex justify-center '>
                <a className='text-gray-600 py-1 cursor-pointer hover:text-black' href="https://github.com/rayen-creator/farm_sanctuary_delivery" target="_blank"><div className='flex items-center border-2 rounded-md shadow-md p-1 '><AiFillGithub className='text-4xl hover:text-black' /></div> </a>
              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <div className="flex justify-center">
                <Image src={sahti} width={150} height={150} />
              </div>            <h3 className='text-lg font-medium pt-8 pb-2'>Sahti </h3>
              <p className='text-justify py-2'>
                Sahti is a cross platform app designed to help people attend coaching course online and get in touch with nutritionist in order to help them get the right diet , the app also offer a online shop for athletes to get their equipements and supplies .
              </p>
              <h4 className='py-4 text-teal-600'>Stack</h4>
              <div className='flex justify-center items-end gap-4 text-4xl '>
                <p className='text-gray-600 py-1'> <FaSymfony className='hover:text-black' /> </p>
                <p className='text-gray-600 py-1'><FaJava className='hover:text-blue-400' /> </p>
                <p className='text-gray-600 py-1'><GrMysql className='hover:text-blue-600' /> </p>
              </div>
              <h4 className='py-4 text-teal-600'>Github repository </h4>

              <div className='flex justify-center items-end gap-1 '>
                <a className='text-gray-600 py-1 cursor-pointer hover:text-black' href="https://github.com/rayen-creator/SahtiAPPWeb" target="_blank"><div className='flex items-center border-2 rounded-md shadow-md p-1 '><span className='text-sm'>Web</span><AiFillGithub className='text-4xl ' /></div> </a>
                <a className='text-gray-600 py-1 cursor-pointer hover:text-black' href="https://github.com/rayen-creator/SahtiAppDektop" target="_blank"><div className='flex items-center border-2 rounded-md shadow-md p-1 '><span className='text-sm'>Desktop</span><AiFillGithub className='text-4xl hover:text-black' /></div> </a>
                <a className='text-gray-600 py-1 cursor-pointer hover:text-black' href="https://github.com/rayen-creator/SahtiAPPMobile" target="_blank"><div className='flex items-center border-2 rounded-md shadow-md p-1 '><span className='text-sm'>Mobile</span><AiFillGithub className='text-4xl hover:text-black' /></div> </a>
              </div>

            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <div className="flex justify-center">
                <Image src={consulting} width={100} height={100} />
              </div>            <h3 className='text-lg font-medium pt-8 pb-2'>Kadem web app</h3>
              <p className='py-2 text-justify'>
              Kadem is an academic project build for student to help them explore professtionnel life finding new oppurtunty as intern or as employee as well the project isn't finish yet and it can evolve even more , we build it using nodejs express for authentification with jwt , springboot as backend and angular as frontend-framework using mysql as database              </p>
              <h4 className='py-4 text-teal-600'>Stack</h4>
              <div className='flex justify-center items-end gap-4 text-4xl '>
                <p className='text-gray-600 py-1'><SiAngular className='hover:text-red-500' /></p>
                <p className='text-gray-600 py-1'><SiExpress className='hover:text-black' /></p>
                <p className='text-gray-600 py-1'><SiSpring className='hover:text-green-600' /></p>
                <p className='text-gray-600 py-1'><GrMysql className='hover:text-green-400'/></p>
              </div>
              <h4 className='py-4 text-teal-600'>Github repository </h4>

              <div className='flex justify-center '>
                <a className='text-gray-600 py-1 cursor-pointer hover:text-black' href="https://github.com/rayen-creator/farm_sanctuary"  target="_blank"><div className='flex items-center border-2 rounded-md shadow-md p-1 '><AiFillGithub className='text-4xl hover:text-black' /></div> </a>
              </div>
            </div>
          
          </div>
        </section>
        {/* <section>
          <div>
            <h3 className='text-3xl font-bold py-1'>Portofolio</h3>
            <p className='text-md py-2 leading-8 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ratione mollitia sint, reiciendis, fuga eum, ipsa quos adipisci laboriosam incidunt iste hic sapiente culpa assumenda doloremque dolorum corporis numquam dignissimos.</p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3} className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4} className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5} className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web6} className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
            </div>
          </div>
        </section> */}

        <section className=''>
          <h3 className='text-3xl font-bold py-1 dark:text-white'>Let's get in touch </h3>
          <div className="grid grid-cols-2 gap-4">
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
                  <p className='p-2  text-sm md:text-2xl'>
                    oueslati.rayen@esprit.tn
                  </p>
                </div>
                <div className='flex justify-items-center  py-4 '>
                  <MdPhone className='text-sm lg:text-2xl' />
                  <p className='p-2  text-sm md:text-2xl'>
                    +216 54 547 930
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1  ">
              <div className='pt-10 '>
                <form className="px-6 py-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white" >
                      Email
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white" >
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
          </div>
        </section>
      </div>
      <footer className=' bg-teal-600  dark:bg-gray-900'>
        <div className='text-center p-10  dark: text-gray-100'>
          Built with ❤ by Rayen
        </div>
      </footer>
    </main>
  );
}
