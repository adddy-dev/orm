import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Clipboard, ShieldCheck, SlidersVertical } from 'lucide-react';
import React from 'react';

const SERVICES = [
  {
    icon: <Clipboard className="w-6 h-6 text-secondary" />,
    title: "Policy Generation",
    features: [
      "AI-driven document creation",
      "Industry-specific templates",
      "Automated compliance checks"
    ]
  },
  {
    icon: <SlidersVertical className="w-6 h-6 text-secondary" />,
    title: "Policy Customization",
    features: [
      "Tailored to your needs",
      "Regional compliance focus",
      "MCardContenttilingual support"
    ]
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-secondary" />,
    title: "Continuous Support",
    features: [
      "24/7 expert assistance",
      "RegCardContentar updates",
      "Compliance monitoring"
    ]
  }
];

function Services() {
  return (
    <div className="bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-primary mb-4">
          Comprehensive ISMS Policy Services
        </h2>
        <p className="text-base text-muted-foreground">
          End-to-end solutions for your information security management needs
        </p>
      </div>
      
      <div className="lg:px-[5%] mx-auto grid md:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <Card
            key={index} 
            className="rounded-xl p-3 gap-y-2 hover:border-secondary hover:scale-105 transition-all duration-300"
          >
            <CardHeader className='gap-y-3'>
              <span className="w-min bg-muted-foreground p-3 rounded-full">
                {service.icon}
              </span>
              <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <li 
                  key={featureIndex} 
                  className="flex items-center space-x-2 text-muted-foreground"
                >
                  <Check color='var(--primary)' size={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Services;