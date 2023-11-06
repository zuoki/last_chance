import React from 'react'
import { Link } from 'react-router-dom';
import miOak from "../../assets/img/mioak.png"
import pokeCenter from "../../assets/img/centroPoke.png"
import "./GoForm.css"


 const GoForm = () => {
  return (
    <>
    <div className='contenedorG'>
        <img className="mioak" src={miOak} alt="profesor" />
        <img className="pokecenter" src={pokeCenter} alt="profesor" />
  <Link  to="/FormPage">
     <button>
        GO REGISTER!
     </button>
  </Link>

    </div>
    </>
  )
};

export default GoForm;
