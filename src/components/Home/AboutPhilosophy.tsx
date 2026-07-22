"use client";

import React from 'react';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import { Servicebox } from '@/app/api/data';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '600', '700'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['500'] });

export default function AboutPhilosophy() {
  return (
    <section className="bg-[#0b1326] text-[#dae2fd] py-24 px-5 md:px-16" id="about">
      <div className="max-w-[1200px] mx-auto">
        
        {/* The Narrative Journey */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-start" data-aos="fade-up" data-aos-duration="1000">
          <div className="md:col-span-4">
            <h2 className={`${outfit.className} text-3xl md:text-4xl font-bold text-white tracking-tight sticky top-24`}>
              The Narrative Journey
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-8">
            <p className={`${outfit.className} text-[#bbcabf] text-lg leading-relaxed`}>
              My journey began at the intersection of curiosity and logic. I didn't just want to use software; I wanted to understand the gears turning behind the screen. This fascination led me from basic scripting to architecting scalable cloud systems and fluid mobile applications.
            </p>
            
            <div className="p-8 border border-[#4edea3]/30 bg-[#4edea3]/5 rounded-2xl relative overflow-hidden">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4edea3]"></div>
               <p className={`${outfit.className} text-white text-xl italic font-medium leading-relaxed`}>
                 "The best code isn't just functional—it's legible, maintainable, and built with a deep empathy for the person on the other side of the interface."
               </p>
            </div>
            
            <p className={`${outfit.className} text-[#bbcabf] text-lg leading-relaxed`}>
               Over the years, I've navigated the evolution of the web and mobile spaces, moving from simple web pages to complex Flutter applications and robust Django backends. Each transition has refined my philosophy: technology should disappear, leaving only the user's intent and the product's value.
            </p>
          </div>
        </div>

        {/* Tech Stack Philosophy */}
        <div className="mb-24" data-aos="fade-up" data-aos-duration="1000">
           <h2 className={`${outfit.className} text-3xl md:text-4xl font-bold text-white tracking-tight mb-12 text-center`}>
              Tech Stack Philosophy
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Servicebox.map((service, index) => (
                 <div key={index} className="bg-[#131b2e] border border-white/5 p-8 rounded-2xl hover:bg-[#171f33] hover:border-white/10 transition-all duration-300 flex flex-col group">
                    <div className="w-12 h-12 bg-[#0b1326] border border-white/10 rounded-xl flex items-center justify-center mb-6 text-[#4edea3] group-hover:scale-110 transition-transform">
                       <img src={service.icon} alt={service.title} className="w-6 h-6 filter brightness-0 sepia hue-rotate-130 saturate-300" style={{ filter: 'brightness(0) saturate(100%) invert(88%) sepia(21%) saturate(1142%) hue-rotate(97deg) brightness(97%) contrast(85%)' }} />
                    </div>
                    
                    <h3 className={`${outfit.className} text-xl font-semibold text-white mb-4`}>
                       {service.title}
                    </h3>
                    <p className={`${outfit.className} text-[#bbcabf] text-sm leading-relaxed mb-8 flex-grow`}>
                       {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                       {/* Mock tags based on the service title since Servicebox doesn't have tags */}
                       {service.title.includes('Flutter') && ['Dart', 'Firebase', 'Mobile'].map(t => (
                          <span key={t} className={`${jetbrains.className} text-xs text-[#4edea3]`}>{t} &bull;</span>
                       ))}
                       {service.title.includes('Python') && ['Django', 'FastAPI', 'Backend'].map(t => (
                          <span key={t} className={`${jetbrains.className} text-xs text-[#4edea3]`}>{t} &bull;</span>
                       ))}
                       {service.title.includes('Web') && ['React', 'Next.js', 'Tailwind'].map(t => (
                          <span key={t} className={`${jetbrains.className} text-xs text-[#4edea3]`}>{t} &bull;</span>
                       ))}
                       <span className={`${jetbrains.className} text-xs text-[#4edea3]`}>APIs</span>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* Digital Craftsmanship / Analogue Balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-duration="1000">
           <div className="relative h-80 rounded-2xl overflow-hidden border border-white/5 group">
              <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop" alt="Digital Craftsmanship" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-8 left-8 right-8">
                 <h3 className={`${outfit.className} text-2xl font-bold text-white mb-3`}>Digital Craftsmanship</h3>
                 <p className={`${outfit.className} text-[#bbcabf] text-sm leading-relaxed`}>
                   Beyond the screen, I am an enthusiast of clean code and minimalist architectural design. I believe the tools we use influence the work we produce.
                 </p>
              </div>
           </div>
           
           <div className="relative h-80 rounded-2xl overflow-hidden border border-white/5 group">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop" alt="Analogue Balance" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-8 left-8 right-8">
                 <h3 className={`${outfit.className} text-2xl font-bold text-white mb-3`}>Analogue Balance</h3>
                 <p className={`${outfit.className} text-[#bbcabf] text-sm leading-relaxed`}>
                   To balance the digital, I seek the analogue. Hiking in misty forests or exploring urban architecture provides the mental reset required for deep problem-solving.
                 </p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
