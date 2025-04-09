import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import PolicyGeneratorForm from './PolicyGenerator';

const industries = [
  {
    name: "FinTech Firm",
    description: `We design, develop, and maintain innovative financial technology solutions that transform banking, payments, and investment management. Our portfolio includes secure digital payment platforms, AI-powered financial analytics, blockchain-based solutions, and mobile banking applications. By integrating cutting-edge technology with financial expertise, we help businesses streamline operations, enhance security, and drive financial innovation.`
  },
  {
    name: "Law Firm",
    description: `We provide comprehensive legal services tailored to individuals and businesses across various industries. Our expertise spans corporate law, intellectual property, regulatory compliance, dispute resolution, and contract negotiation. We combine legal proficiency with a deep understanding of industry-specific challenges, ensuring personalized legal solutions that protect and empower our clients.`
  },
  {
    name: "Auto Dealer Firm",
    description: `We specialize in the sale, leasing, and servicing of new and pre-owned vehicles, offering a wide range of luxury, commercial, and economy automobiles. Our platform provides customers with transparent pricing, financing options, and expert guidance, ensuring a seamless car-buying experience. We are committed to delivering exceptional service, top-quality vehicles, and unmatched customer satisfaction.`
  }
];

const Demo = () => {
  return (
    <div className="w-full bg-background py-12 px-4 sm:px-6" id="demo">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">
          See Our Platform in Action
        </h2>
        <p className="text-base text-muted-foreground">
          Experience how easy it is to generate and manage your ISMS policies
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Steps Card */}
        <Card className="bg-card p-6 h-full">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-6 mt-6">
              <div className="text-left font-semibold text-xl -mb-2">Industry Descriptions</div>
              <div className="space-y-5 text-base text-muted-foreground">
                {industries.map((industry, index) => (
                  <div key={index}>
                    <strong className='text-primary text-lg'>{industry.name}</strong>
                    <p>{industry.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Demo Generator Card */}
        <Card className="bg-card p-3">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Try Demo Generator</CardTitle>
          </CardHeader>
          <CardContent>
            <PolicyGeneratorForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Demo;
