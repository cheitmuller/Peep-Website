import React from 'react';
import styles from './HeroContent.module.css';

interface HeroContentProps {
  appStoreUrl?: string;
}

export default function HeroContent({
  appStoreUrl = 'https://apps.apple.com/app/peep'
}: HeroContentProps) {
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
        >
          <svg
            className={styles.appleIcon}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M14.5 2.5c-.8 0-1.5.3-2 .8-.5.5-.7 1.2-.6 1.9.8 0 1.5-.3 2-.8.5-.5.7-1.2.6-1.9zm1.8 3.5c-.9-.5-2.1-.8-3.3-.8-1.6 0-2.8.6-3.6 1.2-.6.4-.9.6-1.2.6s-.7-.2-1.3-.6c-.8-.5-1.9-1.2-3.4-1.2-1.9 0-3.6 1.1-4.4 2.8-.8 1.7-.6 3.7.5 5.5 1 1.6 2.4 3.4 4.2 3.4.8 0 1.3-.2 1.8-.5.5-.2.9-.4 1.5-.4s1 .2 1.5.4c.5.2 1 .5 1.8.5 1.8 0 3.2-1.8 4.2-3.4.6-.9.9-1.9 1-2.9-1.1-.5-1.9-1.6-1.9-2.9 0-1.3.8-2.4 1.9-2.9-.3-.5-.7-.9-1.3-1.3z"/>
          </svg>
          Download on iOS
        </a>
        <p className={styles.ctaSubtext}>No account required.</p>
      </div>
    </div>
  );
}
