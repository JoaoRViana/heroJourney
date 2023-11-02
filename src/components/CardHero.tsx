import { CardT } from "@/types"

export default function CardHero({info}:{info:CardT}){
    const {intelligence,strength,speed,durability,power,combat} = info.powerstats
    const {name,images,alignment} = info
    const sumStats=  intelligence + strength + speed+durability+power+combat;
    return(
        <div className={`${alignment==='good'?'bg-green-200':'bg-red-200'} p-2 text-center rounded-lg`}>
            <h1>{name}</h1>
            <img src={images.sm} alt={name}></img>
            <h2>
                {sumStats}
            </h2>
        </div>
    )
}   