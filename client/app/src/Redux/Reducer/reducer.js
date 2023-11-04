import { FILTER_POKEMON, GET_ALL_POKEMONS, ORDER_POKEMONS } from "../Actions/actions";

const initialState = {
    pokemons: "cargando",
    allPokemons: [],
    isFiltered: false,
    filterApply: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
            }
        case ORDER_POKEMONS:
            if (action.payload === "maxMin") {
                return {
                    ...state,
                    pokemons: state.pokemons.slice().sort((a, b) => b.attack - a.attack),
                    isFiltered: true,
                    filterApply: "maxMin"
                }
            } else if (action.payload === "minMax") {
                return {
                    ...state,
                    pokemons: state.pokemons.slice().sort((b, a) => b.attack - a.attack),
                    isFiltered: true,
                    filterApply: "minMax"
                }
            } else {
                return {
                    ...state,
                    pokemons: state.allPokemons,
                    isFiltered: false,
                    filterApply: ""
                }
            }
        case FILTER_POKEMON:
            function filterPokemonByType(pokemon, typeToMatch) {
                return pokemon.types.some((type) => type.toLowerCase() === typeToMatch.toLowerCase());
            }

            let filteredPokemons;
            if (state.filterApply === "maxMin") {
                filteredPokemons = state.allPokemons
                    .filter((pokemon) => filterPokemonByType(pokemon, action.payload))
                    .slice()
                    .sort((a, b) => b.attack - a.attack);
            } else if (state.filterApply === "minMax") {
                filteredPokemons = state.allPokemons
                    .filter((pokemon) => filterPokemonByType(pokemon, action.payload))
                    .slice()
                    .sort((b, a) => b.attack - a.attack);
            } else {
                filteredPokemons = state.allPokemons.filter((pokemon) => filterPokemonByType(pokemon, action.payload));
            }

            return {
                ...state,
                pokemons: filteredPokemons,
            };
        default:
            return { ...state };
    }
};

export default reducer;


