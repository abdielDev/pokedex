import React, { useEffect } from 'react';
import { getPokemons } from '../actions/pokemonsActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PokemonList = ({ error, loading, pokemons, getPokemons }) => {
  useEffect(() => {
    getPokemons();
  }, [])
  return (
    <div className="pokemonList-container">
      <h1>Pokemones</h1>
      <ul className="pokemonList">
        {!loading && pokemons.map((pokemon, index) => (
          <li key={ index + 1 } className="pokemon-container">
            <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png` } alt={ pokemon.name } />
            <h4>{ pokemon.name }</h4>
          </li>
        ))}
        {loading && <h1>Cargando...</h1>}
        {error && <h1>{error}</h1>}
      </ul>
    </div>
  );
};

PokemonList.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  pokemons: PropTypes.array,
  getPokemons: PropTypes.func,
};

const mapStateToProps = (reducers) => {
  return {
    pokemons: reducers.pokemonsReducer.pokemons,
    loading: reducers.pokemonsReducer.loading,
    error: reducers.pokemonsReducer.error,
  }
};

const mapDispatchToProps = {
  getPokemons,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);