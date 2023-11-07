import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import { fetchPokemons } from '../../Redux/Actions/actions'
import { useDispatch, useSelector } from 'react-redux'; // Importa useDispatch aquí
import pokeCenter from "../../assets/img/welcome-Poke-Center.png"
import pokeBall from "../../assets/img/Pokeball.png"
import byJonathanG from "../../assets/img/byJonathanG.png"
import "./LandingPage.css"

export const LandingPage = () => {
  const dispatch = useDispatch(); // Asigna useDispatch para poder usarlo
  const cargando = useSelector((state) => state.cargando);
  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <>
    <div className='landing'>
      <img src={pokeCenter} alt="pokecenter" className='welcome' />
      <img src={pokeBall} alt="pokecenter"  className='pokeball'/>
      <h1 className='cargando'>{cargando===true?"Loading ⌛⌛⌛":"Gotta catch 'em all"}</h1>
      {cargando==true?<p className='goHome'></p>:<Link to="/Home"> <p className='goHome2'>LET'S GO</p> </Link>}
      <img src={byJonathanG} alt="developer" className='jona' />
    </div>
    </>
  );
}

