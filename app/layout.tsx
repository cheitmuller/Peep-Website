import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Peep - A simpler way to feel better',
  description: 'A gentle mood tracking app designed to help you understand your emotions with clarity and ease.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
