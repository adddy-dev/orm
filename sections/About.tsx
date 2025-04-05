import React from 'react'
import { 
  Zap, 
  SlidersVertical, 
  ShieldCheck, 
  RefreshCcw, 
  FileChartColumnIncreasing, 
  Users, 
  Check
} from "lucide-react";
import Image from 'next/image';

const FEATURES = [
  {
    icon: <Zap className="w-6 h-6 text-secondary" />,
    title: "AI-Powered Generation",
    description: "Create comprehensive ISMS policies in minutes using advanced AI algorithms tailored for Middle Eastern compliance requirements."
  },
  {
    icon: <SlidersVertical className="w-6 h-6 text-secondary" />,
    title: "Customization Engine",
    description: "Easily customize policies to match your organization's specific needs with intelligent suggestions and templates."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-secondary" />,
    title: "Compliance Verification",
    description: "Automatic compliance checking against regional standards and international best practices."
  },
  {
    icon: <RefreshCcw className="w-6 h-6 text-secondary" />,
    title: "Auto-Updates",
    description: "Stay current with automatic policy updates based on evolving security standards and regulations."
  },
  {
    icon: <FileChartColumnIncreasing className="w-6 h-6 text-secondary" />,
    title: "Analytics Dashboard",
    description: "Track and monitor your policy implementation progress with detailed analytics and insights."
  },
  {
    icon: <Users className="w-6 h-6 text-secondary" />,
    title: "Collaboration Tools",
    description: "Enable team collaboration with role-based access control and version management features."
  }
];

const About = () => {

  const features = [
    {
      "head": "Instant AI-Generated Information Security Policies",
      "content": "Customized to your business needs"
    },
    {
      "head": "Policy Gap Analysis Tool",
      "content": "Compare your existing policies against global and regional compliance requirements"
    },
    {
      "head": "Risk Assessment for Data Transfers",
      "content": "Ensure compliance when handling personal data across borders"
    },
    {
      "head": "Third-Party Security Questionnaire",
      "content": "Complete the Third-Party/Vendor Security Questionnaire fast and accurate"
    },
    {
      "head": "Your Data Stays Secure",
      "content": "Built with privacy and security at its core"
    }
  ]

  return (
    <section className='bg-foreground' id='about'>
      <div className="w-full lg:pl-[4%] text-background flex flex-col md:flex-row items-center">
        <div className='mx-auto px-6 py-12 md:py-16 lg:w-[55%]'>
          <h2 className="text-[32px] md:text-4xl font-bold mb-8 md:mb-6 leading-[40px] md:leading-tight">
            <span className="text-primary">Al-Powered ISMS Policies & Compliance Tools for the Region! </span>
          </h2>

          <p className="md:text-lg max-w-base mb-8 md:mb-7 leading-tight font-medium">
            Streamline your security documentation with Al-driven precision. AlPolicyPro provides fast, accurate, and fully compliant ISMS policies tailored to local regulations and international standards-ensuring your business stays secure and audit-ready. 
          </p>

          <div className="grid grid-cols-1 gap-2 md:gap-x-12 md:gap-y-3 max-w-xl">
          {features.map((item, index) => (
            <p key={index}>
              <strong className='inline'><Check size={20} className='m-1 inline'/>{item.head}</strong> - 
              <span>
                {item.content}
              </span>
            </p>
          ))}
          </div>
          <p className='font-bold mt-8'>Get Started Today & Stay Ahead of Compliance!</p>
        </div>
        <div className="md:mb-0 mb-10 pl-16 md:pl-0 flex justify-end lg:w-[34%]">
          <Image
            width={300}
            height={300}
            src="/featImage.png"
            alt="Hand"
            className='object-cover h-auto w-full' />
        </div>
      </div>
    </section>
  )
}

export default About
