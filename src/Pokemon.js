import React from 'react';

export default function Pokemon({ pokemon }) {

  function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <div className='pokemon-card'>
      <h3>{ capitalize(pokemon.pokemon) }</h3>
      <img src={ pokemon.url_image }/>
      <p>Gen {pokemon.generation_id} </p>
    </div>
  );
}
