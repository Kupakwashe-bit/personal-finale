// ─── Personal Info ────────────────────────────────────────────────────────────
export const personalInfo = {
  name: 'Kupakwashe Isaac Nyanguru',
  shortName: 'Kupakwashe',
  initials: 'KN',
  headline: 'AI & Cybersecurity Enthusiast | Full-Stack Developer | Founder of Krimson Tech',
  subheadline:
    'Driven IT professional passionate about building intelligent systems, agentic AI, and secure network infrastructures to solve real-world challenges.',
  location: 'Zimbabwe',
  email: 'nyangurukupakwashe@gmail.com',
  phone: '+263 781 856 876',
  github: 'https://github.com/Kupakwashe-bit',
  linkedin: 'https://linkedin.com/in/kupakwashe-isaac-nyanguru',
  domains: ['kupadev.com', 'naggles02.com'],
  brand: 'Krimson Tech',
  roles: [
    'AI & Cybersecurity Enthusiast',
    'Full-Stack Developer',
    'Autonomous AI Agent Builder',
    'Founder of Krimson Tech',
    'Deep Learning Engineer',
    'Penetration Tester',
  ],
};

// ─── About ────────────────────────────────────────────────────────────────────
export const about = {
  bio: `Recently completed my BSc Honours in Information Technology at Chinhoyi University of Technology. I specialise in deep learning, autonomous AI agents, and penetration testing — building systems that think, adapt, and protect.`,
  brand: `I actively create educational tech content across TikTok, YouTube, Instagram, and LinkedIn under Krimson Tech, bridging cutting-edge AI research and real-world implementation for a growing online community.`,
  focus: `Currently participating in the Matsuo Lab (GCI World) AI Research Programme (2026 cohort) and scaling freelance software services through Krimson Tech.`,
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Built', value: '15+' },
    { label: 'Hackathons', value: '5+' },
    { label: 'Certifications', value: '3+' },
  ],
  highlights: [
    { icon: '🎓', label: 'BSc Honours IT', sub: 'Chinhoyi University of Technology' },
    { icon: '🏆', label: '1st Place NESARI ZIE 2025', sub: 'National Engineering Competition' },
    { icon: '🔬', label: 'Matsuo Lab GCI 2026', sub: 'AI Research Programme — Tokyo' },
    { icon: '🚀', label: 'Founder', sub: 'Krimson Tech — AI & Freelance Brand' },
  ],
};

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: 'AI & Machine Learning',
    accent: 'krimson' as const,
    items: [
      { name: 'Python', level: 90 },
      { name: 'TensorFlow / Keras', level: 82 },
      { name: 'LLM & Prompt Engineering', level: 85 },
      { name: 'Ollama / Local LLMs', level: 80 },
      { name: 'Agentic Workflows', level: 78 },
    ],
    tags: ['PyTorch', 'Scikit-learn', 'OpenAI API', 'LangChain', 'Hugging Face', 'ONNX'],
  },
  {
    category: 'Security & Networking',
    accent: 'cyber' as const,
    items: [
      { name: 'Networking & Security', level: 88 },
      { name: 'Penetration Testing', level: 82 },
      { name: 'Metasploit / Nmap', level: 76 },
      { name: 'Wireshark / Traffic Analysis', level: 80 },
    ],
    tags: ['Kali Linux', 'Burp Suite', 'OSINT', 'CVE Research', 'IDS/IPS', 'Firewall'],
  },
  {
    category: 'Web & Mobile Dev',
    accent: 'krimson' as const,
    items: [
      { name: 'React / Next.js', level: 82 },
      { name: 'Node.js / Express', level: 78 },
      { name: 'Flask / FastAPI', level: 80 },
      { name: 'React Native', level: 72 },
      { name: 'Flutter', level: 68 },
    ],
    tags: ['TypeScript', 'REST APIs', 'WebSockets', 'MongoDB', 'PostgreSQL', 'Tailwind'],
  },
  {
    category: 'DevOps & Tools',
    accent: 'cyber' as const,
    items: [
      { name: 'Linux / Ubuntu', level: 78 },
      { name: 'Git / GitHub', level: 88 },
      { name: 'Docker', level: 72 },
      { name: 'REST API Design', level: 85 },
    ],
    tags: ['CI/CD', 'Vercel', 'Nginx', 'Bash Scripting', 'WebSockets', 'SSH'],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: 'Nexus Guard AI / NetPatrol',
    subtitle: 'Automated IT Risk Management System',
    description:
      'Final-year capstone featuring a neural anomaly detection engine and an agentic security intelligence layer. Combines deep learning threat modelling with autonomous response capabilities for enterprise network protection.',
    tags: ['Python', 'TensorFlow', 'Agentic AI', 'Network Security', 'Deep Learning', 'FastAPI'],
    badge: '🎓 Final Year Capstone',
    accent: 'krimson' as const,
  },
  {
    title: 'AI Network Monitoring System',
    subtitle: 'Real-Time Anomaly Detection Platform',
    description:
      'Co-developed an award-winning deep learning system detecting and flagging network anomalies in real-time. Combines live traffic analysis, pattern recognition, and a responsive admin dashboard.',
    tags: ['Deep Learning', 'Python', 'React', 'WebSockets', 'Network Analysis', 'Dashboard'],
    badge: '🥇 1st Place — NESARI ZIE 2025',
    accent: 'cyber' as const,
  },
  {
    title: 'AI Desktop Automation Agent',
    subtitle: 'Self-Hosted Autonomous AI Gateway',
    description:
      'A self-hosted AI gateway integrating local LLMs (via Ollama) with a Telegram bot and autonomous desktop control on Ubuntu. Engineered WebSocket pipelines for real-time agentic command execution.',
    tags: ['Python', 'Ollama', 'Telegram API', 'WebSockets', 'Ubuntu', 'Automation'],
    badge: '⚡ Agentic AI System',
    accent: 'krimson' as const,
  },
  {
    title: 'Dynamic Weather Dashboard',
    subtitle: 'Live Weather Intelligence App',
    description:
      'Built solo during the CUT Technofest Hackathon 2024. Features live data integration, location-based forecasts, and a polished reactive UI with real-time updates via ReactJS and public Weather APIs.',
    tags: ['ReactJS', 'Weather API', 'Geolocation', 'CSS3', 'REST API', 'Data Viz'],
    badge: '🚀 CUT Technofest 2024',
    accent: 'cyber' as const,
  },
];

