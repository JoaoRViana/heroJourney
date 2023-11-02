import CardHeroe from "./CardHeroe";

export default function HeroesSection({heroes}:{heroes:any}){
    return(
        <div>
            {heroes.map((e:any,i:any)=>(
                <div key={i}>
                    <CardHeroe info={e}/>
                </div>
            ))}
        </div>
    )
}