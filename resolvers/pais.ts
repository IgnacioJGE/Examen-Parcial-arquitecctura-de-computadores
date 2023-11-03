
export type pais={
    name: name;
    capital:string[];
}
export type name={
    common:string;

}
export const getPais = async (ISO: string): Promise<string> => {

    const URL = "https://restcountries.com/v3.1/alpha/";
    const URL_final= `${URL}${ISO}`
    const data = await fetch(URL_final);
  console.log("Estoy entrando en esta fncion")
    if (data.status !== 200) {
      throw new Error

    }
    const jsondata = await data.json();
  
    const tochodeapi:pais[] = jsondata.results;
    return tochodeapi[0].name.common;
}