
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface DataCounterProps {
  start: number;
  end: number;
  duration?: number;
  formatter?: (value: number) => string;
  className?: string;
}

export const DataCounter = ({
  start,
  end,
  duration = 2000,
  formatter = (value) => value.toString(),
  className,
}: DataCounterProps) => {
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const startTime = useRef<number | null>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const node = counterRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const startAnimation = () => {
    startTime.current = Date.now();
    updateCounter();
  };

  const updateCounter = () => {
    if (!startTime.current || !counterRef.current) return;

    const elapsedTime = Date.now() - startTime.current;
    const progress = Math.min(elapsedTime / duration, 1);
    
    const currentValue = Math.floor(start + progress * (end - start));
    counterRef.current.textContent = formatter(currentValue);

    if (progress < 1) {
      requestRef.current = requestAnimationFrame(updateCounter);
    }
  };

  return (
    <span ref={counterRef} className={cn("font-bold", className)}>
      {formatter(start)}
    </span>
  );
};
