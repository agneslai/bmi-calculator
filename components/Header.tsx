import Image from 'next/image';
import prefix from '@/utils/prefix';

const Header = () => (
  <header className="py-8">
    <Image src={`${prefix}/logo.svg`} alt="logo" width={64} height={64} className="mb-[24px]" />
  </header>
);

export default Header;
