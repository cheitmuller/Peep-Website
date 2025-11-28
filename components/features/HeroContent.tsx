'use client';

import React from 'react';
import Image from 'next/image';
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

  return (
    <div className={styles.heroContent}>
      {/* Headline */}
      <h1 className={styles.headline}>
        A simpler way to feel better.
      </h1>

      {/* Subheadline */}
      <p className={styles.subheadline}>
        A gentle mood tracking app designed to help you understand your emotions with clarity and ease.
      </p>

      {/* CTA Container */}
      <div className={styles.ctaContainer}>
        <a
          href={appStoreUrl}
          className={styles.primaryCta}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Peep on iOS"
          onClick={handleAppStoreClick}
        >
          <Image
            src="/images/Apple_logo_black.svg"
            alt=""
            width={20}
            height={20}
            className={styles.appleIcon}
          />
          Download on iOS
        </a>
        <p className={styles.ctaSubtext}>No account required.</p>
      </div>
    </div>
  );
}
