'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { trackAppStoreClick } from '@/lib/analytics';
import styles from './Header.module.css';

interface HeaderProps {
  appStoreUrl?: string;
}

export default function Header({
  appStoreUrl = 'https://apps.apple.com/app/peep'
}: HeaderProps) {
  const handleAppStoreClick = () => {
    trackAppStoreClick('header');
  };

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any
      }}
    >
      <div className={styles.headerContent}>
        {/* Logo Container */}
        <div className={styles.logoContainer}>
          <Image
            src="/images/peep-logo.png"
            alt="Peep"
            width={40}
            height={40}
            className={styles.logo}
            priority
          />
          <span className={styles.wordmark}>Peep</span>
        </div>

        {/* Download Button */}
        <div className={styles.ctaContainer}>
          <a
            href={appStoreUrl}
            className={styles.downloadButton}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Peep on iOS"
            onClick={handleAppStoreClick}
          >
            <Image
              src="/apple-icon.png"
              alt=""
              width={20}
              height={20}
              className={styles.appleIcon}
            />
            <span className={styles.buttonText}>Download on iOS</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
