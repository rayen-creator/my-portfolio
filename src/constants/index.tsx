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
  SiRabbitmq,
  SiRedis,
  SiTypescript,
  SiNodedotjs,
  SiAnthropic,
} from "react-icons/si";
import { BsRobot } from "react-icons/bs";
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
import type { StaticImageData } from "next/image";
import placeholder from "../../public/design.png";
import farmsanctuary from "../../public/farm-sanctuary.png";
import farmsanctuarydelivery from "../../public/farm-sanctuary-delivery.png";
import sahti from "../../public/SAHTI_without_bg.png";
import nboldLogo from "../../public/nbold-logo.svg";

type StackCategory = "backend" | "frontend" | "infra" | "tools" | "ai";

type Slide = {
  icon: React.ReactNode;
  text: string;
  category: StackCategory;
};

type StackItem = {
  text: string;
};

type Client = {
  name: string;
  country: string;
  flag: string;
};

type ProjectCategory = "professional" | "academic" | "side";

type Project = {
  githublink: string | null;
  demolink: string | null;
  image: StaticImageData;
  title: string;
  description: string;
  stack: React.ReactNode[];
  category: ProjectCategory;
  client?: Client;
};

type ExperienceProject = {
  name: string;
  period: string;
  bullets: string[];
  client?: Client;
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

type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
};

const slideIconClass = "text-xl";

export const slides: Slide[] = [
  {
    icon: <SiAngular className={slideIconClass} />,
    text: "Angular",
    category: "frontend",
  },
  {
    icon: <SiNestjs className={slideIconClass} />,
    text: "Nestjs",
    category: "backend",
  },
  {
    icon: <SiExpress className={slideIconClass} />,
    text: "Express",
    category: "backend",
  },
  {
    icon: <SiTailwindcss className={slideIconClass} />,
    text: "Tailwind",
    category: "frontend",
  },
  {
    icon: <SiDocker className={slideIconClass} />,
    text: "Docker",
    category: "infra",
  },
  {
    icon: <SiGraphql className={slideIconClass} />,
    text: "Graphql",
    category: "backend",
  },
  {
    icon: <SiMongodb className={slideIconClass} />,
    text: "MongoDB",
    category: "backend",
  },
  {
    icon: <SiPostgresql className={slideIconClass} />,
    text: "Postgresql",
    category: "backend",
  },
  {
    icon: <SiNx className={slideIconClass} />,
    text: "NX monorepo",
    category: "infra",
  },
  {
    icon: <SiNginx className={slideIconClass} />,
    text: "Nginx",
    category: "infra",
  },
  {
    icon: <SiSpring className={slideIconClass} />,
    text: "Spring",
    category: "backend",
  },
  {
    icon: <SiFlask className={slideIconClass} />,
    text: "Flask",
    category: "backend",
  },
  {
    icon: <FaJava className={slideIconClass} />,
    text: "Java",
    category: "backend",
  },
  {
    icon: <FaSymfony className={slideIconClass} />,
    text: "Symfony",
    category: "backend",
  },
  {
    icon: <GrMysql className={slideIconClass} />,
    text: "Mysql",
    category: "backend",
  },
  {
    icon: <FaReact className={slideIconClass} />,
    text: "React",
    category: "frontend",
  },
  {
    icon: <FaYarn className={slideIconClass} />,
    text: "Yarn",
    category: "infra",
  },
  {
    icon: <FaNpm className={slideIconClass} />,
    text: "Npm",
    category: "infra",
  },
  {
    icon: <SiFigma className={slideIconClass} />,
    text: "Figma",
    category: "tools",
  },
  {
    icon: <SiBootstrap className={slideIconClass} />,
    text: "Bootstrap",
    category: "frontend",
  },
  {
    icon: <BsRobot className={slideIconClass} />,
    text: "AI Agents",
    category: "ai",
  },
  {
    icon: <SiAnthropic className={slideIconClass} />,
    text: "Claude Code",
    category: "ai",
  },
];

export const currentStack: StackItem[] = [
  { text: "TypeScript" },
  { text: "Node.js" },
  { text: "NestJS" },
  { text: "Express" },
  { text: "React" },
  { text: "Next.js" },
  { text: "Tailwind CSS" },
  { text: "MongoDB" },
  { text: "PostgreSQL" },
  { text: "GraphQL" },
  { text: "Redis" },
  { text: "AI Agents" },
];

export const currentlyLearning: StackItem[] = [{ text: "Cloud" }];

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
        period: "Dec 2024 – May 2026",
        client: { name: "nBold", country: "France", flag: "🇫🇷" },
        bullets: [
          "Designed and implemented core backend modules for the nBold Microsoft Teams extension used by 50+ organizations.",
          "Built bulk-action modules enabling administrators to perform batch operations across Microsoft Teams groups, channels, and SharePoint sites, significantly reducing manual governance overhead.",
          "Developed a Microsoft Teams template gallery within nBold, streamlining template discovery and easing onboarding for new users.",
          "Built channel and SharePoint site provisioning, and introduced new template types for them—extending nBold's template engine beyond Team templates to more granular, organization-specific workspace structures.",
          "Reworked the nBold onboarding flow end-to-end, introducing mobile and email verification to strengthen security and deliver a smoother, more guided first-time user experience.",
          "Ensured scalability, maintainability, and reliability through modular architecture, clean code, and continuous refactoring.",
          "Built and optimized features leveraging SharePoint API and Microsoft Graph API for seamless automation and governance.",
          "Designed and built a two-agent AI pipeline for nBold: a Firecrawl-powered scraper agent that enriches organization data from the web, feeding a template-generation agent that uses this context to produce precise, tailored Microsoft Teams Templates via natural-language chat.",
        ],
      },
      {
        name: "TeamsPlus — Microsoft Teams App Extensions (Incident & Ops Management)",
        period: "Mar 2024 – Nov 2024",
        client: { name: "EuroStar", country: "Belgium", flag: "🇧🇪" },
        bullets: [
          "Co-developed a real-time Incident Management App used by railway operators for live train incident tracking via smart forms, boosting reporting accuracy and response times.",
          "Built an Operations Dashboard consolidating train schedules, incident logs, and user activity to provide actionable analytics to operational supervisors.",
        ],
      },
      {
        name: "Nemo — ERP Platform (Legacy System Modernization)",
        period: "Nov 2023 – Feb 2024",
        client: { name: "EncoreLab", country: "Spain", flag: "🇪🇸" },
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
      "Firecrawl",
      "AI Agents",
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

export const education: Education[] = [
  {
    degree: "Engineering Degree in Computer Engineering",
    school: "ESPRIT",
    location: "Tunis, Tunisia",
    period: "Sept 2021 – Jul 2024",
  },
  {
    degree: "Bachelor's Degree in Network and System Administration",
    school: "ISET Charguia",
    location: "Tunis, Tunisia",
    period: "Sept 2017 – Sept 2020",
  },
];

export const projects: Project[] = [
  {
    githublink: null,
    demolink: "https://nbold.com/",
    image: nboldLogo,
    title: "nBold ",
    category: "professional",
    client: { name: "nBold", country: "France", flag: "🇫🇷" },
    description:
      "nBold is a SaaS extension in the Microsoft 365 ecosystem that automates Microsoft Teams workspace creation and governance. Built a two-agent AI pipeline for it — a Firecrawl-powered scraper that enriches organization data, feeding a template agent that generates precise, tailored Teams templates via chat.",
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
      <SiRabbitmq className="hover:text-orange-400" title="RabbitMQ" />,
      <SiRedis className="hover:text-red-600" title="Redis" />,
    ],
  },
  {
    githublink: null,
    demolink: null,
    image: placeholder,
    title: "TeamsPlus",
    category: "professional",
    client: { name: "EuroStar", country: "Belgium", flag: "🇧🇪" },
    description:
      "TeamsPlus is a Microsoft Teams extension for incident & ops management—real-time incident tracking via smart forms for railway operators, plus an operations dashboard consolidating schedules, logs and activity for supervisors.",
    stack: [
      <FaReact
        key="react-icon"
        className="hover:text-blue-400"
        title="React"
      />,
      <SiNestjs
        key="Nestjs-icon"
        className="hover:text-red-500"
        title="nestjs"
      />,
      <SiPostgresql className=" hover:text-blue-800" />,
      <SiNx className="hover:text-blue-400" title="Nx" />,
      <SiRedis key="redis-icon" className="hover:text-red-600" title="Redis" />,
    ],
  },
  {
    githublink: "",
    demolink: "",
    image: placeholder,
    title: "Nemo ( ERP System )",
    category: "professional",
    client: { name: "EncoreLab", country: "Spain", flag: "🇪🇸" },
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
      <SiNx className="hover:text-blue-400" title="Nx" />,

      <SiPostgresql className=" hover:text-blue-800" />,
    ],
  },
  {
    githublink: "https://github.com/rayen-creator/kaddem-devops",
    demolink: "",
    image: placeholder,
    title: "Devops project",
    category: "academic",
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
    ],
  },
  {
    githublink: "https://github.com/rayen-creator/kaddem-devops",
    demolink: "",
    image: placeholder,
    title: "Hotel Management System",
    category: "academic",
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
    category: "academic",
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
    category: "academic",
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
    category: "academic",
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
    category: "academic",
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
    category: "academic",
    description:
      "Sahti is a cross platform fitness app that offer online coaching, shop and nutritionist services.",
    stack: [
      <FaSymfony className="hover:text-black" title="Symfony" />,
      <FaJava className="hover:text-blue-400" title="JavaFX" />,
      <GrMysql className="hover:text-blue-600" title="Mysql" />,
    ],
  },
  {
    githublink: "https://github.com/rayen-creator/sharepoint-client-api",
    demolink: "https://www.npmjs.com/package/sharepoint-client-api",
    image: placeholder,
    title: "sharepoint-client-api",
    category: "side",
    description:
      "A fluent TypeScript wrapper for the SharePoint sites and admin APIs, providing a simple, type-safe interface for queries and CRUD operations. Published as an open-source npm package.",
    stack: [
      <SiTypescript
        key="typescript-icon"
        className="hover:text-blue-500"
        title="TypeScript"
      />,
      <SiNodedotjs
        key="nodejs-icon"
        className="hover:text-green-600"
        title="Node.js"
      />,
      <FaNpm key="npm-icon" className="hover:text-red-400" title="npm" />,
    ],
  },
];
