import React from 'react'

const PortfolioDetail = () => {
  return (
    <>
      <section className='md:py-24 py-16 dark:bg-darkmode'>
        <div className='container mx-auto max-w-6xl'>
          <div className='flex md:flex-row flex-col items-start w-full justify-between flex-wrap sm:flex-nowrap lg:gap-0 gap-8'>
            <div className='lg:w-[60%] w-full'>
              <div className='pb-[3.625rem]'>
                <p className='md:text-[1.6875rem] text-[1.0625rem] md:leading-[2.25rem] leading-[2rem] font-normal text-midnight_tex dark:text-white'>
                  We are a dedicated team of passionate product
                  managers,developers, UX/UI designers, QA engineers experts
                  helping businesses from new startups
                </p>
              </div>
              <div className='flex items-start justify-between sm:flex-row flex-col lg:gap-0 gap-4'>
                <p className='sm:text-lg text-base font-normal text-secondary max-w-[19.4375rem] dark:text-white/50'>
                  Popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker.
                </p>
                <p className='sm:text-lg text-base font-normal text-secondary max-w-[19.4375rem] dark:text-white/50'>
                  Lorem Ipsum as their default model text, and a search for
                  lorem ipsum will uncover many web sites still in their
                  infancy. Various versions have evolved over.
                </p>
              </div>
            </div>
            <div
              className='flex flex-col items-start bg-white shadow-[0px_20px_80px_0px_#68758D26] pt-10 lg:pl-14 pl-9 pb-8 lg:pr-40 pr-10 lg:w-[30%] w-full dark:bg-darklight'
              data-aos='fade-left'
              data-aos-delay='200'
              data-aos-duration='1000'>
              <span className='pb-6 text-2xl text-primary'>Our services</span>
              <span className='pb-6 text-lg'>Brand Strategy</span>
              <span className='pb-6 text-lg'>Communications</span>
              <span className='pb-6 text-lg'>Visual Identity</span>
              <span className='pb-6 text-lg'>Brand Support</span>
              <span className='pb-6 text-lg'>Web Design</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PortfolioDetail
