import { FaSymfony, FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  SiFlutter,
  SiExpress,
  SiMongodb,
  SiAngular,
  SiSpring,
  SiGraphql,
  SiFlask,
} from "react-icons/si";
import {
    AiFillGithub,
  } from "react-icons/ai";
import Image from "next/image";
import consulting from "../../../public/consulting.png";
import farmsanctuary from "../../../public/farm-sanctuary.png";
import farmsanctuarydelivery from "../../../public/farm-sanctuary-delivery.png";
import sahti from "../../../public/SAHTI_without_bg.png";
export default function Projects() {
  return (
    <>
      <div>
        <h3 className="text-3xl font-bold py-1 dark:text-white">My projects</h3>
        <p className="text-md py-2 leading-8 text-gray-600 dark:text-gray-400">
          Over the years, as an IT engineer and full-stack developer, I have had
          the opportunity to work on several projects that have enriched my
          experience and knowledge, especially in utilizing the latest and
          widely adopted technologies.
          <br /> Allow me to share some of the notable projects I have worked
          on:
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-slate-800 duration-300 dark:bg-white">
          <div className="flex justify-center">
            <Image
              src={farmsanctuary}
              width={150}
              height={150}
              alt="farm_sanctuary"
            />
          </div>{" "}
          <h3 className="text-lg font-medium pt-8 pb-2">Farm sanctuary</h3>
          <p className="py-2 text-justify">
            FarmSanctaury is a sustainable farming web application that aims to
            provide farmers with a platform to adopt sustainable farming
            practices and increase the overall sustainability of agriculture.
            The goal of the web application is to promote sustainable
            agriculture, reduce waste and environmental impact, and provide
            farmers with the tools and resources they need to succeed in their
            farming operations.{" "}
          </p>
          <h4 className="py-4 text-teal-600">Stack</h4>
          <div className="flex justify-center items-end gap-4 text-4xl">
            <p className="text-gray-600 py-1">
              <SiAngular className="hover:text-red-500 " />
            </p>
            <p className="text-gray-600 py-1">
              <SiGraphql className="hover:text-pink-400" />
            </p>
            <p className="text-gray-600 py-1">
              <SiExpress className="hover:text-black" />
            </p>
            <p className="text-gray-600 py-1">
              <SiFlask className="hover:text-black" />
            </p>
            <p className="text-gray-600 py-1">
              <SiMongodb className="hover:text-green-400" />
            </p>
          </div>
          <h4 className="py-4 text-teal-600">Github repository </h4>
          <div className="flex justify-center ">
            <a
              className="text-gray-600 py-1 cursor-pointer hover:text-black"
              href="https://github.com/rayen-creator/farm_sanctuary"
              target="_blank"
            >
              <div className="flex items-center border-2 rounded-md shadow-md p-1 ">
                <AiFillGithub className="text-4xl hover:text-black" />
              </div>{" "}
            </a>
          </div>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-slate-800 duration-300 dark:bg-white">
          <div className="flex justify-center">
            <Image
              src={farmsanctuarydelivery}
              width={150}
              height={150}
              alt="farm_sanctuary_delivery"
            />
          </div>{" "}
          <h3 className="text-lg font-medium pt-8 pb-2">
            Farm sanctuary delivery
          </h3>
          <p className="py-2 text-justify">
            FarmSanctuary Delivery is a purpose-built application designed
            specifically for delivery agents operating within the farm
            sanctuary. This innovative solution streamlines and enhances the
            delivery process, ensuring seamless coordination and efficiency.
            With FarmSanctuary Delivery, delivery agents can effortlessly manage
            their tasks, track deliveries in real-time, and provide exceptional
            service to support the farm sanctuary's mission.{" "}
          </p>
          <h4 className="py-4 text-teal-600">Stack</h4>
          <div className="flex justify-center items-end gap-4 text-4xl ">
            <p className="text-gray-600 py-1">
              <SiFlutter className="hover:text-cyan-500" />
            </p>
            <p className="text-gray-600 py-1">
              <SiGraphql className="hover:text-pink-400" />
            </p>
            <p className="text-gray-600 py-1">
              <SiExpress className="hover:text-black" />
            </p>
            <p className="text-gray-600 py-1">
              <SiMongodb className="hover:text-green-400" />
            </p>
          </div>
          <h4 className="py-4 text-teal-600">Github repository </h4>
          <div className="flex justify-center ">
            <a
              className="text-gray-600 py-1 cursor-pointer hover:text-black"
              href="https://github.com/rayen-creator/farm_sanctuary_delivery"
              target="_blank"
            >
              <div className="flex items-center border-2 rounded-md shadow-md p-1 ">
                <AiFillGithub className="text-4xl hover:text-black" />
              </div>{" "}
            </a>
          </div>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-slate-800 duration-300 dark:bg-white">
          <div className="flex justify-center">
            <Image src={sahti} width={150} height={150} alt="sahti" />
          </div>{" "}
          <h3 className="text-lg font-medium pt-8 pb-2">Sahti </h3>
          <p className="text-justify py-2">
            Sahti is a cross platform app designed to help people attend
            coaching course online and get in touch with nutritionist in order
            to help them get the right diet , the app also offer a online shop
            for athletes to get their equipements and supplies .
          </p>
          <h4 className="py-4 text-teal-600">Stack</h4>
          <div className="flex justify-center items-end gap-4 text-4xl ">
            <p className="text-gray-600 py-1">
              {" "}
              <FaSymfony className="hover:text-black" />{" "}
            </p>
            <p className="text-gray-600 py-1">
              <FaJava className="hover:text-blue-400" />{" "}
            </p>
            <p className="text-gray-600 py-1">
              <GrMysql className="hover:text-blue-600" />{" "}
            </p>
          </div>
          <h4 className="py-4 text-teal-600">Github repository </h4>
          <div className="flex justify-center items-end gap-1 ">
            <a
              className="text-gray-600 py-1 cursor-pointer hover:text-black"
              href="https://github.com/rayen-creator/SahtiAPPWeb"
              target="_blank"
            >
              <div className="flex items-center border-2 rounded-md shadow-md p-1 ">
                <span className="text-sm">Web</span>
                <AiFillGithub className="text-4xl " />
              </div>{" "}
            </a>
            <a
              className="text-gray-600 py-1 cursor-pointer hover:text-black"
              href="https://github.com/rayen-creator/SahtiAppDektop"
              target="_blank"
            >
              <div className="flex items-center border-2 rounded-md shadow-md p-1 ">
                <span className="text-sm">Desktop</span>
                <AiFillGithub className="text-4xl hover:text-black" />
              </div>{" "}
            </a>
            <a
              className="text-gray-600 py-1 cursor-pointer hover:text-black"
              href="https://github.com/rayen-creator/SahtiAPPMobile"
              target="_blank"
            >
              <div className="flex items-center border-2 rounded-md shadow-md p-1 ">
                <span className="text-sm">Mobile</span>
                <AiFillGithub className="text-4xl hover:text-black" />
              </div>{" "}
            </a>
          </div>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-slate-800 duration-300 dark:bg-white">
          <div className="flex justify-center">
            <Image src={consulting} width={100} height={100} alt="kademapp" />
          </div>{" "}
          <h3 className="text-lg font-medium pt-8 pb-2">Kadem web app</h3>
          <p className="py-2 text-justify">
            Kadem is an academic project build for student to help them explore
            professtionnel life finding new oppurtunty as intern or as employee
            as well the project isn't finish yet and it can evolve even more ,
            we build it using nodejs express for authentification with jwt ,
            springboot as backend and angular as frontend-framework using mysql
            as database{" "}
          </p>
          <h4 className="py-4 text-teal-600">Stack</h4>
          <div className="flex justify-center items-end gap-4 text-4xl ">
            <p className="text-gray-600 py-1">
              <SiAngular className="hover:text-red-500" />
            </p>
            <p className="text-gray-600 py-1">
              <SiExpress className="hover:text-black" />
            </p>
            <p className="text-gray-600 py-1">
              <SiSpring className="hover:text-green-600" />
            </p>
            <p className="text-gray-600 py-1">
              <GrMysql className="hover:text-green-400" />
            </p>
          </div>
          <h4 className="py-4 text-teal-600">Github repository </h4>
          <div className="flex justify-center ">
            <a
              className="text-gray-600 py-1 cursor-pointer hover:text-black"
              href="https://github.com/rayen-creator/farm_sanctuary"
              target="_blank"
            >
              <div className="flex items-center border-2 rounded-md shadow-md p-1 ">
                <AiFillGithub className="text-4xl hover:text-black" />
              </div>{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}