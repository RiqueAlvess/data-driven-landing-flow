
import React from "react";
import { SectionHeading } from "@/components/section-heading";
import { CaseStudyCard } from "@/components/case-study-card";
import { ScrollAnimation } from "@/components/scroll-animation";

export const CasesSection = () => {
  const cases = [
    {
      title: "Empresa de Logística",
      situation: "Processos manuais de rastreamento geravam atrasos e informações inconsistentes.",
      action: "Implementamos um sistema integrado de rastreamento com dashboards em tempo real.",
      result: "Redução de 35% no tempo de processamento e aumento de 28% na satisfação dos clientes.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    },
    {
      title: "Rede de Varejo",
      situation: "Dificuldade em analisar dados de vendas de múltiplas lojas para tomada de decisão.",
      action: "Criamos uma plataforma centralizada com dashboards personalizados por departamento.",
      result: "Aumento de 22% nas vendas e redução de 40% no tempo de análise de performance.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      title: "Indústria Manufatureira",
      situation: "Controle de qualidade manual resultava em alta taxa de refugo e retrabalho.",
      action: "Desenvolvemos sistema automatizado de análise de qualidade com alertas em tempo real.",
      result: "Redução de 65% na taxa de refugo e economia anual estimada em R$ 1.2 milhões.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <ScrollAnimation animation="fade-in">
          <SectionHeading
            title="Cases de Sucesso"
            subtitle="Conheça alguns exemplos de como transformamos os desafios dos nossos clientes em oportunidades de crescimento."
            centered
          />
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <ScrollAnimation
              key={caseStudy.title}
              animation="scale-in"
              delay={index * 150}
            >
              <CaseStudyCard
                title={caseStudy.title}
                situation={caseStudy.situation}
                action={caseStudy.action}
                result={caseStudy.result}
                image={caseStudy.image}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
