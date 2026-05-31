'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { projects } from '@/data/data';

function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  badge,
  accent,
  index,
}: {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  badge: string;
  accent: 'krimson' | 'cyber';
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const accentColor = accent === 'krimson' ? '#e8192c' : '#00d4ff';
  const accentBorder = accent === 'krimson' ? 'border-krimson/20 hover:border-krimson/50' : 'border-cyber/15 hover:border-cyber/40';
  const accentText = accent === 'krimson' ? 'text-krimson' : 'text-cyber';
  const accentBadge =
    accent === 'krimson'
      ? 'bg-krimson/15 text-krimson border-krimson/25'
      : 'bg-cyber/10 text-cyber border-cyber/20';
  const tagStyle =
    accent === 'krimson'
      ? 'bg-krimson/8 text-krimson/70 border-krimson/15'
      : 'bg-cyber/8 text-cyber/70 border-cyber/15';

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative flex flex-col rounded-2xl bg-dark-700/45 border ${accentBorder} overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl`}
      style={{
        boxShadow: '0 4px 32px rgba(0,0,0,0.3)',
      }}
      whileHover={{
        boxShadow: `0 8px 48px rgba(0,0,0,0.4), 0 0 24px ${accentColor}18`,
      }}
    >
      {/* Accent top bar */}
      <div
        className="h-0.5 w-full"
        style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
      />

      <div className="flex flex-col flex-1 p-6">
        {/* Badge */}
        <div className="mb-4">
          <span className={`inline-flex items-center px-3 py-1 text-xs font-mono font-semibold rounded-full border ${accentBadge}`}>
            {badge}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-xl font-bold text-white mb-1 group-hover:${accentText} transition-colors`}>
          {title}
        </h3>
        <p className={`text-sm font-mono mb-3 ${accentText} opacity-70`}>{subtitle}</p>

        {/* Description */}
        <p className="text-sm text-dark-300 leading-relaxed flex-1 mb-5">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-0.5 text-xs font-mono rounded-full border ${tagStyle}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
          <a
            href={`https://github.com/KupaDev23`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-dark-300 hover:text-white transition-colors"
          >
            <FiGithub size={13} />
            View on GitHub
          </a>
          <span className="flex-1" />
          <motion.span
            whileHover={{ x: 2, y: -2 }}
            className={`${accentText} opacity-60 group-hover:opacity-100 transition-opacity`}
          >
            <FiArrowUpRight size={16} />
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="projects" className="relative py-28 bg-dark-800">
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-[0.04] pointer-events-none rounded-full blur-3xl bg-krimson" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-2">{'// featured_projects'}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What I&apos;ve Built</h2>
          <p className="mt-4 text-dark-300 max-w-xl mx-auto text-sm">
            From award-winning AI systems to agentic automation engines &mdash; a selection of projects showcasing my depth across AI, security, and full-stack development.
          </p>
          <div className="mt-5 w-16 h-0.5 bg-krimson mx-auto rounded-full" />
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              tags={project.tags}
              badge={project.badge}
              accent={project.accent}
              index={i}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/KupaDev23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-dark-500 hover:border-krimson/50 text-dark-300 hover:text-krimson rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            <FiGithub size={16} />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
