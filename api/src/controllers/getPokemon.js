const axios = require("axios");
const { API_POKEMON } = require("../utils/urls")
const { Pokemon, Type } = require("../db");
const { Op } = require ("sequelize");
/*realiza una solicitud a la API de Pokémon usando Axios, obtiene los resultados de los 
pokémones y los envía como una respuesta JSON al cliente. Si ocurre algún error en el proceso, 
se maneja adecuadamente y se devuelve un estado de error al cliente.*/

const getPokemon = async (nameUppercase) => { //fn asincrona, va a buscar a todos los pokeons y a los poquemons cuando lo soliciten poor name
    let name = "";
    
    if (nameUppercase){ name = nameUppercase.toLowerCase();}

        if (!nameUppercase) { //verifica si no existe name trae a todos los pokemons
            const response = await axios.get(API_POKEMON); //solicitud a la API
            const pokemons = response.data.results; //en pokemons se almacena la respuesta con todos los poke
            const apiPoke = await Promise.all(pokemons.map(async (pokemon) => { //mapeo para iterar
                const response = await axios.get(`${API_POKEMON}/${pokemon.name}`); //realizo una peticion a la API buscando el nombre del pokemon
                const pokemons = response.data;//la respuesta se almacena en pokemons
                const poke = {
                    id: pokemons.id,
                    name: pokemons.name,
                    img: pokemons.sprites.front_default, //toma la imagen por defecto del pokemon
                    hp: pokemons.stats[0].base_stat,
                    attack: pokemons.stats[1].base_stat,
                    defense: pokemons.stats[2].base_stat,
                    speed: pokemons.stats[5].base_stat,
                    height: pokemons.height,
                    weight: pokemons.weight,
                    types: pokemons.types.map(e => e['type'].name),
            
                }
                return (poke)}) //espera a que termine el mapeo
            )
            const total = await Promise.all([apiPoke, Pokemon.findAll({ include: [{ model: Type, attributes: ["name"] }] }) ])
            return (total) // me trae todos los pokemons de la BD

        }

       //ACA EMPIEZA A BUSCAR EN LA BD
       const dbPokemons = await Pokemon.findOne({
        where: { name: { [Op.iLike]: `%${name}%` } }, include: [{ model: Type, attributes: ["name"] }] // no discrimina entre mayus y minus
    });


    if (!dbPokemons) {
        const response = await axios.get(API_POKEMON + "/" + name);
        const pokemons = response.data;
        if(!pokemons) {
            throw new Error("No hay pokemon con ese nombre")
        }
        const namePoke = {
            id: pokemons.id,
            name: pokemons.name,
            img: pokemons.sprites.front_default, //toma la imagen por defecto del pokemon
            hp: pokemons.stats[0].base_stat,
            attack: pokemons.stats[1].base_stat,
            defense: pokemons.stats[2].base_stat,
            speed: pokemons.stats[5].base_stat,
            height: pokemons.height,
            weight: pokemons.weight,
            types: pokemons.types,
            types: pokemons.types.map(e => e['type'].name),
            
        }
        return (namePoke);
    }
    return (dbPokemons)

    

}



module.exports = {
    getPokemon
}