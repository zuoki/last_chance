const axios = require("axios");
const { API_POKEMON } = require("../utils/urls");
const { Pokemon, Type } = require("../db");

const getPokemonId = async ({ id }) => {
  // Si id no es un número, lo busca en la base de datos
  if (isNaN(id)) {
    const pokemonsInDb = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    const pokemonEncontrado = pokemonsInDb.find((pokemon) => pokemon.id === id);
    return pokemonEncontrado;
  } else {
    // Si el id es un número, lo busco en la API
    const response = await axios.get(`${API_POKEMON}/${id}`);
    const { name, sprites, stats, height, weight, types } = await response.data;

    const pokemon = {
      id,
      name,
      img: sprites.front_default,
      hp: stats[0]?.base_stat,
      attack: stats[1]?.base_stat,
      defense: stats[2]?.base_stat,
      speed: stats[5]?.base_stat,
      height,
      weight,
      types: types.map(e => e['type'].name),
    };

    return pokemon;
  }
};

module.exports = {
  getPokemonId,
};

