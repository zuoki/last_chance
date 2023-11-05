import {
    FILTER_POKEMON,
    GET_ALL_POKEMONS,
    ORDER_NAME,
    ORDER_POKEMONS,
    ORIGIN_POKEMON,
    SEARCH_POKEMON
} from "../Actions/actions";

const initialState = {
    pokemons: "cargando",
    allPokemons: [],
 
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            };

        case ORDER_POKEMONS:
            if (action.payload === "maxMin") {
                return {
                    ...state,
                    pokemons: state.pokemons.slice().sort((a, b) => b.attack - a.attack),
                };
            } else if (action.payload === "minMax") {
                return {
                    ...state,
                    pokemons: state.pokemons.slice().sort((a, b) => a.attack - b.attack),
                };
            }
            
            return state; // Agrega un retorno por defecto si action.payload no coincide con "maxMin" ni "minMax".

        

            case ORDER_NAME:
                let sortedArr = [...state.pokemons]; // Hacemos una copia del array para no mutar el estado original
              
                sortedArr.sort(function(a, b) {
                  const nameA = a.name.toLowerCase();
                  const nameB = b.name.toLowerCase();
              
                  if (action.payload === 'ascName') {
                    if (nameA > nameB) {
                      return 1;
                    } else if (nameA < nameB) {
                      return -1;
                    }
                  } else if (action.payload === 'descName') {
                    if (nameA > nameB) {
                      return -1;
                    } else if (nameA < nameB) {
                      return 1;
                    }
                  }
                  return 0;
                });
              
                return {
                  ...state,
                  pokemons: sortedArr,
                };


        case FILTER_POKEMON:

            const filterPokemonByType = (pokemon, typeToMatch) =>
                pokemon.types.some(
                    (type) => type.toLowerCase() === typeToMatch.toLowerCase()
                );

            return {
                ...state,
                pokemons: state.allPokemons.filter((pokemon) =>
                    filterPokemonByType(pokemon, action.payload)
                )
            };



        case ORIGIN_POKEMON:
            if (action.payload === "DB") {
                return {
                    ...state,
                    pokemons: state.allPokemons.filter((pokemon) => pokemon.id.length > 8)
                };
            } else {
                return {
                    ...state,
                    pokemons: state.allPokemons.filter((pokemon) => !isNaN(pokemon.id)),
                };
            }
            return state; // Agrega un retorno por defecto si action.payload no coincide con "DB".
             

            case SEARCH_POKEMON:
                const newData = action.payload;
                
                // Verificamos si el nuevo Pokémon ya existe en el array
                const existingPokemonIndex = state.pokemons.findIndex(pokemon => pokemon.name === newData.name);
                
                if (existingPokemonIndex !== -1) {
                  // Si ya existe, lo eliminamos del array
                  const updatedPokemons = [...state.pokemons];
                  updatedPokemons.splice(existingPokemonIndex, 1);
                  
                  // Luego lo agregamos al principio del array
                  updatedPokemons.unshift(newData);
              
                  return {
                    ...state,
                    pokemons: updatedPokemons,
                    allPokemons: updatedPokemons,
                  };
                } else {
                  // Si no existe, lo agregamos al principio del array
                  const newAll = [newData, ...state.pokemons];
              
                  return {
                    ...state,
                    pokemons: newAll,
                    allPokemons: newAll,
                  };
                }
              
              

        default:
            return state;
    }
};

export default reducer;

