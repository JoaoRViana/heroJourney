export const getAllHeroes = async()=> {
 const api = await fetch("http://homologacao3.azapfy.com.br/api/ps/metahumans");
 const data = await api.json();
 return data
}

export const setHeroe = (heroeInfo:any)=>{
    const {powerstats,images,name,id} = heroeInfo;
    const {alignment,publisher} = heroeInfo.biography;
    const {race} = heroeInfo.appearance
    return {
        race,
        publisher,
        id,
        powerstats,
        images,
        alignment,
        name,
    }
}

export const setingAllHeroes = async ()=>{
  const all = await getAllHeroes();
  return all.map((e:any)=>(setHeroe(e)))
}

export const createRandomColorRaces = ()=>{
    const number1 = Math.floor(Math.random()*255)
    const number2 = Math.floor(Math.random()*255)
    const number3 = Math.floor(Math.random()*255)
    const color = `bg-[rgb(${number1},${number2},${number3})]`
    return color
}