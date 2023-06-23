"use client";
import { React } from "react";
import ScrollToTop from "../components/scrollToTop";
import Footer from "./pages/footer";
import Header from "./pages/header";
import Contact from "./pages/contact";
import Projects from "./pages/projects.js";
import Technologies from "./pages/technologies";
import { useThemeContext } from "./utils/context/theme";
import About from "./pages/about";
import Navbar from "@/components/navbar";

export default function Home() {
  const [darkMode] = useThemeContext();

  return (
    <main className={`${darkMode ? "dark" : ""} `}>
      <div className=" dark:bg-gray-900">
        <Navbar />
        <div className="px-10 md:px-20  lg:px-40 ">
          <section
            id="header"
            className="md:min-h-[470px] md:flex items-center "
          >
            <Header />
          </section>
          <section id="About" className="my-20  md:mt:44 ">
            <About />
          </section>
          <section id="Projects" className="my-1">
            <Projects />
          </section>
          <section id="Technologies" className="my-1">
            <Technologies />
          </section>
          <section id="Contact" className="mt-1 mb-10 ">
            <Contact />
          </section>
          <ScrollToTop />
        </div>
        <Footer />
      </div>
    </main>
  );
}
