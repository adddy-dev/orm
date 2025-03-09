import FrameworkComparisonTool from '@/sections/FrameworkComparison'
import RegulatoryFrameworks from '@/sections/RegulatoryFrameworks'
import { Protect } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <Protect
      fallback={
        <div className="flex flex-col h-screen items-center justify-center w-full">
          <p>Kindly login</p>
          <Link href="/" className="my-8 border border-white px-4 py-2">
            Go back Home
          </Link>
        </div>
      }
    >
      <section>
        <FrameworkComparisonTool />
        <RegulatoryFrameworks />
      </section>
    </Protect>
  )
}

export default page