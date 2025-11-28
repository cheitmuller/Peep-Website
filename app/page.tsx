import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/layout/HeroSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection
        leftContent={
          <div>
            <h1>A simpler way to feel better.</h1>
            <p className="text-large">
              A gentle mood tracking app designed to help you understand your emotions with clarity and ease.
            </p>
          </div>
        }
        rightContent={
          <div style={{
            width: '100%',
            height: '400px',
            background: 'var(--soft-gray)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <p>Video placeholder</p>
          </div>
        }
      />
    </Layout>
  );
}
