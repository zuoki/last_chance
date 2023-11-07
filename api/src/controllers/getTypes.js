const axios = require("axios");
const { Type } = require("../db");

const getTypes = async () => {
    try {
      // LLENADO DE LOS TYPES
      const apiUrlTypes = "https://pokeapi.co/api/v2/type";
      const response = await axios.get(apiUrlTypes);
      const apiTypes = response.data.results.map((el) => ({ name: el.name }));
  
      // Verificar tipos existentes en la base de datos
      const existingTypes = await Type.findAll({ where: { name: apiTypes.map(type => type.name) } });
      const existingTypeNames = existingTypes.map(existingType => existingType.name);
  
      // Filtrar tipos que no existen en la base de datos
      const typesToInsert = apiTypes.filter(type => !existingTypeNames.includes(type.name));
  
      // Insertar tipos que no existen en la base de datos
      await Type.bulkCreate(typesToInsert, { ignoreDuplicates: true });
  
      const allTypes = await Type.findAll();
      return allTypes;
    } catch (error) {
      throw error;
    }
  };
  

module.exports = getTypes;
