import './globals.css';
import type { Metadata } from 'next';
import { Barlow_Semi_Condensed } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Frontend Mentor | Rock, Paper, Scissors',
  description: 'Play the classic rock, paper, scissors online for free.',
};

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${barlowSemiCondensed.className}`}>{children}</body>
    </html>
  );
}
