'use client';

import Calculator from '@/components/Calculator';

const SectionHero = () => (
  <section className="section-grid section-padding">
    <div className="col-span-5">
      <div className="flex flex-col items-center h-full">
        <h1 className="text-dark-blue title text-[64px] mt-[100px]">Body Mass Index Calculator</h1>
        <p className="text-blue-grey">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
      </div>
    </div>

    <div className="col-start-7 col-span-6">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <Calculator />
      </div>
    </div>

  </section>
);

export default SectionHero;