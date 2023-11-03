/* eslint-disable @next/next/no-img-element */
'use client'
import { useAppSelector } from "@/redux/store";
import { CardT } from "@/types";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Battle() {
  const heroes = useAppSelector((state) => (state.chooseHeroes.heroes as CardT[]));

  const hero1: CardT | undefined = heroes[0];
  const hero2: CardT | undefined = heroes[1];
  const allStats: ("intelligence" | "strength" | "speed" | "durability" | "power" | "combat")[] = ["intelligence", "strength", "speed", "durability", "power", "combat"];
  const sumStatsHero1 = allStats.reduce((acc, e) => acc + hero1.powerstats[e], 0);
  const sumStatsHero2 = allStats.reduce((acc, e) => acc + hero2.powerstats[e], 0);
  const smallScreen = window.innerWidth <1500?true:false;

  return (
    <div>
      <h1 className=" text-center">
        <span className="text-green-600">Winner</span> {sumStatsHero1 > sumStatsHero2 ? hero1?.name : hero2?.name}
      </h1>
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-wrap justify-between w-[30%]">
          <img alt={hero1?.name} src={hero1?.images.md}></img>
          {smallScreen?'':  <div className="flex flex-col justify-around  text-center h-[600px]">
            {allStats.map((e) => (
              <div key={`hero1${e}`} className="flex flex-wrap justify-center items-center">
                <h1  className="p-2">
                {hero1?.powerstats[e]}
              </h1>
              {hero1?.powerstats[e]> hero2?.powerstats[e]?<div className="arrowUp"><ArrowUpwardIcon /></div>:<div className="arrowDown"><ArrowDownwardIcon/></div>}
              </div>
              
            ))}
          </div>}
        
          <div className="flex flex-wrap justify-between w-full p-2 ">
            <h1>{hero1?.name}</h1>
            {smallScreen?'':<h1 className="p-4 border-t-2 border-slate-400">{sumStatsHero1}</h1>}
          </div>
        </div>
        {smallScreen?<div className="flex flex-wrap justify-center items-center">
                <h1  className="">
                {sumStatsHero1}
              </h1>
              {sumStatsHero1> sumStatsHero2?<div className="arrowUp"><ArrowUpwardIcon /></div>:<div className="arrowDown"><ArrowDownwardIcon/></div>}
              {sumStatsHero1 < sumStatsHero2?<div className="arrowUp"><ArrowUpwardIcon /></div>:<div className="arrowDown"><ArrowDownwardIcon/></div>}

              <h1  className="">
                {sumStatsHero2}
              </h1>
              </div>: <div className="flex flex-col justify-around  text-center w-[30%] h-[600px]">
          {allStats.map((e) => (
            <h1 key={e} className="p-2">
              {e}
            </h1>
          ))}
        </div>}
        <div className="flex flex-wrap justify-between w-[30%]">
            {smallScreen?'':<div className="flex flex-col justify-around  text-center h-[600px]">
            {allStats.map((e) => (
              <div key={`hero2${e}`} className="flex flex-wrap justify-center items-center">
                  {hero1?.powerstats[e]< hero2?.powerstats[e]?<div className="arrowUp"><ArrowUpwardIcon /></div>:<div className="arrowDown"><ArrowDownwardIcon/></div>}
                <h1  className="p-2">
                {hero2?.powerstats[e]}
              </h1>
            </div>
            
            ))}
          </div>}
          
          <img alt={hero2?.name} src={hero2?.images.md}></img>
          <div className="flex flex-wrap justify-between w-full p-2 ">
            {smallScreen?'':<h1 className="p-4 border-t-2 border-slate-400">{sumStatsHero2}</h1>}
            <h1>{hero2?.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
