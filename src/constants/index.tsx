import {
  SiFlutter,
  SiExpress,
  SiMongodb,
  SiAngular,
  SiSpring,
  SiGraphql,
  SiFlask,
  SiFigma,
  SiTailwindcss,
  SiBootstrap,
  SiVagrant,
  SiNestjs,
  SiDocker,
  SiPostgresql,
  SiNx,
  SiNginx,
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
import type { StaticImageData } from "next/image";
import placeholder from "../../public/design.png";
import farmsanctuary from "../../public/farm-sanctuary.png";
import farmsanctuarydelivery from "../../public/farm-sanctuary-delivery.png";
import sahti from "../../public/SAHTI_without_bg.png";

type Slide = {
  icon: React.ReactNode;
  text: string;
};

type StackItem = {
  text: string;
};

type Project = {
  githublink: string;
  demolink: string;
  image: StaticImageData;
  title: string;
  description: string;
  stack: React.ReactNode[];
};

type ExperienceProject = {
  name: string;
  bullets: string[];
};

type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets?: string[];
  projects?: ExperienceProject[];
  keywords: string[];
};

export const slides: Slide[] = [
  {
    icon: (
      <SiAngular className="text-8xl sm:text-4xl md:text-7xl hover:text-red-500" />
    ),
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
      <SiFigma className="text-3xl sm:text-4xl md:text-7xl  hover:text-purple-500" />
    ),
    text: "Figma",
  },
  {
    icon: (
      <SiBootstrap className="text-3xl sm:text-4xl md:text-7xl  hover:text-purple-800" />
    ),
    text: "Bootstrap",
  },
];

export const currentStack: StackItem[] = [
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

export const currentlyLearning: StackItem[] = [
  { text: "AI Agents" },
  { text: "Cloud" },
];

export const experiences: Experience[] = [
  {
    role: "Full Stack Engineer",
    company: "Save Your Wardrobe",
    location: "Tunis, Tunisia",
    period: "Jun 2026 – Present",
    current: true,
    bullets: [
      "Developed frontend features for the Brand Retail application, contributing to the enhancement of digital retail and after-sales workflows.",
      "Contributed to the development and integration of logistics microservices, implementing and consuming APIs to support end-to-end retail operations.",
      "Collaborated with cross-functional teams to deliver scalable features across frontend applications and backend services within a microservices-based architecture.",
    ],
    keywords: [
      "React",
      "NestJS",
      "ExpressJS",
      "MongoDB",
      "Nx",
      "Microservices",
      "Redis",
      "GIT",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Karriery",
    location: "Tunis, Tunisia",
    period: "Nov 2023 – May 2026",
    projects: [
      {
        name: "nBold — Microsoft Teams App Extensions (Collaboration Enablement Platform)",
        bullets: [
          "Designed and implemented core backend modules for the nBold Microsoft Teams extension used by 50+ organizations.",
          "Ensured scalability, maintainability, and reliability through modular architecture, clean code, and continuous refactoring.",
          "Built and optimized features leveraging SharePoint API and Microsoft Graph API for seamless automation and governance.",
          "Designed and developed an AI-powered conversational agent enabling users to create and configure nBold Microsoft Teams Templates via chat interactions.",
        ],
      },
      {
        name: "TeamsPlus — Microsoft Teams App Extensions (Incident & Ops Management)",
        bullets: [
          "Co-developed a real-time Incident Management App used by railway operators for live train incident tracking via smart forms, boosting reporting accuracy and response times.",
          "Built an Operations Dashboard consolidating train schedules, incident logs, and user activity to provide actionable analytics to operational supervisors.",
        ],
      },
      {
        name: "Nemo — ERP Platform (Legacy System Modernization)",
        bullets: [
          "Contributed to the migration of monolithic legacy ERP components to modern stacks (Angular, NestJS), improving maintainability and long-term scalability.",
          "Refactored critical modules to enhance performance and ensure modularity, enabling faster onboarding of new business features.",
          "Facilitated seamless integration of modern components without service disruption, ensuring stable operation across departments.",
        ],
      },
    ],
    keywords: [
      "Angular",
      "React",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Tailwind CSS",
      "MS Graph API",
      "SharePoint API",
      "Nx",
      "Microservices",
      "Nginx",
      "RabbitMQ",
      "Redis",
      "Event-driven Architecture",
      "WebSocket",
      "GIT",
    ],
  },
  {
    role: "Software Developer",
    company: "TSI (Tunisie Systèmes d'informations)",
    location: "Tunis, Tunisia",
    period: "Oct 2020 – Jan 2021",
    bullets: [
      "Contributed to the maintenance and evolution of TSI's ERP solution by fixing software issues, enhancing existing features, and designing Crystal Reports for invoices and business documentation.",
    ],
    keywords: [
      "C#",
      "WinForms",
      "Microsoft SQL Server",
      "Crystal Reports",
      "DevExpress",
    ],
  },
];

export const projects: Project[] = [
  {
    githublink: "",
    demolink: "",
    image: placeholder,
    title: "nBold ",
    description:
      "nBold is a SaaS extension in the Microsoft 365 ecosystem that automates Microsoft Teams workspace creation, governance, and integration with business apps—helping teams collaborate faster and more consistently.",
    stack: [
      <FaReact className=" hover:text-blue-400" />,
      <SiNestjs
        key="Nestjs-icon"
        className="hover:text-red-500"
        title="nestjs"
      />,
      <SiMongodb
        key="mongodb-icon"
        className="hover:text-green-400"
        title="Mongodb"
      />,
      <SiPostgresql className=" hover:text-blue-800" />,
    ],
  },
  {
    githublink: "",
    demolink: "",
    image: placeholder,
    title: "Nemo ( ERP System )",
    description:
      "Nemo is a microfrontend-based ERP system built with Angular and NestJS, where each module operates as an independent application to efficiently streamline and optimize business processes across an organization",
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
      <SiPostgresql className=" hover:text-blue-800" />,
    ],
  },
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
