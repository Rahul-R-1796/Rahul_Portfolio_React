'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, ArrowUpRight, Cpu, Globe } from 'lucide-react';
import { GithubIcon } from './Icons';

const projects = [
  {
    title: "AI Document Intelligence Agent",
    image: "/images/project1.png",
    tech: ["Python", "LangGraph", "OpenAI", "FastAPI", "React.js", "OpenSearch"],
    year: "2025",
    description: "An autonomous, full-stack reasoning engine designed to fundamentally alter how users interact with dense documents. By leveraging LangGraph, this system goes beyond simple RAG—it actively decides whether to summarize, query, extract, or compare data based on user intent.",
    highlights: [
      "Orchestrated multi-step, tool-calling agents for dynamic reasoning.",
      "Integrated secure Human-in-the-Loop (HITL) pause points for data safety.",
      "Engineered real-time reasoning visibility via Server-Sent Events (SSE)."
    ]
  },
  {
    title: "Zero-Shot Voice Cloning",
    image: "/images/project2.png",
    tech: ["PyTorch", "WaveNet", "Tacotron2", "Librosa", "NLTK", "SpaCy"],
    year: "2024",
    description: "A neural audio synthesis pipeline capable of replicating unique human vocal signatures without extensive training data. This architecture bridges the gap between raw text and expressive, natural human speech.",
    highlights: [
      "Synthesized audio using WaveNet and Tacotron2 generative models.",
      "Engineered sophisticated NLP pre-processing using NLTK and SpaCy.",
      "Optimized Librosa feature extraction for low-latency synthesis."
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden scroll-mt-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '6rem' }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <span className="section-label">Featured Architectures</span>
              <h2 className="section-title">
                Complex <span className="gradient-text-primary">Systems</span> Engineering
              </h2>
              <p className="section-description">
                A deep dive into some of the most complex, end-to-end systems I have designed, 
                moving from abstract theoretical models to <span className="text-white font-bold">high-performance production environments</span>.
              </p>
            </div>
            <div className="hidden lg:flex gap-4">
               {/* Decorative dots aligned to container */}
               <div className="grid grid-cols-4 gap-3 opacity-10">
                 {[...Array(12)].map((_, i) => (
                   <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                 ))}
               </div>
            </div>
          </div>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`grid lg:grid-cols-2 items-center`}
              style={{ gap: '4rem' }}
            >
              {/* Image Side */}
              <div className={`w-full group ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02] premium-card">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    className="object-cover transition-all duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Tech Tags */}
                  <div className="absolute top-8 left-8 flex flex-wrap gap-3">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="px-4 py-2 bg-background/80 backdrop-blur-xl rounded-xl text-[10px] font-black uppercase tracking-[0.2em] border border-white/10 text-white/80">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-primary/10 backdrop-blur-[4px]">
                    <div className="w-20 h-20 rounded-full bg-white text-background flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.3)] scale-50 group-hover:scale-100 transition-all duration-500">
                      <ArrowUpRight size={40} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full">
                <div className="flex items-center" style={{ gap: '1.5rem', marginBottom: '2rem' }}>
                  <span className="text-primary font-black text-xs tracking-[0.3em] font-display">0{index + 1}</span>
                  <div className="h-[1px] w-16 bg-primary/20" />
                  <span className="text-text-muted text-[10px] font-black uppercase tracking-[0.4em]">{project.year}</span>
                </div>
                
                <h3
                  className="font-black leading-none tracking-tight font-display"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '1.5rem', maxWidth: '36rem' }}
                >{project.title}</h3>
                
                <p className="text-text-muted leading-relaxed font-medium" style={{ fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '36rem' }}>
                  {project.description}
                </p>

                <div className="max-w-xl" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                   {project.highlights.map((h, i) => (
                     <div key={i} className="flex items-start gap-5 group/item">
                        <div className="mt-2 w-2 h-2 rounded-full bg-primary/40 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-300 flex-shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.3)]" />
                        <span className="text-base md:text-lg text-text-secondary leading-relaxed font-medium">{h}</span>
                     </div>
                   ))}
                </div>

                <div className="flex flex-wrap border-t border-white/5" style={{ gap: '1rem', paddingTop: '2rem' }}>
                  <button className="btn-primary gap-3 h-16 px-12 rounded-2xl group">
                    <GithubIcon size={20} className="group-hover:rotate-12 transition-transform" /> Architecture
                  </button>
                  <button className="btn-secondary gap-3 h-16 px-12 rounded-2xl group">
                    <ExternalLink size={20} className="group-hover:scale-110 transition-transform" /> Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
