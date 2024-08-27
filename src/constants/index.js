import {
  SiFlutter,
  SiExpress,
  SiMongodb,
  SiAngular,
  SiSpring,
  SiGraphql,
  SiFlask,
  SiAdobexd,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiVagrant,
  SiNestjs,
  SiDocker,
  SiPostgresql ,
  SiNx ,
  SiNginx 
} from "react-icons/si";
import {
  FaSymfony,
  FaJava,
  FaReact,
  FaYarn,
  FaNpm,
  FaJenkins,
  FaDocker,
  FaLaravel,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FcLinux } from "react-icons/fc";
import placeholder from "../../public/design.png";
import farmsanctuary from "../../public/farm-sanctuary.png";
import farmsanctuarydelivery from "../../public/farm-sanctuary-delivery.png";
import sahti from "../../public/SAHTI_without_bg.png";
import twitter from "../../public/twitter.png";
import Telegram from "../../public/Telegram.png";

export const slides = [
  {
    icon: (
      <SiAngular className="text-8xl sm:text-4xl md:text-7xl hover:text-red-500" />),
    text: "Angular",
  },
  {
    icon: (
      <SiNestjs className="text-3xl sm:text-4xl md:text-7xl hover:text-red-500" />
    ),
    text: "Nestjs",
  },
  {
    icon: (
      <SiExpress className="text-3xl sm:text-4xl md:text-7xl hover:text-black" />
    ),
    text: "Express",
  },
  {
    icon: (
      <SiTailwindcss className="text-3xl sm:text-4xl md:text-7xl hover:text-cyan-400" />
    ),
    text: "Tailwind",
  },
  {
    icon: (
      <SiDocker className="text-3xl sm:text-4xl md:text-7xl hover:text-blue-600" />
    ),
    text: "Docker",
  },
  {
    icon: (
      <SiGraphql className="text-3xl sm:text-4xl md:text-7xl hover:text-pink-400" />
    ),
    text: "Graphql",
  },
  {
    icon: (
      <SiMongodb className="text-3xl sm:text-4xl md:text-7xl hover:text-green-400" />
    ),
    text: "MongoDB",
  },
  {
    icon: (
      <SiPostgresql className="text-3xl sm:text-4xl md:text-7xl hover:text-blue-800" />
    ),
    text: "Postgresql",
  },
  {
    icon: (
      <SiNx className="text-3xl sm:text-4xl md:text-7xl hover:text-blue-900" />
    ),
    text: "NX monorepo",
  },
  {
    icon: (
      <SiNginx className="text-3xl sm:text-4xl md:text-7xl hover:text-green-600" />
    ),
    text: "Nginx",
  },
  {
    icon: (
      <SiSpring className="text-3xl sm:text-4xl md:text-7xl hover:text-green-600" />
    ),
    text: "Spring",
  },
  {
    icon: (
      <SiFlask className="text-3xl sm:text-4xl md:text-7xl hover:text-black" />
    ),
    text: "Flask",
  },
  {
    icon: (
      <FaJava className="text-3xl sm:text-4xl md:text-7xl  hover:text-blue-400" />
    ),
    text: "Java",
  },
  {
    icon: (
      <FaSymfony className="text-3xl sm:text-4xl md:text-7xl  hover:text-black" />
    ),
    text: "Symfony",
  },
  {
    icon: (
      <GrMysql className="text-3xl sm:text-4xl md:text-7xl  hover:text-blue-600" />
    ),
    text: "Mysql",
  },

  {
    icon: (
      <FaReact className="text-3xl sm:text-4xl md:text-7xl  hover:text-blue-400" />
    ),
    text: "React",
  },
  {
    icon: (
      <FaYarn className="text-3xl sm:text-4xl md:text-7xl  hover:text-cyan-400" />
    ),
    text: "Yarn",
  },
  {
    icon: (
      <FaNpm className="text-3xl sm:text-4xl md:text-7xl  hover:text-red-400" />
    ),
    text: "Npm",
  },
  {
    icon: (
      <SiAdobexd className="text-3xl sm:text-4xl md:text-7xl  hover:text-purple-500" />
    ),
    text: "AdobeXD",
  },
  {
    icon: (
      <SiBootstrap className="text-3xl sm:text-4xl md:text-7xl  hover:text-purple-800" />
    ),
    text: "Bootstrap",
  },
];

