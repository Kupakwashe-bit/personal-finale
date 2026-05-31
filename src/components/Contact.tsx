'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import { SiTiktok, SiInstagram } from 'react-icons/si';
import { personalInfo } from '@/data/data';

const contactItems = [
  {
    Icon: FiMail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    accent: 'krimson' as const,
  },
  {
    Icon: FiPhone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    accent: 'cyber' as const,
  },
  {
    Icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/KupaDev23',
    href: personalInfo.github,
    accent: 'krimson' as const,
  },
  {
    Icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'kupakwashe-isaac-nyanguru',
    href: personalInfo.linkedin,
    accent: 'cyber' as const,
  },
];

export default function Contact() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const subject = encodeURIComponent(form.subject || 'Portfolio Enquiry');
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-28 bg-dark-800">
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] opacity-[0.05] pointer-events-none blur-3xl bg-krimson rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-2">{'// get_in_touch'}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact Me</h2>
          <p className="mt-4 text-dark-300 max-w-xl mx-auto text-sm">
            Have a project in mind, want to collaborate, or just want to say hi? My inbox is always open.
          </p>
          <div className="mt-5 w-16 h-0.5 bg-krimson mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Contact info ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 p-6 rounded-2xl bg-dark-700/50 border border-krimson/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-krimson animate-pulse" />
                <span className="text-sm font-mono text-krimson uppercase tracking-wider">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-dark-300 text-sm leading-relaxed">
                Whether you are looking for an AI engineer, full-stack developer, cybersecurity consultant, or a technical co-founder &mdash; let&apos;s build something remarkable together.
              </p>
            </motion.div>

            <div className="space-y-3">
              {contactItems.map((item, i) => {
                const accentText = item.accent === 'krimson' ? 'text-krimson' : 'text-cyber';
                const accentBorder =
                  item.accent === 'krimson'
                    ? 'border-krimson/20 hover:border-krimson/50'
                    : 'border-cyber/15 hover:border-cyber/40';
                const accentIconBg =
                  item.accent === 'krimson' ? 'bg-krimson/12' : 'bg-cyber/10';

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={`flex items-center gap-4 p-4 rounded-xl bg-dark-700/40 border ${accentBorder} transition-all duration-300 hover:-translate-y-0.5 group`}
                  >
                    <div className={`p-2.5 rounded-lg ${accentIconBg} ${accentText}`}>
                      <item.Icon size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-dark-400 uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="text-sm text-gray-300 group-hover:text-white transition-colors mt-0.5 break-all">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Domains */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-5 flex gap-3"
            >
              <a
                href={personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-dark-700/40 hover:bg-dark-600 border border-dark-500 hover:border-krimson/40 rounded-xl text-xs font-mono text-dark-300 hover:text-krimson transition-all duration-200"
              >
                🌐 kupadev22.netlify.app
              </a>
            </motion.div>

            {/* Social media row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-5 pt-5 border-t border-white/[0.05]"
            >
              <p className="text-xs font-mono text-dark-400 uppercase tracking-widest mb-3">
                Follow on social
              </p>
              <div className="flex gap-3">
                <a
                  href={personalInfo.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-dark-700/50 hover:bg-dark-600 border border-dark-500 hover:border-white/20 rounded-xl text-sm text-dark-300 hover:text-white transition-all duration-300 group"
                >
                  <SiTiktok size={15} className="group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-xs">@kupadev23</span>
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-dark-700/50 hover:bg-dark-600 border border-dark-500 hover:border-pink-500/30 rounded-xl text-sm text-dark-300 hover:text-pink-400 transition-all duration-300 group"
                >
                  <SiInstagram size={15} className="group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-xs">@kupadev23</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-7 rounded-2xl bg-dark-700/50 border border-dark-500 space-y-4"
            >
              <h3 className="text-lg font-semibold text-white mb-5">Send a Message</h3>

              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-dark-300 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <div className="relative">
                    <FiUser size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full pl-9 pr-3 py-2.5 bg-dark-800 border border-dark-500 focus:border-krimson/60 rounded-lg text-sm text-white placeholder-dark-400 outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-dark-300 uppercase tracking-wider mb-1.5">
                    Email
                  </label>
                  <div className="relative">
                    <FiMail size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full pl-9 pr-3 py-2.5 bg-dark-800 border border-dark-500 focus:border-krimson/60 rounded-lg text-sm text-white placeholder-dark-400 outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono text-dark-300 uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project enquiry / collaboration / hiring..."
                  className="w-full px-3 py-2.5 bg-dark-800 border border-dark-500 focus:border-krimson/60 rounded-lg text-sm text-white placeholder-dark-400 outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-dark-300 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <div className="relative">
                  <FiMessageSquare size={13} className="absolute left-3 top-3 text-dark-400" />
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or how I can help..."
                    className="w-full pl-9 pr-3 py-2.5 bg-dark-800 border border-dark-500 focus:border-krimson/60 rounded-lg text-sm text-white placeholder-dark-400 outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-krimson hover:bg-krimson-light text-white text-sm font-semibold rounded-lg shadow-krimson hover:shadow-krimson-lg transition-all duration-300"
              >
                <FiSend size={14} />
                Send Message
              </motion.button>

              <p className="text-center text-xs text-dark-400 font-mono">
                Opens your email client with the message pre-filled
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
