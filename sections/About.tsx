import React from 'react'
import { 
  Check,
  FileText,
  Globe,
  Shield,
  Server,
  Lock
} from "lucide-react";
import Image from 'next/image';

const About = () => {

  const features = [
    {
      "head": "Instant AI-Generated Information Security Policies",
      "content": "Customized to your business needs",
      "icon": <FileText size={34} className="text-primary" />
    },
    {
      "head": "Risk Assessment for Data Transfers",
      "content": "Ensure compliance when handling personal data across borders",
      "icon": <Shield size={34} className="text-primary" />
    },
    {
      "head": "Third-Party Security Questionnaire",
      "content": "Complete the Third-Party/Vendor Security Questionnaire fast and accurate",
      "icon": <Server size={34} className="text-primary" />
    },
    {
      "head": "Policy Gap Analysis Tool",
      "content": "Compare your existing policies against global and regional compliance requirements",
      "icon": <Globe size={34} className="text-primary" />
    },
    {
      "head": "Your Data Stays Secure",
      "content": "Built with privacy and security at its core",
      "icon": <Lock size={34} className="text-primary" />
    },
  ];

  return (
    <section className='bg-background text-foreground' id='about'>
      <div className="w-full lg:pl-[4%] flex flex-col md:flex-row items-center">
        <div className='mx-auto px-6 py-12 md:py-20 lg:w-[65%]'>
          <h2 className="text-[32px] md:text-4xl font-bold mb-8 md:mb-6 leading-[40px] md:leading-tight">
            <span className="text-primary">AI-Powered ISMS Policies & Compliance Tools for the Region!</span>
          </h2>

          <p className="md:text-lg max-w-base mb-8 md:mb-7 leading-tight font-medium">
            Streamline your security documentation with AI-driven precision. AlPolicyPro provides fast, accurate, and fully compliant ISMS policies tailored to local regulations and international standards—ensuring your business stays secure and audit-ready.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {features.map((item, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg p-4 flex flex-col items-start gap-4 border max-h-fit hover:border-secondary">
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.head}</h3>
                  <p className="text-sm text-muted-foreground">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          <p className='font-bold mt-8  text-right'>Get Started Today & Stay Ahead of Compliance!</p>
        </div>

        <div className="md:mb-0 mb-10 pl-16 md:pl-0 flex justify-end lg:w-[32%]">
          <Image
            width={400}
            height={400}
            src="/featImage.png"
            alt="Hand"
            className='object-cover h-auto w-full invert' />
        </div>
      </div>
    </section>
  )
}

export default About;
