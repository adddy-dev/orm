'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems: Array<{
    label: string
    href: string
    options?: {
      label: string
      href: string
    }[]
    heads?: Array<{
      label: string
      options?: {
        label: string
        href: string
      }[]
    }>
  }> = [
    {
      label: 'Home',
      href: '#',
    },
    {
      label: 'About',
      href: '#about',
    },
    {
      label: 'Services',
      href: '#',
      heads: [
        {
          label: 'By Industry',
          options: [
            { label: 'Financial Services', href: '/' },
            { label: 'Healthcare', href: '/' },
            { label: 'Non-profit Organizations', href: '/' },
            { label: 'Food & Beverages', href: '/' },
            { label: 'Energy & Utility', href: '/' },
            { label: 'Manufacturing', href: '/' },
          ]
        },
        {
          label: 'By Framework',
          options: [
            { label: 'SOX', href: '/' },
            { label: 'ISO 27001', href: '/' },
            { label: 'NIST', href: '/' },
            { label: 'PCI DSS', href: '/' },
            { label: 'SAMA CSF', href: '/' },
            { label: 'PDPL', href: '/' },
          ]
        }
      ]
    },
    {
      label: 'Contact',
      href: '#contact'
    }
  ]

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 h-20 bg-background sticky top-0 z-50">
      <Logo />

      {/* Desktop and larger screens: Menu links */}
      <div className="hidden md:flex items-center w-full max-w-5xl gap-x-10 justify-end">
        {navItems.map((item, index) => (
          (item.options || item.heads) ? (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger className='outline-none'>
                <Link
                  href={item.href}
                  className="hover:text-primary flex items-center gap-1 text-sm"
                >
                  {item.label}
                  <ChevronDown size={16} />
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center"
                className='border border-muted-foreground bg-background'
              >
                {item.options && item.options.map((option, index) => (
                  <DropdownMenuItem key={index}>
                    <Link href={option.href} className='flex items-center gap-1'>
                      <ChevronRight size={16} />
                      {option.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <div className='flex flex-row gap-10 p-4'>
                  {item.heads && item.heads.map((head, index) => (
                    <div className='flex flex-col gap-2 items-start justify-start' key={index}>
                      <h3 className='text-sm font-semibold mb-2'>{head.label}</h3>
                      {head.options?.map((option, i) => (
                        <DropdownMenuItem key={i}>
                          <Link href={option.href} className='flex gap-1 items-center'>
                            <ChevronRight size={16} />
                            {option.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              key={index}
              href={item.href}
              className="hover:text-primary flex items-center gap-1 text-sm"
            >
              {item.label}
            </Link>
          )
        ))}
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

      {/* Mobile menu toggle */}
      <button
        className="lg:hidden flex-col flex items-center gap-1.5 justify-center cursor-pointer h-full"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block w-8 h-1 bg-primary rounded-full transform transition duration-300 ${menuOpen ? 'rotate-45 translate-y-3' : ''}`}></span>
        <span className={`block w-8 h-1 bg-primary rounded-full transition duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-8 h-1 bg-primary rounded-full transition duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile menu items */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background p-6 z-50 text-center items-center flex flex-col gap-4">
          {navItems.map((item, index) => (
            (item.options || item.heads) ? (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger className='outline-none'>
                  <Link
                    href={item.href}
                    className="hover:text-primary flex items-center gap-1 text-base"
                  >
                    {item.label}
                    <ChevronDown size={16} />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center"
                  className='border border-muted-foreground bg-background'
                >
                  {item.options && item.options.map((option, index) => (
                    <DropdownMenuItem key={index}>
                      <Link href={option.href} className='flex items-center gap-1'>
                        <ChevronRight size={16} />
                        {option.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <div className='flex flex-row gap-10 p-4'>
                    {item.heads && item.heads.map((head, index) => (
                      <div className='flex flex-col gap-2 items-start justify-start' key={index}>
                        <h3 className='text-sm font-semibold mb-2'>{head.label}</h3>
                        {head.options?.map((option, i) => (
                          <DropdownMenuItem key={i}>
                            <Link href={option.href} className='flex gap-1 items-center'>
                              <ChevronRight size={16} />
                              {option.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="hover:text-primary flex items-center gap-1 text-base"
              >
                {item.label}
              </Link>
            )
          ))}
          <div className="flex items-center gap-5">
            <SignedOut>
              <SignInButton
                signUpForceRedirectUrl="/dashboard"
                forceRedirectUrl="/dashboard"
              >
                <Button className="text-base bg-foreground border-2 border-primary text-primary px-6 py-5 rounded-full font-bold hover:bg-primary hover:text-foreground">
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
      )}
    </nav>
  )
}

export default Navbar
