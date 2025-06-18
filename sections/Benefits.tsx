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
import { motion } from 'framer-motion';


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
    <div className="bg-background py-12 md:py-24 px-4 sm:px-6 lg:px-8" id='benefits'>
      <motion.div 
        className="max-w-screen-xl mx-auto text-center md:mb-16 mb-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: { 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: 0.6, 
              ease: [0.4, 0, 0.2, 1] 
            } 
          }
        }}
      >
        <h2 className="text-3xl md:text-6xl font-bold text-primary mb-6">
          Why Choose Our Platform?
        </h2>
        <p className="text-base md:text-xl text-muted-foreground">
          Transform your ISMS policy management with cutting-edge AI technology
        </p>
      </motion.div>

      <TooltipProvider>
        <div className="grid md:grid-cols-2 gap-8 lg:px-[5%] mx-auto">
          {ADVANTAGES.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Card className="flex flex-row items-center border-2 hover:border-secondary hover:scale-[101%] transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <CardTitle>
                        <advantage.icon className="w-6 h-6 text-secondary" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='pt-4 px-0'>
                      <CardDescription className='flex flex-col gap-2 pr-2'>
                        <div className="text-foreground font-semibold text-base md:text-lg">
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
            </motion.div>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
}