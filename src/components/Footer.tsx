'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '@/data/data';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-dark-950 border-t border-white/[0.04] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">

          {/* Brand column */}
          <div>
            <a href="#hero" className="flex items-center gap-2.5 mb-4 w-fit group">
              <div className="w-9 h-9 rounded-lg bg-krimson flex items-center justify-center font-bold text-sm font-mono text-white shadow-krimson group-hover:shadow-krimson-lg transition-shadow">
                KN
              </div>
              <span className="font-bold text-white text-lg">
                Kupakwashe<span className="text-krimson">.</span>
              </span>
            </a>
            <p className="text-dark-300 text-sm leading-relaxed mb-4 max-w-xs">
              AI Engineer · Cybersecurity Specialist · Full-Stack Developer · Founder of{' '}
              <span className="text-krimson font-semibold">Krimson Tech</span>.
            </p>
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 text-dark-300 hover:text-white bg-dark-800 hover:bg-dark-700 rounded-lg transition-all border border-dark-600"
              >
                <FiGithub size={15} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 text-dark-300 hover:text-cyber bg-dark-800 hover:bg-dark-700 rounded-lg transition-all border border-dark-600"
              >
                <FiLinkedin size={15} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2 text-dark-300 hover:text-krimson bg-dark-800 hover:bg-dark-700 rounded-lg transition-all border border-dark-600"
              >
                <FiMail size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-mono text-dark-400 uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-dark-300 hover:text-krimson text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-krimson transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xs font-mono text-dark-400 uppercase tracking-widest mb-4">
              Get In Touch
            </h3>
            <div className="space-y-2.5 text-sm">
              <p className="text-dark-300">
                <span className="text-dark-400 text-xs font-mono block mb-0.5">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-krimson transition-colors break-all">
                  {personalInfo.email}
                </a>
              </p>
              <p className="text-dark-300">
                <span className="text-dark-400 text-xs font-mono block mb-0.5">Phone</span>
                {personalInfo.phone}
              </p>
              <p className="text-dark-300">
                <span className="text-dark-400 text-xs font-mono block mb-0.5">Domains</span>
                <span className="flex flex-wrap gap-2">
                  {personalInfo.domains.map((d) => (
                    <span key={d} className="text-xs font-mono text-krimson/70">{d}</span>
                  ))}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-400 text-xs font-mono">
            © {new Date().getFullYear()} Kupakwashe Isaac Nyanguru. Built with Next.js & Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-dark-400 text-xs">
              Powered by{' '}
              <span className="text-krimson font-semibold font-mono">Krimson Tech</span>
            </span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-dark-800 hover:bg-krimson border border-dark-600 hover:border-krimson rounded-lg text-dark-300 hover:text-white transition-all"
              aria-label="Scroll to top"
            >
              <FiArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
