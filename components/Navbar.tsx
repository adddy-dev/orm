'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { Button } from './ui/button'
import { useSession, signOut } from 'next-auth/react'
import { ButtonOne } from './Button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Navbar = () => {

  const { data: session } = useSession();

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
        href: '/#',
      },
      {
        label: 'Services',
        href: '/services/scrapper',
      },
      {
        label: 'Contact',
        href: '/#contact'
      },
      {
        label: 'About Us',
        href: '/#about'
      }
    ]

  return (
    <div className='bg-black/50 sticky top-0 z-50 backdrop-blur-sm'>
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-4 md:px-8 h-20">
        <Logo />
        {/* Desktop and larger screens: Menu links */}
        <div className="hidden md:flex items-center w-full max-w-5xl gap-x-10 justify-end">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="hover:text-secondary flex items-center gap-1 text-base"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-5">
            {(session?.user) ? (
              <>
                {(session.user.role == 'admin') && <Link href="/dashboard">
                  <ButtonOne className="!py-1.5 px-4 text-base">
                    Dashboard
                  </ButtonOne>
                </Link>}

                <Link href={'/profile'}>
                  <Avatar>
                    <AvatarImage src={session.user.image as string} />
                    <AvatarFallback>{session.user.name?.split('')[0]}</AvatarFallback>
                  </Avatar>
                </Link>
                <Button
                  className="!py-1.5 px-4 text-base bg-transparent text-destructive-foreground hover:text-muted-foreground ml-2"
                  onClick={() => signOut({ callbackUrl: '/signin' })}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link href={'/signin'}>
                <Button className="text-base bg-transparent border-2 border-foreground text-foreground px-6 py-5 rounded-full font-bold hover:bg-foreground hover:text-background">
                  Log in
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex-col flex items-center gap-1.5 justify-center cursor-pointer h-full"
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
              <Link
                key={index}
                href={item.href}
                className="hover:text-muted-foreground flex items-center gap-1 text-base"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-5">
              {session?.user ? (
                <>
                  {(session.user.role == 'admin') && <Link href="/dashboard">
                    <ButtonOne className="!py-1.5 px-4 text-base">
                      Dashboard
                    </ButtonOne>
                  </Link>}
                  <Link href={'/profile'}>
                    <Avatar>
                      <AvatarImage src={session.user.image as string} />
                      <AvatarFallback>{session.user.name?.split('')[0]}</AvatarFallback>
                    </Avatar>
                  </Link>
                  <Button
                    className="!py-1.5 px-4 text-base bg-transparent text-destructive-foreground hover:text-muted-foreground ml-2"
                    onClick={() => signOut({ callbackUrl: '/signin' })}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Link href={'/signin'}>
                  <Button className="text-base bg-transparent border-2 border-foreground text-foreground px-6 py-5 rounded-full font-bold hover:bg-primary hover:text-foreground">
                    Log in
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
