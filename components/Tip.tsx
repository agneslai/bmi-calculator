import Image from "next/image"

interface Props {
  image: string;
  imageAlt: string;
  title: string;
  desc: string;
}

const Tip = ({ image, imageAlt, title, desc }: Props) => {
  return (
    <div className="flex flex-col justify-start">
      <Image src={image} alt={imageAlt} width={64} height={64} className="mb-[45px]" />
      <p className="mb-[24px] text-dark-blue text-[24px] -tracking-5 font-semibold">{title}</p>
      <p className="text-blue-grey text-[16px] leading-150">{desc}</p>
    </div>
  )
}

export default Tip;