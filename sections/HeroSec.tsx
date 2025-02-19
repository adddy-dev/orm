import { ButtonOne, ButtonTwo } from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'

const HeroSec = () => {
  return (
    <section className='bg-background'>
      <div className='max-w-[1220px] xl:px-0 px-8 flex flex-col-reverse md:flex-row gap-8 items-center justify-between min-h-[calc(100vh-80px)] mx-auto
        '>
        {/* Left Column */}
        <div className="space-y-8 md:space-y-12 md:-mt-10 mx-8 md:mx-0">
          <h1 className="text-[32px] md:text-[56px] font-semibold leading-tight">
            Generate ISMS Policies
            <span className="block text-primary">Powered by AI</span>
          </h1>

          <p className="text-lg md:text-xl max-w-xl">
            Transform your security documentation with intelligent AI support. Create, customize, and enhance ISMS policies effortlessly for your organization.
          </p>

          <div className="flex flex-col md:flex-row gap-6 px-4 py-8 md:p-0">
            <ButtonOne>
              Get a demo
            </ButtonOne>
            <Link 
              href='/generator'
              className='flex-1'  
            >
              <ButtonTwo className='md:w-auto w-full'>
                Start for free
              </ButtonTwo>
            </Link>
          </div>
        </div>

        {/* Right Column - Policy Generator Preview */}
        <div className="relative md:mt-0 m-2">
          <img src='/1.png' alt="Policy Generator Preview" className="w-full max-w-[440px] h-auto" />
        </div>
      </div>
    </section>
  )
}

export default HeroSec
