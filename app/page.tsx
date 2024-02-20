import Header from '@/components/Header';
import SectionHero from '@/components/SectionHero';
import SectionIntro from '@/components/SectionIntro';
import SectionLimitations from '@/components/SectionLimitations';
import SectionTips from '@/components/SectionTips';

const Home = () => (
  <main className="min-h-screen max-w-[1160px] flex flex-col mx-auto relative">
    <div className="absolute right-[280px] w-[978px] h-[737px] bg-gradient-to-br from-[#D6FCFE00] to-[#D6E6FE] -z-50 rounded-br-[30px] rounded-bl-[30px]" />
    <Header />
    <SectionHero />
    <SectionIntro />
    <SectionTips />
    <SectionLimitations />
  </main>
);

export default Home;