import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import { fetchPokemons } from '../../Redux/Actions/actions'
import { useDispatch, useSelector } from 'react-redux'; // Importa useDispatch aquí

export const LandingPage = () => {
  const dispatch = useDispatch(); // Asigna useDispatch para poder usarlo
  const pokemons = useSelector((state) => state.pokemons);
  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <>
      <h1>LandingPage</h1>
      <p>Welcome to Poke Center</p>
      {pokemons=="cargando"?<p>aun no puedes acceder</p>:<Link to="/Home"><button>Home</button></Link>}
      <p>{pokemons==="cargando"?"cargarndo ⌛⌛⌛":"A CAPTURARLOS!!!"}</p>
    </>
  );
}

