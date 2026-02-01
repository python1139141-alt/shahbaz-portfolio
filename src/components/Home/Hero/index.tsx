'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='relative md:pt-44 pt-28 bg-white  dark:bg-darklight bg-cover text-white'>
      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
        <div
          className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className='flex gap-2 items-center justify-start'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-sm text-grey'>
              Shahbaz Ahmed
            </span>
          </div>
          <h1 className='text-midnight_text font-bold dark:text-white text-4xl  md:text-5xl md:leading-[1.15]'>
            Flutter & Python Developer | Building Modern Applications
          </h1>
          <p className='text-grey dark:text-white/70 text-xl font-semibold'>
            Software Engineering student with experience in Dart, Flutter, Firebase, REST APIs, and Python scripting. Focused on building clean, scalable mobile apps with modern architecture.
          </p>
          <div className='flex gap-4 flex-wrap'>
            <a
              href='#learn-more'
              className='py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 px-8'>
              Get Started
            </a>
            <a
              href='/ShahbazAhmedResume.pdf'
              download
              className='py-3 bg-transparent border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition duration-300 px-8'>
              Download Resume
            </a>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12 relative before:absolute before:content-[''] before:bg-[url('/images/hero/line-leyar.svg')] before:bg-no-repeat before:left-1/2 before:top-0 before:h-24 before:w-52 before:-z-10 before:translate-x-70% before:-translate-y-40% lg:before:inline-block before:hidden after:absolute after:content-[''] after:bg-[url('/images/hero/round-leyar.svg')] after:bg-no-repeat xl:after:inline-block after:hidden after:left-0 after:bottom-0 after:h-6.25 after:w-6.25 after:-z-10 after:-translate-x-1/2 after:translate-y-1/2">
          <Image
            src={getImgPath('/images/hero/hero-image.png')}
            alt='hero-image'
            width={350}
            height={150}
            quality={100}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
