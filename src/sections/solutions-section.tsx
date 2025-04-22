
import React from "react";
import { SectionHeading } from "@/components/section-heading";
import { SolutionCard } from "@/components/solution-card";
import { ScrollAnimation } from "@/components/scroll-animation";

export const SolutionsSection = () => {
  const solutions = [
    {
      title: "Automação de Processos",
      description: "Elimine tarefas repetitivas e reduza erros com fluxos de trabalho automatizados. Aumente a produtividade da sua equipe.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
          <path d="M12 13v8"></path>
          <path d="M5 13v6a2 2 0 0 0 2 2h8"></path>
        </svg>
      ),
    },
    {
      title: "Análises & Dashboards",
      description: "Visualize seus dados de forma clara e intuitiva. Dashboards personalizados que transformam dados em decisões estratégicas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      ),
    },
    {
      title: "Apps Mobile & Web",
      description: "Aplicações sob medida para suas necessidades. Acesse seus dados de qualquer lugar, a qualquer momento.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
          <path d="M12 18h.01"></path>
        </svg>
      ),
    },
    {
      title: "Sites Performáticos",
      description: "Sites rápidos e otimizados para SEO. Aumente sua presença online e converta visitantes em clientes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 2H2v10h10V2Z"></path>
          <path d="M12 12h10v10H12V12Z"></path>
          <path d="M22 2h-8v8h8V2Z"></path>
          <path d="M10 14H2v8h8v-8Z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="solutions" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <ScrollAnimation animation="fade-in">
          <SectionHeading
            title="Nossas Soluções"
            subtitle="Desenvolvemos soluções completas de tecnologia para automatizar processos, extrair insights e impulsionar o crescimento do seu negócio."
            centered
          />
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <ScrollAnimation
              key={solution.title}
              animation="scale-in"
              delay={index * 100}
            >
              <SolutionCard
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
