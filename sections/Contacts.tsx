import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from './ConactForm';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ButtonOne } from '@/components/Button';

const Contacts = () => {
  return (
    <section id='contact' className='pt-12'>
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-6xl font-bold text-primary mb-6">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground px-2">
          Have questions about our ORM ? We're here to help
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information Card */}
          <Card className="bg-card h-min">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="!h-5 !w-5 text-secondary" />
                  <span>+91 89203 96371</span>
                </div>
                {/* <div className="flex items-center gap-3">
                  <Mail className="!h-5 !w-5 text-secondary" />
                  <Link href="mailto:contact@cyberpolicyal.com" className="hover:text-primary/80">
                    contact@aipolicypro.com
                  </Link>
                </div> */}
                {/* <div className="flex items-center gap-3">
                  <MapPin className="!h-5 !w-5 text-secondary" />
                  <span> IFZA Headquarters, <br />Dubai Digital Park Buildings <br />DUBAI - UAE</span>
                </div> */}
              </div>
            </CardContent>
          </Card>

          {/* Contact Form Card */}
          <Card className="bg-card hover:border-primary transition-colors">
            <CardContent className="py-6 px-8 space-y-4">
              <ContactForm />
              <ButtonOne className="w-full">
                Send Message
              </ButtonOne>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contacts