import { GET_POKEMONS, LOADING, ERROR, SAVE_POKEMONS, DELETE_POKEMONS } from '../types/pokemonsTypes';

export const getPokemons = () => async (dispatch, getState) => {
  dispatch({
    type: LOADING
  });
  try {
    const nexURL = getState().pokemonsReducer.nextURL;
    const URL = 'https://pokeapi.co/api/v2/pokemon/';
    const response = await fetch(nexURL || URL);
    const body = await response.json();
    dispatch({
      type: GET_POKEMONS,
      payload: body
    });
  } catch {
    dispatch({ type: ERROR, payload: 'Ocurrió un error' });
  }
  
};

export const savePokemons = (pokemon) => (dispatch) => {
  dispatch({
    type: SAVE_POKEMONS,
    payload: pokemon
  });
};

export const deletePokemons = (index) => (dispatch, getState) => {
  const { savedPokemons } = getState().pokemonsReducer;
  const newArray = savedPokemons.filter((savedPokemon, currentIndex) => {
    if (currentIndex !== index) {
      return savedPokemon
    }
  });
  dispatch({
    type: DELETE_POKEMONS,
    payload: newArray
  });
};