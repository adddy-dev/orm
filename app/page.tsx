import Navbar from '@/components/Navbar';
import FeaturesSec from '@/sections/FeaturesSec';
import About from '@/sections/About';
import HeroSec from '@/sections/HeroSec';
import React from 'react';
import Benefits from '@/sections/Benefits';
import Pricing from '@/sections/Pricing';
import Demo from '@/sections/Demo';
import Testimonials from '@/sections/Testimonials';
import Footer from '@/sections/Footer';
import FAQSection from '@/sections/FAQ';
import Contacts from '@/sections/Contacts';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <main className="mx-auto">
        <HeroSec />

        <About />
        <Demo />
        <FeaturesSec />
        <Benefits />
        <Pricing />
        <FAQSection />
        <Testimonials />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;