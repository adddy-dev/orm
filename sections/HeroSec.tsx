import { ButtonOne, ButtonTwo } from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'

const HeroSec = () => {
  return (
    <section className='bg-background relative overflow-hidden h-[calc(100vh-80px)]' id='hero'>
      <div className='lg:max-w-[80%] xl:px-0 sm:px-8 md:py-24 flex items-center justify-center mx-auto relative z-10
        '>
        {/* Left Column */}
        <div className="py-16 space-y-8 md:space-y-12 md:-mt-10 mx-8 md:mx-auto lg:w-[80%] text-center">
          <h1 className="text-[40px] md:text-4xl font-semibold leading-normal">
            Empower your compliance journey with AI-driven tools — from generating and enhancing ISMS policies to gap analysis, cross-border data risk assessments, and third-party security questionnaires
            {/* <span className="block text-primary">Powered by AI</span> */}
          </h1>

          <p className="text-lg md:text-xl">
            AI-powered compliance made simple — policies, risk assessments, and vendor security all in one place
          </p>

          <div className="flex flex-col gap-y-6 gap-x-12 md:flex-row md:justify-center px-4 py-8 md:p-0">
            <ButtonOne>
              Get a demo
            </ButtonOne>
            <Link
              href='/generator'
            >
              <ButtonTwo className='md:w-auto w-full'>
                Start for free
              </ButtonTwo>
            </Link>
          </div>
        </div>

      </div>
      <video preload='auto' autoPlay loop muted className='md:w-full w-auto xl:h-auto h-full absolute top-0 left-0 object-cover z-1'>
        <source src='/bgVid.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}

export default HeroSec
