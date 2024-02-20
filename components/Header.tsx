import Image from "next/image";

export const Header = () => {
  return (
    <header className="py-8">
      <Image src="/logo.svg" alt="logo" width={64} height={64} className="mb-[24px]" />
    </header>
  )
}
