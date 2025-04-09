import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-2xl font-bold text-primary">
      <Image
        width={200}
        height={20}
        src="/logo.png"
        alt="AIPolicyPro Logo"
        className='h-20 w-auto mr-2'
      />
      {/* <span className='font-medium'>|</span>
      <h1 className='pl-2'>AIPolicyPro</h1> */}
    </Link>
  )
}

export default Logo