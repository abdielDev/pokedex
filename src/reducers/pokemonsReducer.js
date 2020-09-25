import { GET_POKEMONS, LOADING, ERROR, SAVE_POKEMONS, DELETE_POKEMONS } from '../types/pokemonsTypes';

const INITIAL_STATE = {
  pokemons: [],
  savedPokemons: [],
  loading: false,
  error: '',
  nextURL: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_POKEMONS:
    return {
      ...state,
      pokemons: [
        ...state.pokemons,
        ...action.payload.results,
      ],
      nextURL: action.payload.next ?? '',
      error: '',
      loading: false,
    };
  case SAVE_POKEMONS:
    return {
      ...state,
      savedPokemons: [
        ...state.savedPokemons,
        action.payload
      ]
    }
  case DELETE_POKEMONS:
    return {
      ...state,
      savedPokemons: action.payload
    }
  case LOADING:
    return {
      ...state,
      loading: true
    };
  case ERROR:
    return {
      ...state,
      error: action.payload,
      loading: false
    };
  default: return state;
  }
}