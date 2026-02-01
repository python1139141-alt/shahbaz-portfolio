import React from 'react'
import Link from 'next/link'

const ContactInfo = () => {
  return (
    <>
      <section className='dark:bg-darkmode pt-8 md:pb-24 pb-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full'>
            {/* Email */}
            <div className='flex flex-col items-start gap-4'>
              <div className='bg-primary/20 w-3.75 h-3.75 flex items-center justify-center rounded-full'>
                <i className="bg-[url('/images/contact-page/email.svg')] bg-no-repeat bg-contain w-8 h-8 inline-block"></i>
              </div>
              <div>
                <span className='text-midnight_text dark:text-white text-xl font-bold'>Email</span>
                <p className='text-DeepOcean font-normal text-base pt-2 dark:text-white/50'>shahbaz1139141@gmail.com</p>
                <Link href='mailto:shahbaz1139141@gmail.com' className='text-primary text-sm hover:underline'>Send Email</Link>
              </div>
            </div>

            {/* LinkedIn */}
            <div className='flex flex-col items-start gap-4'>
              <div className='bg-primary/20 w-3.75 h-3.75 flex items-center justify-center rounded-full'>
                <svg className="w-8 h-8 fill-primary" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </div>
              <div>
                <span className='text-midnight_text dark:text-white text-xl font-bold'>LinkedIn</span>
                <p className='text-DeepOcean font-normal text-base pt-2 dark:text-white/50'>Professional Profile</p>
                <Link href='https://linkedin.com/in/shahbaz-ahmed-01a747388' target='_blank' className='text-primary text-sm hover:underline'>Visit Profile</Link>
              </div>
            </div>

            {/* WhatsApp */}
            <div className='flex flex-col items-start gap-4'>
              <div className='bg-primary/20 w-3.75 h-3.75 flex items-center justify-center rounded-full'>
                <svg className="w-8 h-8 fill-primary" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
              </div>
              <div>
                <span className='text-midnight_text dark:text-white text-xl font-bold'>WhatsApp</span>
                <p className='text-DeepOcean font-normal text-base pt-2 dark:text-white/50'>+92 315 2188206</p>
                <Link href='https://wa.me/923152188206' target='_blank' className='text-primary text-sm hover:underline'>Send Message</Link>
              </div>
            </div>

            {/* GitHub */}
            <div className='flex flex-col items-start gap-4'>
              <div className='bg-primary/20 w-3.75 h-3.75 flex items-center justify-center rounded-full'>
                <svg className="w-8 h-8 fill-primary" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </div>
              <div>
                <span className='text-midnight_text dark:text-white text-xl font-bold'>GitHub</span>
                <p className='text-DeepOcean font-normal text-base pt-2 dark:text-white/50'>Open Source Projects</p>
                <Link href='https://github.com/python1139141-alt' target='_blank' className='text-primary text-sm hover:underline'>View Repositories</Link>
              </div>
            </div>

            {/* Twitter */}
            <div className='flex flex-col items-start gap-4'>
              <div className='bg-primary/20 w-3.75 h-3.75 flex items-center justify-center rounded-full'>
                <svg className="w-8 h-8 fill-primary" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </div>
              <div>
                <span className='text-midnight_text dark:text-white text-xl font-bold'>Twitter</span>
                <p className='text-DeepOcean font-normal text-base pt-2 dark:text-white/50'>@shahbazahmed</p>
                <Link href='https://twitter.com/shahbazahmed' target='_blank' className='text-primary text-sm hover:underline'>Follow Me</Link>
              </div>
            </div>

            {/* Discord */}
            <div className='flex flex-col items-start gap-4'>
              <div className='bg-primary/20 w-3.75 h-3.75 flex items-center justify-center rounded-full'>
                <svg className="w-8 h-8 fill-primary" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
              </div>
              <div>
                <span className='text-midnight_text dark:text-white text-xl font-bold'>Discord</span>
                <p className='text-DeepOcean font-normal text-base pt-2 dark:text-white/50'>shahbaz#1234</p>
                <Link href='#' className='text-primary text-sm hover:underline'>Connect</Link>
              </div>
            </div>
          </div>

        </div>
        <div className='border-b border-solid border-border dark:border-dark_border'></div>
      </section>
    </>
  )
}

export default ContactInfo
