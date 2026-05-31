'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiShield, FiYoutube, FiExternalLink } from 'react-icons/fi';
import { about, personalInfo } from '@/data/data';

function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="text-center p-4 rounded-xl bg-dark-700/60 border border-white/[0.05]"
    >
      <div className="text-3xl font-black text-krimson font-mono leading-none mb-1">{value}</div>
      <div className="text-xs text-dark-300 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

function HighlightCard({
  icon,
  label,
  sub,
  index,
}: {
  icon: string;
  label: string;
  sub: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      className="flex items-start gap-3 p-4 rounded-xl bg-dark-700/40 border border-white/[0.05] hover:border-krimson/25 hover:-translate-y-0.5 transition-all duration-200 group"
    >
      <span className="text-xl leading-none">{icon}</span>
      <div>
        <div className="text-sm font-semibold text-white group-hover:text-krimson transition-colors">
          {label}
        </div>
        <div className="text-xs text-dark-300 mt-0.5">{sub}</div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="about" className="relative py-28 bg-dark-800">
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-2">{'// about_me'}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Who I Am</h2>
          <div className="mt-4 w-16 h-0.5 bg-krimson mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* ── Left: Bio text ── */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              {about.bio}
            </motion.p>

            {/* Krimson Tech card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-5 rounded-xl bg-dark-700/50 border border-krimson/25 glow-krimson/10"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-krimson animate-pulse" />
                <span className="text-sm font-semibold text-krimson font-mono uppercase tracking-wider">
                  Krimson Tech — Brand & Startup
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{about.brand}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-mono text-dark-300">
                {['TikTok', 'YouTube', 'Instagram', 'LinkedIn'].map((p) => (
                  <span key={p} className="px-2 py-0.5 bg-dark-600/60 rounded-full border border-white/[0.06]">
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Current focus */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5 rounded-xl bg-dark-700/50 border border-cyber/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <FiCode size={14} className="text-cyber" />
                <span className="text-sm font-semibold text-cyber font-mono uppercase tracking-wider">
                  Current Focus
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{about.focus}</p>
            </motion.div>

            {/* Domain links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex gap-4 text-sm"
            >
              <a
                href={personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-dark-300 hover:text-krimson transition-colors font-mono"
              >
                <FiExternalLink size={12} />
                kupadev22.netlify.app
              </a>
            </motion.div>
          </div>

          {/* ── Right: Stats + Highlights ── */}
          <div className="space-y-7">
            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-3">
              {about.stats.map((s, i) => (
                <StatCard key={s.label} value={s.value} label={s.label} index={i} />
              ))}
            </div>

            {/* Highlight cards */}
            <div className="space-y-2.5">
              <p className="text-xs font-mono text-dark-300 uppercase tracking-widest mb-3">
                Key Milestones
              </p>
              {about.highlights.map((h, i) => (
                <HighlightCard key={h.label} icon={h.icon} label={h.label} sub={h.sub} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
