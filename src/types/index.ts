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
};
