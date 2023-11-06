import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchPokemon } from '../../Redux/Actions/actions';
import "./SearchBar.css"

export const SearchBar = () => {
  const [name, setName] = useState('');
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [error, setError] = useState(null);

  const dispatch=useDispatch()

  const inputHandler = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const searchHandler = async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    

    try {
      const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
      const data = response.data;
      setPokemonInfo(data); // Actualiza el estado con la información del Pokémon
      
      dispatch(searchPokemon(name))
      

    } catch (error) {
      setPokemonInfo(null); // Borra la información del Pokémon
      setError("No se encontró un Pokémon con ese nombre");
    }
  };

  return (
    <>
    <div className='SearchBar'>

      <form onSubmit={searchHandler}>
        <input
        className='inputS'
          type="text"
          name='SearchName'
          placeholder='Find Pokémon name'
          value={name}
          onChange={inputHandler}
          />
        <button type="submit" className='pokeSearch'>  </button>
      </form>
      {error && <span>{error}</span>}
      {pokemonInfo && (
        <div>
          <h2>pokemon encontrado</h2>
          
        </div>
      )}
      </div>
  </>
  );
};

export default SearchBar;

