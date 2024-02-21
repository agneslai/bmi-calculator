import prefix from '@/utils/prefix';
import Limitation from './Limitation';

const SectionLimitations = () => (
    <section className="px-[24px] py-[40px] lg:py-[120px]">
      <div className='sectionLimitations__container'>
        <div className='lg:col-start-1 lg:col-span-5'>
          <div className="w-full">
            <h2 className="text-dark-blue title text-center lg:text-start text-[32px] mb-[32px] lg:text-[48px]">Limitations of BMI</h2>
            <p className="text-center text-blue-grey lg:text-start">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
          </div>
        </div>
        <div className='lg:col-start-8 lg:col-span-4'>
          <Limitation image={`${prefix}/icon-gender.svg`} imageAlt="icon gender" title="Gender" desc="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI." />
        </div>

        <div className='lg:col-start-5 lg:col-span-4'>
          <Limitation image={`${prefix}/icon-age.svg`} imageAlt="icon age" title="Age" desc="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content." />
        </div>
        <div className='lg:col-span-4'>
          <Limitation image={`${prefix}/icon-muscle.svg`} imageAlt="icon muscle" title="Muscle" desc="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat." />
        </div>
  
        <div className='lg:col-start-3 lg:col-span-4'>
          <Limitation image={`${prefix}/icon-pregnancy.svg`} imageAlt="icon pregnancy" title="Pregnancy" desc="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child." />
        </div>
        <div className='lg:col-span-4'>
          <Limitation image={`${prefix}/icon-race.svg`} imageAlt="icon race" title="Race" desc="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse." />
        </div>
      </div>
    </section>
  );

export default SectionLimitations;