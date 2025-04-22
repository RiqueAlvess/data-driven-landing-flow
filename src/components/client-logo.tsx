
import React from "react";
import { cn } from "@/lib/utils";

interface ClientLogoProps {
  src: string;
  alt: string;
  className?: string;
}

export const ClientLogo = ({
  src,
  alt,
  className,
}: ClientLogoProps) => {
  return (
    <div className={cn(
      "p-4 flex items-center justify-center grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300",
      className
    )}>
      <img
        src={src}
        alt={alt}
        className="max-h-12 max-w-[140px]"
      />
    </div>
  );
};
