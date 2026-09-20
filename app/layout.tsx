import type { Metadata } from 'next';
import { Newsreader, Public_Sans } from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aether — Serverless Editorial Platform',
  description: 'Thoughtful stories, perspectives, and ideas from a community of curious engineering writers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${publicSans.variable}`}>
      <body className="bg-[#FBFBFA] text-[#1A1A1A] antialiased">
        {children}
      </body>
    </html>
  );
}
