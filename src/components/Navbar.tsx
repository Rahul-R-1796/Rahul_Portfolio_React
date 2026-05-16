'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'py-3 bg-[#030304]/90 backdrop-blur-2xl border-b border-white/8 shadow-[0_10px_40px_rgba(0,0,0,0.6)]' 
          : 'py-5 bg-[#030304]/70 backdrop-blur-xl border-b border-white/5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-all duration-500">
            <Image
              src="/logo.png"
              alt="Rahul R Logo"
              width={48}
              height={48}
              style={{ width: 48, height: 48 }}
              className="object-contain drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] group-hover:drop-shadow-[0_0_14px_rgba(6,182,212,0.9)] transition-all duration-500"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tighter text-white group-hover:text-primary transition-colors font-display leading-none">Rahul R</span>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-text-muted mt-1">AI Engineer</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-text-muted hover:text-white transition-all relative group font-display"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>
          <a 
            href="/Rahul_R_AI_Engineer.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary h-12 px-8 text-[10px] tracking-[0.2em] rounded-xl border-white/5 hover:border-white/20"
          >
            Resume <ArrowUpRight size={14} className="text-text-muted" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-12 h-12 flex items-center justify-center text-foreground glass rounded-2xl border border-white/10 active:scale-90 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 glass border-b border-white/10 overflow-hidden shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-6 p-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    className="text-2xl font-black uppercase tracking-[0.2em] hover:text-primary transition-colors font-display"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-6 border-t border-white/5"
              >
                <a 
                  href="/Rahul_R_AI_Engineer.pdf" 
                  download="Rahul_R_AI_Engineer.pdf"
                  rel="noopener noreferrer"
                  className="btn-primary w-full h-16 rounded-2xl"
                  onClick={() => setIsOpen(false)}
                >
                  Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
