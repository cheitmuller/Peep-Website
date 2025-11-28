import React from 'react';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  children?: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export default function HeroSection({
  children,
  leftContent,
  rightContent
}: HeroSectionProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {children || (
          <>
            <div className={styles.heroContentLeft}>
              {leftContent}
            </div>
            <div className={styles.heroContentRight}>
              {rightContent}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
