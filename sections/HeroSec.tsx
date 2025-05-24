import { ButtonOne } from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'

const HeroSec = () => {
  return (
    <section className='bg-background relative overflow-hidden h-[calc(100vh-80px)] max-h-[600px]' id='hero'>
      <div className='lg:max-w-[80%] xl:px-0 sm:px-8 md:py-24 flex items-center justify-center mx-auto relative z-10
        '>
        {/* Left Column */}
        <div className="py-16 space-y-8 md:space-y-12 md:-mt-10 mx-8 md:mx-auto lg:w-[80%] text-center">
          <h1 className="text-[32px] md:text-6xl font-bold leading-tight" style={{ lineHeight: '1.2' }}>
            Spot and stop negative reviews instantly with our smart Online Review Management (ORM)
            {/* <span className="block text-primary">Powered by AI</span> */}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground">
            Automatically scan reviews, catch offensive language, and take control of your online presence—effortlessly.
          </p>

          <div className="flex flex-col gap-y-6 gap-x-12 md:flex-row md:justify-center px-4 py-8 md:p-0">
            <ButtonOne>
              Get a demo
            </ButtonOne>
            <Link
              href='/generator'
            >
              <ButtonOne className='md:w-auto w-full'>
                Start for free
              </ButtonOne>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSec
