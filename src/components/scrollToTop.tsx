"use client";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 p-2 rounded-lg border border-primary/30 bg-white/80 dark:bg-ink-900/80 backdrop-blur animate-none hover:animate-bounce hover:border-primary shadow ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <AiOutlineArrowUp className="text-primary text-2xl" />
    </button>
  );
};
export default ScrollToTop;
