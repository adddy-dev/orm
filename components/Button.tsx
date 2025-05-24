import React from 'react'
import { Button } from './ui/button'

const ButtonOne = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <Button className={`text-base bg-foreground border-2 border-foreground text-background px-6 py-5 font-medium hover:bg-transparent hover:text-foreground ${className || ''}`}>
      {children}
    </Button>
  )
}

export { ButtonOne }