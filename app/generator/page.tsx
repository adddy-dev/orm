import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import PolicyGeneratorForm from '@/sections/PolicyGenerator';

export default function PolicyGenerator() {
  return (
    <div className="min-h-screen bg-background p-6 flex items-center justify-center">
      <Card className="md:max-w-6xl mx-auto w-full">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Policy Generation Form
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <PolicyGeneratorForm />
        </CardContent>
      </Card>
    </div>
  );
}