import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/layout/HeroSection';
import HeroContent from '@/components/features/HeroContent';
import VideoDisplay from '@/components/features/VideoDisplay';

export default function Home() {
  return (
    <Layout>
      <HeroSection
        leftContent={<HeroContent />}
        rightContent={<VideoDisplay />}
      />
    </Layout>
  );
}
