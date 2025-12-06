import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>
          © {currentYear} Peep. All rights reserved.
          {' · '}
          <a
            href="/privacy"
            className={styles.privacyLink}
          >
            Privacy Policy
          </a>
          {' · '}
          <a
            href="/terms"
            className={styles.privacyLink}
          >
            Terms of Service
          </a>
          {' · '}
          <a
            href="/support"
            className={styles.privacyLink}
          >
            Support
          </a>
        </p>
      </div>
    </footer>
  );
}
