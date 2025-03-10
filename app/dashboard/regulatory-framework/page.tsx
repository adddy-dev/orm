import FrameworkComparisonTool from '@/sections/FrameworkComparison'
import RegulatoryFrameworks from '@/sections/RegulatoryFrameworks'
import React from 'react'

const page = () => {
  return (
    <section className='relative overflow-auto'>
      <FrameworkComparisonTool />
      <RegulatoryFrameworks />
    </section>
  )
}

export default page