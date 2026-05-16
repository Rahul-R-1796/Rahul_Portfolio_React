'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Shield, Database, ArrowRight, TrendingUp } from 'lucide-react';

const achievements = [
  {
    icon: Zap,
    title: "Autonomous Agent Ecosystems",
    tag: "Orchestration",
    desc: "Spearheaded the integration of DeepAgents, creating multi-step AI workflows capable of autonomous task decomposition, dynamic conditional branching, and Human-in-the-Loop (HITL) oversight."
  },
  {
    icon: Database,
    title: "High-Volume Data Automation",
    tag: "Scalability",
    desc: "Engineered scalable document automation pipelines capable of processing thousands of pages. Designed prediction-based chunking and text extraction adhering to over 200 complex business rules."
  },
  {
    icon: Shield,
    title: "Enterprise Compliance Intelligence",
    tag: "Security",
    desc: "Built LLM-driven compliance workflows on Azure Functions to classify multi-format inputs, detect nuanced sentiment, and intelligently map legacy vs. new customer identities."
  },
  {
    icon: Target,
    title: "Real-time ETL Synchronization",
    tag: "Infrastructure",
    desc: "Developed a robust ETL infrastructure that synchronizes diverse, heterogeneous data sources (JSON, Excel) on the fly, drastically reducing manual processing overhead."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden scroll-mt-32">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="absolute -top-10 -left-6 text-[5rem] sm:text-[10rem] md:text-[15rem] lg:text-[25rem] font-black text-white/[0.01] select-none pointer-events-none -z-10 tracking-tighter font-display leading-none">
          EXPERIENCE
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '7rem' }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-12"
        >
          <div className="max-w-3xl">
            <span className="section-label">Professional Journey</span>
            <h2 className="section-title">
              Engineering <span className="gradient-text-primary italic">Autonomous</span> Intelligence
            </h2>
            <p className="section-description">
              As an <span className="text-white font-bold">AI Engineer at Botminds.ai</span>, 
              I architect stateful agentic pipelines that transform static data into dynamic intelligence, 
              pushing the boundaries of what enterprise AI can achieve.
            </p>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="premium-card flex flex-col items-center lg:items-start border-primary/20 bg-primary/5 min-w-[280px]"
            style={{ padding: '2.5rem' }}
          >
            <div className="flex items-center text-primary" style={{ gap: '1rem', marginBottom: '1.25rem' }}>
              <TrendingUp size={24} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Track Record</span>
            </div>
            <div className="text-primary font-black leading-none font-display" style={{ fontSize: '5rem' }}>3+</div>
            <div className="font-black uppercase text-text-muted whitespace-nowrap" style={{ fontSize: '0.6rem', letterSpacing: '0.4em', marginTop: '1rem' }}>Years of Innovation</div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch" style={{ gap: '2rem' }}>
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="premium-card premium-card-hover group h-full flex flex-col"
            >
              <div className="flex flex-col h-full" style={{ padding: '2.5rem' }}>
                <div className="flex justify-between items-start" style={{ marginBottom: '2rem' }}>
                  <div className="w-16 h-16 rounded-[1.25rem] bg-white/[0.03] flex items-center justify-center border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-700">
                    <item.icon className="text-primary" size={32} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 bg-primary/10 px-4 py-2 rounded-xl border border-primary/20">
                    {item.tag}
                  </span>
                </div>
                
                <h3 className="font-black group-hover:text-primary transition-colors font-display tracking-tight" style={{ fontSize: 'clamp(1.3rem, 2vw, 1.75rem)', marginBottom: '1rem' }}>{item.title}</h3>
                <p className="text-text-muted leading-relaxed font-medium" style={{ fontSize: '1rem', marginBottom: '2rem' }}>
                  {item.desc}
                </p>
                
                <div className="mt-auto border-t border-white/5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-text-muted group-hover:text-primary transition-all cursor-pointer" style={{ paddingTop: '1.5rem' }}>
                  Explore Architecture <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
