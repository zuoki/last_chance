import React, { useState } from 'react'
import preparaTypes from '../../Helpers/preparaTypes';
import axios from 'axios'
import validate from '../../Helpers/validate';
import './FromPage.css'

export const FromPage = () => {


    const [err, setErr] = useState({
        name: '',
        img: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        frist: '',
        second: '',
        types: ''
    });

    const [form, setForm] = useState(
        {
            name: '',
            img: '',
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            height: '',
            weight: '',
            frist: '',
            second: '',
        });


        const sumbitHandler = async (event, form) => {
            event.preventDefault();
          
            // Realiza la solicitud POST utilizando axios
            try {
              
          
              const crear = await axios.post("http://localhost:3001/pokemons/",form)
          
              if (crear.status === 200) {
                setMessage('Se creó el Pokémon correctamente');
              }
            } catch (error) {
              // Handle error
              console.error('Error al enviar el formulario', error);
            }
          };
          

    const handleChange = (event) => {     //CREA LA CONEXION ENTRE THE STATE Y  LOS VALUE 
        const property = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [property]: value });
        preparaTypes({ ...form, [property]: value }, setForm); // AUXILIAR UNE LOS TYPES EN EL ARRAY
        validate({ ...form, [property]: value }, setErr, err); //PROCESA LAS VALIDACIONES DEL AUXILIAR Y LOS SETEA EN ERROR

    };

    return (<>

        <div>FromPage</div>
        <form action="#" onSubmit={(event) => sumbitHandler(event, form)}>
            <div>
                <label htmlFor="name">name  </label> {/* ES IMPORTANTE QUE EXISTA LA CORRELACION ENTRE NAME Y PROPERTY*/}
                <input type="text" name='name' value={form.name} onChange={handleChange} /> {/* ONCHANGE FUNCION ESCUCHA */}
                <span>{err.name}</span>
            </div>

            <div>
                <label htmlFor="image">url image  </label>
                <input type="text" name='img' value={form.img} onChange={handleChange} />
                <span>{err.img}</span>
            </div>

            <div>
                <label htmlFor="life">life  </label>
                <input type="text" name='hp' value={form.hp} onChange={handleChange} />
                <span>{err.hp}</span>
            </div>

            <div>
                <label htmlFor="atack">atack  </label>
                <input type="text" name='attack' value={form.attack} onChange={handleChange} />
                <span>{err.attack}</span>
            </div>

            <div>
                <label htmlFor="defense">defense  </label>
                <input type="text" name='defense' value={form.defense} onChange={handleChange} />
                <span>{err.defense}</span>
            </div>

            <div>
                <label htmlFor="speed">speed  </label>
                <input type="text" name='speed' value={form.speedp} onChange={handleChange} />
                <span>{err.speed}</span>
            </div>

            <div>
                <label htmlFor="height">height  </label>
                <input type="text" name='height' value={form.height} onChange={handleChange} />
                <span>{err.height}</span>
            </div>

            <div>
                <label htmlFor="weight">weight  </label>
                <input type="text" name='weight' value={form.weight} onChange={handleChange} />
                <span>{err.weight}</span>
            </div>

            <div>
                <label for="type1" name='type1' >type  </label>
                <select name="frist" id="1" value={form.frist} onChange={handleChange} >
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
                <span>{err.types}</span>
            </div>

            <div>
                <label for="lang">type 2 </label>
                <select name="second" id="2" value={form.second} onChange={handleChange} >
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

            <button type="submit">Create Pokemon</button>
        </form>
    </>
    )
}
