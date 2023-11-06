import React, { useEffect, useState } from 'react';
import Paginado from '../Paginado/Paginado';
import SearchBar from '../SearchBar/SearchBar';
import { Pokedex } from '../Pokedex/Pokedex';
import GoForm from '../GoForm/GoForm';
import './Home.css'; // Importa un archivo CSS para los estilos específicos de esta página

export const Home = () => {
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
      <div className='GoForm'>
        <GoForm/>
      </div>
    </div>
    </>
  );
};
