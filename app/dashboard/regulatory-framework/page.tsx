import FrameworkComparisonTool from '@/sections/FrameworkComparison'
import RegulatoryFrameworks from '@/sections/RegulatoryFrameworks'
import React from 'react'

const page = () => {
  return (
    <section className='relative overflow-auto px-4'>
      <FrameworkComparisonTool />
      <RegulatoryFrameworks />
    </section>
  )
}

export default page