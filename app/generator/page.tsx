import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import PolicyGeneratorForm from '@/sections/PolicyGenerator';
import Logo from '@/components/Logo';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function PolicyGenerator() {
  return (
    <section className='min-h-screen bg-background'>
      <nav className="flex items-center justify-between px-4 md:px-8 h-16 bg-background sticky top-0 z-50">
        <Logo />
        <div className="hidden md:flex items-center w-full max-w-5xl gap-x-10 justify-end">
          <Link href={'/'}>
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-5">
            <SignedOut>
              <SignInButton
                signUpForceRedirectUrl="/dashboard"
                forceRedirectUrl="/dashboard"
              >
                <Button className="text-base bg-transparent border-2 border-foreground text-foreground px-6 py-5 rounded-full font-bold hover:bg-primary hover:text-foreground">
                  Log in
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link
                href="/dashboard"
              >
                <Button className="!py-1.5 px-4 text-sm">
                  Dashboard
                </Button>
              </Link>
            </SignedIn>
          </div>
        </div>
      </nav>
      <div className="p-6 flex items-center justify-center">
        <Card className="md:max-w-6xl mx-auto w-full">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Policy Generation Form
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <PolicyGeneratorForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}