import React from 'react';
import pokeball from '../assets/images/pokebola.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="imgContainer">
        <img src={ pokeball } alt="Pokeball" />
        <h1>Pokemon</h1>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <h3>Pokedex</h3>
          </li>
          <li>
            <h3>Explorar</h3>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;