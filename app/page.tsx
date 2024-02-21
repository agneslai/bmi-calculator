import Header from '@/components/Header';
import SectionHero from '@/components/SectionHero';
import SectionIntro from '@/components/SectionIntro';
import SectionLimitations from '@/components/SectionLimitations';
import SectionTips from '@/components/SectionTips';

const Home = () => (
  <main className="min-h-screen lg:max-w-[1160px] flex flex-col mx-auto relative">
    <div className="hero__overlay" />
    <Header />
    <SectionHero />
    <SectionIntro />
    <SectionTips />
    <SectionLimitations />
  </main>
);

export default Home;