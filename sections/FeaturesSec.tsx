import { ShieldCheck, SlidersVertical, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import React from 'react'

const About = () => {

  const FEATURES = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-secondary" />,
      title: "Regional Compliance Expertise",
      description: "Our AI is specifically trained on Middle Eastern compliance requirements and security frameworks."
    },
    {
      icon: <Zap className="w-6 h-6 text-secondary" />,
      title: "Lightning-Fast Generation",
      description: "Generate comprehensive ISMS policies in minutes instead of weeks or months."
    },
    {
      icon: <SlidersVertical className="w-6 h-6 text-secondary" />,
      title: "Customizable Solutions",
      description: "Tailor policies to your specific industry needs while maintaining compliance standards."
    }
  ];

  const feat = [
    {
       main: 'Enhanced Efficiency',
       para: 'Streamlines security management, saving valuable time and resources for SMEs and larger organizations.',
       vid: '/vid1.mp4',
    },
    {
       main: 'Seamless Security',
       para: 'Experience streamlined security management with our solution, engineered for optimal efficiency.',
       vid: '/vid1.mp4',
    },
    {
       main: 'Revew, Edit & Update',
       para: 'Automated review of your existing security policies and get a detailed gap analysis',
       vid: '/vid1.mp4',
    },
    {
       main: 'Tailored Policies',
       para: 'Our AI-powered generator crafts policies specific to your needs, ensuring compliance and a streamlined creation process.',
       vid: '/vid1.mp4',
    }
 ]


  const METRICS = [
    { label: "Time Saved", value: 85 },
    { label: "Accuracy Rate", value: 99 },
    { label: "Customer Satisfaction", value: 96 }
  ];

  return (
    <section id='features'>
       <div className="bg-background pt-14 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-primary mb-4">
              Powerful Features for Your Security Policies
            </h1>
            <p className="text-base text-muted-foreground">
              Leverage AI-powered tools to streamline your ISMS documentation process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg hover:border-secondary transition-all duration-300"
              >
                <CardHeader className="flex space-y-4 pb-2">
                  <span className="w-min bg-muted-foreground p-3 rounded-full">
                    {feature.icon}
                  </span>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-background py-10 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div>
            <h1 className="text-4xl font-extrabold mb-8">
              Revolutionizing ISMS Policy Creation for Middle East SMEs
            </h1>

            <div className="space-y-6">
              {FEATURES.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-muted-foreground p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Metrics */}
          <div className="p-8 rounded-xl shadow-lg bg-card">

            <div className="space-y-10">
              {METRICS.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-gray-600 dark:text-gray-400">
                    <span>{metric.label}</span>
                    <span>{metric.value}%</span>
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-tertiary h-2.5 rounded-full"
                      style={{ width: `${metric.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default About;