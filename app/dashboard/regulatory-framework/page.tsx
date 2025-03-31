import FrameworkComparisonTool from '@/sections/FrameworkComparison'
import RegulatoryFrameworks from '@/sections/RegulatoryFrameworks'
import { notFound } from 'next/navigation'
import React from 'react'


const page = () => {
  notFound()
  return (
    <section className='relative overflow-auto px-4'>
      <FrameworkComparisonTool />
      <RegulatoryFrameworks />
    </section>
  )
}

export default page