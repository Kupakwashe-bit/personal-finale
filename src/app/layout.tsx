import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kupakwashe Isaac Nyanguru | AI & Cybersecurity Developer',
  description:
    'Portfolio of Kupakwashe Isaac Nyanguru — AI Engineer, Cybersecurity Specialist, Full-Stack Developer, and Founder of Krimson Tech.',
  keywords: [
    'AI',
    'Machine Learning',
    'Cybersecurity',
    'Full-Stack Developer',
    'Krimson Tech',
    'Deep Learning',
    'Zimbabwe',
    'Penetration Testing',
    'Autonomous AI',
  ],
  authors: [{ name: 'Kupakwashe Isaac Nyanguru' }],
  openGraph: {
    title: 'Kupakwashe Isaac Nyanguru | AI & Cybersecurity Developer',
    description:
      'AI Engineer, Cybersecurity Specialist, Full-Stack Developer, and Founder of Krimson Tech.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-dark-900 text-gray-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
