"use client";

import React from 'react';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import { Icon } from '@iconify/react';
import { count } from '@/app/api/data';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '600', '700'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['500'] });

// Construct experience data based on the `count` data
// { value: '2+', description: 'Years of Experience in Flutter Development' }
// { value: '3+', description: 'Years of Experience in Python & Django' }

const techStack = [
  "Flutter", "Python", "Dart", "FastAPI", "Django", "Firebase", "MySQL", "PostgreSQL", "Docker", "REST APIs"
];

export default function ExperienceEducation() {
  return (
    <section className="bg-[#0b1326] text-[#dae2fd] py-24 px-5 md:px-16" id="experience">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <div className={`${jetbrains.className} inline-flex items-center gap-2 bg-[#131b2e] border border-white/5 rounded-full px-4 py-1.5 text-xs text-[#4edea3] mb-6 uppercase tracking-wider`}>
             Career Pathway
          </div>
          <h2 className={`${outfit.className} text-5xl md:text-6xl font-bold text-white tracking-tight mb-4`}>
             Experience <span className="text-[#4edea3]">&</span> Education
          </h2>
          <p className={`${outfit.className} text-[#bbcabf] text-lg max-w-2xl`}>
             A narrative of technical growth, building high-performance mobile applications with Flutter and architecting scalable backends using Python.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Timeline */}
          <div className="lg:col-span-8">
             <div className="flex items-center gap-3 mb-8">
                <Icon icon="lucide:briefcase" className="text-[#4edea3] text-2xl" />
                <h3 className={`${outfit.className} text-3xl font-bold text-white`}>Professional Journey</h3>
             </div>
             
             {/* Timeline Container */}
             <div className="relative border-l-2 border-[#4edea3]/20 ml-4 md:ml-6 space-y-12 pb-12">
                
                {/* Timeline Item 1 */}
                <div className="relative pl-8 md:pl-12">
                   <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#0b1326] border-4 border-[#4edea3]"></div>
                   
                   <div className="bg-[#131b2e] border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-[#171f33] transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                         <div>
                            <h4 className={`${outfit.className} text-2xl font-bold text-white mb-1`}>Backend Engineer (Python/Django)</h4>
                            <p className={`${outfit.className} text-[#4edea3] font-medium`}>Freelance / Contract</p>
                         </div>
                         <div className={`${jetbrains.className} text-xs text-[#bbcabf] bg-white/5 border border-white/10 px-3 py-1.5 rounded-md self-start md:self-auto`}>
                            {count[1]?.value.replace('+', '')} Years — Present
                         </div>
                      </div>
                      
                      <ul className={`${outfit.className} text-[#bbcabf] space-y-3`}>
                         <li className="flex items-start gap-3">
                            <Icon icon="lucide:arrow-right" className="text-[#4edea3] mt-1 shrink-0" width="16" />
                            <span>Architected and developed RESTful APIs using Python, Django, and FastAPI, integrating with MySQL and PostgreSQL databases.</span>
                         </li>
                         <li className="flex items-start gap-3">
                            <Icon icon="lucide:arrow-right" className="text-[#4edea3] mt-1 shrink-0" width="16" />
                            <span>Developed robust desktop applications using Tkinter and automated data pipelines.</span>
                         </li>
                         <li className="flex items-start gap-3">
                            <Icon icon="lucide:arrow-right" className="text-[#4edea3] mt-1 shrink-0" width="16" />
                            <span>Managed full-stack web applications with Django MVT architecture and custom administration panels.</span>
                         </li>
                      </ul>
                   </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative pl-8 md:pl-12">
                   <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#0b1326] border-4 border-[#171f33] hover:border-[#4edea3] transition-colors"></div>
                   
                   <div className="bg-[#131b2e] border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-[#171f33] transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                         <div>
                            <h4 className={`${outfit.className} text-2xl font-bold text-white mb-1`}>Mobile App Developer (Flutter)</h4>
                            <p className={`${outfit.className} text-[#4edea3] font-medium`}>Freelance / Contract</p>
                         </div>
                         <div className={`${jetbrains.className} text-xs text-[#bbcabf] bg-white/5 border border-white/10 px-3 py-1.5 rounded-md self-start md:self-auto`}>
                            {count[0]?.value.replace('+', '')} Years — Present
                         </div>
                      </div>
                      
                      <ul className={`${outfit.className} text-[#bbcabf] space-y-3`}>
                         <li className="flex items-start gap-3">
                            <Icon icon="lucide:arrow-right" className="text-[#4edea3] mt-1 shrink-0" width="16" />
                            <span>Spearheaded the development of cross-platform mobile applications using Flutter and Dart.</span>
                         </li>
                         <li className="flex items-start gap-3">
                            <Icon icon="lucide:arrow-right" className="text-[#4edea3] mt-1 shrink-0" width="16" />
                            <span>Integrated Firebase services for real-time databases, authentication, and push notifications.</span>
                         </li>
                         <li className="flex items-start gap-3">
                            <Icon icon="lucide:arrow-right" className="text-[#4edea3] mt-1 shrink-0" width="16" />
                            <span>Built business management applications with offline storage, charting, and PDF reporting capabilities.</span>
                         </li>
                      </ul>
                   </div>
                </div>

                {/* Education Item */}
                <div className="relative pl-8 md:pl-12 pt-6">
                   <div className="absolute -left-[11px] top-7 w-5 h-5 rounded-full bg-[#0b1326] border-4 border-[#7bd0ff]"></div>
                   
                   <div className="bg-[#131b2e] border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-[#171f33] transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#7bd0ff]/10 flex items-center justify-center">
                               <Icon icon="lucide:graduation-cap" className="text-[#7bd0ff] text-xl" />
                            </div>
                            <div>
                               <h4 className={`${outfit.className} text-2xl font-bold text-white mb-1`}>Software Engineering Student</h4>
                               <p className={`${outfit.className} text-[#7bd0ff] font-medium`}>Computer Science</p>
                            </div>
                         </div>
                         <div className={`${jetbrains.className} text-xs text-[#bbcabf] bg-white/5 border border-white/10 px-3 py-1.5 rounded-md self-start md:self-auto`}>
                            Current
                         </div>
                      </div>
                      
                      <p className={`${outfit.className} text-[#bbcabf] leading-relaxed`}>
                         Currently pursuing a degree in Software Engineering, building a strong academic foundation in data structures, algorithms, and system architecture while simultaneously working on real-world freelance projects.
                      </p>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Column: Skills & Extras */}
          <div className="lg:col-span-4 space-y-12">
             
             {/* Tech Stack Pills */}
             <div>
                <div className="flex items-center gap-3 mb-6">
                   <Icon icon="lucide:monitor" className="text-[#4edea3] text-xl" />
                   <h3 className={`${outfit.className} text-2xl font-bold text-white`}>Tech Stack</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                   {techStack.map((tech) => (
                      <div key={tech} className={`${jetbrains.className} text-sm text-[#4edea3] bg-[#131b2e] border border-[#4edea3]/20 py-3 text-center rounded-xl hover:bg-[#4edea3]/5 transition-colors cursor-default`}>
                         {tech}
                      </div>
                   ))}
                </div>
             </div>

             {/* Certifications & Mentions */}
             <div>
                <div className="flex items-center gap-3 mb-6">
                   <Icon icon="lucide:award" className="text-[#4edea3] text-xl" />
                   <h3 className={`${outfit.className} text-2xl font-bold text-white`}>Highlights</h3>
                </div>
                <div className="space-y-4">
                   <div className="bg-[#131b2e] border border-white/5 p-5 rounded-2xl flex items-center gap-4 hover:bg-[#171f33] transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                         <Icon icon="lucide:medal" className="text-[#4edea3]" />
                      </div>
                      <div>
                         <h4 className={`${outfit.className} font-bold text-white`}>Full-Stack Developer</h4>
                         <p className={`${jetbrains.className} text-xs text-[#bbcabf]`}>Mobile & Web</p>
                      </div>
                   </div>
                   
                   <div className="bg-[#131b2e] border border-white/5 p-5 rounded-2xl flex items-center gap-4 hover:bg-[#171f33] transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                         <Icon icon="lucide:check-circle-2" className="text-[#4edea3]" />
                      </div>
                      <div>
                         <h4 className={`${outfit.className} font-bold text-white`}>Problem Solver</h4>
                         <p className={`${jetbrains.className} text-xs text-[#bbcabf]`}>Clean Architecture</p>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Open Source Contributor */}
             <div className="bg-gradient-to-br from-[#131b2e] to-[#0b1326] border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <Icon icon="lucide:sparkles" className="absolute -bottom-6 -right-6 text-9xl text-white/5 group-hover:text-white/10 transition-colors" />
                <h4 className={`${outfit.className} text-xl font-bold text-white mb-2 relative z-10`}>Open Source Creator</h4>
                <p className={`${outfit.className} text-sm text-[#bbcabf] mb-6 relative z-10`}>
                   Active builder of public repositories, sharing clones, templates, and utilities for the developer community.
                </p>
                <a href="https://github.com/python1139141-alt" target="_blank" rel="noopener noreferrer" className={`${jetbrains.className} text-[#4edea3] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all relative z-10 w-max`}>
                   View GitHub <Icon icon="lucide:arrow-right" />
                </a>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
}
