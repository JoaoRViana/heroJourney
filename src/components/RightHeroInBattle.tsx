import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { HeroBattleT } from '@/types';

export default function RightHeroInBattle({info}:{info:HeroBattleT}){
    const {hero1,hero2,sumStatsHero2,smallScreen,allStats} =  info

    return(
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
    )
}