import React from 'react'

const Layout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
  
  return (
    <main className='flex justify-center items-center min-h-screen'>
      {children}
    </main>
  )
}

export default Layout