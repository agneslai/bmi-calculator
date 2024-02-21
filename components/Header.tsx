import Image from 'next/image';
import prefix from '@/utils/prefix';

const Header = () => (
  <header className="flex items-center justify-center py-4 lg:pt-8 lg:justify-start">
    <Image
      src={`${prefix}/logo.svg`}
      alt="logo"
      width={0}
      height={0}
      objectFit='cover'
      className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]"
    />
  </header>
);

export default Header;
