/* eslint-disable @next/next/no-img-element */
'use client'
import { useAppSelector } from "@/redux/store";
import { CardT } from "@/types";
import LeftHeroInBattle from "./LeftHeroInBattle";
import RightHeroInBattle from "./RightHeroInBattle";
import MidInfosInBattle from "./MidInfosInBattle";

export default function Battle() {
  const heroes = useAppSelector((state) => (state.chooseHeroes.heroes as CardT[]));

  const hero1: CardT | undefined = heroes[0];
  const hero2: CardT | undefined = heroes[1];
  const allStats: ("intelligence" | "strength" | "speed" | "durability" | "power" | "combat")[] = ["intelligence", "strength", "speed", "durability", "power", "combat"];
  const sumStatsHero1 = allStats.reduce((acc, e) => acc + hero1.powerstats[e], 0);
  const sumStatsHero2 = allStats.reduce((acc, e) => acc + hero2.powerstats[e], 0);
  const smallScreen = window.innerWidth <1500?true:false;
  const allInfos = {hero1,hero2,sumStatsHero1,sumStatsHero2,smallScreen,allStats}

  return (
    <div>
      <h1 className=" text-center">
        <span className="text-green-600">Winner</span> {sumStatsHero1 > sumStatsHero2 ? hero1?.name : hero2?.name}
      </h1>
      <div className="flex flex-wrap justify-between">
        <LeftHeroInBattle info={allInfos}/>
        <MidInfosInBattle info={allInfos}/>
        <RightHeroInBattle info={allInfos}/>
      </div>
    </div>
  );
}
