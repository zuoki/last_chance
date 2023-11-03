import axios from 'axios';
import React, { useState } from 'react';

export const SearchBar = () => {
  const [name, setName] = useState('');
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [error, setError] = useState(null);

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
      setError(null); // Borra cualquier error anterior
    } catch (error) {
      setPokemonInfo(null); // Borra la información del Pokémon
      setError("No se encontró un Pokémon con ese nombre");
    }
  };

  return (
    <div>
      <form onSubmit={searchHandler}>
        <input
          type="text"
          name='SearchName'
          placeholder='Buscar nombre de Pokémon'
          value={name}
          onChange={inputHandler}
        />
        <button type="submit">🔍</button>
      </form>
      {error && <span>{error}</span>}
      {pokemonInfo && (
        <div>
          <h2>pokemon encontrado</h2>
          
        </div>
      )}
    </div>
  );
};

export default SearchBar;

