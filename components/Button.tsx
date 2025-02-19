import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const ButtonOne = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <Button className={`text-base text-foreground bg-primary border-foreground border-2 px-6 py-5 rounded-full font-bold hover:bg-foreground hover:text-primary ${cn(className)}`}>
      {children}
    </Button>
  )
}

const ButtonTwo = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <Button className={`text-base bg-foreground border-2 border-primary text-primary px-6 py-5 rounded-full font-bold hover:bg-primary hover:text-foreground ${className || ''}`}>
      {children}
    </Button>
  )
}

export { ButtonOne, ButtonTwo }