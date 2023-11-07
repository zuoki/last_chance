import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import "./Paginado.css"

const Paginado = () => {
  // Definimos la cantidad de Pokémon a mostrar por página.
  const POKEMON_PER_PAGE = 12;

  // Obtenemos la lista de Pokémon desde el estado de Redux.
  const pokemons = useSelector((state) => state.pokemons);

  // Estado para mantener el número de la página actual.
  const [currentPage, setCurrentPage] = useState(0);

  // Calculamos el índice de inicio y final de los Pokémon a mostrar en la página actual.
  const startPokemons = currentPage * POKEMON_PER_PAGE;
  const endPokemons = (currentPage + 1) * POKEMON_PER_PAGE;

  // Calculamos el número total de páginas en función de la longitud de la lista de Pokémon.
  const totalpage = Math.ceil(pokemons.length / POKEMON_PER_PAGE);

  // Función para manejar el evento "Siguiente".
  const nextHandler = () => {
    if (currentPage < totalpage - 1) {
      // Incrementamos el número de página si no estamos en la última página.
      setCurrentPage(currentPage + 1);
    }
  };

  // Función para manejar el evento "Anterior".
  const prevHandler = () => {
    if (currentPage > 0) {
      // Decrementamos el número de página si no estamos en la primera página.
      setCurrentPage(currentPage - 1);
    }
  };

  // Efecto para ajustar la página actual si es necesario cuando cambia la lista de Pokémon.
  useEffect(() => {
    // Reajustamos la página actual si no hay suficientes Pokémon en la página actual.
    if (pokemons.length <= startPokemons) {
      setCurrentPage(0);
    }
  }, [pokemons, startPokemons]);

  return (
    <>
      <div className="card-container">
        {/* Mostramos los Pokémon de la página actual. */}
        {pokemons.slice(startPokemons, endPokemons).map((pokemon) => (
          <Card key={pokemon.id} data={pokemon} />
        ))}
      </div>
      <div className='buttons'>
        {/* Botón "Siguiente" para avanzar a la siguiente página. */}
        <button className='buttonP2' onClick={nextHandler}>Next</button>
        {/* Muestra el número de la página actual. */}
        <p className='pP'> Page: {currentPage + 1}</p>
        {/* Botón "Anterior" para retroceder a la página anterior. */}
        <button className='buttonP' onClick={prevHandler}>Previous</button>
      </div>
    </>
  );
}

export default Paginado;


