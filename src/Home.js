import React, { useEffect, useState } from 'react';
import { fetchAllPokemon } from './services/fetch-utils';
import PokemonList from './PokemonList';


export default function Home() {
  // set up state
  const [pokemans, setPokemans] = useState([]);

  useEffect(() => {
    async function fetch() {
      setPokemans(await fetchAllPokemon());
    }

    fetch();
  }, []);

  return (
    <div>
      <PokemonList pokemans={pokemans} />
    </div>
  );
}
