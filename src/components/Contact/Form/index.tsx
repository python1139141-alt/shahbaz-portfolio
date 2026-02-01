'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const ContactForm = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xanyygkl', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section className='dark:bg-darkmode pt-8 pb-16'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid grid-cols-12 gap-8'>
          <div className='lg:col-span-6 col-span-12'>
            <div className='pb-6'>
              <h2 className='text-midnight_text dark:text-white text-4xl font-bold pb-3'>
                Contact Me
              </h2>
              <p className='text-grey dark:text-white/70 text-lg font-semibold'>
                Have a project in mind? Let's work together!
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='text-midnight_text dark:text-white text-base font-medium block mb-2'>
                    First Name*
                  </label>
                  <input
                    type='text'
                    name='firstName'
                    required
                    className='w-full px-4 py-3 rounded-lg border border-border dark:border-dark_border bg-transparent text-midnight_text dark:text-white focus:outline-none focus:border-primary'
                    placeholder='John'
                  />
                </div>

                <div>
                  <label className='text-midnight_text dark:text-white text-base font-medium block mb-2'>
                    Last Name*
                  </label>
                  <input
                    type='text'
                    name='lastName'
                    required
                    className='w-full px-4 py-3 rounded-lg border border-border dark:border-dark_border bg-transparent text-midnight_text dark:text-white focus:outline-none focus:border-primary'
                    placeholder='Doe'
                  />
                </div>
              </div>

              <div className='mt-6'>
                <label className='text-midnight_text dark:text-white text-base font-medium block mb-2'>
                  Email Address*
                </label>
                <input
                  type='email'
                  name='email'
                  required
                  className='w-full px-4 py-3 rounded-lg border border-border dark:border-dark_border bg-transparent text-midnight_text dark:text-white focus:outline-none focus:border-primary'
                  placeholder='john@example.com'
                />
              </div>

              <div className='mt-6'>
                <label className='text-midnight_text dark:text-white text-base font-medium block mb-2'>
                  Message*
                </label>
                <textarea
                  name='message'
                  required
                  rows={5}
                  className='w-full px-4 py-3 rounded-lg border border-border dark:border-dark_border bg-transparent text-midnight_text dark:text-white focus:outline-none focus:border-primary'
                  placeholder='Tell me about your project...'
                />
              </div>

              {status === 'success' && (
                <div className='mt-4 p-4 bg-success/20 text-success rounded-lg'>
                  Thanks! Your message has been sent successfully.
                </div>
              )}

              {status === 'error' && (
                <div className='mt-4 p-4 bg-red-500/20 text-red-500 rounded-lg'>
                  Oops! Something went wrong. Please try again.
                </div>
              )}

              <button
                type='submit'
                className='mt-8 py-3 px-8 bg-primary text-white rounded-md hover:bg-blue-700 transition duration-300 font-medium'>
                Send Message
              </button>
            </form>
          </div>

          <div className='lg:col-span-6 col-span-12'>
            <Image
              src={getImgPath('/images/contact-page/contact.jpg')}
              alt='Contact'
              className='rounded-lg w-full h-full object-cover'
              width={600}
              height={600}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
