'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUp, ExternalLink, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rahul-rajenderan-972174284/',
      color: '#0A66C2',
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      href: 'https://github.com',
      color: '#ffffff',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/918610955329',
      color: '#25D366',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:rahulrajenderan96@gmail.com',
      color: '#8b5cf6',
    },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tech Stack', href: '#skills' },
  ];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden scroll-mt-32"
      style={{ background: 'linear-gradient(to bottom, var(--background) 0%, #050508 100%)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 w-full"
        style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.6), rgba(236,72,153,0.4), transparent)' }}
      />

      {/* Background glows */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full -z-10"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[300px] rounded-full -z-10"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="container-custom" style={{ paddingTop: '6rem', paddingBottom: '3rem' }}>

        {/* ── Main CTA Row ───────────────────────────────────── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: '5rem', marginBottom: '5rem', alignItems: 'flex-start' }}
        >
          {/* Left: Headline + email */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="font-black uppercase font-display"
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.4em',
                color: 'var(--primary)',
                display: 'block',
                marginBottom: '1.5rem',
              }}
            >
              Get In Touch
            </span>

            <h2
              className="font-black font-display"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                marginBottom: '1.75rem',
              }}
            >
              Let&apos;s Architect the{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontStyle: 'italic',
                }}
              >
                Future
              </span>{' '}
              Together
            </h2>

            <p
              className="font-medium"
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.05rem',
                lineHeight: 1.75,
                maxWidth: '30rem',
                marginBottom: '2.5rem',
              }}
            >
              Open to pioneering roles in AI Engineering, agentic workflows,
              and high-performance LLM architectures.
            </p>

            <a
              href="mailto:rahulrajenderan96@gmail.com"
              className="group"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.875rem',
                padding: '1rem 1.75rem',
                borderRadius: '1rem',
                border: '1px solid rgba(139,92,246,0.3)',
                background: 'rgba(139,92,246,0.07)',
                color: 'var(--primary)',
                fontWeight: 900,
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-display)',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(139,92,246,0.15)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(139,92,246,0.6)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 40px rgba(139,92,246,0.2)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(139,92,246,0.07)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(139,92,246,0.3)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
              }}
            >
              <Mail size={18} />
              rahulrajenderan96@gmail.com
              <ExternalLink size={13} style={{ opacity: 0.6 }} />
            </a>
          </motion.div>

          {/* Right: Socials + Quick Links */}
          <div
            className="grid grid-cols-2"
            style={{ gap: '3rem' }}
          >
            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              <h4
                className="font-black font-display"
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.45em',
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                  marginBottom: '2rem',
                }}
              >
                Socials
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.875rem',
                        color: 'var(--text-muted)',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
                    >
                      <span
                        style={{
                          width: '2rem',
                          height: '2rem',
                          borderRadius: '0.5rem',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.3s',
                        }}
                      >
                        <s.icon size={14} />
                      </span>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.7 }}
            >
              <h4
                className="font-black font-display"
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.45em',
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                  marginBottom: '2rem',
                }}
              >
                Quick Links
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-muted)',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
                    >
                      <span
                        style={{
                          width: '0.375rem',
                          height: '0.375rem',
                          borderRadius: '50%',
                          background: 'rgba(139,92,246,0.5)',
                          flexShrink: 0,
                          transition: 'background 0.3s',
                        }}
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* ── Divider ─────────────────────────────────────────── */}
        <div
          style={{
            height: '1px',
            background: 'rgba(255,255,255,0.06)',
            marginBottom: '2rem',
          }}
        />

        {/* ── Bottom Bar ──────────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.25rem',
          }}
        >
          {/* Copyright */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontSize: '0.65rem',
                fontWeight: 900,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}
            >
              © {new Date().getFullYear()} Rahul R. All Rights Reserved.
            </span>
            <span
              style={{
                width: '0.25rem',
                height: '0.25rem',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: '0.65rem',
                fontWeight: 900,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Architecting Intelligent Systems.
            </span>
          </div>

          {/* Right: Status badge + scroll to top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.6rem',
                fontWeight: 900,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(74,222,128,0.9)',
                background: 'rgba(34,197,94,0.06)',
                border: '1px solid rgba(34,197,94,0.15)',
                padding: '0.5rem 1rem',
                borderRadius: '999px',
              }}
            >
              <span
                style={{
                  width: '0.4rem',
                  height: '0.4rem',
                  borderRadius: '50%',
                  background: '#4ade80',
                  boxShadow: '0 0 8px rgba(74,222,128,0.7)',
                  animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
                  flexShrink: 0,
                }}
              />
              Available for Hire
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              style={{
                width: '2.75rem',
                height: '2.75rem',
                borderRadius: '0.75rem',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
                color: 'var(--text-muted)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'var(--primary)';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--primary)';
                (e.currentTarget as HTMLButtonElement).style.color = '#ffffff';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(139,92,246,0.4)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.04)';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
