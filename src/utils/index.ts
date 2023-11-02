export const getAllHeroes = async()=> {
 const api = await fetch("http://homologacao3.azapfy.com.br/api/ps/metahumans");
 const data = await api.json();
 return data
}

export const setHeroe = (heroeInfo:any)=>{
    const {powerstats,images,name} = heroeInfo;
    const {alignment} = heroeInfo.biography;
    return {
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