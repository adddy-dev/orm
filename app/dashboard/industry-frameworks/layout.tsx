import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <section className='relative overflow-auto my-8'>
      <h1 className='text-primary text-3xl font-bold text-center mt-3'>
        GCC Region: Industry-Specific Regulatory Frameworks
      </h1>
      {children}
    </section>
  )
}

export default Layout