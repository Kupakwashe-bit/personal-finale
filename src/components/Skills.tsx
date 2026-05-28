'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '@/data/data';

// ─── Animated progress bar ────────────────────────────────────────────────────
function ProgressBar({
  name,
  level,
  accent,
  delay,
}: {
  name: string;
  level: number;
  accent: 'krimson' | 'cyber';
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-gray-300">{name}</span>
        <span
          className={`text-xs font-mono font-semibold ${accent === 'krimson' ? 'text-krimson' : 'text-cyber'}`}
        >
          {level}%
        </span>
      </div>
      <div className="progress-track">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay }}
          className={accent === 'krimson' ? 'progress-fill-krimson' : 'progress-fill-cyber'}
        />
      </div>
    </div>
  );
}

// ─── Skill card ───────────────────────────────────────────────────────────────
function SkillCard({
  category,
  accent,
  items,
  tags,
  index,
}: {
  category: string;
  accent: 'krimson' | 'cyber';
  items: { name: string; level: number }[];
  tags: string[];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const accentBorder = accent === 'krimson' ? 'border-krimson/25 hover:border-krimson/50' : 'border-cyber/20 hover:border-cyber/40';
  const accentBar = accent === 'krimson' ? 'bg-krimson' : 'bg-cyber';
  const accentText = accent === 'krimson' ? 'text-krimson' : 'text-cyber';
  const tagStyle =
    accent === 'krimson'
      ? 'bg-krimson/10 border-krimson/20 text-krimson/80'
      : 'bg-cyber/10 border-cyber/20 text-cyber/80';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className={`p-6 rounded-2xl bg-dark-700/50 border ${accentBorder} transition-all duration-300 hover:-translate-y-1 group`}
    >
      {/* Card header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-1 h-6 rounded-full ${accentBar}`} />
        <h3 className={`font-semibold text-sm uppercase tracking-wider ${accentText}`}>
          {category}
        </h3>
      </div>

      {/* Progress bars */}
      <div className="space-y-1">
        {items.map((item, i) => (
          <ProgressBar
            key={item.name}
            name={item.name}
            level={item.level}
            accent={accent}
            delay={i * 0.08 + index * 0.05}
          />
        ))}
      </div>

      {/* Tech tags */}
      <div className="mt-5 pt-5 border-t border-white/[0.05] flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`px-2.5 py-0.5 text-xs font-mono rounded-full border ${tagStyle}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Skills section ───────────────────────────────────────────────────────────
export default function Skills() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="skills" className="relative py-28 bg-dark-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-2">{'// tech_stack'}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills & Expertise</h2>
          <p className="mt-4 text-dark-300 max-w-xl mx-auto text-sm">
            A multi-disciplinary toolkit spanning AI research, offensive security, full-stack engineering, and cloud DevOps.
          </p>
          <div className="mt-5 w-16 h-0.5 bg-krimson mx-auto rounded-full" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {skills.map((skill, i) => (
            <SkillCard
              key={skill.category}
              category={skill.category}
              accent={skill.accent}
              items={skill.items}
              tags={skill.tags}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
