import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        krimson: {
          DEFAULT: '#e8192c',
          light: '#ff3355',
          dark: '#b01020',
        },
        cyber: {
          DEFAULT: '#00d4ff',
          light: '#33ddff',
          dark: '#00a8cc',
        },
        dark: {
          950: '#04040a',
          900: '#080810',
          800: '#0e0e18',
          700: '#141420',
          600: '#1a1a2a',
          500: '#252535',
          400: '#383850',
          300: '#555570',
        },
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 1.5s infinite',
        glow: 'glow 2.5s ease-in-out infinite',
        'border-spin': 'border-spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        'border-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        krimson: '0 0 24px rgba(232, 25, 44, 0.4)',
        'krimson-lg': '0 0 48px rgba(232, 25, 44, 0.3)',
        cyber: '0 0 24px rgba(0, 212, 255, 0.4)',
        'cyber-lg': '0 0 48px rgba(0, 212, 255, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
