import React from 'react';
import { capitalize } from './services/utils';

export default function Pokemon({ pokemon }) {

  return (
    <div className='pokemon-card'>
      <h3>{ capitalize(pokemon.pokemon) }</h3>
      <img src={ pokemon.url_image }/>
      <p>Type I: {capitalize(pokemon.type_1)}</p>
      <p>Type II: {capitalize(pokemon.type_2)}</p>
      <p>Gen {pokemon.generation_id} </p>
    </div>
  );
}
