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
                return{
                    ...state,
                    pokemons: [action.payload,...state.pokemons]
                }
              

        default:
            return state;
    }
};

export default reducer;

