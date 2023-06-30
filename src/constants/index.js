import {
  SiFlutter,
  SiExpress,
  SiMongodb,
  SiAngular,
  SiSpring,
  SiGraphql,
  SiFlask,
  SiOracle,
  SiAdobexd,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript
} from "react-icons/si";
import { FaSymfony, FaJava, FaReact, FaYarn, FaNpm } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import placeholder from "../../public/design.png";
import farmsanctuary from "../../public/farm-sanctuary.png";
import farmsanctuarydelivery from "../../public/farm-sanctuary-delivery.png";
import sahti from "../../public/SAHTI_without_bg.png";
import twitter from "../../public/twitter.png";

export const slides = [
  {
    icon: (
      <SiFlutter className="text-3xl sm:text-4xl md:text-7xl hover:text-cyan-500" />
    ),
    text: "Flutter",
  },
  {
    icon: (
      <SiExpress className="text-3xl sm:text-4xl md:text-7xl hover:text-black" />
    ),
    text: "Express",
  },
  {
    icon: (
      <SiMongodb className="text-3xl sm:text-4xl md:text-7xl hover:text-green-400" />
    ),
    text: "MongoDB",
  },
  {
    icon: (
      <SiAngular className="text-3xl sm:text-4xl md:text-7xl hover:text-red-500 " />
    ),
    text: "Angular",
  },
  {
    icon: (
      <SiSpring className="text-3xl sm:text-4xl md:text-7xl hover:text-green-600" />
    ),
    text: "Spring",
  },
  {
    icon: (
      <SiGraphql className="text-3xl sm:text-4xl md:text-7xl hover:text-pink-400" />
    ),
    text: "Graphql",
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
      <SiTailwindcss className="text-3xl sm:text-4xl md:text-7xl  hover:text-cyan-400" />
    ),
    text: "Tailwind",
  },
  {
    icon: (
      <FaReact className="text-3xl sm:text-4xl md:text-7xl  hover:text-cyan-500" />
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
  {
    icon: (
      <SiOracle className="text-3xl sm:text-4xl md:text-7xl  hover:text-red-700" />
    ),
    text: "Oracle",
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

];

export const currentlyLearning = [
  { text: "Nextjs" },
  { text: "Nestjs" },
  { text: "flask" },
  { text: "django" },
  { text: "AdobeXD" },
  { text: "supabase" },
];

export const projects = [
  {
    githublink: "https://github.com/rayen-creator/farm_sanctuary",
    demolink:"",
    image: farmsanctuary,
    title: "Farm sanctuary",
    description:
      "sustainable farming web application that aims to provide farmers with a platform to adopt sustainable farming practices.",
    stack: [
      <SiAngular key="angular-icon" className="hover:text-red-500" />,
      <SiGraphql key="graphql-icon" className="hover:text-pink-400" />,
      <SiExpress key="express-icon" className="hover:text-black" />,
      <SiFlask key="flask-icon" className="hover:text-black" />,
      <SiMongodb key="mongodb-icon" className="hover:text-green-400" />,

    ],
  },
  {
    githublink: "https://github.com/rayen-creator/farm_sanctuary_delivery",
    demolink:"",
    image: farmsanctuarydelivery,
    title: "Delivery app",
    description:
      "FarmSanctuaryDelivery purpose-built application designed specifically for delivery agents operating within the farm sanctuary.",
    stack: [
      <SiFlutter className="hover:text-cyan-500" />,
      <SiGraphql key="graphql-icon" className="hover:text-pink-400" />,
      <SiExpress key="express-icon" className="hover:text-black" />,
      <SiFlask key="flask-icon" className="hover:text-black" />,
      <SiMongodb key="mongodb-icon" className="hover:text-green-400" />,
    ],
  },
  {
    githublink: "https://github.com/rayen-creator/SahtiAPPWeb",
    demolink:"",
    image: sahti,
    title: "Sahti",
    description:"Sahti is a cross platform fitness app that offer online coaching, shop and nutritionist services."
    ,stack: [
      <FaSymfony className="hover:text-black" />,
      <FaJava className="hover:text-blue-400" />,
      <GrMysql className="hover:text-blue-600" />,
    ],
  },
  {
    githublink: "https://github.com/rayen-creator/Kadem-web-app",
    demolink:"",
    image: placeholder,
    title: "Kadem",
    description:
      "Kadem is a  project built for student to help them explore professtionnel life finding new oppurtunty as intern or as employee as well.",
    stack: [
      <SiAngular className="hover:text-red-500" />,

      <SiExpress className="hover:text-black" />,

      <SiSpring className="hover:text-green-600" />,

      <GrMysql className="hover:text-green-400" />,
    ],
  },
  {
    githublink: "https://github.com/rayen-creator/Twitter_UI_clone",
    demolink:"https://649cf1812bcf4f21e9d49217--twitteruiappcloneeeeeee.netlify.app",
    image: twitter,
    title: "Twitter UI clone",
    description:
      "a simplified Twitter user interface clone using React with TypeScript, Vite for fast development, and Tailwind CSS for efficient styling",
    stack: [
      <FaReact className="hover:text-cyan-500" />,
      <SiTailwindcss className="hover:text-cyan-400" />,
      <SiTypescript className="hover:text-blue-600" />

    ],
  },

];
