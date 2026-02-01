'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { portfolioinfo } from '@/app/api/data'

const PortfolioCard = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div id='portfolio' className='dark:bg-darkmode'>
      <div className='lg:px-9 m-auto px-0 max-w-[1600px] slider-container'>
        <Slider {...settings}>
          {portfolioinfo.map((item, index) => (
            <Link
              key={index}
              href={item.slug}
              target={item.slug.startsWith('http') ? '_blank' : '_self'}
              rel={item.slug.startsWith('http') ? 'noopener noreferrer' : ''}
              passHref>
              <div
                className={`px-3 group ${index % 2 !== 0 ? 'lg:mt-24 ' : ''}`}>
                <div className='relative overflow-hidden rounded-lg'>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1200}
                    height={800}
                    style={{ width: '100%', height: 'auto' }}
                    className='group-hover:scale-110 group-hover:cursor-pointer transition-all duration-500'
                  />
                </div>
                <h4 className='pb-1 pt-9 group-hover:text-primary group-hover:cursor-pointer text-2xl text-midnight_text font-bold dark:text-white'>
                  {item.title}
                </h4>
                <p className='text-secondary font-normal text-lg group-hover:text-primary group-hover:cursor-pointer dark:text-white/50'>
                  {item.info}
                </p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PortfolioCard
