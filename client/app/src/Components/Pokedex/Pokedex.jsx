import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterPokemon, orderName, orderPokemons, originPokemon } from '../../Redux/Actions/actions';
import { Link } from 'react-router-dom';


export const Pokedex = () => {
  const dispatch = useDispatch();
  const [selects, setSelect] = useState({
    type: "",
    ordenamiento: "",
    Origin: "",
  })

  const orderHandler = (event) => {
    const order = event.target.value;
    dispatch(orderPokemons(order)); // Dispatch the action created by orderPokemons
  };

  const typeHandler = (event) => {
    const type = event.target.value;
    console.log(type)
    dispatch(filterPokemon(type))

  };




  const originHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setSelect({ ...selects, [property]: value });

    const origin = event.target.value;

    dispatch(originPokemon(origin));

  };

  const alphabeticalHandler = (event) => {
    const value = event.target.value;
    console.log(value)
    dispatch(orderName(value))
  };

  return (
    <>
      <div className='Pokedex'>Pokedex</div>
      <form>
        <div>
          <label htmlFor="type" >Type</label>
          <select name="type" id="1" onChange={(event) => typeHandler(event)} >
            <option value="normal">OFF</option>
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
        <label htmlFor="Origin">Origin</label>
          <select name="Origin" id="3" onChange={(event) => originHandler(event)}>
            <option value="">OFF</option>
            <option value="API">For the pokedex</option>
            <option value="DB">Created</option>
          </select>


        </div>



        <div>
          <label htmlFor="ordenamiento">Attack</label>
          <select name="ordenamiento" id="2" onChange={(event) => orderHandler(event)}>
            <option value="notOrder">OFF</option>
            <option value="maxMin">{"100 > 0"}</option>
            <option value="minMax">{"0 < 100"}</option>
          </select>
        </div>

        <div>
        <label htmlFor="lphabetical">lphabetical</label>
          <select name="lphabetical" id="4" onChange={(event) => alphabeticalHandler(event)}>
            <option value="">OFF</option>
            <option value="ascName">A-Z</option>
            <option value="descName">Z-A</option>
          </select>
        </div>
      </form>
       
      <Link to="/FormPage"><button>create</button></Link>
    </>
  );
};
