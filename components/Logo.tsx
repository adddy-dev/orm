import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center text-2xl font-bold text-primary">
      <Image
        width={40}
        height={40}
        src="/logo.svg"
        alt="AIPolicyPro Logo"
        className='w-10 h-10'
      />
      <span className='font-medium'>|</span>
      <h1 className='pl-2'>AIPolicyPro</h1>
    </div>
  )
}

export default Logo