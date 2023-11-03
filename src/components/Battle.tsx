/* eslint-disable @next/next/no-img-element */
'use client'
import { useAppSelector } from "@/redux/store";
import { CardT } from "@/types";

export default function Battle() {
  const heroes = useAppSelector((state) => (state.chooseHeroes.heroes as CardT[]));

  const hero1: CardT | undefined = heroes[0];
  const hero2: CardT | undefined = heroes[1];
  const allStats: ("intelligence" | "strength" | "speed" | "durability" | "power" | "combat")[] = ["intelligence", "strength", "speed", "durability", "power", "combat"];
  const sumStatsHero1 = allStats.reduce((acc, e) => acc + hero1.powerstats[e], 0);
  const sumStatsHero2 = allStats.reduce((acc, e) => acc + hero2.powerstats[e], 0);

  return (
    <div>
      <h1 className="text-xl text-center">
        <span className="text-green-600">Winner</span> {sumStatsHero1 > sumStatsHero2 ? hero1?.name : hero2?.name}
      </h1>
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-wrap justify-between w-[30%]">
          <img alt={hero1?.name} src={hero1?.images.md}></img>
          <div className="flex flex-col justify-around text-xl text-center h-[600px]">
            {allStats.map((e) => (
              <h1 key={`hero1${e}`} className="p-2">
                {hero1?.powerstats[e]}
              </h1>
            ))}
          </div>
          <div className="flex flex-wrap justify-between w-full p-2 text-xl">
            <h1>{hero1?.name}</h1>
            <h1 className="text-center ">{sumStatsHero1}</h1>
          </div>
        </div>

        <div className="flex flex-col justify-around text-xl text-center w-[30%] h-[600px]">
          {allStats.map((e) => (
            <h1 key={e} className="p-2">
              {e}
            </h1>
          ))}
        </div>

        <div className="flex flex-wrap justify-between w-[30%]">
          <div className="flex flex-col justify-around text-xl text-center h-[600px]">
            {allStats.map((e) => (
              <h1 key={`hero2${e}`} className="p-2">
                {hero2?.powerstats[e]}
              </h1>
            ))}
          </div>
          <img alt={hero2?.name} src={hero2?.images.md}></img>
          <div className="flex flex-wrap justify-between w-full p-2 text-xl">
            <h1>{sumStatsHero2}</h1>
            <h1>{hero2?.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
