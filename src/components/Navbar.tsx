'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';
import { personalInfo } from '@/data/data';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/[0.05] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-md bg-krimson flex items-center justify-center font-bold text-xs font-mono text-white shadow-krimson group-hover:shadow-krimson-lg transition-shadow duration-300">
              KN
            </div>
            <span className="hidden sm:block font-semibold text-white tracking-tight">
              Kupakwashe<span className="text-krimson">.</span>dev
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm text-dark-300 hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-krimson group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop CTA + socials */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-dark-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={17} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-dark-300 hover:text-cyber transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={17} />
            </a>
            <a
              href="#contact"
              className="ml-1 px-4 py-1.5 text-sm font-semibold text-white bg-krimson hover:bg-krimson-light rounded-md shadow-krimson hover:shadow-krimson-lg transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-dark-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-white/[0.05] bg-dark-900/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2.5 text-dark-300 hover:text-white hover:bg-dark-700/60 rounded-lg transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-white/[0.05] flex items-center justify-between">
                <div className="flex gap-3">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-dark-300 hover:text-white transition-colors">
                    <FiGithub size={18} />
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-dark-300 hover:text-cyber transition-colors">
                    <FiLinkedin size={18} />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-1.5 text-sm font-semibold text-white bg-krimson rounded-md"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
