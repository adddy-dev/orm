import HeroSec from '@/sections/HeroSec';
import React from 'react';
import Benefits from '@/sections/Benefits';
import Pricing from '@/sections/Pricing';
import Footer from '@/sections/Footer';
import Contacts from '@/sections/Contacts';
import AboutUs from '@/sections/AboutUs';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <main className="mx-auto">
        <HeroSec />
        <Benefits />
        <Pricing />
        <Contacts />
        <AboutUs />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;