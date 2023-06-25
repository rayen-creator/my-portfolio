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
  } from "react-icons/si";
  import { FaSymfony, FaJava, FaReact, FaYarn, FaNpm } from "react-icons/fa";
  import { GrMysql } from "react-icons/gr";
  
export const slides = [
    { icon: <SiFlutter className="text-3xl sm:text-4xl md:text-7xl hover:text-cyan-500" />, text: "Flutter" },
    { icon: <SiExpress className="text-3xl sm:text-4xl md:text-7xl hover:text-black" />, text: "Express" },
    { icon: <SiMongodb className="text-3xl sm:text-4xl md:text-7xl hover:text-green-400" />, text: "MongoDB" },
    { icon: <SiAngular className="text-3xl sm:text-4xl md:text-7xl hover:text-red-500 " />,text:"Angular"},
    { icon: <SiSpring className="text-3xl sm:text-4xl md:text-7xl hover:text-green-600" />,text:"Spring"},
    { icon:  <SiGraphql className="text-3xl sm:text-4xl md:text-7xl hover:text-pink-400" />,text:"Graphql"},
    { icon:  <SiFlask className="text-3xl sm:text-4xl md:text-7xl hover:text-black" />,text:"Flask"},
    { icon: <FaJava className="text-3xl sm:text-4xl md:text-7xl  hover:text-blue-400" />,text:"Java"},
    { icon: <FaSymfony className="text-3xl sm:text-4xl md:text-7xl  hover:text-black" />,text:"Symfony"},
    { icon:   <GrMysql className="text-3xl sm:text-4xl md:text-7xl  hover:text-blue-600" />,text:"Mysql"},
    { icon:  <SiTailwindcss className="text-3xl sm:text-4xl md:text-7xl  hover:text-cyan-400" />,text:"Tailwind"},
    { icon:  <FaReact className="text-3xl sm:text-4xl md:text-7xl  hover:text-cyan-500" />,text:"React"},
    { icon:  <FaYarn className="text-3xl sm:text-4xl md:text-7xl  hover:text-cyan-400" />,text:"Yarn"},
    { icon: <FaNpm className="text-3xl sm:text-4xl md:text-7xl  hover:text-red-400" />,text:"Npm"},
    { icon:  <SiAdobexd className="text-3xl sm:text-4xl md:text-7xl  hover:text-purple-500" />,text:"AdobeXD"},
    { icon: <SiBootstrap className="text-3xl sm:text-4xl md:text-7xl  hover:text-purple-800" />,text:"Bootstrap"},
    { icon: <SiOracle className="text-3xl sm:text-4xl md:text-7xl  hover:text-red-700" />,text:"Oracle"}
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
  ]

export const currentlyLearning = [
    { text: "Nextjs" },
    { text: "Tailwindcss" },
    { text: "flask" },
    { text: "django" },
    { text: "figma" },
    { text: "supabase" }
  ]