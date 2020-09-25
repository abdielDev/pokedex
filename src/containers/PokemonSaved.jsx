import React from 'react';

const PokemonSaved = () => {
  return (
    <div className="pokemonSaved">
      <div className="pokemonSaved-container">
        <h1>Pokemons saved</h1>
        <ul className="pokemonSaved-divider">
          <li className="pokemon-container">
            <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png` } alt="" />
            <h4>Bulbasaur</h4>
          </li>
          <li className="pokemon-container">
            <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png` } alt="" />
            <h4>Bulbasaur</h4>
          </li>
          <li className="pokemon-container">
            <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png` } alt="" />
            <h4>Bulbasaur</h4>
          </li>
          <li className="pokemon-container">
            <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png` } alt="" />
            <h4>Bulbasaur</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PokemonSaved;