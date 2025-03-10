'use client'

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import Logo from '@/components/Logo';
import { usePolicyGenContext } from '@/context/policyGenerator';
import { redirect } from 'next/navigation';

const PolicyGenerator = () => {

  const {setPolicy} = usePolicyGenContext();

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

  const footerSections = [
    {
      title: "Support",
      links: [
        { text: "Troubleshooting", href: "#" },
        { text: "Contact", href: "#" },
        { text: "Refunds", href: "#" },
        { text: "Report Security Issue", href: "#" },
        { text: "Roadmap", href: "#" },
        { text: "Release notes", href: "#" },
      ]
    },
    {
      title: "Products",
      links: [
        { text: "Policy Generator", href: "#" },
        { text: "Risk Assessment", href: "#" },
        { text: "ISO 27001 Copilot", href: "#" },
        { text: "ISO 27001 Course", href: "#" },
        { text: "Partner Programme", href: "#" },
        { text: "More services", href: "#" },
      ]
    },
    {
      title: "Legal & Security",
      links: [
        { text: "Acceptable use policy", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Trust Center", href: "#" },
        { text: "Terms and Conditions", href: "#" },
        { text: "Data Processing Agreement", href: "#" },
        { text: "Licensing Agreement", href: "#" },
      ]
    }
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
        <Button
          className="mt-4 mx-auto block border-primary text-primary hover:bg-primary hover:text-accent-foreground px-12"
          variant="outline">
          Upgrade
        </Button>
        <div className='my-20'>
          <p className="text-4xl text-center py-4">
            Need some adjustments ?
          </p>
          <Button
            className="mt-4 h-10 mx-auto block border-primary bg-muted text-accent-foreground hover:bg-primary text-base px-8"
            variant="default">
            Update your policies with the policy assistant
          </Button>
        </div>
        <div className='text-center'>
          <p className="text-base my-12 text-muted-foreground">
            Help us improve AIPolicyPro for you!
            <Link href="/dashboard/generate" className="hover:text-secondary font-bold text-accent-foreground"> Share your feedback here.</Link>
          </p>
        </div>
        <footer className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-4 gap-8">
            {/* Logo Section */}
            <div>
              <div className="flex items-center gap-2">
                <Logo />
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-accent-foreground mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-accent-foreground transition-colors"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="mt-12">
            <p className="text-muted-foreground">© 2024 AIPollicyPro. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PolicyGenerator;