'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import { usePolicyGenContext } from '@/context/policyGenerator';
import { redirect } from 'next/navigation';
import Footer from '@/sections/Footer';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const PolicyGenerator = () => {

  const {setPolicy} = usePolicyGenContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Feedback submitted:', formData);
  };

  const policies = [
    { name: "Acceptable Use Policy", status: "generate" },
    { name: "Access Control Policy", status: "generate" },
    { name: "Backup Management Policy", status: "generate" },
    { name: "Business Continuity Policy", status: "generate" },
    { name: "Change Management Policy", status: "generate" },
    { name: "Continuous Improvement Policy", status: "generate" },
    { name: "Data Retention Policy", status: "generate" },
    { name: "Encryption Policy", status: "generate" },
    { name: "Information Security Policy", status: "generate" },
    { name: "Information Classification Policy", status: "generate" },
    { name: "Information Security Awareness Policy", status: "generate" },
    { name: "Password Policy", status: "generate" },
    { name: "Application Privacy Policy", status: "generate" },
    { name: "AI Usage Security Policy", status: "generate" },
    { name: "ISMS Scope", status: "generate" },
    { name: "Risk Management Policy", status: "generate" },
    { name: "Business Impact Analysis", status: "generate" },
    { name: "Business Continuity Plan", status: "generate" },
    { name: "Network Security Policy", status: "generate" },
    { name: "Remote Working Security Policy", status: "generate" },
    { name: "Patch Management Policy", status: "generate" },
    { name: "Physical Security Policy", status: "generate" },
    { name: "Secure Development Policy", status: "generate" },
    { name: "Asset Management Policy", status: "generate" },
    { name: "Bring Your Own Device Policy", status: "generate" },
    { name: "Information Transfer Policy", status: "generate" },
    { name: "Logging and Monitoring Policy", status: "generate" },
    { name: "Software Acquisition Policy", status: "generate" }
  ];

  function handlePolicyGeneration(policyName: string) {
    setPolicy(policyName);
    redirect('/generator');
  }


  return (
    <div className='w-full relative overflow-auto'>
      <div className="max-w-6xl mx-auto p-6 w-full">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Generator</h1>
        </div>

        {/* Policy List */}
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            {policies.map((policy, index) => (
              <div
                key={policy.name}
                className={`flex items-center justify-between p-4 ${index !== policies.length - 1 ? 'border-b' : ''
                  }`}
              >
                <span>{policy.name}</span>
                  <Button
                    variant={policy.status === 'edit' ? 'secondary' : 'default'}
                    className={
                      policy.status === 'edit'
                        ? 'bg-primary text-accent-foreground hover:bg-primary-foreground'
                        : 'bg-muted text-accent-foreground hover:bg-background'
                    }
                    onClick={() => {
                          handlePolicyGeneration(policy.name.toLowerCase().split(' ').join('-'));
                        }}
                  >
                    {policy.status === 'edit' ? 'Edit' : 'Generate'}
                  </Button>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className='my-20'>
          <p className="text-4xl text-center py-4">
            Need some adjustments ?
          </p>
          <Link href={'/dashboard/default-model'}>
            <Button
              className="mt-4 h-10 mx-auto block border-primary bg-muted text-accent-foreground hover:bg-primary text-base px-8"
              variant="default">
              Update your policies with the policy assistant
            </Button>
          </Link>
        </div>
        <div className='text-center'>
          <p className="text-base my-4 text-muted-foreground">
            Help us improve AIPolicyPro for you!
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="default" 
                  className="hover:text-primary font-bold text-accent-foreground bg-transparent"
                >
                  Share your feedback here.
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-background text-foreground border-border">
                <DialogHeader>
                  <DialogTitle className="text-foreground">
                    Share Your Feedback
                  </DialogTitle>
                </DialogHeader>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="bg-input text-foreground border-border"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email"
                        className="bg-input text-foreground border-border"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-foreground">Feedback Category</Label>
                    <Select 
                      name="category"
                      onValueChange={(value) => setFormData(prev => ({...prev, category: value}))}
                    >
                      <SelectTrigger className="bg-input text-foreground border-border">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover text-popover-foreground border-border">
                        <SelectItem value="general">General Feedback</SelectItem>
                        <SelectItem value="bug">Report a Bug</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Your Message</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your feedback here..."
                      className="bg-input text-foreground border-border min-h-[120px]"
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <Button 
                      type="button" 
                      variant="secondary" 
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Submit Feedback
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PolicyGenerator;