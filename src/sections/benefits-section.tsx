
import React from "react";
import { SectionHeading } from "@/components/section-heading";
import { ScrollAnimation } from "@/components/scroll-animation";
import { DataCounter } from "@/components/ui/data-counter";

export const BenefitsSection = () => {
  const benefits = [
    {
      title: "Redução de Tempo",
      value: 40,
      unit: "%",
      description: "Menos tempo gasto em tarefas manuais e geração de relatórios",
    },
    {
      title: "Aumento de Produtividade",
      value: 65,
      unit: "%",
      description: "Crescimento médio de produtividade após implementação",
    },
    {
      title: "ROI Positivo",
      value: 4.5,
      unit: "x",
      description: "Retorno sobre investimento médio em 12 meses",
    },
    {
      title: "Redução de Erros",
      value: 95,
      unit: "%",
      description: "Menos erros operacionais com processos automatizados",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <ScrollAnimation animation="fade-in">
          <SectionHeading
            title="Resultados Comprovados"
            subtitle="Nossas soluções de automação e análise de dados geram benefícios tangíveis e mensuráveis para seu negócio."
            centered
          />
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollAnimation
              key={benefit.title}
              animation="scale-in"
              delay={index * 100}
            >
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <div className="text-4xl md:text-5xl font-bold text-tech-purple mb-2">
                  <DataCounter
                    start={0}
                    end={benefit.value}
                    formatter={(value) => `${value}${benefit.unit}`}
                  />
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        
        <ScrollAnimation animation="fade-in" delay={400}>
          <div className="mt-12 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Resultados com base em média de clientes atendidos nos últimos 12 meses. 
              Os resultados podem variar de acordo com o setor e complexidade do projeto.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
