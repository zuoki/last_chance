import { Link } from "react-router-dom";

 
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
      <div className='card'>
        <div></div>
        <div>
          <p>Name: {name}</p>
          <p>Type: {typeNames}</p>
        </div>
        <img src={img} alt={name} />
        <button>
          <Link to={`/DetailPage/${id}`}>Details</Link>
        </button>
      </div>
    </>
  );
};

export default Card
