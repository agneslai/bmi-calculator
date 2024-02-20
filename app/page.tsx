import { Header } from "@/components/Header";
import SectionHero from "@/components/SectionHero";
import SectionIntro from "@/components/SectionIntro";
import SectionLimitations from "@/components/SectionLimitations";
import SectionTips from "@/components/SectionTips";

export default function Home() {
  return (
    <main className="min-h-screen max-w-[1160px] p-8 flex flex-col mx-auto">
      <Header />
      <SectionHero />
      <SectionIntro />
      <SectionTips />
      <SectionLimitations />
    </main>
  );
}
