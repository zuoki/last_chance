import React, { useState, useEffect } from 'react';
import axios from 'axios';
import validate from '../../Helpers/validate';
import { Link } from 'react-router-dom';
import profeOak from "../../assets/img/profeOak.png"
import backImg from "../../assets/img/backCard.png"
import './FormPage.css'

export const FormPage = () => {
  const [types, setTypes] = useState([]);
  const [err, setErr] = useState({
    name: '',
    img: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    types: [],
    ready: false,
  });

  const [form, setForm] = useState({
    name: '',
    img: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    types: []
  });

  useEffect(() => {
    fetch("http://localhost:3001/types")
      .then(response => response.json())
      .then(data => setTypes(data.map(({ name, id }) => ({ name, id }))));
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const crear = await axios.post("http://localhost:3001/pokemons/", form);
      if (crear.status === 200) {
        setMessage('Se creó el Pokémon correctamente');
      }
    } catch (error) {
      console.error('Error al enviar el formulario', error);
    }
  };

  const handleChange = (event) => {
    const selectedType = event.target.value;
    let updatedTypes;

    if (event.target.name === "types") {
      if (form.types.includes(selectedType)) {
        updatedTypes = form.types.filter(item => item !== selectedType);
      } else {
        updatedTypes = [...form.types, selectedType];
      }
      setForm({ ...form, types: updatedTypes });
      validate({ ...form, types: updatedTypes }, setErr, err);
    } else {
      const property = event.target.name;
      const value = event.target.value;
      setForm({ ...form, [property]: value });
      validate({ ...form, [property]: value }, setErr, err);
    }
  };



  return (
    <>
      <div className='contenedorF'>
        {/*                                   INPUTS TEXT                                              */}
        <form action="#" onSubmit={(event) => submitHandler(event, form)} className=' formC'>
          <div className='jejeje'>
            <div>
              <label htmlFor="name" className='info'>Name_:</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} className='inputText' />
            </div>
            <div>
              <label htmlFor="image" className='info'>Image:</label>
              <input type="text" name="img" value={form.img} onChange={handleChange} className='inputText' />
            </div>
            <div>
              <label htmlFor="life" className='info'>Life___:</label>
              <input type="text" name="hp" value={form.hp} onChange={handleChange} className='inputText' />
            </div>
            <div>
              <label htmlFor="attack" className='info'>Attac:</label>
              <input type="text" name="attack" value={form.attack} onChange={handleChange} className='inputText' />
            </div>
            <div>
              <label htmlFor="defense" className='info'>Defens:</label>
              <input type="text" name="defense" value={form.defense} onChange={handleChange} className='inputText' />
            </div>
            <div>
              <label htmlFor="speed" className='info'>Speed_:</label>
              <input type="text" name="speed" value={form.speed} onChange={handleChange} className='inputText' />
            </div>
            <div>
              <label htmlFor="height" className='info'>Height:</label>
              <input type="text" name="height" value={form.height} onChange={handleChange} className='inputText' />
            </div>
            <div>
              <label htmlFor="weight" className='info'>Weight:</label>
              <input type="text" name="weight" value={form.weight} onChange={handleChange} className='inputText' />
            </div>
            {/*                                                      MAP OF TYPES                                                      */}
            <div className='typeBox'>
              {types.map(({ name, id }) => (
                <label key={id} className={name}>
                  <input name="types" type="checkbox" value={name} onChange={handleChange} className={name} />
                  {name}
                </label>))}
            </div>
          </div>
          <br />
          {err.ready===true?
          
          <div className='botonCreate'>
            <p className="nowp" >Now, press the button to update the new Pokémon data in your Pokédex </p>
          <button type="submit" className='create'>Create Pokemon</button>
          </div>
:<></>}
          {/*                                           INFO   ERRORS                                             */}

        </form>
        <div className="errInfo">
          <span className="err"></span>
          <span className="err">{err.img}</span>
          <span className="err">{err.hp}</span>
          <span className="err">{err.attack}</span>
          <span className="err">{err.defense}</span>
          <span className="err">{err.types}</span>
        </div>
        <img src={profeOak} alt="profesor" className='imgProfe' />
        {/*                                          BUTTON CREATE                                                 */}

        <Link to="/Home">
          <img src={backImg} alt=""  className='backHome'/>
        </Link>
      </div>

    </>
  );
};
