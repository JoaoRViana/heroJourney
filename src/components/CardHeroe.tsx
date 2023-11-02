import { CardT } from "@/types"

export default function CardHeroe({info}:{info:CardT}){
    const {intelligence,strength,speed,durability,power,combat} = info.powerstats
    const sumStats=  intelligence + strength + speed+durability+power+combat;
    return(
        <div>
            <h1>{info.name}</h1>
            <img src={info.images.sm} alt={info.name}></img>
            <h2>
                {sumStats}
            </h2>
        </div>
    )
}