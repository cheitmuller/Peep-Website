import Layout from '@/components/layout/Layout';
import styles from './terms.module.css';

export const metadata = {
  title: 'Terms of Service - Peep',
  description: 'Terms of Service for Peep mood tracking app',
};

export default function TermsPage() {
  return (
    <Layout>
      <div className={styles.termsPage}>
        <div className={styles.container}>
          <h1>Terms of Service</h1>
          <p className={styles.dates}>
            <strong>Effective Date:</strong> December 1, 2024<br />
            <strong>Last Updated:</strong> November 29, 2024
          </p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using Peep ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
            </p>
            <p>
              These Terms apply to all users of the App. By using the App, you represent that you are at least 13 years of age. If you are under 18, you represent that you have reviewed these Terms with your parent or guardian and they agree to these Terms on your behalf.
            </p>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>
              Peep is a mood tracking application designed to help you monitor and reflect on your emotional well-being through:
            </p>
            <ul>
              <li>Logging daily moods and emotions</li>
              <li>Adding contextual tags and notes</li>
              <li>Reviewing mood history and patterns</li>
              <li>Setting optional reminders for mood check-ins</li>
            </ul>
            <p>
              The App stores all data locally on your device. We do not collect, transmit, or store your mood data on external servers.
            </p>
          </section>

          <section>
            <h2>3. License to Use</h2>
            <p>
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:
            </p>
            <ul>
              <li>Download and install the App on devices you own or control</li>
              <li>Use the App for personal, non-commercial purposes</li>
            </ul>
            <p>You may not:</p>
            <ul>
              <li>Modify, reverse engineer, decompile, or disassemble the App</li>
              <li>Remove any copyright, trademark, or other proprietary notices</li>
              <li>Use the App for any illegal or unauthorized purpose</li>
              <li>Sell, rent, lease, or sublicense the App</li>
              <li>Use the App in any way that could damage, disable, or impair the App</li>
            </ul>
          </section>

          <section>
            <h2>4. Subscriptions and Purchases</h2>
            <p>Peep offers optional subscription plans and one-time purchases:</p>

            <h3>4.1 Subscription Plans</h3>
            <ul>
              <li><strong>Weekly Subscription:</strong> $0.99/week with a 7-day free trial</li>
              <li><strong>Lifetime Purchase:</strong> $29.99 one-time payment</li>
            </ul>

            <h3>4.2 Billing</h3>
            <ul>
              <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period</li>
              <li>Your Apple ID account will be charged upon confirmation of purchase</li>
              <li>Cancellation takes effect at the end of the current billing period</li>
              <li>Free trials convert to paid subscriptions unless canceled before trial expiration</li>
            </ul>

            <h3>4.3 Refunds</h3>
            <p>
              Refund requests are handled through the Apple App Store in accordance with Apple's refund policies. We do not directly process refund requests.
            </p>

            <h3>4.4 Changes to Pricing</h3>
            <p>
              We reserve the right to change subscription pricing at any time. Price changes will not affect existing subscribers until their next renewal period.
            </p>
          </section>

          <section>
            <h2>5. Privacy and Data</h2>
            <p>
              Your privacy is important to us. Please review our <a href="/privacy">Privacy Policy</a> to understand how we handle your information.
            </p>
            <p>Key points:</p>
            <ul>
              <li><strong>All mood data is stored locally</strong> on your device only</li>
              <li><strong>We do not collect or transmit</strong> your mood entries, tags, or notes</li>
              <li><strong>No account required</strong> - the App functions entirely offline</li>
              <li><strong>Analytics:</strong> We may collect anonymous, non-personal usage statistics to improve the App</li>
            </ul>
          </section>

          <section>
            <h2>6. Health and Medical Disclaimer</h2>
            <p className={styles.important}>
              <strong>IMPORTANT: Peep is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease or medical condition.</strong>
            </p>
            <p>
              The App is designed for personal reflection and mood awareness only. It should not be used as a substitute for:
            </p>
            <ul>
              <li>Professional medical advice, diagnosis, or treatment</li>
              <li>Mental health counseling or therapy</li>
              <li>Emergency mental health services</li>
            </ul>
            <p>If you are experiencing a mental health crisis or emergency:</p>
            <ul>
              <li><strong>US:</strong> Call or text 988 (Suicide & Crisis Lifeline)</li>
              <li><strong>US:</strong> Text "HELLO" to 741741 (Crisis Text Line)</li>
              <li><strong>International:</strong> Contact your local emergency services</li>
            </ul>
            <p>
              Always seek the advice of qualified health professionals with any questions about mental health or medical conditions. Never disregard professional medical advice or delay seeking it because of information from this App.
            </p>
          </section>

          <section>
            <h2>7. Intellectual Property</h2>
            <p>
              All content in the App, including but not limited to design, graphics, text, icons, images, audio, and software, is the property of Peep or its licensors and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              The "Peep" name and logo are trademarks. You may not use these marks without prior written permission.
            </p>
          </section>

          <section>
            <h2>8. User Responsibilities</h2>
            <p>You are responsible for:</p>
            <ul>
              <li>Maintaining the confidentiality of your device access</li>
              <li>All activities that occur on your device</li>
              <li>Ensuring your use complies with applicable laws</li>
              <li>Backing up your mood data (we recommend using iCloud backup)</li>
            </ul>
            <p>We are not responsible for any loss of data due to device failure, loss, or malfunction.</p>
          </section>

          <section>
            <h2>9. Disclaimer of Warranties</h2>
            <p>
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul>
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties that the App will be uninterrupted, timely, secure, or error-free</li>
              <li>Warranties regarding the accuracy or reliability of any information obtained through the App</li>
            </ul>
            <p>Your use of the App is at your sole risk.</p>
          </section>

          <section>
            <h2>10. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR:</p>
            <ul>
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, data, use, or other intangible losses</li>
              <li>Damages resulting from your use or inability to use the App</li>
              <li>Damages resulting from any content or conduct of third parties</li>
              <li>Unauthorized access to or alteration of your data</li>
            </ul>
            <p>
              IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID FOR THE APP IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Peep, its developers, and affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul>
              <li>Your use or misuse of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
            </ul>
          </section>

          <section>
            <h2>12. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective when posted within the App or on our website. Continued use of the App after changes constitutes acceptance of the modified Terms.
            </p>
            <p>Material changes will be communicated through:</p>
            <ul>
              <li>In-app notification</li>
              <li>Update to the "Last Updated" date at the top of these Terms</li>
            </ul>
          </section>

          <section>
            <h2>13. Modifications to the App</h2>
            <p>We reserve the right to:</p>
            <ul>
              <li>Modify or discontinue any feature of the App at any time</li>
              <li>Update the App to improve functionality, fix bugs, or enhance security</li>
              <li>Require updates to continue using the App</li>
            </ul>
            <p>We will make reasonable efforts to notify users of significant changes.</p>
          </section>

          <section>
            <h2>14. Termination</h2>
            <p>
              We may terminate or suspend your access to the App immediately, without prior notice, for:
            </p>
            <ul>
              <li>Violation of these Terms</li>
              <li>Fraudulent, abusive, or illegal activity</li>
              <li>Requests by law enforcement or government agencies</li>
            </ul>
            <p>Upon termination:</p>
            <ul>
              <li>Your license to use the App terminates immediately</li>
              <li>You must delete the App from all devices</li>
              <li>All provisions of these Terms that should survive termination will remain in effect</li>
            </ul>
          </section>

          <section>
            <h2>15. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of the United States without regard to conflict of law principles.
            </p>
            <p>Any disputes arising from these Terms or use of the App shall be resolved through:</p>
            <ol>
              <li><strong>Good Faith Negotiation:</strong> First attempt to resolve through direct communication</li>
              <li><strong>Binding Arbitration:</strong> If negotiation fails, disputes shall be resolved through binding arbitration in accordance with applicable arbitration rules</li>
              <li><strong>Class Action Waiver:</strong> You agree to resolve disputes individually, not as part of any class or representative action</li>
            </ol>
          </section>

          <section>
            <h2>16. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
            </p>
          </section>

          <section>
            <h2>17. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Peep regarding use of the App and supersede all prior agreements.
            </p>
          </section>

          <section>
            <h2>18. No Waiver</h2>
            <p>
              Our failure to enforce any right or provision of these Terms will not constitute a waiver of that right or provision.
            </p>
          </section>

          <section>
            <h2>19. Contact Information</h2>
            <p>If you have questions about these Terms, please contact us at:</p>
            <p>
              <strong>Email:</strong> support@peepmood.com<br />
              <strong>Website:</strong> peepmood.com
            </p>
          </section>

          <section>
            <h2>20. Apple App Store Terms</h2>
            <p>This App is distributed through the Apple App Store. You acknowledge and agree that:</p>
            <ul>
              <li>These Terms are between you and Peep, not Apple</li>
              <li>Apple has no obligation to provide maintenance or support</li>
              <li>Apple is not responsible for the App or any claims related to it</li>
              <li>In the event of third-party claims that the App infringes intellectual property rights, Peep (not Apple) is responsible</li>
              <li>Apple and its subsidiaries are third-party beneficiaries of these Terms</li>
            </ul>
          </section>

          <section className={styles.summary}>
            <p>
              <strong>By using Peep, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</strong>
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
