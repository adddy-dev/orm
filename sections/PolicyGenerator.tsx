'use client';

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Download, Loader2 } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import Markdown from 'react-markdown'
import { usePolicyGenContext } from '@/context/policyGenerator';

interface PolicyFormData {
  policy_name: string;
  company_name: string;
  location: string;
  industry: string;
  description: string;
  company_size: string;
  key_assets_company: string;
  language: 'english' | 'arabic';
}

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
  { value: 'custom', label: 'Custom Policy Name' }
];

export default function PolicyGeneratorForm() {
  const { policy } = usePolicyGenContext();

  const [formData, setFormData] = useState<PolicyFormData>({
    policy_name: policy || '',
    company_name: '',
    location: '',
    industry: '',
    description: '',
    company_size: '',
    key_assets_company: '',
    language: 'english',
  });


  const [generating, setGenerating] = useState(false);
  const [pdfData, setPdfData] = useState<string | null>(null);
  const [pdfDataText, setPdfDataText] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedPolicyType, setSelectedPolicyType] = useState<string>('');
  const [isWideLayout, setIsWideLayout] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check container width and update layout
  useEffect(() => {
    const checkWidth = () => {
      if (containerRef.current) {
        setIsWideLayout(containerRef.current.offsetWidth >= 768);
      }
    };

    // Initial check
    checkWidth();

    // Create ResizeObserver to watch for container size changes
    const resizeObserver = new ResizeObserver(checkWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Cleanup
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePolicyTypeChange = (value: string) => {
    setSelectedPolicyType(value);
    
    if (value !== 'custom') {
      // Set the policy name based on the selection
      const selectedPolicy = predefinedPolicies.find(p => p.value === value);
      if (selectedPolicy) {
        setFormData(prev => ({
          ...prev,
          policy_name: selectedPolicy.label
        }));
      }
    } else {
      // Clear the policy name for custom input
      setFormData(prev => ({
        ...prev,
        policy_name: ''
      }));
    }
  };

  useEffect(() => {
    if (policy) {
      handlePolicyTypeChange(policy);
    }
  }, [policy]);


  const handleGenerateClick = async () => {
    try {
      setGenerating(true);
      axios.defaults.baseURL = process.env.NEXT_POLICY_API;
      const response = await axios.post<{ pdfBase64: string, policy: string }>(
        '/api/generate-policy',
        formData
      );
      setPdfData(response.data.pdfBase64);
      setPdfDataText(response.data.policy);
      setShowDialog(true);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF');
    } finally {
      setGenerating(false);
    }
  };

  const handleDownloadPDF = () => {
    if (!pdfData) return;

    try {
      const byteCharacters = atob(pdfData);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/pdf' });

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${formData.policy_name || 'policy'}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('PDF Download Error:', error);
      alert('Failed to download PDF');
    }
  };

  return (
    <div ref={containerRef}>
      <div className="flex flex-col gap-y-4">
        {/* Policy Type and Name section */}
        {isWideLayout ? (
          // Wide layout - side by side
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="policy_type">Policy Type</Label>
              <Select 
                onValueChange={handlePolicyTypeChange}
                value={selectedPolicyType}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select policy type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Policy Types</SelectLabel>
                    {predefinedPolicies.map((policy) => (
                      <SelectItem key={policy.value} value={policy.value}>
                        {policy.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            {selectedPolicyType === 'custom' ? (
              <div className="space-y-2">
                <Label htmlFor="policy_name">Custom Policy Name</Label>
                <Input
                  id="policy_name"
                  name="policy_name"
                  value={formData.policy_name}
                  onChange={handleInputChange}
                  placeholder="Enter custom policy name"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="company_name">Company Name</Label>
                <Input
                  id="company_name"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleInputChange}
                  placeholder="Enter company name"
                />
              </div>
            )}
          </div>
        ) : (
          // Narrow layout - stacked
          <>
            <div className="space-y-2">
              <Label htmlFor="policy_type">Policy Type</Label>
              <Select 
                onValueChange={handlePolicyTypeChange}
                value={selectedPolicyType}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select policy type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Policy Types</SelectLabel>
                    {predefinedPolicies.map((policy) => (
                      <SelectItem key={policy.value} value={policy.value}>
                        {policy.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            {selectedPolicyType === 'custom' && (
              <div className="space-y-2">
                <Label htmlFor="policy_name_narrow">Policy Name</Label>
                <Input
                  id="policy_name_narrow"
                  name="policy_name"
                  value={formData.policy_name}
                  onChange={handleInputChange}
                  placeholder="Enter policy name"
                />
              </div>
            )}
          </>
        )}

        {/* Company details section */}
        {isWideLayout ? (
          <>
            {/* Wide layout - Company Name shown above, only show here if Custom Policy selected */}
            {selectedPolicyType === 'custom' && (
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company_name_custom">Company Name</Label>
                  <Input
                    id="company_name_custom"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleInputChange}
                    placeholder="Enter company name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company_size">Company Size</Label>
                  <Input
                    id="company_size"
                    type="number"
                    name="company_size"
                    value={formData.company_size}
                    onChange={handleInputChange}
                    placeholder="Enter company size"
                  />
                </div>
              </div>
            )}
            
            {selectedPolicyType !== 'custom' && (
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company_size">Company Size</Label>
                  <Input
                    id="company_size"
                    type="number"
                    name="company_size"
                    value={formData.company_size}
                    onChange={handleInputChange}
                    placeholder="Enter company size"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    placeholder="Enter industry"
                  />
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-6">
              {selectedPolicyType === 'custom' ? (
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    placeholder="Enter industry"
                  />
                </div>
              ) : null}
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter location"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="key_assets_company">Key Assets</Label>
                <Input
                  id="key_assets_company"
                  name="key_assets_company"
                  value={formData.key_assets_company}
                  onChange={handleInputChange}
                  placeholder="Enter key assets"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Narrow layout */}
            <div className="space-y-2">
              <Label htmlFor="company_name_narrow">Company Name</Label>
              <Input
                id="company_name_narrow"
                name="company_name"
                value={formData.company_name}
                onChange={handleInputChange}
                placeholder="Enter company name"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company_size_narrow">Company Size</Label>
                <Input
                  id="company_size_narrow"
                  type="number"
                  name="company_size"
                  value={formData.company_size}
                  onChange={handleInputChange}
                  placeholder="Enter company size"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry_narrow">Industry</Label>
                <Input
                  id="industry_narrow"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  placeholder="Enter industry"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location_narrow">Location</Label>
                <Input
                  id="location_narrow"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter location"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="key_assets_company_narrow">Key Assets</Label>
                <Input
                  id="key_assets_company_narrow"
                  name="key_assets_company"
                  value={formData.key_assets_company}
                  onChange={handleInputChange}
                  placeholder="Enter key assets"
                />
              </div>
            </div>
          </>
        )}

        {/* Description field - Same on both layouts */}
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className={`resize-none ${isWideLayout ? 'min-h-32' : ''}`}
            placeholder="Enter description"
          />
        </div>

        {/* Language and Generate button */}
        {isWideLayout ? (
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2 w-full">
              <Label htmlFor="language">Language</Label>
              <Select 
                onValueChange={(value: 'english' | 'arabic') => {
                  setFormData({ ...formData, language: value })
                }} 
                defaultValue={formData.language}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Languages</SelectLabel>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="arabic">Arabic</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-end">
              <Button
                className="w-full"
                onClick={handleGenerateClick}
                disabled={generating}
              >
                {generating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Policy'
                )}
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div>
              <Select 
                onValueChange={(value: 'english' | 'arabic') => {
                  setFormData({ ...formData, language: value })
                }} 
                defaultValue={formData.language}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Languages</SelectLabel>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="arabic">Arabic</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            <Button
              className="w-full mt-2"
              onClick={handleGenerateClick}
              disabled={generating}
            >
              {generating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Policy'
              )}
            </Button>
          </>
        )}
        <p className="text-sm text-gray-500 my-2">
          Disclaimer: It can make mistakes. Please review answers, and give feedback.
        </p>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-4xl h-[80vh]" aria-describedby='policy-description'>
          <DialogHeader>
            <DialogTitle>Generated Policy</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-full pr-4">
            {pdfDataText && (
              <div className="space-y-4">
                <div className="prose prose-sm dark:prose-invert">
                  <pre className="whitespace-pre-wrap font-sans">
                    <Markdown>{pdfDataText}</Markdown>
                  </pre>
                </div>
              </div>
            )}
          </ScrollArea>
          {pdfData && (
            <div className="flex justify-end mt-4">
              <Button
                onClick={handleDownloadPDF}
                className="bg-primary hover:bg-primary/90"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}