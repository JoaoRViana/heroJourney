'use client'
import CardHero from "./CardHero";
import { createRandomColorRaces, setingAllHeroes } from "@/utils";
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
      const races: string[] = [];
      all.forEach((e: CardT) => {
        if (!races.includes(e.race)) {
          races.push(e.race);
        }
      });
      setAllHeroes(all);
    }

    const getFiltredHeroes = () => {
        if (filter.alignment === '' && filter.name === '') {
            setFiltredHeroes(allHeroes);
        } else {
            const validFilters: (keyof typeof filter)[] = ['name', 'alignment'];
            const newHeroes = allHeroes.map((e) => {
                const validate = validFilters.every((key) => {
                    const filterValue = filter[key].toLowerCase();
                    const heroValue = e[key].toLowerCase();
                    return heroValue.includes(filterValue);
                });
                if (validate) {
                    return e;
                } else {
                    return undefined;
                }
            }).filter((heroes) => heroes !== undefined) as CardT[];
            setFiltredHeroes(newHeroes);
        }
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
        <div className="flex flex-wrap justify-around ">
            {filtredHeroes.map((e: CardT, i: any) => (
                <div key={i} className={`p-2 ${selectedHerosId.includes(e.id) ? 'bg-cyan-400 rounded-lg' : ''}`}>
                    <button id={`hero${e.id}`} onClick={() => heroButton(e)}>
                        <CardHero info={e} />
                    </button>
                </div>
            ))}
        </div>
    )
}
