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