import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { HeroBattleT } from '@/types';

export default function MidInfosInBattle({info}:{info:HeroBattleT}){
    const {sumStatsHero1,sumStatsHero2,smallScreen,allStats} =  info
    return(
        <div className='flex flex-wrap justify-center w-[30%] h-[600px] '>
              {smallScreen?<div className="flex flex-wrap justify-center items-center">
                <h1 >
                {sumStatsHero1}
              </h1>
              {sumStatsHero1> sumStatsHero2?<div className="arrowUp"><ArrowUpwardIcon /></div>:<div className="arrowDown"><ArrowDownwardIcon/></div>}
              {sumStatsHero1 < sumStatsHero2?<div className="arrowUp"><ArrowUpwardIcon /></div>:<div className="arrowDown"><ArrowDownwardIcon/></div>}

              <h1 >
                {sumStatsHero2}
              </h1>
              </div>: <div className="flex flex-col justify-around  text-center ">
          {allStats.map((e) => (
            <h1 key={e} className="p-2">
              {e}
            </h1>
          ))}
        </div>}
        </div>
    )
}