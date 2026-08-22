"use client";
import ScrollToTop from "../components/scrollToTop";
import Footer from "./pages/footer";
import Header from "./pages/header";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Technologies from "./pages/technologies";
import { useThemeContext } from "./utils/context/theme";
import About from "./pages/about";
import Experience from "./pages/experience";
import Navbar from "@/components/navbar";

export default function Home() {
  const [darkMode] = useThemeContext();

  return (
    <main className={`${darkMode ? "dark" : ""} `}>
      <div className="relative bg-white dark:bg-ink-950">
        <div className="pointer-events-none fixed inset-0 bg-grid bg-grid-cell opacity-0 dark:opacity-100 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="pointer-events-none fixed -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] hidden dark:block" />
        <div className="relative">
          <Navbar />
          <div className="px-6 md:px-16 lg:px-32 max-w-7xl mx-auto">
            <Header />
            <About />
            <Experience />
            <Projects />
            <Technologies />
            <Contact />
            <ScrollToTop />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
