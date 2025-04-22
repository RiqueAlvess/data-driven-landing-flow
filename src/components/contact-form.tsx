
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
}

export const ContactForm = ({ className }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className={cn("bg-white p-6 rounded-lg shadow-sm", className)}>
      {success ? (
        <div className="text-center py-8">
          <div className="text-tech-success text-5xl mb-4">✓</div>
          <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
          <p className="text-gray-600">
            Obrigado pelo contato. Retornaremos em até 24 horas.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-purple/50 focus:border-tech-purple/50"
              placeholder="Seu nome"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-purple/50 focus:border-tech-purple/50"
              placeholder="seu@email.com"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-purple/50 focus:border-tech-purple/50"
              placeholder="(00) 00000-0000"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-purple/50 focus:border-tech-purple/50"
              placeholder="Como podemos ajudar?"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full py-3 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tech-purple",
              isSubmitting
                ? "bg-tech-purple/70 cursor-not-allowed"
                : "bg-tech-purple hover:bg-tech-purple/90 text-white"
            )}
          >
            {isSubmitting ? "Enviando..." : "Solicitar Diagnóstico Gratuito"}
          </button>
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            Ao enviar, você concorda com nossa{" "}
            <a href="#privacy" className="text-tech-blue hover:underline">
              Política de Privacidade
            </a>
          </p>
        </form>
      )}
    </div>
  );
};
