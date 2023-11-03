import { CardT } from "@/types";

export const getAllHeroes = async()=> {
 const api = await fetch("http://homologacao3.azapfy.com.br/api/ps/metahumans");
 const data = await api.json();
 return data
}

export const setHero = (heroeInfo:any)=>{
    const {powerstats,images,name,id} = heroeInfo;
    const {alignment} = heroeInfo.biography;
    const {race,gender} = heroeInfo.appearance
    return {
        race,
        gender,
        id,
        powerstats,
        images,
        alignment,
        name,
    }
}

export const setingAllHeroes = async ()=>{
  const all = await getAllHeroes();
  return all.map((e:any)=>(setHero(e)))
}

export const filterHeroes = (heroArray:CardT[] , typeFilter:string , valueFilter:string) =>{
    console.log(heroArray)
    if(typeFilter === 'gender' && valueFilter !== ''){
        const newHeroes = heroArray.filter((e)=>(e.gender === valueFilter))
        return newHeroes
    }
    const newHeroes = heroArray.filter((e)=>(e[typeFilter].includes(valueFilter)))
    return newHeroes;
}

export const createRandomColorRaces = ()=>{
    const number1 = Math.floor(Math.random()*255)
    const number2 = Math.floor(Math.random()*255)
    const number3 = Math.floor(Math.random()*255)
    const color = `bg-[rgb(${number1},${number2},${number3})]`
    return color
}