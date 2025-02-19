'use client';

import React, { useState } from 'react';
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

export default function PolicyGeneratorForm() {
  const [formData, setFormData] = useState<PolicyFormData>({
    policy_name: '',
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
    <div>
      <div className="flex flex-col gap-y-4">
        <div className="space-y-2">
          <Label htmlFor="policy_name">Policy Name</Label>
          <Input
            id="policy_name"
            name="policy_name"
            value={formData.policy_name}
            onChange={handleInputChange}
            placeholder="Enter policy name"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
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

        <div className="grid grid-cols-2 gap-4">
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
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="resize-none"
            placeholder="Enter description"
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

        <Select onValueChange={(value: 'english' | 'arabic') => {
          setFormData({ ...formData, language: value })
        }} defaultValue={formData.language}>
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