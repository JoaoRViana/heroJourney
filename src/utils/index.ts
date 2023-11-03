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

export const filterHeroes = (heroArray: CardT[], typeFilter: keyof CardT, valueFilter: string | number) : CardT[] => {
    if (typeFilter === 'gender' && typeof valueFilter === 'string' && valueFilter !== '') {
        return heroArray.filter((e) => e.gender === valueFilter);
    }
    const newHeroes = heroArray.filter((e) => {
        const propValue = e[typeFilter];
        if (typeof propValue === 'string') {
            return (propValue.toLowerCase()).includes((valueFilter.toString()).toLowerCase());
        }
        return propValue === valueFilter;
    });
    return newHeroes;
};
