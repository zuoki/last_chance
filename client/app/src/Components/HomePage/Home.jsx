import React, { useEffect, useState } from 'react';
import Paginado from '../Paginado/Paginado';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../../Redux/Actions/actions';
import { Pokedex } from '../Pokedex/Pokedex';
import './Home.css'; // Importa un archivo CSS para los estilos específicos de esta página

export const Home = () => {
  const pokemons = useSelector((state) => state.Pokemons);

  return (
    <>
    <div className="home-container">
      <div className="home-SearchBar">
        <SearchBar />
      </div>
      <div className="home-Pokedex">
        <Pokedex />
      </div>
      <div className="home-Paginado">
        <Paginado />
      </div>
    </div>
    </>
  );
};
