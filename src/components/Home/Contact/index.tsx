'use client'
import React, { useState } from 'react'

const Contactform = () => {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      // Send via FormSubmit.co — free, no API key needed
      const response = await fetch('https://formsubmit.co/ajax/shahbaz1139141@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${data.get('firstName')} ${data.get('lastName')}`,
          email: data.get('email'),
          message: data.get('message'),
          _subject: `New Project Request: ${data.get('firstName')} ${data.get('lastName')}`
        })
      })

      const result = await response.json()

      if (result.success === 'true' || result.success === true || response.ok) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus(''), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='dark:bg-darkmode'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='mx-auto max-w-3xl text-center pb-8'>
          <h2 className='text-midnight_text dark:text-white text-4xl font-bold pb-3'>
            Start a Project
          </h2>
          <p className='text-grey dark:text-white/70 text-lg'>
            Have an idea? Let's bring it to life together!
          </p>
        </div>

        <form onSubmit={handleSubmit} className='max-w-2xl mx-auto'>
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
                placeholder='Your first name'
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
                placeholder='Your last name'
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
              placeholder='you@example.com'
            />
          </div>

          <div className='mt-6'>
            <label className='text-midnight_text dark:text-white text-base font-medium block mb-2'>
              Project Details*
            </label>
            <textarea
              name='message'
              required
              rows={5}
              className='w-full px-4 py-3 rounded-lg border border-border dark:border-dark_border bg-transparent text-midnight_text dark:text-white focus:outline-none focus:border-primary'
              placeholder='Tell me about your project idea...'
            />
          </div>

          {status === 'success' && (
            <div className='mt-4 p-4 bg-success/20 text-success rounded-lg text-center'>
              ✅ Thank you! I'll get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div className='mt-4 p-4 bg-red-500/20 text-red-500 rounded-lg text-center'>
              ❌ Something went wrong. Please try again.
            </div>
          )}

          <div className='text-center mt-8'>
            <button
              type='submit'
              disabled={loading}
              className='py-3 px-12 bg-primary text-white rounded-md hover:bg-blue-700 transition duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed'>
              {loading ? 'Sending...' : 'Start Project'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contactform
