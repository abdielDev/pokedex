import React from 'react';
import Layout from '../layouts/Layout';
import Header from '../components/Header';
import PokemonList from '../containers/PokemonList';

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <PokemonList />
      </Layout>
    </>
  );
};

export default App;