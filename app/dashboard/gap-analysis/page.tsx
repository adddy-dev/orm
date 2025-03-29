'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Loader2, Download } from 'lucide-react';
import axios from 'axios';
import Markdown from 'react-markdown';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Document, Page, pdf, StyleSheet, Text, View } from '@react-pdf/renderer';
import markdownToText from 'markdown-to-text';

const GapAnalysisTool = () => {
  // State management
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [standard1, set1] = useState("");
  const [standard2, set2] = useState("");
  const [industry, setIndustry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState("");

  // Predefined options for dropdowns
  const internationalStandards = [
    { value: null, label: 'Select International Standard' },
    { value: 'iso-27001', label: 'ISO 27001:2022' },
    { value: 'iso-27701', label: 'ISO 27701' },
    { value: 'nist-csf', label: 'NIST Cybersecurity Framework' },
    { value: 'nist-800-53', label: 'NIST 800-53' },
    { value: 'cobit-2019', label: 'COBIT 2019' },
    { value: 'soc-2', label: 'SOC 2' },
    { value: 'gdpr', label: 'GDPR' }
  ];

  const gccRegionalFrameworks = [
    { value: null, label: 'Select GCC Regional Framework' },
    { value: 'sama-csf', label: 'SAMA Cyber Security Framework' },
    { value: 'nca-ecc', label: 'NCA Essential Cybersecurity Controls' },
    { value: 'saudi-pdpl', label: 'Saudi Personal Data Protection Law' },
    { value: 'uae-ias', label: 'UAE Information Assurance Standards' },
    { value: 'qatar-niaf', label: 'Qatar National Information Assurance Framework' }
  ];

  const industryStandards = [
    { value: null, label: 'Select Industry Standard' },
    { value: 'hipaa', label: 'HIPAA' },
    { value: 'swift-csp', label: 'SWIFT CSP' },
    { value: 'csa-controls', label: 'Cloud Security Alliance Controls' },
    { value: 'saudi-healthcare', label: 'Saudi NCA Healthcare Sector Controls' }
  ];

  // File input handler
  const handleFileChange = (event: React.ChangeEvent) => {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    setSelectedFile(file || null);
  };

  // Gap analysis submission
  const submitGapAnalysis = async () => {
    if (!selectedFile || (!standard1 && !standard2 && !industry)) {
      setError("Please select a file and at least one of dropdown options");
      return;
    }
    
    setIsLoading(true);
    setError("");
    
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('standard1', standard1);
    formData.append('standard2', standard2);
    formData.append('industry', industry);
    
    try {
      const { data: response } = await axios.post('/api/gap-analysis', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      if (!response.success) {
        throw new Error(`Error: ${response.status}`);
      }
      
      setAnalysisResult(response.data);
      setShowModal(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(`Failed to perform gap analysis: ${err.message}`);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontSize: 12,
      lineHeight: 1.5,
    },
    header: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    section: {
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 14,
      marginBottom: 5,
      fontWeight: 'bold',
    },
    text: {
      marginBottom: 5,
    }
  });

  // Download PDF handler
  const downloadPdfReport = async () => {
    if (!analysisResult) {
      setError("No analysis result to download.");
      return;
    }

    try {

      const plainText = markdownToText(analysisResult);

      // Create PDF Document
      const PdfDocument = (
        <Document>
          <Page size="A4" style={styles.page}>
            <Text style={styles.header}>Gap Analysis Report</Text>
            
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Standards Compared</Text>
              <Text style={styles.text}>
                International Standard: {internationalStandards.find(s => s.value === standard1)?.label}
              </Text>
              <Text style={styles.text}>
                Regional Framework: {gccRegionalFrameworks.find(s => s.value === standard2)?.label}
              </Text>
              <Text style={styles.text}>
                Industry Standard: {industryStandards.find(s => s.value === industry)?.label}
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Analysis Findings</Text>
              <Text style={styles.text}>
                {plainText}
              </Text>
            </View>
          </Page>
        </Document>
      );

      // Generate PDF Blob
      const blobInstance = await pdf(PdfDocument).toBlob();
      
      // Create download link
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blobInstance);
      link.download = `Gap_Analysis_${Date.now()}.pdf`;
      link.click();
    } catch (err) {
      console.error(err);
      setError(`Failed to generate PDF: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  };

  return (
    <section className="bg-background relative overflow-auto">
      <div className="w-full max-w-6xl mx-auto px-8">
        <h1 className="text-3xl text-primary font-bold text-center mb-2 mt-8">Gap Analysis Tool</h1>
        <p className="text-muted-foreground text-center mb-12">Analyze and Compare Cybersecurity Frameworks</p>
        
        <div className="bg-card rounded-lg p-8 shadow-lg mt-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* File Input Section */}
            <div>
              <Label htmlFor="file-upload" className="text-xl mb-4 font-semibold block">
                Upload Policy Document
              </Label>
              <Input 
                id="file-upload"
                type="file" 
                className="w-auto"
                onChange={handleFileChange}
              />
              {selectedFile && (
                <p className="text-sm text-muted-foreground mt-2">
                  Selected: {selectedFile?.name}
                </p>
              )}
            </div>
            
            {/* Dropdowns Section */}
            <div className="space-y-4">
              <div>
                <h2 className="text-xl mb-4 font-semibold">International Standard</h2>
                <Select value={standard1} onValueChange={set1}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Standard" />
                  </SelectTrigger>
                  <SelectContent>
                    {internationalStandards.map(option => (
                      <SelectItem key={option.value} value={option.value as string}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h2 className="text-xl mb-4 font-semibold">GCC Regional Framework</h2>
                <Select value={standard2} onValueChange={set2}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Framework" />
                  </SelectTrigger>
                  <SelectContent>
                    {gccRegionalFrameworks.map(option => (
                      <SelectItem key={option.value} value={option.value as string}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h2 className="text-xl mb-4 font-semibold">Industry Standard</h2>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Industry Standard" />
                  </SelectTrigger>
                  <SelectContent>
                    {industryStandards.map(option => (
                      <SelectItem key={option.value} value={option.value as string}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {error && (
            <div className="mt-4 p-3 bg-red-900/50 text-red-200 rounded-md">
              {error}
            </div>
          )}
          
          <div className="mt-8 flex justify-center">
            <Button 
              onClick={submitGapAnalysis} 
              disabled={isLoading}
              className="px-8 py-6 bg-tertiary hover:bg-tertiary-foreground text-lg text-foreground"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Analyzing...
                </>
              ) : "Perform Gap Analysis"}
            </Button>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 my-2">
          Disclaimer: Results may require professional interpretation.
        </p>
      </div>
      
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-hidden flex flex-col">
          <DialogHeader className='flex-row justify-between items-center'>
            <div>
              <DialogTitle className='text-lg leading-tight mr-4'>
                Gap analysis between {selectedFile?.name.slice(0,-4)} and Policy Frameworks
              </DialogTitle>
            </div>
            <Button
              onClick={downloadPdfReport}
              variant="default"
              className="flex items-center gap-2 mr-8 hover:bg-muted-foreground"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </DialogHeader>
          
          {analysisResult && (
            <div className="mt-1 bg-card p-4 rounded-md overflow-auto flex-1" style={{ scrollbarWidth: 'none'}}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg text-tertiary">Analysis Findings</h3>
              </div>
              <div className="text-muted-foreground">
                <Markdown>{analysisResult}</Markdown>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default GapAnalysisTool;