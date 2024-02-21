import Image from 'next/image';

interface Props {
  image: string;
  imageAlt: string;
  title: string;
  desc: string;
}

const Limitation = ({ image, imageAlt, title, desc }: Props) => (
  <div className="flex flex-col md:h-full gap-y-[16px] shadow-default p-[32px] rounded-[16px]">
    <div className="flex gap-x-[16px]">
      <Image src={image} alt={imageAlt} width={32} height={32} />
      <p className="text-dark-blue text-[20px] font-semibold -tracking-5">{title}</p>
    </div>
    <p className="text-blue-grey leading-150">{desc}</p>
  </div>
);

export default Limitation;