'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward, FiCode, FiStar, FiBookOpen } from 'react-icons/fi';
import { achievements, type AchievementType } from '@/data/data';

const typeConfig: Record<
  AchievementType,
  { label: string; Icon: React.ElementType; iconColor: string }
> = {
  certification: { label: 'Certification', Icon: FiBookOpen, iconColor: 'text-krimson' },
  award: { label: 'Award', Icon: FiAward, iconColor: 'text-yellow-400' },
  hackathon: { label: 'Hackathon', Icon: FiCode, iconColor: 'text-cyber' },
  program: { label: 'Programme', Icon: FiStar, iconColor: 'text-purple-400' },
};

function AchievementCard({
  title,
  issuer,
  year,
  type,
  accent,
  description,
  index,
}: {
  title: string;
  issuer: string;
  year: string;
  type: AchievementType;
  accent: 'krimson' | 'cyber';
  description: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const { label, Icon, iconColor } = typeConfig[type];

  const accentBorder =
    accent === 'krimson' ? 'border-krimson/20 hover:border-krimson/45' : 'border-cyber/15 hover:border-cyber/40';
  const accentText = accent === 'krimson' ? 'text-krimson' : 'text-cyber';
  const accentGlow = accent === 'krimson' ? 'rgba(232,25,44,0.08)' : 'rgba(0,212,255,0.06)';
  const typeBadge =
    type === 'award'
      ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20'
      : type === 'certification'
      ? 'bg-krimson/12 text-krimson border-krimson/20'
      : type === 'program'
      ? 'bg-purple-400/10 text-purple-400 border-purple-400/20'
      : 'bg-cyber/10 text-cyber border-cyber/20';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative p-5 rounded-2xl bg-dark-700/50 border ${accentBorder} transition-all duration-300 hover:-translate-y-1`}
      style={{
        boxShadow: `0 2px 24px ${accentGlow}`,
      }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div className={`p-1.5 rounded-lg bg-dark-600/60 ${iconColor}`}>
            <Icon size={14} />
          </div>
          <span className={`text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${typeBadge}`}>
            {label}
          </span>
        </div>
        <span className={`text-sm font-mono font-bold ${accentText} opacity-70`}>{year}</span>
      </div>

      {/* Content */}
      <h3 className="font-bold text-white text-sm leading-snug mb-1 group-hover:text-krimson transition-colors">
        {title}
      </h3>
      <p className="text-xs text-dark-300 mb-2.5 font-mono">{issuer}</p>
      <p className="text-xs text-dark-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function Certifications() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  const awards = achievements.filter((a) => a.type === 'award');
  const certs = achievements.filter((a) => a.type === 'certification' || a.type === 'program');
  const hackathons = achievements.filter((a) => a.type === 'hackathon');

  return (
    <section id="certifications" className="relative py-28 bg-dark-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Cyber glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] opacity-[0.05] pointer-events-none blur-3xl bg-cyber rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-2">{'// achievements'}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Certifications & Awards</h2>
          <p className="mt-4 text-dark-300 max-w-xl mx-auto text-sm">
            Recognised nationally and internationally — from competitive hackathons to elite research programmes.
          </p>
          <div className="mt-5 w-16 h-0.5 bg-krimson mx-auto rounded-full" />
        </motion.div>

        {/* Achievement grid — all cards flat */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <AchievementCard
              key={a.title}
              title={a.title}
              issuer={a.issuer}
              year={a.year}
              type={a.type}
              accent={a.accent}
              description={a.description}
              index={i}
            />
          ))}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { value: awards.length, label: 'Awards' },
            { value: certs.length, label: 'Certifications & Programmes' },
            { value: hackathons.length, label: 'Hackathons' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-krimson font-mono">{s.value}+</div>
              <div className="text-xs text-dark-300 uppercase tracking-wider mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
