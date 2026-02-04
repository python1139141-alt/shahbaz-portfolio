'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioinfo } from '@/app/api/data'

const PortfolioList = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [showGallery, setShowGallery] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className='dark:bg-darkmode py-16'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {portfolioinfo.map((item: any, index) => (
            <div
              key={index}
              className='group'>
              <div className='relative overflow-hidden rounded-lg mb-4'>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                  className='group-hover:scale-110 transition-all duration-500'
                />
              </div>
              <h4 className='text-2xl text-midnight_text font-bold dark:text-white mb-2'>
                {item.title}
              </h4>
              <p className='text-secondary font-normal text-base dark:text-white/50 mb-4'>
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
        </div>
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
    </section>
  )
}

export default PortfolioList
