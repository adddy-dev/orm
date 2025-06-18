'use client'


import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react'

interface PolicyFormData {
  fullname: string;
  company_name: string;
  email: string;
  message: string;
}

const ContactForm = () => {

  const [formData, setFormData] = useState<PolicyFormData>({
    fullname: '',
    company_name: '',
    email: '',
    message: ''
  });

  const formFields = [
    { name: 'fullname', label: 'Full Name', type: 'text', placeholder: 'Your name' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Your@gmail.com' },
    { name: 'company_name', label: 'Company Name', type: 'text', placeholder: 'Your company name' },
    { name: 'message', label: 'Description', type: 'textarea', placeholder: 'How can we help you ?' },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className='flex flex-col gap-y-5'>
      {formFields.map((field) => (
        <div key={field.name} className="space-y-2">
          <Label htmlFor={field.name}>{field.label}</Label>
          {field.type === 'textarea' ? (
            <Textarea
              id={field.name}
              name={field.name}
              value={formData[field.name as keyof PolicyFormData]}
              onChange={handleInputChange}
              className="resize-none"
              placeholder={field.placeholder}
              rows={4}
            />
          ) : (
            <Input
              id={field.name}
              type={field.type}
              name={field.name}
              value={formData[field.name as keyof PolicyFormData]}
              onChange={handleInputChange}
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}
    </div>

  )
}

export default ContactForm