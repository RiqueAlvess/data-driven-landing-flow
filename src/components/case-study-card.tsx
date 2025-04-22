
import React from "react";
import { cn } from "@/lib/utils";
import { CtaButton } from "./cta-button";

interface CaseStudyCardProps {
  title: string;
  situation: string;
  action: string;
  result: string;
  image?: string;
  className?: string;
}

export const CaseStudyCard = ({
  title,
  situation,
  action,
  result,
  image,
  className,
}: CaseStudyCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100",
      className
    )}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        
        <div className="mb-4">
          <h4 className="text-sm uppercase text-gray-500 font-semibold mb-1">Situação</h4>
          <p className="text-gray-700">{situation}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm uppercase text-gray-500 font-semibold mb-1">Ação</h4>
          <p className="text-gray-700">{action}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm uppercase text-gray-500 font-semibold mb-1">Resultado</h4>
          <p className="text-gray-700 font-medium">{result}</p>
        </div>
        
        <CtaButton 
          href="#contact"
          variant="outline"
          size="sm"
        >
          Ver detalhes
        </CtaButton>
      </div>
    </div>
  );
};
