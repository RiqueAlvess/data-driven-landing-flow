
import React from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  avatar?: string;
  className?: string;
}

export const TestimonialCard = ({
  quote,
  author,
  company,
  avatar,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow border border-gray-100 card-hover",
      className
    )}>
      <div className="mb-4 text-tech-purple">
        <svg
          width="32"
          height="24"
          viewBox="0 0 32 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.5 11.5C31.5 7.5 28.5 4 24.5 3.5C24.5 3.5 23 13.5 27 16.5C27.5 13 31.5 13 31.5 11.5ZM15.5 11.5C15.5 7.5 12.5 4 8.5 3.5C8.5 3.5 7 13.5 11 16.5C11.5 13 15.5 13 15.5 11.5Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p className="text-gray-700 mb-4 leading-relaxed">{quote}</p>
      <div className="flex items-center">
        {avatar && (
          <div className="mr-3">
            <img
              src={avatar}
              alt={author}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
    </div>
  );
};
