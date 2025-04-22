
import React, { useState, useEffect } from "react";
import { CtaButton } from "./cta-button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <nav
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-tech-dark flex items-center">
              <img src="/logo-tech.svg" alt="TechData" className="h-8" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-gray-700">
            <a href="#solutions" className="hover:text-tech-purple transition-colors">Soluções</a>
            <a href="#" className="hover:text-tech-purple transition-colors">Cases</a>
            <a href="#" className="hover:text-tech-purple transition-colors">Sobre</a>
            <a href="#" className="hover:text-tech-purple transition-colors">Blog</a>
            <a href="#contact" className="hover:text-tech-purple transition-colors">Contato</a>
          </div>
          
          <div className="hidden md:block">
            <CtaButton href="#contact" size="sm">
              Diagnóstico Grátis
            </CtaButton>
          </div>
          
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              {isMobileMenuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 12h16M4 6h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-4 pt-2 text-gray-700">
            <a href="#solutions" className="py-2 hover:text-tech-purple transition-colors">Soluções</a>
            <a href="#" className="py-2 hover:text-tech-purple transition-colors">Cases</a>
            <a href="#" className="py-2 hover:text-tech-purple transition-colors">Sobre</a>
            <a href="#" className="py-2 hover:text-tech-purple transition-colors">Blog</a>
            <a href="#contact" className="py-2 hover:text-tech-purple transition-colors">Contato</a>
            <CtaButton href="#contact" size="sm" className="mt-2">
              Diagnóstico Grátis
            </CtaButton>
          </div>
        </div>
      </div>
    </nav>
  );
};
