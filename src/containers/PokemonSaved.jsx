import React from 'react';
import { deletePokemons } from '../actions/pokemonsActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PokemonSaved = ({ savedPokemons, deletePokemons }) => {
  return (
    <div className="pokemonSaved">
      <div className="pokemonSaved-container">
        <h1>Pokemones guardados</h1>
        <ul className="pokemonSaved-divider">
          {savedPokemons.length ? savedPokemons.map((savedPokemon, index) => (
            <li key={ savedPokemon.id } className="pokemon-container">
              <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${savedPokemon.id}.png` } alt={ savedPokemon.name } />
              <h4>{ savedPokemon.name }</h4>
              <button onClick={ () => deletePokemons(index) } className="button-border">Eliminar</button>
            </li>
          )) : <h2>No tienes pokemones ve a capturarlos</h2>}
        </ul>
      </div>
    </div>
  );
};

PokemonSaved.propTypes = {
  savedPokemons: PropTypes.array,
  deletePokemons: PropTypes.func,
};

const mapStateToProps = (reducers) => {
  return {
    savedPokemons: reducers.pokemonsReducer.savedPokemons
  }
};

const mapDispatchToProps = {
  deletePokemons,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSaved);