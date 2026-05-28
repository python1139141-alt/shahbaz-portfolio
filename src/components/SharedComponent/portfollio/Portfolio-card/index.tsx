'use client'
import React, { useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { portfolioinfo } from '@/app/api/data'

const PortfolioCard = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [showGallery, setShowGallery] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
      <div className='lg:px-9 m-auto px-4 max-w-[1600px] slider-container'>
        <Slider {...settings}>
          {portfolioinfo.map((item: any, index) => (
            <div
              key={index}
              className={`px-3 group ${index % 2 !== 0 ? 'lg:mt-16 ' : ''}`}>
              <div className='bg-white dark:bg-darklight rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col h-full border border-gray-100 dark:border-white/5'>
                {/* Image Container - Fixed Height */}
                <div className='relative overflow-hidden h-[280px] w-full'>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={600}
                    height={400}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    className='group-hover:scale-105 transition-transform duration-500'
                  />
                </div>

                {/* Card Content */}
                <div className='p-5 flex flex-col flex-grow'>
                  <h4 className='pb-1 text-xl text-midnight_text font-bold dark:text-white line-clamp-2'>
                    {item.title}
                  </h4>
                  <p className='text-secondary font-normal text-sm dark:text-white/50 mb-4 line-clamp-2'>
                    {item.info}
                  </p>

                  {/* Action Buttons */}
                  <div className='flex gap-2 flex-wrap mt-auto pt-2'>
                    {item.hasVideo && (
                      <button
                        onClick={() => {
                          setSelectedProject(item)
                          setShowVideo(true)
                          setShowGallery(false)
                        }}
                        className='px-4 py-2 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105'>
                        Preview Video
                      </button>
                    )}
                    {item.hasGallery && (
                      <button
                        onClick={() => {
                          setSelectedProject(item)
                          setShowGallery(true)
                          setShowVideo(false)
                        }}
                        className='px-4 py-2 bg-success text-white text-xs font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105'>
                        Pics
                      </button>
                    )}
                    <Link
                      href={item.slug}
                      target={item.slug.startsWith('http') ? '_blank' : '_self'}
                      rel={item.slug.startsWith('http') ? 'noopener noreferrer' : ''}
                      className='px-4 py-2 bg-midnight_text dark:bg-white dark:text-midnight_text text-white text-xs font-semibold rounded-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105'>
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Video Modal */}
      {showVideo && selectedProject && (
        <div
          className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'
          onClick={() => setShowVideo(false)}>
          <div className='relative max-w-4xl w-full' onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideo(false)}
              className='absolute -top-10 right-0 text-white text-2xl hover:text-red-500'>
              ✕
            </button>
            <video
              controls
              autoPlay
              className='w-full rounded-lg'>
              <source src={selectedProject.videoPath} type='video/mp4' />
            </video>
          </div>
        </div>
      )}

      {/* Gallery Modal */}
      {showGallery && selectedProject && (
        <div
          className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto'
          onClick={() => setShowGallery(false)}>
          <div className='relative max-w-6xl w-full py-8' onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowGallery(false)}
              className='fixed top-4 right-4 text-white text-3xl hover:text-red-500 z-10'>
              ✕
            </button>
            <h3 className='text-white text-2xl font-bold mb-6 text-center'>
              {selectedProject.title} - Screenshots
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* Generate image list based on project */}
              {Array.from({ length: 22 }).map((_, i) => (
                <img
                  key={i}
                  src={`${selectedProject.galleryPath}${i + 1}.${selectedProject.galleryPath.includes('mz super store') || selectedProject.galleryPath.includes('hostle') ? 'png' : 'jpeg'}`}
                  alt={`Screenshot ${i + 1}`}
                  className='w-full rounded-lg'
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PortfolioCard
