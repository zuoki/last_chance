import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPokemonData();
  }, [id]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const { name, img, types, attack, hp, defense, speed, height, weight } =  pokemonData;
  
  
const tipos = types.map((type) => type.name).join(", ");


  return (
    <>
      <div className='card'>
        <div>
          {/* Aquí puedes poner contenido si es necesario */}
        </div>
        <div>
          <p>Name: {name}</p>
          <p>hp: {hp}</p>
          <p>attack: {attack}</p>
          <p>defense: {defense}</p>
          <p>speed: {speed}</p>
          <p>height: {height}</p>
          <p>weight: {weight}</p>
          <p>Type: {tipos}</p>
        </div>
        <img src={img} alt={name} />
      </div>
    </>
  );
};

export default DetailPage;

