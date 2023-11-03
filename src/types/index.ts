export type CardT={
    id:number,
    powerstats: {
        intelligence:number,
        strength:number,
        speed:number,
        durability:number,
        power:number,
        combat:number,
    },
    images:{
        sm:string,
        xs:string,
        md:string,
        lg:string,
    },
    name:string,
    alignment:string,
    race:string,
    gender:string,
};

export type SelectT={
    name:string,
    options:[{value:string,name:string},{value:string,name:string},{value:string,name:string}],
    colors:string[],
    theme:string,
    filter:Function,
    value:string,
}
export type HeroBattleT = {
    hero1: CardT ;
    hero2: CardT ;
    allStats: ("intelligence" | "strength" | "speed" | "durability" | "power" | "combat")[];
    sumStatsHero1: number;
    sumStatsHero2: number;
    smallScreen: boolean;
  };
  