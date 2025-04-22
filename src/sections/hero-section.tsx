
import React from "react";
import { CtaButton } from "@/components/cta-button";
import { ScrollAnimation } from "@/components/scroll-animation";

export const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden hero-pattern">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <ScrollAnimation animation="fade-in">
              <div className="mb-6">
                <img src="/logo-tech.svg" alt="TechData" className="h-12" />
                <p className="text-tech-purple font-medium mt-2">Dados que viram crescimento.</p>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Reduza 40% do tempo em relatórios e decisões com{" "}
                <span className="gradient-text">automação inteligente</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                Automatizamos processos, entregamos insights em real time e apps incríveis para transformar dados em resultados.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <CtaButton href="#contact" size="lg">
                  Agendar diagnóstico grátis
                </CtaButton>
                
                <CtaButton href="#solutions" variant="outline" size="lg">
                  Conhecer soluções
                </CtaButton>
              </div>
              
              <div className="mt-6 text-sm text-gray-500">
                <span className="font-semibold text-tech-purple">Vagas limitadas:</span> Apenas 5 diagnósticos gratuitos por mês.
              </div>
            </ScrollAnimation>
          </div>
          
          <div className="w-full lg:w-1/2 pl-0 lg:pl-12">
            <ScrollAnimation animation="slide-in" delay={300}>
              <div className="relative">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                    alt="Dashboard data visualization" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute top-0 -right-6 w-32 h-32 bg-tech-light-purple rounded-full opacity-50 blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-tech-blue/20 rounded-full opacity-50 blur-3xl"></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
