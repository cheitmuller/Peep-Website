import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/features/ContactForm';
import FAQSection from '@/components/features/FAQSection';
import styles from './support.module.css';

export const metadata = {
  title: 'Support - Peep',
  description: 'Get help with Peep mood tracking app. Contact our support team, browse FAQs, and find answers about mood tracking, privacy, subscriptions, and more.',
  openGraph: {
    title: 'Support - Peep',
    description: 'Get help with Peep mood tracking app.',
    url: 'https://peepmood.com/support',
    type: 'website',
  },
};

export default function SupportPage() {
  return (
    <Layout>
      <div className={styles.supportPage}>
        <div className={styles.container}>
          {/* Hero Section */}
          <header className={styles.hero}>
            <h1>How can we help you?</h1>
            <p className={styles.heroSubtext}>
              Get support for Peep, find answers to common questions, or send us a message.
            </p>
            <p className={styles.emailDisplay}>
              <svg className={styles.emailIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6L10 11L18 6M2 6V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V6M2 6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H16C16.5304 4 17.0391 4.21071 17.4142 4.58579C17.7893 4.96086 18 5.46957 18 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="mailto:peepinquiry@gmail.com">peepinquiry@gmail.com</a>
            </p>
          </header>

          {/* Contact Form Section */}
          <section className={styles.section}>
            <h2>Send us a message</h2>
            <p className={styles.sectionSubtext}>
              Have a question or need help? Fill out the form below and we'll get back to you within 24 hours.
            </p>
            <ContactForm />
          </section>

          {/* FAQ Section */}
          <section className={styles.section}>
            <h2>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtext}>
              Find quick answers to common questions about using Peep.
            </p>
            <FAQSection />
          </section>
        </div>
      </div>
    </Layout>
  );
}
