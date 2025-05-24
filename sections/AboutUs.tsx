import React from 'react';

const AboutUs = () => {
  return (
    <section className="w-full bg-background py-20 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Us</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          At ORM, we are dedicated to empowering businesses and individuals to take control of their online reputation. Our mission is to provide cutting-edge, AI-powered solutions that help you build trust, protect your brand, and grow with confidence in the digital world.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-card rounded-lg p-6 shadow flex flex-col items-center">
            <span className="text-3xl font-bold text-secondary mb-2">Our Vision</span>
            <p className="text-muted-foreground">To be the leading platform for online reputation management, trusted by organizations worldwide.</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow flex flex-col items-center">
            <span className="text-3xl font-bold text-secondary mb-2">Our Mission</span>
            <p className="text-muted-foreground">Deliver innovative, user-friendly tools that leverage AI to simplify compliance, enhance transparency, and foster digital trust.</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow flex flex-col items-center">
            <span className="text-3xl font-bold text-secondary mb-2">Our Values</span>
            <p className="text-muted-foreground">Integrity, innovation, and customer-centricity guide everything we do as we help you succeed online.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
