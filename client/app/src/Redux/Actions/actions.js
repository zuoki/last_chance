// actions.js
import axios from 'axios';


export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const ORDER_POKEMONS = "MAX_MIN_POKEMONS";
export const FILTER_POKEMON= "FILTER_POKEMON"

export const fetchPokemons = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/pokemons');
      const pokemons = response.data;
      dispatch({ type: GET_ALL_POKEMONS, payload: pokemons });
    } catch (error) {
      console.log("Error al obtener datos");
    }
  };
};

export const orderPokemons = (data) => {
  return { type: ORDER_POKEMONS, payload: data };
};

export const filterPokemon = (data) => {
  return { type: FILTER_POKEMON, payload: data };
};



