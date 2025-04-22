
import React, { useState, useEffect } from "react";

export const ProgressBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const position = window.scrollY / windowHeight;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", updateScrollPosition);
    
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-1 bg-tech-purple opacity-75 z-50 transition-all duration-200 ease-out"
      style={{ width: `${scrollPosition * 100}%` }}
    />
  );
};
