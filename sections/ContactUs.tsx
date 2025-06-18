'use client'

import React from 'react'
import { Phone } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from './ContactForm';
import { ButtonOne } from '@/components/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ContactUs = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id='contact' className='md:mt-12 md:py-20 py-12'>
      <motion.div 
        className="max-w-screen-xl mx-auto text-center md:mb-16 mb-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: { 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: 0.6, 
              ease: [0.4, 0, 0.2, 1] 
            } 
          }
        }}
      >
        <h2 className="text-3xl md:text-6xl font-bold text-primary mb-6">
          Get in Touch
        </h2>
        <p className="text-base md:text-xl text-muted-foreground">
          Have questions about our ORM? We're here to help
        </p>
      </motion.div>

      <motion.div 
        className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Contact Info */}
          <motion.div variants={{
            hidden: { opacity: 0, y: 40 },
            show: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 0.6, 
                ease: [0.4, 0, 0.2, 1] 
              } 
            }
          }}>
            <Card className="bg-transparent border-0">
              <CardContent className="px-8 py-2">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="!h-5 !w-5 text-secondary" />
                    <span>+91 89203 96371</span>
                  </div>
                </div>
                <Image 
                  width={500}
                  height={500}
                  alt={'contact svg'}
                  src={'/contact.svg'}
                  className='w-full mx-auto my-10'
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={{
            hidden: { opacity: 0, y: 40 },
            show: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 0.6, 
                ease: [0.4, 0, 0.2, 1] 
              } 
            }
          }}>
            <Card className="bg-transparent hover:border-primary transition-colors">
              <CardContent className="py-6 px-5 space-y-4">
                <ContactForm />
                <ButtonOne className="w-full">
                  Send Message
                </ButtonOne>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs
