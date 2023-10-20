import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Frontend Mentor | Rock, Paper, Scissors',
  description: 'Play the classic rock, paper, scissors online for free.',
};

const barlowSemiCondensed = localFont({
  src: [
    {
      path: './fonts/BarlowSemiCondensed-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/BarlowSemiCondensed-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-barlow-semi-condensed',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${barlowSemiCondensed.variable} min-h-screen w-full bg-radial-1 bg-no-repeat font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
