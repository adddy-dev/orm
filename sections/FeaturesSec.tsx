import Image from 'next/image'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  SlidersVertical, 
  ShieldCheck, 
  RefreshCcw, 
  FileChartColumnIncreasing, 
  Users 
} from "lucide-react";

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

const FeaturesSec = () => {

  const features = [
    "Get policies instantly",
    "Tailored to your business",
    "No Hassle, Just Results",
    "Your data stays safe",
  ]

  const feat = [
    {
       main: 'Enhanced Efficiency',
       para: 'Streamlines security management, saving valuable time and resources for SMEs and larger organizations.',
       vid: '/vid1.mp4',
    },
    {
       main: 'Seamless Security',
       para: 'Experience streamlined security management with our solution, engineered for optimal efficiency.',
       vid: '/vid1.mp4',
    },
    {
       main: 'Revew, Edit & Update',
       para: 'Automated review of your existing security policies and get a detailed gap analysis',
       vid: '/vid1.mp4',
    },
    {
       main: 'Tailored Policies',
       para: 'Our AI-powered generator crafts policies specific to your needs, ensuring compliance and a streamlined creation process.',
       vid: '/vid1.mp4',
    }
 ]

  return (
    <section className='bg-foreground'>
      <div className="w-full text-background min-h-screen flex flex-col md:flex-row items-center">
        <div className='mx-auto px-6 py-12 md:py-24'>
          <h2 className="text-[32px] md:text-[42px] font-bold mb-8 md:mb-10 leading-[40px] md:leading-[50px]">
            Transform your<br />
            <span className="text-primary">Information Security Policy docs</span><br />
            with AI Support!
          </h2>

          <p className="text-[18px] md:text-[22px] text-gray-300 max-w-xl mb-8 md:mb-16 leading-tight text-primary font-medium">
            Elevate your security documentation with the power of AI.
            Our platform integrates intelligent AI support to create,
            customize, and enhance your policies, saving you time and
            ensuring precision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-xl">
            {features.map((f, i) => (
              <div className="flex items-center" key={i}>
                <div className="border-[10px] md:border-[12px] border-y-6 md:border-y-8 border-transparent border-l-background"></div>
                <span className='text-primary text-[18px] md:text-[19px]'>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:mb-0 mb-10 pl-16 md:pl-0">
          <Image
            src="/featImage.png"
            alt="Hand"
            width={600} height={500}
            className='object-cover h-auto max-w-full' />
        </div>
      </div>
      {/* <div className='w-full max-w-[1480px] text-background min-h-screen py-10 mx-auto'>
        <h1 className='text-primary text-[42px] text-center font-bold'>AI-Enabled Information Security Policy Generator </h1>
        <div className='flex flex-col md:flex-row items-center justify-center relative mx-auto my-48 md:my-24 min-h-[328px] z-10'
          style={{
            transformStyle: 'preserve-3d',
            perspective: '500px',
            transformOrigin: 'center center',
          }}> 
          {feat.map((feat, index) => (
            <div key={index}
              className={`max-w-[1020px] min-h-[328px] bg-background rounded-[40px] border-4 gap-5 border-black flex justify-between items-center md:flex-row flex-col overflow-hidden absolute left-1/2 -translate-x-1/2 !w-[80%] !md:w-[1020px]`}
              style={{
                transform: `translateZ(${-(index * 10)}px) translateX(calc(-50% + ${index * 24}px)) translateY(${index * 16}px)`,
                animation: `moveCard1 16s ease-in-out infinite`,
                animationDelay: `${index * 4}s`
              }}>
              <div className='w-full md:w-1/2 py-5 md-py-0 h-full min-h-[200px] flex flex-col justify-center items-center text-center px-6'>
                <h1 className='text-primary text-[28px] md:text-[32px] font-bold'>{feat.main}</h1>
                <p className='text-2xl md:text-[27px] text-foreground'>{feat.para}</p>
              </div>
              <Image 
                width={600}
                height={400}
                src='/3.jpg' 
                className='w-full md:w-1/2 h-full max-h-[328px] object-cover border-4 border-black rounded-[40px] block' 
                alt='featu' />
            </div>
          ))}
        </div>
      </div> */}
      <div className="bg-background pt-14 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-primary mb-4">
              Powerful Features for Your Security Policies
            </h1>
            <p className="text-base text-muted-foreground">
              Leverage AI-powered tools to streamline your ISMS documentation process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg hover:border-secondary transition-all duration-300"
              >
                <CardHeader className="flex space-y-4 pb-2">
                  <span className="w-min bg-muted-foreground p-3 rounded-full">
                    {feature.icon}
                  </span>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-[15px]">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSec
