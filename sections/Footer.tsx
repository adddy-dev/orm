import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import Logo from '@/components/Logo';
import { Label } from '@/components/ui/label';
import ContactForm from './ConactForm';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Benefits', href: '/benefits' },
    { name: 'Demo', href: '/demo' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'Knowledge Base', href: '/knowledge' },
    { name: 'API Reference', href: '/api' },
    { name: 'Support Center', href: '/support' },
  ];

  return (
    <footer className="bg-background text-primary pt-16 pb-8" id="contact">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Get in Touch
        </h2>
        <p className="text-base text-muted-foreground">
          Have questions about our AI-powered ISMS policy generator? We're here to help
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information Card */}
          <Card className="bg-card h-min">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="!h-5 !w-5 text-tertiary" />
                  <span>+971 4 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="!h-5 !w-5 text-tertiary" />
                  <a href="mailto:contact@cyberpolicyal.com" className="hover:text-primary/80">
                    contact@cyberpolicyal.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="!h-5 !w-5 text-tertiary" />
                  <span>Dubai Internet City, UAE</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form Card */}
          <Card className="bg-card hover:border-primary transition-colors">
            <CardContent className="py-6 px-8 space-y-4">
              <ContactForm />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 pt-20 border-t border-border">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">
              <Logo />
            </h3>
            <p className="text-sm text-muted-foreground">
              Empowering Middle East SMEs with AI-driven ISMS policy generation and management solutions.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Facebook className="!h-5 !w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="!h-5 !w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="!h-5 !w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with our latest features and releases.
            </p>
            <div className="space-y-2">
              <Input
                placeholder="Enter your email"
                type="email"
                className='bg-card'
              />
              <Button className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 CyberPolicy AI. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </a>
              <a href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </a>
              <a href="/about" className="text-sm text-muted-foreground hover:text-primary">
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;