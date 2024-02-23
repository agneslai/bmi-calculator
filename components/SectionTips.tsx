import prefix from '@/utils/prefix';
import Tip from './Tip';

const TIPS = [
  {
    title: 'Healthy Eating',
    image: `${prefix}/icon-eating.svg`,
    alt: 'icon eating',
    desc: 'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
  },
  {
    title: 'Regular exercise',
    image: `${prefix}/icon-exercise.svg`,
    alt: 'icon exercise',
    desc: 'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
  },
  {
    title: 'Adequate sleep',
    image: `${prefix}/icon-sleep.svg`,
    alt: 'icon sleep',
    desc: 'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
  },
];

const SectionTips = () => (
    <section className='sectionTips' data-aos="fade-up">
      <div className="sectionTips__overlay" />

      {TIPS.map((tip) => (
        <div className='lg:col-span-4' key={tip.title}>
          <Tip image={tip.image} imageAlt={tip.alt} title={tip.title} desc={tip.desc} />
        </div>
      ))}
    </section>
  );

export default SectionTips;