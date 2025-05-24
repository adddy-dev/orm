import React from 'react';
import { Button } from "@/components/ui/button";
import Logo from '@/components/Logo';
import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';

const Footer = () => {
  // Updated quickLinks
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '/services/scrapper' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <footer className="bg-card text-primary pt-12 pb-4 px-6 w-full border-t border-border px-4">
      {/* Top Section */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
        {/* Logo and Company */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
        </div>
        {/* Navigation */}
        <div className="flex flex-col gap-2 md:col-span-1">
          <ul className="space-y-2 mt-2">
            {quickLinks.map(link => (
              <li key={link.name}>
                <Link href={link.href} className="hover:underline">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Legal */}
        <div className="flex flex-col gap-2 md:col-span-1">
          <h3 className="font-bold mb-2">LEGAL</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:underline">Terms of Use</Link></li>
          </ul>
        </div>
        {/* GitHub Icon */}
        <div className="flex justify-end items-start md:col-span-1">
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-8 w-8" />
            </Button>
          </Link>
        </div>
      </div>
      {/* Divider */}
      <hr className="border-border mb-4" />
      {/* Bottom Bar */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pb-2">
        <p className="text-sm text-muted-foreground">© 2025 ORM, Inc. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Crafted by ORM Team</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;