import CardHeroe from "./CardHeroe";

export default function HeroesSection({heroes}:{heroes:any}){
    return(
        <div className="flex flex-wrap justify-around">
            {heroes.map((e:any,i:any)=>(
                <div key={i} className="p-2">
                    <CardHeroe info={e}/>
                </div>
            ))}
        </div>
    )
}