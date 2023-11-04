import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

const Paginado = () => {
  const pokemons = useSelector((state) => state.pokemons); // Declarar pokemons como una variable

  return (
    <div>
      <div>Paginado</div>
      <div className="card-container">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} data={pokemon} />
        ))}

      </div>
    </div>
  );
}

export default Paginado;

