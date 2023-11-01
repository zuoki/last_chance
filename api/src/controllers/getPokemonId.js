const axios = require("axios");
const { API_POKEMON } = require("../utils/urls");
const { Pokemon, Type } = require("../db");

const getPokemonId = async ({ id }) => {

    //si id no es un numero lo busca en la base de datos
    if (isNaN(id)) {
        const pokemonDetail = await Pokemon.findOne({
            where: { id },
            include: [{ model: Type, attributes: ["name"] }],
        });

        if (!pokemonDetail) {
            return ({ error: "Pokemon no encontrado" });
        } else {
            return (pokemonDetail);

        }
    } else {
        //si el id es un numero lo busco en la API
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
        return (pokemon);
    }
}



module.exports = {
    getPokemonId,
};
