const axios = require('axios');


const apiInfo= async()=>{
const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=24");
            const apiInfo = await apiUrl.data.results;
            
            const pokemons = Promise.all(apiInfo.map(async (e) => {
                const data = (await axios.get(e.url)).data;
                return {
                    id: data.id,
                    name: data.name,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    speed: data.stats[5].base_stat,
                    height: data.height,
                    weight: data.weight,
                    types: data.types.map(e => e['type'].name),
                    image: data.sprites.other['official-artwork'].front_default
                }
            }))
    
            return pokemons;}
            module.exports= {apiInfo}