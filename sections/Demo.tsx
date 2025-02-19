import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import PolicyGeneratorForm from './PolicyGenerator';

const Demo = () => {
  return (
    <div className="w-full bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">
          See Our Platform in Action
        </h2>
        <p className="text-base text-muted-foreground">
          Experience how easy it is to generate and manage your ISMS policies
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Steps Card */}
        <Card className="bg-card p-6">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-4">
              {[
                "Select your industry sector",
                "Choose required policy templates",
                "AI generates customized policies",
                "Review and download your policies"
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{step}</span>
                </div>
              ))}
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