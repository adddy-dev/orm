import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-3xl font-bold text-primary">
      {/* <Image
        width={200}
        height={20}
        src="/logo.png"
        alt="AIPolicyPro Logo"
        className='h-16 w-auto mr-2 object-cover'
      /> */}
      {/* <span className='font-medium'>|</span> */}
      <h1 className='hover:text-secondary'>ORM</h1>
    </Link>
  )
}

export default Logo