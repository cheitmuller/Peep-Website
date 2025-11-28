import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Peep - A simpler way to feel better',
  description: 'A gentle mood tracking app designed to help you understand your emotions with clarity and ease.',
  keywords: ['mood tracking', 'mental health', 'emotional wellness', 'mood journal', 'self-care app'],
  authors: [{ name: 'Peep' }],
  creator: 'Peep',
  publisher: 'Peep',
  metadataBase: new URL('https://peep-app.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://peep-app.com',
    title: 'Peep - A simpler way to feel better',
    description: 'A gentle mood tracking app designed to help you understand your emotions with clarity and ease.',
    siteName: 'Peep',
    images: [
      {
        url: '/images/peep-logo.png',
        width: 800,
        height: 800,
        alt: 'Peep - Mood Tracking App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peep - A simpler way to feel better',
    description: 'A gentle mood tracking app designed to help you understand your emotions with clarity and ease.',
    images: ['/images/peep-logo.png'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
