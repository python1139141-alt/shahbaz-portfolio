"use client";

import React, { useState } from 'react';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import { Icon } from '@iconify/react';
import { portfolioinfo } from '@/app/api/data';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '600', '700'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['500'] });

export default function ProjectsSection() {
  const [activeModal, setActiveModal] = useState<any | null>(null);

  return (
    <section className="bg-[#0b1326] py-20 px-5 md:px-16 text-[#dae2fd] relative z-10" id="projects">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Card */}
        <div className="bg-[#131b2e] border border-white/5 rounded-[2rem] p-8 md:p-14 mb-16 relative overflow-hidden">
           {/* soft glow effect inside */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#4edea3]/5 rounded-full blur-[100px] pointer-events-none"></div>

           <p className={`${jetbrains.className} text-[#4edea3] text-xs font-medium tracking-widest uppercase mb-4`}>
             Portfolio 2024
           </p>
           <h2 className={`${outfit.className} text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white`}>
             Selected <span className="text-[#4edea3]">Works</span>
           </h2>
           <p className={`${outfit.className} text-[#bbcabf] text-lg max-w-2xl mb-8`}>
             A curated showcase of engineering precision and digital craftsmanship. From complex backend architectures to fluid mobile experiences.
           </p>
           <div className={`${jetbrains.className} inline-flex items-center gap-3 bg-[#171f33] border border-white/10 rounded-full px-4 py-2 text-sm`}>
             <span className="w-2 h-2 rounded-full bg-[#4edea3] shadow-[0_0_8px_#4edea3]"></span>
             <span className="text-white/80">Available for Projects</span>
           </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioinfo.map((project, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-[#171f33] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 relative"
            >
              
              {/* Image Container */}
              <div className="h-56 overflow-hidden relative border-b border-white/5">
                <img 
                  src={project.image} 
                  alt={project.alt || project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {(project.tags || []).map((tag: string, idx: number) => (
                    <span 
                      key={idx} 
                      className={`${jetbrains.className} text-[11px] font-medium px-3 py-1.5 rounded-md bg-[#131b2e] border border-white/5 text-[#bbcabf]`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className={`${outfit.className} text-2xl font-semibold mb-3 text-white`}>{project.title}</h3>
                <p className={`${outfit.className} text-[#bbcabf] text-sm mb-8 flex-grow leading-relaxed`}>
                  {project.info}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 mt-auto">
                  {project.hasVideo ? (
                    <button 
                      onClick={() => setActiveModal({ type: 'video', data: project })}
                      className={`${outfit.className} w-full flex items-center justify-center gap-2 bg-[#4edea3] text-[#003824] py-3 rounded-lg font-semibold hover:bg-[#10b981] transition-colors`}
                    >
                      <Icon icon="lucide:play-circle" width="18" />
                      Watch Demo
                    </button>
                  ) : (
                    <button 
                      disabled
                      className={`${outfit.className} w-full flex items-center justify-center gap-2 bg-white/5 text-white/40 py-3 rounded-lg font-semibold cursor-not-allowed`}
                    >
                      <Icon icon="lucide:play-circle" width="18" />
                      No Demo Available
                    </button>
                  )}
                  <div className="flex gap-3">
                    {project.hasGallery ? (
                      <button 
                        onClick={() => setActiveModal({ type: 'gallery', data: project })}
                        className={`${outfit.className} flex-1 flex items-center justify-center gap-2 bg-transparent text-white/80 border border-white/10 py-2.5 rounded-lg font-medium hover:bg-white/5 transition-colors text-sm`}
                      >
                        <Icon icon="lucide:image" width="16" />
                        Screenshots
                      </button>
                    ) : (
                       <button 
                        disabled
                        className={`${outfit.className} flex-1 flex items-center justify-center gap-2 bg-transparent text-white/30 border border-white/5 py-2.5 rounded-lg font-medium cursor-not-allowed text-sm`}
                      >
                        <Icon icon="lucide:image" width="16" />
                        Screenshots
                      </button>
                    )}
                    <a 
                      href={project.slug !== '#' ? project.slug : undefined}
                      target={project.slug !== '#' ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`${outfit.className} flex-1 flex items-center justify-center gap-2 ${project.slug !== '#' ? 'bg-transparent text-white/80 border-white/10 hover:bg-white/5' : 'bg-transparent text-white/30 border-white/5 cursor-not-allowed'} border py-2.5 rounded-lg font-medium transition-colors text-sm`}
                    >
                      <Icon icon="lucide:github" width="16" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action at bottom */}
        <div className="mt-24 bg-[#131b2e] border border-white/5 rounded-[2rem] p-12 text-center relative overflow-hidden flex flex-col items-center">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4edea3]/5 rounded-full blur-[120px] pointer-events-none"></div>
            
            <h2 className={`${outfit.className} text-3xl md:text-4xl font-bold mb-4 text-white relative z-10`}>
                Have a project in mind?
            </h2>
            <p className={`${outfit.className} text-[#bbcabf] text-lg max-w-xl mb-8 relative z-10`}>
                Let's collaborate to build something exceptional. I'm currently open to new opportunities and partnerships.
            </p>
            <a href="#contact" className={`${outfit.className} bg-[#4edea3] text-[#003824] px-8 py-3 rounded-lg font-semibold hover:bg-[#10b981] transition-colors relative z-10 inline-block`}>
                Get in Touch
            </a>
        </div>
      </div>

      {/* Modal Popup */}
      {activeModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          ></div>
          <div className="bg-[#171f33] border border-white/10 rounded-2xl p-6 md:p-8 max-w-4xl w-full relative z-10 shadow-2xl transform transition-all max-h-[90vh] flex flex-col">
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-[#bbcabf] hover:text-white bg-white/5 rounded-full p-2 transition-colors z-20"
            >
              <Icon icon="lucide:x" width="24" />
            </button>
            <h3 className={`${outfit.className} text-2xl font-bold mb-4 text-white`}>
              {activeModal.data.title} - {activeModal.type === 'video' ? 'Demo Video' : 'Screenshots'}
            </h3>
            
            <div className="flex-1 overflow-y-auto bg-[#0b1326] rounded-xl border border-white/5 p-4">
              {activeModal.type === 'video' ? (
                <video controls autoPlay className='w-full rounded-lg outline-none'>
                  <source src={activeModal.data.videoPath} type='video/mp4' />
                </video>
              ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <img
                      key={i}
                      src={`${activeModal.data.galleryPath}${i + 1}.${activeModal.data.galleryPath.includes('mz super store') || activeModal.data.galleryPath.includes('hostle') ? 'png' : 'jpeg'}`}
                      alt={`Screenshot ${i + 1}`}
                      className='w-full rounded-lg border border-white/5'
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
