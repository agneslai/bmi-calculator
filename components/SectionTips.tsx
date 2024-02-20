import React from 'react';
import Tip from './Tip';

const TIPS = [
  {
    title: 'Healthy Eating',
    image: '/icon-eating.svg',
    alt: 'icon eating',
    desc: 'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
  },
  {
    title: 'Regular exercise',
    image: '/icon-exercise.svg',
    alt: 'icon exercise',
    desc: 'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
  },
  {
    title: 'Adequate sleep',
    image: '/icon-sleep.svg',
    alt: 'icon sleep',
    desc: 'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
  },
];

const SectionTips = () => (
    <section className='section-grid section-padding relative'>
      <div className="absolute -top-[10px] -right-[100px] w-[1392px] h-[400px] bg-gradient-to-br from-[#D6FCFE00] to-[#D6E6FE] -z-50 rounded-[35px]" />

      {TIPS.map((tip) => (
        <div className='col-span-4'>
          <Tip image={tip.image} imageAlt={tip.alt} title={tip.title} desc={tip.desc} />
        </div>
      ))}
    </section>
  );

export default SectionTips;