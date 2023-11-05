import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import { fetchPokemons } from '../../Redux/Actions/actions'
import { useDispatch, useSelector } from 'react-redux'; // Importa useDispatch aquí
import pokeCenter from "../../assets/img/welcome-Poke-Center.png"
import pokeBall from "../../assets/img/Pokeball.png"
import "./LandingPage.css"

export const LandingPage = () => {
  const dispatch = useDispatch(); // Asigna useDispatch para poder usarlo
  const pokemons = useSelector((state) => state.pokemons);
  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <>
    <div className='landing'>
      <img src={pokeCenter} alt="pokecenter" className='welcome' />
      <img src={pokeBall} alt="pokecenter"  className='pokeball'/>
      {pokemons=="cargando"?<p>aun no puedes acceder</p>:<Link to="/Home"><button>Home</button></Link>}
      <p>{pokemons==="cargando"?"cargarndo ⌛⌛⌛":"A CAPTURARLOS!!!"}</p>
    </div>
    </>
  );
}

