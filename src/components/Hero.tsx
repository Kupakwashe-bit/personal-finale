'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiTerminal } from 'react-icons/fi';
import { SiTiktok, SiInstagram } from 'react-icons/si';
import { personalInfo } from '@/data/data';

// ─── Typing animation ─────────────────────────────────────────────────────────
function TypingAnimation() {
  const roles = personalInfo.roles;
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true); }, 2400);
      return () => clearTimeout(t);
    }
    const current = roles[roleIdx];
    const speed = deleting ? 32 : 68;
    const t = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        } else {
          setPaused(true);
        }
      } else {
        if (charIdx > 0) {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        } else {
          setDeleting(false);
          setRoleIdx((r) => (r + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [charIdx, deleting, paused, roleIdx, roles]);

  return (
    <span>
      <span className="text-krimson">{displayed}</span>
      <span className="inline-block w-0.5 h-5 bg-krimson align-middle ml-0.5 animate-pulse" />
    </span>
  );
}

// ─── Floating tech badge ──────────────────────────────────────────────────────
function FloatingBadge({
  label,
  color,
  style,
  delay,
  axis = 'y',
}: {
  label: string;
  color: 'krimson' | 'cyber';
  style: React.CSSProperties;
  delay: number;
  axis?: 'x' | 'y';
}) {
  const borderColor = color === 'krimson' ? 'border-krimson/40 text-krimson' : 'border-cyber/40 text-cyber';
  const animateProps =
    axis === 'y'
      ? { y: [-6, 6, -6] }
      : { x: [-6, 6, -6] };

  return (
    <motion.div
      animate={animateProps}
      transition={{ duration: 3.5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
      className={`absolute px-3 py-1 bg-dark-800/90 border rounded-full text-xs font-mono font-medium backdrop-blur-sm ${borderColor}`}
      style={style}
    >
      {label}
    </motion.div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-900"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Radial glow — top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, #e8192c 0%, transparent 70%)',
        }}
      />

      {/* Ambient orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.07, 0.12, 0.07] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-krimson blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.06, 0.11, 0.06] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-cyber blur-3xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-dark-700/70 border border-krimson/25 rounded-full text-sm font-mono mb-7 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-krimson animate-pulse" />
              <span className="text-krimson/80">Available for hire</span>
              <span className="hidden sm:block text-dark-300 text-xs">
                {'// Founder @ Krimson Tech'}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight mb-3"
            >
              {personalInfo.shortName}{' '}
              <span className="text-krimson text-glow-krimson">Isaac</span>
              <br />
              Nyanguru
            </motion.h1>

            {/* Role typing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-2 text-lg sm:text-xl font-mono mb-5 h-8 text-gray-300"
            >
              <FiTerminal size={16} className="text-krimson flex-shrink-0" />
              <TypingAnimation />
            </motion.div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-dark-300 text-base sm:text-lg leading-relaxed max-w-lg mb-9"
            >
              {personalInfo.subheadline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-krimson hover:bg-krimson-light text-white text-sm font-semibold rounded-lg shadow-krimson hover:shadow-krimson-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-krimson/40 hover:border-krimson text-krimson hover:bg-krimson/10 text-sm font-semibold rounded-lg transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex items-center gap-4"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 text-dark-300 hover:text-white hover:bg-dark-700 rounded-lg transition-all"
              >
                <FiGithub size={19} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 text-dark-300 hover:text-cyber hover:bg-dark-700 rounded-lg transition-all"
              >
                <FiLinkedin size={19} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2 text-dark-300 hover:text-krimson hover:bg-dark-700 rounded-lg transition-all"
              >
                <FiMail size={19} />
              </a>
              <a
                href={personalInfo.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2 text-dark-300 hover:text-white hover:bg-dark-700 rounded-lg transition-all"
              >
                <SiTiktok size={17} />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 text-dark-300 hover:text-pink-500 hover:bg-dark-700 rounded-lg transition-all"
              >
                <SiInstagram size={18} />
              </a>
              <span className="w-px h-5 bg-dark-500 mx-1" />
              <a
                href={personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-300 hover:text-krimson text-sm font-mono transition-colors"
              >
                kupadev22.netlify.app
              </a>
            </motion.div>
          </div>

          {/* ── Right: Profile visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Outer spinning conic border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0%, transparent 60%, rgba(232,25,44,0.8) 75%, rgba(232,25,44,0.2) 85%, transparent 100%)',
                  padding: '2px',
                  borderRadius: '9999px',
                }}
              >
                <div className="w-full h-full rounded-full bg-dark-900" />
              </motion.div>

              {/* Counter-rotating inner dashed ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-dashed border-cyber/25"
              />

              {/* Cyber inner ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-14 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 180deg, transparent 0%, transparent 70%, rgba(0,212,255,0.6) 80%, transparent 100%)',
                }}
              />

              {/* Avatar */}
              <div
                className="absolute inset-16 rounded-full bg-dark-700 border-2 border-krimson/50 flex flex-col items-center justify-center"
                style={{
                  boxShadow:
                    '0 0 40px rgba(232,25,44,0.25), 0 0 80px rgba(232,25,44,0.1), inset 0 0 30px rgba(232,25,44,0.05)',
                }}
              >
                <span className="text-3xl font-black text-krimson font-mono leading-none text-glow-krimson">
                  KN
                </span>
                <span className="text-[9px] text-dark-300 font-mono mt-1 tracking-widest uppercase">
                  Krimson
                </span>
              </div>

              {/* Floating tech badges */}
              <FloatingBadge label="Python" color="krimson" style={{ top: '-8px', right: '16px' }} delay={0} />
              <FloatingBadge label="AI/ML" color="cyber" style={{ bottom: '-8px', left: '16px' }} delay={0.8} />
              <FloatingBadge label="Security" color="krimson" style={{ top: '50%', right: '-56px', transform: 'translateY(-50%)' }} delay={0.4} axis="x" />
              <FloatingBadge label="React" color="cyber" style={{ top: '50%', left: '-48px', transform: 'translateY(-50%)' }} delay={1.2} axis="x" />
              <FloatingBadge label="LLMs" color="krimson" style={{ bottom: '20px', right: '-44px' }} delay={1.6} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-dark-400 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs font-mono tracking-widest uppercase opacity-60">scroll</span>
        <FiArrowDown size={16} />
      </motion.div>
    </section>
  );
}
