"use client";

import React from 'react';
import { Outfit, JetBrains_Mono } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '600', '700'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['500'] });

export default function HeroRedesigned() {
  return (
    <section className="bg-[#0b1326] text-[#dae2fd] pt-32 pb-16 px-5 md:px-16 min-h-screen flex items-center relative overflow-hidden" id="hero">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col items-start" data-aos="fade-right" data-aos-duration="1000">
          <div className={`${jetbrains.className} text-[#4edea3] text-sm font-medium tracking-widest uppercase mb-6 flex items-center gap-3`}>
            <span className="w-2 h-2 rounded-full bg-[#4edea3] shadow-[0_0_8px_#4edea3]"></span>
            Shahbaz Ahmed • Full-Stack Mobile & Backend Engineer
          </div>
          
          <h1 className={`${outfit.className} text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight text-white leading-[1.1]`}>
            Crafting <span className="text-[#4edea3]">Digital</span><br />
            <span className="text-[#7bd0ff]">Worlds</span> with<br />
            Precision.
          </h1>
          
          <p className={`${outfit.className} text-[#bbcabf] text-lg max-w-xl leading-relaxed mb-10`}>
            Ambitious Software Engineering Student and Full-Stack Mobile Developer with a strong foundation in Flutter (Dart) and backend engineering using Python (FastAPI & Django). Focused on building high-performance applications that bridge the gap between complex backend architecture and seamless user experiences.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className={`${outfit.className} py-3.5 px-8 bg-[#4edea3] text-[#003824] rounded-lg font-semibold hover:bg-[#10b981] transition-colors`}
            >
              View Selected Works
            </a>
            <a
              href="/ShahbazAhmedResume.pdf"
              download
              className={`${outfit.className} py-3.5 px-8 bg-transparent border border-[#4edea3] text-[#4edea3] rounded-lg font-semibold hover:bg-[#4edea3]/10 transition-colors`}
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Image/Visual */}
        <div className="relative w-full h-[500px] lg:h-[600px] bg-[#131b2e] border border-white/5 rounded-3xl overflow-hidden shadow-2xl" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="300">
           {/* Ambient Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7bd0ff]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
           
           {/* Image */}
           <img 
             src="/images/hero/hero-image.png" 
             alt="Shahbaz Ahmed - Full-Stack Mobile & Backend Engineer" 
             className="w-full h-full object-cover opacity-90 transition-all duration-700 relative z-10"
           />
           
           <div className="absolute bottom-6 right-6 bg-[#0b1326]/80 backdrop-blur-md border border-white/10 p-3 rounded-xl z-20">
              <div className="w-8 h-8 flex items-center justify-center">
                 {/* Code Icon SVG */}
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4edea3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                 </svg>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
