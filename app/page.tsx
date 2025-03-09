import Navbar from '@/components/Navbar';
import FeaturesSec from '@/sections/FeaturesSec';
import About from '@/sections/About';
import HeroSec from '@/sections/HeroSec';
import React from 'react';
import Services from '@/sections/Services';
import Benefits from '@/sections/Benefits';
import Pricing from '@/sections/Pricing';
import Demo from '@/sections/Demo';
import Testimonials from '@/sections/Testimonials';
import Footer from '@/sections/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <main className="mx-auto">
        <HeroSec />

        <About />
        <FeaturesSec />
        <Services />
        <Benefits />
        <Demo />
        <Pricing />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;