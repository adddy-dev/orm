import React from 'react'
import { 
  Zap, 
  SlidersVertical, 
  ShieldCheck, 
  RefreshCcw, 
  FileChartColumnIncreasing, 
  Users 
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
    "Get policies instantly",
    "Tailored to your business",
    "No Hassle, Just Results",
    "Your data stays safe",
  ]

  return (
    <section className='bg-foreground' id='about'>
      <div className="w-full lg:pl-[4%] text-background flex flex-col md:flex-row items-center">
        <div className='mx-auto px-6 py-12 md:py-20 lg:w-[55%]'>
          <h2 className="text-[32px] md:text-4xl font-bold mb-8 md:mb-10 leading-[40px] md:leading-tight">
            <span className="text-primary">Information and Cyber Security Docs</span><br />
            with AI Support!
          </h2>

          <p className="md:text-lg max-w-base mb-8 md:mb-10 leading-tight text-primary font-medium">
            Elevate your security documentation with the power of AI.
            Our platform integrates intelligent AI support to create,
            customize, and enhance your policies, saving you time and
            ensuring precision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-6 max-w-xl">
            {features.map((f, i) => (
              <div className="flex items-center" key={i}>
                <div className="border-[10px] md:border-[.7rem] border-y-6 md:border-y-8 border-transparent border-l-background"></div>
                <span className='text-primary text-[18px] md:text-lg'>{f}</span>
              </div>
            ))}
          </div>
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
