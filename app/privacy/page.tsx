import Layout from '@/components/layout/Layout';
import styles from './privacy.module.css';

export const metadata = {
  title: 'Privacy Policy - Peep',
  description: 'Privacy policy for Peep mood tracking app',
};

export default function PrivacyPage() {
  return (
    <Layout>
      <div className={styles.privacyPage}>
        <div className={styles.container}>
          <h1>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2>Your Privacy Matters</h2>
            <p>
              At Peep, we take your privacy seriously. This privacy policy explains how we collect,
              use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <p>
              Peep is designed with privacy in mind. All your mood tracking data is stored locally
              on your device. We do not collect or store your personal mood data on our servers.
            </p>
          </section>

          <section>
            <h2>Data Storage</h2>
            <p>
              Your mood entries, tags, and preferences are stored securely on your device.
              No account is required to use Peep, ensuring your data remains private and under your control.
            </p>
          </section>

          <section>
            <h2>Analytics</h2>
            <p>
              We may collect anonymous usage statistics to improve the app experience.
              This data is aggregated and does not contain any personal or mood-related information.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at privacy@peep-app.com
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
