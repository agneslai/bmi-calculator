import Image from 'next/image';

interface Props {
  image: string;
  imageAlt: string;
  title: string;
  desc: string;
}

const Tip = ({ image, imageAlt, title, desc }: Props) => (
  <div className="flex flex-col justify-start md:flex-row lg:flex-col md:gap-x-[40px]">
    <Image
      src={image}
      alt={imageAlt}
      width={64}
      height={64}
      className="mb-[32px] lg:mb-[45px]"
    />
    <div>
      <p className="mb-[24px] text-dark-blue text-[24px] -tracking-5 font-semibold">{title}</p>
      <p className="text-blue-grey text-[16px] leading-150">{desc}</p>
    </div>
  </div>
);

export default Tip;