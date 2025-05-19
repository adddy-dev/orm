import React from 'react'

const Layout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
  
  return (
    <main className='flex justify-center items-center h-[calc(100vh-6rem)]'>
      {children}
    </main>
  )
}

export default Layout