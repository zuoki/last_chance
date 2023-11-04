import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterPokemon, orderPokemons } from '../../Redux/Actions/actions';

export const Pokedex = () => {
  const dispatch = useDispatch();

  const orderHandler = (event) => {
     const order = event.target.value;
     dispatch(orderPokemons(order)); // Dispatch the action created by orderPokemons
  };

  const typeHandler=(event)=>{
       const type =event.target.value;
       console.log(type)
    dispatch(filterPokemon(type))
          
  };

  return (
    <>
      <div>Pokedex</div>
      <form>
        <div>
          <label htmlFor="type" >Type</label>
          <select name="first" id="1" onChange={(event) => typeHandler(event)} >
          <option value="normal">normal</option>
                    <option value="fighting">fighting</option>
                    <option value="flying">flying</option>
                    <option value="poison">poison</option>
                    <option value="ground">ground</option>
                    <option value="rock">rock</option>
                    <option value="bug">bug</option>
                    <option value="ghost">ghost</option>
                    <option value="steel">steel</option>
                    <option value="fire">fire</option>
                    <option value="water">water</option>
                    <option value="water">water</option>
                    <option value="grass">grass</option>
                    <option value="electric">electric</option>
                    <option value="psychic">psychic</option>
                    <option value="ice">ice</option>
                    <option value="dragon">dragon</option>
                    <option value="dark">dark</option>
                    <option value="fairy">fairy</option>
                    <option value="unknown">unknown</option>
                    <option value="shadow">shadow</option>
          </select>
        </div>
        <div>
          <label htmlFor="ordenamiento">Ordenamiento</label>
          <select name="ordenamiento" id="2" onChange={(event) => orderHandler(event)}>
            <option value="notOrder">Sin ordenar</option>
            <option value="maxMin">Mayor a Menor</option>
            <option value="minMax">Menor a Mayor</option>
          </select>
          <label htmlFor="Origin">Origin</label>
          <select name="Origin" id="3" onChange={(event) => orderHandler(event)}>
            <option value="notOrder">ALL</option>
            <option value="Api">API</option>
            <option value="Db">DB</option>
          </select>
          <span>{"holis"}</span>
        </div>
      </form>
    </>
  );
};
