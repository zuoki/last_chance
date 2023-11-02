/* 📍 GET | /types
-Obtiene un arreglo con todos los tipos de pokemones.
-En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los tipos que encuentres en la API.
-Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí. */


const axios = require("axios");
const { Type } = require("../db");

const API_URL = "https://pokeapi.co/api/v2/type";

const getTypes = async () => {
    const typeDB = await Type.findAll();

    return typeDB.length === 0
        ? (async () => {
            const response = await axios.get(API_URL);
            const apiTypeData = response.data.results;

            const typePromises = apiTypeData.map(async (type) => {
                return await Type.create({ name: type.name });
            });

            const types = await Promise.all(typePromises);
            return types;
        })()
        : typeDB;
};


module.exports = getTypes;
