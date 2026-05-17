'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, ChevronDown, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon, DownloadIcon } from './Icons';

const Hero = () => {
  return (
    <section 
      id="about" 
      className="relative pb-20 md:pb-32 overflow-hidden scroll-mt-28 md:min-h-screen md:flex md:items-center"
      style={{ paddingTop: 'clamp(9rem, 20vh, 12rem)' }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(60%_60%_at_50%_50%,rgba(139,92,246,0.03)_0%,transparent_100%)]" />
      
      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="section-label flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-primary/50" />
              AI Systems Engineer & Fullstack Architect
            </motion.div>
            
            <h1 style={{ fontSize: 'clamp(2.6rem, 4.5vw, 5rem)', lineHeight: '0.95', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '2rem' }} className="font-display">
              Architecting <span className="gradient-text-primary">Intelligent</span> Systems
            </h1>

            <p className="section-description mb-12 text-balance">
              Transforming complex challenges into <span className="text-white font-bold">high-performance digital solutions</span>. 
              Specializing in <span className="text-primary font-bold">Autonomous Agents</span> and <span className="text-accent font-bold">Scalable Infrastructure</span>, I build the engines of tomorrow.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              {[
                { icon: LinkedinIcon, href: "https://www.linkedin.com/in/rahul-rajenderan-972174284/", label: "LinkedIn" },
                { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
                { icon: WhatsappIcon, href: "https://wa.me/918610955329", label: "WhatsApp" },
                { icon: Mail, href: "mailto:rahulrajenderan96@gmail.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                  title={social.label}
                >
                  <social.icon size={22} className="group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full sm:w-auto"
            >
              <a href="#projects" className="btn-primary w-full sm:w-auto">
                View Architectures <Sparkles size={16} />
              </a>
              <a href="/Rahul_R_AI_Engineer.pdf" download="Rahul_R_AI_Engineer.pdf" className="btn-secondary w-full sm:w-auto">
                <DownloadIcon size={18} /> Download Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[460px] aspect-square">
               {/* Decorative elements */}
               <div className="absolute -inset-6 border border-primary/20 border-dashed rounded-full animate-[spin_40s_linear_infinite]" />
               <div className="absolute -inset-12 border border-secondary/20 border-dotted rounded-full animate-[spin_60s_linear_infinite_reverse]" />
               
               {/* Main Image Container */}
               <div className="relative w-full h-full rounded-full border border-white/10 shadow-[0_0_100px_rgba(139,92,246,0.15)] bg-white/[0.02] backdrop-blur-3xl p-6 animate-float">
                 <div className="relative w-full h-full rounded-full overflow-hidden bg-surface">
                    <Image 
                      src="/images/hero.png" 
                      alt="Rahul R - AI Engineer" 
                      fill
                      sizes="(max-width: 768px) 100vw, 460px"
                      className="object-cover opacity-80 hover:opacity-100 transition-all duration-700 scale-105 hover:scale-100"
                      priority
                    />
                 </div>

                 {/* Floating Info Cards */}
                 <motion.div 
                   animate={{ y: [0, -10, 0] }} 
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-8 right-4 glass px-5 py-4 rounded-[1.5rem] border border-white/10 shadow-2xl hidden md:block"
                 >
                   <div className="text-primary font-black text-xl leading-none font-display">AI</div>
                   <div className="text-[9px] font-black uppercase tracking-[0.3em] text-text-muted mt-2">Specialist</div>
                 </motion.div>

                 <motion.div 
                   animate={{ y: [0, 10, 0] }} 
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute bottom-8 left-4 glass px-5 py-4 rounded-[1.5rem] border border-white/10 shadow-2xl hidden md:block"
                 >
                   <div className="text-secondary font-black text-xl leading-none font-display">Fullstack</div>
                   <div className="text-[9px] font-black uppercase tracking-[0.3em] text-text-muted mt-2">Developer</div>
                 </motion.div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden md:flex"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-text-muted">Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
