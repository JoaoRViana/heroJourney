'use client'

import CardHeroe from "@/components/CardHeroe";
import HeroesSection from "@/components/HeroesSection";
import { setingAllHeroes } from "@/utils";
import { useEffect, useState } from "react"

export default function Home() {
  const [allHeroes,setAllHeroes] = useState([]);
  const [filtredHeroes,setFiltredHeroes] = useState([])
  const [filter,setFilters] = useState([])
  const [loading, setLoading] = useState(true);


  const gettingAllHeroes =  async ()=>{
    const all = await setingAllHeroes()
    setAllHeroes(all)
  }
  const getFiltredHeroes = ()=>{
    console.log(allHeroes)
    if(filter.length <1){
      setFiltredHeroes(allHeroes)
    }
  }
  useEffect(() => {
    async function fetchData() {
      await gettingAllHeroes();
      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(()=>{
    if(!loading){
      getFiltredHeroes();
    }
  },[loading,filtredHeroes])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <HeroesSection heroes={filtredHeroes}/>
      </div>
    </main>
  )
}
