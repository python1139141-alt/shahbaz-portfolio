'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='relative md:pt-44 pt-28 bg-white  dark:bg-darklight bg-cover text-white'>
      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5), 0 0 80px rgba(59, 130, 246, 0.2); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
      `}</style>
      <div className='container mx-auto max-w-6xl px-4 relative z-10'>



        <div className='grid grid-cols-12 gap-4'>
          <div
            className='md:col-span-7 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
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
              Full-Stack Mobile & Backend Engineer
            </h1>
            <p className='text-grey dark:text-white/70 text-lg font-medium leading-relaxed'>
              Ambitious Software Engineering Student and Full-Stack Mobile Developer with a strong foundation in Flutter (Dart) and backend engineering using Python (FastAPI & Django). Proven track record of developing scalable cross-platform applications and robust REST APIs, seamlessly integrating data layer technologies like MySQL, MongoDB, Supabase, and Firebase. Adept at implementing clean architecture and optimizing user experiences. Seeking an opportunity to contribute high-quality code and full-stack technical skills to an innovative development team.
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


        </div>
      </div>
    </section>
  )
}

export default Hero
