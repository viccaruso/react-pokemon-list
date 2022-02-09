import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonList({ pokemans }) {
  return (
    <div className='pokemon-list'>
      {pokemans.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
    </div>
  );
}
