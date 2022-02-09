import React from 'react';
import { fetchAllPokemon } from './services/fetch-utils';
import PokemonList from './PokemonList';


export default function Home() {
  

  return (
    <div>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
