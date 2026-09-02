"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
          scrolled
            ? "h-16 bg-black/80 backdrop-blur-md border-white/10"
            : "h-24 bg-gradient-to-b from-black/80 to-transparent border-transparent"
        )}
      >
        <div className="container mx-auto px-4 lg:px-8 h-full flex items-center justify-between">
          <Link href="/" className="z-50 relative group flex items-center">
            <Image 
              src="/images/dezesave-logo.png" 
              alt="dezeSAVE Logo" 
              width={500} 
              height={500} 
              className="w-40 h-40 md:w-56 md:h-56 object-contain transition-opacity group-hover:opacity-80"
              priority
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-10 font-oswald text-sm tracking-widest">
            <Link href="/save" className="hover:text-blue-500 transition-colors py-2 relative group">
              SAVE POINT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </Link>
            <Link href="/noticias" className="hover:text-blue-500 transition-colors py-2 relative group">
              NOTÍCIAS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </Link>
            <Link href="/retro" className="hover:text-blue-500 transition-colors py-2 relative group">
              MATANDO A SAUDADE
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </Link>
            <Link href="/sobre" className="hover:text-blue-500 transition-colors py-2 relative group">
              SOBRE
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </Link>
          </nav>
          
          <div className="flex items-center gap-5 z-50 relative">
            <button className="text-white hover:text-blue-500 transition-colors" aria-label="Buscar">
              <Search size={20} strokeWidth={2.5} />
            </button>
            <button 
              className="md:hidden text-white hover:text-blue-500 transition-colors" 
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="flex flex-col items-center gap-8 font-oswald text-2xl tracking-widest">
          <Link href="/save" className="hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>SAVE</Link>
          <Link href="/noticias" className="hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>NOTÍCIAS</Link>
          <Link href="/retro" className="hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>SAUDADE</Link>
          <Link href="/sobre" className="hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>SOBRE</Link>
        </nav>
      </div>
    </>
  );


}

