import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';

const FAQSection = () => {
  const faqs = [
    {
      "question": "Why not use ChatGPT directly for policy generation?",
      "answer": "While ChatGPT is a powerful tool, creating comprehensive security policies requires expertise and time. Our solution streamlines this process by combining AI capabilities with industry knowledge. We've refined the policy generation process to deliver professionally formatted, business-specific documents, saving you countless hours of template creation and refinement."
    },
    {
      "question": "How reliable are these AI-generated policies?",
      "answer": "Our solution goes beyond simple text generation. The system analyzes your specific business context and applies industry best practices to create tailored policies. Each policy undergoes rigorous quality checks through our specialized AI models. While we always recommend a final review, our policies are crafted to meet professional standards and compliance requirements."
    },
    {
      "question": "What security measures protect my data?",
      "answer": "We implement enterprise-grade security measures including:<br />• Multi-factor authentication for all accounts<br />• AES-256 encryption for data at rest<br />• Regular third-party security audits<br />• Continuous security monitoring<br />• AWS RDS secure infrastructure<br />• Comprehensive security controls across all systems"
    },
    {
      "question": "Do you offer lifetime access?",
      "answer": "Yes! Besides our subscription model, we offer a one-time payment option giving you unlimited access to generate documents at your own pace. Contact our sales team for details about this option."
    },
    {
      "question": "What key challenge does your service address?",
      "answer": "Many organizations struggle with creating professional security documentation, especially during ISO 27001 preparation. Rather than spending thousands on consultants or struggling with generic templates, our service helps you create customized, professional policies quickly and cost-effectively. We bridge the gap between having no documentation and achieving professional-grade security policies."
    },
    {
      "question": "What's the typical policy creation timeline?",
      "answer": "The process is remarkably efficient:<br />• Form completion: 5-10 minutes<br />• Policy generation: Under 2 minutes<br />• Total time investment: Approximately 15 minutes per policy"
    },
    {
      "question": "Will these policies guarantee ISO 27001 compliance?",
      "answer": "No single tool guarantees compliance. While comprehensive documentation is crucial, ISO 27001 compliance requires active implementation of security controls, risk assessments, employee training, and ongoing management commitment. Our policies provide a strong foundation, but compliance requires organizational dedication and action."
    },
    {
      "question": "How does your tool support SAMA CSF compliance?",
      "answer": "Our policy generator includes specific mappings to SAMA Cyber Security Framework requirements. The generated policies incorporate SAMA CSF controls and requirements, helping financial institutions in Saudi Arabia create documentation that aligns with:<br />• SAMA Security Governance requirements<br />• Cybersecurity Risk Management frameworks<br />• Third-party security management<br />• Asset management and data protection guidelines. While the policies provide a strong foundation, organizations should customize them to their specific SAMA compliance needs."
    },
    {
      "question": "Can the policies be generated in both English and Arabic?",
      "answer": "Yes, our tool supports bilingual policy generation. All policies can be generated in both English and Arabic, ensuring compliance with local regulatory requirements that mandate Arabic documentation. The translations are professionally reviewed to maintain accuracy and proper technical terminology."
    },
    {
      "question": "Are the policies aligned with UAE's PDPL requirements?",
      "answer": "Our policy generator incorporates the latest UAE Personal Data Protection Law (PDPL) requirements. The policies include:<br />• Data privacy controls and requirements<br />• Data subject rights management<br />• Cross-border data transfer guidelines<br />• Data breach notification procedures<br />• Privacy impact assessment frameworks"
    },
    {
      "question": "How do these policies support CBUAE compliance?",
      "answer": "The generated policies are aligned with Central Bank of UAE's cybersecurity requirements. They cover:<br />• Information Security controls as per CBUAE framework<br />• Consumer data protection requirements<br />• Digital banking security measures<br />• Third-party risk management<br />• Incident response procedures specific to financial institutions"
    },
    {
      "question": "Can the policies be customized for different GCC jurisdictions?",
      "answer": "Absolutely. Our tool allows jurisdiction-specific customization for:<br />• UAE requirements (PDPL, CBUAE, NESA)<br />• Saudi requirements (SAMA, NCA, CITC)<br />• Bahrain requirements (CBB)"
    },
    {
      "question": "How often are the policies updated for regional regulatory changes?",
      "answer": "We continuously monitor GCC regulatory changes and update our policy templates accordingly. This includes:<br />• Quarterly reviews of regulatory updates<br />• Immediate updates for major regulatory changes<br />• Notification to customers when significant updates occur<br />• Option to regenerate policies with latest regulatory requirements"
    },
    {
      "question": "Does the tool support sector-specific requirements in the GCC?",
      "answer": "Yes, our tool generates policies tailored to specific sectors including:<br />• Financial Services (SAMA, CBUAE requirements)<br />• Healthcare (regional health authority requirements)<br />• Government entities (e-government standards)<br />• Telecommunications (regulatory authority requirements)"
    },
    {
      "question": "How do these policies align with local data residency requirements?",
      "answer": "Our generated policies incorporate GCC data residency requirements, including:<br />• UAE data localization rules<br />• Saudi Arabia's data sovereignty requirements<br />• Cross-border data transfer restrictions<br />• Local hosting requirements<br />• Data classification aligned with local standards"
    }
  ]  

  return (
    <div className="min-h-screen bg-background text-foreground p-8" id='faqSec'>
      <div className="mx-auto">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-muted-foreground">
            Get answers to common questions about AIPolicyPro.
          </p>
        </div>

        <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-x-4">
          <div className='self-start flex flex-col gap-y-4' >
            {faqs.map((faq, index) => (
              (index >= faqs.length/2) ? null : 
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="px-6 border-none rounded-lg py-1"
                style={{boxShadow: "0px 4px 5px rgba(255, 255, 255, 0.1), 0px -1px 1px rgba(255, 255, 255, 0.1)"}}
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="text-sm md:text-base font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base flex-grow">
                  <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                </AccordionContent>
              </AccordionItem>
            ))}          </div>
          <div className='self-start flex flex-col gap-y-4'>
            {faqs.map((faq, index) => (
              (index >= faqs.length/2) ? 
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="px-6 border-none rounded-lg py-1"
                style={{boxShadow: "0px 4px 5px rgba(255, 255, 255, 0.1), 0px -1px 1px rgba(255, 255, 255, 0.1)"}}
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="text-sm md:text-base font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base flex-grow">
                  <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                </AccordionContent>
              </AccordionItem> : null
            ))}
          </div>
        </Accordion>

      </div>
      <div className='text-center'>
        <p className="text-base text-accent-foreground mt-12">
          Question not answered above ? <Link href="#contact" className="hover:text-tertiary">Contact us</Link>
        </p>
      </div>
    </div>
  );
};

export default FAQSection;