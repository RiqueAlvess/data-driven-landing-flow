
import React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface CtaButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: boolean;
}

export const CtaButton = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  icon = true,
}: CtaButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-tech-purple hover:bg-tech-purple/90 text-white focus:ring-tech-purple/50",
    secondary: "bg-tech-blue hover:bg-tech-blue/90 text-white focus:ring-tech-blue/50",
    outline: "border border-tech-purple text-tech-purple hover:bg-tech-light-purple focus:ring-tech-purple/40",
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-5 py-2.5",
    lg: "text-lg px-6 py-3",
  };
  
  const buttonClass = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );
  
  const content = (
    <>
      {children}
      {icon && <ChevronRight className="ml-1 h-4 w-4" />}
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {content}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClass}>
      {content}
    </button>
  );
};
