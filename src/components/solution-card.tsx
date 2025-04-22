
import React from "react";
import { cn } from "@/lib/utils";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export const SolutionCard = ({
  title,
  description,
  icon,
  className,
}: SolutionCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-sm border border-gray-100 card-hover",
      className
    )}>
      <div className="mb-4 text-tech-purple inline-flex items-center justify-center w-12 h-12 rounded-lg bg-tech-light-purple">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};
