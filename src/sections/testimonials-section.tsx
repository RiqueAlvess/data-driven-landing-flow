
import React from "react";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { ScrollAnimation } from "@/components/scroll-animation";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "A implementação dos dashboards transformou a maneira como analisamos nossos dados. Conseguimos tomar decisões muito mais rapidamente.",
      author: "Carlos Silva",
      company: "Diretor de Operações, LogTech S.A.",
    },
    {
      quote: "O sistema de automação superou todas as nossas expectativas. Reduzimos drasticamente o tempo gasto em tarefas repetitivas.",
      author: "Márcia Oliveira",
      company: "CEO, Retail Solutions",
    },
    {
      quote: "O app desenvolvido para nossa equipe de campo revolucionou nosso processo de coleta de dados. Altamente recomendado!",
      author: "Ricardo Mendes",
      company: "Gerente de TI, IndusBR",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-tech-light-purple/20">
      <div className="container px-4 mx-auto">
        <ScrollAnimation animation="fade-in">
          <SectionHeading
            title="O Que Nossos Clientes Dizem"
            subtitle="A satisfação dos nossos clientes é o melhor indicador da qualidade do nosso trabalho."
            centered
          />
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation
              key={testimonial.author}
              animation="scale-in"
              delay={index * 150}
            >
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
