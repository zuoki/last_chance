const axios = require("axios");
const { API_POKEMON } = require("../utils/urls")
const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");
/*realiza una solicitud a la API de Pokémon usando Axios, obtiene los resultados de los 
pokémones y los envía como una respuesta JSON al cliente. Si ocurre algún error en el proceso, 
se maneja adecuadamente y se devuelve un estado de error al cliente.*/

const getPokemon = async (nameUppercase) => { //fn asincrona, va a buscar a todos los pokeons y a los poquemons cuando lo soliciten poor name
  function formatPokemonArray(db) {
    const formattedArray = db.map((pokemon) => {

      const formattedTypes = pokemon.types.map((type) => type.name);

      return {
        speed: pokemon.speed,
        height: pokemon.height,
        weight: pokemon.weight,
        id: pokemon.id,
        name: pokemon.name,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        img: pokemon.img,
        types: formattedTypes,
      };
    });

    return formattedArray;
  }
  const name = nameUppercase ? nameUppercase.toLowerCase() : '';
  if (!name) {
    const response = await axios.get(API_POKEMON, { timeout: 15000 });
    const pokemons = response.data.results;

    const apiPoke = await Promise.all(
      pokemons.map(async (pokemon) => {
        const pokemonResponse = await axios.get(`${API_POKEMON}/${pokemon.name}`, { timeout: 15000 });
        const pokemonData = pokemonResponse.data;

        const poke = {
          id: pokemonData.id,
          name: pokemonData.name,
          img: pokemonData.sprites.front_default,
          img2: pokemonData.sprites.other.dream_world.front_default,
          hp: pokemonData.stats[0].base_stat,
          attack: pokemonData.stats[1].base_stat,
          defense: pokemonData.stats[2].base_stat,
          speed: pokemonData.stats[5].base_stat,
          height: pokemonData.height,
          weight: pokemonData.weight,
          types: pokemonData.types.map((type) => type['type'].name),
        };

        return poke;
      }));

    const dbPoke = await Pokemon.findAll({
      include: [
        {
          model: Type,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    const dbFinal = formatPokemonArray(dbPoke)

    // Combinar los resultados de la API y la base de datos
    const total = [...apiPoke, ...dbFinal];

    return total;
  }



  //ACA EMPIEZA A BUSCAR EN LA BD
  const dbPokemons = await Pokemon.findOne({
    where: { name: { [Op.iLike]: `%${name}%` } }, include: [{
      model: Type, attributes: ["name"], through: {
        attributes: [],
      },
    }]
  });



  if (!dbPokemons) {
    const response = await axios.get(API_POKEMON + "/" + name);
    const pokemons = response.data;
    if (!pokemons) {
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