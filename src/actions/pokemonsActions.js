import { GET_POKEMONS, LOADING, ERROR } from '../types/pokemonsTypes';

export const getPokemons = () => async (dispatch, getState) => {
  dispatch({
    type: LOADING
  });
  const nexURL = getState().pokemonsReducer.nextURL;
  const URL = 'https://pokeapi.co/api/v2/pokemon/';
  fetch(nexURL || URL)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: GET_POKEMONS,
        payload: data
      });
    })
    .catch(error => dispatch({ type: ERROR, payload: 'Ocurrió un error' }));
};