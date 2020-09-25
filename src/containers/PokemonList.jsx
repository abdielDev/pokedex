import React, { useEffect, useState } from 'react';
import { getPokemons } from '../actions/pokemonsActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PokemonList = ({ error, loading, pokemons, getPokemons }) => {
  const [alternLoading, setLoading] = useState(false);
  
  const options = {
    rootMargin: '200px 0px 0px 0px'
  }
  const handleIntersection = (entries, observer) => {
    entries.forEach(async entry => {
      if (entry.isIntersecting) {
        await getPokemons();
        
        observer.unobserve(entry.target);
        const containers = document.querySelectorAll('.pokemon-container');
        const lastContainer = containers[containers.length - 1];
        observer.observe(lastContainer);
      }
    })
  }
  const observer = new IntersectionObserver(handleIntersection, options);
  useEffect(() => {
    const getData = async () => {
      if (pokemons.length < 1) {
        setLoading(true);
        await getPokemons();
        setLoading(false);
      }
      const containers = document.querySelectorAll('.pokemon-container');
      const lastContainer = containers[containers.length - 1];
      if (lastContainer) {
        observer.observe(lastContainer);
        return () => {
          observer.unobserve(lastContainer);
        }
      }
    }

    getData();
  }, [])
  return (
    <div className="pokemonList-container">
      <h1>Pokemones</h1>
      <ul className="pokemonList">
        {!alternLoading && pokemons.map((pokemon, index) => (
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