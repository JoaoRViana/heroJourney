'use client'
import { useAppSelector } from "@/redux/store";

export default function Battle(){
    const heroes = useAppSelector((state)=>(state.chooseHeroes.heroes))
    const hero1 = heroes[0]
    const hero2 = heroes[1]

    return(
        <div>
            <div>
                <img alt={hero1.name} src={hero1.images.md}></img>
            </div>
            <div>
                <img alt={heroes[1].name} src={hero2.images.md}></img>
            </div>
        </div>
    )
}