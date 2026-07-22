import React from 'react'
import { Metadata } from "next";
import HeroRedesigned from '@/components/Home/HeroRedesigned';
import AboutPhilosophy from '@/components/Home/AboutPhilosophy';
import ExperienceEducation from '@/components/Home/ExperienceEducation';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import Contactform from '@/components/Home/Contact';

export const metadata: Metadata = {
  title: "Shahbaz Ahmed - Flutter & Python Developer",
};

export default function Home() {
  return (
    <main className="bg-[#0b1326] min-h-screen selection:bg-[#4edea3]/30 selection:text-[#4edea3]">
      <HeroRedesigned />
      <AboutPhilosophy />
      <ExperienceEducation />
      <ProjectsSection />
      
      {/* We keep the old Contactform, but you might want to redesign it later. 
          For now, the ProjectsSection has the "Get in Touch" CTA that leads to #contact */}
      <div className="bg-[#0b1326]" id="contact">
         <Contactform />
      </div>
    </main>
  )
}
