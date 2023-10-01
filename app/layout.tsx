import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frontend Mentor | Rock, Paper, Scissors',
  description: 'Play the classic rock, paper, scissors online.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
