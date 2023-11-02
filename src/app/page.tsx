'use client'
import HeroesSection from "@/components/HeroesSection";
import FilterArea from "@/components/FilterArea";
import BattleButton from "@/components/BattleButton";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BattleButton />
      <FilterArea />
      <HeroesSection/>
    </main>
  )
}
