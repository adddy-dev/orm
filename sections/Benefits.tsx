import React from 'react';
import { 
  Clock, 
  ShieldCheck, 
  Scale, 
  ArrowUpRight, 
  RotateCw, 
  Layers 
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ADVANTAGES = [
  {
    icon: Clock,
    title: "Time Efficiency",
    description: "Reduce policy creation time by up to 90% with our AI-powered platform"
  },
  {
    icon: Scale,
    title: "Regional Expertise",
    description: "Specialized knowledge of Middle Eastern compliance requirements"
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Compliance",
    description: "Ensure 100% alignment with regional and international security standards"
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Easy integration with existing security frameworks and tools"
  },
  {
    icon: ArrowUpRight,
    title: "Cost Reduction",
    description: "Save up to 70% on policy development and maintenance costs"
  },
  {
    icon: RotateCw,
    title: "Continuous Updates",
    description: "Always stay current with automatic policy updates and improvements"
  }
];

export default function Benefits() {
  return (
    <div className="bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-primary mb-4">
          Why Choose Our Platform?
        </h2>
        <p className="text-base text-muted-foreground">
          Transform your ISMS policy management with cutting-edge AI technology
        </p>
      </div>
      
      <TooltipProvider>
        <div className="grid md:grid-cols-2 gap-8 lg:px-[5%] mx-auto">
          {ADVANTAGES.map((advantage, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Card className="flex flex-row items-center border hover:border-secondary transition-colors duration-300 cursor-pointer">
                  <CardHeader>
                    <CardTitle>
                      <advantage.icon className="w-6 h-6 text-secondary" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='pt-4 px-0'>
                    <CardDescription className='flex flex-col gap-2'>
                      <div className="text-foreground font-semibold text-lg">
                        {advantage.title}
                      </div>
                      <p>
                        {advantage.description}
                      </p>
                    </CardDescription>
                  </CardContent>
                </Card>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 text-white border-none">
                <p>Learn more about {advantage.title}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
}