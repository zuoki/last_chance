import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import "./Paginado.css"

const Paginado = () => {

  const POKEMON_PER_PAGE = 12;

  const pokemons = useSelector((state) => state.pokemons);
  const [totalPokemons, setTotalPokemons] = useState(pokemons.length);
  const totalpage = Math.ceil(totalPokemons / POKEMON_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);

  const startPokemons = currentPage * POKEMON_PER_PAGE;
  const endPokemons = startPokemons + POKEMON_PER_PAGE;
  const pokemonsToDisplay = pokemons?.slice(startPokemons, endPokemons);

  const nextHandler = () => {
    if (currentPage < totalpage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevHandler = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="card-container">
        {pokemonsToDisplay.map((pokemon) => (
          <Card key={pokemon.id} data={pokemon} />
        ))}
      </div>
      <div>
        <button onClick={prevHandler}>Previous</button>
        <button onClick={nextHandler}>Next</button>
      </div>
    </>
  );
}

export default Paginado;


