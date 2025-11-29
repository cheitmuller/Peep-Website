'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { trackAppStoreClick } from '@/lib/analytics';
import styles from './HeroContent.module.css';

interface HeroContentProps {
  appStoreUrl?: string;
}

export default function HeroContent({
  appStoreUrl = 'https://apps.apple.com/app/peep'
}: HeroContentProps) {
  const handleAppStoreClick = () => {
    trackAppStoreClick('hero');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any
      }
    }
  };

  return (
    <motion.div
      className={styles.heroContent}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Headline */}
      <motion.h1 className={styles.headline} variants={itemVariants}>
        A simpler way to feel better.
      </motion.h1>

      {/* Subheadline */}
      <motion.p className={styles.subheadline} variants={itemVariants}>
        A gentle mood tracking app designed to help you understand your emotions with clarity and ease.
      </motion.p>

      {/* CTA Container */}
      <motion.div className={styles.ctaContainer} variants={itemVariants}>
        <a
          href={appStoreUrl}
          className={styles.primaryCta}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Peep on iOS"
          onClick={handleAppStoreClick}
        >
          <Image
            src="/images/apple-icon.png"
            alt=""
            width={20}
            height={20}
            className={styles.appleIcon}
          />
          Download on iOS
        </a>
      </motion.div>
    </motion.div>
  );
}
