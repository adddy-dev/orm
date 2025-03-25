import RegulationCard, { Regulation } from '@/components/RegulationCard';
import React from 'react';

interface RegulationGrid {
  'Financial Services': Regulation[];
  'Healthcare': Regulation[];
  'Non-profit Organizations': Regulation[];
  'Food & Beverages': Regulation[];
  'Energy & Utility': Regulation[];
  'Manufacturing': Regulation[];
}

const categories: RegulationGrid = {
  'Financial Services': [
    {
      "framework": "SAMA Cyber Security Framework",
      "country": "Saudi Arabia",
      "regulatory_authority": "Saudi Central Bank (SAMA)",
      "key_requirements": [
        "Cybersecurity governance",
        "Cybersecurity risk management",
        "Cybersecurity operations",
        "Technology security",
        "Third-party security",
        "Cybersecurity resilience"
      ],
      "applicability": "Banks, insurance companies, finance companies, payment service providers, and FinTech companies in Saudi Arabia"
    },
    {
      "framework": "CBUAE Information Security Standards",
      "country": "UAE",
      "regulatory_authority": "Central Bank of UAE (CBUAE)",
      "key_requirements": [
        "IT governance",
        "Risk assessment and management",
        "Access control",
        "Data security",
        "Incident management",
        "Business continuity"
      ],
      "applicability": "Licensed banks, finance companies, insurance firms, and payment service providers in the UAE"
    },
    {
      "framework": "CBB Operational Risk Management Module",
      "country": "Bahrain",
      "regulatory_authority": "Central Bank of Bahrain (CBB)",
      "key_requirements": [
        "IT security requirements",
        "Business continuity",
        "Risk management",
        "Outsourcing controls",
        "Incident reporting"
      ],
      "applicability": "Banks, insurance companies, investment firms, and specialized licensees in Bahrain"
    },
    {
      "framework": "QCB Information Security Circular",
      "country": "Qatar",
      "regulatory_authority": "Qatar Central Bank (QCB)",
      "key_requirements": [
        "Information security management",
        "Cybersecurity controls",
        "Third-party risk management",
        "Incident response",
        "Compliance reporting"
      ],
      "applicability": "Financial institutions including banks, insurance companies, and exchange houses in Qatar"
    },
    {
      "framework": "SAMA Digital-Only Banks Framework",
      "country": "Saudi Arabia",
      "regulatory_authority": "Saudi Central Bank (SAMA)",
      "key_requirements": [
        "Digital operational resilience",
        "Enhanced identity verification",
        "Continuous transaction monitoring",
        "Cloud security controls"
      ],
      "applicability": "Digital banks and neobanks in Saudi Arabia"
    },
    {
      "framework": "CBUAE Consumer Protection Regulation",
      "country": "UAE",
      "regulatory_authority": "Central Bank of UAE (CBUAE)",
      "key_requirements": [
        "Customer data protection",
        "Digital services security",
        "Marketing and disclosure requirements",
        "Dispute resolution mechanisms"
      ],
      "applicability": "All retail-facing financial institutions including BNPL providers in the UAE"
    },
    {
      "framework": "CBB Crypto-asset Module",
      "country": "Bahrain",
      "regulatory_authority": "Central Bank of Bahrain (CBB)",
      "key_requirements": [
        "Cyber security",
        "Client asset protection",
        "Key management",
        "Segregation of duties",
        "AML/CFT controls"
      ],
      "applicability": "Crypto-asset service providers and exchanges in Bahrain"
    },
    {
      "framework": "SAMA Payment Service Provider Rules",
      "country": "Saudi Arabia",
      "regulatory_authority": "Saudi Central Bank (SAMA)",
      "key_requirements": [
        "Information security requirements",
        "Customer authentication",
        "Transaction security",
        "Fraud prevention",
        "Business continuity"
      ],
      "applicability": "Payment service providers, digital wallets, and BNPL platforms in Saudi Arabia"
    },
    {
      "framework": "QCB FinTech Instructions",
      "country": "Qatar",
      "regulatory_authority": "Qatar Central Bank (QCB)",
      "key_requirements": [
        "Technology risk management",
        "API security",
        "Customer data protection",
        "Regulatory sandbox requirements"
      ],
      "applicability": "FinTech companies, payment providers, and digital banking platforms in Qatar"
    },
    {
      "framework": "CBB Open Banking Framework",
      "country": "Bahrain",
      "regulatory_authority": "Central Bank of Bahrain (CBB)",
      "key_requirements": [
        "API security standards",
        "Customer authentication",
        "Third-party provider governance",
        "Consent management",
        "Liability framework"
      ],
      "applicability": "Banks and third-party service providers in Bahrain's open banking ecosystem"
    },
    {
      "framework": "SAMA Insurance Cybersecurity Framework",
      "country": "Saudi Arabia",
      "regulatory_authority": "Saudi Central Bank (SAMA)",
      "key_requirements": [
        "Insurance-specific security controls",
        "Policyholder data protection",
        "System availability requirements",
        "Insurance fraud prevention"
      ],
      "applicability": "Insurance companies and brokers in Saudi Arabia"
    },
    {
      "framework": "DFSA Rulebook - Technology Risk",
      "country": "UAE (DIFC)",
      "regulatory_authority": "Dubai Financial Services Authority (DFSA)",
      "key_requirements": [
        "IT governance",
        "System security",
        "Data protection",
        "Incident handling",
        "Technology risk assessment"
      ],
      "applicability": "Financial institutions operating in the Dubai International Financial Centre"
    },
    {
      "framework": "ADGM FSRA Guidance on Technology Risk",
      "country": "UAE (ADGM)",
      "regulatory_authority": "Financial Services Regulatory Authority (FSRA)",
      "key_requirements": [
        "IT systems protection",
        "Cloud computing guidelines",
        "Digital asset business requirements",
        "Operational resilience"
      ],
      "applicability": "Financial institutions operating in the Abu Dhabi Global Market"
    },
    {
      "framework": "CBQ Anti-Money Laundering Regulations",
      "country": "Qatar",
      "regulatory_authority": "Qatar Central Bank (QCB)",
      "key_requirements": [
        "Customer due diligence",
        "Suspicious transaction monitoring",
        "Compliance reporting",
        "Record keeping",
        "Technology controls"
      ],
      "applicability": "Financial institutions handling transactions and money transfers in Qatar"
    },
    {
      "framework": "SAMA Buy-Now-Pay-Later (BNPL) Regulations",
      "country": "Saudi Arabia",
      "regulatory_authority": "Saudi Central Bank (SAMA)",
      "key_requirements": [
        "Customer credit assessment",
        "Data protection",
        "Transaction security",
        "Disclosure requirements",
        "Risk management"
      ],
      "applicability": "BNPL providers operating in Saudi Arabia"
    }
  ],
  'Healthcare': [
    {
      "framework": "Saudi National Digital Health Strategy",
      "country": "Saudi Arabia",
      "regulatory_authority": "Ministry of Health (MOH)",
      "key_requirements": [
        "Electronic health record security",
        "Telemedicine standards",
        "Healthcare data protection",
        "System interoperability",
        "Authentication standards"
      ],
      "applicability": "Healthcare providers, hospitals, clinics, and digital health platforms in Saudi Arabia"
    },
    {
      "framework": "UAE Health Data Protection Law",
      "country": "UAE",
      "regulatory_authority": "Ministry of Health and Prevention (MOHAP)",
      "key_requirements": [
        "Patient data privacy",
        "Security of electronic health records",
        "Patient consent requirements",
        "Data sharing guidelines",
        "Breach notification"
      ],
      "applicability": "Healthcare institutions, insurance providers, and health information systems in the UAE"
    },
    {
      "framework": "National Health Data Dictionary Standards",
      "country": "Qatar",
      "regulatory_authority": "Ministry of Public Health (MOPH)",
      "key_requirements": [
        "Health information standardization",
        "Data governance",
        "Privacy requirements",
        "Security controls",
        "Information exchange protocols"
      ],
      "applicability": "Hospitals, clinics, research institutions, and healthcare data systems in Qatar"
    },
    {
      "framework": "Bahrain Healthcare Information Exchange Framework",
      "country": "Bahrain",
      "regulatory_authority": "National Health Regulatory Authority (NHRA)",
      "key_requirements": [
        "Patient data security",
        "Electronic health record standards",
        "Interoperability requirements",
        "Consent management",
        "Access controls"
      ],
      "applicability": "Healthcare providers, hospitals, insurance companies, and pharmaceutical entities in Bahrain"
    },
    {
      "framework": "Saudi NCA Healthcare Sector Cybersecurity Controls",
      "country": "Saudi Arabia",
      "regulatory_authority": "National Cybersecurity Authority (NCA)",
      "key_requirements": [
        "Healthcare-specific security controls",
        "Medical device security",
        "Network segmentation",
        "Identity management",
        "Incident response"
      ],
      "applicability": "Hospitals, clinics, pharmaceutical companies, and biotech firms in Saudi Arabia"
    },
    {
      "framework": "UAE Medical Devices Security Guidelines",
      "country": "UAE",
      "regulatory_authority": "Telecommunications and Digital Government Regulatory Authority (TDRA)",
      "key_requirements": [
        "Medical device registration",
        "Security-by-design requirements",
        "Network connectivity controls",
        "Vulnerability management",
        "Patch management"
      ],
      "applicability": "Medical device manufacturers, importers, and healthcare facilities in the UAE"
    },
    {
      "framework": "Qatar National E-Health and Data Protection Regulations",
      "country": "Qatar",
      "regulatory_authority": "Ministry of Public Health (MOPH)",
      "key_requirements": [
        "Health data classification",
        "Privacy controls",
        "Consent management",
        "Cross-border transfer limitations",
        "Retention policies"
      ],
      "applicability": "Healthcare providers, telemedicine platforms, and health information exchanges in Qatar"
    },
    {
      "framework": "Saudi MOH Cloud Computing Guidelines",
      "country": "Saudi Arabia",
      "regulatory_authority": "Ministry of Health (MOH)",
      "key_requirements": [
        "Health data classification",
        "Cloud provider requirements",
        "Data residency rules",
        "Encryption standards",
        "Access management"
      ],
      "applicability": "Healthcare providers using cloud services for patient data or healthcare applications in Saudi Arabia"
    },
    {
      "framework": "Dubai Health Authority Information Security Framework",
      "country": "UAE (Dubai)",
      "regulatory_authority": "Dubai Health Authority (DHA)",
      "key_requirements": [
        "Network security",
        "Information classification",
        "Access control",
        "Incident management",
        "Business continuity"
      ],
      "applicability": "Healthcare facilities, clinics, and medical professionals licensed by DHA in Dubai"
    },
    {
      "framework": "Qatar Health Information Exchange Policy",
      "country": "Qatar",
      "regulatory_authority": "Ministry of Public Health (MOPH)",
      "key_requirements": [
        "Health information exchange standards",
        "Patient consent requirements",
        "Data quality controls",
        "Privacy safeguards",
        "Audit logging"
      ],
      "applicability": "Healthcare providers participating in Qatar's health information exchange system"
    },
    {
      "framework": "Saudi Medical Devices Interim Regulation",
      "country": "Saudi Arabia",
      "regulatory_authority": "Saudi Food and Drug Authority (SFDA)",
      "key_requirements": [
        "Medical device cybersecurity",
        "Risk management",
        "Vulnerability disclosure",
        "Security updates",
        "Post-market surveillance"
      ],
      "applicability": "Medical device manufacturers, importers, and distributors in Saudi Arabia"
    },
    {
      "framework": "UAE Telemedicine Regulations",
      "country": "UAE",
      "regulatory_authority": "Telecommunications and Digital Government Regulatory Authority (TDRA) / MOHAP",
      "key_requirements": [
        "Platform security requirements",
        "Patient data protection",
        "Authentication standards",
        "Encryption requirements",
        "Session security"
      ],
      "applicability": "Telemedicine service providers, virtual clinics, and remote healthcare platforms in the UAE"
    },
    {
      "framework": "Bahrain Health Information Security Standards",
      "country": "Bahrain",
      "regulatory_authority": "Supreme Council of Health",
      "key_requirements": [
        "Data classification",
        "System security",
        "Access controls",
        "Mobile device management",
        "Third-party security"
      ],
      "applicability": "Healthcare organizations, pharmaceuticals, and health insurance companies in Bahrain"
    },
    {
      "framework": "Saudi Healthcare Messaging and Interoperability Standards",
      "country": "Saudi Arabia",
      "regulatory_authority": "Saudi Health Information Exchange (SHIE)",
      "key_requirements": [
        "Secure messaging standards",
        "Authentication requirements",
        "Data format specifications",
        "Encryption standards",
        "System integration security"
      ],
      "applicability": "Healthcare providers exchanging patient information through Saudi Arabia's health information networks"
    },
    {
      "framework": "Department of Health Abu Dhabi Information Security Standards",
      "country": "UAE (Abu Dhabi)",
      "regulatory_authority": "Department of Health Abu Dhabi (DOH)",
      "key_requirements": [
        "Information security controls",
        "Data protection",
        "Patient privacy",
        "Incident response",
        "Compliance monitoring"
      ],
      "applicability": "Healthcare providers, insurance providers, and medical facilities licensed in Abu Dhabi"
    }
  ],
  'Energy & Utility': [
    {
      "framework": "Saudi NCA Essential Cybersecurity Controls (ECC)",
      "country": "Saudi Arabia",
      "regulatory_authority": "National Cybersecurity Authority (NCA)",
      "key_requirements": [
        "Asset management",
        "Cybersecurity defense",
        "Identity and access management",
        "Physical security",
        "Business continuity"
      ],
      "applicability": "Energy companies, utilities, oil and gas entities, and critical infrastructure in Saudi Arabia"
    },
    {
      "framework": "UAE Critical Infrastructure Information Protection Policy",
      "country": "UAE",
      "regulatory_authority": "National Electronic Security Authority (NESA)",
      "key_requirements": [
        "Risk management",
        "Incident response",
        "Asset protection",
        "Supply chain security",
        "Security governance"
      ],
      "applicability": "Power generation, water, oil and gas, and utility service providers in the UAE"
    },
    {
      "framework": "Qatar Energy Sector Cybersecurity Framework",
      "country": "Qatar",
      "regulatory_authority": "Ministry of Energy",
      "key_requirements": [
        "ICS/SCADA security",
        "Operational technology controls",
        "Network segregation",
        "Identity management",
        "Incident response"
      ],
      "applicability": "Oil and gas companies, power generation, and utility providers in Qatar"
    },
    {
      "framework": "Bahrain Electricity and Water Authority Security Standards",
      "country": "Bahrain",
      "regulatory_authority": "Electricity and Water Authority (EWA)",
      "key_requirements": [
        "Control system security",
        "Network protection",
        "Physical security",
        "Staff training",
        "Incident management"
      ],
      "applicability": "Electricity generation, water production, and distribution entities in Bahrain"
    },
    {
      "framework": "Saudi Aramco Cybersecurity Standards",
      "country": "Saudi Arabia",
      "regulatory_authority": "Saudi Aramco",
      "key_requirements": [
        "Supply chain security",
        "Industrial control system protection",
        "Network segmentation",
        "Vulnerability management",
        "Insider threat protection"
      ],
      "applicability": "Oil and gas contractors, service providers, and partners working with Saudi Aramco"
    },
    {
      "framework": "UAE Energy Sector Information Sharing and Analysis Center",
      "country": "UAE",
      "regulatory_authority": "Ministry of Energy and Infrastructure",
      "key_requirements": [
        "Threat intelligence sharing",
        "Incident coordination",
        "Vulnerability notifications",
        "Security best practices",
        "Collaborative defense"
      ],
      "applicability": "Energy sector entities, critical infrastructure operators, and utility companies in the UAE"
    },
    {
      "framework": "Qatar Electricity and Water Regulatory Framework",
      "country": "Qatar",
      "regulatory_authority": "Qatar General Electricity & Water Corporation (KAHRAMAA)",
      "key_requirements": [
        "SCADA system security",
        "Smart grid protection",
        "Remote access controls",
        "System monitoring",
        "Resilience requirements"
      ],
      "applicability": "Electricity generation, water desalination, and distribution companies in Qatar"
    },
    {
      "framework": "Saudi Energy Efficiency Program Security Guidelines",
      "country": "Saudi Arabia",
      "regulatory_authority": "Saudi Energy Efficiency Center",
      "key_requirements": [
        "Smart meter security",
        "Data protection",
        "Communication security",
        "Grid protection",
        "Privacy controls"
      ],
      "applicability": "Energy service companies, smart building operators, and efficiency program participants in Saudi Arabia"
    },
    {
      "framework": "UAE ICS Security Standard",
      "country": "UAE",
      "regulatory_authority": "Telecommunications and Digital Government Regulatory Authority (TDRA)",
      "key_requirements": [
        "Industrial control system security",
        "Network segmentation",
        "Access control",
        "Vulnerability management",
        "Incident response"
      ],
      "applicability": "Critical infrastructure operators, industrial facilities, and utility service providers in the UAE"
    },
    {
      "framework": "Bahrain National Oil and Gas Authority (NOGA) Security Framework",
      "country": "Bahrain",
      "regulatory_authority": "National Oil and Gas Authority",
      "key_requirements": [
        "Exploration and production security",
        "Pipeline protection",
        "Terminal security",
        "Refinery cybersecurity",
        "Threat monitoring"
      ],
      "applicability": "Oil and gas companies, refineries, and distribution networks in Bahrain"
    },
    {
      "framework": "Saudi NCA OT Cybersecurity Controls",
      "country": "Saudi Arabia",
      "regulatory_authority": "National Cybersecurity Authority (NCA)",
      "key_requirements": [
        "OT-specific controls",
        "Industrial network security",
        "SCADA protection",
        "Remote access management",
        "Backup and recovery"
      ],
      "applicability": "Industrial control systems, SCADA networks, and operational technology in Saudi Arabia"
    },
    {
      "framework": "UAE Smart Grid Security Framework",
      "country": "UAE",
      "regulatory_authority": "Ministry of Energy and Infrastructure",
      "key_requirements": [
        "Smart grid protection",
        "Device security",
        "Communication encryption",
        "Authentication standards",
        "Privacy safeguards"
      ],
      "applicability": "Power utilities, grid operators, and smart meter providers in the UAE"
    },
    {
      "framework": "Qatar Petroleum Security Standards",
      "country": "Qatar",
      "regulatory_authority": "Qatar Petroleum (QP)",
      "key_requirements": [
        "Offshore platform security",
        "Pipeline protection",
        "Terminal cybersecurity",
        "Supply chain controls",
        "Personnel security"
      ],
      "applicability": "Oil and gas exploration, production, and distribution entities working with Qatar Petroleum"
    },
    {
      "framework": "Saudi Electricity Company Cybersecurity Framework",
      "country": "Saudi Arabia",
      "regulatory_authority": "Saudi Electricity Company (SEC)",
      "key_requirements": [
        "Power generation security",
        "Transmission protection",
        "Distribution network controls",
        "Smart grid security",
        "Incident management"
      ],
      "applicability": "Power generation plants, transmission networks, and distribution systems in Saudi Arabia"
    },
    {
      "framework": "GCC Interconnection Authority Security Requirements",
      "country": "All GCC countries",
      "regulatory_authority": "GCC Interconnection Authority (GCCIA)",
      "key_requirements": [
        "Cross-border power exchange security",
        "Control center protection",
        "Communication security",
        "Regional coordination",
        "Incident response"
      ],
      "applicability": "Power utilities and grid operators participating in the GCC Interconnection Grid"
    }
  ],
  'Manufacturing': [
    {
      "framework": "Saudi Industrial Development Fund Cybersecurity Guidelines",
      "country": "Saudi Arabia",
      "regulatory_authority": "Saudi Industrial Development Fund (SIDF)",
      "key_requirements": [
        "Industrial system security",
        "Manufacturing floor controls",
        "Supply chain security",
        "IoT device management",
        "Incident response"
      ],
      "applicability": "Manufacturing facilities, industrial plants, and factories in Saudi Arabia"
    },
    {
      "framework": "UAE Industry 4.0 Security Framework",
      "country": "UAE",
      "regulatory_authority": "Ministry of Industry and Advanced Technology",
      "key_requirements": [
        "Smart manufacturing security",
        "IIoT protection",
        "Digital twin security",
        "Automation controls",
        "Intellectual property protection"
      ],
      "applicability": "Smart factories, industrial IoT implementations, and advanced manufacturing in the UAE"
    },
    {
      "framework": "Qatar Manufacturing Security Standards",
      "country": "Qatar",
      "regulatory_authority": "Ministry of Commerce and Industry",
      "key_requirements": [
        "Operational technology security",
        "Industrial control systems",
        "Network segmentation",
        "Vendor management",
        "Risk assessment"
      ],
      "applicability": "Manufacturing facilities, industrial zones, and factories in Qatar"
    },
    {
      "framework": "Bahrain Industrial Area Security Guidelines",
      "country": "Bahrain",
      "regulatory_authority": "Ministry of Industry, Commerce and Tourism",
      "key_requirements": [
        "Physical security integration",
        "Digital controls",
        "Personnel security",
        "Supply chain protection",
        "Incident management"
      ],
      "applicability": "Manufacturing companies in Bahrain's industrial areas and free zones"
    },
    {
      "framework": "Saudi NCA Industrial Control Systems Security",
      "country": "Saudi Arabia",
      "regulatory_authority": "National Cybersecurity Authority (NCA)",
      "key_requirements": [
        "ICS-specific controls",
        "Network architecture",
        "Endpoint protection",
        "Monitoring requirements",
        "Vulnerability management"
      ],
      "applicability": "Manufacturing facilities using industrial control systems in Saudi Arabia"
    },
    {
      "framework": "UAE Industrial Development Bureau Security Standards",
      "country": "UAE",
      "regulatory_authority": "Industrial Development Bureau",
      "key_requirements": [
        "Manufacturing floor security",
        "Product data protection",
        "Supply chain controls",
        "Trade secret protection",
        "Facility monitoring"
      ],
      "applicability": "Manufacturing companies licensed by Industrial Development Bureau in the UAE"
    },
    {
      "framework": "Qatar Industrial Security Directives",
      "country": "Qatar",
      "regulatory_authority": "Qatar Development Bank",
      "key_requirements": [
        "Equipment security",
        "Control system protection",
        "Operational security",
        "Personnel vetting",
        "Incident management"
      ],
      "applicability": "Industrial facilities and manufacturing operations in Qatar's industrial zones"
    },
    {
      "framework": "Saudi Ministry of Industry Security Regulations",
      "country": "Saudi Arabia",
      "regulatory_authority": "Ministry of Industry and Mineral Resources",
      "key_requirements": [
        "Facility cybersecurity",
        "Supply chain protection",
        "Industrial IoT security",
        "Data protection",
        "Security by design"
      ],
      "applicability": "Industrial facilities, factories, and manufacturing plants in Saudi Arabia"
    },
    {
      "framework": "UAE Free Zone Manufacturing Security Standards",
      "country": "UAE",
      "regulatory_authority": "Various Free Zone Authorities",
      "key_requirements": [
        "Zone-specific security controls",
        "Physical and cyber integration",
        "Access management",
        "Export controls",
        "Compliance requirements"
      ],
      "applicability": "Manufacturing companies operating in UAE's various free zones"
    },
    {
      "framework": "Bahrain Manufacturing SME Security Guidelines",
      "country": "Bahrain",
      "regulatory_authority": "Bahrain Development Bank",
      "key_requirements": [
        "Cost-effective security controls",
        "Basic cyber hygiene",
        "Essential technical safeguards",
        "Incident response",
        "Third-party management"
      ],
      "applicability": "Small and medium manufacturing enterprises in Bahrain"
    },
    {
      "framework": "Saudi Authority for Industrial Cities Security Framework",
      "country": "Saudi Arabia",
      "regulatory_authority": "Saudi Authority for Industrial Cities and Technology Zones (MODON)",
      "key_requirements": [
        "Industrial zone security",
        "Smart factory requirements",
        "IoT device management",
        "Network security",
        "Shared infrastructure protection"
      ],
      "applicability": "Manufacturing facilities in Saudi industrial cities and technology zones"
    },
    {
      "framework": "UAE AML/CFT Manufacturing Controls",
      "country": "UAE",
      "regulatory_authority": "Ministry of Economy",
      "key_requirements": [
        "Anti-money laundering controls",
        "Sanctions compliance",
        "High-value goods tracking",
        "Transaction monitoring",
        "Reporting requirements"
      ],
      "applicability": "Manufacturing companies producing high-value goods subject to AML regulations in the UAE"
    },
    {
      "framework": "Qatar Digital Manufacturing Guidelines",
      "country": "Qatar",
      "regulatory_authority": "Communications Regulatory Authority (CRA)",
      "key_requirements": [
        "Connected factory security",
        "Data protection",
        "Process integrity",
        "Device security",
        "Incident handling"
      ],
      "applicability": "Digitally transformed manufacturing facilities in Qatar"
    },
      {
      "framework": "Saudi Export Control Security Regulations",
      "country": "Saudi Arabia",
      "regulatory_authority": "Saudi Export Development Authority",
      "key_requirements": [
        "Product security",
        "Supply chain tracking",
        "Documentation security",
        "Transport security",
        "Compliance verification"
      ],
      "applicability": "Manufacturing companies engaged in international exports from Saudi Arabia"
    },
    {
      "framework": "GCC Standardization Organization Manufacturing Standards",
      "country": "All GCC countries",
      "regulatory_authority": "GCC Standardization Organization (GSO)",
      "key_requirements": [
        "Product security standards",
        "Security labeling",
        "Safety certification",
        "Quality control",
        "Regulatory compliance"
      ],
      "applicability": "Manufacturing companies producing products subject to GCC standards and conformity assessment"
    }
  ],
  'Food & Beverages': [
    {
      "framework": "Saudi Food and Drug Authority (SFDA) Food Control System",
      "country": "Saudi Arabia",
      "regulatory_authority": "Saudi Food and Drug Authority",
      "key_requirements": [
        "Food safety management system",
        "Traceability requirements",
        "System security controls",
        "Record-keeping",
        "Authentication standards"
      ],
      "applicability": "Food manufacturers, processors, distributors, and importers in Saudi Arabia"
    },
    {
      "framework": "UAE Food Safety Law and Information System",
      "country": "UAE",
      "regulatory_authority": "Ministry of Climate Change and Environment",
      "key_requirements": [
        "Food safety management",
        "Digital traceability",
        "System security",
        "Reporting mechanisms",
        "Incident notification"
      ],
      "applicability": "Food production, processing, packaging, and distribution companies in the UAE"
    },
    {
      "framework": "Qatar Food Safety Regulations",
      "country": "Qatar",
      "regulatory_authority": "Ministry of Public Health",
      "key_requirements": [
        "Food safety controls",
        "Data integrity",
        "System validation",
        "Electronic record security",
        "Incident reporting"
      ],
      "applicability": "Food manufacturers, processors, and distributors operating in Qatar"
    },
    {
      "framework": "Bahrain Food Control System",
      "country": "Bahrain",
      "regulatory_authority": "Ministry of Health",
      "key_requirements": [
        "Food safety management",
        "Supply chain documentation",
        "System security",
        "Record protection",
        "Recall management"
      ],
      "applicability": "Food manufacturers, importers, and distributors in Bahrain"
    },
    {
      "framework": "GCC Rapid Alert System for Food and Feed",
      "country": "All GCC countries",
      "regulatory_authority": "GCC Standardization Organization (GSO)",
      "key_requirements": [
        "Alert notification security",
        "Information sharing protocols",
        "Authentication requirements",
        "Cross-border communication",
        "Data protection"
      ],
      "applicability": "Food safety authorities, importers, and exporters operating across GCC countries"
    },
    {
      "framework": "Saudi SFDA Supply Chain Traceability Requirements",
      "country": "Saudi Arabia",
      "regulatory_authority": "Saudi Food and Drug Authority",
      "key_requirements": [
        "Digital traceability systems",
        "Blockchain/distributed ledger adoption",
        "Authentication mechanisms",
        "Data sharing security",
        "System integration"
      ],
      "applicability": "Food and beverage supply chain participants in Saudi Arabia"
    },
    {
      "framework": "Dubai Municipality Food Safety Department Standards",
      "country": "UAE (Dubai)",
      "regulatory_authority": "Dubai Municipality",
      "key_requirements": [
        "Electronic record requirements",
        "Digital inspection systems",
        "Information security",
        "Vulnerability management",
        "Compliance reporting"
      ],
      "applicability": "Food establishments, restaurants, and manufacturers in Dubai"
    },
    {
      "framework": "Qatar Food Safety System Certification Requirements",
      "country": "Qatar",
      "regulatory_authority": "Ministry of Public Health",
      "key_requirements": [
        "Information system security",
        "Data integrity",
        "Electronic certification",
        "Access controls",
        "Audit trail requirements"
      ],
      "applicability": "Food producers seeking certification and importing/exporting food products in Qatar"
    },
    {
      "framework": "Saudi NCA Essential Cybersecurity Controls for Food Sector",
      "country": "Saudi Arabia",
      "regulatory_authority": "National Cybersecurity Authority (NCA)",
      "key_requirements": [
        "Basic security controls",
        "Data protection",
        "Access management",
        "Incident response",
        "Supply chain security"
      ],
      "applicability": "Critical food infrastructure, major processors, and distribution networks in Saudi Arabia"
    },
    {
      "framework": "UAE Food Import and Re-export System",
      "country": "UAE",
      "regulatory_authority": "Federal Customs Authority",
      "key_requirements": [
        "Electronic documentation security",
        "Authentication requirements",
        "System protection",
        "Data integrity",
        "Compliance verification"
      ],
      "applicability": "Food importers, exporters, and customs brokers in the UAE"
    },
    {
      "framework": "Bahrain National Food Safety Committee Guidelines",
      "country": "Bahrain",
      "regulatory_authority": "National Food Safety Committee",
      "key_requirements": [
        "Food safety IT system security",
        "Data protection",
        "System access controls",
        "Documentation requirements",
        "Notification systems"
      ],
      "applicability": "Food manufacturers, restaurants, and distributors in Bahrain"
    },
    {
      "framework": "Saudi Food Fraud Detection System",
      "country": "Saudi Arabia",
      "regulatory_authority": "Saudi Food and Drug Authority",
      "key_requirements": [
        "Anti-counterfeiting measures",
        "Electronic verification systems",
        "Secure labeling",
        "Authentication protocols",
        "Reporting mechanisms"
      ],
      "applicability": "Food manufacturers, importers, and retailers in Saudi Arabia"
    },
    {
      "framework": "Abu Dhabi Agriculture and Food Safety Authority Regulations",
      "country": "UAE (Abu Dhabi)",
      "regulatory_authority": "Abu Dhabi Agriculture and Food Safety Authority",
      "key_requirements": [
        "Food safety management systems",
        "Digital tracking requirements",
        "System security",
        "Electronic reporting",
        "Data protection"
      ],
      "applicability": "Food manufacturers, distributors, and retailers in Abu Dhabi"
    },
    {
      "framework": "GCC Guide for Control on Imported Foods",
      "country": "All GCC countries",
      "regulatory_authority": "GCC Standardization Organization (GSO)",
      "key_requirements": [
        "Electronic certification security",
        "Documentation authentication",
        "Information sharing protocols",
        "System integration requirements",
        "Data protection"
      ],
      "applicability": "Food importers and border inspection authorities across GCC countries"
    },
    {
      "framework": "Saudi Digital Transformation Guidelines for Food Sector",
      "country": "Saudi Arabia",
      "regulatory_authority": "Ministry of Communications and Information Technology",
      "key_requirements": [
        "Digital transformation security",
        "IoT device management",
        "Cloud security",
        "Data protection",
        "Resilience requirements"
      ],
      "applicability": "Food and beverage companies implementing digital transformation initiatives in Saudi Arabia"
    }
  ],
  'Non-profit Organizations': [
    {
      "framework": "Saudi National Center for Non-Profit Organizations Governance Framework",
      "country": "Saudi Arabia",
      "regulatory_authority": "National Center for Non-Profit Sector",
      "key_requirements": [
        "Information security governance",
        "Data protection",
        "Donor information privacy",
        "Compliance reporting",
        "Basic security controls"
      ],
      "applicability": "Charitable organizations, foundations, and non-profit entities in Saudi Arabia"
    },
    {
      "framework": "UAE Federal Law on Associations and Non-Governmental Organizations",
      "country": "UAE",
      "regulatory_authority": "Ministry of Community Development",
      "key_requirements": [
        "Information security requirements",
        "Fundraising platform security",
        "Donor data protection",
        "Financial system security",
        "Reporting mechanisms"
      ],
      "applicability": "Non-profit associations, foundations, and NGOs registered in the UAE"
    },
    {
      "framework": "Qatar Authority for Charitable Activities Regulations",
      "country": "Qatar",
      "regulatory_authority": "Regulatory Authority for Charitable Activities",
      "key_requirements": [
        "Charitable transaction security",
        "Beneficiary data protection",
        "International transfer controls",
        "Financial system security",
        "AML/CFT controls"
      ],
      "applicability": "Charities, humanitarian organizations, and charitable foundations in Qatar"
    },
    {
      "framework": "Bahrain NGO Governance Framework",
      "country": "Bahrain",
      "regulatory_authority": "Ministry of Labor and Social Development",
      "key_requirements": [
        "Information management",
        "Data protection",
        "Financial system security",
        "Beneficiary privacy",
        "Reporting security"
      ],
      "applicability": "Non-profit organizations, associations, and civil society institutions in Bahrain"
    },
    {
      "framework": "Saudi Fundraising Regulatory Framework",
      "country": "Saudi Arabia",
      "regulatory_authority": "National Center for Non-Profit Sector",
      "key_requirements": [
        "Digital fundraising security",
        "Donation platform protection",
        "Transaction security",
        "Donor privacy",
        "Financial system controls"
      ],
      "applicability": "Charitable organizations conducting fundraising activities in Saudi Arabia"
    },
    {
      "framework": "UAE International Humanitarian City Guidelines",
      "country": "UAE (Dubai)",
      "regulatory_authority": "International Humanitarian City Authority",
      "key_requirements": [
        "Humanitarian data protection",
        "Beneficiary privacy",
        "Cross-border data transfer",
        "System security",
        "Incident reporting"
      ],
      "applicability": "Humanitarian organizations and international NGOs operating from UAE's International Humanitarian City"
    },
    {
      "framework": "Qatar Charity Licensing Security Requirements",
      "country": "Qatar",
      "regulatory_authority": "Regulatory Authority for Charitable Activities",
      "key_requirements": [
        "Information system security",
        "Donor database protection",
        "Financial controls",
        "Website and application security",
        "Compliance monitoring"
      ],
      "applicability": "Licensed charities and humanitarian organizations in Qatar"
    },
    {
      "framework": "Saudi NCA Basic Cybersecurity Controls for NGOs",
      "country": "Saudi Arabia",
      "regulatory_authority": "National Cybersecurity Authority (NCA)",
      "key_requirements": [
        "Basic security controls",
        "Data protection",
        "Access management",
        "Incident response",
        "Digital transformation security"
      ],
      "applicability": "Non-profit organizations operating in Saudi Arabia"
    },
    {
      "framework": "UAE Anti-Money Laundering Framework for NPOs",
      "country": "UAE",
      "regulatory_authority": "Executive Office of Anti-Money Laundering and Counter Terrorism Financing",
      "key_requirements": [
        "Risk-based approach",
        "Beneficiary verification",
        "Transaction monitoring",
        "Reporting requirements",
        "System security"
      ],
      "applicability": "Non-profit organizations engaged in financial activities or international transfers in the UAE"
    },
    {
      "framework": "Bahrain Civil Society Organizations Law",
      "country": "Bahrain",
      "regulatory_authority": "Ministry of Labor and Social Development",
      "key_requirements": [
        "Information security requirements",
        "Data protection",
        "Financial system controls",
        "Reporting security",
        "International activity monitoring"
      ],
      "applicability": "Non-profit associations, clubs, and civil society organizations in Bahrain"
    },
    {
      "framework": "Saudi Digital Charity Platform Standards",
      "country": "Saudi Arabia",
      "regulatory_authority": "National Center for Non-Profit Sector",
      "key_requirements": [
        "Platform security",
        "Authentication mechanisms",
        "Payment security",
        "Data protection",
        "Compliance verification"
      ],
      "applicability": "Non-profits using digital platforms for fundraising and charitable activities in Saudi Arabia"
    },
    {
      "framework": "UAE Social Data Exchange Framework",
      "country": "UAE",
      "regulatory_authority": "Community Development Authority",
      "key_requirements": [
        "Data sharing protocols",
        "Privacy controls",
        "System security",
        "Access management",
        "Compliance requirements"
      ],
      "applicability": "Non-profits participating in social service data sharing in the UAE"
    },
    {
      "framework": "Qatar International NGO Registration Requirements",
      "country": "Qatar",
      "regulatory_authority": "Regulatory Authority for Charitable Activities",
      "key_requirements": [
        "Information system security",
        "International transfer controls",
        "Financial transparency",
        "Data protection",
        "Risk management"
      ],
      "applicability": "International NGOs operating or establishing a presence in Qatar"
    },
    {
      "framework": "GCC Charitable Organizations Information Sharing Framework",
      "country": "All GCC countries",
      "regulatory_authority": "GCC Secretariat",
      "key_requirements": [
        "Cross-border information sharing",
        "Secure communication",
        "Data protection",
        "Authentication requirements",
        "Compliance verification"
      ],
      "applicability": "Charitable organizations operating across multiple GCC countries"
    },
    {
      "framework": "Saudi National Platform for Charitable Work (Ehsan) Security Standards",
      "country": "Saudi Arabia",
      "regulatory_authority": "National Center for Non-Profit Sector",
      "key_requirements": [
        "Platform security",
        "Authentication mechanisms",
        "Financial transaction security",
        "Data protection",
        "Transparency requirements"
      ],
      "applicability": "Non-profits utilizing the national charitable platform in Saudi Arabia"
    }
  ],
};

const Page = ({ params }: { params: { category: string } }) => {
  const { category } = params;

  // Decode and safely access the category data
  const decodedCategory = decodeURIComponent(category);

  // Check if the category exists in the categories object to avoid errors
  const regulations = categories[decodedCategory as keyof RegulationGrid] || [];

  return (
    <section className='px-10'>
      <h2 className='bold text-xl mt-4 mb-10 text-center'>{decodedCategory}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {regulations.map((regulation, index) => (
          <RegulationCard key={index} regulation={regulation} />
        ))}
      </div>
    </section>
  );
};

export default Page;
