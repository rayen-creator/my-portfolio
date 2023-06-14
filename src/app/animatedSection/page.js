"use client";

import React, { useState, useEffect, useRef } from 'react';

const AnimatedSection = ({ threshold, children }) => {
  const [isVisible, setIsVisible] = useState([]);

  // Intersection Observer callback function
  const sectionRefs = useRef([]);

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: threshold || 0.5,
  };

  const handleObserver = (entries, index) => {
    const [entry] = entries;
    setIsVisible((prevState) => {
      const newState = [...prevState];
      newState[index] = entry.isIntersecting;
      return newState;
    });
  };

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, children.length);

    sectionRefs.current.forEach((sectionRef, index) => {
      const observer = new IntersectionObserver((entries) => handleObserver(entries, index), observerOptions);

      if (sectionRef) {
        observer.observe(sectionRef);
      }

      return () => {
        if (sectionRef) {
          observer.unobserve(sectionRef);
        }
      };
    });
  }, [children.length]);

  return (
    <div>
      {React.Children.map(children, (child, index) => (
        <section
          ref={(el) => (sectionRefs.current[index] = el)}
          className={`transition-opacity ${isVisible[index] ? 'opacity-100' : 'opacity-0'}`}
        >
          {child}
        </section>
      ))}
    </div>
  );
};

export default AnimatedSection;
