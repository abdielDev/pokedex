import React from 'react';

const PokemonList = () => {
  return (
    <div className="pokemonList">
      <ul className="pokemonList-container">
        <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="" /></li>
        <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="" /></li>
        <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="" /></li>
        <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="" /></li>
        <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" alt="" /></li>
      </ul>
    </div>
  );
};

export default PokemonList;