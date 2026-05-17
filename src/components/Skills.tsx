'use client';

import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  Database, 
  Terminal, 
  ArrowRight,
  Code,
  Cloud,
  Layers,
  Sparkles,
  Link as LinkIcon,
  Network,
  Bot,
  FileSearch,
  Brain,
  Sliders,
  Wind,
  UserCheck,
  Activity
} from 'lucide-react';
import Link from 'next/link';

const techStack: Array<{ name: string; logo?: string; icon?: any; invertDark?: boolean }> = [
  { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "C#", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" },
  { name: "React.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg", invertDark: true },
  { name: "FastAPI", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg" },
  { name: "Flask", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg", invertDark: true },
  { name: ".NET", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg" },
  { name: "Angular", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg" },
  { name: "Docker", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
  { name: "Azure", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
  { name: "MySQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
  { name: "Git", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
  { name: "GitHub", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg", invertDark: true },
  { name: "VS Code", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" },
  { name: "Postman", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg" },
  { name: "LangChain", icon: LinkIcon },
  { name: "LangGraph", icon: Network },
  { name: "Agno Agents", icon: Bot },
  { name: "RAG", icon: Database },
  { name: "Vectorless RAG", icon: FileSearch },
  { name: "DeepAgents", icon: Brain },
  { name: "OpenAI GPT", icon: Sparkles },
  { name: "Prompt Eng", icon: Terminal },
  { name: "Fine-tuning", icon: Sliders },
  { name: "Mistral AI", icon: Wind },
  { name: "HITL", icon: UserCheck },
  { name: "Response Stream", icon: Activity }
];

const skillCategories = [
  {
    title: "AI/ML & GenAI",
    icon: BrainCircuit,
    description: "Designing and deploying autonomous agentic systems, RAG pipelines, and multi-agent architectures using state-of-the-art LLMs.",
    skills: ["LangChain", "LangGraph", "AGNO Agents", "RAG", "Vectorless RAG", "DeepAgents", "OpenAI GPT Models", "Prompt Engineering", "Fine-tuning", "Mistral AI", "HITL", "Response Streaming"]
  },
  {
    title: "Core Programming",
    icon: Terminal,
    description: "Architecting backend logic, complex scripting, system automation, and high-performance server-side applications.",
    skills: ["Python", "JavaScript (ES6+)", "C#", "SQL", "TypeScript", "PowerShell"]
  },
  {
    title: "Modern Frameworks",
    icon: Code,
    description: "Building scalable, high-performance web applications with modern frontend frameworks and robust cloud-native backends.",
    skills: ["FastAPI", "Flask", ".NET MVC", "Angular", "MERN Stack", "Next.js", "Tailwind CSS", "REST APIs"]
  },
  {
    title: "Data & Search",
    icon: Database,
    description: "Engineering resilient data pipelines, managing distributed databases, and optimizing search engines for AI workflows.",
    skills: ["MongoDB", "MySQL", "OpenSearch", "Vector Search", "Redis", "Elasticsearch"]
  },
  {
    title: "Cloud & DevSecOps",
    icon: Cloud,
    description: "Deploying and scaling applications seamlessly across cloud platforms with efficient infrastructure management.",
    skills: ["Azure Functions", "Azure Data Factory (ADF)", "Docker", "CI/CD Pipelines", "Terraform", "API Management"]
  },
  {
    title: "Engineering Tools",
    icon: Layers,
    description: "Utilizing modern tools for version control, testing, and streamlined software development lifecycles.",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Bash", "Jira", "Confluence"]
  }
];

const Skills = () => {
  return (
    <div className="bg-background">
      {/* Technical Stack Section */}
      <section id="skills" className="section-padding relative overflow-hidden scroll-mt-32">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] -z-10" />
        
        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div style={{ marginBottom: '8rem' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="section-label mb-8"
            >
              Technical Arsenal
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Mastering the <span className="gradient-text-primary italic">AI Stack</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-description text-balance mt-8"
            >
              Expertise in building <span className="text-white font-bold">intelligent agentic systems</span> and <span className="text-white font-bold">scalable web architectures</span> that deliver measurable impact.
            </motion.p>
          </div>

          {/* Compact Tech Logo Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9" style={{ gap: '1.25rem', marginBottom: '9rem' }}>
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.1 }}
                className="premium-card p-5 md:p-7 flex flex-col items-center gap-4 group cursor-pointer border-white/[0.03] hover:border-primary/30"
              >
                <div className="relative w-10 h-10 md:w-12 md:h-12 transition-all duration-700 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 flex items-center justify-center">
                  {tech.logo ? (
                    <img 
                      src={tech.logo} 
                      alt={tech.name} 
                      className={`w-full h-full object-contain ${tech.invertDark ? 'brightness-0 invert' : ''}`}
                    />
                  ) : tech.icon ? (
                    <tech.icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                  ) : null}
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-text-muted group-hover:text-white transition-colors text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Main Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch" style={{ gap: '2.5rem', marginBottom: '8rem' }}>
            {skillCategories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="premium-card premium-card-hover flex flex-col h-full group"
              >
                <div className="flex flex-col h-full" style={{ padding: '3rem' }}>
                  <div className="flex items-center" style={{ gap: '1.25rem', marginBottom: '2rem' }}>
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.03] flex items-center justify-center border border-white/10 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-700 shrink-0">
                      <cat.icon className="text-primary" size={30} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black tracking-tight font-display leading-tight">{cat.title}</h3>
                  </div>
                  
                  <p className="text-text-muted text-base leading-relaxed font-medium" style={{ marginBottom: '2.5rem' }}>
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap mt-auto" style={{ gap: '0.5rem' }}>
                    {cat.skills.map((skill, i) => (
                      <span
                        key={i}
                        style={{
                          display: 'inline-block',
                          padding: '0.35rem 0.75rem',
                          background: 'rgba(139,92,246,0.10)',
                          border: '1px solid rgba(139,92,246,0.25)',
                          borderRadius: '0.5rem',
                          fontSize: '0.65rem',
                          fontWeight: 800,
                          color: 'rgba(203,213,225,0.95)',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          cursor: 'default',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLSpanElement).style.background = 'rgba(139,92,246,0.22)';
                          (e.currentTarget as HTMLSpanElement).style.borderColor = 'rgba(139,92,246,0.6)';
                          (e.currentTarget as HTMLSpanElement).style.color = '#ffffff';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLSpanElement).style.background = 'rgba(139,92,246,0.10)';
                          (e.currentTarget as HTMLSpanElement).style.borderColor = 'rgba(139,92,246,0.25)';
                          (e.currentTarget as HTMLSpanElement).style.color = 'rgba(203,213,225,0.95)';
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Continuation CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="premium-card relative overflow-hidden group"
              style={{ padding: '6rem 4rem', textAlign: 'center' }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              
              <h3
                className="font-black font-display"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}
              >
                Ready to see these <span className="text-primary">Skills</span> in Action?
              </h3>
              <p
                className="text-text-muted font-medium"
                style={{ fontSize: '1.125rem', maxWidth: '36rem', marginBottom: '3rem', lineHeight: 1.7, marginLeft: 'auto', marginRight: 'auto' }}
              >
                I apply these technologies to solve real-world enterprise problems and build state-of-the-art AI systems.
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link 
                  href="#projects"
                  className="btn-primary inline-flex group"
                  style={{ gap: '1rem', height: '4rem', padding: '0 3rem' }}
                >
                  <span>View Featured Projects</span>
                  <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Skills;
