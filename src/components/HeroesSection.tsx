'use client'
import CardHero from "./CardHero";
import Loading from "./Loading";
import { filterHeroes, setingAllHeroes } from "@/utils";
import { useEffect, useState } from "react";
import { CardT } from "@/types";
import { useDispatch } from "react-redux"
import { useAppSelector } from "@/redux/store";
import { AppDispatch } from "@/redux/store";
import { chooseHero } from "@/redux/features/chooseHeroes";

export default function HeroesSection(){
    const [allHeroes, setAllHeroes] = useState<CardT[]>([]);
    const [filtredHeroes, setFiltredHeroes] = useState<CardT[]>([]);
    const filter = useAppSelector((state)=> state.changeFilter);
    const [loading, setLoading] = useState(true);
    const [selectedHerosId, setSelectedHerosId] = useState<number[]>([]);
    const dispatch = useDispatch<AppDispatch>();
  
    const gettingAllHeroes = async () => {
      const all = await setingAllHeroes();
      setAllHeroes(all);
    }

    const getFiltredHeroes = () => {
        let newHeroes = filterHeroes(allHeroes,'alignment',filter.alignment)
        newHeroes = filterHeroes(newHeroes,'name',filter.name)
        newHeroes = filterHeroes(newHeroes,'gender',filter.gender);
        setFiltredHeroes(newHeroes)
    }

    useEffect(() => {
        async function fetchData() {
            await gettingAllHeroes();
            setLoading(false);
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (!loading) {
            getFiltredHeroes();
        }
    }, [loading, filter]);

    useEffect(() => {
        const choosedHeroes = allHeroes.filter((e) => (selectedHerosId.includes(e.id)));
        dispatch(chooseHero(choosedHeroes));
    }, [selectedHerosId]);

    const heroButton = (hero: CardT) => {
        if (selectedHerosId.length === 0) {
            setSelectedHerosId([hero.id]);
        } else if (selectedHerosId.length === 1) {
            if (selectedHerosId[0] === hero.id) {
                setSelectedHerosId([]);
            } else {
                setSelectedHerosId([...selectedHerosId, hero.id]);
            }
        } else if (selectedHerosId.length === 2) {
            if (selectedHerosId.includes(hero.id)) {
                setSelectedHerosId(selectedHerosId.filter((id) => id !== hero.id));
            } else {
                setSelectedHerosId([selectedHerosId[1], hero.id]);
            }
        }
    };
      
    return (
        <div className="flex flex-wrap justify-center items-center">
            {loading?<Loading />:
            <div className="flex flex-wrap justify-around ">
                 {filtredHeroes.map((e: CardT, i: any) => (
                <div key={i} className={`p-2 ${selectedHerosId.includes(e.id) ? 'bg-cyan-400 rounded-lg' : ''}`}>
                    <button id={`hero${e.id}`} onClick={() => heroButton(e)}>
                        <CardHero info={e} />
                    </button>
                </div>
            ))}
                </div>}
           
        </div>
    )
}
