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
          <Header />
          <About />
          <Projects />
          <Technologies />
          <Contact />
          <ScrollToTop />
        </div>
        <Footer />
      </div>
    </main>
  );
}
