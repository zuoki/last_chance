import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchPokemon } from '../../Redux/Actions/actions';
import "./SearchBar.css"

export const SearchBar = () => {
  const [name, setName] = useState('');
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [error, setError] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const dispatch = useDispatch();

  const inputHandler = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const searchHandler = async (event) => {
    event.preventDefault();

    if (name.trim() === '') {
      setError("The search field is empty");
      setShowErrorMessage(true);

      // Reinicia el mensaje de error después de 3 segundos
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);

      return;
    }

    try {
      const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
      const data = response.data;
      setPokemonInfo(data);
      dispatch(searchPokemon(name));

      // Muestra el mensaje de éxito
      setShowSuccessMessage(true);

      // Reinicia el mensaje de éxito después de 3 segundos
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);

    } catch (error) {
      setPokemonInfo(null);
      setError("No Pokémon was found with that name");
      setShowErrorMessage(true);

      // Reinicia el mensaje de error después de 3 segundos
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    }
  };

  return (
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
        <button type="submit" className='pokeSearch'></button>
      </form>
      {showErrorMessage && <h2 className='mensaje'>{error}</h2>}
      {showSuccessMessage && (
        <div>
          <h2  className='mensaje2'mensaje>Pokémon found</h2>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
