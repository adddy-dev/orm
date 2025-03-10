'use client'


import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function RegulatoryFrameworks() {
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [selectedFrameworks, setSelectedFrameworks] = useState(Array<string>());

  const frameworks = {
    saudiArabia: [
      { id: "sama_csf", name: "SAMA CSF", description: "Cybersecurity Framework for Banking Sector", status: "updated" },
      { id: "pdpl", name: "PDPL", description: "Personal Data Protection Law", status: "new" },
      { id: "nca", name: "NCA", description: "National Cybersecurity Authority", status: "default" }
    ],
    uae: [
      { id: "uae_csc", name: "UAE Cyber Security Council", description: "National Cybersecurity Standards", status: "active" },
      { id: "cbuae", name: "CBUAE", description: "Central Bank Regulations", status: "default" },
      { id: "difc", name: "DIFC", description: "Data Protection Regulations", status: "default" }
    ]
  };

  const toggleFrameworkSelection = (frameworkId: string) => {
    if (selectedFrameworks.includes(frameworkId)) {
      setSelectedFrameworks(selectedFrameworks.filter(id => id !== frameworkId));
    } else {
      if (selectedFrameworks.length < 2) {
        setSelectedFrameworks([...selectedFrameworks, frameworkId]);
      } else {
        setSelectedFrameworks([selectedFrameworks[1], frameworkId]);
      }
    }
  };

  const getStatusBadge = (status: string) => {
    let color;
    
    switch (status) {
      case 'updated':
        color = "bg-blue-900/20 text-blue-400 border-blue-800/30";
        return <Badge className={`${color}`}>Updated</Badge>;
      case 'new':
        color = "bg-blue-900/20 text-blue-400 border-blue-800/30";
        return <Badge className={`${color}`}>New</Badge>;
      case 'active':
        color = "bg-green-900/20 text-green-400 border-green-800/30";
        return <Badge className={`${color}`}>Active</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="text-foreground mt-24 mb-16 p-6 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl text-primary font-bold text-center mb-2">Regulatory Frameworks</h1>
        <p className="text-muted-foreground text-center mb-12">
          Comprehensive coverage of regulatory frameworks across the Middle East
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Saudi Arabia Section */}
          <div className="bg-card rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Saudi Arabia</h2>
            
            <div className="space-y-4">
              {frameworks.saudiArabia.map((framework) => (
                <Card 
                  key={framework.id}
                  className={`bg-gray-800 border-gray-700 hover:bg-gray-750 transition cursor-pointer ${
                    selectedFrameworks.includes(framework.id) ? "ring-2 ring-tertiary" : ""
                  }`}
                  onClick={() => toggleFrameworkSelection(framework.id)}
                >
                  <CardContent className="p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-foreground">{framework.name}</h3>
                      <p className="text-muted-foreground text-sm">{framework.description}</p>
                    </div>
                    <div>
                      {getStatusBadge(framework.status)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* UAE Section */}
          <div className="bg-card rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">UAE</h2>
            
            <div className="space-y-4">
              {frameworks.uae.map((framework) => (
                <Card 
                  key={framework.id}
                  className={`bg-gray-800 border-gray-700 hover:bg-gray-750 transition cursor-pointer ${
                    selectedFrameworks.includes(framework.id) ? "ring-2 ring-tertiary" : ""
                  }`}
                  onClick={() => toggleFrameworkSelection(framework.id)}
                >
                  <CardContent className="p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-foreground">{framework.name}</h3>
                      <p className="text-muted-foreground text-sm">{framework.description}</p>
                    </div>
                    <div>
                      {getStatusBadge(framework.status)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 my-2">
          Disclaimer: It can make mistakes. Please review answers, and give feedback.
        </p>

        <div className="mt-8 flex justify-center">
          <Button 
            className="bg-tertiary hover:bg-tertiary-foreground text-white px-8 py-6 text-lg font-medium rounded-md"
            // onClick={() => setIsCompareModalOpen(true)}
            disabled={selectedFrameworks.length !== 2}
          >
            Compare Frameworks
          </Button>
        </div>
        
      </div>

      <Dialog open={isCompareModalOpen} onOpenChange={setIsCompareModalOpen}>
        <DialogContent className="bg-gray-800 text-gray-100 border-gray-700 max-w-4xl">
          <DialogHeader>
            <DialogTitle>Compare Regulatory Frameworks</DialogTitle>
            <DialogDescription className="text-gray-400">
              Comparing selected regulatory frameworks
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-2 gap-6 mt-4">
            {selectedFrameworks.length === 2 && (
              <>
                <div className="bg-gray-700 p-4 rounded-md">
                  <h3 className="font-bold text-lg mb-2">
                    {[...frameworks.saudiArabia, ...frameworks.uae].find(f => f.id === selectedFrameworks[0])?.name}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {[...frameworks.saudiArabia, ...frameworks.uae].find(f => f.id === selectedFrameworks[0])?.description}
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Key Requirements</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                      <li>Requirement details would appear here</li>
                      <li>Based on the selected framework</li>
                      <li>This would come from your API</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gray-700 p-4 rounded-md">
                  <h3 className="font-bold text-lg mb-2">
                    {[...frameworks.saudiArabia, ...frameworks.uae].find(f => f.id === selectedFrameworks[1])?.name}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {[...frameworks.saudiArabia, ...frameworks.uae].find(f => f.id === selectedFrameworks[1])?.description}
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Key Requirements</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                      <li>Requirement details would appear here</li>
                      <li>Based on the selected framework</li>
                      <li>This would come from your API</li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
          
          <div className="mt-6 bg-blue-900/30 p-4 rounded-md">
            <h3 className="font-bold text-lg mb-2">Key Differences</h3>
            <div className="text-sm text-gray-300">
              <p>This section would highlight key differences between the two frameworks based on your API response.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}