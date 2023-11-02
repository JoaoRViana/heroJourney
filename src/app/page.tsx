'use client'
import HeroesSection from "@/components/HeroesSection";
import { setingAllHeroes } from "@/utils";
import { useEffect, useState, useCallback } from "react";
import { Select,MenuItem, InputLabel,FormControl } from "@mui/material";

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

  const handleFilterNameChange = useCallback((e:any) => {
    const updatedFilter = { ...filter, name: e.target.value };
    setFilter(updatedFilter);
  }, [filter]);

  const handleFilterAlignmentChange = useCallback((e:any) => {
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
      <div className="flex justify-around items-center h-20 w-full ">
        <input placeholder="find Heroe" className="h-10  text-center" onChange={handleFilterNameChange}></input>
        <FormControl variant="filled" sx={{m:1,width:120}} className={`${filter.alignment === 'good'? 'bg-green-200':''}
        ${filter.alignment === 'bad'? 'bg-red-200':''}`}>
          <InputLabel id="select-label" >Alignment</InputLabel>
            <Select
              labelId="select-label"  
              id ="select-label-filled"
              label="Heroes"
              value={filter.alignment}
              onChange={handleFilterAlignmentChange}>
              <MenuItem value={''}>All</MenuItem>
              <MenuItem value={'good'}>Good</MenuItem>
              <MenuItem value={'bad'}>Bad</MenuItem>
            </Select>
          </FormControl>
        
      </div>
      <div>
        <HeroesSection heroes={filtredHeroes} />
      </div>
    </main>
  )
}
