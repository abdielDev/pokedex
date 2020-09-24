import React from 'react';
import Layout from '../layouts/Layout';
import Header from '../components/Header';
import PokemonList from '../containers/PokemonList';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PokemonSaved from '../containers/PokemonSaved';

const App = () => {
  return (
    <Router history={ createBrowserHistory() }>
      <Header />
      <Layout>
        <Switch>
          <Route exact path="/" component={ PokemonList } />
          <Route exact path="/pokemons" component={ PokemonSaved } />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;