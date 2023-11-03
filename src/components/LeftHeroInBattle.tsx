import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { HeroBattleT } from '@/types';

export default function LeftHeroInBattle({info}:{info:HeroBattleT}){
    const {hero1,hero2,sumStatsHero1,smallScreen,allStats} =  info
    return(
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
    )
}