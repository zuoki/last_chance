import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./Detail.css"

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
  
  
  let typeNames;

  if (Array.isArray(types)) {
    // Si es un array de objetos, extraer sus 'name' y convertirlo en un string
    typeNames = types.map((type) => (typeof type === 'string' ? type : type.name)).join(' / ');
  } else {
    // Si ya es un array de strings, simplemente unirlos con comas
    typeNames = types.join(' / ');
  }

  const principal=types[0];
  console.log(principal)

  return (
    <>
      <div className='Detail'>
          <div className='Details'></div>
        <div>
        </div>
        <div className='infoContainerDetail'>
          <h2>Name: {name}</h2>
          <h2>hp: {hp}</h2>
          <h2>attack: {attack}</h2>
          <h2>defense: {defense}</h2>
          <h2>speed: {speed}</h2>
          <h2>height: {height}</h2>
          <h2>weight: {weight}</h2>
          <h2>Type: {typeNames}</h2>
        </div>
        <div className={`D${principal}`}>
        </div>
        <img src={img} alt={name}  className='imgDetail'/>
      </div>
    </>
  );
};

export default DetailPage;

