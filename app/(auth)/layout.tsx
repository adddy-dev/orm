import React from 'react'

const Layout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
  
  return (
    <main className='flex justify-center items-center min-h-screen'>
      {children}
    </main>

    // <main className='flex justify-center items-center min-h-screen'>
    //   <Card className='flex max-w-screen-lg w-full mx-4 overflow-hidden p-0 border-0 lg:border bg-image'>
    //     <div className='w-full min-h-full hidden lg:block'>
    //       {/* <Image 
    //         src='/auth.svg' alt='auth svg'
    //         width={400} height={400} 
    //         className='w-[500px] object-cover'
    //       /> */}
    //     </div>
    //     <div className='w-full'>
    //       {children}
    //     </div>
    //   </Card>
    // </main>
  )
}

export default Layout