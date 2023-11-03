import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';

export default function Paginado() {
  const [Pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/pokemons`);
        setPokemons(response.data);
        console.log('entro a buscar')
      } catch (error) {
        console.error('Error fetching data:', error);
        // Si ocurre un error, intentamos de nuevo después de un breve retraso
        setTimeout(fetchData, 1000); // Espera 1 segundo y vuelve a intentar
      }
    };

    fetchData(); // Llama a la función fetchData para cargar datos iniciales
  }, []);

  return (
    <div>
      <div>Paginado</div>
      <div className="card-container">
        {Pokemons.map((pokemon) => (
          <Card key={pokemon.id} data={pokemon} />
        ))}
      </div>
    </div>
  );
}

