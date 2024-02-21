'use client';

import Calculator from '@/components/Calculator';

const SectionHero = () => (
  <section className="hero">
    <div className="lg:col-span-5">
      <div className="flex flex-col">
        <h1 className="text-dark-blue title text-[48px] lg:text-[64px] lg:mt-[100px]">Body Mass Index Calculator</h1>
        <p className="text-[16px] text-blue-grey">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
      </div>
    </div>

    <div className="lg:col-start-7 lg:col-span-6">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Calculator />
      </div>
    </div>

  </section>
);

export default SectionHero;