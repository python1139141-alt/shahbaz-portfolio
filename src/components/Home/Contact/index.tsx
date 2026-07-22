"use client";
import React, { useState } from 'react';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import { Icon } from '@iconify/react';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '600', '700'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['500'] });

const Contactform = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
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
      });

      const result = await response.json();

      if (result.success === 'true' || result.success === true || response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#0b1326] py-24 px-5 md:px-16" id="contact" data-aos="fade-up" data-aos-duration="1000">
      <div className="max-w-[800px] mx-auto bg-[#131b2e] border border-white/5 rounded-[2rem] p-8 md:p-14 relative overflow-hidden shadow-2xl">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4edea3]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="text-center mb-12 relative z-10">
          <div className={`${jetbrains.className} inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-[#4edea3] mb-6 uppercase tracking-wider`}>
            Contact Me
          </div>
          <h2 className={`${outfit.className} text-4xl md:text-5xl font-bold text-white tracking-tight mb-4`}>
            Start a <span className="text-[#4edea3]">Project</span>
          </h2>
          <p className={`${outfit.className} text-[#bbcabf] text-lg max-w-xl mx-auto`}>
            Have an idea? Let's bring it to life together. Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={`${outfit.className} text-white/80 text-sm font-medium block mb-2`}>
                First Name*
              </label>
              <input
                type="text"
                name="firstName"
                required
                className={`${outfit.className} w-full px-5 py-4 rounded-xl border border-white/10 bg-[#0b1326]/50 text-white placeholder-white/30 focus:outline-none focus:border-[#4edea3] focus:ring-1 focus:ring-[#4edea3] transition-all`}
                placeholder="Your first name"
              />
            </div>

            <div>
              <label className={`${outfit.className} text-white/80 text-sm font-medium block mb-2`}>
                Last Name*
              </label>
              <input
                type="text"
                name="lastName"
                required
                className={`${outfit.className} w-full px-5 py-4 rounded-xl border border-white/10 bg-[#0b1326]/50 text-white placeholder-white/30 focus:outline-none focus:border-[#4edea3] focus:ring-1 focus:ring-[#4edea3] transition-all`}
                placeholder="Your last name"
              />
            </div>
          </div>

          <div>
            <label className={`${outfit.className} text-white/80 text-sm font-medium block mb-2`}>
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              required
              className={`${outfit.className} w-full px-5 py-4 rounded-xl border border-white/10 bg-[#0b1326]/50 text-white placeholder-white/30 focus:outline-none focus:border-[#4edea3] focus:ring-1 focus:ring-[#4edea3] transition-all`}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className={`${outfit.className} text-white/80 text-sm font-medium block mb-2`}>
              Project Details*
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className={`${outfit.className} w-full px-5 py-4 rounded-xl border border-white/10 bg-[#0b1326]/50 text-white placeholder-white/30 focus:outline-none focus:border-[#4edea3] focus:ring-1 focus:ring-[#4edea3] transition-all resize-none`}
              placeholder="Tell me about your project idea..."
            />
          </div>

          {status === 'success' && (
            <div className={`${outfit.className} p-4 bg-[#4edea3]/10 border border-[#4edea3]/20 text-[#4edea3] rounded-xl flex items-center gap-3`}>
              <Icon icon="lucide:check-circle-2" className="text-xl" />
              Thank you! I'll get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div className={`${outfit.className} p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl flex items-center gap-3`}>
              <Icon icon="lucide:alert-circle" className="text-xl" />
              Something went wrong. Please try again.
            </div>
          )}

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`${outfit.className} w-full py-4 bg-[#4edea3] text-[#003824] rounded-xl font-bold text-lg hover:bg-[#10b981] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
            >
              {loading ? (
                <>
                  <Icon icon="lucide:loader-2" className="animate-spin text-xl" />
                  Sending...
                </>
              ) : (
                <>
                  Start Project <Icon icon="lucide:arrow-right" className="text-xl" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contactform;
