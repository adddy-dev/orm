'use client';

import { ButtonOne } from '@/components/Button'
import Link from 'next/link'
import { motion } from 'framer-motion';

const HeroSec = () => {
  return (
    <section className='bg-card relative overflow-hidden h-[calc(100vh-80px)] max-h-[700px]' id='hero'>
      {/* Animated Design Background */}
<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
  {/* Circle 1 */}
  <motion.div
    className="absolute w-28 h-28 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 top-[12%] left-[45%]"
    animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Circle 2 */}
  <motion.div
    className="absolute w-32 h-32 rounded-full bg-[#9333ea]/10 border border-[#9333ea]/30 top-[15%] right-[8%]"
    animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />

  <motion.div
    className="absolute w-32 h-32 rounded-full bg-[#aafeca]/10 border border-[#aafeca]/30 bottom-[40%] left-[8%]"
    animate={{ y: [5, -35, 0], x: [20, 5, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />
  
  {/* Line 1 */}
  <motion.div
    className="absolute w-48 h-px bg-[#0ea5e9]/40 top-[40%] left-[30%]"
    animate={{ scaleX: [1, 1.2, 1] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Blob SVG */}
  <motion.svg
    viewBox="0 0 200 200"
    className="absolute w-[300px] opacity-20 left-[55%] top-[65%]"
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 10, repeat: Infinity }}
  >
    <path
      fill="#f43f5e"
      d="M42.8,-61.5C56.3,-54.6,68.5,-42.2,74.1,-27.1C79.6,-11.9,78.4,6.1,70.4,20.2C62.5,34.3,47.7,44.5,33.4,53.1C19.1,61.7,5.3,68.6,-7.8,71.1C-20.9,73.7,-33.3,71.9,-45.6,65.6C-57.9,59.2,-70.1,48.2,-76.6,34.3C-83.1,20.4,-83.8,3.6,-78.9,-11.5C-74,-26.7,-63.5,-40.3,-50.5,-47.2C-37.5,-54.2,-21.9,-54.5,-6.3,-50.1C9.3,-45.7,18.6,-36.7,42.8,-61.5Z"
      transform="translate(100 100)"
    />
  </motion.svg>
</div>

      <div className='lg:max-w-[80%] xl:px-0 sm:px-8 md:py-24 flex items-center justify-center mx-auto relative z-10'>
        {/* Left Column */}
        <div className="py-16 space-y-8 md:space-y-12 md:-mt-10 mx-4 md:mx-auto lg:w-[80%] text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ lineHeight: '1.2' }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1]
                }
              }
            }}
          >
            Spot and stop negative reviews instantly with our smart Online Review Management (ORM)
            {/* <span className="block text-primary">Powered by AI</span> */}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1]
                }
              }
            }}
          >
            Automatically scan reviews, catch offensive language, and take control of your online presence—effortlessly.
          </motion.p>

          <motion.div
            className="flex flex-col gap-y-6 gap-x-12 md:flex-row md:justify-center px-4 py-8 md:p-0"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1]
                }
              }
            }}
          >
            <Link href='/services'>
              <ButtonOne className='md:w-auto w-full'>
                Get Started
              </ButtonOne>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSec
