import Image from 'next/image';

const SectionIntro = () => (
  <section className='section-grid section-padding'>
    <div className='col-span-6'>
      <div className="w-full h-[533px]">
        <Image src="/image-man-eating.svg" alt="man eating" width={0} height={0} className="w-full h-full" />
      </div>
    </div>
    <div className='col-start-8 col-span-5'>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="w-full">
          <h2 className="text-dark-blue title text-[48px]">What your BMI result means</h2>
          <p className="text-blue-grey">A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
        </div>
      </div>
    </div>
  </section>
);

export default SectionIntro;