
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation: "fade-in" | "slide-in" | "scale-in";
  delay?: number;
  className?: string;
  threshold?: number;
}

export const ScrollAnimation = ({
  children,
  animation,
  delay = 0,
  className,
  threshold = 0.2,
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(`animate-${animation}`);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animation, delay, threshold]);
  
  return (
    <div 
      ref={ref} 
      className={cn("animate-on-scroll", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
