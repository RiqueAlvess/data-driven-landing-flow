
import React from "react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { ClientLogo } from "@/components/client-logo";

export const ClientsSection = () => {
  const clients = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
    },
    {
      name: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-8">
            <h3 className="text-gray-600 text-sm font-medium uppercase tracking-wider">
              Empresas que confiam em nossas soluções
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center items-center">
            {clients.map((client) => (
              <ClientLogo
                key={client.name}
                src={client.logo}
                alt={client.name}
                className="w-1/2 sm:w-1/3 md:w-1/5"
              />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white py-2 px-4 rounded-full shadow-sm">
              <span className="w-3 h-3 rounded-full bg-tech-success animate-pulse"></span>
              <span className="text-sm font-medium">
                ISO 27001 • Google Cloud Partner • LGPD Compliant
              </span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
