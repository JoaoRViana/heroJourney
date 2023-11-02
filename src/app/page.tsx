'use client'
import HeroesSection from "@/components/HeroesSection";
import FilterArea from "@/components/FilterArea";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FilterArea />
      <HeroesSection/>
    </main>
  )
}
