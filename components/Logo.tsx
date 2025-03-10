import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-2xl font-bold text-primary">
      <Image
        width={40}
        height={40}
        src="/logo.svg"
        alt="AIPolicyPro Logo"
        className='w-8 h-8 mr-2'
      />
      <span className='font-medium'>|</span>
      <h1 className='pl-2'>AIPolicyPro</h1>
    </Link>
  )
}

export default Logo