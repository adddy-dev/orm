import React from 'react';
import { 
  ShieldCheck, 
  TrendingUp,
  Zap,
  BarChart2,
  AlertTriangle,
  Search
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ADVANTAGES = [
  {
    icon: Search,
    title: "Automated Review Monitoring",
    description: "Continuously track and analyze customer reviews across multiple platforms"
  },
  {
    icon: AlertTriangle,
    title: "Negative Content Detection",
    description: "Instantly identify and flag reviews containing inappropriate language"
  },
  {
    icon: BarChart2,
    title: "Sentiment Analysis",
    description: "Gain insights into customer sentiment to shape brand perception"
  },
  {
    icon: ShieldCheck,
    title: "Brand Protection",
    description: "Proactively manage your online reputation and mitigate potential PR risks"
  },
  {
    icon: Zap,
    title: "Real-Time Alerts",
    description: "Receive immediate notifications for new reviews or flagged content"
  },
  {
    icon: TrendingUp,
    title: "Improved Customer Trust",
    description: "Boost credibility and trust through timely response and reputation insights"
  }
];

export default function Benefits() {
  return (
    <div className="bg-background py-12 pb-20 px-4 sm:px-6 lg:px-8" id='benefits'>
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <h2 className="text-6xl font-extrabold text-primary mb-6">
          Why Choose Our Platform?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
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