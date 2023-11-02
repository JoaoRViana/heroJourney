export const getAllHeroes = async()=> {
 const api = await fetch("http://homologacao3.azapfy.com.br/api/ps/metahumans");
 const data = await api.json();
 return data
}