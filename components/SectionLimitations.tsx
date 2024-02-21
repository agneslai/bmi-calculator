import Image from 'next/image';
import prefix from '@/utils/prefix';
import Limitation from './Limitation';

const SectionLimitations = () => (
  <section className="sectionLimitations">
    <div className='md:col-span-12 lg:col-start-1 lg:col-span-5'>
      <div className="w-full text-center lg:text-start">
        <h2 className="text-dark-blue title text-[32px] lg:text-[48px] mb-[32px] leading-110">Limitations of BMI</h2>
        <p className="text-blue-grey leading-150">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
      </div>
    </div>

    <div className='md:col-span-6 lg:col-start-8 lg:col-span-4'>
      <Limitation
        image={`${prefix}/icon-gender.svg`}
        imageAlt="icon gender"
        title="Gender"
        desc="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI." />
    </div>

    <div className='relative md:col-span-6 lg:col-start-5 lg:col-span-4'>
      <Image
        src={`${prefix}/pattern-curved-line-right.svg`}
        alt="curve line"
        width={94}
        height={122}
        className='absolute -left-[230px] hidden -top-[13px] lg:block'
      />
      <Limitation
        image={`${prefix}/icon-age.svg`}
        imageAlt="icon age"
        title="Age"
        desc="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content." />
    </div>

    <div className='md:col-span-6 lg:col-span-4'>
      <Limitation
        image={`${prefix}/icon-muscle.svg`}
        imageAlt="icon muscle"
        title="Muscle"
        desc="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat." />
    </div>

    <div className='md:col-span-6 lg:col-start-3 lg:col-span-4'>
      <Limitation
        image={`${prefix}/icon-pregnancy.svg`}
        imageAlt="icon pregnancy"
        title="Pregnancy"
        desc="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child." />
    </div>

    <div className='md:col-start-4 md:col-span-6 lg:col-span-4'>
      <Limitation
        image={`${prefix}/icon-race.svg`}
        imageAlt="icon race"
        title="Race"
        desc="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse." />
    </div>
  </section>
);

export default SectionLimitations;