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
          {portfolioinfo.map((item: any, index) => (
            <div
              key={index}
              className={`px-3 group ${index % 2 !== 0 ? 'lg:mt-24 ' : ''}`}>
              <div className='relative overflow-hidden rounded-lg'>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={800}
                  style={{ width: '100%', height: 'auto' }}
                  className='group-hover:scale-110 transition-all duration-500'
                />
              </div>
              <h4 className='pb-1 pt-9 text-2xl text-midnight_text font-bold dark:text-white'>
                {item.title}
              </h4>
              <p className='text-secondary font-normal text-lg dark:text-white/50 mb-4'>
                {item.info}
              </p>

              {/* Action Buttons */}
              <div className='flex gap-2 flex-wrap'>
                {item.hasVideo && (
                  <button
                    onClick={() => {
                      setSelectedProject(item)
                      setShowVideo(true)
                      setShowGallery(false)
                    }}
                    className='px-4 py-2 bg-primary text-white text-sm rounded-md hover:bg-blue-700 transition'>
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
                    className='px-4 py-2 bg-success text-white text-sm rounded-md hover:bg-green-700 transition'>
                    Pics
                  </button>
                )}
                <Link
                  href={item.slug}
                  target={item.slug.startsWith('http') ? '_blank' : '_self'}
                  rel={item.slug.startsWith('http') ? 'noopener noreferrer' : ''}
                  className='px-4 py-2 bg-midnight_text dark:bg-white dark:text-midnight_text text-white text-sm rounded-md hover:bg-gray-700 dark:hover:bg-gray-200 transition'>
                  GitHub
                </Link>
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
