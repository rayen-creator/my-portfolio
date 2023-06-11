'use client';
import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
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
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return(
        <button
        className={`fixed bottom-4 right-4 text-white p-2 rounded-lg animate-bounce hover:animate-none shadow ${isVisible ? 'block' : 'hidden'
          }`}
        onClick={scrollToTop}
      > 
       <AiOutlineArrowUp className=' text-teal-400 text-3xl'/>
      </button>
    )
}
export default ScrollToTop;
