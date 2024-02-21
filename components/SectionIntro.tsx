import prefix from '@/utils/prefix';
import Image from 'next/image';

const SectionIntro = () => (
  <section className='relative sectionIntro'>
    <Image
      src={`${prefix}/pattern-curved-line-left.svg`}
      alt="curve line"
      width={85}
      height={200}
      className='absolute right-0 hidden xl:block'
    />
    
    <div className='md:col-span-6 mb-[48px] md:m-0'>
      <div className="w-full md:h-[533px]">
        <Image
          src={`${prefix}/image-man-eating.svg`}
          alt="man eating"
          width={0}
          height={0}
          className="w-full h-full"
        />
      </div>
    </div>

    <div className='px-[24px] md:col-start-7 md:col-span-6 lg:p-0 lg:col-start-8 lg:col-span-5 '>
      <div className="flex flex-col items-center justify-start w-full h-full">
        <h2 className="text-dark-blue title text-[32px] lg:text-[48px] lg:mt-[180px]">What your BMI result means</h2>
        <p className="text-blue-grey leading-150">A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
      </div>
    </div>
  </section>
);

export default SectionIntro;