// ─── Certifications & Achievements ───────────────────────────────────────────
export type AchievementType = 'certification' | 'award' | 'hackathon' | 'program';

export const achievements: {
  title: string;
  issuer: string;
  year: string;
  type: AchievementType;
  accent: 'krimson' | 'cyber';
  description: string;
}[] = [
  {
    title: 'Google Prompt Engineering',
    issuer: 'Google',
    year: '2025',
    type: 'certification',
    accent: 'krimson',
    description: 'Certified in advanced LLM prompt engineering techniques and best practices.',
  },
  {
    title: '1st Place — NESARI ZIE 2025',
    issuer: 'NetOne / National Engineering Students',
    year: '2025',
    type: 'award',
    accent: 'cyber',
    description: 'National first place for AI-Powered Network Monitoring System (NetOne Category).',
  },
  {
    title: 'Matsuo Lab GCI World AI Programme',
    issuer: 'Matsuo Laboratory, University of Tokyo',
    year: '2026',
    type: 'program',
    accent: 'krimson',
    description: 'Selected for the 2026 cohort of the prestigious GCI global AI research programme.',
  },
  {
    title: 'IBM Dev Day AI Demystified',
    issuer: 'IBM',
    year: '2026',
    type: 'hackathon',
    accent: 'cyber',
    description: 'Participated in IBM\'s AI-focused development hackathon and workshops.',
  },
  {
    title: 'WFEO World Engineering Day Hackathon',
    issuer: 'World Federation of Engineering Organizations',
    year: '2026',
    type: 'hackathon',
    accent: 'krimson',
    description: 'International hackathon on engineering solutions for global challenges.',
  },
  {
    title: 'CeSHHAR Health Hackathon',
    issuer: 'CeSHHAR Zimbabwe',
    year: '2026',
    type: 'hackathon',
    accent: 'cyber',
    description: 'Tech-for-health hackathon building digital solutions for public health challenges.',
  },
];
