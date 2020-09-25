import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/pokemons">
              <h3>Pokemones</h3>
            </Link>
          </li>
          <li>
            <Link to="/">
              <h3>Explorar</h3>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;