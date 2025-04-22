import React from 'react'
import { 
  FileText,
  Globe,
  Shield,
  Server
} from "lucide-react";

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
      "head": "Policy Gap Analysis Tool",
      "content": "Compare your existing policies against global and regional compliance requirements",
      "icon": <Globe size={34} className="text-primary" />
    },
    {
      "head": "Third-Party Security Questionnaire",
      "content": "Complete the Third-Party/Vendor Security Questionnaire fast and accurate",
      "icon": <Server size={34} className="text-primary" />
    },
  ];

  return (
    <section className='bg-background text-foreground overflow-x-hidden' id='about'>
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className='mx-auto xl:px-16 px-4 py-12 md:py-20'>
          <h2 className="text-[32px] md:text-4xl font-bold mb-8 md:mb-6 leading-[40px] md:leading-tight">
            <span className="text-primary">AI-Powered ISMS Policies & Compliance Tools for the Region!</span>
          </h2>

          <p className="md:text-lg max-w-screen-xl mb-8 md:mb-7 leading-tight font-medium">
            Streamline your security documentation with AI-driven precision. AlPolicyPro provides fast, accurate, and fully compliant ISMS policies tailored to local regulations and international standards—ensuring your business stays secure and audit-ready.
          </p>

          {/* <div className="relative w-full py-10 overflow-x-hidden cover-shade-x"> */}
          {/* <div className="flex flex-wrap w-full gap-x-2"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {features.map((item, index) => (
              <div className='flex items-center moving-border p-0.5 relative overflow-hidden flex-1 min-w-[250px] rounded-lg' key={index}>
                <div className="bg-card rounded-lg shadow-lg p-4 flex h-full flex-1 flex-col items-start gap-4 border relative z-10">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.head}</h3>
                    <p className="text-sm text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* </div> */}

          <p className='font-bold mt-8  text-right'>Get Started Today & Stay Ahead of Compliance!</p>
        </div>
      </div>
    </section>
  )
}

export default About;