export const currentStack = [
  { text: "Express" },
  { text: "Angular" },
  { text: "Reactjs" },
  { text: "MongoDB" },
  { text: "html" },
  { text: "css" },
  { text: "mysql" },
  { text: "Graphql" },
  { text: "RestAPI" },
  { text: "Tailwindcss" },
  { text: "TypeScript" },
  { text: "Nestjs" },
];

export const currentlyLearning = [
  { text: "Nextjs" },
  { text: "AdobeXD" },
  { text: "E2E testing" },
  { text: "Devops" },
];

export const projects = [
  {
    githublink: "https://github.com/rayen-creator/kaddem-devops",
    demolink: "",
    image: placeholder,
    title: "Devops project",
    description:
      "Project that implement DevOps principles in a Spring Boot project to improve development, testing, and deployment including CI/CD pipline",
    stack: [
      <FaJenkins
        key="jenkins-icon"
        className="hover:text-gray-600"
        title="jenkins"
      />,
      <SiVagrant
        key="Vagrant-icon"
        className="hover:text-blue-600"
        title="Vagrant"
      />,
      <FaDocker
        key="Docker-icon"
        className="hover:text-blue-400"
        title="Docker"
      />,
      <SiSpring className="hover:text-green-600" title="Spring Boot" />,
      <FcLinux
        key="FcLinux-icon"
        className="hover:text-yellow-100"
        title="Linux"
      />,
    ],
  },
  {
    githublink: "https://github.com/rayen-creator/kaddem-devops",
    demolink: "",
    image: placeholder,
    title: "Hotel Management System",
    description:
      "A microservice web app for hotel management streamlines hotel operations, including reservations, check-in/out, staff scheduling, inventory management, and billing.",
    stack: [
      <SiAngular
        key="angular-icon"
        className="hover:text-red-500"
        title="Angular"
      />,
      <SiNestjs
        key="Nestjs-icon"
        className="hover:text-red-500"
        title="nestjs"
      />,
      <SiVagrant
        key="Vagrant-icon"
        className="hover:text-blue-600"
        title="Vagrant"
      />,
      <FaDocker
        key="Docker-icon"
        className="hover:text-blue-400"
        title="Docker"
      />,
      <SiSpring className="hover:text-green-600" title="Spring Boot" />,
      <SiMongodb
        key="mongodb-icon"
        className="hover:text-green-400"
        title="Mongodb"
      />,
      <GrMysql className="hover:text-blue-600" title="Mysql" />,
    ],
  },
  {
    githublink: "https://github.com/rayen-creator/kaddem-devops",
    demolink: "",
    image: placeholder,
    title: "Freelance app",
    description:
      "A freelance web app connects freelancers and clients, simplifying job posting, bidding, project management, and payments.",
    stack: [
      <FaLaravel className="hover:text-orange-400" title="Laravel" />,
      <GrMysql className="hover:text-blue-600" title="Mysql" />,
    ],
  },
  {
    githublink: "https://github.com/rayen-creator/Twitter_UI_clone",
    demolink:
      "https://649cf1812bcf4f21e9d49217--twitteruiappcloneeeeeee.netlify.app",
    image: twitter,
    title: "Twitter UI clone",
    description:
      "a simplified Twitter user interface clone using React with TypeScript, Vite for fast development, and Tailwind CSS for efficient styling",
    stack: [
      <FaReact className="hover:text-cyan-500" title="ReactJS" />,
      <SiTailwindcss className="hover:text-cyan-400" title="TailwindCSS" />,
      <SiTypescript className="hover:text-blue-600" title="TypeScript" />,
    ],
  },
  {
    githublink: "https://github.com/rayen-creator/telegram_UI_clone",
    demolink: "https://64a7f9aed3f55965eaa071cc--telegramuiclone.netlify.app/",
    image: Telegram,
    title: "Telegram UI clone",
    description:
      "a simplified Telegram user interface clone using React with TypeScript, Vite for fast development, and Tailwind CSS for efficient styling",
    stack: [
      <FaReact className="hover:text-cyan-500" title="ReactJS" />,
      <SiTailwindcss className="hover:text-cyan-400" title="TailwindCSS" />,
      <SiTypescript className="hover:text-blue-600" title="TypeScript" />,
    ],
  },
  {
    githublink: "https://github.com/rayen-creator/weather_app",
    demolink: "https://weatherweeeebappp.netlify.app/",
    image: placeholder,
    title: "Weather app",
    description: "Weather app built using react-ts tailwindcss vite",
    stack: [
      <FaReact className="hover:text-cyan-500" title="ReactJS" />,
      <SiTailwindcss className="hover:text-cyan-400" title="TailwindCSS" />,
      <SiTypescript className="hover:text-blue-600" title="TypeScript" />,
    ],
  },
  {
    githublink: "https://github.com/rayen-creator/farm_sanctuary",
    demolink: "",
    image: farmsanctuary,
    title: "Farm sanctuary",
    description:
      "sustainable farming web application that aims to provide farmers with a platform to adopt sustainable farming practices.",
    stack: [
      <SiAngular
        key="angular-icon"
        className="hover:text-red-500"
        title="Angular"
      />,
      <SiGraphql
        key="graphql-icon"
        className="hover:text-pink-400"
        title="Graphql"
      />,
      <SiExpress
        key="express-icon"
        className="hover:text-black"
        title="ExpressJS"
      />,
      <SiFlask key="flask-icon" className="hover:text-black" title="Flask" />,
      <SiMongodb
        key="mongodb-icon"
        className="hover:text-green-400"
        title="Mongodb"
      />,
    ],
  },
  {
    githublink: "https://github.com/rayen-creator/farm_sanctuary_delivery",
    demolink: "",
    image: farmsanctuarydelivery,
    title: "Delivery app",
    description:
      "FarmSanctuaryDelivery purpose-built application designed specifically for delivery agents operating within the farm sanctuary.",
    stack: [
      <SiFlutter className="hover:text-cyan-500" title="Flutter" />,
      <SiGraphql
        key="graphql-icon"
        className="hover:text-pink-400"
        title="Graphql"
      />,
      <SiExpress
        key="express-icon"
        className="hover:text-black"
        title="ExpressJS"
      />,
      <SiMongodb
        key="mongodb-icon"
        className="hover:text-green-400"
        title="Mongodb"
      />,
    ],
  },
  {
    githublink: "https://github.com/rayen-creator/Kadem-web-app",
    demolink: "",
    image: placeholder,
    title: "Kadem",
    description:
      "Kadem is a  project built for student to help them explore professtionnel life finding new oppurtunty as intern or as employee as well.",
    stack: [
      <SiAngular
        key="angular-icon"
        className="hover:text-red-500"
        title="Angular"
      />,

      <SiExpress key="express-icon" className="hover:text-black" />,

      <SiSpring className="hover:text-green-600" title="Spring Boot" />,

      <GrMysql className="hover:text-blue-600" title="Mysql" />,
    ],
  },
  {
    githublink: "https://github.com/rayen-creator/SahtiAPPWeb",
    demolink: "",
    image: sahti,
    title: "Sahti",
    description:
      "Sahti is a cross platform fitness app that offer online coaching, shop and nutritionist services.",
    stack: [
      <FaSymfony className="hover:text-black" title="Symfony" />,
      <FaJava className="hover:text-blue-400" title="JavaFX" />,
      <GrMysql className="hover:text-blue-600" title="Mysql" />,
    ],
  },

];
