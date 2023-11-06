//tabla de la base de datos


const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    attack: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    defense: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    speed: {
      type: DataTypes.STRING,
      allowNull: true,
      get(){
        const raw = this.getDataValue("speed");
        return raw? `${raw}`:"sin datos";
      }
    },
    height: {
      type: DataTypes.STRING,
      allowNull: true,
      get(){
        const raw = this.getDataValue("height");
        return raw? `${raw}`:"sin datos";
      }
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: true,
      get(){
        const raw = this.getDataValue("weight");
        return raw? `${raw}`:"sin datos";
      }
      
    },
    createdInDB:{
      type:DataTypes.BOOLEAN,
      get(){
        const raw = this.getDataValue("createdInDB");
        return raw? `${raw}`:true;
      }
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    timestamps: false, // Deshabilitar marcas de tiempo
  });
};



