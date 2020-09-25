import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPokemonById, savePokemons } from '../actions/pokemonsActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PokemonDetails = ({ pokemon, loading, error, getPokemonById, savePokemons, savedPokemons }) => {
  const { id } = useParams();
  useEffect(() => {
    getPokemonById(id);
  }, [])

  const handleClick = (pokemon) => {
    savePokemons(pokemon);
  };

  return (
    <div className="pokemonDetails">
      <h1>Detalles</h1>
      {loading ? <h1>Cargando...</h1> :
        <>
          <div className="pokemonDetails-container">
            <div className="left">
              <h2>{pokemon.name}</h2>
              <h3>Height: {pokemon.height}</h3>
              <h3>Weight: {pokemon.weight}</h3>
              <h3>Type:</h3>
              {pokemon?.types?.map(type => <h4 key={ type.slot }>{type.type.name}</h4>)}
            </div>
            <div className="right">
              <img src={ pokemon?.sprites?.other?.dream_world?.front_default } alt={ pokemon.name } />
            </div>
          </div>
          {!(savedPokemons.some(savedPokemon => pokemon.name === savedPokemon.name)) && <Link to="/pokemons" className="button" onClick={ () => handleClick(pokemon) }>Guardar</Link>}
        </>
      }
      {error && <h1>Ocurrio un error</h1>}
    </div>
  );
};

PokemonDetails.propTypes = {
  pokemon: PropTypes.object,
  savedPokemons: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  getPokemonById: PropTypes.func,
  savePokemons: PropTypes.func,
}

const mapStateToProps = (reducers) => {
  return {
    pokemon: reducers.pokemonsReducer.pokemon,
    loading: reducers.pokemonsReducer.loading,
    error: reducers.pokemonsReducer.error,
    savedPokemons: reducers.pokemonsReducer.savedPokemons,
  }
};

const mapDispatchToProps = {
  getPokemonById,
  savePokemons,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);