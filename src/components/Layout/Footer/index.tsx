import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Footer: FC = () => {
  return (
    <footer className='bg-darkmode relative z-1 border-t border-dark_border px-6'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 sm:grid-cols-12'>



        </div>
      </div>
      <div className='text-center gap-4 md:gap-0 flex-wrap p-7 border-t border-solid border-dark_border'>
        <div>
          <ul className='flex justify-center mb-4 items-center sm:gap-7 gap-3'>
            <li className='text-base text-white/50'>
              <Link href='/#about' className='hover:text-primary'>
                About
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/#services' className='hover:text-primary'>
                Services
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/portfolio' className='hover:text-primary'>
                Portfolio
              </Link>
            </li>

            <li className='text-base text-white/50'>
              <Link href='/contact' className='hover:text-primary'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-base text-white/50'>
            © 2026 Shahbaz Ahmed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
