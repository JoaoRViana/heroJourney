'use client'
import HeroesSection from "@/components/HeroesSection";
import FilterArea from "@/components/FilterArea";
import BattleButton from "@/components/BattleButton";
import { useAppSelector } from "@/redux/store";
import Header from "@/components/Header";

export default function Home() {
  const theme = useAppSelector((state) => state.changeTheme.value);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${theme.background}`}>
      <div className="w-full flex flex-col items-center h-fit">
        <Header />
        <BattleButton />
        <FilterArea />
      </div>
      <HeroesSection/>
    </main>
  )
}
