import { Link } from "react-router-dom";
import cardImg from "../../assets/img/Card.png"
import "./Card.css"

 
 const  Card = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  const { id, name, img, types, attack } = data;

  let typeNames;

  if (Array.isArray(data.types)) {
    // Si es un array de objetos, extraer sus 'name' y convertirlo en un string
    typeNames = data.types.map((type) => (typeof type === 'string' ? type : type.name)).join(', ');
  } else {
    // Si ya es un array de strings, simplemente unirlos con comas
    typeNames = data.types.join(', ');
  }

  return (
    <>
      <Link to={`/DetailPage/${id}`} className='card-link'>
        <article className='card'>
          <img src={cardImg} alt="card-background" />
            <img src={img} alt={name} className="img1" />
         
        </article>
      <p>({name} : {typeNames})</p>
      </Link>
    </>
  );
};

export default Card
