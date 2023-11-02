/* 📍 POST | /pokemons
Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
Toda la información debe ser recibida por body.
Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos indicados (debe poder relacionarse al menos con dos). */

const { Pokemon, Type } = require("../db");


const createPokemon = async (data) => {
  const { name, img, hp, attack, defense, speed, height, weight, types } = data;


  // Crear el Pokémon
  const newPokemon = await Pokemon.create({
    name: name,
    img: img,
    hp: hp,
    attack: attack,
    defense: defense,
    speed: speed,
    height: height,
    weight: weight,
  });
  // Procesar cada tipo 
    for (const type of types) {
      let pokemonType = await Type.findOne({
        where: {
          name: type,
        },
      })
    
    // Relacionar el tipo con el Pokémon en la tabla intermedia
    await newPokemon.addType(pokemonType);
  }

  
  // Buscar el Pokémon en la base de datos y devolverlo
  const pokemonAndType = await Pokemon.findOne({
    where: { name },
    //incluyo el dato del tipo de pokemon
    include: [{ model: Type, attributes: ["name"], through: { attributes: [] } }],
  });

  return pokemonAndType;
};


module.exports = { createPokemon };



