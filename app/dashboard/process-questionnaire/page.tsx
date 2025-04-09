'use client';

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud } from "lucide-react";
import axios from 'axios';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function DocumentUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
                                context: string;
                                question: string;
                                line_number: number;
                                section: string;
                              }[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setError(null);
    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const { data } = await axios.post('/api/process-questionnaire', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setShowModal(true);
      setResult(data.questions);
    } catch (error) {
      console.error('Upload failed:', error);
      setError('Failed to extract text.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-background relative overflow-auto">
      <h1 className="text-3xl text-primary font-bold text-center mb-20 mt-8">Document Processing Engine for <br />Security Questionnaire Automation</h1>
      <div className="flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-2xl border-none py-4 px-2">
          <CardContent className='pb-1 mx-auto'>
            <h6 className="font-bold mb-1 text-right">Upload Document</h6>
            <Input type="file" accept=".pdf,.docx,.xlsx,.png,.jpg" onChange={handleFileChange} className="mb-4 border-2 border-primary" />
            <Button onClick={handleUpload} className="w-full flex items-center justify-center gap-2" disabled={loading}>
              <UploadCloud className="w-4 h-4" />
              {loading ? 'Uploading...' : 'Extract Questions'}
            </Button>
          </CardContent>
          {error && (
            <div className="mt-4 p-3 bg-red-900/50 text-red-200 rounded-md">
              {error}
            </div>
          )}
        </Card>
      </div>
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-hidden flex flex-col">
          <DialogHeader className='flex-row justify-between items-center'>
            <DialogTitle className='text-lg leading-tight mr-4'>
              Extracted Questions
            </DialogTitle>
          </DialogHeader>
          
          {result && (
            <div className="mt-2">
              <pre className="whitespace-pre-wrap mt-2 rounded text-sm">
                {result.map((item, index) => (
                  <p key={index} className='py-1'>
                    <strong className='font-medium'>Q{index+1}.</strong> {item.question}
                  </p>
                ))}
              </pre>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
