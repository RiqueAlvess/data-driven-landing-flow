
import React from "react";
import { CtaButton } from "@/components/cta-button";
import { ScrollAnimation } from "@/components/scroll-animation";

export const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-tech-purple/90 to-tech-blue/90 text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimation animation="scale-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar seus dados em resultados?
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Agende um diagnóstico gratuito e descubra como podemos ajudar sua empresa a crescer com automação inteligente.
            </p>
            
            <div className="mb-8">
              <CtaButton href="#contact" size="lg" className="bg-white text-tech-purple hover:bg-white/90">
                Agendar Diagnóstico Gratuito
              </CtaButton>
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              
              <div className="text-left">
                <h3 className="font-medium">Template Gratuito</h3>
                <p className="text-sm text-white/80">
                  Baixe nosso template de dashboard para Excel
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};
