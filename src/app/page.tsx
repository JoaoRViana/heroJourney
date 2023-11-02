'use client'
import CardHeroe from "@/components/CardHeroe";
import HeroesSection from "@/components/HeroesSection";
import { setingAllHeroes } from "@/utils";
import { useEffect, useState, useCallback } from "react";

export default function Home() {
  const [allHeroes, setAllHeroes] = useState([]);
  const [filtredHeroes, setFiltredHeroes] = useState([]);
  const [filter, setFilter] = useState({ name: '', alignment: '' });
  const [loading, setLoading] = useState(true);

  const gettingAllHeroes = async () => {
    const all = await setingAllHeroes();
    setAllHeroes(all);
  }

  const getFiltredHeroes = () => {
    console.log(filter)
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

  const handleFilterNameChange = useCallback((e) => {
    const updatedFilter = { ...filter, name: e.target.value };
    setFilter(updatedFilter);
  }, [filter]);

  const handleFilterAlignmentChange = useCallback((e) => {
    const updatedFilter = { ...filter, alignment: e.target.value };
    setFilter(updatedFilter);
  }, [filter]);


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
      <div>
        <input placeholder="find Heroe" onChange={handleFilterNameChange}></input>
        <select onChange={handleFilterAlignmentChange} >
          <option value={''}>All</option>
          <option value={'good'}>Good</option>
        <option value={'bad'}>Bad</option>
        </select>
      </div>
      <div>
        <HeroesSection heroes={filtredHeroes} />
      </div>
    </main>
  )
}
