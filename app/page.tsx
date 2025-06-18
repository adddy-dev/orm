'use client';

import HeroSec from '@/sections/HeroSec';
import React from 'react';
import Benefits from '@/sections/Benefits';
import Pricing from '@/sections/Pricing';
import Footer from '@/sections/Footer';
import ContactUs from '@/sections/ContactUs';
import { motion } from 'framer-motion';
import WhatWeOffer from '@/sections/WhatWeOffer';
import SocialManagement from '@/sections/SocialManagement';

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <main className="mx-auto">
        <HeroSec />

        <WhatWeOffer />

        <SocialManagement />

        <Benefits />

        <Pricing />

        <motion.section
          className="w-full bg-background py-20 px-4 sm:px-6 lg:px-8"
          id="about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-screen-xl mx-auto text-center">
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
              <h2 className="text-3xl md:text-6xl font-bold text-primary mb-6">About Us</h2>
              <p className="text-base md:text-xl text-muted-foreground px-0">
                At ORM, we are dedicated to empowering businesses and individuals to take control of their online reputation. Our mission is to provide cutting-edge, AI-powered solutions that help you build trust, protect your brand, and grow with confidence in the digital world.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Our Vision",
                  emoji: "🌍",
                  description:
                    "To be the leading platform for online reputation management, trusted by organizations worldwide."
                },
                {
                  title: "Our Mission",
                  emoji: "🚀",
                  description:
                    "Deliver innovative, user-friendly tools that leverage AI to simplify compliance, enhance transparency, and foster digital trust."
                },
                {
                  title: "Our Values",
                  emoji: "💡",
                  description:
                    "Integrity, innovation, and customer-centricity guide everything we do as we help you succeed online."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-card rounded-xl shadow-md hover:border-secondary border border-transparent transition-all duration-300 transform text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className='hover:scale-105 transition-all transform w-full h-full p-8'>
                    <div className="text-5xl mb-4">{item.emoji}</div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </motion.section>

        <ContactUs />

        <Footer />
      </main>
    </motion.div>
  );
};

export default LandingPage;