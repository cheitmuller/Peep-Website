import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/layout/HeroSection';
import HeroContent from '@/components/features/HeroContent';

export default function Home() {
  return (
    <Layout>
      <HeroSection
        leftContent={<HeroContent />}
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
