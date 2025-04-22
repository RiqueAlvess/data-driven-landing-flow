
import React, { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { ProgressBar } from "@/components/progress-bar";
import { HeroSection } from "@/sections/hero-section";
import { ClientsSection } from "@/sections/clients-section";
import { SolutionsSection } from "@/sections/solutions-section";
import { BenefitsSection } from "@/sections/benefits-section";
import { CasesSection } from "@/sections/cases-section";
import { TestimonialsSection } from "@/sections/testimonials-section";
import { CtaSection } from "@/sections/cta-section";
import { ContactSection } from "@/sections/contact-section";
import { FooterSection } from "@/sections/footer-section";

const Index = () => {
  useEffect(() => {
    // Initialize scroll animation observers
    const initScrollAnimations = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const animation = entry.target.classList.contains('animate-fade-in')
                ? 'animate-fade-in'
                : entry.target.classList.contains('animate-slide-in')
                ? 'animate-slide-in'
                : 'animate-scale-in';
                
              entry.target.classList.add(animation);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      elements.forEach((el) => {
        observer.observe(el);
      });
    };
    
    initScrollAnimations();
    
    // Clean up
    return () => {
      // Remove any event listeners or cleanup if needed
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <ProgressBar />
      <Navbar />
      
      <main>
        <HeroSection />
        <ClientsSection />
        <SolutionsSection />
        <BenefitsSection />
        <CasesSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Index;
