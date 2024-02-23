'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import Header from '@/components/Header';
import SectionHero from '@/components/SectionHero';
import SectionIntro from '@/components/SectionIntro';
import SectionLimitations from '@/components/SectionLimitations';
import SectionTips from '@/components/SectionTips';

const Home = () => {
  useEffect(() => {
    AOS.init({
      disable: true,
      offset: 10,
      easing: 'ease-out-back',
      duration: 800,
      delay: 300,
    });
  }, []);

  return (
    <main className="min-h-screen lg:max-w-[1160px] flex flex-col mx-auto relative">
      <div className="hero__overlay" />
      <Header />
      <SectionHero />
      <SectionIntro />
      <SectionTips />
      <SectionLimitations />
    </main>
  );
};

export default Home;