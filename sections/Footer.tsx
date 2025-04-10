import React from 'react';
import { Button } from "@/components/ui/button";
import Logo from '@/components/Logo';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Demo', href: '#demo' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'Knowledge Base', href: '/knowledge' },
    { name: 'API Reference', href: '/api' },
    { name: 'Support Center', href: '/support' },
  ];

  return (
    <footer className="bg-background text-primary md:pt-16 pt-5 pb-8 px-6 lg:px-0 max-w-7xl mx-auto">

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 sm:pt-20 pt-5 border-t border-border">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">
              <Logo />
            </h3>
            <p className="text-sm text-muted-foreground">
              Empowering Middle East SMEs with AI-driven ISMS policy generation and management solutions.
            </p>
            <div className="flex gap-4">
              <Link href={'https://www.linkedin.com/company/106259682'}>
                <Button variant="ghost" size="icon">
                  <Linkedin className="!h-5 !w-5" />
                </Button>
              </Link>
            </div>
            <div className=' pt-18'>
              Powered by
              <Image 
                src={'/ca_logo.svg'}
                alt="CyberAssured Logo"
                width={200}
                height={100}
                className="object-cover pt-2 block"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col items-center'>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {/* <SignedIn> */}
                <li>
                  <Link href={'/dashboard'}
                    className="text-muted-foreground hover:text-primary transition-colors text-base">
                    Dashboard
                  </Link>
                </li>
              {/* </SignedIn> */}
              {quickLinks.map((link) => (
                <li key={link.name} className='text-center'>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
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
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center w-full">
              © 2025 AIPolicyPro. All rights reserved.
            </p>
            <div className="flex gap-6">
              {/* <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link> */}
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;