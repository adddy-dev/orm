'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ArrowLeftRight, Loader2 } from 'lucide-react';
import axios from 'axios';
import Markdown from 'react-markdown';

export default function FrameworkComparisonTool() {
  const [policy1, setPolicy1] = useState("");
  const [policy2, setPolicy2] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [comparison, setComparison] = useState(null);
  const [error, setError] = useState("");

  const predefinedPolicies = [
    { value: 'access-control-policy', label: 'Access Control Policy' },
    { value: 'backup-management-policy', label: 'Backup Management Policy' },
    { value: 'business-continuity-policy', label: 'Business Continuity Policy' },
    { value: 'change-management-policy', label: 'Change Management Policy' },
    { value: 'continuous-improvement-policy', label: 'Continuous Improvement Policy' },
    { value: 'data-retention-policy', label: 'Data Retention Policy' },
    { value: 'encryption-policy', label: 'Encryption Policy' },
    { value: 'information-classification-policy', label: 'Information Classification Policy' },
    { value: 'information-security-awareness-policy', label: 'Information Security Awareness Policy' },
    { value: 'password-policy', label: 'Password Policy' },
    { value: 'application-privacy-policy', label: 'Application Privacy Policy' },
    { value: 'ai-usage-security-policy', label: 'AI Usage Security Policy' },
    { value: 'isms-scope', label: 'ISMS Scope' },
    { value: 'risk-management-policy', label: 'Risk Management Policy' },
    { value: 'business-impact-analysis', label: 'Business Impact Analysis' },
    { value: 'business-continuity-plan', label: 'Business Continuity Plan' },
    { value: 'network-security-policy', label: 'Network Security Policy' },
    { value: 'patch-management-policy', label: 'Patch Management Policy' },
    { value: 'physical-security-policy', label: 'Physical Security Policy' },
    { value: 'secure-development-policy', label: 'Secure Development Policy' },
    { value: 'asset-management-policy', label: 'Asset Management Policy' },
    { value: 'information-transfer-policy', label: 'Information Transfer Policy' },
    { value: 'logging-and-monitoring-policy', label: 'Logging and Monitoring Policy' },
    { value: 'software-acquisition-policy', label: 'Software Acquisition Policy' },
  ];

  const compareFrameworks = async () => {
    if (!policy1 || !policy2) {
      setError("Please select two frameworks to compare");
      return;
    }
    
    setIsLoading(true);
    setError("");
    
    try {
      const { data: response } = await axios.post('/api/compare-policies', { policy1, policy2 });
      
      if (!response.success) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.data;
      setComparison(data.comparison);
      setShowModal(true);
    } catch (err: any) {
      setError(`Failed to compare frameworks: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background mt-12 mb-16">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-4xl text-primary font-bold text-center mb-2 mt-8">Framework Comparison Tool</h1>
        <p className="text-muted-foreground text-center mb-12">Compare regulatory requirements across different jurisdictions</p>
        
        <div className="bg-card rounded-lg p-8 shadow-lg mt-20">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="w-full md:w-4/12">
              <h2 className="text-xl mb-4 font-semibold">Policy 1</h2>
              <Select value={policy1} onValueChange={setPolicy1}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Policy" />
                </SelectTrigger>
                <SelectContent>
                  {predefinedPolicies.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center justify-center w-12 h-12 bg-tertiary rounded-full my-4 md:my-0">
              <ArrowLeftRight className="w-6 h-6 text-white" />
            </div>
            
            <div className="w-full md:w-4/12">
              <h2 className="text-xl mb-4 font-semibold">Policy 2</h2>
              <Select value={policy2} onValueChange={setPolicy2}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Policy" />
                </SelectTrigger>
                <SelectContent>
                  {predefinedPolicies.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {error && (
            <div className="mt-4 p-3 bg-red-900/50 text-red-200 rounded-md">
              {error}
            </div>
          )}
          
          <div className="mt-8 flex justify-center">
            <Button 
              onClick={compareFrameworks} 
              disabled={isLoading}
              className="px-8 py-6 bg-tertiary hover:bg-tertiary-foreground text-lg text-foreground"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Comparing...
                </>
              ) : "Compare Policies"}
            </Button>
          </div>
        </div>
      </div>
      
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className='text-xl leading-tight'>Framework Comparison Results</DialogTitle>
            <DialogDescription className='text-base'>
              Comparison between 
              <b className='text-tertiary'> {predefinedPolicies.find(f => f.value === policy1)?.label}</b> and 
              <b className='text-tertiary'> {predefinedPolicies.find(f => f.value === policy2)?.label}</b>
            </DialogDescription>
          </DialogHeader>
          
          {comparison && (
            <div className="mt-1 bg-card p-4 rounded-md overflow-auto flex-1" style={{ scrollbarWidth: 'none'}}>
              <h3 className="font-bold text-lg mb-2 text-tertiary">Key Differences</h3>
              <div className="text-muted-foreground">
                {comparison && (
                    <Markdown>
                      {comparison }
                    </Markdown>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}