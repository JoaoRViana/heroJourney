import { CardT } from "@/types"

export default function CardHeroe(info:CardT){
    const {intelligence,strength,speed,durability,power,combat} = info.powerStats
    const sumStats=  intelligence + strength + speed+durability+power+combat;
    return(
        <div>
        </div>
    )
}