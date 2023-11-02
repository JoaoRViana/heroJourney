'use client'
import HeroesSection from "@/components/HeroesSection";
import { setingAllHeroes } from "@/utils";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/store";
import FilterArea from "@/components/FilterArea";

export default function Home() {
  const [allHeroes, setAllHeroes] = useState([]);
  const [filtredHeroes, setFiltredHeroes] = useState([]);
  const filter = useAppSelector((state)=> state.changeFilter)
  const [loading, setLoading] = useState(true);

  const gettingAllHeroes = async () => {
    const all = await setingAllHeroes();
    setAllHeroes(all);
  }

  const getFiltredHeroes = () => {
    if (filter.alignment === '' && filter.name === '') {
      setFiltredHeroes(allHeroes);
    } else {
      const allFilters = Object.keys(filter);
      const newHeroes = allHeroes.map((e)=>{
        const validate = [];
        allFilters.forEach((key)=>{
          if(((e[key]).toLowerCase()).includes(filter[key].toLowerCase())){
            validate.push(true)
          }else{
            validate.push(false)
          }
        })
        if(!validate.includes(false)){
          return e
        }
      }).filter((heroes)=>(heroes !== undefined))
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FilterArea />
      <div>
        <HeroesSection heroes={filtredHeroes} />
      </div>
    </main>
  )
}
