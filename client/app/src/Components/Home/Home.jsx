import React, { useEffect, useState } from 'react'
import Paginado from '../Paginado/Paginado'
import SearchBar from '../SearchBar/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemons } from '../../Redux/Actions/actions'
import { Pokedex } from '../Pokedex/Pokedex'

export const Home = () => {
  const pokemons = useSelector((state) => state.Pokemons);
  return (
    <>
      <div>Home</div>
      <SearchBar />
      <Pokedex/>
      <Paginado />
    </>
  );
};
