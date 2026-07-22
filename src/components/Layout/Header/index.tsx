"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Outfit, JetBrains_Mono } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '600', '700'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['500'] });

const headerData = [
  { title: 'About', path: '#about' },
  { title: 'Skills', path: '#experience' },
  { title: 'Projects', path: '#projects' },
  { title: 'Experience', path: '#experience' },
  { title: 'Contact', path: '#contact' },
];

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 20);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        sticky
          ? 'bg-[#0b1326]/80 backdrop-blur-[30px] border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className={`${outfit.className} text-2xl font-bold text-white tracking-tight flex items-center gap-1`}>
          Shahbaz<span className="text-[#4edea3]">Dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {headerData.map((item, index) => (
            <a 
              key={index} 
              href={item.path} 
              className={`${outfit.className} text-[#bbcabf] hover:text-[#4edea3] font-medium text-sm transition-colors`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="/ShahbazAhmedResume.pdf"
            download
            className={`${outfit.className} hidden md:inline-flex bg-[#4edea3] text-[#003824] px-5 py-2 rounded-lg font-semibold text-sm hover:bg-[#10b981] transition-colors`}
          >
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="block md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-transform ${navbarOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-opacity ${navbarOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform ${navbarOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden" onClick={() => setNavbarOpen(false)}></div>
      )}

      {/* Mobile Menu Panel */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#131b2e] border-l border-white/10 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col p-6 ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end mb-8">
          <button onClick={() => setNavbarOpen(false)} className="text-white p-2">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <nav className="flex flex-col gap-6 items-center">
          {headerData.map((item, index) => (
            <a 
              key={index} 
              href={item.path} 
              onClick={() => setNavbarOpen(false)}
              className={`${outfit.className} text-xl text-[#bbcabf] hover:text-[#4edea3] font-medium transition-colors`}
            >
              {item.title}
            </a>
          ))}
          <a
            href="/ShahbazAhmedResume.pdf"
            download
            className={`${outfit.className} mt-6 w-full text-center bg-[#4edea3] text-[#003824] px-6 py-3 rounded-xl font-semibold hover:bg-[#10b981] transition-colors`}
          >
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
