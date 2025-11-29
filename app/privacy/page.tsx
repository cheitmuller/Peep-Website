import Layout from '@/components/layout/Layout';
import styles from './privacy.module.css';

export const metadata = {
  title: 'Privacy Policy - Peep',
  description: 'Privacy policy for Peep mood tracking app - We don\'t collect, store, transmit, or share any of your personal data.',
};

export default function PrivacyPage() {
  return (
    <Layout>
      <div className={styles.privacyPage}>
        <div className={styles.container}>
          <h1>Privacy Policy for Peep</h1>
          <p className={styles.lastUpdated}>Last Updated: November 25, 2025</p>

          <section>
            <h2>Introduction</h2>
            <p>
              Peep ("we," "our," or "the app") is committed to protecting your privacy.
              This Privacy Policy explains how Peep handles your information when you use
              our daily mood tracking application.
            </p>
            <p>
              <strong>The short version:</strong> We don't collect, store, transmit, or
              share any of your personal data. All mood tracking data stays on your device.
            </p>
          </section>

          <section>
            <h2>Information We Do NOT Collect</h2>
            <p>
              Peep is designed with privacy as a core principle. We do NOT collect,
              transmit, or store:
            </p>
            <ul>
              <li>Mood entries or emotional data</li>
              <li>Personal notes or journal entries</li>
              <li>Tags or custom labels</li>
              <li>Usage data or analytics</li>
              <li>Device information</li>
              <li>Location data</li>
              <li>Contact information</li>
              <li>Email addresses or names</li>
              <li>Any other personal information</li>
            </ul>
          </section>

          <section>
            <h2>How Your Data is Stored</h2>
            <p>
              All mood tracking data you create in Peep is stored <strong>locally on your
              device only</strong> using Apple's SwiftData framework. This means:
            </p>
            <ul>
              <li>Your mood entries never leave your device</li>
              <li>We cannot access your data</li>
              <li>No third parties can access your data</li>
              <li>Your data is not backed up to our servers (we don't have servers)</li>
              <li>Your data is only backed up through your personal iCloud backup (if you have
                iCloud backup enabled for apps on your device)</li>
            </ul>
          </section>

          <section>
            <h2>iCloud Backup (Optional)</h2>
            <p>
              If you have iCloud backup enabled on your device, your iOS system may back up
              Peep's local data as part of your device's regular backup. This is:
            </p>
            <ul>
              <li>Controlled entirely by you through iOS Settings</li>
              <li>Encrypted by Apple</li>
              <li>Managed by Apple's iCloud service</li>
              <li>Not accessible to us</li>
              <li>Covered by <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple's Privacy Policy</a></li>
            </ul>
            <p>
              You can disable iCloud backup for Peep in Settings → [Your Name] → iCloud →
              Manage Storage → Backups → [This Device] → Peep.
            </p>
          </section>

          <section>
            <h2>In-App Purchases</h2>
            <p>
              Peep offers optional in-app purchases (weekly subscription and lifetime access).
              These purchases are:
            </p>
            <ul>
              <li>Processed entirely by Apple through the App Store</li>
              <li>Subject to <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple's Privacy Policy</a></li>
              <li>Managed through your Apple ID</li>
              <li>Not tracked or stored by us</li>
            </ul>
            <p>
              We receive only the minimal information necessary to verify your purchase status
              (a receipt from Apple's servers). We do not receive your payment information,
              Apple ID, or any other personal details.
            </p>
          </section>

          <section>
            <h2>Notifications</h2>
            <p>
              Peep can send you optional reminder notifications if you enable them. These
              notifications:
            </p>
            <ul>
              <li>Are scheduled locally on your device</li>
              <li>Do not transmit any data to external servers</li>
              <li>Can be disabled at any time in Settings</li>
              <li>Are controlled through iOS notification permissions</li>
            </ul>
            <p>We do not collect any data about when or if you open these notifications.</p>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>
              Peep does NOT integrate with any third-party services, analytics platforms, or
              advertising networks. There are:
            </p>
            <ul>
              <li>No analytics or tracking tools</li>
              <li>No advertising SDKs</li>
              <li>No social media integrations</li>
              <li>No crash reporting services</li>
              <li>No data brokers or data sharing</li>
            </ul>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>
              Peep is rated 4+ and is safe for users of all ages. Since we do not collect any
              personal information from anyone, including children, we are compliant with the
              Children's Online Privacy Protection Act (COPPA) and similar regulations.
            </p>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>Because all your data stays on your device:</p>
            <ul>
              <li>Your data security is managed by your device's built-in security (passcode,
                Face ID, Touch ID)</li>
              <li>We have no access to your data, so we cannot be breached</li>
              <li>Your data cannot be intercepted during transmission (because there is no
                transmission)</li>
            </ul>
            <p>We recommend:</p>
            <ul>
              <li>Keeping your device locked with a passcode or biometric lock</li>
              <li>Keeping your iOS updated to the latest version</li>
              <li>Using iCloud backup with strong account security</li>
            </ul>
          </section>

          <section>
            <h2>Your Rights and Choices</h2>
            <p>
              Since we don't collect your data, traditional data rights (access, deletion,
              portability) don't apply. However:
            </p>
            <ul>
              <li><strong>You own your data:</strong> All mood entries are yours and stored
                only on your device</li>
              <li><strong>You control your data:</strong> You can delete Peep at any time to
                remove all app data</li>
              <li><strong>You control notifications:</strong> Enable or disable reminders in
                Settings at any time</li>
              <li><strong>You control subscriptions:</strong> Manage or cancel subscriptions
                through the App Store</li>
            </ul>
          </section>

          <section>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes,
              we will notify you by:
            </p>
            <ul>
              <li>Updating the "Last Updated" date at the top of this policy</li>
              <li>Providing notice through the app (if applicable)</li>
              <li>Posting the new policy on our website</li>
            </ul>
            <p>
              Your continued use of Peep after changes constitutes acceptance of the updated
              policy.
            </p>
          </section>

          <section>
            <h2>Data Deletion</h2>
            <p>To delete all your Peep data:</p>
            <ol>
              <li>Delete the Peep app from your device</li>
              <li>All mood entries, notes, and settings will be permanently deleted from your
                device</li>
            </ol>
            <p>
              Note: If you have iCloud backup enabled, you may need to delete Peep's data from
              your iCloud backup separately through Settings → [Your Name] → iCloud → Manage
              Storage.
            </p>
          </section>

          <section>
            <h2>International Users</h2>
            <p>Peep is available worldwide. Since all data stays on your device:</p>
            <ul>
              <li>No data crosses international borders through our systems</li>
              <li>Your data remains in your physical location (on your device)</li>
              <li>We have no servers in any country</li>
            </ul>
          </section>

          <section>
            <h2>Legal Basis for Processing (GDPR)</h2>
            <p>For users in the European Economic Area (EEA):</p>
            <p>
              Since we do not collect or process any personal data, GDPR data processing
              requirements do not apply to Peep's core functionality. For in-app purchases
              processed by Apple, please refer to Apple's Privacy Policy.
            </p>
          </section>

          <section>
            <h2>California Privacy Rights (CCPA)</h2>
            <p>For California residents:</p>
            <p>
              We do not sell, share, or otherwise disclose personal information because we do
              not collect personal information. The CCPA's requirements regarding data collection,
              access, deletion, and opt-out do not apply because there is no data to access,
              delete, or opt out from.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or Peep's privacy practices,
              please contact us:
            </p>
            <p>
              <strong>Email:</strong> privacy@peep-app.com<br />
              <strong>Website:</strong> peep-app.com
            </p>
          </section>

          <section>
            <h2>App Store Privacy Nutrition Label</h2>
            <p>Our App Store listing reflects our privacy practices:</p>
            <p><strong>Data Not Collected</strong></p>
            <p>We do not collect any data from this app</p>
          </section>

          <section>
            <h2>Transparency</h2>
            <p>We believe in complete transparency about our privacy practices:</p>
            <ul>
              <li>We've designed Peep to be privacy-first from the ground up</li>
              <li>We have no business model that relies on your data</li>
              <li>We make money only through optional subscriptions, not through data
                collection or advertising</li>
              <li>Your trust is more important to us than any data we could collect</li>
            </ul>
          </section>

          <section className={styles.summary}>
            <p>
              <strong>Summary:</strong> Peep respects your privacy. Your mood tracking data
              stays on your device. We don't collect, transmit, or store any of your
              information. Ever.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
