'use client';


import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React, { useState } from 'react';

const DataTransferRiskAssessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Preparation Phase
    involveSensitiveData: false,
    combineMultipleDatasets: false,
    processLargeScale: false,
    highRiskProduct: false,
    productDescription: '',
    processingPurpose: '',
    
    // Collection Phase
    dataSource: '',
    collectionMethods: [] as string[],
    
    // Storage Phase
    storageLocation: '',
    storagePlace: '',
    retentionPeriod: '',
    
    // Usage Phase
    usageActivities: '',
    
    // Disclosure Phase
    disclosureActivities: '',
    disclosureEntities: '',
    
    // Destruction Phase
    destructionMethods: '',
    
    // Risk Assessment Phase
    vulnerabilities: '',
    threatSources: '',
    expectedEvents: '',
    impactLevel: 'low',
    probabilityLevel: 'low',
    
    // Transfer Assessment
    transferNature: '',
    receivingEntities: '',
    additionalMeasures: '',
    
    // Kingdom Interests
    processingScope: '',
    impactScope: '',
    adequacyOfMeasures: ''
  });
  
  const [assessmentResult, setAssessmentResult] = useState<{
    riskScore: number;
    riskLevel: string;
    recommendations: string[];
    timestamp: number;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLSelectElement;
    const checked = type === 'checkbox' && (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleMultipleCheckboxes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    let updatedArray = [...(formData[name as keyof typeof formData] as string[])];
    
    if (checked) {
      updatedArray.push(value);
    } else {
      updatedArray = updatedArray.filter(item => item !== value);
    }
    
    setFormData({
      ...formData,
      [name]: updatedArray
    });
  };
  const handleNext = () => {
    if (currentStep < 9) {
      setCurrentStep(currentStep + 1);
    }
  };
  console.log(`${currentStep} selected`);

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      console.log(`prev ${currentStep} selected`);
    }
  };
  
  const calculateRiskScore = () => {
    // Simple risk calculation formula
    const impactMap = { 'low': 1, 'medium': 2, 'high': 3 };
    const probabilityMap = { 'low': 1, 'medium': 2, 'high': 3 };
    
    const impactScore = impactMap[formData.impactLevel as keyof typeof impactMap];
    const probabilityScore = probabilityMap[formData.probabilityLevel as keyof typeof probabilityMap];
    
    const riskScore = impactScore * probabilityScore;
    
    // Add more risk factors
    let totalRiskScore = riskScore;
    
    if (formData.involveSensitiveData) totalRiskScore += 2;
    if (formData.combineMultipleDatasets) totalRiskScore += 1;
    if (formData.processLargeScale) totalRiskScore += 1;
    if (formData.highRiskProduct) totalRiskScore += 1;
    
    // Evaluate risk level
    let riskLevel;
    if (totalRiskScore <= 3) {
      riskLevel = 'Low';
    } else if (totalRiskScore <= 6) {
      riskLevel = 'Medium';
    } else {
      riskLevel = 'High';
    }
    
    // Generate recommended actions
    let recommendations = [];
    
    if (riskLevel === 'High') {
      recommendations = [
        'Conduct a comprehensive Data Protection Impact Assessment',
        'Implement strong technical and organizational safeguards',
        'Consider alternative processing methods or locations',
        'Consult with the Saudi Data & AI Authority (SDAIA)',
        'Ensure legal basis for transfer is clearly documented'
      ];
    } else if (riskLevel === 'Medium') {
      recommendations = [
        'Review and strengthen technical and organizational measures',
        'Implement data minimization principles',
        'Establish clear data retention policies',
        'Conduct regular compliance reviews',
        'Document risk mitigation measures'
      ];
    } else {
      recommendations = [
        'Maintain regular monitoring of data transfer processes',
        'Document compliance with Saudi data protection requirements',
        'Keep records of data processing activities',
        'Review when circumstances change'
      ];
    }
    
    console.log("Setting assessment result:", { riskScore: totalRiskScore, riskLevel, recommendations });
    
    // Force render by creating a new object
    setAssessmentResult({
      riskScore: totalRiskScore,
      riskLevel,
      recommendations,
      timestamp: new Date().getTime() // Add timestamp to ensure state update
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateRiskScore();
    setCurrentStep(9);
    // Log to confirm function is executing
    console.log("Assessment submitted, calculating results");
  };

  // Conditionally render form sections based on current step
  return (
    <section className='w-full overflow-auto py-5'>
      <div className="w-full max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-primary">Risk Assessment for Transferring Personal Data Outside the Kingdom</h1>
        
        {currentStep < 9 ? (
          <div className="mb-6">
            <div className="w-full bg-muted rounded-full h-2.5">
              <div className="bg-tertiary h-2.5 rounded-full" style={{ width: `${(currentStep / 8) * 100}%` }}></div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-muted-foreground">Step {currentStep} of 8</span>
              <span className="text-sm text-muted-foreground">{Math.round((currentStep / 8) * 100)}% Complete</span>
            </div>
          </div>
        ) : null}
        
        <form onSubmit={handleSubmit}>
          {/* Step 1: Preparation Phase */}
          {currentStep === 1 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Preparation Phase</h2>
              <p className="mb-4 text-foreground">Determine whether risk assessment is required based on any of the following conditions:</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="involveSensitiveData"
                    name="involveSensitiveData"
                    checked={formData.involveSensitiveData}
                    onChange={handleInputChange}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="involveSensitiveData" className="text-foreground">
                    Does the processing involve sensitive personal data?
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="combineMultipleDatasets"
                    name="combineMultipleDatasets"
                    checked={formData.combineMultipleDatasets}
                    onChange={handleInputChange}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="combineMultipleDatasets" className="text-foreground">
                    Will you collect, compare, or link two or more sets of personal data from multiple sources?
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="processLargeScale"
                    name="processLargeScale"
                    checked={formData.processLargeScale}
                    onChange={handleInputChange}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="processLargeScale" className="text-foreground">
                    Will processing occur on a large scale or recurring basis, especially for individuals with legal incapacity?
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="highRiskProduct"
                    name="highRiskProduct"
                    checked={formData.highRiskProduct}
                    onChange={handleInputChange}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="highRiskProduct" className="text-foreground">
                    Is your product or service likely to pose a high risk to the privacy of data subjects?
                  </label>
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="productDescription" className="block text-muted-foreground font-medium mb-2">
                  Describe your product or service that will process personal data:
                </label>
                <textarea
                  id="productDescription"
                  name="productDescription"
                  value={formData.productDescription}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border rounded-md bg-card"
                  placeholder="Provide a detailed description..."
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label htmlFor="processingPurpose" className="block text-muted-foreground font-medium mb-2">
                  Define the purpose for processing personal data:
                </label>
                <textarea
                  id="processingPurpose"
                  name="processingPurpose"
                  value={formData.processingPurpose}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border rounded-md bg-card"
                  placeholder="Clearly define the purpose..."
                ></textarea>
              </div>
            </div>
          )}
          
          {/* Step 2: Collection Phase */}
          {currentStep === 2 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Collection Phase</h2>
              
              <div className="mb-4">
                <label className="block text-muted-foreground font-medium mb-2">
                  Source of personal data:
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="source-direct"
                      name="dataSource"
                      value="directly-from-subjects"
                      checked={formData.dataSource === 'directly-from-subjects'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <label htmlFor="source-direct">Directly from data subjects</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="source-third-party"
                      name="dataSource"
                      value="third-party"
                      checked={formData.dataSource === 'third-party'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <label htmlFor="source-third-party">Through third parties</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="source-both"
                      name="dataSource"
                      value="both"
                      checked={formData.dataSource === 'both'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <label htmlFor="source-both">Both direct and third-party sources</label>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-muted-foreground font-medium mb-2">
                  Methods of collecting personal data (select all that apply):
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="method-electronic"
                      name="collectionMethods"
                      value="electronic-forms"
                      checked={formData.collectionMethods.includes('electronic-forms')}
                      onChange={handleMultipleCheckboxes}
                      className="mr-2"
                    />
                    <label htmlFor="method-electronic">Electronic forms</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="method-cookies"
                      name="collectionMethods"
                      value="cookies"
                      checked={formData.collectionMethods.includes('cookies')}
                      onChange={handleMultipleCheckboxes}
                      className="mr-2"
                    />
                    <label htmlFor="method-cookies">Cookies and similar technologies</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="method-api"
                      name="collectionMethods"
                      value="api"
                      checked={formData.collectionMethods.includes('api')}
                      onChange={handleMultipleCheckboxes}
                      className="mr-2"
                    />
                    <label htmlFor="method-api">API/System integration</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="method-manual"
                      name="collectionMethods"
                      value="manual"
                      checked={formData.collectionMethods.includes('manual')}
                      onChange={handleMultipleCheckboxes}
                      className="mr-2"
                    />
                    <label htmlFor="method-manual">Manual data entry</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="method-other"
                      name="collectionMethods"
                      value="other"
                      checked={formData.collectionMethods.includes('other')}
                      onChange={handleMultipleCheckboxes}
                      className="mr-2"
                    />
                    <label htmlFor="method-other">Other methods</label>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Step 3: Storage Phase */}
          {currentStep === 3 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Storage/Retention Phase</h2>
              
              <div className="mb-4">
                <label htmlFor="storageLocation" className="block text-muted-foreground font-medium mb-2">
                  Geographic location of storage/retention:
                </label>
                <Select
                  value={formData.storageLocation}
                  onValueChange={(value) => setFormData({ ...formData, storageLocation: value })}
                >
                  <SelectTrigger className="w-full py-6 px-4 border rounded-md bg-card text-base">
                    <SelectValue placeholder="-- Select location --" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
                    <SelectItem value="gcc">Other GCC countries</SelectItem>
                    <SelectItem value="middle-east">Middle East (non-GCC)</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="north-america">North America</SelectItem>
                    <SelectItem value="asia-pacific">Asia-Pacific</SelectItem>
                    <SelectItem value="other">Other regions</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="storagePlace" className="block text-muted-foreground font-medium mb-2">
                  Place of storage/retention:
                </label>
                <Select
                  value={formData.storagePlace}
                  onValueChange={(value) => setFormData({ ...formData, storagePlace: value })}
                >
                  <SelectTrigger className="w-full py-6 px-4 border rounded-md bg-card text-base">
                    <SelectValue placeholder="-- Select location --" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public-cloud">Public cloud</SelectItem>
                    <SelectItem value="private-cloud">Private cloud</SelectItem>
                    <SelectItem value="hybrid-cloud">Hybrid cloud</SelectItem>
                    <SelectItem value="on-premises">On-premises/Entity&apos;s headquarters</SelectItem>
                    <SelectItem value="third-party">Third-party data center</SelectItem>
                    <SelectItem value="other">Other storage location</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="retentionPeriod" className="block text-muted-foreground font-medium mb-2">
                  Period of personal data retention:
                </label>
                <Select
                  value={formData.retentionPeriod}
                  onValueChange={(value) => setFormData({ ...formData, retentionPeriod: value })}
                >
                  <SelectTrigger className="w-full py-6 px-4 border rounded-md bg-card text-base">
                    <SelectValue placeholder="-- Select location --" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="statutory">Based on statutory requirement</SelectItem>
                    <SelectItem value="purpose-fulfillment">Until purpose fulfillment</SelectItem>
                    <SelectItem value="less-than-1-year">Less than 1 year</SelectItem>
                    <SelectItem value="1-3-years">1-3 years</SelectItem>
                    <SelectItem value="3-5-years">3-5 years</SelectItem>
                    <SelectItem value="5-10-years">5-10 years</SelectItem>
                    <SelectItem value="more-than-10-years">More than 10 years</SelectItem>
                    <SelectItem value="indefinite">Indefinite</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          
          {/* Step 4: Usage Phase */}
          {currentStep === 4 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Usage Phase</h2>
              
              <div className="mb-4">
                <label htmlFor="usageActivities" className="block text-muted-foreground font-medium mb-2">
                  Describe all personal data processing activities:
                </label>
                <textarea
                  id="usageActivities"
                  name="usageActivities"
                  value={formData.usageActivities}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border rounded-md bg-card"
                  placeholder="Include all processing activities, including remote access for any purpose..."
                ></textarea>
              </div>
            </div>
          )}
          
          {/* Step 5: Disclosure Phase */}
          {currentStep === 5 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Disclosure Phase</h2>
              
              <div className="mb-4">
                <label htmlFor="disclosureActivities" className="block text-muted-foreground font-medium mb-2">
                  Describe all processing activities related to disclosure of personal data:
                </label>
                <textarea
                  id="disclosureActivities"
                  name="disclosureActivities"
                  value={formData.disclosureActivities}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border rounded-md bg-card"
                  placeholder="Describe disclosure activities..."
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label htmlFor="disclosureEntities" className="block text-muted-foreground font-medium mb-2">
                  Identify entities to which personal data is disclosed:
                </label>
                <textarea
                  id="disclosureEntities"
                  name="disclosureEntities"
                  value={formData.disclosureEntities}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border rounded-md bg-card"
                  placeholder="List entities (within or outside the Kingdom) to which data is disclosed..."
                ></textarea>
              </div>
            </div>
          )}
          
          {/* Step 6: Destruction Phase */}
          {currentStep === 6 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Destruction Phase</h2>
              
              <div className="mb-4">
                <label htmlFor="destructionMethods" className="block text-muted-foreground font-medium mb-2">
                  Describe methods for personal data destruction:
                </label>
                <textarea
                  id="destructionMethods"
                  name="destructionMethods"
                  value={formData.destructionMethods}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border rounded-md bg-card"
                  placeholder="Specify methods used to notify expiration of retention period and secure means for destroying data..."
                ></textarea>
              </div>
            </div>
          )}
          
          {/* Step 7: Risk Assessment Phase */}
          {currentStep === 7 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Risk Assessment Phase</h2>
              
              <div className="mb-4">
                <label htmlFor="vulnerabilities" className="block text-muted-foreground font-medium mb-2">
                  Identify vulnerabilities or weak spots:
                </label>
                <textarea
                  id="vulnerabilities"
                  name="vulnerabilities"
                  value={formData.vulnerabilities}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border rounded-md bg-card"
                  placeholder="Describe inadequacies in measures for processing activities..."
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label htmlFor="threatSources" className="block text-muted-foreground font-medium mb-2">
                  Identify sources of threats:
                </label>
                <textarea
                  id="threatSources"
                  name="threatSources"
                  value={formData.threatSources}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border rounded-md bg-card"
                  placeholder="Describe internal or external threat sources..."
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label htmlFor="expectedEvents" className="block text-muted-foreground font-medium mb-2">
                  Describe expected events that might exploit vulnerabilities:
                </label>
                <textarea
                  id="expectedEvents"
                  name="expectedEvents"
                  value={formData.expectedEvents}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border rounded-md bg-card"
                  placeholder="Describe potential events that could lead to negative impacts..."
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label htmlFor="impactLevel" className="block text-muted-foreground font-medium mb-2">
                  Rate the potential impact level:
                </label>
                <select
                  id="impactLevel"
                  name="impactLevel"
                  value={formData.impactLevel}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md bg-card"
                >
                  <option value="low">Low (Limited to data subject)</option>
                  <option value="medium">Medium (Extends to family and friends)</option>
                  <option value="high">High (Impacts broader community)</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="probabilityLevel" className="block text-muted-foreground font-medium mb-2">
                  Rate the probability of occurrence:
                </label>
                <select
                  id="probabilityLevel"
                  name="probabilityLevel"
                  value={formData.probabilityLevel}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md bg-card"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          )}
          
          {/* Step 8: Transfer and Kingdom Interests Assessment */}
          {currentStep === 8 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Transfer Assessment and Kingdom Interests</h2>
              
              <div className="mb-4">
                <label htmlFor="transferNature" className="block text-muted-foreground font-medium mb-2">
                  Nature of data transfer or disclosure:
                </label>
                <textarea
                  id="transferNature"
                  name="transferNature"
                  value={formData.transferNature}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border rounded-md bg-card"
                  placeholder="Analyze phases of transferring/disclosing data outside the Kingdom..."
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label htmlFor="receivingEntities" className="block text-muted-foreground font-medium mb-2">
                  Compliance of entities receiving transferred data:
                </label>
                <textarea
                  id="receivingEntities"
                  name="receivingEntities"
                  value={formData.receivingEntities}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border rounded-md bg-card"
                  placeholder="Evaluate compliance with provisions of the Law and its Regulations..."
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label htmlFor="additionalMeasures" className="block text-muted-foreground font-medium mb-2">
                  Additional measures to reduce risks:
                </label>
                <textarea
                  id="additionalMeasures"
                  name="additionalMeasures"
                  value={formData.additionalMeasures}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border rounded-md bg-card"
                  placeholder="List measures to mitigate risk levels..."
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label htmlFor="processingScope" className="block text-muted-foreground font-medium mb-2">
                  Scope of processing:
                </label>
                <textarea
                  id="processingScope"
                  name="processingScope"
                  value={formData.processingScope}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full p-3 border rounded-md bg-card"
                  placeholder="Describe content of personal data, number of data subjects, categories..."
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label htmlFor="impactScope" className="block text-muted-foreground font-medium mb-2">
                  Scope of impact:
                </label>
                <textarea
                  id="impactScope"
                  name="impactScope"
                  value={formData.impactScope}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full p-3 border rounded-md bg-card"
                  placeholder="Describe scope of impact (limited to data subjects, extending to family/friends, or society at large)..."
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label htmlFor="adequacyOfMeasures" className="block text-muted-foreground font-medium mb-2">
                  Adequacy of measures:
                </label>
                <textarea
                  id="adequacyOfMeasures"
                  name="adequacyOfMeasures"
                  value={formData.adequacyOfMeasures}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full p-3 border rounded-md bg-card"
                  placeholder="Evaluate adequacy of technical, organizational, and administrative measures..."
                ></textarea>
              </div>
            </div>
          )}
          
          {/* Step 9: Results */}
          {currentStep === 9 && assessmentResult && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Risk Assessment Results</h2>
              
              {<div className="p-4 rounded-lg mb-6 text-background" style={{ backgroundColor: `${assessmentResult.riskLevel === 'High' ? '#fee2e2' : assessmentResult.riskLevel === 'Medium' ? '#fef3c7' : '#d1fae5'}` }}>
                <h3 className="font-bold text-lg mb-2">Risk Level: {assessmentResult.riskLevel}</h3>
                <p className="mb-1">Risk Score: {assessmentResult.riskScore} out of 9</p>
                
                <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4 mt-2">
                  <div 
                    className={`h-2.5 rounded-full ${assessmentResult.riskLevel === 'High' ? 'bg-red-600' : assessmentResult.riskLevel === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'}`}
                    style={{ width: `${(assessmentResult.riskScore / 9) * 100}%` }}
                  ></div>
                </div>
                
                {formData.involveSensitiveData && (
                  <p className="text-red-700 mb-1">⚠ Processing involves sensitive data (high risk factor)</p>
                )}
                
                {(formData.storageLocation !== 'saudi-arabia' && formData.storageLocation !== '') && (
                  <p className="text-red-700 mb-1">⚠ Data stored outside Saudi Arabia (increased risk)</p>
                )}
              </div>}
              
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">Recommended Actions:</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {assessmentResult?.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
              
              <div className="p-4 text-muted-foreground rounded-lg mb-6">
                <h3 className="font-bold text-lg mb-2 text-foreground">Next Steps:</h3>
                <p className="mb-2 text-foreground">Based on this assessment result, you should:</p>
                
                {assessmentResult.riskLevel === 'High' && (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Review your transfer mechanism and consider alternatives</li>
                    <li>Consult with the Saudi Data & AI Authority (SDAIA)</li>
                    <li>Implement additional safeguards before proceeding</li>
                    <li>Document all risk mitigation measures thoroughly</li>
                    <li>Consider conducting a full Data Protection Impact Assessment (DPIA)</li>
                  </ul>
                )}
                
                {assessmentResult.riskLevel === 'Medium' && (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Implement the recommended safeguards</li>
                    <li>Document your risk assessment process</li>
                    <li>Regularly review your data transfer arrangements</li>
                    <li>Consider conducting additional assessment if circumstances change</li>
                  </ul>
                )}
                
                {assessmentResult.riskLevel === 'Low' && (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Document your risk assessment process</li>
                    <li>Maintain regular monitoring of data transfer processes</li>
                    <li>Review when significant changes occur to your processing activities</li>
                  </ul>
                )}
              </div>
              
              <div className="p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Important Disclaimer:</h3>
                <p className="text-sm text-muted-foreground">
                  This assessment tool is based on the SDAIA&apos;s &quot;Risk Assessment Guideline for Transferring Personal Data Outside the Kingdom&quot; and is provided for guidance purposes only. The results are not legally binding and should be used as a starting point for your compliance efforts. Always consult with legal professionals familiar with Saudi data protection law for specific advice.
                </p>
              </div>
            </div>
          )}
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="px-4 py-2 bg-gray-200 text-muted rounded-md hover:bg-gray-300"
              >
                Previous
              </button>
            )}
            
            {currentStep < 8 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 bg-tertiary text-foreground rounded-md hover:bg-tertiary-foreground"
              >
                Next
              </button>
            ) : currentStep === 8 ? (
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-foreground rounded-md hover:bg-green-700"
              >
                Submit Assessment
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="px-4 py-2 bg-tertiary text-foreground rounded-md hover:bg-tertiary-foreground"
              >
                Start New Assessment
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default DataTransferRiskAssessment;